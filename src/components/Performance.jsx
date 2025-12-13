import React, { useMemo, useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation } from 'react-i18next';
import CurrencyInput from './CurrencyInput';
import ScenarioTabs from './ScenarioTabs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/outline';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const STANDARD = {
    initial: '#7F8C8D',
    initialRgba: 'rgba(127, 140, 141, 0.6)',
    gain: '#8E44AD',
    gainRgba: 'rgba(142, 68, 173, 0.6)',
    loss: '#E74C3C',
    lossRgba: 'rgba(231, 76, 60, 0.6)',
    final: '#52BE80',
    finalRgba: 'rgba(82, 190, 128, 0.6)',
    text: '#7F8C8D'
};

const ResultRow = ({ label, value, widthPercent = 0, color = 'var(--secondary-color)', subLabel = null }) => (
    <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: '15px', minHeight: '55px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        <div style={{
            flex: '0 0 200px', display: 'flex', alignItems: 'center', fontWeight: '600', color: 'var(--text-color)',
            padding: '0 20px', background: 'var(--card-background)', fontSize: '1rem', borderRight: '1px solid var(--border-color)', zIndex: 2
        }}>{label}</div>
        <div style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', background: 'var(--background-color)',
            padding: '0 20px', fontWeight: 'bold', fontSize: '1.4rem', color: 'var(--text-color)', position: 'relative'
        }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${Math.min(100, Math.max(0, widthPercent))}%`, backgroundColor: color, opacity: 0.20, transition: 'width 1s ease-out', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', left: `${Math.min(100, Math.max(0, widthPercent))}%`, top: 0, bottom: 0, width: '4px', backgroundColor: color, opacity: 1, transition: 'left 1s ease-out', zIndex: 0 }}></div>
            <span style={{ position: 'relative', zIndex: 1 }}>{value} {subLabel && <span style={{ fontSize: '0.9rem', fontWeight: 'normal', marginLeft: '8px', color: 'var(--secondary-color)' }}>{subLabel}</span>}</span>
        </div>
    </div>
);

function Performance({ currency = 'CAD' }) {
    const { appState, saveGlobalState, formatCurrency } = useData();
    const { t } = useTranslation();

    // Gestion des Scénarios
    const scenarios = appState.performanceScenarios || [{ name: '1', initial: "", final: "", startDate: "", endDate: "" }];
    const activeIndex = appState.volatile?.activePerformanceScenarioIndex || 0;
    const currentScenario = scenarios[activeIndex] || scenarios[0];

    const updateField = (field, value) => {
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.performanceScenarios) newState.performanceScenarios = scenarios;
        newState.performanceScenarios[activeIndex][field] = value;
        saveGlobalState(newState);
    };

    const handleSelectScenario = (index) => {
        const newState = { ...appState };
        if (!newState.volatile) newState.volatile = {};
        newState.volatile.activePerformanceScenarioIndex = index;
        saveGlobalState(newState);
    };

    const handleAddScenario = () => {
        const newState = JSON.parse(JSON.stringify(appState));
        const nextName = (scenarios.length + 1).toString();
        const newScen = { name: nextName, initial: "", final: "", startDate: "", endDate: "" };
        newState.performanceScenarios.push(newScen);
        newState.volatile.activePerformanceScenarioIndex = newState.performanceScenarios.length - 1;
        saveGlobalState(newState);
    };

    const handleDeleteScenario = (index) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.performanceScenarios.splice(index, 1);

        if (activeIndex >= index) {
            newState.volatile.activePerformanceScenarioIndex = Math.max(0, activeIndex - 1);
        }
        saveGlobalState(newState);
    };

    const handleRenameScenario = (index, newName) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.performanceScenarios[index].name = newName;
        saveGlobalState(newState);
    };

    // --- MOTEUR DE CALCUL ---
    const parseLocalDate = (dateString) => {
        if (!dateString) return null;
        const [year, month, day] = dateString.split('-').map(Number);
        return new Date(year, month - 1, day);
    };

    const results = useMemo(() => {
        const { initial, final, startDate, endDate } = currentScenario;

        const start = parseLocalDate(startDate);
        const end = parseLocalDate(endDate);

        const initialVal = parseFloat(initial) || 0;
        const finalVal = parseFloat(final) || 0;

        if (initialVal === 0 || !start || !end || isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
            return null;
        }

        const gainLoss = finalVal - initialVal;
        const totalReturn = (initialVal !== 0) ? (gainLoss / initialVal) * 100 : 0;

        const diffTime = end.getTime() - start.getTime();
        const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
        const totalYears = diffDays / 365.25;

        let tempStart = new Date(start);
        let years = 0, months = 0, days = 0;
        while (new Date(tempStart.setFullYear(tempStart.getFullYear() + 1)) <= end) years++;
        tempStart.setFullYear(tempStart.getFullYear() - 1);
        while (new Date(tempStart.setMonth(tempStart.getMonth() + 1)) <= end) months++;
        tempStart.setMonth(tempStart.getMonth() - 1);
        days = Math.ceil((end - tempStart) / (1000 * 60 * 60 * 24));

        let durationParts = [];
        if (years > 0) durationParts.push(`${years} ${t('common.years')}`);
        if (months > 0) durationParts.push(`${months} ${t('common.months')}`);
        if (days > 0 && (totalYears < 1 || (years === 0 && months === 0))) {
            durationParts.push(`${days} ${t('common.days')}`);
        }
        if (durationParts.length === 0 && diffDays > 0) durationParts.push(t('common.days')); // Fallback
        const formattedDuration = durationParts.join(', ');

        let cagrDisplay = '';
        let cagrValue = 0;
        let isSimpleReturn = false;

        if (initialVal <= 0) {
            cagrDisplay = 'N/A';
        } else if (totalYears < 1) {
            isSimpleReturn = true;
            cagrDisplay = `${totalReturn.toFixed(2)} %`;
        } else {
            cagrValue = (Math.pow(finalVal / initialVal, 1 / totalYears) - 1) * 100;
            cagrDisplay = isFinite(cagrValue) ? `${cagrValue.toFixed(2)} %` : 'N/A';
        }

        return {
            gainLoss,
            totalReturn,
            formattedDuration,
            cagrDisplay,
            cagrValue,
            isSimpleReturn,
            initialVal,
            finalVal
        };
    }, [currentScenario, t]);

    const barData = useMemo(() => {
        if (!results) return null;
        const isGain = results.gainLoss >= 0;
        return {
            labels: [t('performance.initial_value'), isGain ? t('projections.table_gain') : t('dashboard.loss'), t('performance.final_value')],
            datasets: [
                {
                    label: t('common.amount'),
                    data: [results.initialVal, results.gainLoss, results.finalVal],
                    backgroundColor: [
                        STANDARD.initialRgba,
                        isGain ? STANDARD.gainRgba : STANDARD.lossRgba,
                        STANDARD.finalRgba
                    ],
                    borderColor: [
                        STANDARD.initial,
                        isGain ? STANDARD.gain : STANDARD.loss,
                        STANDARD.final
                    ],
                    borderWidth: 2,
                    borderRadius: 6
                },
            ],
        };
    }, [results, t]);

    let donutData;
    if (results) {
        if (results.gainLoss >= 0) {
            donutData = {
                labels: [t('performance.initial_value'), t('projections.table_gain')],
                datasets: [{
                    data: [results.initialVal, results.gainLoss],
                    backgroundColor: [STANDARD.initialRgba, STANDARD.gainRgba],
                    borderWidth: 0
                }]
            };
        } else {
            donutData = {
                labels: [t('performance.final_value'), t('dashboard.loss')],
                datasets: [{
                    data: [Math.max(0, results.finalVal), Math.abs(results.gainLoss)],
                    backgroundColor: [STANDARD.finalRgba, STANDARD.lossRgba],
                    borderWidth: 0
                }]
            };
        }
    }

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="module-header-with-reset">
                <h2>{t('performance.title')}</h2>
            </div>

            <ScenarioTabs
                scenarios={scenarios}
                activeIndex={activeIndex}
                onSelect={handleSelectScenario}
                onAdd={handleAddScenario}
                onDelete={handleDeleteScenario}
                onRename={handleRenameScenario}
                activeColor={STANDARD.gain}
            />

            <fieldset style={{ padding: '25px', background: 'var(--card-background)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                <legend>{t('performance.params')}</legend>
                <div className="fieldset-grid">
                    <div className="input-group">
                        <label htmlFor="perf-initial">{t('performance.initial_value')}</label>
                        <CurrencyInput
                            id="perf-initial"
                            name="initial"
                            value={currentScenario.initial}
                            onChange={(e) => updateField('initial', e.target.value)}
                            placeholder="0.00"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="perf-final">{t('performance.final_value')}</label>
                        <CurrencyInput
                            id="perf-final"
                            name="final"
                            value={currentScenario.final}
                            onChange={(e) => updateField('final', e.target.value)}
                            placeholder="0.00"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="perf-startDate">{t('performance.start_date')}</label>
                        <input
                            id="perf-startDate"
                            name="startDate"
                            type="date"
                            value={currentScenario.startDate}
                            onChange={(e) => updateField('startDate', e.target.value)}
                            // AJOUT ICI : Sélection automatique 
                            onFocus={(e) => e.target.select()}
                            style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="perf-endDate">{t('performance.end_date')}</label>
                        <input
                            id="perf-endDate"
                            name="endDate"
                            type="date"
                            value={currentScenario.endDate}
                            onChange={(e) => updateField('endDate', e.target.value)}
                            // AJOUT ICI : Sélection automatique
                            onFocus={(e) => e.target.select()}
                            style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }}
                        />
                    </div>
                </div>
            </fieldset>

            {results && (
                <div className="results-section" style={{ marginTop: '30px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', textAlign: 'center', marginBottom: '20px', fontStyle: 'italic' }}>
                        {t('performance.gips_warning')}
                    </div>

                    <div className="projection-results-wrapper" style={{ display: 'flex', gap: '30px', alignItems: 'stretch' }}>
                        <div style={{ flex: 1, background: 'var(--card-background)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ marginTop: 0, marginBottom: '25px', color: 'var(--secondary-color)' }}>{t('performance.key_results')}</h3>

                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                                <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '12px' }}>

                                    <ResultRow
                                        label={t('dashboard.gain_loss')}
                                        value={formatCurrency(results.gainLoss)}
                                        color={results.gainLoss >= 0 ? STANDARD.gain : STANDARD.loss}
                                        widthPercent={100}
                                    />

                                    <ResultRow
                                        label={t('performance.total_return')}
                                        value={`${results.totalReturn.toFixed(2)} %`}
                                        color={results.totalReturn >= 0 ? STANDARD.final : STANDARD.loss}
                                        widthPercent={Math.min(100, Math.abs(results.totalReturn))}
                                    />

                                    <ResultRow
                                        label={t('common.duration')}
                                        value={results.formattedDuration}
                                        color={STANDARD.initial}
                                        widthPercent={0}
                                    />

                                    <ResultRow
                                        label={t('performance.cagr')}
                                        value={results.cagrDisplay}
                                        subLabel={results.isSimpleReturn ? `(${t('performance.simple')})` : ""}
                                        color={!results.isSimpleReturn && results.cagrValue >= 0 ? STANDARD.final : STANDARD.text}
                                        widthPercent={!results.isSimpleReturn ? Math.min(100, Math.abs(results.cagrValue)) : 0}
                                    />
                                </div>

                                <div style={{ width: '240px', display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, margin: '0 auto' }}>
                                    <div style={{ width: '180px', height: '180px' }}>
                                        <Doughnut
                                            data={donutData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                plugins: { legend: { display: true, position: 'bottom' }, tooltip: { enabled: true } }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chart-container" style={{ marginTop: '20px', height: '400px', background: 'var(--card-background)', padding: '25px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--secondary-color)', textAlign: 'center' }}>{t('performance.evolution')}</h3>
                        <div style={{ height: '300px', width: '100%' }}>
                            <Bar
                                data={barData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { display: false },
                                        title: { display: false },
                                        tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${formatCurrency(c.raw)}` } }
                                    },
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            ticks: { callback: (v) => formatCurrency(v) }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Performance;