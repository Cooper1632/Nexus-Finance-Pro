import express from 'express';
import cors from 'cors';
import YahooFinance from 'yahoo-finance2'; // Import default which IS the class
import dotenv from 'dotenv';

// Configuration des variables d'environnement
dotenv.config();

const yahooFinance = new YahooFinance(); // Instanciation explicite demandée par l'erreur

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// --- Route Yahoo Finance (Proxy) ---
app.get('/api/yahoo/quote/:symbol', async (req, res) => {
    // On met en majuscule (ex: ry.to -> RY.TO)
    const symbol = req.params.symbol.toUpperCase();
    console.log(`📡 Recherche Yahoo pour: ${symbol}`);

    try {
        // En mode 'import', on appelle directement yahooFinance.quote
        const quote = await yahooFinance.quote(symbol);

        if (!quote) {
            console.warn(`⚠️ Aucun résultat pour ${symbol}`);
            return res.status(404).json({ error: 'Symbole non trouvé' });
        }

        // Sécurisation du prix pour le Frontend
        const regularPrice = quote.regularMarketPrice || quote.price;

        if (regularPrice === undefined) {
            throw new Error("Prix introuvable dans la réponse Yahoo");
        }

        const responseData = {
            ...quote,
            regularMarketPrice: regularPrice
        };

        console.log(`✅ Succès ${symbol} : $${responseData.regularMarketPrice}`);
        res.json(responseData);

    } catch (error) {
        console.error(`❌ Erreur Yahoo sur ${symbol}:`, error.message);
        res.status(500).json({
            error: 'Erreur lors de la récupération Yahoo',
            details: error.message
        });
    }
});

// --- Route Yahoo Finance (Historique) ---
app.get('/api/yahoo/history', async (req, res) => {
    const { symbol = '^GSPC', from, to } = req.query;
    console.log(`📡 Recherche Historique Yahoo pour: ${symbol} du ${from} au ${to}`);

    try {
        if (!from || !to) {
            return res.status(400).json({ error: 'Dates manquantes (from, to)' });
        }

        const queryOptions = {
            period1: from, // YYYY-MM-DD
            period2: to,   // YYYY-MM-DD
            interval: '1d' // Journalier
        };

        const result = await yahooFinance.historical(symbol, queryOptions);

        if (!result || result.length === 0) {
            console.warn(`⚠️ Aucun historique pour ${symbol}`);
            return res.json([]);
        }

        // Simplifier la réponse
        const history = result.map(day => ({
            date: day.date.toISOString().split('T')[0],
            close: day.close,
            adjClose: day.adjClose
        }));

        console.log(`✅ Historique trouvé : ${history.length} points`);
        res.json(history);

    } catch (error) {
        console.error(`❌ Erreur Historique Yahoo:`, error.message);
        res.status(500).json({ error: 'Erreur récupération historique', details: error.message });
    }
});

// --- Questrade Service (Refresh Token Trap Handling) ---
import fs from 'fs/promises';
import axios from 'axios';
import path from 'path';

const TOKEN_FILE = path.resolve('questrade_token.json');

class QuestradeService {
    constructor() {
        this.tokenData = null;
    }

    async loadToken() {
        try {
            const data = await fs.readFile(TOKEN_FILE, 'utf-8');
            this.tokenData = JSON.parse(data);
            return this.tokenData;
        } catch (e) {
            console.log('ℹ️ Aucun token Questrade trouvé sur le disque.');
            return null;
        }
    }

    async saveToken(data) {
        this.tokenData = data;
        // CRITICAL: Write to disk immediately to survive restart/crash
        await fs.writeFile(TOKEN_FILE, JSON.stringify(data, null, 2));
        console.log('💾 Token Questrade sauvegardé sur le disque.');
    }

    // Échange le token manuel contre un access_token + refresh_token
    async initialize(manualToken) {
        try {
            const url = `https://login.questrade.com/oauth2/token?grant_type=refresh_token&refresh_token=${manualToken}`;
            const res = await axios.get(url);
            await this.saveToken(res.data);
            return res.data;
        } catch (e) {
            console.error('❌ Erreur init Questrade:', e.response?.data || e.message);
            throw new Error('Échec de l\'initialisation Questrade');
        }
    }

    async refreshAccessToken() {
        if (!this.tokenData || !this.tokenData.refresh_token) {
            throw new Error('Pas de refresh token disponible.');
        }

        try {
            const url = `https://login.questrade.com/oauth2/token?grant_type=refresh_token&refresh_token=${this.tokenData.refresh_token}`;
            console.log('🔄 Rafraîchissement du token Questrade...');
            const res = await axios.get(url);

            // CRITICAL: Update immediately !
            await this.saveToken(res.data);
            return res.data;
        } catch (e) {
            console.error('❌ Erreur refresh Questrade:', e.response?.data || e.message);
            throw e;
        }
    }

    async getValidToken() {
        // Charge si nécessaire
        if (!this.tokenData) await this.loadToken();

        // Simple check: si on a un token, on essaie de l'utiliser. 
        // Idéalement, on vérifie l'expiration "expires_in", mais Questrade invalide vite.
        // Stratégie robuste : On tente le refresh si l'appel API échoue (401), ou pro-activement si on sait qu'il est vieux.
        // Ici, pour simplifier et éviter le "Trap", on refresh systématiquement si on a un doute, 
        // ou on retourne l'actuel et on gère l'erreur 401 dans l'appelant. 
        // OPTION CHOISIE : On refresh uniquement si expiré ou sur 401. 
        // Pour l'instant, retournons les données brutes, l'appelant gérera.
        return this.tokenData;
    }
}

const questradeService = new QuestradeService();

// --- Routes Questrade ---

// 1. Initialisation avec Token Manuel (depuis UI)
app.post('/api/questrade/init', async (req, res) => {
    const { manualToken } = req.body;
    if (!manualToken) return res.status(400).json({ error: 'Token manquant' });

    try {
        const data = await questradeService.initialize(manualToken);
        res.json({ success: true, api_server: data.api_server });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// 2. Fetch Portfolio (avec Auto-Refresh)
app.get('/api/questrade/portfolio', async (req, res) => {
    try {
        let tokenData = await questradeService.getValidToken();
        if (!tokenData) return res.status(401).json({ error: 'Non connecté' });

        // Tentaive d'appel
        // L'URL de l'API dépend du token (api_server)
        const apiUrl = `${tokenData.api_server}v1/accounts`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { Authorization: `${tokenData.token_type} ${tokenData.access_token}` }
            });
            res.json(response.data);
        } catch (apiError) {
            // Si 401, le token est probablement expiré => Refresh et Retry
            if (apiError.response && apiError.response.status === 401) {
                console.warn('⚠️ Token expiré (401), tentative de refresh...');
                tokenData = await questradeService.refreshAccessToken();

                // Retry avec nouveau token
                const retryUrl = `${tokenData.api_server}v1/accounts`;
                const retryRes = await axios.get(retryUrl, {
                    headers: { Authorization: `${tokenData.token_type} ${tokenData.access_token}` }
                });
                res.json(retryRes.data);
            } else {
                throw apiError;
            }
        }
    } catch (e) {
        console.error('Erreur API Questrade:', e.message);
        res.status(500).json({ error: 'Impossible de récupérer les données Questrade' });
    }
});

// Démarrage
app.listen(PORT, () => {
    console.log(`✅ Serveur Backend démarré sur le port ${PORT}`);
});