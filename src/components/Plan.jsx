import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation, Trans } from 'react-i18next';
import CurrencyInput from './CurrencyInput';
import Modal from './Modal';

import {
    PlusIcon, ArrowDownTrayIcon, TrashIcon, CalculatorIcon, CalendarIcon, StarIcon, ArrowUpCircleIcon, ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ScatterController
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ScatterController);


const parseLocaleNumber = (stringNumber) => {
    if (stringNumber === '' || stringNumber === null || stringNumber === undefined) return 0;
    if (typeof stringNumber === 'number') return stringNumber;
    let clean = stringNumber.toString().replace(/[^0-9.,-]/g, '');
    clean = clean.replace(',', '.');
    const float = parseFloat(clean);
    return isNaN(float) ? 0 : float;
};

const DEBT_COLORS = ['#3498DB', '#E74C3C', '#9B59B6', '#F39C12', '#1ABC9C', '#2C3E50', '#D35400', '#27AE60'];
const getDebtColor = (index) => {
    if (index < 0 || index === undefined || index === null) return DEBT_COLORS[0];
    return DEBT_COLORS[index % DEBT_COLORS.length];
};
const hexToRgba = (hex, alpha) => {
    if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) return `rgba(200, 200, 200, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const InfoIcon = ({ text }) => (
    <div className="info-icon-container" style={{ position: 'relative', display: 'inline-block', marginLeft: '5px', verticalAlign: 'middle' }}>
        <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ddd', color: '#555', textAlign: 'center', lineHeight: '16px', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'help' }}>?</div>
        <div className="info-tooltip">
            {text}
        </div>
        <style>{`
            .info-icon-container:hover .info-tooltip {
                visibility: visible;
                opacity: 1;
            }
            .info-tooltip {
                visibility: hidden;
                width: 250px;
                background-color: #333;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                padding: 10px;
                position: absolute;
                z-index: 99999;
                top: 100%; /* CHANGED: Display below (or above depending on request) - User asked for TOP: 100% (below) but then said "infobulle cachée car dépasse vers le haut" and suggested "top: 100%". Wait, if it overflows TOP, we should move it DOWN. "bottom: 150%" pushes it UP. "top: 100%" pushes it DOWN. Correct. */
                margin-top: 10px;
                right: 0;
                left: auto;
                transform: none;
                margin-left: 0;
                width: 280px;
                opacity: 0;
                transition: opacity 0.3s;
                font-size: 0.8rem;
                font-weight: normal;
                white-space: normal;
                box-shadow: 0px 4px 12px rgba(0,0,0,0.3);
                pointer-events: none;
            }
            .info-tooltip::after {
                content: "";
                position: absolute;
                bottom: 100%; /* Point UP (since tooltip is below) */
                top: auto;
                right: 15px;
                left: auto;
                margin-left: 0;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent #333 transparent; /* Arrow points UP, so bottom color is set */
            }
        `}</style>
    </div>
);

// --- COMPOSANT PHASE STEP ---
const PhaseStep = ({ phaseIndex, focusDebt, rangeLabel, extraAmount, totalPayment, debtsDetails, t }) => {
    const themeColor = focusDebt.color || DEBT_COLORS[0];
    const paleBg = hexToRgba(themeColor, 0.08);
    return (
        <div className="step-box focus" style={{ background: `linear-gradient(to right, ${paleBg}, transparent)`, border: `2px solid ${themeColor}`, borderRadius: '8px', padding: '20px', margin: '20px 0' }}>
            <div className="step-title" style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px', color: 'var(--text-color)' }}>
                {t('plan.phase', { number: phaseIndex })} <strong style={{ color: themeColor }}>{focusDebt.titre}</strong> <small style={{ fontWeight: 'normal', color: 'var(--secondary-color)' }}>({rangeLabel})</small>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-color)', marginBottom: '15px' }}>
                {t('plan.focus_text')}
            </p>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--danger-color)', marginBottom: '15px' }}>{totalPayment}</div>
            <div className="step-details" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
                {debtsDetails.map((d, idx) => (
                    <div key={idx} style={{ padding: '10px', border: d.isFocus ? `2px solid ${d.color}` : '1px solid var(--border-color)', borderRadius: '6px', backgroundColor: d.isFocus ? 'var(--card-background)' : 'rgba(255,255,255,0.5)', opacity: d.isFocus ? 1 : 0.6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ width: '100%' }}>
                            <div style={{ fontSize: '0.85rem', color: d.color, fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: d.color, display: 'inline-block' }}></span>
                                {d.titre}
                            </div>
                            <div style={{ fontSize: '1rem', fontWeight: 'bold', color: d.isFocus ? 'var(--danger-color)' : 'var(--text-color)', marginTop: '2px' }}>
                                {d.paymentDisplay}
                                <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#7F8C8D', marginLeft: '6px' }}>
                                    ({d.rateDisplay})
                                </span>
                            </div>
                        </div>
                        {d.isFocus && <StarIcon style={{ width: '24px', color: d.color }} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

function Plan() {
    const { appState, saveGlobalState, formatCurrency } = useData();
    const { t, i18n } = useTranslation();

    const planData = appState.plan || { debts: [], strategy: 'avalanche', budgetTotal: '', startDate: '' };
    const { debts = [], strategy = 'avalanche' } = planData;

    const [calcParams, setCalcParams] = useState({ budgetTotal: '', startDate: '' });
    const [simulationResults, setSimulationResults] = useState(null);
    const [showBudgetWarning, setShowBudgetWarning] = useState(false);
    const [showIncludeHelp, setShowIncludeHelp] = useState(false);
    const [showBudgetHelp, setShowBudgetHelp] = useState(false);
    // Delete Modal State
    const [deleteModalState, setDeleteModalState] = useState({ isOpen: false, type: null, id: null });

    const openDeleteModal = (type, id) => setDeleteModalState({ isOpen: true, type, id });
    const closeDeleteModal = () => setDeleteModalState({ isOpen: false, type: null, id: null });

    const confirmDelete = () => {
        const { type, id } = deleteModalState;
        if (!type || !id) return;

        const newState = JSON.parse(JSON.stringify(appState));
        if (type === 'debt') {
            newState.plan.debts = newState.plan.debts.filter(d => d.id !== id);
        } else if (type === 'mortgage') {
            if (newState.plan.mortgages) {
                newState.plan.mortgages = newState.plan.mortgages.filter(m => m.id !== id);
            }
        }
        saveGlobalState(newState);
        closeDeleteModal();
    };
    useEffect(() => {
        if (appState.plan && appState.plan.mortgages) {
            let changed = false;
            const updatedMortgages = appState.plan.mortgages.map(m => {
                if (m.amortissement === undefined || m.amortissement === null) {
                    changed = true;
                    return { ...m, amortissement: 25 };
                }
                return m;
            });
            if (changed) {
                const newState = JSON.parse(JSON.stringify(appState));
                newState.plan.mortgages = updatedMortgages;
                saveGlobalState(newState);
            }
        }
    }, [appState.plan?.mortgages]); // Depend strictly on the mortgages array reference

    useEffect(() => {
        setCalcParams(prev => ({
            ...prev,
            budgetTotal: planData.budgetTotal || '',
            startDate: planData.startDate || ''
        }));
    }, [planData.budgetTotal, planData.startDate]);

    const handleCalcParamChange = (e) => {
        const { name, value } = e.target;
        setCalcParams(prev => ({ ...prev, [name]: value }));
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.plan) newState.plan = {};
        if (name === 'budgetTotal') newState.plan.budgetTotal = value;
        else if (name === 'startDate') newState.plan.startDate = value;
        saveGlobalState(newState);
    };



    const setTodayDate = () => {
        const today = new Date().toISOString().split('T')[0];
        setCalcParams(prev => ({ ...prev, startDate: today }));
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.plan) newState.plan = {};
        newState.plan.startDate = today;
        saveGlobalState(newState);
    };

    const addEmptyDebtRow = () => {
        const newState = JSON.parse(JSON.stringify(appState));
        const newId = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        if (!newState.plan) newState.plan = { debts: [], strategy: 'avalanche' };
        newState.plan.debts.push({ id: newId, titre: t('plan.new_debt'), montant: 0, taux: 0, paiementMin: 0, paiement: 0, montantInitial: 0, checked: true });
        saveGlobalState(newState);
    };

    const updateDebtField = (id, field, value) => {
        const newState = JSON.parse(JSON.stringify(appState));
        const index = newState.plan.debts.findIndex(d => d.id === id);
        if (index === -1) return;
        let valToSave = value;
        if (['montant', 'montantInitial', 'taux', 'paiementMin', 'paiement'].includes(field)) valToSave = parseLocaleNumber(value);
        if (field === 'taux') valToSave = valToSave / 100;
        newState.plan.debts[index][field] = valToSave;
        if (field === 'montant' || field === 'taux') {
            const mt = parseFloat(newState.plan.debts[index].montant) || 0;
            const tx = parseFloat(newState.plan.debts[index].taux) || 0;
            if (mt > 0) {
                const monthlyInterest = (mt * tx) / 12;
                const capitalPart = mt * 0.01;
                const newMin = Math.ceil(Math.max(10, monthlyInterest + capitalPart));
                newState.plan.debts[index].paiementMin = newMin;
                if ((newState.plan.debts[index].paiement || 0) < newMin) newState.plan.debts[index].paiement = newMin;
            }
            const currentInitial = parseFloat(newState.plan.debts[index].montantInitial) || 0;
            if (field === 'montant' && currentInitial === 0) newState.plan.debts[index].montantInitial = mt;
        }
        saveGlobalState(newState);
    };

    const removeDebt = (id) => { openDeleteModal('debt', id); };
    const toggleDebtCheck = (id) => { const newState = JSON.parse(JSON.stringify(appState)); const index = newState.plan.debts.findIndex(d => d.id === id); if (index !== -1) { newState.plan.debts[index].checked = !newState.plan.debts[index].checked; saveGlobalState(newState); } };

    // --- GESTION DES HYPOTHÈQUES ---
    const calculatePmt = (balance, rate, amortYears, freq) => {
        const principal = parseFloat(balance) || 0;
        const annualRate = parseFloat(rate) || 0;
        const years = parseFloat(amortYears) || 0;
        if (principal <= 0 || years <= 0) return 0;

        // Logic split for Accelerated vs Standard Periodic
        const isAccelerated = freq === 'weekly_acc' || freq === 'biweekly_acc';
        const isWeekly = freq === 'weekly' || freq === 'weekly_acc';
        const isBiWeekly = freq === 'biweekly' || freq === 'biweekly_acc';

        let periodsPerYear = 12; // Base for monthly
        let n = years * periodsPerYear;
        let r;

        // Ensure appState.settings exists
        const isCAD = appState.settings && appState.settings.currentCurrency === 'CAD';

        if (isCAD) {
            // Semi-annual compounding effective rate for 12 periods
            // r = (1 + annualRate/2)^(2/12) - 1
            r = Math.pow((1 + annualRate / 2), (2 / 12)) - 1;
        } else {
            // Standard monthly
            r = annualRate / 12;
        }

        let monthlyPmt = 0;
        if (annualRate === 0) monthlyPmt = principal / n;
        else monthlyPmt = (principal * r) / (1 - Math.pow(1 + r, -n));

        if (freq === 'monthly') return monthlyPmt;

        // Handle Accelerated
        if (isAccelerated) {
            if (isWeekly) return monthlyPmt / 4;
            if (isBiWeekly) return monthlyPmt / 2;
        }

        // Handle Standard Non-Monthly (Weekly / Bi-Weekly)
        // Recalculate PMT based on true number of periods (52 or 26)
        let truePeriods = isWeekly ? 52 : 26;
        let trueN = years * truePeriods;
        let trueR;

        if (isCAD) {
            // Semi-annual compounding effective rate for truePeriods
            trueR = Math.pow((1 + annualRate / 2), (2 / truePeriods)) - 1;
        } else {
            trueR = annualRate / truePeriods;
        }

        if (annualRate === 0) return principal / trueN;
        return (principal * trueR) / (1 - Math.pow(1 + trueR, -trueN));
    };

    const addMortgageRow = () => {
        const newState = JSON.parse(JSON.stringify(appState));
        const newId = `mort-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        if (!newState.plan) newState.plan = {};
        if (!newState.plan.mortgages) newState.plan.mortgages = [];
        // Default values: Amort = 25
        newState.plan.mortgages.push({ id: newId, titre: t('plan.new_debt'), solde: 0, taux: 0, paiement: 0, frequency: 'monthly', valeur: 0, amortissement: 25, includeInPlan: false });
        saveGlobalState(newState);
    };

    const updateMortgageField = (id, field, value) => {
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.plan.mortgages) return;
        const index = newState.plan.mortgages.findIndex(m => m.id === id);
        if (index === -1) return;

        let valToSave = value;
        // Parse numbers
        if (['solde', 'taux', 'paiement', 'valeur', 'amortissement'].includes(field)) {
            valToSave = parseLocaleNumber(value);
        }

        // Handle Rate Division
        if (field === 'taux') {
            valToSave = valToSave / 100;
        }

        const currentDebt = { ...newState.plan.mortgages[index], [field]: valToSave };

        // Auto-calculation REMOVED based on user request ("Le système ne doit JAMAIS modifier ces valeurs automatiquement")
        // The payment field is now strictly manual input ("Votre Paiement Réel").

        newState.plan.mortgages[index] = currentDebt;
        saveGlobalState(newState);
    };

    const removeMortgage = (id) => {
        openDeleteModal('mortgage', id);
    };

    const importFromBudget = () => {
        const newState = JSON.parse(JSON.stringify(appState));
        const budgetDebts = newState.budget.depenses['Dettes'] || [];
        let count = 0;
        if (!newState.plan) newState.plan = { debts: [] };
        budgetDebts.forEach(bItem => {
            if (!newState.plan.debts.some(d => d.titre.toLowerCase() === bItem.label.toLowerCase())) {
                const factors = { 12: 1, 26: 26 / 12, 52: 52 / 12, 1: 1 / 12 };
                const monthlyCost = bItem.cost * (factors[bItem.freq] || 1);
                if (monthlyCost > 0) {
                    const newId = `imp-${Date.now()}-${Math.floor(Math.random() * 1000000)}-${count}`;
                    newState.plan.debts.push({ id: newId, titre: bItem.label, montant: 0, montantInitial: 0, taux: 0.199, paiementMin: monthlyCost, paiement: monthlyCost, checked: true });
                    count++;
                }
            }
        });
        if (count > 0) { saveGlobalState(newState); alert(t('plan.import_success', { count })); } else alert(t('plan.import_empty'));
    };

    const runSimulation = (debtsList, monthlyBudget, strat) => {
        let activeDebts = debtsList.map((d, i) => ({ ...d, originalIndex: i }));
        activeDebts.forEach(d => { if (!d.paiementMin) d.paiementMin = d.paiement; });
        if (strat === 'avalanche') activeDebts.sort((a, b) => b.taux - a.taux || a.montant - b.montant);
        else activeDebts.sort((a, b) => a.montant - b.montant || b.taux - a.taux);
        const stepsOrder = JSON.parse(JSON.stringify(activeDebts));
        let months = 0; let totalInterest = 0; let events = [];
        let progressData = [{ month: 0, totalDebt: activeDebts.reduce((s, d) => s + d.montant, 0) }];
        while (activeDebts.length > 0 && months < 600) {
            months++; let budgetRemaining = monthlyBudget; const startDebts = activeDebts.map(d => ({ ...d }));
            activeDebts.forEach(d => { const interest = d.montant * (d.taux / 12); d.montant += interest; totalInterest += interest; const pay = Math.min(d.montant, d.paiementMin); d.montant -= pay; budgetRemaining -= pay; });
            for (const d of activeDebts) { if (budgetRemaining > 0.01 && d.montant > 0.01) { const extra = Math.min(d.montant, budgetRemaining); d.montant -= extra; budgetRemaining -= extra; break; } }
            const paidThisMonth = [];
            startDebts.forEach(startD => { const currentD = activeDebts.find(ad => ad.id === startD.id); if (currentD && currentD.montant <= 0.01) { paidThisMonth.push(startD); } });
            if (paidThisMonth.length > 0) { events.push({ month: months, paidDebts: paidThisMonth, totalPaymentFreed: paidThisMonth.reduce((s, p) => s + p.paiementMin, 0), snapshotRemaining: activeDebts.filter(d => d.montant > 0.01).map(d => ({ ...d })) }); }
            activeDebts = activeDebts.filter(d => d.montant > 0.01);
            progressData.push({ month: months, totalDebt: activeDebts.reduce((s, d) => s + d.montant, 0) });
        }
        return { months, totalInterest, events, progressData, stepsOrder };
    };

    // Validation State
    const [validationErrors, setValidationErrors] = useState({ budget: false, date: false });
    const [showValidationModal, setShowValidationModal] = useState(false);

    const calculatePlan = (currentStrategy = strategy) => {
        const budgetTotal = parseLocaleNumber(calcParams.budgetTotal);
        const startDate = calcParams.startDate;

        // VALIDATION STRICTE
        let errors = { budget: false, date: false };
        let hasError = false;

        if (budgetTotal <= 0) {
            errors.budget = true;
            hasError = true;
        }
        if (!startDate) {
            errors.date = true;
            hasError = true;
        }

        if (hasError) {
            setValidationErrors(errors);
            setShowValidationModal(true);
            return; // STOP execution
        } else {
            // Reset errors if valid
            setValidationErrors({ budget: false, date: false });
        }

        // --- Fusionner les dettes régulières et les hypothèques incluses ---
        let combinedDebts = [...debts];
        if (planData.mortgages) {
            planData.mortgages.filter(m => m.includeInPlan).forEach(m => {
                // Convertir le paiement en mensuel pour la simulation
                let monthlyPayment = parseLocaleNumber(m.paiement);
                let freq = m.frequency || 'monthly';

                if (freq === 'weekly' || freq === 'weekly_acc') monthlyPayment = (monthlyPayment * 52) / 12;
                if (freq === 'biweekly' || freq === 'biweekly_acc') monthlyPayment = (monthlyPayment * 26) / 12;

                combinedDebts.push({
                    id: m.id,
                    titre: m.titre || t('plan.mortgage_title'),
                    montant: parseLocaleNumber(m.solde),
                    taux: parseLocaleNumber(m.taux),
                    paiementMin: monthlyPayment,
                    paiement: monthlyPayment,
                    montantInitial: parseLocaleNumber(m.solde),
                    checked: true
                });
            });
        }

        const totalMinReq = combinedDebts.reduce((s, d) => s + (d.paiementMin || 0), 0);
        let effectiveBudget = budgetTotal;

        if (effectiveBudget < totalMinReq) {
            setShowBudgetWarning(true);
            effectiveBudget = totalMinReq;
        } else {
            setShowBudgetWarning(false);
        }

        const simResult = runSimulation(combinedDebts, effectiveBudget, currentStrategy);
        const compareResult = runSimulation(combinedDebts, effectiveBudget, currentStrategy === 'avalanche' ? 'snowball' : 'avalanche');
        setSimulationResults({ current: simResult, compare: compareResult, strategy: currentStrategy, budgetTotal: effectiveBudget, totalMin: totalMinReq });
    };

    const getMonthlyPayment = (amount, frequency) => {
        const val = parseFloat(amount) || 0;
        if (!val) return 0;
        switch (frequency) {
            case 'weekly': return (val * 52) / 12;
            case 'biweekly': return (val * 26) / 12;
            case 'weekly_acc': return (val * 52) / 12;
            case 'biweekly_acc': return (val * 26) / 12;
            default: return val;
        }
    };

    const applyTotalToBudget = () => {
        // Calculate Total Required for Copy
        let total = totalMinReq; // Base debts min
        if (planData.mortgages) {
            planData.mortgages.forEach(m => {
                if (m.includeInPlan) {
                    total += getMonthlyPayment(m.paiement, m.frequency);
                }
            });
        }

        setCalcParams(prev => ({ ...prev, budgetTotal: total }));
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.plan) newState.plan = {};
        newState.plan.budgetTotal = total;
        saveGlobalState(newState);
    };

    const handleStrategyChange = (e) => {
        const newStrategy = e.target.checked ? 'snowball' : 'avalanche';
        const newState = JSON.parse(JSON.stringify(appState));
        newState.plan.strategy = newStrategy;
        saveGlobalState(newState);
        calculatePlan(newStrategy);
    };

    const totalDebt = debts.reduce((sum, d) => sum + d.montant, 0);
    const totalMinReq = debts.reduce((sum, d) => sum + (d.paiementMin || 0), 0);
    const totalPlanned = debts.reduce((sum, d) => sum + d.paiement, 0);
    const currentBudget = parseLocaleNumber(calcParams.budgetTotal);
    const isBudgetInsufficient = currentBudget > 0 && currentBudget < totalMinReq;
    const getMonthLabel = (m) => {
        try {
            if (!calcParams.startDate) return `${t('common.months')} ${m}`;
            const d = new Date(calcParams.startDate);
            if (isNaN(d.getTime())) return `${t('common.months')} ${m}`; // Fallback if invalid date
            d.setMonth(d.getMonth() + m);
            return d.toLocaleDateString(i18n.language, { month: 'short', year: 'numeric' });
        } catch (e) {
            return `${t('common.months')} ${m}`;
        }
    };
    const getChartData = () => {
        if (!simulationResults) return null;
        const scatterPoints = simulationResults.current.events.map(e => { const debt = e.paidDebts[0]; return { x: e.month, y: simulationResults.current.progressData.find(p => p.month === e.month)?.totalDebt || 0, title: e.paidDebts.map(d => d.titre).join(', '), color: getDebtColor(debt.originalIndex) }; });
        return { labels: simulationResults.current.progressData.map(d => d.month), datasets: [{ label: t('plan.remaining_balance'), data: simulationResults.current.progressData.map(d => d.totalDebt), borderColor: '#EC7063', backgroundColor: 'rgba(236, 112, 99, 0.1)', fill: true, tension: 0.4, pointRadius: 3, pointHoverRadius: 5, order: 2 }, { label: t('plan.debt_paid'), data: scatterPoints, type: 'scatter', pointBackgroundColor: scatterPoints.map(p => p.color), pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 8, pointHoverRadius: 12, order: 1 }] };
    };
    const getComparisonClass = (valA, valB) => { if (valA < valB) return "plan-winner"; if (valA > valB) return "plan-loser"; return "plan-neutral"; };



    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="module-header-with-reset"><h2>{t('plan.title')}</h2></div>

            {/* VALIDATION MODAL */}
            <Modal isOpen={showValidationModal} onClose={() => setShowValidationModal(false)} title={`⚠️ ${t('plan.validation_error_title')}`}>
                <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-color)' }}>
                    <p style={{ fontSize: '1.1rem' }}>{t('plan.validation_error_msg')}</p>
                    <button onClick={() => setShowValidationModal(false)} className="btn-primary" style={{ marginTop: '20px', padding: '10px 30px' }}>{t('common.close')}</button>
                </div>
            </Modal>
            <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                <button onClick={addEmptyDebtRow} className="btn-success btn-text-white" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><PlusIcon style={{ width: '18px' }} /> {t('plan.add_line')}</button>
                <button onClick={importFromBudget} className="btn-info btn-text-white" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><ArrowDownTrayIcon style={{ width: '18px' }} /> {t('plan.import_budget')}</button>
            </div>
            <div className="table-container" style={{ maxHeight: 'none', overflowY: 'visible' }}>
                <table id="plan-debts-table" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th className="no-print" style={{ width: '40px' }}></th>
                            <th style={{ textAlign: 'left', paddingLeft: '10px' }}>{t('plan.header_desc')}</th>
                            <th style={{ textAlign: 'left' }}>{t('plan.header_init')}</th>
                            <th style={{ textAlign: 'left' }}>{t('plan.header_balance')}</th>
                            <th>{t('plan.interest_rate')}</th>
                            <th>{t('plan.min_payment')}</th>

                            <th style={{ width: '40px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {debts.map((d, index) => {
                            const debtColor = getDebtColor(index);
                            return (
                                <tr key={d.id}>
                                    <td className="no-print" style={{ textAlign: 'center' }}>
                                        <input
                                            id={`check-${d.id}`}
                                            name={`check-${d.id}`}
                                            aria-label={t('common.aria.toggle_tracking')}
                                            type="checkbox"
                                            checked={d.checked}
                                            onChange={() => toggleDebtCheck(d.id)}
                                            style={{ transform: 'scale(1.3)' }}
                                        />
                                    </td>
                                    <td style={{ position: 'relative' }}>
                                        <div style={{ position: 'absolute', left: 0, top: 4, bottom: 4, width: '10px', backgroundColor: debtColor, borderRadius: '4px 0 0 4px' }}></div>
                                        <input
                                            id={`titre-${d.id}`}
                                            name={`titre-${d.id}`}
                                            aria-label={t('common.aria.debt_title')}
                                            type="text"
                                            value={d.titre}
                                            onChange={(e) => updateDebtField(d.id, 'titre', e.target.value)}
                                            style={{ paddingLeft: '10px', marginLeft: '10px', width: 'calc(100% - 15px)', border: `2px solid ${debtColor}`, borderRadius: '4px' }}
                                        />
                                    </td>
                                    <td><CurrencyInput id={`init-${d.id}`} name={`init-${d.id}`} aria-label={t('common.aria.initial_amount')} value={d.montantInitial} onChange={(e) => updateDebtField(d.id, 'montantInitial', e.target.value)} placeholder={t('common.placeholders.amount_zero')} className="currency-input" style={{ backgroundColor: '#F8F9FA' }} /></td>
                                    <td><CurrencyInput id={`montant-${d.id}`} name={`montant-${d.id}`} aria-label={t('common.aria.current_balance')} value={d.montant} onChange={(e) => updateDebtField(d.id, 'montant', e.target.value)} placeholder={t('common.placeholders.amount_zero')} className="currency-input" /></td>
                                    <td><input id={`taux-${d.id}`} name={`taux-${d.id}`} aria-label={t('common.aria.interest_rate')} type="number" value={d.taux ? parseFloat((d.taux * 100).toFixed(2)) : ''} onChange={(e) => updateDebtField(d.id, 'taux', e.target.value)} placeholder="0" /></td>
                                    <td><CurrencyInput id={`min-${d.id}`} name={`min-${d.id}`} aria-label={t('common.aria.min_payment')} value={d.paiementMin} onChange={(e) => updateDebtField(d.id, 'paiementMin', e.target.value)} placeholder={t('common.placeholders.auto')} className="currency-input" style={{ borderColor: 'var(--warning-color)' }} /></td>

                                    <td style={{ textAlign: 'center' }}><button onClick={() => removeDebt(d.id)} style={{ background: 'none', border: 'none', color: 'var(--danger-color)', cursor: 'pointer' }} title="Supprimer la ligne"><TrashIcon style={{ width: '20px' }} /></button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                    {debts.length > 0 && (
                        <tfoot>
                            <tr style={{ borderTop: '2px solid var(--border-color)', backgroundColor: 'rgba(0,0,0,0.02)' }}>
                                <td colSpan="3" style={{ textAlign: 'right', fontWeight: '800', padding: '12px' }}>{t('common.total')}:</td>
                                <td style={{ fontWeight: '800', color: 'var(--text-color)', padding: '12px' }}>{formatCurrency(totalDebt)}</td>
                                <td></td>
                                <td style={{ fontWeight: '800', color: 'var(--warning-color)', padding: '12px' }}>{formatCurrency(totalMinReq)}</td>

                                <td></td>
                            </tr>
                        </tfoot>
                    )}
                </table>
            </div>

            {/* SECTION HYPOTHÈQUES */}
            <div style={{ marginTop: '40px', marginBottom: '40px', backgroundColor: '#FEF9E7', padding: '20px', borderRadius: '12px', border: '1px solid #F7DC6F' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0, color: '#F39C12' }}>{t('plan.mortgage_section_title')}</h3>
                    <button onClick={addMortgageRow} className="btn-success btn-text-white" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}><PlusIcon style={{ width: '16px' }} /> {t('plan.add_mortgage')}</button>
                </div>

                <div className="table-container" style={{ maxHeight: 'none', overflowY: 'visible' }}>
                    <table id="plan-mortgages-table" style={{ width: '100%' }}>
                        <thead style={{ verticalAlign: 'bottom' }}>
                            <tr>
                                <th style={{ width: '150px', whiteSpace: 'nowrap', verticalAlign: 'bottom', paddingBottom: '15px' }}>{t('plan.mortgage_title')}</th>
                                <th style={{ width: '150px', whiteSpace: 'nowrap', verticalAlign: 'bottom', paddingBottom: '15px' }}>{t('plan.mortgage_balance')}</th>
                                <th style={{ width: '100px', whiteSpace: 'nowrap', verticalAlign: 'bottom', paddingBottom: '15px' }}>{t('plan.mortgage_rate')}</th>
                                <th style={{ width: '160px', whiteSpace: 'nowrap', verticalAlign: 'bottom', minWidth: '160px', paddingBottom: '15px' }}>{t('plan.frequency')}</th>
                                <th style={{ width: '160px', whiteSpace: 'nowrap', verticalAlign: 'bottom', paddingBottom: '15px' }}>{t('plan.mortgage_payment')}</th>
                                <th style={{ width: '160px', whiteSpace: 'nowrap', verticalAlign: 'bottom', color: '#7f8c8d', paddingBottom: '15px' }}>{t('plan.monthly_equivalent')}</th>
                                <th style={{ width: '120px', whiteSpace: 'nowrap', verticalAlign: 'bottom', paddingBottom: '15px' }}>{t('plan.amortization_years')}</th>

                                <th style={{ textAlign: 'center', whiteSpace: 'nowrap', verticalAlign: 'bottom', paddingBottom: '15px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <span>{t('plan.include_calc_short')}</span>
                                        <button
                                            onClick={() => setShowIncludeHelp(true)}
                                            style={{
                                                background: '#ddd',
                                                color: '#555',
                                                border: 'none',
                                                borderRadius: '50%',
                                                width: '18px',
                                                height: '18px',
                                                minWidth: '18px',
                                                flexShrink: 0,
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '0.8rem',
                                                padding: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >?</button>
                                    </div>
                                </th>
                                <th style={{ width: '40px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(planData.mortgages || []).map((m) => (
                                <tr key={m.id}>
                                    <td>
                                        <input
                                            type="text"
                                            value={m.titre}
                                            onChange={(e) => updateMortgageField(m.id, 'titre', e.target.value)}
                                            className="input-white"
                                            style={{ width: '100%', height: '38px', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '8px', boxSizing: 'border-box' }}
                                        />
                                    </td>
                                    <td><CurrencyInput value={m.solde} onChange={(e) => updateMortgageField(m.id, 'solde', e.target.value)} placeholder="0.00" className="currency-input" style={{ height: '38px', boxSizing: 'border-box' }} /></td>
                                    <td><input type="number" value={m.taux ? parseFloat((m.taux * 100).toFixed(2)) : ''} onChange={(e) => updateMortgageField(m.id, 'taux', e.target.value)} placeholder="0" style={{ width: '100%', height: '38px', padding: '8px', borderRadius: '4px', border: '1px solid var(--border-color)', boxSizing: 'border-box' }} /></td>
                                    <td>
                                        <select
                                            value={m.frequency || 'monthly'}
                                            onChange={(e) => updateMortgageField(m.id, 'frequency', e.target.value)}
                                            style={{ width: '100%', height: '38px', padding: '0 8px', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: 'white', boxSizing: 'border-box' }}
                                        >
                                            <option value="weekly">{t('plan.freq_weekly')}</option>
                                            <option value="biweekly">{t('plan.freq_biweekly')}</option>
                                            <option value="weekly_acc">{t('plan.freq_weekly_acc')}</option>
                                            <option value="biweekly_acc">{t('plan.freq_biweekly_acc')}</option>
                                            <option value="monthly">{t('plan.freq_monthly')}</option>
                                        </select>
                                    </td>
                                    <td><CurrencyInput value={m.paiement} onChange={(e) => updateMortgageField(m.id, 'paiement', e.target.value)} placeholder="0.00" className="currency-input" style={{ height: '38px', boxSizing: 'border-box' }} /></td>
                                    <td>
                                        <div style={{ height: '38px', display: 'flex', alignItems: 'center', fontStyle: 'italic', color: '#777', paddingLeft: '5px' }}>
                                            {formatCurrency(getMonthlyPayment(m.paiement, m.frequency))}
                                        </div>
                                    </td>
                                    <td><input type="number" value={m.amortissement || ''} onChange={(e) => updateMortgageField(m.id, 'amortissement', e.target.value)} placeholder="25" style={{ width: '100%', height: '38px', padding: '8px', borderRadius: '4px', border: '1px solid var(--border-color)', boxSizing: 'border-box', textAlign: 'center' }} /></td>

                                    <td style={{ textAlign: 'center' }}>
                                        <input
                                            type="checkbox"
                                            checked={m.includeInPlan || false}
                                            onChange={(e) => updateMortgageField(m.id, 'includeInPlan', e.target.checked)}
                                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                        />
                                    </td>
                                    <td style={{ textAlign: 'center' }}><button onClick={() => removeMortgage(m.id)} style={{ background: 'none', border: 'none', color: 'var(--danger-color)', cursor: 'pointer', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title={t('common.delete')}><TrashIcon style={{ width: '20px' }} /></button></td>
                                </tr>
                            ))}
                            {(!planData.mortgages || planData.mortgages.length === 0) && (
                                <tr><td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#999', fontStyle: 'italic' }}>{t('common.no_data')}</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {debts.length > 0 && (
                <div className="budget-category" style={{ marginTop: '30px', padding: '25px', background: 'var(--card-background)' }}>
                    <div className="fieldset-grid" style={{ alignItems: 'end' }}>
                        <div className="input-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                <label htmlFor="budgetTotal" style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>{t('plan.budget_monthly')} <button onClick={() => setShowBudgetHelp(true)} style={{ background: '#ddd', color: '#555', border: 'none', borderRadius: '50%', width: '18px', height: '18px', minWidth: '18px', minHeight: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold', cursor: 'pointer', marginLeft: '5px', padding: 0, flexShrink: 0 }}>?</button></label>
                                <button onClick={() => applyTotalToBudget()} className="utility-btn-small" title={t('plan.copy_total_tooltip')} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--info-color)', cursor: 'pointer', background: 'transparent', border: 'none' }}><ArrowDownTrayIcon style={{ width: '16px' }} /> {t('plan.copy_total')}</button>
                            </div>
                            <CurrencyInput
                                id="budgetTotal"
                                name="budgetTotal"
                                value={calcParams.budgetTotal}
                                onChange={(e) => { handleCalcParamChange(e); if (parseLocaleNumber(e.target.value) > 0) setValidationErrors(prev => ({ ...prev, budget: false })); }}
                                placeholder={`Min: ${formatCurrency(totalMinReq)}`}
                                className="currency-input"
                                style={validationErrors.budget ? { border: '2px solid #E74C3C' } : { border: '2px solid var(--primary-color)' }}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="startDate">{t('plan.start_date')}</label>
                            <div className="date-input-group-row">
                                <div className="date-input-wrapper">
                                    <input
                                        id="startDate"
                                        type="date"
                                        name="startDate"
                                        value={calcParams.startDate}
                                        onChange={(e) => { handleCalcParamChange(e); if (e.target.value) setValidationErrors(prev => ({ ...prev, date: false })); }}
                                        className=""
                                        style={validationErrors.date ? { flex: 1, border: '2px solid #E74C3C', borderRadius: '6px' } : { flex: 1, border: '1px solid var(--border-color)' }}
                                    />
                                </div>
                                <div className="today-btn-wrapper"><span className="today-label">{t('plan.today')}</span><button className="icon-btn" onClick={() => { setTodayDate(); setValidationErrors(prev => ({ ...prev, date: false })); }} title="Mettre à aujourd'hui"><CalendarIcon style={{ width: '22px' }} /></button></div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>{isBudgetInsufficient && <div className="budget-warning-pulse">⚠️ {t('plan.budget_insufficient', { min: formatCurrency(totalMinReq) })}</div>}<button onClick={() => calculatePlan()} className="btn-primary btn-calculate-plan" style={{ height: '45px', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}><CalculatorIcon style={{ width: '24px' }} /> {t('plan.calculate')}</button></div>
                    </div>
                </div>
            )}
            {simulationResults && (
                <div className="results-section" style={{ marginTop: '30px' }}>
                    <h2>{t('plan.results')}</h2>

                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', alignItems: 'center', gap: '15px' }}>
                        <div className="plan-switch-container" style={{ margin: '0', transform: 'scale(1.1)', padding: '8px 20px', display: 'flex', alignItems: 'center' }}>

                            <span
                                className="plan-switch-label"
                                style={{
                                    marginRight: '10px',
                                    color: strategy === 'avalanche' ? '#3498DB' : '#BDC3C7',
                                    fontWeight: strategy === 'avalanche' ? '800' : '500',
                                    transform: strategy === 'avalanche' ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {t('plan.strategy_avalanche_short')}
                            </span>

                            <label className="toggle-switch" htmlFor="strategy-switch" style={{ width: '60px', height: '30px' }}>
                                <input
                                    id="strategy-switch"
                                    name="strategy-switch"
                                    aria-label={t('common.aria.choose_strategy')}
                                    type="checkbox"
                                    checked={strategy === 'snowball'}
                                    onChange={handleStrategyChange}
                                />
                                <span className="toggle-slider round"></span>

                                <style>{`
                                .toggle-switch input:checked + .toggle-slider { background-color: #E74C3C !important; } /* RED for Snowball */
                                .toggle-slider { background-color: #3498DB; } /* BLUE for Avalanche */
                                .toggle-switch input:checked + .toggle-slider::before { transform: translateX(28px) !important; width:24px; height:24px; left:3px; bottom:3px; } 
                                .toggle-slider::before { width:24px; height:24px; left:3px; bottom:3px; }
                            `}</style>
                            </label>

                            <span
                                className="plan-switch-label"
                                style={{
                                    marginLeft: '10px',
                                    color: strategy === 'snowball' ? '#E74C3C' : '#E74C3C',
                                    fontWeight: strategy === 'snowball' ? '800' : '500',
                                    transform: strategy === 'snowball' ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {t('plan.strategy_snowball_short')}
                            </span>
                        </div>
                        <InfoIcon text={t('plan.strategy_tooltip_combined')} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                        <div style={{ overflowX: 'auto' }}>
                            <h3 style={{ color: 'var(--secondary-color)' }}>{t('plan.comparison')}</h3>
                            <table className="comparison-table-header" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                                <thead><tr><th style={{ textAlign: 'left', color: 'var(--text-color)', fontWeight: '600', borderBottom: '2px solid var(--secondary-color)', padding: '12px' }}>{t('plan.criteria')}</th><th style={{ textAlign: 'center', color: 'var(--text-color)', fontWeight: '600', borderBottom: '2px solid var(--secondary-color)', padding: '12px' }}>{t('plan.strategy_avalanche')}</th><th style={{ textAlign: 'center', color: 'var(--text-color)', fontWeight: '600', borderBottom: '2px solid var(--secondary-color)', padding: '12px' }}>{t('plan.strategy_snowball')}</th><th style={{ textAlign: 'center', color: 'var(--text-color)', fontWeight: '600', borderBottom: '2px solid var(--secondary-color)', padding: '12px' }}>{t('plan.difference')}</th></tr></thead>
                                <tbody>
                                    {(() => {
                                        const avMonths = simulationResults.strategy === 'avalanche' ? simulationResults.current.months : simulationResults.compare.months;
                                        const snMonths = simulationResults.strategy === 'snowball' ? simulationResults.current.months : simulationResults.compare.months;
                                        const avInterest = simulationResults.strategy === 'avalanche' ? simulationResults.current.totalInterest : simulationResults.compare.totalInterest;
                                        const snInterest = simulationResults.strategy === 'snowball' ? simulationResults.current.totalInterest : simulationResults.compare.totalInterest;
                                        return (
                                            <>
                                                <tr><td style={{ padding: '12px', fontWeight: '600' }}>{t('plan.end_date')}</td><td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }} className={getComparisonClass(avMonths, snMonths)}>{avMonths} {t('common.months').toLowerCase()}</td><td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }} className={getComparisonClass(snMonths, avMonths)}>{snMonths} {t('common.months').toLowerCase()}</td><td style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: 'var(--secondary-color)' }}>{Math.abs(avMonths - snMonths)} {t('common.months').toLowerCase()}</td></tr>
                                                <tr><td style={{ padding: '12px', fontWeight: '600' }}>{t('plan.total_interest')}</td><td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }} className={getComparisonClass(avInterest, snInterest)}>{formatCurrency(avInterest)}</td><td style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }} className={getComparisonClass(snInterest, avInterest)}>{formatCurrency(snInterest)}</td><td style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: 'var(--success-color)' }}>{formatCurrency(Math.abs(avInterest - snInterest))}</td></tr>
                                            </>
                                        );
                                    })()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{ background: 'var(--input-bg-retrait)', padding: '20px', borderRadius: '12px', border: '2px solid var(--warning-color)', marginBottom: '30px' }}>
                        <h3 style={{ marginTop: 0, textAlign: 'center', marginBottom: '20px' }}>{t('plan.financial_summary')}</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                            <div style={{ background: 'var(--card-background)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}><div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '5px' }}>{t('plan.total_debt_no_interest')}</div><div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--warning-color)' }}>{formatCurrency(totalDebt)}</div></div>
                            <div style={{ background: 'var(--card-background)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}><div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '5px' }}>{t('plan.total_interest')}</div><div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--danger-color)' }}>{formatCurrency(simulationResults.current.totalInterest)}</div></div>
                            <div style={{ background: 'var(--card-background)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}><div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '5px' }}>{t('plan.total_debt_with_interest')}</div><div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--danger-color)' }}>{formatCurrency(totalDebt + simulationResults.current.totalInterest)}</div></div>
                            <div style={{ background: 'var(--card-background)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}><div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', marginBottom: '5px' }}>{t('plan.monthly_payments')}</div><div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--info-color)' }}>{formatCurrency(simulationResults.budgetTotal)}</div></div>
                        </div>
                    </div>
                    <div className="chart-container" style={{ height: '350px', background: 'var(--card-background)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <Line
                            data={getChartData()}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                interaction: { mode: 'nearest', intersect: true },
                                plugins: {
                                    title: { display: true, text: t('plan.progress') },
                                    tooltip: {
                                        callbacks: {
                                            title: () => null, // Supprime le titre numéroté
                                            label: function (context) {
                                                if (context.dataset.type === 'scatter') {
                                                    const monthOffset = context.raw.x;
                                                    let dateLabel = "";
                                                    if (calcParams.startDate) {
                                                        try {
                                                            const d = new Date(calcParams.startDate);
                                                            if (!isNaN(d.getTime())) {
                                                                d.setMonth(d.getMonth() + monthOffset);
                                                                dateLabel = d.toLocaleDateString(i18n.language, { month: 'short', year: 'numeric' });
                                                            } else {
                                                                dateLabel = `${t('common.months')} ${monthOffset}`;
                                                            }
                                                        } catch (e) {
                                                            dateLabel = `${t('common.months')} ${monthOffset}`;
                                                        }
                                                    } else {
                                                        dateLabel = `${t('common.months')} ${monthOffset}`;
                                                    }
                                                    return [
                                                        `${t('plan.debt_paid')}: ${context.raw.title}`,
                                                        `${t('common.date')}: ${dateLabel}`,
                                                        `${t('common.balance')}: ${formatCurrency(context.raw.y)}`
                                                    ];
                                                }
                                                // Pour le LINE dataset : On vérifie si un point SCATTER existe au même endroit
                                                // Si oui, on retourne null pour ne pas afficher le doublon
                                                if (context.dataset.type !== 'scatter') {
                                                    const scatterDataset = context.chart.data.datasets.find(ds => ds.type === 'scatter');
                                                    // Vérifie si un point existe exactement à ce mois (x)
                                                    const hasPointHere = scatterDataset && scatterDataset.data.some(p => p.x === context.parsed.x);
                                                    if (hasPointHere) return null;
                                                    return `${t('common.balance')}: ${formatCurrency(context.raw)}`;
                                                }
                                                return null;
                                            }
                                        }
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="plan-explanation-box">
                        <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
                            {(() => {
                                const realBudget = parseLocaleNumber(calcParams.budgetTotal);
                                const minRequired = simulationResults.totalMin; // Or recalculate strictly if needed: totalPlanned from loop
                                const diff = realBudget - minRequired;
                                const isDeficit = diff < 0;

                                return (
                                    <>
                                        {t('plan.expl_budget')} <strong>{formatCurrency(realBudget)}</strong>
                                        {isDeficit ? (
                                            <span style={{ color: '#E74C3C', marginLeft: '5px', fontWeight: 'bold' }}>
                                                {t('plan.expl_deficit_bracket', { req: formatCurrency(minRequired) })}
                                            </span>
                                        ) : (
                                            <span> {t('plan.expl_surplus_bracket', { req: formatCurrency(minRequired) })}</span>
                                        )}
                                        {isDeficit ? t('plan.expl_deficit_result') : t('plan.expl_surplus_result')} <strong style={{ color: isDeficit ? '#E74C3C' : 'var(--success-color)' }}>{formatCurrency(Math.abs(diff))}</strong> {isDeficit ? t('plan.expl_deficit_end') : t('plan.expl_surplus_end')}
                                    </>
                                );
                            })()}
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {simulationResults.current.events.map((event, i) => {
                            const prevMonth = i === 0 ? 0 : simulationResults.current.events[i - 1].month;
                            const activeDebtsAtStart = i === 0 ? simulationResults.current.stepsOrder : simulationResults.current.events[i - 1].snapshotRemaining;
                            if (!activeDebtsAtStart || activeDebtsAtStart.length === 0) return null;
                            const focusDebt = activeDebtsAtStart[0];
                            const focusDebtIndex = debts.findIndex(d => d.id === focusDebt.id);
                            const enrichedFocusDebt = { ...focusDebt, color: getDebtColor(focusDebtIndex) };
                            const extra = simulationResults.budgetTotal - simulationResults.totalMin;
                            let freedUp = 0;
                            if (i > 0) { const debtsPaidBefore = debts.filter(d => !activeDebtsAtStart.some(ads => ads.id === d.id)); freedUp = debtsPaidBefore.reduce((sum, d) => sum + d.paiementMin, 0); }
                            const focusPayment = focusDebt.paiementMin + extra + freedUp;

                            const debtsDisplay = activeDebtsAtStart.map(d => {
                                let originalDebt = debts.find(od => od.id === d.id);
                                let colorIndex = debts.findIndex(od => od.id === d.id);

                                // If not found in regular debts, look in mortgages
                                if (!originalDebt && planData.mortgages) {
                                    originalDebt = planData.mortgages.find(m => m.id === d.id);
                                    if (originalDebt) {
                                        // Assign a color index offset by the number of regular debts
                                        colorIndex = debts.length + planData.mortgages.findIndex(m => m.id === d.id);
                                    }
                                }

                                // Fallback object if still not found (should not happen if logic matches calculatePlan)
                                const safeDebt = originalDebt || d;
                                const rateVal = parseFloat(safeDebt.taux) || 0;
                                const rateDisplay = (rateVal * 100).toFixed(2) + '%';

                                return {
                                    titre: d.titre,
                                    paymentDisplay: formatCurrency(d.id === focusDebt.id ? focusPayment : d.paiementMin),
                                    rateDisplay: rateDisplay,
                                    isFocus: d.id === focusDebt.id,
                                    color: getDebtColor(colorIndex)
                                };
                            });

                            return (
                                <React.Fragment key={i}>
                                    <PhaseStep phaseIndex={i + 1} focusDebt={enrichedFocusDebt} rangeLabel={`${getMonthLabel(prevMonth + 1)} - ${getMonthLabel(event.month)}`} extraAmount={formatCurrency(extra + freedUp)} totalPayment={formatCurrency(focusPayment)} debtsDetails={debtsDisplay} t={t} />
                                    <div className="timeline-item debt-paid" style={{ borderLeft: '3px solid var(--success-color)', paddingLeft: '20px', paddingBottom: '20px', position: 'relative' }}><div style={{ position: 'absolute', left: '-9px', top: 0, width: '15px', height: '15px', background: 'var(--success-color)', borderRadius: '50%', border: '3px solid white' }}></div><div style={{ fontWeight: 'bold', color: 'var(--success-color)' }}>{getMonthLabel(event.month)}</div><div>✅ <strong>{event.paidDebts.map(d => d.titre).join(' & ')}</strong> : {t('plan.paid_full')} !</div></div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            )}
            {/* MODALS */}
            <Modal
                isOpen={showBudgetWarning}
                onClose={() => setShowBudgetWarning(false)}
                title={t('plan.budget_insufficient_title')}
                footer={<button onClick={() => setShowBudgetWarning(false)} className="btn-primary" style={{ padding: '8px 20px', borderRadius: '6px' }}>{t('common.close')}</button>}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <ExclamationTriangleIcon style={{ width: '40px', height: '40px', color: '#e74c3c' }} />
                    <p style={{ margin: 0, fontSize: '1rem' }}>
                        {(() => {
                            const current = parseLocaleNumber(calcParams.budgetTotal);
                            let required = totalMinReq;
                            if (planData.mortgages) {
                                planData.mortgages.forEach(m => {
                                    if (m.includeInPlan) required += getMonthlyPayment(m.paiement, m.frequency);
                                });
                            }
                            const missing = required - current;
                            return t('plan.budget_insufficient_details', {
                                current: formatCurrency(current),
                                required: formatCurrency(required),
                                missing: formatCurrency(missing)
                            });
                        })()}
                    </p>
                </div>
            </Modal>

            <Modal
                isOpen={showIncludeHelp}
                onClose={() => setShowIncludeHelp(false)}
                title={t('plan.include_help_title')}
                footer={<button onClick={() => setShowIncludeHelp(false)} className="btn-primary" style={{ padding: '8px 20px', borderRadius: '6px' }}>{t('common.close')}</button>}
            >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>{t('plan.include_help_msg')}</p>
                </div>
            </Modal>

            <Modal
                isOpen={showBudgetHelp}
                onClose={() => setShowBudgetHelp(false)}
                title={t('plan.budget_help_title')}
                footer={<button onClick={() => setShowBudgetHelp(false)} className="btn-primary" style={{ padding: '8px 20px', borderRadius: '6px' }}>{t('common.close')}</button>}
            >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#D6EAF8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3498DB', fontSize: '1.2rem', minWidth: '40px' }}>?</div>
                    <p style={{ margin: 0, lineHeight: '1.6', whiteSpace: 'pre-line' }}>{t('plan.budget_help_msg')}</p>
                </div>
            </Modal>

            <Modal
                isOpen={deleteModalState.isOpen}
                onClose={closeDeleteModal}
                title={t('common.confirm_delete_title')}
                footer={
                    <>
                        <button onClick={closeDeleteModal} style={{ background: '#ecf0f1', color: '#2c3e50', border: 'none', padding: '8px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>{t('common.cancel')}</button>
                        <button onClick={confirmDelete} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginLeft: '10px' }}>{t('common.delete')}</button>
                    </>
                }
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffdddd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c0392b', minWidth: '40px' }}>
                        <ExclamationTriangleIcon style={{ width: '24px' }} />
                    </div>
                    <p style={{ margin: 0, fontSize: '1rem', whiteSpace: 'pre-line' }}>{t('common.confirm_delete_msg')}</p>
                </div>
            </Modal>
        </div>
    );
}

export default Plan;