import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation } from 'react-i18next';
import CurrencyInput from './CurrencyInput';
import ScenarioTabs from './ScenarioTabs';
import ScenarioChoiceModal from './ScenarioChoiceModal'; // <-- IMPORT DU NOUVEAU MODAL
import {
    TrashIcon, Bars3Icon, PlusIcon, QuestionMarkCircleIcon,
    ArrowPathIcon, CalendarIcon, ExclamationTriangleIcon, InformationCircleIcon
} from '@heroicons/react/24/outline';
import IntroBudget from './IntroBudget';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';
import { Bar, PolarArea } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale);

const PASTEL = { green: '#82E0AA', red: '#F1948A', blue: '#85C1E9', teal: '#76D7C4', purple: '#BB8FCE', yellow: '#F7DC6F', orange: '#F0B27A', grey: '#BDC3C7' };

const shadowPlugin = {
    id: 'shadowPlugin',
    beforeDatasetsDraw: (chart) => { const { ctx } = chart; ctx.save(); ctx.shadowColor = 'rgba(0, 0, 0, 0.25)'; ctx.shadowBlur = 10; ctx.shadowOffsetX = 4; ctx.shadowOffsetY = 4; },
    afterDatasetsDraw: (chart) => { chart.ctx.restore(); }
};

const normalizeToMonthly = (cost, freq) => { const val = parseFloat(cost) || 0; const f = parseInt(freq) || 12; const factors = { 365: 365.25 / 12, 52: 52 / 12, 26: 26 / 12, 12: 1, 4: 1 / 3, 2: 1 / 6, 1: 1 / 12 }; return val * (factors[f] || 1); };
const getLetter = (index) => String.fromCharCode(65 + (index % 26));

const BudgetRow = ({ item, section, category, updateItem, removeItem, formatCurrency, t }) => {
    const monthlyVal = normalizeToMonthly(item.cost, item.freq);
    const isActif = section === 'actifs';
    const isAbonnement = category === 'Abonnement';
    const isIncome = section === 'revenus';
    const renderDayInput = () => {
        if (isAbonnement) {
            const validDate = item.day && item.day.toString().includes('-') ? item.day : '';
            return (<input id={`date_${item.id}`} name={`date_${item.id}`} type="date" className="input-white" value={validDate} onChange={(e) => updateItem(section, category, item.id, 'day', e.target.value)} />);
        }
        return (<select id={`day_${item.id}`} name={`day_${item.id}`} className="input-white" value={item.day || 1} onChange={(e) => updateItem(section, category, item.id, 'day', e.target.value)}>{[...Array(31)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select>);
    };
    return (
        <div className={`budget-item ${isActif ? 'actif-item' : ''} ${isIncome ? 'income-item' : ''}`} draggable>
            <div className="drag-handle" style={{ display: 'flex', justifyContent: 'center' }}><Bars3Icon style={{ width: '20px', color: '#95a5a6' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="budget-trash-col"><button onClick={() => removeItem(section, category, item.id)} className="icon-clean icon-red" title={t('common.delete')}><TrashIcon style={{ width: '18px' }} /></button></div>
            <div style={isIncome ? { gridColumn: '3 / span 2' } : {}} className="budget-label-col"><input id={`label_${item.id}`} name={`label_${item.id}`} type="text" className="input-white" value={item.label || ''} onChange={(e) => updateItem(section, category, item.id, 'label', e.target.value)} placeholder={t('common.description')} style={{ fontWeight: 500 }} /></div>
            {!isActif && !isIncome && (<div>{renderDayInput()}</div>)}
            {!isActif && (<div><select id={`freq_${item.id}`} name={`freq_${item.id}`} className="input-pale-blue" value={item.freq || 12} onChange={(e) => updateItem(section, category, item.id, 'freq', e.target.value)}><option value="365">{t('common.freq_daily')}</option><option value="52">{t('common.freq_weekly')}</option><option value="26">{t('common.freq_biweekly')}</option><option value="12">{t('common.freq_monthly')}</option><option value="4">{t('common.freq_quarterly')}</option><option value="2">{t('common.freq_biannual')}</option><option value="1">{t('common.freq_annual')}</option></select></div>)}
            <div><CurrencyInput id={`cost_${item.id}`} name={`cost_${item.id}`} className="input-white" value={item.cost} onChange={(e) => updateItem(section, category, item.id, 'cost', e.target.value)} placeholder="0.00" style={{ textAlign: 'right', fontWeight: 'bold', color: '#2C3E50' }} /></div>
            {!isActif && (<div className="budget-monthly-value" style={{ color: '#7F8C8D', fontSize: '0.95rem', textAlign: 'right', fontWeight: 'bold' }}>{formatCurrency(monthlyVal)}</div>)}
        </div>
    );
};

function Budget() {
    const { appState, saveGlobalState, formatCurrency } = useData();
    const { t, i18n } = useTranslation();
    const currency = appState.settings?.currentCurrency || 'CAD';
    const [hoveredTooltip, setHoveredTooltip] = useState(null);
    const [scenarios, setScenarios] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showScenarioModal, setShowScenarioModal] = useState(false);
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const hasSeenIntro = localStorage.getItem('nexus_intro_budget_seen');
        if (!hasSeenIntro) {
            setShowIntro(true);
        }
    }, []);

    useEffect(() => {
        if (appState.budgetScenarios && appState.budgetScenarios.length > 0) {
            setScenarios(appState.budgetScenarios);
            setActiveIndex(appState.volatile?.activeBudgetIndex || 0);
        } else if (appState.budget) {
            const initScen = [{ name: "1", data: appState.budget }];
            setScenarios(initScen);
            const newState = { ...appState, budgetScenarios: initScen };
            if (!newState.volatile) newState.volatile = {};
            newState.volatile.activeBudgetIndex = 0;
            saveGlobalState(newState);
        }
    }, []);

    const handleSelectScenario = (index) => {
        const newScenarios = [...scenarios];
        newScenarios[activeIndex].data = JSON.parse(JSON.stringify(appState.budget));
        const newState = { ...appState };
        newState.budget = JSON.parse(JSON.stringify(newScenarios[index].data));
        newState.budgetScenarios = newScenarios;
        newState.volatile.activeBudgetIndex = index;
        setScenarios(newScenarios);
        setActiveIndex(index);
        saveGlobalState(newState);
    };

    const handleAddScenarioClick = () => { setShowScenarioModal(true); };

    const confirmAddScenario = (mode) => {
        const newData = JSON.parse(JSON.stringify(appState.budget));
        if (mode === 'empty') {
            if (newData.revenus) newData.revenus.forEach(i => i.cost = 0);
            if (newData.epargne) newData.epargne.forEach(i => i.cost = 0);
            if (newData.actifs) newData.actifs.forEach(i => i.cost = 0);
            if (newData.depenses) { Object.keys(newData.depenses).forEach(cat => { newData.depenses[cat].forEach(i => i.cost = 0); }); }
        }
        const nextName = (scenarios.length + 1).toString();
        const newScenarios = [...scenarios, { name: nextName, data: newData }];
        setScenarios(newScenarios);
        const newIndex = newScenarios.length - 1;
        const newState = { ...appState, budgetScenarios: newScenarios };
        newState.budget = newData;
        newState.volatile.activeBudgetIndex = newIndex;
        setActiveIndex(newIndex);
        saveGlobalState(newState);
        setShowScenarioModal(false);
    };

    const handleGenerateYear = () => {
        if (!window.confirm(t('budget.confirm_generate'))) return;
        const currentData = JSON.parse(JSON.stringify(appState.budget));
        const months = Array.from({ length: 12 }, (_, i) => { const date = new Date(2023, i, 1); return date.toLocaleString(i18n.language, { month: 'long' }); });
        const capitalizedMonths = months.map(m => m.charAt(0).toUpperCase() + m.slice(1));
        const newScenarios = capitalizedMonths.map(m => ({ name: m, data: JSON.parse(JSON.stringify(currentData)) }));
        const newState = { ...appState, budget: newScenarios[0].data, budgetScenarios: newScenarios };
        newState.volatile.activeBudgetIndex = 0;
        setScenarios(newScenarios);
        setActiveIndex(0);
        saveGlobalState(newState);
    };

    const handleClearAllScenarios = () => {
        if (scenarios.length <= 1) return;
        if (!window.confirm(t('budget.confirm_clear_scenarios'))) return;
        const currentData = JSON.parse(JSON.stringify(appState.budget));
        const newScenarios = [{ name: "1", data: currentData }];
        const newState = { ...appState, budget: currentData, budgetScenarios: newScenarios };
        newState.volatile.activeBudgetIndex = 0;
        setScenarios(newScenarios);
        setActiveIndex(0);
        saveGlobalState(newState);
    };

    const handleDeleteScenario = (index) => {
        if (scenarios.length <= 1) return alert(t('common.cannot_delete_last'));
        const newScenarios = scenarios.filter((_, i) => i !== index);
        let newIndex = activeIndex;
        if (index === activeIndex) newIndex = Math.max(0, index - 1);
        else if (index < activeIndex) newIndex = activeIndex - 1;
        const newState = { ...appState, budgetScenarios: newScenarios };
        if (index === activeIndex) { newState.budget = newScenarios[newIndex].data; }
        newState.volatile.activeBudgetIndex = newIndex;
        setScenarios(newScenarios);
        setActiveIndex(newIndex);
        saveGlobalState(newState);
    };

    const handleRenameScenario = (index, name) => {
        const newScenarios = [...scenarios];
        newScenarios[index].name = name;
        setScenarios(newScenarios);
        const newState = { ...appState, budgetScenarios: newScenarios };
        saveGlobalState(newState);
    };

    const dragItem = useRef();
    const dragOverItem = useRef();
    const budget = appState.budget;
    if (!budget) return <div style={{ padding: '20px', textAlign: 'center' }}>{t('common.loading')}...</div>;

    const handleDragStart = (e, index, section, category) => { dragItem.current = { index, section, category }; e.dataTransfer.effectAllowed = "move"; };
    const handleDragEnter = (e, index, section, category) => { const source = dragItem.current; if (source && source.section === section && source.category === category) { dragOverItem.current = { index, section, category }; } };
    const handleDragEnd = () => {
        const source = dragItem.current; const destination = dragOverItem.current;
        if (!source || !destination || source.index === destination.index) { dragItem.current = null; dragOverItem.current = null; return; }
        if (source.section === destination.section && source.category === destination.category) {
            const newState = JSON.parse(JSON.stringify(appState));
            let list = (source.section === 'depenses') ? newState.budget.depenses[source.category] : newState.budget[source.section];
            const itemToMove = list[source.index]; list.splice(source.index, 1); list.splice(destination.index, 0, itemToMove);
            const newScens = [...scenarios]; newScens[activeIndex].data = newState.budget; setScenarios(newScens); newState.budgetScenarios = newScens;
            saveGlobalState(newState);
        }
        dragItem.current = null; dragOverItem.current = null;
    };

    const updateItem = (section, category, id, field, value) => {
        const newState = JSON.parse(JSON.stringify(appState));
        let list = (section === 'depenses') ? newState.budget.depenses[category] : newState.budget[section];
        const index = list.findIndex(item => item.id === id);
        if (index !== -1) {
            let valToSave = value;
            if (field === 'cost') valToSave = value === '' ? 0 : parseFloat(value);
            else if (field === 'day' && category !== 'Abonnement') valToSave = parseInt(value) || 1;
            else if (field === 'freq') valToSave = parseInt(value) || 12;
            list[index][field] = valToSave;
            const newScens = [...scenarios]; newScens[activeIndex].data = newState.budget; setScenarios(newScens); newState.budgetScenarios = newScens;
            saveGlobalState(newState);
        }
    };

    const addItem = (section, category) => {
        const newState = JSON.parse(JSON.stringify(appState));
        const uniqueId = `${section}-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        const newItem = (section === 'actifs') ? { id: uniqueId, label: '', cost: 0 } : { id: uniqueId, label: '', cost: 0, freq: 12, day: 1 };
        if (section === 'depenses') { if (!newState.budget.depenses[category]) newState.budget.depenses[category] = []; newState.budget.depenses[category].push(newItem); } else { newState.budget[section].push(newItem); }
        const newScens = [...scenarios]; newScens[activeIndex].data = newState.budget; setScenarios(newScens); newState.budgetScenarios = newScens;
        saveGlobalState(newState);
    };

    const removeItem = (section, category, id) => {
        if (!window.confirm(t('common.confirm_delete'))) return;
        const newState = JSON.parse(JSON.stringify(appState));
        if (section === 'depenses') newState.budget.depenses[category] = newState.budget.depenses[category].filter(i => i.id !== id); else newState.budget[section] = newState.budget[section].filter(i => i.id !== id);
        const newScens = [...scenarios]; newScens[activeIndex].data = newState.budget; setScenarios(newScens); newState.budgetScenarios = newScens;
        saveGlobalState(newState);
    };

    const resetCategory = (section, category) => {
        if (!window.confirm(t('budget.reset') + " ?")) return;
        const newState = JSON.parse(JSON.stringify(appState));
        if (section === 'depenses') newState.budget.depenses[category].forEach(i => i.cost = 0); else newState.budget[section].forEach(i => i.cost = 0);
        const newScens = [...scenarios]; newScens[activeIndex].data = newState.budget; setScenarios(newScens); newState.budgetScenarios = newScens;
        saveGlobalState(newState);
    };

    const totalRevenus = budget.revenus.reduce((s, i) => s + normalizeToMonthly(i.cost, i.freq), 0);
    const totalEpargne = budget.epargne.reduce((s, i) => s + normalizeToMonthly(i.cost, i.freq), 0);
    let totalDepenses = 0; Object.values(budget.depenses).forEach(cat => totalDepenses += cat.reduce((s, i) => s + normalizeToMonthly(i.cost, i.freq), 0));
    const solde = totalRevenus - totalDepenses - totalEpargne;
    const totalActifs = budget.actifs ? budget.actifs.reduce((s, i) => s + (parseFloat(i.cost) || 0), 0) : 0;

    const summaryData = { labels: [t('budget.income'), t('budget.expenses'), t('budget.savings'), t('budget.balance')], datasets: [{ label: t('budget.monthly_cost'), data: [totalRevenus, totalDepenses, totalEpargne, Math.max(0, solde)], backgroundColor: [PASTEL.green, PASTEL.red, PASTEL.yellow, solde >= 0 ? PASTEL.blue : PASTEL.red], borderRadius: 4, borderWidth: 0 }] };
    const translateCategory = (cat) => { const map = { "Dépenses Fixes": t('budget.cat_fixed'), "Dépenses Variables": t('budget.cat_variable'), "Dettes": t('budget.cat_debt'), "Abonnement": t('budget.cat_sub'), "Impôts et Taxes": t('budget.cat_tax') }; return map[cat] || cat; };
    const depensesLabels = []; const depensesData = [];
    const polarColors = ['rgba(133, 193, 233, 0.6)', 'rgba(187, 143, 206, 0.6)', 'rgba(247, 220, 111, 0.6)', 'rgba(240, 178, 122, 0.6)', 'rgba(236, 112, 99, 0.6)', 'rgba(118, 215, 196, 0.6)', 'rgba(130, 224, 170, 0.6)', 'rgba(189, 195, 199, 0.6)'];
    Object.keys(budget.depenses).forEach(cat => { const totalCat = budget.depenses[cat].reduce((s, i) => s + normalizeToMonthly(i.cost, i.freq), 0); if (totalCat > 0) { depensesLabels.push(translateCategory(cat)); depensesData.push(totalCat); } });
    const polarData = { labels: depensesLabels, datasets: [{ data: depensesData, backgroundColor: polarColors.slice(0, depensesLabels.length), borderWidth: 1, borderColor: '#fff' }] };
    const topExpensesData = useMemo(() => { const allExpenses = []; Object.keys(budget.depenses).forEach(cat => { budget.depenses[cat].forEach(item => { const monthly = normalizeToMonthly(item.cost, item.freq); if (monthly > 0) { allExpenses.push({ label: item.label || t('common.unnamed'), value: monthly, category: cat }); } }); }); allExpenses.sort((a, b) => b.value - a.value); const displayExpenses = allExpenses.slice(0, 15); return { labels: displayExpenses.map(e => e.label), datasets: [{ label: t('budget.monthly_cost'), data: displayExpenses.map(e => e.value), backgroundColor: PASTEL.red, borderRadius: 4, barPercentage: 0.7, borderWidth: 0 }] }; }, [budget.depenses, t]);
    const renderHeader = (title, section, category = null, tooltipId) => (<div className={`budget-header-row ${section === 'revenus' ? 'income-header' : ''}`} style={{ fontSize: '1.1rem', fontWeight: 'bold' }}> <div></div><div></div><div style={section === 'revenus' ? { textAlign: 'left', gridColumn: '3 / span 2' } : { textAlign: 'left' }}>{t('common.description')}</div> {section !== 'revenus' && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', position: 'relative', cursor: 'help' }} onMouseEnter={() => setHoveredTooltip(tooltipId)} onMouseLeave={() => setHoveredTooltip(null)}>{category === 'Abonnement' ? t('budget.date_renewal') : t('budget.date_payment')}<QuestionMarkCircleIcon style={{ width: '22px', height: '22px', flexShrink: 0, color: '#3498DB' }} />{hoveredTooltip === tooltipId && (<div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#34495E', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.75rem', whiteSpace: 'nowrap', zIndex: 100, marginBottom: '5px' }}>{category === 'Abonnement' ? t('budget.date_renewal_tooltip') : t('budget.date_payment_tooltip')}</div>)}</div>} <div style={{ textAlign: 'right' }}>{t('common.frequency')}</div><div style={{ textAlign: 'right' }}>{t('common.amount')}</div><div style={{ textAlign: 'right' }}>{t('common.monthly')}</div> </div>);

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="budget-container" style={{ width: '100%' }}>
                <div className="module-header-with-reset" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h2 style={{ margin: 0 }}>{t('budget.title')}</h2>
                    <button
                        onClick={() => setShowIntro(true)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#9ca3af',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'color 0.2s',
                            padding: '4px'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                        title="Voir l'introduction"
                    >
                        <InformationCircleIcon style={{ width: '24px', height: '24px' }} />
                    </button>
                </div>

                <ScenarioTabs
                    scenarios={scenarios}
                    activeIndex={activeIndex}
                    onSelect={handleSelectScenario}
                    onAdd={handleAddScenarioClick}
                    onDelete={handleDeleteScenario}
                    onRename={handleRenameScenario}
                    activeColor="var(--secondary-color)"
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '20px' }}>
                    {scenarios.length > 1 && (<button onClick={handleClearAllScenarios} title={t('budget.clear_scenarios')} style={{ padding: '8px 15px', borderRadius: '6px', border: '1px solid var(--danger-color)', background: 'rgba(236, 112, 99, 0.1)', color: 'var(--danger-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}><TrashIcon style={{ width: '20px' }} /> {t('budget.clear_scenarios')}</button>)}
                    <button onClick={handleGenerateYear} title={t('budget.generate_year')} style={{ padding: '8px 15px', borderRadius: '6px', border: '1px solid var(--info-color)', background: 'var(--card-background)', color: 'var(--info-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}><CalendarIcon style={{ width: '20px' }} /> {t('budget.generate_year')}</button>
                </div>

                <div className="budget-card bg-revenus card-hover-fix">
                    <div className="budget-card-header"><h4>{t('budget.income')}</h4><button onClick={() => resetCategory('revenus')} className="icon-clean icon-blue" title={t('budget.reset')}><ArrowPathIcon style={{ width: '18px' }} /></button></div>
                    {renderHeader(t('budget.income'), 'revenus', null, 'tooltip-revenus')}
                    {budget.revenus.map((item, index) => (<div key={item.id} draggable onDragStart={(e) => handleDragStart(e, index, 'revenus', null)} onDragEnter={(e) => handleDragEnter(e, index, 'revenus', null)} onDragEnd={handleDragEnd} onDragOver={(e) => e.preventDefault()}><BudgetRow item={item} section="revenus" updateItem={updateItem} removeItem={removeItem} formatCurrency={formatCurrency} t={t} /></div>))}
                    <div className="budget-card-footer"><button className="btn-add-line" onClick={() => addItem('revenus')}><PlusIcon style={{ width: '16px' }} /> {t('budget.add_line')}</button><div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2C3E50' }}>{t('common.total')}: <span style={{ color: '#3498DB' }}>{formatCurrency(totalRevenus)}</span></div></div>
                </div>

                {Object.keys(budget.depenses).map(cat => {
                    const catTotal = budget.depenses[cat].reduce((s, i) => s + normalizeToMonthly(i.cost, i.freq), 0);
                    const translatedCat = translateCategory(cat);
                    return (
                        <div key={cat} className="budget-card bg-depenses card-hover-fix">
                            <div className="budget-card-header"><h4>{translatedCat}</h4><button onClick={() => resetCategory('depenses', cat)} className="icon-clean icon-blue" title={t('budget.reset')}><ArrowPathIcon style={{ width: '18px' }} /></button></div>
                            {renderHeader(translatedCat, 'depenses', cat, `tooltip-${cat}`)}
                            {budget.depenses[cat].map((item, index) => (<div key={item.id} draggable onDragStart={(e) => handleDragStart(e, index, 'depenses', cat)} onDragEnter={(e) => handleDragEnter(e, index, 'depenses', cat)} onDragEnd={handleDragEnd} onDragOver={(e) => e.preventDefault()}><BudgetRow item={item} section="depenses" category={cat} updateItem={updateItem} removeItem={removeItem} formatCurrency={formatCurrency} t={t} /></div>))}
                            <div className="budget-card-footer"><button className="btn-add-line" onClick={() => addItem('depenses', cat)}><PlusIcon style={{ width: '16px' }} /> {t('budget.add_line')}</button><div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2C3E50' }}>{t('common.total')}: <span style={{ color: '#F39C12' }}>{formatCurrency(catTotal)}</span></div></div>
                        </div>
                    );
                })}

                <div className="budget-card bg-epargne card-hover-fix">
                    <div className="budget-card-header"><h4>{t('budget.savings')}</h4><button onClick={() => resetCategory('epargne')} className="icon-clean icon-blue" title={t('budget.reset')}><ArrowPathIcon style={{ width: '18px' }} /></button></div>
                    {renderHeader(t('budget.savings'), 'epargne', null, 'tooltip-epargne')}
                    {budget.epargne.map((item, index) => (<div key={item.id} draggable onDragStart={(e) => handleDragStart(e, index, 'epargne', null)} onDragEnter={(e) => handleDragEnter(e, index, 'epargne', null)} onDragEnd={handleDragEnd} onDragOver={(e) => e.preventDefault()}><BudgetRow item={item} section="epargne" updateItem={updateItem} removeItem={removeItem} formatCurrency={formatCurrency} t={t} /></div>))}
                    <div className="budget-card-footer"><button className="btn-add-line" onClick={() => addItem('epargne')}><PlusIcon style={{ width: '16px' }} /> {t('budget.add_line')}</button><div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2C3E50' }}>{t('common.total')}: <span style={{ color: '#48C9B0' }}>{formatCurrency(totalEpargne)}</span></div></div>
                </div>

                <div className="budget-card bg-actifs card-hover-fix">
                    <div className="budget-card-header"><h4>{t('budget.assets')}</h4><button onClick={() => resetCategory('actifs')} className="icon-clean icon-blue" title={t('budget.reset')}><ArrowPathIcon style={{ width: '18px' }} /></button></div>
                    <div style={{ backgroundColor: '#FEF9E7', color: '#000000', padding: '10px 15px', borderRadius: '6px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', border: '1px solid #FDEBD0' }}>
                        <ExclamationTriangleIcon style={{ width: '24px', flexShrink: 0, color: '#000000' }} />
                        <span>{t('budget.assets_warning')}</span>
                    </div>
                    <div className="budget-header-row actifs-header"><div></div><div></div><div style={{ textAlign: 'left' }}>{t('common.description')}</div><div style={{ textAlign: 'right' }}>{t('common.amount')}</div></div>
                    {budget.actifs && budget.actifs.map((item, index) => (<div key={item.id} draggable onDragStart={(e) => handleDragStart(e, index, 'actifs', null)} onDragEnter={(e) => handleDragEnter(e, index, 'actifs', null)} onDragEnd={handleDragEnd} onDragOver={(e) => e.preventDefault()}><BudgetRow item={item} section="actifs" updateItem={updateItem} removeItem={removeItem} formatCurrency={formatCurrency} t={t} /></div>))}
                    <div className="budget-card-footer"><button className="btn-add-line" onClick={() => addItem('actifs')}><PlusIcon style={{ width: '16px' }} /> {t('budget.add_line')}</button><div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#34495E' }}>{formatCurrency(totalActifs)}</div></div>
                </div>

                <div className="budget-overview">
                    <div className="overview-box" style={{ backgroundColor: PASTEL.green, color: '#000000' }}><div className="label">{t('budget.income')}</div><div className="value" style={{ color: '#000000' }}>{formatCurrency(totalRevenus)}</div></div>
                    <div className="overview-box" style={{ backgroundColor: PASTEL.red, color: '#000000' }}><div className="label">{t('budget.expenses')}</div><div className="value" style={{ color: '#000000' }}>{formatCurrency(totalDepenses)}</div></div>
                    <div className="overview-box" style={{ backgroundColor: PASTEL.yellow, color: '#000000' }}><div className="label">{t('budget.savings')}</div><div className="value" style={{ color: '#000000' }}>{formatCurrency(totalEpargne)}</div></div>
                    <div className="overview-box" style={{ backgroundColor: solde >= 0 ? PASTEL.blue : PASTEL.red, color: '#000000' }}><div className="label">{t('budget.balance')}</div><div className="value" style={{ color: '#000000' }}>{formatCurrency(solde)}</div></div>
                </div>

                <div className="results-with-chart" style={{ display: 'grid', gridTemplateColumns: depensesData.length > 0 ? '1fr 350px' : '1fr', gap: '30px', alignItems: 'start' }}>
                    <div className="chart-container">
                        <Bar data={summaryData} plugins={[shadowPlugin]} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                title: { display: true, text: t('budget.summary'), font: { size: 16 } },
                                tooltip: {
                                    callbacks: {
                                        label: function (context) {
                                            let label = context.dataset.label || '';
                                            if (label) label += ': ';
                                            if (context.parsed.y !== null) {
                                                label += new Intl.NumberFormat(i18n.language, { style: 'currency', currency: currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(context.parsed.y);
                                            }
                                            return label;
                                        }
                                    }
                                }
                            }
                        }} />
                    </div>
                    {depensesData.length > 0 && (
                        <div className="chart-container" style={{ width: '100%', height: '350px', position: 'relative', margin: '0 auto' }}>
                            <PolarArea data={polarData} options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    title: { display: true, text: t('budget.distribution'), font: { size: 16 } },
                                    legend: { position: 'bottom' },
                                    tooltip: {
                                        callbacks: {
                                            label: function (context) {
                                                let label = context.label || '';
                                                if (label) label += ': ';
                                                if (context.parsed.r !== null) {
                                                    label += new Intl.NumberFormat(i18n.language, { style: 'currency', currency: currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(context.parsed.r);
                                                }
                                                return label;
                                            }
                                        }
                                    }
                                },
                                scales: { r: { ticks: { display: false } } }
                            }} />
                        </div>
                    )}
                </div>

                {topExpensesData.datasets[0].data.length > 0 && (
                    <div className="chart-container" style={{ marginTop: '30px', height: '500px' }}>
                        <Bar data={topExpensesData} plugins={[shadowPlugin]} options={{
                            indexAxis: 'y',
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                title: { display: true, text: t('budget.top_expenses'), font: { size: 16 } },
                                tooltip: {
                                    callbacks: {
                                        label: function (context) {
                                            let label = context.dataset.label || '';
                                            if (label) label += ': ';
                                            if (context.parsed.x !== null) {
                                                label += new Intl.NumberFormat(i18n.language, { style: 'currency', currency: currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(context.parsed.x);
                                            }
                                            return label;
                                        }
                                    }
                                }
                            },
                            scales: { x: { beginAtZero: true } }
                        }} />
                    </div>
                )}

                {/* --- INTÉGRATION DU MODAL REFACTORISÉ --- */}
                <ScenarioChoiceModal
                    isOpen={showScenarioModal}
                    onClose={() => setShowScenarioModal(false)}
                    onConfirm={confirmAddScenario}
                />

                <IntroBudget
                    isOpen={showIntro}
                    onClose={() => setShowIntro(false)}
                />

            </div>
        </div>
    );
}

export default Budget;