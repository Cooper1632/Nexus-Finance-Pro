import React, { useMemo, useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation } from 'react-i18next';
import HealthRadarModal from './HealthRadarModal';
import NexusScoreModal from './NexusScoreModal';
import PatrimonyDetailModal from './PatrimonyDetailModal';
import Thermometer from './Thermometer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Doughnut, Radar, Bar } from 'react-chartjs-2';
import { QuestionMarkCircleIcon, TrophyIcon, ShieldCheckIcon, BanknotesIcon, ArrowTrendingUpIcon, BuildingLibraryIcon, ScaleIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, RadialLinearScale, PointElement, LineElement, Filler);

// ... (Gardez les plugins gaugeNeedle et gaugeTicks ici s'ils sont utilisés pour la jauge d'objectif) ...
const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw(chart, args, options) {
        const { ctx, data } = chart;
        if (!data.datasets || !data.datasets[0] || data.datasets[0].data.length === 0) return;
        ctx.save();
        const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
        const value = data.datasets[0].data[0];
        const percentage = total > 0 ? value / total : 0;
        const meta = chart.getDatasetMeta(0);
        const dataPoint = meta.data[0];
        if (!dataPoint) return;
        const { x, y, outerRadius } = dataPoint;
        const angle = Math.PI + (percentage * Math.PI);
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -5); ctx.lineTo(outerRadius - 15, 0); ctx.lineTo(0, 5); ctx.fillStyle = '#2C3E50'; ctx.fill();
        ctx.rotate(-angle); ctx.beginPath(); ctx.arc(0, 0, 8, 0, 2 * Math.PI); ctx.fillStyle = '#2C3E50'; ctx.fill();
        ctx.restore();
    }
};
const gaugeTicks = {
    id: 'gaugeTicks',
    beforeDatasetDraw(chart) {
        const { ctx, data } = chart;
        if (!data.datasets || !data.datasets[0]) return;
        const meta = chart.getDatasetMeta(0);
        const dataPoint = meta.data[0];
        if (!dataPoint) return;
        const { x, y, outerRadius } = dataPoint;
        ctx.save();
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 10; i++) {
            const percent = i / 10;
            const angle = Math.PI + (percent * Math.PI);
            const isMain = (i === 0 || i === 5 || i === 10);
            const tickLength = isMain ? 12 : 6;
            const startRadius = outerRadius - 2;
            const endRadius = outerRadius - 2 - tickLength;
            const x1 = x + Math.cos(angle) * startRadius;
            const y1 = y + Math.sin(angle) * startRadius;
            const x2 = x + Math.cos(angle) * endRadius;
            const y2 = y + Math.sin(angle) * endRadius;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        ctx.restore();
    }
};

const PASTEL = { green: '#82E0AA', red: '#F1948A', blue: '#85C1E9', yellow: '#F7DC6F', orange: '#F0B27A', purple: '#D2B4DE', teal: '#A3E4D7', grey: '#BDC3C7' };

const InfoIcon = ({ text, align = 'center' }) => {
    const [isVisible, setIsVisible] = useState(false);
    let tooltipPosition = {}; let arrowPosition = {};
    if (align === 'right') { tooltipPosition = { right: '-5px', left: 'auto', transform: 'none' }; arrowPosition = { right: '8px', left: 'auto' }; }
    else if (align === 'left') { tooltipPosition = { left: '-5px', right: 'auto', transform: 'none' }; arrowPosition = { left: '8px', right: 'auto' }; }
    else { tooltipPosition = { left: '50%', transform: 'translateX(-50%)' }; arrowPosition = { left: '50%', marginLeft: '-6px' }; }
    return (
        <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '6px', cursor: 'help', zIndex: 50 }} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} onClick={() => setIsVisible(!isVisible)}>
            <QuestionMarkCircleIcon style={{ width: '18px', color: 'var(--secondary-color)' }} />
            {isVisible && (<span style={{ position: 'absolute', bottom: '135%', backgroundColor: '#2C3E50', color: '#fff', padding: '10px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'normal', width: 'max-content', maxWidth: '220px', whiteSpace: 'normal', zIndex: 9999, textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', lineHeight: '1.4', border: '1px solid rgba(255,255,255,0.1)', ...tooltipPosition }}>{text}<span style={{ position: 'absolute', top: '100%', borderWidth: '6px', borderStyle: 'solid', borderColor: '#2C3E50 transparent transparent transparent', ...arrowPosition }}></span></span>)}
        </span>
    );
};

// ... (FinancialHealthRadar, ObjectiveCard, NexusScoreCard restent inchangés, je les inclus dans le fichier complet ci-dessous pour copier-coller facile) ...
const FinancialHealthRadar = ({ scores, onOpen }) => {
    const { t } = useTranslation();
    const data = { labels: [t('dashboard.radar_safety'), t('dashboard.radar_growth'), t('dashboard.radar_perf'), t('dashboard.radar_wealth'), t('dashboard.radar_liquidity')], datasets: [{ label: t('dashboard.radar_profile'), data: [scores.debt || 0, scores.savings || 0, scores.perf || 0, scores.nw || 0, scores.flow || 0], backgroundColor: 'rgba(130, 224, 170, 0.4)', borderColor: PASTEL.green, borderWidth: 2, pointBackgroundColor: PASTEL.green, fill: true }, { label: t('dashboard.radar_target'), data: [100, 100, 100, 100, 100], borderColor: '#eee', borderWidth: 1, pointRadius: 0, borderDash: [5, 5], fill: false }], };
    const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { r: { angleLines: { color: 'rgba(0,0,0,0.1)' }, grid: { color: 'rgba(0,0,0,0.1)' }, pointLabels: { font: { size: 10 }, color: '#666' }, suggestedMin: 0, suggestedMax: 100, ticks: { display: false, stepSize: 25 } } } };
    return (<div className="chart-container" onClick={onOpen} style={{ height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } }}><h3 style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', color: 'var(--secondary-color)' }}>{t('dashboard.health_radar')} <InfoIcon text={t('dashboard.health_radar_tooltip')} align="left" /></h3><div style={{ width: '100%', height: '220px' }}><Radar data={data} options={options} /></div><div className="btn-view-details" style={{ marginTop: 'auto' }}>{t('dashboard.view_details')}</div></div>);
};

const ObjectiveCard = ({ netWorth, onOpen }) => {
    const { t } = useTranslation();
    const { formatCurrency } = useData();
    const [goal, setGoal] = useState(() => { try { return localStorage.getItem('nexus_dashboard_goal') || 1000000; } catch { return 1000000; } });
    const handleEditGoal = (e) => { e.stopPropagation(); const newGoal = prompt(t('dashboard.edit_goal_prompt'), goal); if (newGoal && !isNaN(newGoal)) { setGoal(parseFloat(newGoal)); localStorage.setItem('nexus_dashboard_goal', parseFloat(newGoal)); } };
    const percentage = goal > 0 ? Math.min(100, Math.max(0, (netWorth / goal) * 100)) : 0;
    const chartColor = percentage >= 100 ? PASTEL.green : PASTEL.blue;
    const textColor = percentage >= 100 ? 'var(--success-color)' : 'var(--info-color)';
    const data = { labels: [t('dashboard.reached'), t('dashboard.left')], datasets: [{ data: [percentage, 100 - percentage], backgroundColor: [chartColor, '#eee'], borderWidth: 0, circumference: 180, rotation: -90 }] };
    return (<div className="chart-container" onClick={onOpen} style={{ height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } }}><button onClick={handleEditGoal} className="icon-btn" style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary-color)', padding: 0, width: 'auto', height: 'auto', boxShadow: 'none' }}><PencilSquareIcon style={{ width: '18px' }} /></button><h3 style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', color: 'var(--secondary-color)' }}>{t('dashboard.freedom_goal')} <InfoIcon text={t('dashboard.freedom_goal_tooltip')} align="right" /></h3><div style={{ width: '100%', height: '140px', position: 'relative', marginTop: '20px' }}><Doughnut data={data} plugins={[gaugeTicks, gaugeNeedle]} options={{ responsive: true, maintainAspectRatio: false, cutout: '75%', plugins: { legend: { display: false }, tooltip: { enabled: false } } }} /><div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', marginTop: '15px' }}><span style={{ fontSize: '1.8rem', fontWeight: '800', color: textColor }}>{percentage.toFixed(1)}%</span></div></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 20px', marginTop: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.8rem', color: '#666' }}>{t('dashboard.current')}</span>
                <strong style={{ fontSize: '0.95rem' }}>{formatCurrency(netWorth)}</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.8rem', color: '#666' }}>{t('dashboard.target')}</span>
                <strong style={{ fontSize: '0.95rem' }}>{formatCurrency(goal)}</strong>
            </div>
        </div>
        <div className="btn-view-details" style={{ marginTop: 'auto', position: 'relative', zIndex: 10 }} onClick={(e) => { e.stopPropagation(); onOpen(); }}>{t('dashboard.view_details')}</div></div>);
};

const NexusScoreCard = ({ score, details, onOpen }) => {
    const { t } = useTranslation();
    let chartColor = PASTEL.red; if (score >= 50) chartColor = PASTEL.orange; if (score >= 70) chartColor = PASTEL.yellow; if (score >= 90) chartColor = PASTEL.green; if (score === 100) chartColor = PASTEL.blue;
    let textColor = 'var(--danger-color)'; if (score >= 50) textColor = 'var(--warning-color)'; if (score >= 90) textColor = 'var(--success-color)'; if (score === 100) textColor = 'var(--info-color)';
    const data = { labels: [t('dashboard.score_label'), t('dashboard.left')], datasets: [{ data: [score, 100 - score], backgroundColor: [chartColor, '#eee'], borderWidth: 0, circumference: 180, rotation: 270 }] };
    const getDetailColor = (isGood) => isGood ? 'var(--success-color)' : 'var(--warning-color)';
    return (<div className="chart-container" onClick={onOpen} style={{ height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', padding: '10px 20px', position: 'relative', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } }}><h3 style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', marginBottom: '5px', textAlign: 'center' }}>{t('dashboard.nexus_score')} <InfoIcon text={t('dashboard.nexus_score_tooltip')} /></h3><div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', height: '100%', marginTop: '10px' }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55%' }}><TrophyIcon style={{ width: '35px', height: '35px', color: '#FFD700', marginBottom: '5px' }} /><div style={{ width: '100%', height: '120px', position: 'relative' }}><Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { display: false }, tooltip: { enabled: false } } }} /><div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}><span style={{ fontSize: '1.6rem', fontWeight: '800', color: textColor, lineHeight: '1' }}>{score.toFixed(0)}</span></div></div></div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: '#666', width: '40%', paddingLeft: '15px', borderLeft: '1px solid var(--border-color)' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span><ShieldCheckIcon style={{ width: '14px', display: 'inline' }} /> {t('dashboard.score_debt')}</span><strong style={{ color: getDetailColor(details.debtScore === 30) }}>{details.debtScore}</strong></div><div style={{ display: 'flex', justifyContent: 'space-between' }}><span><BanknotesIcon style={{ width: '14px', display: 'inline' }} /> {t('dashboard.score_savings')}</span><strong style={{ color: getDetailColor(details.savingsScore > 20) }}>{details.savingsScore}</strong></div><div style={{ display: 'flex', justifyContent: 'space-between' }}><span><ArrowTrendingUpIcon style={{ width: '14px', display: 'inline' }} /> {t('dashboard.score_perf')}</span><strong style={{ color: getDetailColor(details.perfScore > 10) }}>{details.perfScore}</strong></div><div style={{ display: 'flex', justifyContent: 'space-between' }}><span><BuildingLibraryIcon style={{ width: '14px', display: 'inline' }} /> {t('dashboard.score_assets')}</span><strong style={{ color: getDetailColor(details.nwScore > 10) }}>{details.nwScore}</strong></div></div></div><div className="btn-view-details" style={{ marginTop: 'auto' }}>{t('dashboard.view_details')}</div></div>);
};

function Dashboard({ setActiveMode }) {
    const { appState, formatCurrency } = useData();
    const { t } = useTranslation();
    const maxWidthSetting = appState.settings?.maxWidth || '1400px';
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // STATES POUR LES MODALS
    const [openScoreModal, setOpenScoreModal] = useState(false);
    const [openRadarModal, setOpenRadarModal] = useState(false);
    const [openPatrimonyModal, setOpenPatrimonyModal] = useState(false);

    useEffect(() => { const handleResize = () => setWindowWidth(window.innerWidth); window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);
    const isTabletOrMobile = windowWidth < 1024;

    const safeAppState = appState || {};
    const budget = safeAppState.budget || { revenus: [], depenses: {}, epargne: [], actifs: [] };
    const plan = safeAppState.plan || { debts: [] };
    const investment = safeAppState.investment || { transactions: [], deposits: [] };

    const getNetWorthFontSize = () => { switch (maxWidthSetting) { case '1000px': return '1.8rem'; case '1200px': return '2.0rem'; case '1400px': return '2.4rem'; case '1600px': return '2.8rem'; case '100%': return '2.8rem'; default: return '2.4rem'; } };

    const calculateHoldings = () => {
        const h = {}; const prices = investment.prices || {}; const txs = investment.transactions || [];
        txs.forEach(tx => {
            if (!h[tx.symbol]) h[tx.symbol] = { quantity: 0, cost: 0, price: prices[tx.symbol] || 0 };
            const qty = parseFloat(tx.quantity) || 0; const price = parseFloat(tx.price) || 0; const fees = parseFloat(tx.fees) || 0;
            if (tx.type === 'buy') { h[tx.symbol].quantity += qty; h[tx.symbol].cost += (qty * price) + fees; }
            else if (tx.type === 'sell') { if (h[tx.symbol].quantity > 0) { const avgCost = h[tx.symbol].cost / h[tx.symbol].quantity; h[tx.symbol].cost -= (qty * avgCost); } h[tx.symbol].quantity -= qty; }
        });
        return h;
    };

    const holdings = useMemo(() => calculateHoldings(), [investment]);
    const portfolioValue = Object.values(holdings).reduce((sum, h) => sum + (h.quantity * (h.price || (h.quantity > 0 ? h.cost / h.quantity : 0))), 0);
    const budgetAssets = budget.actifs ? budget.actifs.reduce((sum, item) => sum + (parseFloat(item.cost) || 0), 0) : 0;
    const mortgageAssets = plan.mortgages ? plan.mortgages.reduce((sum, m) => sum + (parseFloat(m.valeur) || 0), 0) : 0;
    const totalAssets = portfolioValue + budgetAssets + mortgageAssets;
    const totalLiabilities = (plan.debts ? plan.debts.reduce((sum, d) => sum + (parseFloat(d.montant) || 0), 0) : 0) + (plan.mortgages ? plan.mortgages.reduce((sum, m) => sum + (parseFloat(m.solde) || 0), 0) : 0);
    const netWorth = totalAssets - totalLiabilities;
    const debtRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

    const normalize = (c, f) => { const factors = { 12: 1, 26: 26 / 12, 52: 52 / 12, 1: 1 / 12, 4: 1 / 3, 2: 1 / 6 }; return (parseFloat(c) || 0) * (factors[f] || 1); };
    const totalRev = budget.revenus ? budget.revenus.reduce((s, i) => s + normalize(i.cost, i.freq), 0) : 0;
    const totalEp = budget.epargne ? budget.epargne.reduce((s, i) => s + normalize(i.cost, i.freq), 0) : 0;
    const totalDep = budget.depenses ? Object.values(budget.depenses).flat().reduce((s, i) => s + normalize(i.cost, i.freq), 0) : 0;
    const cashFlow = totalRev - totalDep - totalEp;
    const totalSavingsReal = totalEp + Math.max(0, cashFlow);
    const savingsRate = totalRev > 0 ? (totalSavingsReal / totalRev) * 100 : 0;

    const calculateScore = () => {
        let score = 0; let details = { debtScore: 0, savingsScore: 0, nwScore: 0, perfScore: 0 };
        let rawDebtScore = 30 - (debtRatio * 0.5); if (totalLiabilities > 0) rawDebtScore = Math.min(29, rawDebtScore);
        details.debtScore = Math.max(0, Math.min(30, Math.round(rawDebtScore))); score += details.debtScore;
        const rawSavingsScore = savingsRate * 1.5; details.savingsScore = Math.max(0, Math.min(30, Math.round(rawSavingsScore))); score += details.savingsScore;
        if (netWorth > 0) details.nwScore = 20; else if (netWorth > -10000) details.nwScore = 10; score += details.nwScore;
        const totalCost = Object.values(holdings).reduce((s, h) => s + h.cost, 0); const totalGain = portfolioValue - totalCost;
        if (totalGain > 0) details.perfScore = 20; else if (totalGain === 0 && portfolioValue > 0) details.perfScore = 10; else details.perfScore = 5;
        if (portfolioValue === 0) details.perfScore = 20; score += details.perfScore;
        return { total: score, details };
    };
    const nexusScore = calculateScore();

    const radarScores = useMemo(() => {
        let flowScore = 0; if (cashFlow > 1000) flowScore = 100; else if (cashFlow > 500) flowScore = 80; else if (cashFlow > 0) flowScore = 60; else if (cashFlow > -500) flowScore = 40; else flowScore = 20;
        return { debt: (nexusScore.details.debtScore / 30) * 100, savings: (nexusScore.details.savingsScore / 30) * 100, perf: (nexusScore.details.perfScore / 20) * 100, nw: (nexusScore.details.nwScore / 20) * 100, flow: flowScore };
    }, [nexusScore, cashFlow]);

    const trackedDebts = plan.debts ? plan.debts.filter(d => d.checked) : [];
    const totalInitialDebt = trackedDebts.reduce((s, d) => s + (parseFloat(d.montantInitial) || 0), 0);
    const totalCurrentDebt = trackedDebts.reduce((s, d) => s + parseFloat(d.montant), 0);
    const isDebtIncreased = totalCurrentDebt > totalInitialDebt;
    const debtBarColor = isDebtIncreased ? PASTEL.red : PASTEL.green;
    const debtWarning = isDebtIncreased ? <span style={{ color: '#000000', fontWeight: 'bold' }}>{t('dashboard.debt_increased_warning')}</span> : null;
    const debtProgress = totalInitialDebt > 0 ? ((totalInitialDebt - totalCurrentDebt) / totalInitialDebt * 100) : 0;
    const debtMiniItems = trackedDebts.map(d => { const increased = d.montant > d.montantInitial; return { label: d.titre, percentage: d.montantInitial > 0 ? ((d.montantInitial - d.montant) / d.montantInitial * 100) : 0, value: d.montantInitial - d.montant, total: d.montantInitial, warning: increased }; });

    const totalDeposits = investment.deposits ? investment.deposits.reduce((s, d) => s + d.amount, 0) : 0;
    const depositProgress = portfolioValue > 0 ? (totalDeposits / portfolioValue * 100) : (totalDeposits > 0 ? 100 : 0);
    const totalGainVal = portfolioValue - totalDeposits;
    const gainTextColor = totalGainVal >= 0 ? 'var(--success-color)' : 'var(--danger-color)';
    const depositBarColor = totalGainVal >= 0 ? PASTEL.green : PASTEL.red;
    const totalReturnPct = totalDeposits > 0 ? ((portfolioValue - totalDeposits) / totalDeposits) * 100 : 0;

    const symbols = Object.keys(holdings).filter(s => holdings[s].quantity > 0);
    const chartColors = [PASTEL.yellow, PASTEL.blue, PASTEL.green, PASTEL.purple, PASTEL.red, PASTEL.teal, PASTEL.orange, '#D7BDE2', '#AEB6BF'];
    const allocationData = { labels: [t('dashboard.invest_perf')], datasets: symbols.map((s, i) => ({ label: s, data: [holdings[s].quantity * (holdings[s].price || (holdings[s].cost / holdings[s].quantity))], backgroundColor: chartColors[i % chartColors.length], barThickness: 50 })) };
    const allocationOptions = { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true, callbacks: { label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}` } } }, scales: { x: { stacked: true, display: false }, y: { stacked: true, display: false } } };
    const nwData = { labels: [t('dashboard.score_assets'), t('dashboard.total_liabilities')], datasets: [{ label: t('dashboard.amount_label'), data: [totalAssets, totalLiabilities], backgroundColor: [PASTEL.green, PASTEL.red], borderRadius: 4, barThickness: 25, }] };
    const nwOptions = { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true } }, scales: { x: { display: false, grid: { display: false } }, y: { display: true, grid: { display: false }, ticks: { color: '#333', font: { size: 11, weight: 'bold' } } } } };
    const savingsData = { labels: [t('dashboard.savings'), t('dashboard.expenses')], datasets: [{ data: [savingsRate, 100 - savingsRate], backgroundColor: [PASTEL.green, PASTEL.red], borderWidth: 0 }] };

    const cardStyle = { backgroundColor: 'var(--card-background)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '15px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', position: 'relative' };
    const gridStyle = isTabletOrMobile ? { display: 'flex', flexDirection: 'column', gap: '10px' } : { display: 'grid', gridTemplateColumns: 'minmax(0, 300fr) minmax(0, 320fr) minmax(0, 300fr)', gap: '10px', alignItems: 'stretch' };
    const gridProp = (desktopStyle) => isTabletOrMobile ? {} : desktopStyle;

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <style>{`@media print { .dashboard-container { display: block !important; background: none !important; padding: 0 !important; box-shadow: none !important; border: none !important; } .dashboard-card, .dashboard-main-card, .chart-container { page-break-inside: avoid !important; break-inside: avoid !important; box-shadow: none !important; border: 1px solid #ddd !important; margin-bottom: 20px !important; } h1, h2, h3 { color: #000 !important; } .icon-btn, button { display: none !important; } .dark-panel-bg { background-color: white !important; padding: 0 !important; } } @keyframes bounce-small { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(3px); } } .scroll-indicator-anim { animation: bounce-small 1.5s infinite; }`}</style>
            <div style={{ width: '100%' }}>
                <div className="module-header-with-reset" style={{ marginBottom: '10px' }}><h2>{t('dashboard.title')}</h2></div>

                <div className="dashboard-container dark-panel-bg" style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '16px', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', ...gridStyle }}>

                    <div className="dashboard-main-card" style={{ ...cardStyle, ...gridProp({ gridColumn: '1 / -1' }), display: 'grid', gridTemplateColumns: isTabletOrMobile ? 'repeat(auto-fit, minmax(200px, 1fr))' : '0.7fr 1.6fr 1fr 0.7fr', alignItems: 'center', gap: '10px', padding: '25px' }}>
                        <div style={{ textAlign: 'center' }}><h3 style={{ color: 'var(--success-color)', marginBottom: '8px', fontSize: '1.1rem' }}>{t('dashboard.total_assets')} <InfoIcon text={t('dashboard.total_assets_tooltip')} /></h3><span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--success-color)' }}>{formatCurrency(totalAssets)}</span></div>
                        <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', padding: '0 20px' }}><h2 style={{ fontSize: '1.2rem', color: 'var(--text-color)', marginBottom: '8px' }}>{t('dashboard.net_worth')} <InfoIcon text={t('dashboard.net_worth_tooltip')} /></h2><span style={{ fontSize: getNetWorthFontSize(), fontWeight: 'bold', color: netWorth >= 0 ? 'var(--info-color)' : 'var(--danger-color)', transition: 'font-size 0.3s' }}>{formatCurrency(netWorth)}</span></div>
                        <div style={{ height: '100px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid var(--border-color)' }}><div style={{ width: '90%', height: '100px' }}><Bar data={nwData} options={nwOptions} /></div></div>
                        <div style={{ textAlign: 'center' }}><h3 style={{ color: 'var(--danger-color)', marginBottom: '8px', fontSize: '1.1rem' }}>{t('dashboard.total_liabilities')} <InfoIcon text={t('dashboard.total_liabilities_tooltip')} align="right" /></h3><span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--danger-color)' }}>{formatCurrency(totalLiabilities)}</span></div>
                    </div>

                    <div style={{ ...cardStyle, ...gridProp({ gridColumn: '1' }), backgroundColor: '#EBF5FB', padding: '15px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}><div><div className="dashboard-card-title">{t('dashboard.net_flow')} <InfoIcon text={t('dashboard.net_flow_tooltip')} /></div><div className={`dashboard-card-value`} style={{ fontSize: '1.4rem', color: cashFlow >= 0 ? 'var(--info-color)' : 'var(--danger-color)' }}>{formatCurrency(cashFlow)}</div></div><button onClick={() => setActiveMode('budget')} className="icon-btn" style={{ width: '100%', padding: '6px', fontSize: '0.8rem', justifyContent: 'center' }}>{t('dashboard.see_budget')}</button></div>
                        <div style={{ width: '1px', height: '80%', background: 'rgba(0,0,0,0.1)', margin: '0 auto' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}><span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '5px' }}>{t('dashboard.total_income')}</span><span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--success-color)' }}>{formatCurrency(totalRev)}</span></div>
                    </div>

                    <div style={{ ...cardStyle, ...gridProp({ gridColumn: '2' }), display: 'grid', gridTemplateColumns: '1.5fr 1fr', alignItems: 'flex-start', gap: '10px' }}>
                        <div><div className="dashboard-card-title">{t('dashboard.savings_rate')} <InfoIcon text={t('dashboard.savings_rate_tooltip')} /></div><div className="dashboard-card-value" style={{ fontSize: '1.5rem', color: 'var(--success-color)' }}>{savingsRate.toFixed(1)}%</div><div style={{ fontSize: '0.75rem', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '3px' }}><div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: PASTEL.green }}></span> {t('dashboard.savings')}</div><div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: PASTEL.red }}></span> {t('dashboard.expenses')}</div></div></div>
                        <div style={{ width: '80px', height: '80px', justifySelf: 'center' }}><Doughnut data={savingsData} options={{ responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { display: false }, tooltip: { enabled: false } } }} /></div>
                    </div>

                    <div style={{ ...cardStyle, ...gridProp({ gridColumn: '3' }), backgroundColor: '#FADBD8', padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', textAlign: 'center' }}>
                        <div>
                            <div className="dashboard-card-title" style={{ marginBottom: '5px' }}>{t('dashboard.total_debt')} <InfoIcon text={t('dashboard.total_debt_tooltip')} /></div>
                            <div style={{ fontSize: '0.7rem', color: '#555', marginTop: '-4px', marginBottom: '4px', fontStyle: 'italic' }}>{t('dashboard.total_debt_note')}</div>
                            <div className="dashboard-card-value" style={{ fontSize: '2rem', color: '#000000', fontWeight: '800' }}>{formatCurrency(totalCurrentDebt)}</div>
                        </div>
                        <button onClick={() => setActiveMode('plan')} className="icon-btn" style={{ width: 'auto', padding: '8px 20px', fontSize: '0.9rem', border: '1px solid var(--danger-color)', color: 'var(--danger-color)' }}>{t('dashboard.see_plan')}</button>
                    </div>

                    <div style={{ ...cardStyle, ...gridProp({ gridColumn: '1', gridRow: 'span 2' }) }}>
                        {/* REMPLACEMENT ICI PAR LE COMPOSANT EXTERNE */}
                        <Thermometer
                            title={t('dashboard.debt_repayment')}
                            tooltip={t('dashboard.debt_repayment_tooltip')}
                            percentage={Math.min(100, debtProgress)}
                            value1={totalInitialDebt - totalCurrentDebt}
                            label1={t('dashboard.paid')}
                            value2={totalCurrentDebt}
                            label2={t('dashboard.remaining')}
                            barColor={debtBarColor}
                            miniItems={debtMiniItems}
                            warning={debtWarning}
                        />
                    </div>

                    <div style={{ ...cardStyle, ...gridProp({ gridColumn: '2' }), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#FEF9E7', border: `1px solid var(--warning-color)`, minHeight: '160px' }}>
                        <h4 style={{ margin: 0, color: 'var(--warning-color)', fontSize: '0.9rem' }}>{t('dashboard.debt_ratio')} <InfoIcon text={t('dashboard.debt_ratio_tooltip')} /></h4>
                        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '5px 0', color: debtRatio > 40 ? 'var(--danger-color)' : 'var(--success-color)' }}>{debtRatio.toFixed(1)}%</div>
                        <ScaleIcon style={{ width: '24px', color: debtRatio > 40 ? 'var(--danger-color)' : 'var(--success-color)' }} />
                        <div style={{ width: '80%', background: '#ddd', height: '6px', borderRadius: '3px', marginTop: '10px', overflow: 'hidden' }}><div style={{ width: `${Math.min(100, debtRatio)}%`, background: debtRatio > 40 ? PASTEL.red : PASTEL.green, height: '100%' }}></div></div>
                    </div>

                    <div style={{ ...cardStyle, ...gridProp({ gridColumn: '3' }), minHeight: '160px', padding: '15px' }}>
                        <Thermometer
                            title={t('dashboard.invest_perf')}
                            tooltip={t('dashboard.invest_perf_tooltip')}
                            percentage={Math.min(100, Math.max(0, depositProgress))}
                            value1={totalDeposits} label1={t('dashboard.invested')}
                            value2={totalGainVal} label2={t('dashboard.gain_loss')}
                            barColor={depositBarColor}
                            miniItems={[]}
                            value2Color={gainTextColor}
                            smallFont={true}
                            alignTooltip="right"
                        />

                        <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-color)' }}>{t('dashboard.current_value')}</span>
                                <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{formatCurrency(portfolioValue)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-color)' }}>{t('dashboard.return')}</span>
                                <span style={{ fontWeight: 'bold', fontSize: '1rem', color: totalReturnPct >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>
                                    {totalReturnPct > 0 ? '+' : ''}{totalReturnPct.toFixed(2)}%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{ ...cardStyle, ...gridProp({ gridColumn: '2 / span 2' }), minHeight: '160px', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                            <div><h3 style={{ fontSize: '1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '5px' }}>{t('dashboard.asset_allocation')}</h3>{symbols.length > 0 && <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', fontWeight: 'bold', marginTop: '2px', display: 'block' }}>{formatCurrency(portfolioValue)}</span>}</div>
                            <div style={{ paddingTop: '2px' }}><InfoIcon text={t('dashboard.asset_allocation_tooltip')} align="right" /></div>
                        </div>
                        <div style={{ width: '90%', margin: '0 auto', flex: 1, display: 'flex', alignItems: 'center' }}>
                            {symbols.length > 0 ? <div style={{ width: '100%', height: '80px' }}><Bar data={allocationData} options={allocationOptions} /></div> : <div style={{ color: '#999', fontStyle: 'italic', textAlign: 'center', width: '100%' }}>{t('dashboard.no_assets')}</div>}
                        </div>
                    </div>

                    <div style={{ ...gridProp({ gridColumn: '1' }) }}><FinancialHealthRadar scores={radarScores} onOpen={() => setOpenRadarModal(true)} /></div>
                    <div style={{ ...gridProp({ gridColumn: '2' }) }}><NexusScoreCard score={nexusScore.total} details={nexusScore.details} onOpen={() => setOpenScoreModal(true)} /></div>
                    <div style={{ ...gridProp({ gridColumn: '3' }) }}><ObjectiveCard netWorth={netWorth} onOpen={() => setOpenPatrimonyModal(true)} /></div>

                </div>
            </div>

            <NexusScoreModal isOpen={openScoreModal} onClose={() => setOpenScoreModal(false)} score={nexusScore.total} details={nexusScore.details} />
            <HealthRadarModal isOpen={openRadarModal} onClose={() => setOpenRadarModal(false)} scores={radarScores} />

            <PatrimonyDetailModal
                isOpen={openPatrimonyModal}
                onClose={() => setOpenPatrimonyModal(false)}
                netWorth={netWorth}
                totalAssets={totalAssets}
                totalLiabilities={totalLiabilities}
                assetsDetails={{ investments: portfolioValue, physical: budgetAssets }}
                liabilitiesDetails={{ total: totalLiabilities }}
            />
        </div>
    );
}

export default Dashboard;