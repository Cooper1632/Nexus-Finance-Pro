import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { Switch } from '@headlessui/react';
import { useData } from '../context/DataContext';
import { useTranslation } from 'react-i18next';
import CurrencyInput from './CurrencyInput';
import ScenarioTabs from './ScenarioTabs';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { XMarkIcon, PlusIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import IntroPerformance from './IntroPerformance';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler);

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


    const [showBenchmark, setShowBenchmark] = useState(false);
    const [benchmarkData, setBenchmarkData] = useState(null);
    const [loadingBenchmark, setLoadingBenchmark] = useState(false);

    // --- CORRECTION MAJEURE DU CHARGEMENT S&P 500 (Reset Automatique) ---
    useEffect(() => {
        // 1. Si la switch est fermée, on nettoie tout.
        if (!showBenchmark) {
            setBenchmarkData(null);
            return;
        }

        // 2. RESET IMMÉDIAT : 
        // Dès que l'utilisateur change une date, on efface les données (null).
        // Cela force l'affichage à se remettre à zéro et évite de montrer des % erronés.
        setBenchmarkData(null);

        // Si dates invalides, on arrête là.
        if (!currentScenario.startDate || !currentScenario.endDate) return;

        // 3. TEMPORISATION (Debounce) :
        // On attend 500ms avant de charger. Si l'utilisateur change encore la date, ce timer est annulé.
        const timeoutId = setTimeout(async () => {
            setLoadingBenchmark(true);
            try {
                const response = await axios.get('/api/yahoo/history', {
                    params: {
                        symbol: '^GSPC', // S&P 500
                        from: currentScenario.startDate,
                        to: currentScenario.endDate
                    }
                });

                if (response.data && Array.isArray(response.data)) {
                    setBenchmarkData({
                        data: response.data,
                        startDate: currentScenario.startDate,
                        endDate: currentScenario.endDate
                    });
                }
            } catch (error) {
                console.error("Erreur chargement S&P 500:", error);
            } finally {
                setLoadingBenchmark(false);
            }
        }, 500); // 500ms de délai

        // Nettoyage si changement rapide
        return () => clearTimeout(timeoutId);

    }, [showBenchmark, currentScenario.startDate, currentScenario.endDate]);


    // --- LOGIQUE DE SIMULATION OU RÉELLE S&P 500 ---
    const comparisonData = useMemo(() => {
        if (!results || !results.initialVal || !results.finalVal) return null;

        const { initialVal, finalVal } = results;
        const start = parseLocalDate(currentScenario.startDate);
        const end = parseLocalDate(currentScenario.endDate);

        if (!start || !end || end <= start) return null;

        const oneDay = 24 * 60 * 60 * 1000;
        const totalDays = Math.round(Math.abs((end - start) / oneDay));

        // Générer des points (max 50 pour la performance)
        const steps = Math.min(totalDays, 50);
        const stepSize = totalDays / steps;

        const labels = [];
        const userData = [];
        const sp500Data = [];

        // MODE RÉEL : Si on a les données historiques
        const isRealMode = (showBenchmark && benchmarkData && benchmarkData.data && benchmarkData.data.length > 0);

        if (isRealMode) {
            const history = benchmarkData.data;
            const startSP = history[0].close; // Index de départ pour rebaser

            // On utilise les dates du marché comme référence
            history.forEach(point => {
                // 1. Date (Label)
                const dateObj = new Date(point.date); // "YYYY-MM-DD" parsable directement
                // Ajuster le fuseau horaire pour éviter le décalage (astuce locale)
                const userTimezoneOffset = dateObj.getTimezoneOffset() * 60000;
                const adjustedDate = new Date(dateObj.getTime() + userTimezoneOffset);

                labels.push(adjustedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }));

                // 2. S&P 500 Rebasé (Si j'avais investi montant Initial dans le S&P)
                // Formule: (ValeurActuelle / ValeurDepart) * MonInvestissementInitial
                const spRebased = (point.close / startSP) * initialVal;
                sp500Data.push(spRebased);

                // 3. Mon Portefeuille (Interpolé sur cette date précise)
                // Calcul du progrès temporel exact (0 à 1)
                const currentDays = (dateObj - start) / oneDay;
                const progress = Math.max(0, Math.min(1, currentDays / totalDays)); // Clamp 0-1

                const userVal = initialVal + ((finalVal - initialVal) * progress);
                userData.push(userVal);
            });
        }
        // MODE SIMULATION (Fallback ou Défaut)
        else {
            // Taux annuel S&P 500 (~10.5%) -> Taux journalier (Fallback)
            const SP500_CAGR = 0.105;
            const dailyRate = Math.pow(1 + SP500_CAGR, 1 / 365.25) - 1;

            // Croissance Utilisateur (Linéaire pour la démo)
            const userTotalGrowth = finalVal - initialVal;

            for (let i = 0; i <= steps; i++) {
                const currentDayIndex = i * stepSize;
                const currentDate = new Date(start.getTime() + (currentDayIndex * oneDay));

                labels.push(currentDate.toLocaleDateString(undefined, { year: 'numeric', month: 'short' }));

                const progress = currentDayIndex / totalDays;
                const userVal = initialVal + (userTotalGrowth * progress);
                userData.push(userVal);

                const spVal = initialVal * Math.pow(1 + dailyRate, currentDayIndex);
                sp500Data.push(spVal);
            }
        }

        const createGradient = (ctx, colorStart, colorEnd) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, colorStart);
            gradient.addColorStop(1, colorEnd);
            return gradient;
        };

        return {
            labels,
            datasets: [
                {
                    label: t('performance.my_portfolio') || "Mon Portefeuille",
                    data: userData,
                    borderColor: '#2ECC71', // GREEN (was BLUE)
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const area = context.chart.chartArea;
                        if (!area) return 'rgba(46, 204, 113, 0.1)';
                        // Gradient vertical du bas vers le haut
                        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
                        gradient.addColorStop(0, 'rgba(46, 204, 113, 0.0)'); // Transparent en bas
                        gradient.addColorStop(1, 'rgba(46, 204, 113, 0.5)'); // Plus visible en haut
                        return gradient;
                    },
                    tension: 0.4,
                    fill: true,
                    pointRadius: 1,             // Smaller points
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#2ECC71',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    borderWidth: 3
                },
                {
                    // UPDATED LABEL: Uses isRealMode for consistency
                    label: isRealMode ? (t('performance.legend_sp500_real') || "S&P 500 (Total Return - Historique Réel)") : (t('performance.legend_sp500_simulated') || "S&P 500 (Total Return - Simulé 10.5%)"),
                    data: sp500Data,
                    borderColor: '#95A5A6',
                    backgroundColor: 'rgba(149, 165, 166, 0.05)',
                    borderDash: [5, 5],
                    tension: 0.4,
                    fill: false,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    borderWidth: 2
                }
            ]
        };

    }, [results, benchmarkData, showBenchmark, currentScenario, t]);



    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const hasSeenIntro = localStorage.getItem('nexus_intro_performance_seen');
        if (!hasSeenIntro) {
            setShowIntro(true);
        }
    }, []);

    // --- CALCULS POUR L'AFFICHAGE DU BADGE (Start/End Values & CAGR) ---
    let spBadgeContent = null;
    let spBadgeColor = '#95A5A6';
    let spBadgeBg = 'rgba(149, 165, 166, 0.1)';
    let spBadgeBorder = '#95A5A6';

    if (!loadingBenchmark && showBenchmark && benchmarkData && benchmarkData.data && benchmarkData.data.length > 0) {
        const startPrice = benchmarkData.data[0].close;
        const endPrice = benchmarkData.data[benchmarkData.data.length - 1].close;

        // 1. Total Return
        const percentChange = ((endPrice - startPrice) / startPrice) * 100;

        // 2. CAGR Calculation
        const startDateObj = new Date(currentScenario.startDate);
        const endDateObj = new Date(currentScenario.endDate);
        const daysDiff = (endDateObj - startDateObj) / (1000 * 60 * 60 * 24);
        const years = daysDiff / 365.25;

        let cagrVal = 0;
        if (years > 0 && startPrice > 0) {
            cagrVal = (Math.pow(endPrice / startPrice, 1 / years) - 1) * 100;
        }

        const isPositive = percentChange >= 0;

        spBadgeColor = isPositive ? '#27ae60' : '#c0392b';
        spBadgeBg = isPositive ? 'rgba(39, 174, 96, 0.1)' : 'rgba(192, 57, 43, 0.1)';
        spBadgeBorder = isPositive ? '#27ae60' : '#c0392b';

        // Construction du texte
        spBadgeContent = (
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>S&P 500: {formatCurrency(startPrice)} → {formatCurrency(endPrice)}</span>
                <span style={{ fontWeight: 'bold' }}>Total: {percentChange.toFixed(2)}%</span>
                <span style={{ fontSize: '0.9em', opacity: 0.9 }}>|</span>
                <span style={{ fontWeight: 'bold' }}>CAGR: {cagrVal.toFixed(2)}%</span>
            </span>
        );
    }

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="module-header-with-reset" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2 style={{ margin: 0 }}>{t('performance.title')}</h2>
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

            <IntroPerformance isOpen={showIntro} onClose={() => setShowIntro(false)} />

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

                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px', gap: '15px' }}>
                        {loadingBenchmark && <span style={{ fontSize: '0.9rem', color: '#7F8C8D', fontStyle: 'italic' }}>{t('common.loading')}</span>}

                        {!loadingBenchmark && spBadgeContent && (
                            <div style={{
                                display: 'inline-block',
                                padding: '5px 12px',
                                borderRadius: '15px',
                                fontSize: '0.85rem',
                                color: spBadgeColor,
                                backgroundColor: spBadgeBg,
                                border: `1px solid ${spBadgeBorder}`,
                                fontWeight: '500'
                            }}>
                                {spBadgeContent}
                            </div>
                        )}

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '10px' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-color)' }}>{t('performance.compare_sp500')}</span>
                            <Switch
                                checked={showBenchmark}
                                onChange={setShowBenchmark}
                                className={`${showBenchmark ? 'bg-emerald-500 border-emerald-500' : 'bg-gray-400 border-gray-400'} border relative inline-flex h-6 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`}
                                style={{ backgroundColor: showBenchmark ? '#10B981' : '#9CA3AF', minWidth: '36px', height: '24px', position: 'relative', display: 'inline-flex', alignItems: 'center', borderRadius: '9999px', border: showBenchmark ? '1px solid #10B981' : '1px solid #9CA3AF' }}
                            >
                                <span
                                    className={`${showBenchmark ? 'translate-x-5' : 'translate-x-0.5'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                    style={{ width: '16px', height: '16px', backgroundColor: '#fff', borderRadius: '50%', transform: showBenchmark ? 'translateX(18px)' : 'translateX(2px)', transition: 'transform 0.2s', display: 'inline-block' }}
                                />
                            </Switch>
                        </div>
                    </div>

                    <div className="chart-container" style={{
                        marginTop: '0px',
                        height: '400px',
                        // DARK THEME applied here to match "Investissement > Vue d'ensemble"
                        backgroundColor: '#13131F',
                        padding: '25px',
                        borderRadius: '12px',
                        border: '1px solid #2A2A35',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ margin: 0, color: 'var(--secondary-color)' }}>{t('performance.evolution') || "Évolution de l'investissement"}</h3>
                        </div>

                        {!loadingBenchmark && showBenchmark && !benchmarkData && (
                            <div style={{ fontSize: '0.8rem', color: '#E67E22', marginBottom: '10px', textAlign: 'right', fontStyle: 'italic' }}>
                                {t('performance.benchmark_disclaimer')}
                            </div>
                        )}
                        {!loadingBenchmark && showBenchmark && benchmarkData && (
                            <div style={{ fontSize: '0.8rem', color: '#27ae60', marginBottom: '10px', textAlign: 'right', fontStyle: 'italic' }}>
                                {t('performance.real_data_disclaimer')}
                            </div>
                        )}

                        <div style={{ height: '320px', position: 'relative' }}>
                            {comparisonData ? (
                                <Line
                                    data={comparisonData}
                                    options={{
                                        layout: {
                                            padding: {
                                                bottom: 40,
                                                left: 10,
                                                right: 15
                                            }
                                        },
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        interaction: {
                                            mode: 'nearest',
                                            axis: 'x',
                                            intersect: false
                                        },
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                                align: 'end',
                                                labels: {
                                                    usePointStyle: true,
                                                    boxWidth: 8,
                                                    color: '#FFFFFF' // WHITE Text for Dark Mode
                                                }
                                            },
                                            title: { display: false },
                                            tooltip: {
                                                mode: 'index',
                                                intersect: false,
                                                backgroundColor: 'rgba(20, 20, 30, 0.5)', // Dark tooltip
                                                titleColor: '#FFFFFF',
                                                bodyColor: '#FFFFFF',
                                                borderColor: 'var(--border-color)',
                                                borderWidth: 1,
                                                padding: 10,
                                                callbacks: {
                                                    label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`
                                                }
                                            }
                                        },
                                        scales: {
                                            x: {
                                                grid: { display: false, drawBorder: false },
                                                ticks: {
                                                    maxTicksLimit: 8,
                                                    color: '#FFFFFF' // WHITE Text
                                                }
                                            },
                                            y: {
                                                grid: {
                                                    color: 'rgba(255, 255, 255, 0.1)', // Light grid
                                                    borderDash: [5, 5]
                                                },
                                                grace: '5%', // Add padding at bottom/top
                                                ticks: {
                                                    callback: (v) => formatCurrency(v, 0),
                                                    color: '#FFFFFF' // WHITE Text
                                                },
                                                border: { display: false }
                                            }
                                        }
                                    }}
                                />
                            ) : (
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)' }}>
                                    {t('performance.warning_min_duration')}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Performance;