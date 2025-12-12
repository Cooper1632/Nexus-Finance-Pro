import {
    HomeIcon, ArrowTrendingUpIcon, ShieldCheckIcon, CpuChipIcon,
    BanknotesIcon, ChartBarIcon, InformationCircleIcon, Cog6ToothIcon,
    ListBulletIcon, ArrowPathIcon, CheckCircleIcon, LightBulbIcon,
    ExclamationTriangleIcon, BuildingLibraryIcon, ScaleIcon,
    PresentationChartLineIcon, CursorArrowRaysIcon, ArrowDownTrayIcon,
    CalculatorIcon, ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/outline';

export const userGuideData = {
    sidebar: {
        title: "Guide Utilisateur",
        items: [
            { id: 'intro', label: 'Introduction' },
            { id: 'dashboard', label: 'Tableau de Bord' },
            { id: 'budget', label: 'Budget & Actifs' },
            { id: 'plan', label: 'Plan de Dettes' },
            { id: 'remb', label: 'Remboursement' },
            { id: 'invest', label: 'Investissement' },
            { id: 'analyse', label: 'Analyse Action' },
            { id: 'immo', label: 'Immobilier' },
            { id: 'perf', label: 'Performance' },
            { id: 'projections', label: 'Projections' },
            { id: 'params', label: 'Paramètres' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Votre guide de référence pour l'utilisation du logiciel.",
    cards: [
        { title: "Vue Globale", desc: "Centralisez votre Patrimoine Net.", color: "info" },
        { title: "Budget & Flux", desc: "Maîtrise des revenus & dépenses.", color: "warning" },
        { title: "Stratégie Dette", desc: "Élimination intelligente des dettes.", color: "danger" },
        { title: "Performance", desc: "Suivi réel de vos rendements.", color: "dark" },
        { title: "Croissance", desc: "Intérêts composés & Retraite.", color: "success" },
        { title: "Intelligence", desc: "Analyse Bourse & Immo.", color: "concept" }
    ],
    benefits: {
        title: "Ce que ce logiciel vous apporte :",
        items: [
            { title: "Vue Globale (Dashboard) :", text: "Centralisez votre Patrimoine Net, vos actifs et vos dettes en un seul coup d'œil." },
            { title: "Contrôle Budgétaire :", text: "Suivez vos revenus, dépenses et votre capacité d'épargne mensuelle." },
            { title: "Stratégie de Dette :", text: "Planifiez l'élimination de vos dettes (Avalanche/Boule de neige) pour économiser des intérêts." },
            { title: "Simulateurs de Remboursement :", text: "Calculez vos versements pour hypothèques, prêts et cartes de crédit." },
            { title: "Suivi de Portefeuille :", text: "Gérez vos investissements et visualisez votre performance réelle." },
            { title: "Analyse Immobilière :", text: "Calculez la rentabilité exacte de vos projets locatifs." },
            { title: "Intelligence Boursière :", text: "Analysez la qualité des entreprises (Score Nexus) avant d'investir." },
            { title: "Suivi de Performance :", text: "Visualisez l'évolution historique de votre richesse et comparez aux indices." },
            { title: "Projections Futures :", text: "Calculez vos intérêts composés, planifiez votre retraite et vos retraits." },
            { title: "Confidentialité Totale :", text: "Vos données sont stockées localement sur votre appareil, rien n'est envoyé sur le cloud." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Conseil :",
                content: "Ce guide explique l'utilisation technique du logiciel. Pour les concepts théoriques financiers (Bourse, Ratios), référez-vous au <strong>Guide Finance 101</strong> disponible dans le menu Éducation."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Tableau de Bord",
            desc: "Votre centre de contrôle qui agrège les données de tous les modules.",
            items: [
                { title: "Patrimoine Net :", text: "Indicateur clé <code>(Total Actifs - Total Passifs)</code>." },
                { title: "Actifs Totaux :", text: "Somme de votre portefeuille (Investissement) et de vos biens (Budget/Actifs)." },
                { title: "Passifs Totaux :", text: "Cumul de toutes les dettes entrées dans le module Plan." },
                { title: "Flux de Trésorerie :", text: "Votre solde mensuel disponible (Revenus - Dépenses - Épargne)." }
            ],
            box: {
                type: "warning",
                title: "Note Importante - Scénarios :",
                content: "Le Tableau de Bord affiche toujours les données du <strong>Scénario Actif</strong> (le scénario sélectionné à l'écran) pour chaque module. Si vous changez de scénario dans le module Budget, le Tableau de Bord se mettra à jour pour refléter ce choix."
            }
        },
        budget: {
            id: "budget",
            title: "Budget & Actifs",
            desc: "La pierre angulaire de votre gestion financière.",
            items: [
                { text: "Remplissez les montants pour chaque poste avec la bonne fréquence." },
                { title: "Impôts et Taxes :", text: "Nouvelle catégorie pour gérer vos acomptes provisionnels ou soldes d'impôts." },
                { title: "Section 'Valeur de vos actifs' :", text: "Cette section est dédiée exclusivement à vos biens matériels (Immobilier, Véhicules) pour établir votre patrimoine net. Vos actions et placements vont dans le module Investissement." }
            ]
        },
        projections: {
            id: "projections",
            title: "Calculateurs de Projection",
            cards: [
                { title: "Valeur Future", desc: "Visualisez la croissance de votre REER ou CELI avec les intérêts composés." },
                { title: "Objectif", desc: "Fixez un montant cible et une date, l'outil calcule l'effort d'épargne requis." },
                { title: "Retrait", desc: "Simulez la phase de décaissement. Combien de temps votre capital durera-t-il ?" }
            ]
        },
        plan: {
            id: "plan",
            title: "Plan de Dettes",
            desc: "Établissez votre stratégie de remboursement optimale.",
            items: [
                { title: "Avalanche :", text: "Priorise les taux d'intérêt élevés (Économie maximale)." },
                { title: "Boule de Neige :", text: "Priorise les petits soldes (Motivation psychologique)." }
            ],
            warning: {
                title: "Note Importante - Hypothèques",
                content: "Le module 'Plan' est un <strong>simulateur</strong>. Il ne met pas à jour automatiquement votre solde réel dans le Tableau de Bord.<br/><strong>Action requise :</strong> Une fois par mois, ajustez manuellement le champ 'Montant' dans ce module pour refléter votre relevé bancaire réel."
            }
        },
        remb: {
            id: "remb",
            title: "Simulateurs de Remboursement",
            desc: "Calculez vos versements pour différents types de prêts.",
            cards: [
                { title: "Hypothèque :", desc: "Simulez vos versements mensuels, l'intérêt total et l'impact d'une mise de fonds (Achat/Renouvellement)." },
                { title: "Prêt Personnel :", desc: "Calculez le coût réel d'un prêt auto ou personnel." },
                { title: "Carte de Crédit :", desc: "Voyez le temps nécessaire pour rembourser une carte avec le paiement minimum." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investissement",
            desc: "Suivi complet de votre portefeuille boursier.",
            items: [
                { title: "Sources de Données :", text: "Choisissez entre <strong>Yahoo Finance (Gratuit, Différé 15min)</strong> ou <strong>Alpha Vantage (Temps Réel, Clé requise)</strong> via la configuration." },
                { title: "Rafraîchir :", text: "Actualise la valeur de vos titres instantanément." },
                { title: "Historique :", text: "Modifiez ou supprimez n'importe quelle transaction passée." },
                { title: "Performance (GIPS) :", text: "Analyse le rendement réel (CAGR) pondéré par le temps." }
            ],
            box: {
                type: "warning",
                title: "À propos des Nouveautés :",
                content: "<ul><li><strong>Yahoo Finance :</strong> Excellent choix gratuit, mais notez que les prix ont un délai de 15 minutes par rapport au marché.</li><li><strong>Questrade :</strong> L'option de connexion apparaîtra <em>uniquement</em> si votre devise principale est le <strong>CAD</strong> (Dollar Canadien).</li></ul>"
            },
            button: "Voir le Guide Finance 101"
        },
        analyse: {
            id: "analyse",
            title: "Analyse Action",
            desc: "Évaluez la santé fondamentale d'une entreprise avant d'investir.",
            items: [
                { title: "Nexus Score (0-100) :", text: "Note synthétique basée sur 7 métriques clés (P/E, Croissance, Marge, Dette, ROE...)." },
                { title: "Ratio PEG :", text: "Détecte les actions sous-évaluées par rapport à leur croissance." },
                { title: "Assistant IA :", text: "Génère un prompt optimisé pour Gemini/ChatGPT afin de récupérer les données financières." }
            ]
        },
        perf: {
            id: "perf",
            title: "Performance",
            desc: "Visualisez l'évolution réelle de votre richesse.",
            items: [
                { title: "Graphique Historique :", text: "Courbe d'évolution de votre Patrimoine Net et de vos Actifs totaux dans le temps." },
                { title: "Benchmarks :", text: "Comparez votre propre performance à celle des grands indices (S&P 500, TSX)." }
            ]
        },
        immo: {
            id: "immo",
            title: "Immobilier",
            desc: "Analyse de rentabilité locative professionnelle.",
            cards: [
                { title: "RNE :", text: "Revenu Net d'Exploitation (Profit avant hypothèque)." },
                { title: "Cap Rate :", text: "Rendement pur de l'immeuble sans levier." },
                { title: "Cash-on-Cash :", text: "Rendement réel sur votre mise de fonds." },
                { title: "DSCR :", text: "Ratio de couverture de la dette (Banque)." }
            ],
            button: "Guide Immobilier"
        },
        params: {
            id: "params",
            title: "Paramètres & Outils",
            items: [
                { title: "Sauvegarde / Restauration :", text: "Exportez vos données en fichier JSON pour ne jamais les perdre." },
                { title: "Calculatrice :", text: "Outil flottant disponible partout dans l'application." },
                { title: "Réinitialisation Module :", text: "Le bouton orange (flèche circulaire) efface uniquement les données du module actif." },
                { title: "Réinitialisation Usine :", text: "Le bouton rouge efface TOUTES les données de l'application. <span style='color:var(--danger-color); font-weight:bold'>Action irréversible.</span>" }
            ]
        }
    }
};
