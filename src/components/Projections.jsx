import React, { useState, useMemo, useEffect } from 'react';
import { useData } from '../context/DataContext';
import ProjectionInputs from './ProjectionInputs';
import CurrencyInput from './CurrencyInput';
import ScenarioTabs from './ScenarioTabs';
import ScenarioChoiceModal from './ScenarioChoiceModal';
import { useTranslation, Trans } from 'react-i18next'; // Importation nécessaire
import { ArrowTrendingUpIcon, FlagIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, Filler);

const ResultRow = ({ label, value, widthPercent = 0, color = 'var(--secondary-color)', subLabel = null }) => (
    <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: '8px', minHeight: '45px', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <div style={{ flex: '0 0 220px', display: 'flex', alignItems: 'center', fontWeight: '600', color: 'var(--text-color)', padding: '0 20px', background: 'var(--card-background)', fontSize: '1rem', borderRight: '1px solid var(--border-color)', zIndex: 2 }}>{label}</div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', background: 'var(--background-color)', padding: '0 20px', fontWeight: 'bold', fontSize: '1.4rem', color: 'var(--text-color)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${Math.min(100, Math.max(0, widthPercent))}%`, backgroundColor: color, opacity: 0.15, transition: 'width 1s ease-out', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', left: `${Math.min(100, Math.max(0, widthPercent))}%`, top: 0, bottom: 0, width: '3px', backgroundColor: color, opacity: 0.8, transition: 'left 1s ease-out', zIndex: 0 }}></div>
            <span style={{ position: 'relative', zIndex: 1 }}>{value} {subLabel && <span style={{ fontSize: '0.9rem', fontWeight: 'normal', marginLeft: '8px', color: 'var(--secondary-color)' }}>{subLabel}</span>}</span>
        </div>
    </div>
);

const CustomLegend = ({ items }) => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', fontSize: '0.9rem', color: 'var(--secondary-color)', flexWrap: 'wrap' }}>
        {items.map((item, idx) => (<div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: item.color }}></div><span>{item.label}</span></div>))}
    </div>
);

function Projections() {
    // --- CORRECTION ICI : Ajout de t (traduction) ---
    const { t } = useTranslation();
    const { appState, saveGlobalState, formatCurrency, defaultScenario } = useData();

    const [activeTab, setActiveTab] = useState('fv');
    const [showScenarioModal, setShowScenarioModal] = useState(false);

    const SCENARIO_KEYS = { fv: 'fvScenarios', goal: 'goalScenarios', wd: 'wdScenarios' };
    const ACTIVE_INDEX_KEYS = { fv: 'activeFvIndex', goal: 'activeGoalIndex', wd: 'activeWdIndex' };
    const COLORS = { fv: '#48C9B0', goal: '#85C1E9', wd: '#F39C12' };

    const currentKey = SCENARIO_KEYS[activeTab];
    const currentIndexKey = ACTIVE_INDEX_KEYS[activeTab];

    const scenarios = appState.projections?.[currentKey] || [defaultScenario];
    const activeIndex = appState.volatile?.[currentIndexKey] || 0;
    const scenario = scenarios[activeIndex] || defaultScenario;

    const updateScenario = (field, value) => {
        const newState = JSON.parse(JSON.stringify(appState));
        let val = value;
        if (typeof value !== 'boolean' && field !== 'fvTiming') {
            val = value === "" ? "" : value;
        }
        newState.projections[currentKey][activeIndex][field] = val;
        saveGlobalState(newState);
    };

    const handleSelectScenario = (idx) => {
        const newState = { ...appState };
        newState.volatile[currentIndexKey] = idx;
        saveGlobalState(newState);
    };

    const handleAddScenarioClick = () => {
        setShowScenarioModal(true);
    };

    const confirmAddScenario = (mode) => {
        const newState = JSON.parse(JSON.stringify(appState));
        const nextName = (scenarios.length + 1).toString();

        let newScen;
        if (mode === 'copy') {
            newScen = { ...scenario, name: nextName };
        } else {
            // Utilisation d'un scénario vide
            newScen = { ...defaultScenario, name: nextName };
        }

        newState.projections[currentKey].push(newScen);
        newState.volatile[currentIndexKey] = newState.projections[currentKey].length - 1;
        saveGlobalState(newState);
        setShowScenarioModal(false);
    };

    const handleDeleteScenario = (idx) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.projections[currentKey].splice(idx, 1);
        if (activeIndex >= idx) newState.volatile[currentIndexKey] = Math.max(0, activeIndex - 1);
        saveGlobalState(newState);
    };
    const handleRenameScenario = (idx, newName) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.projections[currentKey][idx].name = newName;
        saveGlobalState(newState);
    };

    // --- MOTEUR DE CALCUL ---
    const results = useMemo(() => {
        const r = (parseFloat(scenario.sharedRate) || 0) / 100;
        const fees = (parseFloat(scenario.sharedFees) || 0) / 100;
        const inflation = (parseFloat(scenario.sharedInflation) || 0) / 100;
        const yearsDuration = parseFloat(scenario.sharedYears) || 1;
        const annualNetFactor = (1 + r) * (1 - fees);

        let dataPoints = [];
        let balance = 0, totalInvested = 0, pmtReq = 0;
        let fundsDuration = t('projections.more_than_years', { years: yearsDuration });

        if (activeTab === 'fv') {
            balance = parseFloat(scenario.fvInitial) || 0;
            totalInvested = balance;
            let currentPmt = parseFloat(scenario.fvPmt) || 0;
            const pmtFreq = parseInt(scenario.fvFreq) || 12;
            const pmtGrowth = (parseFloat(scenario.fvGrowth) || 0) / 100;
            const isBegin = scenario.fvTiming === 'begin';
            const periodFactor = Math.pow(annualNetFactor, 1 / pmtFreq);

            for (let year = 1; year <= yearsDuration; year++) {
                let startBalance = balance;
                let annualContribution = 0;
                let currentYearPmt = currentPmt;

                for (let p = 0; p < pmtFreq; p++) {
                    if (isBegin) balance = (balance + currentPmt) * periodFactor;
                    else balance = (balance * periodFactor) + currentPmt;
                    annualContribution += currentPmt;
                }
                totalInvested += annualContribution;
                let annualGain = balance - startBalance - annualContribution;

                dataPoints.push({
                    year,
                    balance,
                    invested: totalInvested,
                    real: balance / Math.pow(1 + inflation, year),
                    annualFlow: annualContribution,
                    periodicFlow: currentYearPmt,
                    annualGain: annualGain
                });

                currentPmt = currentPmt * (1 + pmtGrowth);
            }
        }
        else if (activeTab === 'goal') {
            balance = parseFloat(scenario.goalInitial) || 0;
            totalInvested = balance;
            const target = parseFloat(scenario.goalTarget) || 0;

            // CORRECTION : On utilise la fréquence exacte choisie (ex: 52 pour Hebdo)
            const freq = parseInt(scenario.goalFreq) || 12;
            const periodRate = Math.pow(annualNetFactor, 1 / freq) - 1;
            const totalPeriods = yearsDuration * freq;

            // Calcul précis du paiement périodique (PMT) selon la fréquence
            if (yearsDuration > 0 && periodRate !== 0) {
                const fvPrincipal = balance * Math.pow(1 + periodRate, totalPeriods);
                const fvAnnuityFactor = (Math.pow(1 + periodRate, totalPeriods) - 1) / periodRate;
                pmtReq = (target - fvPrincipal) / fvAnnuityFactor;
            }
            pmtReq = Math.max(0, pmtReq);

            for (let year = 1; year <= yearsDuration; year++) {
                let startBalance = balance;
                let annualContribution = 0;

                // Boucle basée sur la fréquence réelle (ex: 52 tours pour Hebdo)
                for (let p = 0; p < freq; p++) {
                    balance = balance * (1 + periodRate) + pmtReq;
                    annualContribution += pmtReq;
                }

                totalInvested += annualContribution;
                let annualGain = balance - startBalance - annualContribution;

                dataPoints.push({
                    year,
                    balance,
                    invested: totalInvested,
                    real: balance / Math.pow(1 + inflation, year),
                    annualFlow: annualContribution,
                    periodicFlow: pmtReq, // Affiche le montant exact par période (ex: par semaine)
                    annualGain: annualGain
                });
            }
        }
        else if (activeTab === 'wd') {
            balance = parseFloat(scenario.wdInitial) || 0;
            totalInvested = 0;
            let currentWd = parseFloat(scenario.wdAmount) || 0;
            const wdFreq = parseInt(scenario.wdFreq) || 12;
            const periodFactor = Math.pow(annualNetFactor, 1 / wdFreq);
            let depleted = false;

            for (let year = 1; year <= yearsDuration; year++) {
                let startBalance = balance;
                let annualWithdrawal = 0;
                let currentYearWd = currentWd;

                for (let p = 0; p < wdFreq; p++) {
                    if (balance <= 0) {
                        if (!depleted) {
                            fundsDuration = t('projections.duration_complex', { years: year - 1, months: Math.floor((p / wdFreq) * 12) });
                            depleted = true;
                        }
                        break;
                    }
                    const amount = Math.min(balance, currentWd);
                    balance -= amount;
                    annualWithdrawal += amount;
                    balance *= periodFactor;
                }
                totalInvested += annualWithdrawal;
                let annualGain = (balance - startBalance) + annualWithdrawal;

                if (scenario.wdAdjust) currentWd = currentWd * (1 + inflation);

                dataPoints.push({
                    year,
                    balance: Math.max(0, balance),
                    invested: totalInvested,
                    real: 0,
                    annualFlow: annualWithdrawal,
                    periodicFlow: currentYearWd,
                    annualGain: annualGain
                });
            }
            if (!depleted) fundsDuration = t('projections.more_than_years', { years: yearsDuration });
        }
        return { dataPoints, finalBalance: balance, totalInvested, pmtReq, fundsDuration };
    }, [scenario, activeTab]);

    const getRealValueText = (amount) => {
        const inflation = (parseFloat(scenario.sharedInflation) || 0) / 100;
        const years = parseFloat(scenario.sharedYears) || 0;
        if (!amount || !inflation || !years) return null;
        const realVal = amount / Math.pow(1 + inflation, years);
        return (<div style={{ fontSize: '0.85rem', color: 'var(--info-color)', marginTop: '4px' }}><Trans i18nKey="projections.equivalent_text" values={{ value: formatCurrency(realVal) }} components={{ strong: <strong /> }} /></div>);
    };

    const chartData = {
        labels: results.dataPoints.map(d => d.year),
        datasets: [
            { label: activeTab === 'wd' ? 'Solde Restant' : 'Valeur Totale', data: results.dataPoints.map(d => d.balance), borderColor: '#52BE80', backgroundColor: 'rgba(82, 190, 128, 0.2)', fill: true, tension: 0.4, order: 1 },
            { label: activeTab === 'wd' ? 'Total Retiré' : 'Capital Investi', data: results.dataPoints.map(d => d.invested), borderColor: '#34495E', borderDash: [5, 5], fill: false, tension: 0.4, order: 2 },
            ...(activeTab !== 'wd' ? [{ label: 'Intérêts Gagnés', data: results.dataPoints.map(d => d.balance - d.invested), borderColor: '#3498DB', backgroundColor: 'rgba(52, 152, 219, 0.1)', fill: false, tension: 0.4, order: 3 }] : []),
            ...(activeTab !== 'wd' ? [{ label: 'Pouvoir d\'Achat (Réel)', data: results.dataPoints.map(d => d.real), borderColor: '#E74C3C', borderWidth: 2, borderDash: [2, 2], fill: false, tension: 0.4, order: 0 }] : [])
        ]
    };

    let donutData, donutLegendItems = [];
    if (activeTab === 'wd') {
        donutData = { labels: ['Solde Restant', 'Total Retiré'], datasets: [{ data: [Math.max(0, results.finalBalance), results.totalInvested], backgroundColor: ['#52BE80', '#3498DB'], borderWidth: 0 }] };
        donutLegendItems = [{ label: 'Capital Restant', color: '#52BE80' }, { label: `Retiré (${scenario.sharedYears}a)`, color: '#3498DB' }];
    } else {
        donutData = { labels: ['Capital Investi', 'Gains/Pertes'], datasets: [{ data: [results.totalInvested, Math.max(0, results.finalBalance - results.totalInvested)], backgroundColor: ['#34495E', '#3498DB'], borderWidth: 0 }] };
        donutLegendItems = [{ label: 'Capital Investi', color: '#34495E' }, { label: 'Gains/Pertes Totaux', color: '#3498DB' }];
    }

    const tabStyle = (tabName, color) => ({ padding: '12px 25px', background: activeTab === tabName ? 'var(--card-background)' : 'transparent', border: 'none', borderBottom: activeTab === tabName ? `4px solid ${color}` : '4px solid transparent', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', color: activeTab === tabName ? 'var(--text-color)' : 'var(--secondary-color)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' });
    const getFreqLabel = (freq) => { const map = { 365: t('projections.per_day'), 52: t('projections.per_week'), 26: t('projections.per_biweek'), 12: t('projections.per_month'), 4: t('projections.per_quarter'), 2: t('projections.per_semester'), 1: t('projections.per_year') }; return map[freq] || t('projections.per_period'); };
    const frequencyOptions = (<><option value="365">{t('common.freq_daily')}</option><option value="52">{t('common.freq_weekly')}</option><option value="26">{t('common.freq_biweekly')}</option><option value="12">{t('common.freq_monthly')}</option><option value="4">{t('common.freq_quarterly')}</option><option value="2">{t('common.freq_biannual')}</option><option value="1">{t('common.freq_annual')}</option></>);

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="module-header-with-reset"><h2>{t('projections.title')}</h2></div>

            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '25px', overflowX: 'auto' }}>
                <button style={tabStyle('fv', '#48C9B0')} onClick={() => setActiveTab('fv')}><ArrowTrendingUpIcon style={{ width: '24px' }} /> {t('projections.fv_tab')}</button>
                <button style={tabStyle('goal', '#85C1E9')} onClick={() => setActiveTab('goal')}><FlagIcon style={{ width: '24px' }} /> {t('projections.goal_tab')}</button>
                <button style={tabStyle('wd', '#F39C12')} onClick={() => setActiveTab('wd')}><BanknotesIcon style={{ width: '24px' }} /> {t('projections.wd_tab')}</button>
            </div>

            <ScenarioTabs
                scenarios={scenarios}
                activeIndex={activeIndex}
                onSelect={handleSelectScenario}
                onAdd={handleAddScenarioClick}
                onDelete={handleDeleteScenario}
                onRename={handleRenameScenario}
                activeColor={COLORS[activeTab]}
            />

            <div className="budget-category" style={{ marginBottom: '20px', padding: '25px', background: 'var(--card-background)' }}>
                {activeTab === 'fv' && (
                    <div className="fieldset-grid">
                        <div className="input-group"><label>{t('projections.initial_capital')}</label><CurrencyInput name="fvInitial" value={scenario.fvInitial} onChange={(e) => updateScenario('fvInitial', e.target.value)} /></div>
                        <div className="input-group"><label>{t('projections.payment')}</label><CurrencyInput name="fvPmt" value={scenario.fvPmt} onChange={(e) => updateScenario('fvPmt', e.target.value)} /></div>
                        <div className="input-group"><label>{t('common.frequency')}</label><select value={scenario.fvFreq} onChange={(e) => updateScenario('fvFreq', e.target.value)}>{frequencyOptions}</select></div>
                        <div className="input-group"><label>{t('projections.annual_growth')}</label><input type="number" value={scenario.fvGrowth} onChange={(e) => updateScenario('fvGrowth', e.target.value)} onFocus={(e) => e.target.select()} /></div>
                        <div className="input-group"><label>{t('projections.timing')}</label><select value={scenario.fvTiming} onChange={(e) => updateScenario('fvTiming', e.target.value)}><option value="end">{t('projections.timing_end')}</option><option value="begin">{t('projections.timing_begin')}</option></select></div>
                    </div>
                )}
                {activeTab === 'goal' && (
                    <div className="fieldset-grid">
                        <div className="input-group"><label>{t('projections.target_amount')}</label><CurrencyInput name="goalTarget" value={scenario.goalTarget} onChange={(e) => updateScenario('goalTarget', e.target.value)} /></div>
                        <div className="input-group"><label>{t('projections.initial_capital')}</label><CurrencyInput name="goalInitial" value={scenario.goalInitial} onChange={(e) => updateScenario('goalInitial', e.target.value)} /></div>
                        <div className="input-group"><label>{t('common.frequency')}</label><select value={scenario.goalFreq} onChange={(e) => updateScenario('goalFreq', e.target.value)}>{frequencyOptions}</select></div>
                        <div className="input-group"><label>{t('projections.annual_growth')}</label><input type="number" value={scenario.goalGrowth} onChange={(e) => updateScenario('goalGrowth', e.target.value)} onFocus={(e) => e.target.select()} /></div>
                    </div>
                )}
                {activeTab === 'wd' && (
                    <div className="fieldset-grid">
                        <div className="input-group"><label>{t('projections.capital_at_retirement')}</label><CurrencyInput name="wdInitial" value={scenario.wdInitial} onChange={(e) => updateScenario('wdInitial', e.target.value)} />{getRealValueText(scenario.wdInitial)}</div>
                        <div className="input-group"><label>{t('projections.desired_withdrawal')}</label><CurrencyInput name="wdAmount" value={scenario.wdAmount} onChange={(e) => updateScenario('wdAmount', e.target.value)} />{getRealValueText(scenario.wdAmount)}</div>
                        <div className="input-group"><label>{t('common.frequency')}</label><select value={scenario.wdFreq} onChange={(e) => updateScenario('wdFreq', e.target.value)}>{frequencyOptions}</select></div>
                        <div className="input-group" style={{ justifyContent: 'center' }}><label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}><input type="checkbox" checked={scenario.wdAdjust} onChange={(e) => updateScenario('wdAdjust', e.target.checked)} style={{ width: '24px', height: '24px' }} /> {t('projections.adjust_inflation')}</label></div>
                    </div>
                )}
            </div>

            <ProjectionInputs scenario={scenario} updateScenario={updateScenario} />

            <div className="projection-results-wrapper" style={{ marginTop: '30px', display: 'flex', gap: '30px', alignItems: 'stretch' }}>
                <div style={{ flex: 1, background: 'var(--card-background)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginTop: 0, marginBottom: '25px', color: 'var(--secondary-color)' }}>{t('common.results')}</h3>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {activeTab === 'goal' && (<ResultRow label={t('projections.required_payment')} value={formatCurrency(results.pmtReq)} subLabel={getFreqLabel(scenario.goalFreq)} color="var(--info-color)" widthPercent={100} />)}
                            <ResultRow label={activeTab === 'wd' ? t('projections.initial_capital') : t('projections.total_invested')} value={formatCurrency(results.totalInvested)} widthPercent={100} color="#34495E" />
                            {activeTab === 'wd' ? (<ResultRow label={`${t('projections.table_total_withdrawn')} (${scenario.sharedYears} ${t('common.years')})`} value={formatCurrency(results.totalInvested)} widthPercent={100} color="#3498DB" />) : (<ResultRow label={t('investment.gain_loss')} value={formatCurrency(results.finalBalance - results.totalInvested)} widthPercent={100} color="#3498DB" />)}
                            <ResultRow label={activeTab === 'wd' ? t('projections.final_balance') : t('projections.nominal_value')} value={formatCurrency(results.finalBalance)} widthPercent={100} color="var(--success-color)" />
                            {activeTab === 'wd' ? (<ResultRow label={t('projections.estimated_duration')} value={results.fundsDuration} widthPercent={0} color="transparent" />) : (<ResultRow label={t('projections.real_power')} value={formatCurrency(results.finalBalance / Math.pow(1 + scenario.sharedInflation / 100, scenario.sharedYears))} widthPercent={100} color="var(--danger-color)" />)}
                        </div>
                        <div style={{ width: '240px', display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, margin: '0 auto' }}>
                            <div style={{ width: '180px', height: '180px' }}>
                                <Doughnut data={donutData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true } } }} />
                            </div>
                            <CustomLegend items={donutLegendItems} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="chart-container" style={{ marginTop: '20px', height: '450px', background: 'var(--card-background)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: `Projection ${scenario.sharedYears} ${t('common.years')}` } } }} />
            </div>

            <h3 style={{ marginTop: '40px' }}>{t('common.results')} ({t('common.annual')})</h3>
            <div className="table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ position: 'sticky', top: 0, backgroundColor: 'var(--card-background)', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                        <tr style={{ textAlign: 'left', color: 'var(--secondary-color)' }}>
                            <th style={{ padding: '12px' }}>{t('projections.table_year')}</th>
                            <th style={{ padding: '12px' }}>{activeTab === 'wd' ? t('projections.table_withdrawal') : t('projections.table_deposit')}</th>
                            <th style={{ padding: '12px' }}>{activeTab === 'wd' ? t('projections.table_total_withdrawn') : t('projections.table_total_deposited')}</th>
                            <th style={{ padding: '12px' }}>{activeTab === 'wd' ? t('projections.table_gain') : t('projections.table_interest')}</th>
                            <th style={{ padding: '12px' }}>{t('projections.table_balance')}</th>
                            {activeTab !== 'wd' && <th style={{ padding: '12px' }}>{t('projections.table_real')}</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {results.dataPoints.map(row => (
                            <tr key={row.year} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: row.year % 2 === 0 ? 'var(--background-color)' : 'transparent' }}>
                                <td style={{ padding: '10px' }}><strong>{row.year}</strong></td>
                                <td style={{ padding: '10px' }}>{formatCurrency(row.periodicFlow)}</td>
                                <td style={{ padding: '10px' }}>{formatCurrency(row.annualFlow)}</td>
                                <td style={{ padding: '10px', color: row.annualGain >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{formatCurrency(row.annualGain)}</td>
                                <td style={{ padding: '10px', fontWeight: 'bold', color: 'var(--text-color)' }}>{formatCurrency(row.balance)}</td>
                                {activeTab !== 'wd' && <td style={{ padding: '10px', color: '#888' }}>{formatCurrency(row.real)}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ScenarioChoiceModal
                isOpen={showScenarioModal}
                onClose={() => setShowScenarioModal(false)}
                onConfirm={confirmAddScenario}
            />

        </div>
    );
}

export default Projections;