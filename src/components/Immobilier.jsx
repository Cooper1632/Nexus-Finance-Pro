import React, { useState, useEffect, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation } from 'react-i18next';
import CurrencyInput from './CurrencyInput';
import ScenarioTabs from './ScenarioTabs';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    Filler
} from 'chart.js';
import { Doughnut, Bar, Line, Radar } from 'react-chartjs-2';
import {
    HomeIcon,
    BanknotesIcon,
    ChartBarIcon,
    ArrowTrendingUpIcon,
    ScaleIcon,
    BuildingOfficeIcon,
    CalculatorIcon,
    ArrowPathIcon,
    TrophyIcon,
    QuestionMarkCircleIcon,
    ListBulletIcon,
    PlusIcon,
    TrashIcon,
    XMarkIcon,
    TableCellsIcon,
    WrenchScrewdriverIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline';
import IntroImmobilier from './IntroImmobilier';

// --- CONFIGURATION CHART.JS ---
ChartJS.register(
    ArcElement, Tooltip, Legend, CategoryScale, LinearScale,
    BarElement, PointElement, LineElement, RadialLinearScale, Filler
);

// --- STYLES ET COULEURS ---
const styles = {
    sectionTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        color: 'var(--text-color)',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        paddingBottom: '8px'
    },
    resultCard: {
        backgroundColor: 'var(--card-background)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    inputCardAcquisition: {
        backgroundColor: '#EBF5FB',
        border: '1px solid #AED6F1',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    inputCardOperation: {
        backgroundColor: '#FEF9E7',
        border: '1px solid #F9E79F',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    inputCardAdvanced: {
        backgroundColor: '#F4ECF7',
        border: '1px solid #D2B4DE',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    inputCardStartup: {
        backgroundColor: '#E8F8F5',
        border: '1px solid #A3E4D7',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    kpiCard: {
        backgroundColor: 'var(--card-background)',
        padding: '15px',
        borderRadius: '10px',
        borderLeft: '4px solid',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
    },
    kpiLabel: {
        fontSize: '0.8rem',
        fontWeight: '600',
        color: 'var(--secondary-color)',
        textTransform: 'uppercase',
        marginBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    kpiValue: {
        fontSize: '1.5rem',
        fontWeight: '700',
        lineHeight: '1.2'
    },
    kpiTarget: {
        fontSize: '0.75rem',
        opacity: 0.8,
        marginTop: '4px',
        color: 'var(--text-color)'
    },
    tooltipContainer: {
        position: 'relative',
        display: 'inline-block',
        cursor: 'help'
    },
    tooltipText: {
        visibility: 'hidden',
        width: '220px',
        backgroundColor: '#34495E',
        color: '#fff',
        textAlign: 'left',
        borderRadius: '6px',
        padding: '10px',
        position: 'absolute',
        zIndex: '100',
        bottom: '135%',
        left: '-10px',
        opacity: '0',
        transition: 'opacity 0.2s',
        fontSize: '0.75rem',
        lineHeight: '1.4',
        fontWeight: 'normal',
        textTransform: 'none',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        pointerEvents: 'none'
    },
    modalOverlay: {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: 'var(--card-background)', padding: '25px', borderRadius: '12px',
        width: '90%', maxWidth: '500px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        maxHeight: '85vh', overflowY: 'auto'
    },
    modalRow: {
        display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px'
    }
};

const InfoTooltip = ({ text, align = 'center' }) => {
    const [hover, setHover] = useState(false);

    // Dynamic positioning
    let posStyle = { left: '50%', transform: 'translateX(-50%)' };
    let arrowPosStyle = { left: '50%', marginLeft: '-6px' };

    if (align === 'left') {
        // Aligned Left (Icon is on Left) -> Tooltip goes Right (Interior)
        posStyle = { left: '0', transform: 'none' };
        arrowPosStyle = { left: '10px' };
    } else if (align === 'right') {
        // Aligned Right (Icon is on Right) -> Tooltip goes Left (Interior)
        posStyle = { right: '0', left: 'auto', transform: 'none' };
        arrowPosStyle = { right: '10px', left: 'auto', marginLeft: '0' };
    }

    return (
        <div
            style={styles.tooltipContainer}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <QuestionMarkCircleIcon style={{ width: '16px', color: 'var(--info-color)', opacity: 0.7 }} />
            <div style={{ ...styles.tooltipText, visibility: hover ? 'visible' : 'hidden', opacity: hover ? 1 : 0, ...posStyle }}>
                {text}
                <div style={{ position: 'absolute', top: '100%', borderWidth: '5px', borderStyle: 'solid', borderColor: '#34495E transparent transparent transparent', ...arrowPosStyle }}></div>
            </div>
        </div>
    );
};

const RatioRow = ({ label, value, tooltip }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eee', fontSize: '0.9rem' }}>
        <span style={{ color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '5px' }}>
            {label} {tooltip && <InfoTooltip text={tooltip} />}
        </span>
        <span style={{ fontWeight: 'bold', color: '#2C3E50' }}>{value}</span>
    </div>
);

const calculateIRR = (initialOutlay, cashFlows, terminalValue) => {
    if (initialOutlay <= 0 || !cashFlows || cashFlows.length === 0) return 0;
    let min = -0.99; let max = 5.0; let guess = 0.1;
    const precision = 0.0001; const maxIterations = 100;
    for (let i = 0; i < maxIterations; i++) {
        let npv = -initialOutlay;
        cashFlows.forEach((cashFlow, index) => {
            const year = index + 1;
            let totalCashFlow = cashFlow;
            if (year === cashFlows.length) totalCashFlow += terminalValue;
            npv += totalCashFlow / Math.pow(1 + guess, year);
        });
        if (Math.abs(npv) < precision) break;
        if (npv > 0) min = guess; else max = guess;
        guess = (min + max) / 2;
    }
    return guess * 100;
};

export default function Immobilier() {
    const { appState, saveGlobalState, formatCurrency, defaultImmoInput } = useData();
    const { t } = useTranslation();

    // --- GESTION SCÉNARIOS ---
    const scenarios = appState.immobilier?.immoScenarios || [{ ...defaultImmoInput }];
    const activeIndex = appState.volatile?.activeImmoScenarioIndex || 0;

    const currentScenarioIndex = (activeIndex >= scenarios.length) ? 0 : activeIndex;
    const localData = scenarios[currentScenarioIndex] || defaultImmoInput;

    const [showExpensesModal, setShowExpensesModal] = useState(false);
    const [showIncomeModal, setShowIncomeModal] = useState(false);
    const [showFraisModal, setShowFraisModal] = useState(false);

    // --- ACTIONS SCÉNARIOS ---
    const updateGlobalState = (newData) => {
        const newState = JSON.parse(JSON.stringify(appState));

        // SÉCURITÉ : On vérifie et répare la structure si elle est cassée
        if (!newState.immobilier) {
            newState.immobilier = {};
        }
        if (!newState.immobilier.immoScenarios || !Array.isArray(newState.immobilier.immoScenarios)) {
            newState.immobilier.immoScenarios = [];
        }

        // Mise à jour sécurisée
        newState.immobilier.immoScenarios[currentScenarioIndex] = newData;
        saveGlobalState(newState);
    };

    const handleAddScenario = () => {
        const newState = JSON.parse(JSON.stringify(appState));
        const newScen = { ...defaultImmoInput, name: (scenarios.length + 1).toString() };
        newState.immobilier.immoScenarios.push(newScen);
        newState.volatile.activeImmoScenarioIndex = newState.immobilier.immoScenarios.length - 1;
        saveGlobalState(newState);
    };

    const handleDeleteScenario = (index) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.immobilier.immoScenarios.splice(index, 1);
        if (currentScenarioIndex >= index) {
            newState.volatile.activeImmoScenarioIndex = Math.max(0, currentScenarioIndex - 1);
        }
        saveGlobalState(newState);
    };

    const handleSelectScenario = (index) => {
        const newState = { ...appState };
        newState.volatile.activeImmoScenarioIndex = index;
        saveGlobalState(newState);
    };

    const handleRenameScenario = (index, newName) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.immobilier.immoScenarios[index].name = newName;
        saveGlobalState(newState);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newData = { ...localData, [name]: value };
        updateGlobalState(newData);
    };

    const resetForm = () => {
        if (window.confirm(t('header.reset_confirm'))) {
            const emptyData = { ...defaultImmoInput, name: localData.name };
            updateGlobalState(emptyData);
        }
    };

    // --- MODALES ---
    const openExpensesModal = () => {
        if (!localData.depensesDetails || localData.depensesDetails.length === 0) {
            const defaultExpenses = [
                { id: 1, label: t('realestate.exp_taxes_city'), amount: "" },
                { id: 2, label: t('realestate.exp_taxes_school'), amount: "" },
                { id: 3, label: t('realestate.exp_insurance'), amount: "" },
                { id: 4, label: t('realestate.exp_electricity'), amount: "" },
                { id: 5, label: t('realestate.exp_maintenance'), amount: "" },
                { id: 6, label: t('realestate.exp_management'), amount: "" },
            ];
            updateGlobalState({ ...localData, depensesDetails: defaultExpenses });
        }
        setShowExpensesModal(true);
    };

    const openIncomeModal = () => {
        if (!localData.revenusDetails || localData.revenusDetails.length === 0) {
            const defaultIncome = [
                { id: 1, label: t('realestate.inc_laundry'), amount: "" },
                { id: 2, label: t('realestate.inc_parking'), amount: "" },
                { id: 3, label: t('realestate.inc_storage'), amount: "" },
                { id: 4, label: t('realestate.inc_ads'), amount: "" },
                { id: 5, label: t('realestate.inc_misc'), amount: "" },
            ];
            updateGlobalState({ ...localData, revenusDetails: defaultIncome });
        }
        setShowIncomeModal(true);
    };

    const openFraisModal = () => {
        if (!localData.fraisDiversDetails || localData.fraisDiversDetails.length === 0) {
            const defaultFrais = [
                { id: 1, label: t('realestate.fees_inspection'), amount: "" },
                { id: 2, label: t('realestate.fees_eval'), amount: "" },
                { id: 3, label: t('realestate.fees_bank'), amount: "" },
                { id: 4, label: t('realestate.fees_title_ins'), amount: "" },
                { id: 5, label: t('realestate.fees_adjust'), amount: "" },
            ];
            updateGlobalState({ ...localData, fraisDiversDetails: defaultFrais });
        }
        setShowFraisModal(true);
    };

    const handleDetailChange = (type, id, field, value) => {
        let listKey, totalKey;
        if (type === 'depenses') { listKey = 'depensesDetails'; totalKey = 'depensesExploitation'; }
        else if (type === 'revenus') { listKey = 'revenusDetails'; totalKey = 'autresRevenus'; }
        else if (type === 'frais') { listKey = 'fraisDiversDetails'; totalKey = 'fraisDivers'; }

        const newList = localData[listKey].map(item => item.id === id ? { ...item, [field]: value } : item);
        const total = newList.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
        const newData = { ...localData, [listKey]: newList, [totalKey]: total };
        updateGlobalState(newData);
    };

    const addItemRow = (type) => {
        let listKey;
        if (type === 'depenses') listKey = 'depensesDetails';
        else if (type === 'revenus') listKey = 'revenusDetails';
        else if (type === 'frais') listKey = 'fraisDiversDetails';

        const newId = `row-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        const newList = [...localData[listKey], { id: newId, label: t('realestate.new_item'), amount: "" }];
        const newData = { ...localData, [listKey]: newList };
        updateGlobalState(newData);
    };

    const removeItemRow = (type, id) => {
        let listKey, totalKey;
        if (type === 'depenses') { listKey = 'depensesDetails'; totalKey = 'depensesExploitation'; }
        else if (type === 'revenus') { listKey = 'revenusDetails'; totalKey = 'autresRevenus'; }
        else if (type === 'frais') { listKey = 'fraisDiversDetails'; totalKey = 'fraisDivers'; }

        const newList = localData[listKey].filter(item => item.id !== id);
        const total = newList.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
        const newData = { ...localData, [listKey]: newList, [totalKey]: total };
        updateGlobalState(newData);
    };

    const metrics = useMemo(() => {
        const getNum = (key) => parseFloat(localData[key]) || 0;

        const prixAchat = getNum('prixAchat');
        const revenusBruts = getNum('revenusBruts');
        const autresRevenus = getNum('autresRevenus');
        const depensesExploitation = getNum('depensesExploitation');
        const hypothequeAnnuelle = getNum('hypothequeAnnuelle');
        const miseDeFonds = getNum('miseDeFonds');
        const amortissementCapital = getNum('amortissementCapital');
        const amortissementFiscal = getNum('amortissementFiscal');
        const tauxImposition = getNum('tauxImposition') / 100;
        const nombreLogements = parseInt(localData.nombreLogements) || 0;
        const tauxAppreciation = getNum('tauxAppreciation') / 100;
        const tauxVacance = getNum('tauxVacance') / 100;

        const fraisBienvenue = getNum('fraisBienvenue');
        const fraisNotaire = getNum('fraisNotaire');
        const fraisRenovations = getNum('fraisRenovations');
        const fraisDivers = getNum('fraisDivers');
        const investissementTotal = miseDeFonds + fraisBienvenue + fraisNotaire + fraisRenovations + fraisDivers;

        const valeurActuelle = getNum('valeurActuelle') || (prixAchat + fraisRenovations);
        const montantTotalPretInput = getNum('montantTotalPret');
        const soldeHypothequeRestant = getNum('soldeHypothequeRestant');

        const finalMontantPret = montantTotalPretInput > 0 ? montantTotalPretInput : Math.max(0, prixAchat - miseDeFonds);
        const finalSoldeHypotheque = soldeHypothequeRestant > 0 ? soldeHypothequeRestant : finalMontantPret;

        const totalRevenusBruts = revenusBruts + autresRevenus;
        const perteVacance = revenusBruts * tauxVacance;
        const revenusEffectifs = totalRevenusBruts - perteVacance;
        const rne = revenusEffectifs - depensesExploitation;

        const capRate = prixAchat > 0 ? (rne / prixAchat) * 100 : 0;
        const mrb = revenusBruts > 0 ? prixAchat / revenusBruts : 0;
        const oer = revenusEffectifs > 0 ? (depensesExploitation / revenusEffectifs) * 100 : 0;
        const grossYield = prixAchat > 0 ? (totalRevenusBruts / prixAchat) * 100 : 0;

        const cashFlowAnnuel = rne - hypothequeAnnuelle;
        const cashFlowMensuel = cashFlowAnnuel / 12;

        const cashOnCash = investissementTotal > 0 ? (cashFlowAnnuel / investissementTotal) * 100 : 0;
        const roiTotal = investissementTotal > 0 ? ((cashFlowAnnuel + amortissementCapital) / investissementTotal) * 100 : 0;

        const dscr = hypothequeAnnuelle > 0 ? rne / hypothequeAnnuelle : 0;
        const ltv = valeurActuelle > 0 ? (finalSoldeHypotheque / valeurActuelle) * 100 : 0;
        const debtYield = finalSoldeHypotheque > 0 ? (rne / finalSoldeHypotheque) * 100 : 0;
        const breakEvenRatio = totalRevenusBruts > 0 ? ((depensesExploitation + hypothequeAnnuelle) / totalRevenusBruts) * 100 : 0;
        const loanConstant = finalMontantPret > 0 ? (hypothequeAnnuelle / finalMontantPret) * 100 : 0;
        const safetyMargin = rne > 0 ? ((rne - hypothequeAnnuelle) / rne) * 100 : 0;

        const interetsAnnuels = Math.max(0, hypothequeAnnuelle - amortissementCapital);
        const revenuNetImposable = rne - interetsAnnuels - amortissementFiscal;
        const impotEstime = Math.max(0, revenuNetImposable * tauxImposition);
        const cashFlowApresImpots = cashFlowAnnuel - impotEstime;
        const taxEfficiency = cashFlowAnnuel > 0 ? (impotEstime / cashFlowAnnuel) * 100 : 0;

        const equityActuelle = valeurActuelle - finalSoldeHypotheque;
        const pricePerDoor = nombreLogements > 0 ? prixAchat / nombreLogements : 0;

        const projectionYears = Array.from({ length: 11 }, (_, i) => `${t('common.years')} ${i}`);
        const dataValeur = [];
        const dataDette = [];
        const dataEquite = [];
        let curVal = valeurActuelle;
        let curDette = finalSoldeHypotheque;

        for (let i = 0; i <= 10; i++) {
            dataValeur.push(curVal);
            dataDette.push(curDette);
            dataEquite.push(curVal - curDette);
            curVal = curVal * (1 + tauxAppreciation);
            curDette = Math.max(0, curDette - amortissementCapital);
        }

        const equityAtYear10 = dataEquite[10];
        const annualCashFlows = Array(10).fill(cashFlowApresImpots);
        const tri = calculateIRR(investissementTotal, annualCashFlows, equityAtYear10);

        const gainAnnuelTotal = cashFlowAnnuel + (valeurActuelle * tauxAppreciation) + amortissementCapital;
        const roe = equityActuelle > 0 ? (gainAnnuelTotal / equityActuelle) * 100 : 0;

        let scoreTotal = 0;
        const scoreCoC = Math.max(0, Math.min(10, (cashOnCash / 8) * 10)); scoreTotal += scoreCoC * 2.0;
        const scoreTRI = Math.max(0, Math.min(10, (tri / 12) * 10)); scoreTotal += scoreTRI * 2.0;
        let scoreDSCR = dscr >= 1.25 ? 10 : (dscr < 1 ? 0 : ((dscr - 1) / 0.25) * 10); scoreTotal += scoreDSCR * 1.5;
        const scoreSafety = Math.max(0, Math.min(10, (safetyMargin / 20) * 10)); scoreTotal += scoreSafety * 1.5;
        const scoreCap = Math.max(0, Math.min(10, (capRate / 5) * 10)); scoreTotal += scoreCap * 1.0;
        let scoreLTV = ltv <= 60 ? 10 : (ltv >= 95 ? 0 : 10 - ((ltv - 60) / 35 * 10)); scoreTotal += scoreLTV * 1.0;
        let scoreTax = taxEfficiency <= 20 ? 10 : (taxEfficiency >= 50 ? 0 : 10 - ((taxEfficiency - 20) / 30 * 10)); scoreTotal += scoreTax * 1.0;
        const nexusScore = Math.round(scoreTotal);

        return {
            rne, capRate, mrb, oer, cashFlowAnnuel, cashFlowMensuel, cashOnCash, roiTotal,
            dscr, ltv, debtYield, breakEvenRatio, loanConstant, safetyMargin,
            revenuNetImposable, cashFlowApresImpots,
            roe, pricePerDoor, finalMontantPret, miseDeFonds, nexusScore,
            grossYield, taxEfficiency, tri, investissementTotal,
            totalFraisDemarrage: fraisBienvenue + fraisNotaire + fraisRenovations + fraisDivers,
            scoresDetail: { scoreCoC, scoreTRI, scoreDSCR, scoreSafety, scoreCap, scoreLTV },
            projection: { labels: projectionYears, valeur: dataValeur, dette: dataDette, equite: dataEquite }
        };
    }, [localData, t]);

    const getScoreColor = (val, target, type = 'min') => {
        if (type === 'min') return val >= target ? 'var(--success-color)' : val >= target * 0.8 ? 'var(--warning-color)' : 'var(--danger-color)';
        if (type === 'max') return val <= target ? 'var(--success-color)' : val <= target * 1.2 ? 'var(--warning-color)' : 'var(--danger-color)';
        return 'var(--text-color)';
    };

    const getNexusScoreColor = (score) => {
        if (score >= 80) return 'var(--success-color)';
        if (score >= 60) return 'var(--info-color)';
        if (score >= 40) return 'var(--warning-color)';
        return 'var(--danger-color)';
    };

    const chartFinancement = {
        labels: [t('realestate.finance_structure')],
        datasets: [
            { label: t('realestate.down_payment'), data: [metrics.miseDeFonds], backgroundColor: '#52BE80', barThickness: 60 },
            { label: t('realestate.mortgage'), data: [metrics.finalMontantPret], backgroundColor: '#3498DB', barThickness: 60 },
            { label: t('realestate.startup_costs'), data: [metrics.totalFraisDemarrage], backgroundColor: '#F39C12', barThickness: 60 }
        ]
    };

    const chartFinancementOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: { x: { stacked: true, beginAtZero: true }, y: { stacked: true } },
        plugins: { legend: { position: 'bottom' }, tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}` } } }
    };

    const chartCashflow = {
        labels: [t('realestate.gross_revenue'), t('realestate.operating_expenses'), t('realestate.mortgage'), t('realestate.cashflow')],
        datasets: [{
            label: t('common.amount'),
            data: [
                parseFloat(localData.revenusBruts) || 0,
                -(parseFloat(localData.depensesExploitation) || 0),
                -(parseFloat(localData.hypothequeAnnuelle) || 0),
                metrics.cashFlowAnnuel
            ],
            backgroundColor: ['#2ECC71', '#E74C3C', '#F39C12', metrics.cashFlowAnnuel >= 0 ? '#3498DB' : '#C0392B'],
            borderRadius: 4
        }]
    };

    const chartProjection = {
        labels: metrics.projection.labels,
        datasets: [
            { label: t('realestate.current_value'), data: metrics.projection.valeur, borderColor: '#2ECC71', backgroundColor: 'rgba(46, 204, 113, 0.1)', fill: true, tension: 0.4 },
            { label: t('realestate.chart_debt_remaining'), data: metrics.projection.dette, borderColor: '#E74C3C', borderDash: [5, 5], fill: false, tension: 0.4 },
            { label: t('realestate.chart_equity_net'), data: metrics.projection.equite, borderColor: '#3498DB', backgroundColor: 'rgba(52, 152, 219, 0.1)', fill: true, tension: 0.4 }
        ]
    };

    const chartRadar = {
        labels: [
            t('realestate.radar_cashflow'),
            t('realestate.radar_tri'),
            t('realestate.radar_dscr'),
            t('realestate.radar_safety'),
            t('realestate.radar_value'),
            t('realestate.radar_ltv')
        ],
        datasets: [{
            label: 'Score / 10',
            data: [metrics.scoresDetail.scoreCoC, metrics.scoresDetail.scoreTRI, metrics.scoresDetail.scoreDSCR, metrics.scoresDetail.scoreSafety, metrics.scoresDetail.scoreCap, metrics.scoresDetail.scoreLTV],
            backgroundColor: 'rgba(142, 68, 173, 0.2)', borderColor: '#8E44AD', pointBackgroundColor: '#8E44AD', pointBorderColor: '#fff'
        }]
    };



    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const hasSeenIntro = localStorage.getItem('nexus_intro_immobilier_seen');
        if (!hasSeenIntro) {
            setShowIntro(true);
        }
    }, []);

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="module-header-with-reset" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2 style={{ margin: 0 }}>{t('realestate.title')}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={resetForm} className="icon-clean" style={{ border: '2px solid var(--immobilier-color)', borderRadius: '50%', width: '36px', height: '36px', color: 'var(--immobilier-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} title={t('common.reset')}><ArrowPathIcon style={{ width: '18px' }} /></button>
                    <button
                        onClick={() => setShowIntro(true)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#9ca3af',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'color 0.2s',
                            padding: '4px',
                            borderRadius: '50%'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                        title={t('common.help') || "Introduction"}
                    >
                        <InformationCircleIcon style={{ width: '24px', height: '24px' }} />
                    </button>
                </div>
            </div>

            <IntroImmobilier isOpen={showIntro} onClose={() => setShowIntro(false)} />

            {/* GESTION DES SCÉNARIOS IMMO */}
            <ScenarioTabs
                scenarios={scenarios}
                activeIndex={currentScenarioIndex}
                onSelect={handleSelectScenario}
                onAdd={handleAddScenario}
                onDelete={handleDeleteScenario}
                onRename={handleRenameScenario}
                activeColor="var(--immobilier-color)"
            />

            {/* KPI */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                <div className="card-hover-fix" style={{ ...styles.kpiCard, borderLeftColor: 'var(--primary-color)' }}><span style={styles.kpiLabel}>{t('realestate.kpi_cap_rate')} <InfoTooltip text={t('realestate.tooltip_cap_rate')} /></span><span style={{ ...styles.kpiValue, color: getScoreColor(metrics.capRate, 5, 'min') }}>{metrics.capRate.toFixed(2)}%</span><span style={styles.kpiTarget}>{t('realestate.target_min')}: &gt; 5.0%</span></div>
                <div className="card-hover-fix" style={{ ...styles.kpiCard, borderLeftColor: 'var(--info-color)' }}><span style={styles.kpiLabel}>{t('realestate.kpi_cash_on_cash')} <InfoTooltip text={t('realestate.tooltip_cash_on_cash')} /></span><span style={{ ...styles.kpiValue, color: getScoreColor(metrics.cashOnCash, 8, 'min') }}>{metrics.cashOnCash.toFixed(2)}%</span><span style={styles.kpiTarget}>{t('realestate.target_min')}: &gt; 8.0%</span></div>
                <div className="card-hover-fix" style={{ ...styles.kpiCard, borderLeftColor: 'var(--success-color)' }}><span style={styles.kpiLabel}>{t('realestate.kpi_dscr')} <InfoTooltip text={t('realestate.tooltip_dscr')} /></span><span style={{ ...styles.kpiValue, color: getScoreColor(metrics.dscr, 1.2, 'min') }}>{metrics.dscr.toFixed(2)}x</span><span style={styles.kpiTarget}>{t('realestate.target_bank')}: &gt; 1.20x</span></div>
                <div className="card-hover-fix" style={{ ...styles.kpiCard, borderLeftColor: 'var(--warning-color)' }}><span style={styles.kpiLabel}>{t('realestate.kpi_cashflow_door')} <InfoTooltip text={t('realestate.tooltip_cashflow_door')} /></span><span style={{ ...styles.kpiValue, color: getScoreColor(metrics.cashFlowMensuel / (parseInt(localData.nombreLogements) || 1), 75, 'min') }}>{formatCurrency(metrics.cashFlowMensuel / (parseInt(localData.nombreLogements) || 1))}</span><span style={styles.kpiTarget}>{t('realestate.target_monthly')}</span></div>
            </div>

            {/* GRILLE PRINCIPALE */}
            <div className="responsive-dashboard-grid">

                {/* Acquisition */}
                <div className="card-hover-fix" style={styles.inputCardAcquisition}>
                    <div style={styles.sectionTitle}><HomeIcon style={{ width: '20px', color: 'var(--info-color)' }} /> {t('realestate.acquisition')}</div>
                    <div className="fieldset-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div className="input-group"><label htmlFor="prixAchat">{t('realestate.purchase_price')} <InfoTooltip text={t('realestate.tooltip_purchase_price')} align="left" /></label><CurrencyInput id="prixAchat" name="prixAchat" value={localData.prixAchat} onChange={handleChange} placeholder="0.00" /></div>
                        <div className="input-group"><label htmlFor="miseDeFonds">{t('realestate.down_payment')} <InfoTooltip text={t('realestate.tooltip_down_payment')} align="right" /></label><CurrencyInput id="miseDeFonds" name="miseDeFonds" value={localData.miseDeFonds} onChange={handleChange} placeholder="0.00" /></div>
                        <div className="input-group"><label htmlFor="hypothequeAnnuelle">{t('realestate.mortgage_payment')} <InfoTooltip text={t('realestate.tooltip_mortgage_payment')} align="left" /></label><CurrencyInput id="hypothequeAnnuelle" name="hypothequeAnnuelle" value={localData.hypothequeAnnuelle} onChange={handleChange} placeholder={t('common.placeholders.total_year')} /></div>
                        <div className="input-group"><label htmlFor="amortissementCapital">{t('realestate.capital_repayment')} <InfoTooltip text={t('realestate.tooltip_capital_repayment')} align="right" /></label><CurrencyInput id="amortissementCapital" name="amortissementCapital" value={localData.amortissementCapital} onChange={handleChange} placeholder={t('common.placeholders.capital')} /></div>
                    </div>
                </div>

                <div className="card-hover-fix" style={{ ...styles.resultCard, textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', marginBottom: '10px' }}>{t('realestate.finance_structure')}</h4>
                    <div style={{ flex: 1, position: 'relative', minHeight: '150px', width: '100%' }}>
                        <Bar data={chartFinancement} options={chartFinancementOptions} />
                    </div>
                    <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        {t('realestate.project_total_cost')} : <strong>{formatCurrency(metrics.investissementTotal + metrics.finalMontantPret)}</strong>
                    </div>
                </div>

                {/* Opérations */}
                <div className="card-hover-fix" style={styles.inputCardOperation}>
                    <div style={styles.sectionTitle}><BanknotesIcon style={{ width: '20px', color: 'var(--warning-color)' }} /> {t('realestate.operations')}</div>
                    <div className="fieldset-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div className="input-group"><label htmlFor="revenusBruts">{t('realestate.gross_revenue')} <InfoTooltip text={t('realestate.tooltip_gross_revenue')} align="left" /></label><CurrencyInput id="revenusBruts" name="revenusBruts" value={localData.revenusBruts} onChange={handleChange} placeholder={t('common.placeholders.total_rent')} /></div>

                        <div className="input-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <label htmlFor="depensesExploitation" style={{ margin: 0 }}>{t('realestate.operating_expenses')} <InfoTooltip text={t('realestate.tooltip_operating_expenses')} align="right" /></label>
                                <button onClick={openExpensesModal} title="Détail" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--info-color)' }}>
                                    <ListBulletIcon style={{ width: '20px' }} />
                                </button>
                            </div>
                            <CurrencyInput id="depensesExploitation" name="depensesExploitation" value={localData.depensesExploitation} onChange={handleChange} placeholder={t('common.placeholders.taxes_insurance')} />
                        </div>

                        <div className="input-group"><label htmlFor="tauxVacance">{t('realestate.vacancy_rate')} <InfoTooltip text={t('realestate.tooltip_vacancy_rate')} align="left" /></label><input type="number" id="tauxVacance" name="tauxVacance" value={localData.tauxVacance} onChange={handleChange} style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }} /></div>

                        <div className="input-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <label htmlFor="autresRevenus" style={{ margin: 0 }}>{t('realestate.other_revenue')} <InfoTooltip text={t('realestate.tooltip_other_revenue')} align="right" /></label>
                                <button onClick={openIncomeModal} title="Détail" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--info-color)' }}>
                                    <ListBulletIcon style={{ width: '20px' }} />
                                </button>
                            </div>
                            <CurrencyInput id="autresRevenus" name="autresRevenus" value={localData.autresRevenus} onChange={handleChange} placeholder="0.00" />
                        </div>
                    </div>
                    <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
                        <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>RNE (NOI) <InfoTooltip text={t('realestate.tooltip_rne')} align="center" /></span><span style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.1rem' }}>{formatCurrency(metrics.rne)}</span>
                        </div>
                    </div>
                </div>

                <div className="card-hover-fix" style={{ ...styles.resultCard, textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', marginBottom: '10px' }}>{t('realestate.cashflow')}</h4>
                    <div style={{ flex: 1, position: 'relative', minHeight: '200px' }}>
                        <Bar data={chartCashflow} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: true, ticks: { color: 'var(--text-color)', font: { size: 10 } } } } }} />
                    </div>
                </div>

                {/* Paramètres Avancés */}
                <div className="card-hover-fix" style={styles.inputCardAdvanced}>
                    <div style={styles.sectionTitle}><CalculatorIcon style={{ width: '20px', color: 'var(--perf-color)' }} /> {t('realestate.advanced')}</div>
                    <div className="fieldset-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                        <div className="input-group"><label htmlFor="nombreLogements">{t('realestate.units')} <InfoTooltip text={t('realestate.tooltip_units')} align="left" /></label><input type="number" id="nombreLogements" name="nombreLogements" value={localData.nombreLogements} onChange={handleChange} style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }} /></div>
                        <div className="input-group"><label htmlFor="tauxAppreciation">{t('realestate.appreciation')} <InfoTooltip text={t('realestate.tooltip_appreciation')} align="center" /></label><input type="number" id="tauxAppreciation" name="tauxAppreciation" value={localData.tauxAppreciation} onChange={handleChange} style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }} /></div>
                        <div className="input-group"><label htmlFor="tauxImposition">{t('realestate.tax_rate')} <InfoTooltip text={t('realestate.tooltip_tax_rate')} align="right" /></label><input type="number" id="tauxImposition" name="tauxImposition" value={localData.tauxImposition} onChange={handleChange} style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }} /></div>
                    </div>
                    <div className="fieldset-grid" style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div className="input-group"><label htmlFor="valeurActuelle">{t('realestate.current_value')} <InfoTooltip text={t('realestate.tooltip_current_value')} align="left" /></label><CurrencyInput id="valeurActuelle" name="valeurActuelle" value={localData.valeurActuelle} onChange={handleChange} placeholder={t('common.placeholders.diff_purchase')} /></div>
                        <div className="input-group"><label htmlFor="soldeHypothequeRestant">{t('realestate.mortgage_balance')} <InfoTooltip text={t('realestate.tooltip_mortgage_balance')} align="right" /></label><CurrencyInput id="soldeHypothequeRestant" name="soldeHypothequeRestant" value={localData.soldeHypothequeRestant} onChange={handleChange} placeholder={t('common.placeholders.diff_loan')} /></div>
                    </div>
                    <div className="fieldset-grid" style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div className="input-group"><label htmlFor="montantTotalPret">{t('realestate.total_loan_amount')} <InfoTooltip text={t('realestate.tooltip_total_loan_amount')} align="left" /></label><CurrencyInput id="montantTotalPret" name="montantTotalPret" value={localData.montantTotalPret} onChange={handleChange} placeholder={t('common.placeholders.optional')} /></div>
                        <div className="input-group"><label htmlFor="amortissementFiscal">{t('realestate.tax_amortization')} <InfoTooltip text={t('realestate.tooltip_tax_amortization')} align="right" /></label><CurrencyInput id="amortissementFiscal" name="amortissementFiscal" value={localData.amortissementFiscal} onChange={handleChange} placeholder={t('common.placeholders.optional')} /></div>
                    </div>
                </div>

                {/* --- CARTE : COÛTS DE DÉMARRAGE --- */}
                <div className="card-hover-fix" style={styles.inputCardStartup}>
                    <div style={styles.sectionTitle}><WrenchScrewdriverIcon style={{ width: '20px', color: 'var(--success-color)' }} /> {t('realestate.startup_costs')}</div>
                    <div className="fieldset-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div className="input-group"><label htmlFor="fraisBienvenue">{t('realestate.welcome_tax')} <InfoTooltip text={t('realestate.tooltip_welcome_tax')} align="left" /></label><CurrencyInput id="fraisBienvenue" name="fraisBienvenue" value={localData.fraisBienvenue} onChange={handleChange} placeholder={t('common.placeholders.transfer')} /></div>
                        <div className="input-group"><label htmlFor="fraisNotaire">{t('realestate.notary')} <InfoTooltip text={t('realestate.tooltip_notary')} align="right" /></label><CurrencyInput id="fraisNotaire" name="fraisNotaire" value={localData.fraisNotaire} onChange={handleChange} placeholder={t('common.placeholders.fees')} /></div>
                        <div className="input-group"><label htmlFor="fraisRenovations">{t('realestate.renovations')} <InfoTooltip text={t('realestate.tooltip_renovations')} align="left" /></label><CurrencyInput id="fraisRenovations" name="fraisRenovations" value={localData.fraisRenovations} onChange={handleChange} placeholder={t('common.placeholders.renovations')} /></div>

                        <div className="input-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <label htmlFor="fraisDivers" style={{ margin: 0 }}>{t('realestate.misc_fees')} <InfoTooltip text={t('realestate.tooltip_misc_fees')} align="right" /></label>
                                <button onClick={openFraisModal} title="Détail" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--info-color)' }}>
                                    <ListBulletIcon style={{ width: '20px' }} />
                                </button>
                            </div>
                            <CurrencyInput id="fraisDivers" name="fraisDivers" value={localData.fraisDivers} onChange={handleChange} placeholder={t('common.placeholders.misc')} />
                        </div>
                    </div>
                    <div style={{ marginTop: '15px', fontSize: '0.9rem', color: 'var(--secondary-color)', fontStyle: 'italic', textAlign: 'center' }}>
                        {t('realestate.total_invested')} : <strong>{formatCurrency(metrics.investissementTotal)}</strong>
                    </div>
                </div>

                {/* --- CARTE RATIOS DÉTAILLÉS --- */}
                <div className="card-hover-fix" style={{ ...styles.resultCard, gridColumn: '1 / -1' }}>
                    <div style={styles.sectionTitle}><TableCellsIcon style={{ width: '20px', color: 'var(--info-color)' }} /> {t('realestate.kpi_detail_title')}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div>
                            <h5 style={{ margin: '0 0 10px 0', color: 'var(--secondary-color)', borderBottom: '1px solid #eee', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>{t('realestate.cat_profitability')}</h5>
                            <RatioRow label={t('realestate.gross_yield')} value={`${metrics.grossYield.toFixed(2)}%`} tooltip={t('realestate.tooltip_gross_yield')} />
                            <RatioRow label={t('realestate.mrb')} value={`${metrics.mrb.toFixed(1)}x`} tooltip={t('realestate.tooltip_mrb')} />
                            <RatioRow label={t('realestate.oer')} value={`${metrics.oer.toFixed(1)}%`} tooltip={t('realestate.tooltip_oer')} />
                            <RatioRow label={t('realestate.roi_total')} value={`${metrics.roiTotal.toFixed(2)}%`} tooltip={t('realestate.tooltip_roi_total')} />
                            <RatioRow label={t('realestate.tri_10')} value={`${metrics.tri.toFixed(2)}%`} tooltip={t('realestate.tooltip_tri_10')} />
                        </div>
                        <div>
                            <h5 style={{ margin: '0 0 10px 0', color: 'var(--danger-color)', borderBottom: '1px solid #eee', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>{t('realestate.cat_risk')}</h5>
                            <RatioRow label={t('realestate.break_even')} value={`${metrics.breakEvenRatio.toFixed(1)}%`} tooltip={t('realestate.tooltip_break_even')} />
                            <RatioRow label={t('realestate.safety_margin')} value={`${metrics.safetyMargin.toFixed(1)}%`} tooltip={t('realestate.tooltip_safety_margin')} />
                            <RatioRow label={t('realestate.ltv')} value={`${metrics.ltv.toFixed(1)}%`} tooltip={t('realestate.tooltip_ltv')} />
                            <RatioRow label={t('realestate.debt_yield')} value={`${metrics.debtYield.toFixed(1)}%`} tooltip={t('realestate.tooltip_debt_yield')} />
                        </div>
                        <div>
                            <h5 style={{ margin: '0 0 10px 0', color: 'var(--success-color)', borderBottom: '1px solid #eee', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '0.85rem' }}>{t('realestate.cat_valuation')}</h5>
                            <RatioRow label={t('realestate.price_per_door')} value={formatCurrency(metrics.pricePerDoor)} tooltip={t('realestate.tooltip_price_per_door')} />
                            <RatioRow label={t('realestate.cap_rate')} value={`${metrics.capRate.toFixed(2)}%`} tooltip={t('realestate.tooltip_cap_rate_long')} />
                            <RatioRow label={t('realestate.roe')} value={`${metrics.roe.toFixed(2)}%`} tooltip={t('realestate.tooltip_roe')} />
                            <RatioRow label={t('realestate.tax_efficiency')} value={`${metrics.taxEfficiency.toFixed(1)}%`} tooltip={t('realestate.tooltip_tax_efficiency')} />
                        </div>
                    </div>
                </div>

                {/* --- CARTE : SCORE DE SANTÉ --- */}
                <div className="card-hover-fix" style={styles.resultCard}>
                    <div style={styles.sectionTitle}><ChartBarIcon style={{ width: '20px', color: 'var(--immobilier-color)' }} /> {t('realestate.score_health')}</div>
                    {localData.prixAchat > 0 ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '100%' }}>
                            <div style={{ width: '60%', height: '100%', position: 'relative', minHeight: '250px' }}>
                                <Radar data={chartRadar} options={{ maintainAspectRatio: false, scales: { r: { min: 0, max: 10, ticks: { display: false, stepSize: 2 }, pointLabels: { color: 'var(--text-color)', font: { size: 11 } }, grid: { color: 'rgba(128, 128, 128, 0.2)' } } }, plugins: { legend: { display: false } } }} />
                            </div>
                            <div style={{ width: '40%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px', borderLeft: '1px dashed var(--border-color)' }}>
                                <h3 style={{ margin: 0, color: 'var(--text-color)', fontSize: '1rem', marginBottom: '10px' }}>{t('realestate.score_nexus')}</h3>
                                <TrophyIcon style={{ width: '40px', marginBottom: '5px', color: getNexusScoreColor(metrics.nexusScore) }} />
                                <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1', color: getNexusScoreColor(metrics.nexusScore) }}>
                                    {metrics.nexusScore}
                                </div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '10px' }}>/100</div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--secondary-color)', fontStyle: 'italic' }}>
                            {t('realestate.no_data_score')}
                        </div>
                    )}
                </div>

                <div className="card-hover-fix" style={styles.resultCard}>
                    <div style={styles.sectionTitle}><ArrowTrendingUpIcon style={{ width: '20px', color: 'var(--immobilier-color)' }} /> {t('realestate.equity_projection')}</div>
                    <div style={{ flex: 1, minHeight: '300px', position: 'relative' }}>
                        <Line
                            data={chartProjection}
                            options={{
                                maintainAspectRatio: false,
                                scales: { y: { ticks: { callback: (val) => val >= 1000 ? `${val / 1000}k` : val } } },
                                plugins: { legend: { display: true, position: 'top', labels: { color: 'var(--text-color)' } } }
                            }}
                        />
                    </div>
                </div>

            </div>

            {/* MODALES REVENUS / DÉPENSES / FRAIS */}
            {(showExpensesModal || showIncomeModal || showFraisModal) && (
                <div style={styles.modalOverlay} onClick={(e) => { if (e.target === e.currentTarget) { setShowExpensesModal(false); setShowIncomeModal(false); setShowFraisModal(false); } }}>
                    <div style={styles.modalContent}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                            <h3 style={{ margin: 0 }}>
                                {showExpensesModal ? t('realestate.modal_expenses_title') : (showIncomeModal ? t('realestate.modal_income_title') : t('realestate.modal_fees_title'))}
                            </h3>
                            <button onClick={() => { setShowExpensesModal(false); setShowIncomeModal(false); setShowFraisModal(false); }} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '24px' }} /></button>
                        </div>

                        {(() => {
                            let list = [];
                            if (showExpensesModal) list = localData.depensesDetails;
                            else if (showIncomeModal) list = localData.revenusDetails;
                            else if (showFraisModal) list = localData.fraisDiversDetails;

                            return list.map(item => (
                                <div key={item.id} style={styles.modalRow}>
                                    <input
                                        type="text"
                                        id={`label-${item.id}`}
                                        name={`label-${item.id}`}
                                        value={item.label}
                                        onChange={(e) => handleDetailChange(showExpensesModal ? 'depenses' : (showIncomeModal ? 'revenus' : 'frais'), item.id, 'label', e.target.value)}
                                        style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid var(--border-color)' }}
                                    />
                                    <CurrencyInput
                                        id={`amount-${item.id}`}
                                        name={`amount-${item.id}`}
                                        value={item.amount}
                                        onChange={(e) => handleDetailChange(showExpensesModal ? 'depenses' : (showIncomeModal ? 'revenus' : 'frais'), item.id, 'amount', e.target.value)}
                                        placeholder="0.00"
                                        style={{ width: '120px' }}
                                    />
                                    <button onClick={() => removeItemRow(showExpensesModal ? 'depenses' : (showIncomeModal ? 'revenus' : 'frais'), item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--danger-color)' }}>
                                        <TrashIcon style={{ width: '20px' }} />
                                    </button>
                                </div>
                            ));
                        })()}

                        <button onClick={() => addItemRow(showExpensesModal ? 'depenses' : (showIncomeModal ? 'revenus' : 'frais'))} style={{ marginTop: '10px', background: 'none', border: '1px dashed var(--secondary-color)', color: 'var(--secondary-color)', padding: '8px', width: '100%', borderRadius: '6px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                            <PlusIcon style={{ width: '16px' }} /> {t('realestate.btn_add_row')}
                        </button>

                        <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: 'bold' }}>{t('realestate.total')}:</span>
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
                                {formatCurrency(
                                    showExpensesModal ? localData.depensesExploitation :
                                        (showIncomeModal ? localData.autresRevenus : localData.fraisDivers)
                                )}
                            </span>
                        </div>
                        <button onClick={() => { setShowExpensesModal(false); setShowIncomeModal(false); setShowFraisModal(false); }} style={{ marginTop: '15px', width: '100%', padding: '10px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                            {t('realestate.btn_close')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}