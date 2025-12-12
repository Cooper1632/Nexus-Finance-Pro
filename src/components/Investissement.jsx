import React, { useState, useMemo, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation, Trans } from 'react-i18next';
import CurrencyInput from './CurrencyInput';
import TransactionModal from './TransactionModal';
import DepositModal from './DepositModal';
import WatchlistModal from './WatchlistModal';
import DiagnosticModal from './DiagnosticModal';
import PerformanceModal from './PerformanceModal';
import HoldingDetailsModal from './HoldingDetailsModal';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    PointElement
} from 'chart.js';
import { Doughnut, Bubble } from 'react-chartjs-2';
import {
    Cog6ToothIcon,
    ArrowPathIcon,
    PlusIcon,
    StarIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    TrashIcon,
    FunnelIcon,
    ChartBarIcon,
    ArchiveBoxXMarkIcon,
    InformationCircleIcon,
    LightBulbIcon,
    SparklesIcon,
    BoltIcon,
    MoonIcon,
    ExclamationCircleIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement);

const formatPrecise = (val, currency = '$') => {
    if (val === undefined || val === null || isNaN(val)) return '-';
    return new Intl.NumberFormat('fr-CA', {
        style: 'currency',
        currency: currency === 'UNIT' ? 'CAD' : 'CAD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    }).format(val).replace('CA$', currency === 'UNIT' ? '' : '$');
};

const hexToRgba = (hex, alpha) => {
    if (!hex || !hex.startsWith('#')) return `rgba(128, 128, 128, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const STOCK_COLORS = ['#3498DB', '#E74C3C', '#9B59B6', '#F1C40F', '#1ABC9C', '#2C3E50', '#D35400', '#27AE60', '#8E44AD', '#2980B9', '#C0392B', '#16A085', '#F39C12', '#7F8C8D', '#E67E22'];
const PASTEL_PALETTE = ['#F7DC6F', '#85C1E9', '#82E0AA', '#D2B4DE', '#F1948A', '#A3E4D7', '#F0B27A', '#D7BDE2', '#AEB6BF', '#76D7C4'];

const styles = {
    kpiCard: {
        backgroundColor: 'var(--card-background)',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        flex: 1,
        minWidth: '150px'
    },
    kpiTitle: {
        fontSize: '0.85rem',
        color: 'var(--secondary-color)',
        marginBottom: '5px',
        fontWeight: '600'
    },
    kpiValue: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: 'var(--text-color)'
    },
    toolbar: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '20px'
    },
    actionBtn: (color, textColor) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 18px',
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.05)',
        backgroundColor: color,
        color: textColor,
        fontWeight: '600',
        cursor: 'pointer',
        fontSize: '0.9rem',
        transition: 'all 0.2s',
        height: '42px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }),
    iconOnlyBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        minWidth: '32px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        padding: 0,
        flexShrink: 0
    },
    holdingCard: (color) => ({
        backgroundColor: 'var(--card-background)',
        border: `2px solid ${color}`,
        borderLeft: `10px solid ${color}`,
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '10px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        alignItems: 'center',
        gap: '15px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }),
    priceInput: {
        backgroundColor: '#FEF9E7',
        border: '1px solid #F39C12',
        borderRadius: '4px',
        padding: '5px',
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#333'
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(2px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: 'var(--card-background)',
        color: 'var(--text-color)',
        position: 'relative',
        zIndex: 2001,
        padding: '25px',
        borderRadius: '12px',
        width: '90%',
        maxWidth: '500px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        maxHeight: '85vh',
        overflowY: 'auto'
    },
    sortableTh: {
        padding: '10px',
        textAlign: 'left',
        cursor: 'pointer',
        userSelect: 'none',
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--invest-color)',
        color: 'black',
        zIndex: 20
    },
    fixedTh: {
        padding: '10px',
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--invest-color)',
        color: 'black',
        zIndex: 20
    }
};

const BubbleHelp = ({ t }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ position: 'relative', display: 'inline-block', marginLeft: '8px' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                title={t('common.help')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--info-color)', padding: 0, display: 'flex' }}
            >
                <InformationCircleIcon style={{ width: '20px' }} />
            </button>
            {isOpen && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 998 }} onClick={() => setIsOpen(false)}></div>
                    <div style={{
                        position: 'absolute', bottom: '130%', left: '50%', transform: 'translateX(-50%)',
                        width: '340px', backgroundColor: '#34495E', color: 'white', padding: '15px', borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)', zIndex: 999, fontSize: '0.85rem', lineHeight: '1.5', textAlign: 'left'
                    }}>
                        <h4 style={{ marginTop: 0, marginBottom: '10px', color: '#F1C40F', display: 'flex', alignItems: 'center', gap: '5px', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '5px' }}>
                            <LightBulbIcon style={{ width: '16px' }} /> Guide
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '8px', borderRadius: '6px', border: '1px solid #2ECC71' }}>
                                <div style={{ color: '#2ECC71', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                                    <SparklesIcon style={{ width: '14px' }} /> {t('investment.bubble_excellence')}
                                </div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>{t('investment.bubble_top_left')}</div>
                            </div>
                            <div style={{ background: 'rgba(52, 152, 219, 0.15)', padding: '8px', borderRadius: '6px', border: '1px solid #3498DB' }}>
                                <div style={{ color: '#3498DB', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                                    <BoltIcon style={{ width: '14px' }} /> {t('investment.bubble_engine')}
                                </div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>{t('investment.bubble_top_right')}</div>
                            </div>
                            <div style={{ background: 'rgba(149, 165, 166, 0.15)', padding: '8px', borderRadius: '6px', border: '1px solid #95A5A6' }}>
                                <div style={{ color: '#BDC3C7', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                                    <MoonIcon style={{ width: '14px' }} /> {t('investment.bubble_sleeper')}
                                </div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>{t('investment.bubble_bottom_left')}</div>
                            </div>
                            <div style={{ background: 'rgba(231, 76, 60, 0.15)', padding: '8px', borderRadius: '6px', border: '1px solid #E74C3C' }}>
                                <div style={{ color: '#E74C3C', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                                    <ExclamationCircleIcon style={{ width: '14px' }} /> {t('investment.bubble_danger')}
                                </div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>{t('investment.bubble_bottom_right')}</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default function Investissement() {
    const { appState, saveGlobalState, formatCurrency } = useData();
    const { t } = useTranslation();
    const currency = appState.settings?.currentCurrency || 'CAD';

    const investmentData = appState.investment || appState.investissement || {
        transactions: [], prices: {}, deposits: [], watchlist: [], snapshots: []
    };

    // --- SÉCURITÉ : Valeurs par défaut pour éviter le crash ---
    const {
        transactions = [],
        prices = {},
        deposits = [],
        watchlist = [],
        snapshots = []
    } = investmentData || {};

    const [showTransactionModal, setShowTransactionModal] = useState(false);
    const [transactionToEdit, setTransactionToEdit] = useState(null);
    const [showConfigModal, setShowConfigModal] = useState(false);
    const [showPerformanceModal, setShowPerformanceModal] = useState(false);
    const [showWatchlistModal, setShowWatchlistModal] = useState(false);
    const [showDiagnosticModal, setShowDiagnosticModal] = useState(false);
    const [showToolsMenu, setShowToolsMenu] = useState(false);

    const [showHoldingDetailsModal, setShowHoldingDetailsModal] = useState(false);
    const [selectedHoldingSymbol, setSelectedHoldingSymbol] = useState(null);

    // --- NOUVELLE GESTION DES ÉTATS DE CHARGEMENT ---
    const [isGlobalLoading, setIsGlobalLoading] = useState(false); // Pour le bouton "Actualiser tout"
    const [updatingHoldings, setUpdatingHoldings] = useState(new Set()); // Pour gérer plusieurs boutons individuels

    const [apiKey, setApiKey] = useState(localStorage.getItem('alphaVantageApiKey') || appState.settings?.investmentParams?.apiKey || '');
    const [dataSource, setDataSource] = useState(appState.settings?.investmentParams?.dataSource || 'alphaVantage');
    const [questradeToken, setQuestradeToken] = useState(''); // État pour le token manuel Questrade
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

    // Calcul du portefeuille
    const portfolio = useMemo(() => {
        const h = {};
        let totalVal = 0, totalCost = 0;
        let firstBuyDate = null;
        const sortedTx = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));

        sortedTx.forEach(tx => {
            if (!h[tx.symbol]) {
                h[tx.symbol] = {
                    symbol: tx.symbol,
                    quantity: 0,
                    totalCost: 0,
                    totalFees: 0,
                    firstBuy: null,
                    account: tx.account
                };
            }
            const holding = h[tx.symbol];

            if (tx.type === 'buy') {
                if (!holding.firstBuy) holding.firstBuy = tx.date;
                if (!firstBuyDate || new Date(tx.date) < new Date(firstBuyDate)) firstBuyDate = tx.date;
                holding.quantity += parseFloat(tx.quantity);
                holding.totalCost += (parseFloat(tx.quantity) * parseFloat(tx.price)) + parseFloat(tx.fees);
            } else if (tx.type === 'sell') {
                if (holding.quantity > 0) {
                    const avgCost = holding.totalCost / holding.quantity;
                    holding.totalCost -= (parseFloat(tx.quantity) * avgCost);
                }
                holding.quantity -= parseFloat(tx.quantity);
            }
        });

        const activeSymbols = Object.keys(h).filter(sym => h[sym].quantity > 0.0001).sort();
        const symbolColors = {};
        activeSymbols.forEach((sym, index) => {
            symbolColors[sym] = STOCK_COLORS[index % STOCK_COLORS.length];
        });

        const activeHoldings = [];
        Object.values(h).forEach(item => {
            if (item.quantity > 0.0001) {
                const currentPrice = prices[item.symbol] || (item.totalCost / item.quantity);
                const val = item.quantity * currentPrice;
                const gain = val - item.totalCost;
                const ret = item.totalCost > 0 ? (gain / item.totalCost * 100) : 0;

                totalVal += val;
                totalCost += item.totalCost;

                activeHoldings.push({
                    ...item,
                    currentPrice,
                    value: val,
                    gain,
                    returnPct: ret,
                    avgPrice: item.totalCost / item.quantity,
                    color: symbolColors[item.symbol]
                });
            }
        });

        let cagr = 0;
        let isSimpleReturn = false;
        if (firstBuyDate && totalCost > 0) {
            const years = (new Date() - new Date(firstBuyDate)) / (1000 * 60 * 60 * 24 * 365.25);
            if (years < 1) {
                cagr = totalCost > 0 ? ((totalVal - totalCost) / totalCost * 100) : 0;
                isSimpleReturn = true;
            } else {
                cagr = (Math.pow(totalVal / totalCost, 1 / years) - 1) * 100;
            }
        }

        return {
            holdings: activeHoldings,
            totalVal,
            totalCost,
            totalGain: totalVal - totalCost,
            totalReturn: totalCost > 0 ? (totalVal - totalCost) / totalCost * 100 : 0,
            cagr,
            isSimpleReturn,
            symbolColors
        };
    }, [transactions, prices]);

    const sortedTransactionsDisplay = useMemo(() => {
        let data = [...transactions];
        if (sortConfig.key) {
            data.sort((a, b) => {
                let valA = a[sortConfig.key], valB = b[sortConfig.key];
                if (sortConfig.key === 'date') { valA = new Date(valA); valB = new Date(b.date); }
                else if (typeof valA === 'string') { valA = valA.toLowerCase(); valB = valB.toLowerCase(); }

                if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
                if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return data;
    }, [transactions, sortConfig]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
        setSortConfig({ key, direction });
    };

    const getSortArrow = (key) => {
        if (sortConfig.key !== key) return null;
        return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
    };

    const handlePriceChange = (symbol, newPrice) => {
        const val = parseFloat(newPrice); if (isNaN(val)) return;
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.investment) newState.investment = {};
        if (!newState.investment.prices) newState.investment.prices = {};
        newState.investment.prices[symbol] = val;
        saveGlobalState(newState);
    };

    // --- FONCTION : Actualiser UN SEUL titre (Bouton Individuel) ---
    const refreshSingleStockPrice = async (symbol) => {
        if (dataSource === 'alphaVantage' && !apiKey) return alert(t('investment.config_required'));

        // Ajoute ce symbole au Set des éléments en cours de chargement
        setUpdatingHoldings(prev => new Set(prev).add(symbol));

        try {
            let price = null;
            if (dataSource === 'yahoo') {
                const res = await fetch(`http://localhost:3001/api/yahoo/quote/${symbol}`);
                const data = await res.json();
                price = data.regularMarketPrice || data.price;
            } else {
                const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`);
                const data = await res.json();
                price = data['Global Quote']?.['05. price'];
            }

            if (price) {
                const newState = JSON.parse(JSON.stringify(appState));
                if (!newState.investment) newState.investment = {};
                if (!newState.investment.prices) newState.investment.prices = {};
                newState.investment.prices[symbol] = parseFloat(price);
                saveGlobalState(newState);
            } else {
                // Silencieux sur erreur individuelle ou petite alerte
                console.warn(`Impossible de récupérer le prix pour ${symbol}`);
            }
        } catch (e) {
            console.error(e);
            alert(t('investment.api_error'));
        } finally {
            // Retire le symbole du Set une fois fini
            setUpdatingHoldings(prev => {
                const next = new Set(prev);
                next.delete(symbol);
                return next;
            });
        }
    };

    // --- FONCTION : Actualiser TOUT (Bouton Global) ---
    const handleRefreshAll = async () => {
        if (dataSource === 'alphaVantage' && !apiKey) return alert(t('investment.config_required'));
        if (isGlobalLoading) return;

        setIsGlobalLoading(true); // Active le loading global

        const uniqueSymbols = [...new Set(portfolio.holdings.map(h => h.symbol))];
        const newPrices = {};
        let errors = 0; let successCount = 0;

        for (const symbol of uniqueSymbols) {
            // On peut optionnellement montrer visuellement que ce titre spécifique est en train d'être traité
            // setUpdatingHoldings(prev => new Set(prev).add(symbol)); 

            try {
                let price = null;
                if (dataSource === 'yahoo') {
                    const res = await fetch(`http://localhost:3001/api/yahoo/quote/${symbol}`);
                    const data = await res.json();
                    price = data.regularMarketPrice || data.price;
                } else {
                    const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`);
                    const data = await res.json();
                    price = data['Global Quote']?.['05. price'];
                }

                if (price) {
                    newPrices[symbol] = parseFloat(price);
                    successCount++;
                } else {
                    errors++;
                }
            } catch (e) { errors++; }

            // setUpdatingHoldings(prev => { const next = new Set(prev); next.delete(symbol); return next; });

            // IMPORTANT : Délai pour Alpha Vantage (limite API)
            await new Promise(r => setTimeout(r, 1000));
        }

        if (Object.keys(newPrices).length > 0) {
            const newState = JSON.parse(JSON.stringify(appState));
            if (!newState.investment) newState.investment = {};
            if (!newState.investment.prices) newState.investment.prices = {};
            newState.investment.prices = { ...newState.investment.prices, ...newPrices };
            saveGlobalState(newState);
        }

        setIsGlobalLoading(false); // Désactive le loading global
        if (errors > 0) alert(t('investment.refresh_success', { success: successCount, errors: errors }));
    };

    const handleClearPriceCache = () => {
        if (window.confirm(t('investment.confirm_clear_prices'))) {
            const newState = JSON.parse(JSON.stringify(appState));
            newState.investment.prices = {};
            saveGlobalState(newState);
        }
    };

    const handleConnectQuestrade = () => {
        window.location.href = 'http://localhost:3001/api/questrade/auth';
    };

    const handleInitQuestrade = async () => {
        if (!questradeToken) return alert(t('invest.alert_token_required'));
        try {
            const res = await fetch('http://localhost:3001/api/questrade/init', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ manualToken: questradeToken })
            });
            const data = await res.json();
            if (data.success) {
                alert("✅ Connexion Questrade établie avec succès !");
                setQuestradeToken('');
            } else {
                alert("❌ Erreur : " + data.error);
            }
        } catch (e) {
            alert("❌ Erreur réseau : Vérifiez que le serveur backend tourne.");
        }
    };

    const saveConfig = () => {
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.settings.investmentParams) newState.settings.investmentParams = {};
        newState.settings.investmentParams.apiKey = apiKey;
        newState.settings.investmentParams.dataSource = dataSource;
        saveGlobalState(newState);
        localStorage.setItem('alphaVantageApiKey', apiKey);
        setShowConfigModal(false);
    };

    const handleSaveTransaction = (tx) => {
        const newState = JSON.parse(JSON.stringify(appState));

        // --- SÉCURITÉ : Initialisation des objets si vides ---
        if (!newState.investment) {
            newState.investment = {};
        }
        if (!newState.investment.transactions) {
            newState.investment.transactions = [];
        }
        // ----------------------------------------------------

        if (tx.id) {
            const idx = newState.investment.transactions.findIndex(t => t.id === tx.id);
            if (idx !== -1) newState.investment.transactions[idx] = tx;
        } else {
            tx.id = Date.now().toString();
            newState.investment.transactions.push(tx);
        }
        saveGlobalState(newState);
        setShowTransactionModal(false);
    };

    const deleteTransaction = (id) => {
        if (!window.confirm(t('common.confirm_delete'))) return;
        const newState = JSON.parse(JSON.stringify(appState));
        newState.investment.transactions = newState.investment.transactions.filter(t => t.id !== id);
        saveGlobalState(newState);
    };

    const handleOpenHoldingDetails = (symbol) => {
        setSelectedHoldingSymbol(symbol);
        setShowHoldingDetailsModal(true);
    };

    const handleEditFromHoldingDetails = (tx) => {
        setShowHoldingDetailsModal(false);
        setTransactionToEdit(tx);
        setShowTransactionModal(true);
    };

    const handleDeleteFromHoldingDetails = (id) => {
        deleteTransaction(id);
    };

    const handleSaveDeposit = (deposit) => {
        const newState = JSON.parse(JSON.stringify(appState));
        const idx = newState.investment.deposits.findIndex(d => d.id === deposit.id);
        if (idx !== -1) newState.investment.deposits[idx] = deposit;
        else newState.investment.deposits.push(deposit);
        saveGlobalState(newState);
    };

    const handleDeleteDeposit = (id) => {
        if (!window.confirm(t('common.confirm_delete'))) return;
        const newState = JSON.parse(JSON.stringify(appState));
        newState.investment.deposits = newState.investment.deposits.filter(d => d.id !== id);
        saveGlobalState(newState);
    };

    const handleDeleteMultipleDeposits = (ids) => {
        if (!window.confirm(t('common.confirm_delete'))) return;
        const newState = JSON.parse(JSON.stringify(appState));
        newState.investment.deposits = newState.investment.deposits.filter(d => !ids.includes(d.id));
        saveGlobalState(newState);
    };

    const handleSaveWatchlist = (item) => {
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.investment.watchlist) newState.investment.watchlist = [];
        const index = newState.investment.watchlist.findIndex(i => i.id === item.id);
        if (index !== -1) newState.investment.watchlist[index] = item;
        else newState.investment.watchlist.push(item);
        saveGlobalState(newState);
    };

    const handleDeleteWatchlist = (id) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.investment.watchlist = newState.investment.watchlist.filter(i => i.id !== id);
        saveGlobalState(newState);
    };

    const handleSaveSnapshot = (snap) => {
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.investment.snapshots) newState.investment.snapshots = [];
        const index = newState.investment.snapshots.findIndex(s => s.id === snap.id);
        if (index !== -1) { newState.investment.snapshots[index] = snap; }
        else { newState.investment.snapshots.push(snap); }
        saveGlobalState(newState);
    };

    const handleDeleteSnapshot = (id) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.investment.snapshots = newState.investment.snapshots.filter(s => s.id !== id);
        saveGlobalState(newState);
    };

    const handleDeleteMultipleSnapshots = (ids) => {
        if (!window.confirm(t('common.confirm_delete'))) return;
        const newState = JSON.parse(JSON.stringify(appState));
        newState.investment.snapshots = newState.investment.snapshots.filter(s => !ids.includes(s.id));
        saveGlobalState(newState);
    };

    const donutData = {
        labels: portfolio.holdings.map(h => h.symbol),
        datasets: [{
            data: portfolio.holdings.map(h => h.value),
            backgroundColor: portfolio.holdings.map((_, i) => PASTEL_PALETTE[i % PASTEL_PALETTE.length]),
            borderWidth: 1
        }]
    };

    const bubbleData = {
        datasets: [
            {
                label: 'Portefeuille',
                data: portfolio.holdings.map(h => ({
                    x: h.totalCost,
                    y: h.returnPct,
                    r: portfolio.totalVal > 0 ? Math.min(50, Math.max(5, (h.value / portfolio.totalVal) * 50)) : 10,
                    holding: h
                })),
                backgroundColor: portfolio.holdings.map(h => hexToRgba(h.color, 0.6)),
                borderColor: portfolio.holdings.map(h => h.color),
                borderWidth: 2,
                order: 2
            },
            {
                label: 'Centre',
                data: portfolio.holdings.map(h => ({ x: h.totalCost, y: h.returnPct, r: 3, holding: h })),
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderColor: 'white',
                borderWidth: 1,
                order: 1,
                pointHitRadius: 0,
                pointHoverRadius: 0,
                hoverRadius: 0,
                tooltip: { enabled: false }
            }
        ]
    };

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="module-header-with-reset"><h2>{t('investment.title')}</h2></div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <div style={styles.kpiCard}><div style={styles.kpiTitle}>{t('perf_modal.current_value')}</div><div style={styles.kpiValue}>{formatCurrency(portfolio.totalVal)}</div></div>
                <div style={styles.kpiCard}><div style={styles.kpiTitle}>{t('perf_modal.total_invested')}</div><div style={styles.kpiValue}>{formatCurrency(portfolio.totalCost)}</div></div>
                <div style={styles.kpiCard}><div style={styles.kpiTitle}>{t('perf_modal.gain_loss')}</div><div style={{ ...styles.kpiValue, color: portfolio.totalGain >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{formatCurrency(portfolio.totalGain)}</div></div>
                <div style={styles.kpiCard}><div style={styles.kpiTitle}>{t('dashboard.return')}</div><div style={{ ...styles.kpiValue, color: portfolio.totalReturn >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{portfolio.totalReturn.toFixed(2)}%</div></div>
                <div style={styles.kpiCard}>
                    <div style={styles.kpiTitle}>{t('performance.cagr')}</div>
                    <div style={{ ...styles.kpiValue, color: portfolio.cagr >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{portfolio.cagr.toFixed(2)}%</div>
                    {portfolio.isSimpleReturn && <div style={{ fontSize: '0.7rem', color: '#888' }}>{t('performance.simple')}</div>}
                </div>
            </div>

            <div style={styles.toolbar}>
                {/* BOUTON ACTUALISER TOUT */}
                <button
                    onClick={handleRefreshAll}
                    disabled={isGlobalLoading}
                    style={styles.actionBtn('#85C1E9', '#212F3C')}
                >
                    <ArrowPathIcon style={{ width: '18px', animation: isGlobalLoading ? 'spin 1s linear infinite' : 'none' }} />
                    {isGlobalLoading ? t('investment.refreshing') : t('investment.refresh')}
                </button>

                <button onClick={() => { setTransactionToEdit(null); setShowTransactionModal(true); }} style={styles.actionBtn('#82E0AA', '#145A32')}><PlusIcon style={{ width: '18px' }} /> {t('investment.add_transaction')}</button>
                <button onClick={() => setShowPerformanceModal(true)} style={styles.actionBtn('#D2B4DE', '#4A235A')}><ChartBarIcon style={{ width: '18px' }} /> {t('perf_modal.title')}</button>
                <button onClick={() => setShowWatchlistModal(true)} style={styles.actionBtn('#F7DC6F', '#7D6608')}><StarIcon style={{ width: '18px' }} /> {t('watchlist.title')}</button>

                {/* MENU OUTILS (MOVED TO END) */}
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <button
                        onClick={() => setShowToolsMenu(!showToolsMenu)}
                        style={styles.actionBtn('#F5F5F5', '#333')}
                        title={t('common.tools')}
                    >
                        <Cog6ToothIcon style={{ width: '20px' }} /> {t('common.tools') || "Outils"}
                    </button>
                    {showToolsMenu && (
                        <>
                            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 998 }} onClick={() => setShowToolsMenu(false)}></div>
                            <div style={{
                                position: 'absolute', top: '110%', left: 0,
                                backgroundColor: 'var(--card-background)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '8px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                                zIndex: 999,
                                display: 'flex',
                                flexDirection: 'column',
                                minWidth: '200px',
                                overflow: 'hidden'
                            }}>
                                <button
                                    onClick={() => { setShowConfigModal(true); setShowToolsMenu(false); }}
                                    style={{
                                        padding: '12px 15px', border: 'none', background: 'transparent', textAlign: 'left',
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                                        color: 'var(--text-color)', borderBottom: '1px solid var(--border-color)'
                                    }}
                                >
                                    <Cog6ToothIcon style={{ width: '18px' }} /> {t('header.settings')}
                                </button>
                                <button
                                    onClick={() => { handleClearPriceCache(); setShowToolsMenu(false); }}
                                    style={{
                                        padding: '12px 15px', border: 'none', background: 'transparent', textAlign: 'left',
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                                        color: 'var(--text-color)', borderBottom: '1px solid var(--border-color)'
                                    }}
                                >
                                    <ArchiveBoxXMarkIcon style={{ width: '18px' }} /> {t('investment.clear_cache')}
                                </button>
                                <button
                                    onClick={() => { setShowDiagnosticModal(true); setShowToolsMenu(false); }}
                                    style={{
                                        padding: '12px 15px', border: 'none', background: 'transparent', textAlign: 'left',
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                                        color: 'var(--text-color)'
                                    }}
                                >
                                    <MagnifyingGlassIcon style={{ width: '18px' }} /> {t('investment.diagnose')}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <h3 style={{ marginTop: '30px', color: 'var(--text-color)' }}>{t('investment.holdings')}</h3>
            <div style={{ display: 'grid', gap: '10px' }}>
                {portfolio.holdings.map(h => {
                    // Vérifie si CE titre spécifique est en cours de mise à jour
                    const isRowLoading = updatingHoldings.has(h.symbol);
                    const isAnyLoading = isGlobalLoading || isRowLoading;

                    return (
                        <div key={h.symbol} className="holding-card-container" style={styles.holdingCard(h.color)}>
                            <div><div style={{ fontWeight: 'bold', color: h.color, fontSize: '1.1rem' }}>{h.symbol}</div><div className="card-label" style={{ fontSize: '0.8rem', color: '#888' }}>{t('investment.quantity')}: {h.quantity}</div></div>
                            <div><div className="card-label" style={{ fontSize: '0.8rem', color: '#888' }}>{t('investment.avg_price')}</div><div className="card-value" style={{ fontWeight: 'bold' }}>{formatPrecise(h.avgPrice)}</div></div>
                            <div><div className="card-label" style={{ fontSize: '0.8rem', color: '#888' }}>{t('investment.curr_price')}</div><input type="number" value={h.currentPrice} onChange={(e) => handlePriceChange(h.symbol, e.target.value)} style={styles.priceInput} /></div>
                            <div><div className="card-label" style={{ fontSize: '0.8rem', color: '#888' }}>{t('perf_modal.current_value')}</div><div className="card-value" style={{ fontWeight: 'bold' }}>{formatCurrency(h.value)}</div></div>
                            <div><div className="card-label" style={{ fontSize: '0.8rem', color: '#888' }}>{t('investment.cost')}</div><div className="card-value" style={{ fontWeight: 'bold' }}>{formatCurrency(h.totalCost)}</div></div>
                            <div><div className="card-label" style={{ fontSize: '0.8rem', color: '#888' }}>{t('perf_modal.gain_loss')}</div><div className="card-value" style={{ fontWeight: 'bold', color: h.gain >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{formatCurrency(h.gain)}</div></div>
                            <div><div className="card-label" style={{ fontSize: '0.8rem', color: '#888' }}>{t('dashboard.return')}</div><div className="card-value" style={{ fontWeight: 'bold', color: h.returnPct >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{h.returnPct.toFixed(2)}%</div></div>
                            <div style={{ textAlign: 'right', display: 'flex', gap: '5px', justifyContent: 'flex-end' }}>
                                <button onClick={() => handleOpenHoldingDetails(h.symbol)} style={{ ...styles.iconOnlyBtn, color: 'var(--secondary-color)' }}><PencilIcon style={{ width: '18px' }} /></button>

                                {/* BOUTON ACTUALISER INDIVIDUEL */}
                                <button
                                    onClick={() => refreshSingleStockPrice(h.symbol)}
                                    style={{ ...styles.iconOnlyBtn, color: isAnyLoading ? 'var(--info-color)' : 'var(--info-color)', opacity: isAnyLoading ? 0.5 : 1 }}
                                    disabled={isAnyLoading}
                                    title="Actualiser ce titre"
                                >
                                    <ArrowPathIcon style={{ width: '18px', animation: isRowLoading ? 'spin 1s linear infinite' : 'none' }} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {portfolio.holdings.length > 0 && (
                <div className="investment-charts-grid">
                    <div style={{ height: '350px', textAlign: 'center' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{t('investment.distribution')}</h4>
                        <Doughnut data={donutData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
                    </div>
                    <div style={{ height: '350px', textAlign: 'center' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            {t('investment.performance_bubble')} <BubbleHelp t={t} />
                        </h4>
                        <Bubble
                            data={bubbleData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: { display: false },
                                    tooltip: {
                                        filter: (tooltipItem) => tooltipItem.datasetIndex === 0,
                                        callbacks: {
                                            label: (ctx) => [
                                                `${t('investment.symbol')} : ${ctx.raw.holding.symbol}`,
                                                `${t('investment.cost')} : ${formatCurrency(ctx.raw.holding.totalCost)}`,
                                                `${t('perf_modal.current_value')} : ${formatCurrency(ctx.raw.holding.value)}`
                                            ]
                                        }
                                    }
                                },
                                scales: {
                                    x: { title: { display: true, text: t('investment.cost') }, beginAtZero: true },
                                    y: { title: { display: true, text: t('dashboard.return') }, grid: { color: (context) => context.tick.value === 0 ? '#3498DB' : 'rgba(0,0,0,0.1)', lineWidth: (context) => context.tick.value === 0 ? 2 : 1 } }
                                }
                            }}
                        />
                    </div>
                </div>
            )}

            <h3 style={{ marginTop: '40px', color: 'var(--text-color)' }}>{t('investment.history')}</h3>
            <div className="table-container" style={{ overflowX: 'auto', maxHeight: '500px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: 'var(--invest-color)', color: 'black' }}>
                        <tr>
                            <th style={styles.sortableTh} onClick={() => requestSort('date')}>{t('common.date')} {getSortArrow(sortConfig, 'date')}</th>
                            <th style={styles.sortableTh} onClick={() => requestSort('type')}>{t('investment.type')} {getSortArrow(sortConfig, 'type')}</th>
                            <th style={styles.sortableTh} onClick={() => requestSort('symbol')}>{t('investment.symbol')} {getSortArrow(sortConfig, 'symbol')}</th>
                            <th style={styles.sortableTh} onClick={() => requestSort('account')}>{t('investment.account')} {getSortArrow(sortConfig, 'account')}</th>
                            <th style={{ ...styles.fixedTh, textAlign: 'right' }}>{t('investment.quantity')}</th>
                            <th style={{ ...styles.fixedTh, textAlign: 'right' }}>{t('investment.price')}</th>
                            <th style={{ ...styles.fixedTh, textAlign: 'center', cursor: 'pointer' }} onClick={() => requestSort('currency')}>{t('investment.currency')} {getSortArrow(sortConfig, 'currency')}</th>
                            <th style={{ ...styles.fixedTh, textAlign: 'right' }}>{t('investment.fees')}</th>
                            <th style={{ ...styles.fixedTh, textAlign: 'right' }}>{t('common.total')}</th>
                            <th style={{ ...styles.fixedTh, textAlign: 'center' }}>{t('common.action')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTransactionsDisplay.map(tx => {
                            const total = tx.type === 'buy' ? -(parseFloat(tx.quantity) * parseFloat(tx.price) + parseFloat(tx.fees)) : (parseFloat(tx.quantity) * parseFloat(tx.price) - parseFloat(tx.fees));
                            const symbolColor = portfolio.symbolColors[tx.symbol];
                            return (
                                <tr key={tx.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '10px' }}>{tx.date}</td>
                                    <td style={{ padding: '10px' }}>{tx.type === 'buy' ? t('investment.buy') : (tx.type === 'sell' ? t('investment.sell') : t('investment.dividend'))}</td>
                                    <td style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '0' }}>{symbolColor && <span style={{ color: symbolColor, fontSize: '1.5rem', marginRight: '12px' }}>●</span>}<strong>{tx.symbol}</strong></td>
                                    <td style={{ padding: '10px' }}>{tx.account}</td>
                                    <td style={{ padding: '10px', textAlign: 'right' }}>{tx.quantity}</td>
                                    <td style={{ padding: '10px', textAlign: 'right' }}>{formatPrecise(tx.price)}</td>
                                    <td style={{ padding: '10px', textAlign: 'center' }}>{tx.currency}</td>
                                    <td style={{ padding: '10px', textAlign: 'right' }}>{formatCurrency(tx.fees)}</td>
                                    <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold', color: total >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{formatCurrency(total)}</td>
                                    <td style={{ padding: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                                        <button onClick={() => { setTransactionToEdit(tx); setShowTransactionModal(true); }} style={{ ...styles.iconOnlyBtn, color: 'var(--info-color)' }}><PencilIcon style={{ width: '14px' }} /></button>
                                        <button onClick={() => deleteTransaction(tx.id)} style={{ ...styles.iconOnlyBtn, color: 'var(--danger-color)' }}><TrashIcon style={{ width: '14px' }} /></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <TransactionModal isOpen={showTransactionModal} onClose={() => setShowTransactionModal(false)} onSave={handleSaveTransaction} transactionToEdit={transactionToEdit} currentHoldings={portfolio.holdings} />
            <PerformanceModal isOpen={showPerformanceModal} onClose={() => setShowPerformanceModal(false)} deposits={deposits} snapshots={snapshots} onSaveDeposit={handleSaveDeposit} onDeleteDeposit={handleDeleteDeposit} onDeleteMultipleDeposits={handleDeleteMultipleDeposits} onSaveSnapshot={handleSaveSnapshot} onDeleteSnapshot={handleDeleteSnapshot} onDeleteMultipleSnapshots={handleDeleteMultipleSnapshots} formatCurrency={formatCurrency} currency={currency} />
            <WatchlistModal isOpen={showWatchlistModal} onClose={() => setShowWatchlistModal(false)} watchlist={watchlist} onSave={handleSaveWatchlist} onDelete={handleDeleteWatchlist} formatCurrency={formatCurrency} />
            <DiagnosticModal isOpen={showDiagnosticModal} onClose={() => setShowDiagnosticModal(false)} transactions={transactions} />
            <HoldingDetailsModal isOpen={showHoldingDetailsModal} onClose={() => setShowHoldingDetailsModal(false)} symbol={selectedHoldingSymbol} transactions={transactions} onEditTransaction={handleEditFromHoldingDetails} onDeleteTransaction={handleDeleteFromHoldingDetails} formatCurrency={formatCurrency} formatPrecise={formatPrecise} />

            {showConfigModal && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3>{t('investment.config_title')}</h3>
                            <button onClick={() => setShowConfigModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '24px' }} /></button>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>{t('investment.config_data_source')}</label>
                            <select value={dataSource} onChange={(e) => {
                                setDataSource(e.target.value);
                                const newState = JSON.parse(JSON.stringify(appState));
                                if (!newState.settings.investmentParams) newState.settings.investmentParams = {};
                                newState.settings.investmentParams.dataSource = e.target.value;
                                saveGlobalState(newState);
                            }} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}>
                                <option value="alphaVantage">{t('investment.source_alpha')}</option>
                                <option value="yahoo">{t('investment.source_yahoo')}</option>
                            </select>
                        </div>

                        {dataSource === 'alphaVantage' && (
                            <>
                                <div className="info-box" style={{ marginBottom: '15px' }}>
                                    <h4 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>{t('investment.config_alpha_title')}</h4>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{t('investment.config_alpha_desc')}</p>
                                    <strong style={{ fontSize: '0.85rem' }}>{t('investment.config_how_to')}</strong>
                                    <ol style={{ fontSize: '0.85rem', paddingLeft: '20px', marginTop: '5px' }}>
                                        <li>
                                            <Trans i18nKey="investment.config_step1">
                                                Go to official site: <a href="https://www.alphavantage.co/support/#api-key" target="_blank" rel="noopener noreferrer">Alpha Vantage - Get Key</a>.
                                            </Trans>
                                        </li>
                                        <li>{t('investment.config_step2')}</li>
                                        <li>{t('investment.config_step3')}</li>
                                        <li>{t('investment.config_step4')}</li>
                                    </ol>
                                    <p style={{ fontSize: '0.8rem', fontStyle: 'italic', marginTop: '10px', color: '#666' }}>{t('investment.config_note')}</p>
                                </div>

                                <label htmlFor="api-key-input" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{t('investment.config_key_label')}</label>
                                <input id="api-key-input" name="api-key-input" type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="Ex: ABC123XYZ" style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '6px' }} />
                            </>
                        )}

                        {currency === 'CAD' && (
                            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '10px' }}>{t('investment.config_questrade_title')}</h4>
                                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px' }}>
                                    <Trans i18nKey="investment.config_questrade_desc">
                                        To sync, generate a manual token in your <a href="https://my.questrade.com/clients/personal/apps" target="_blank">Questrade Hub</a> and paste it here.
                                    </Trans>
                                </p>
                                <input
                                    type="text"
                                    value={questradeToken}
                                    onChange={(e) => setQuestradeToken(e.target.value)}
                                    placeholder="Ex: a1b2c3d4-e5f6-..."
                                    style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                />
                                <button onClick={handleInitQuestrade} style={{
                                    width: '100%', padding: '12px',
                                    backgroundColor: '#26A65B', color: 'white',
                                    border: 'none', borderRadius: '6px',
                                    fontWeight: 'bold', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                                }}>
                                    <BoltIcon style={{ width: '20px' }} /> {t('investment.config_questrade_btn')}
                                </button>
                            </div>
                        )}

                        <div style={{ height: '20px' }}></div>
                        <button onClick={saveConfig} style={{ width: '100%', padding: '10px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>{t('common.save')}</button>
                    </div>
                </div>
            )}
        </div>
    );
}