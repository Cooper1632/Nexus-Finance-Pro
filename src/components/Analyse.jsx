import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../context/DataContext';
import CurrencyInput from './CurrencyInput';
import { useTranslation } from 'react-i18next'; // IMPORT
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import {
    TrashIcon,
    PlusIcon,
    QuestionMarkCircleIcon,
    TrophyIcon,
    ArchiveBoxArrowDownIcon,
    BookmarkSquareIcon,
    EyeIcon,
    LightBulbIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    MinusIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const parseLocaleNumber = (stringNumber) => {
    if (stringNumber === undefined || stringNumber === null || stringNumber === '') return 0;
    if (typeof stringNumber === 'number') return stringNumber;
    let clean = stringNumber.toString().replace(/[^0-9.,-]/g, '');
    clean = clean.replace(',', '.');
    const float = parseFloat(clean);
    return isNaN(float) ? 0 : float;
};

const STOCK_COLORS = ['#3498DB', '#E74C3C', '#9B59B6', '#F1C40F', '#1ABC9C', '#2C3E50', '#D35400', '#27AE60', '#8E44AD', '#2980B9'];

const getScoreColor = (score) => {
    if (score >= 80) return '#27ae60';
    if (score >= 60) return '#f1c40f';
    if (score >= 40) return '#e67e22';
    return '#c0392b';
};

const InfoIcon = ({ content }) => {
    const [isVisible, setIsVisible] = useState(false);

    const tooltipStyle = {
        position: 'absolute', bottom: '140%', left: '50%', transform: 'translateX(-50%)',
        backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '15px', borderRadius: '8px',
        fontSize: '0.85rem', fontWeight: 'normal', width: 'max-content', maxWidth: '340px',
        whiteSpace: 'normal', zIndex: 1000, textAlign: 'left', boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        lineHeight: '1.6', border: '1px solid rgba(255,255,255,0.1)'
    };

    const arrowStyle = {
        position: 'absolute', top: '100%', left: '50%', marginLeft: '-6px',
        borderWidth: '6px', borderStyle: 'solid', borderColor: '#2C3E50 transparent transparent transparent'
    };

    return (
        <span
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '6px', cursor: 'help' }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onClick={() => setIsVisible(!isVisible)}
        >
            <QuestionMarkCircleIcon style={{ width: '16px', color: 'var(--info-color)', opacity: 0.8 }} />
            {isVisible && (
                <div style={tooltipStyle}>
                    {content}
                    <div style={arrowStyle}></div>
                </div>
            )}
        </span>
    );
};

const ComparisonChart = ({ cards, metric, t }) => {
    const validCards = cards.filter(c => c.symbol);
    if (validCards.length === 0) return null;
    const labels = validCards.map(c => c.symbol);
    const dataValues = validCards.map(c => metric === 'finalScore' ? c.finalScore || 0 : parseLocaleNumber(c[metric]) || 0);
    const backgroundColors = validCards.map((_, i) => STOCK_COLORS[i % STOCK_COLORS.length]);

    const getLabel = () => {
        switch (metric) {
            case 'finalScore': return t('analysis.score');
            case 'pe': return t('analysis.pe');
            case 'growth': return t('analysis.growth');
            case 'roe': return t('analysis.roe');
            case 'dividende': return t('analysis.div_yield');
            default: return metric.toUpperCase();
        }
    };

    const data = {
        labels: labels,
        datasets: [{
            label: getLabel(),
            data: dataValues,
            backgroundColor: backgroundColors,
            borderWidth: 0,
            borderRadius: 4
        }]
    };

    return (
        <div className="chart-container" style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px', backgroundColor: 'var(--card-background)', borderRadius: '12px', border: '1px solid var(--border-color)', padding: '15px' }}>
            <div style={{ width: '100%', maxWidth: '800px', height: '100%' }}>
                <Bar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }} />
            </div>
        </div>
    );
};

const StockRadar = ({ scores, color, t }) => {
    const data = {
        labels: [t('analysis.price'), t('analysis.growth'), t('analysis.margin'), t('analysis.debt'), t('analysis.roe')],
        datasets: [{
            label: t('analysis.score'),
            data: [scores.priceScore, scores.growthScore, scores.marginScore, scores.debtScore, scores.roeScore],
            backgroundColor: `${color}33`, borderColor: color, borderWidth: 2, pointBackgroundColor: color, fill: true,
        }]
    };
    return (
        <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center' }}>
            <Radar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { r: { suggestedMin: 0, suggestedMax: 20, ticks: { display: false }, pointLabels: { font: { size: 10 } } } } }} />
        </div>
    );
};

function Analyse() {
    // CORRECTION DE L'ERREUR : setAppState n'est pas exposé par useData, seul saveGlobalState l'est.
    const { appState, saveGlobalState } = useData();
    const { t } = useTranslation();
    const [cards, setCards] = useState(appState.analyse?.cards || []);
    const [savedAnalyses, setSavedAnalyses] = useState(appState.analyse?.savedAnalyses || []);
    const [compareMetric, setCompareMetric] = useState('finalScore');
    const [selectedHistory, setSelectedHistory] = useState("");

    const initialized = useRef(false);

    useEffect(() => {
        const ids = new Set();
        let hasDuplicates = false;

        const sanitizedCards = cards.map(c => {
            if (ids.has(c.id)) {
                hasDuplicates = true;
                return { ...c, id: `card-${Date.now()}-${Math.floor(Math.random() * 100000)}` };
            }
            ids.add(c.id);
            return c;
        });

        if (hasDuplicates) {
            setCards(sanitizedCards);
            return;
        }

        if (!initialized.current && cards.length === 0) {
            initialized.current = true;
            addCard();
        }
    }, []);

    useEffect(() => {
        const newAnalyseState = { cards, savedAnalyses };
        // Correction de l'erreur : l'appel à setAppState est retiré.
        // saveGlobalState est la seule fonction nécessaire pour persister le nouvel état global.
        if (JSON.stringify(newAnalyseState) !== JSON.stringify(appState.analyse)) {
            saveGlobalState({ ...appState, analyse: newAnalyseState });
        }
    }, [cards, savedAnalyses, appState, saveGlobalState]);

    const addCard = () => {
        const uniqueId = `card-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        const newCard = { id: uniqueId, symbol: '', currentPrice: '', bpa: '', pe: '', growth: '', margin: '', debt: '', roe: '', liquidite: '', dividendeAnnuel: '', dividende: '', excluded: {} };
        setCards(prev => [...prev, newCard]);
    };

    const removeCard = (id) => {
        if (window.confirm(t('analysis.delete_confirm'))) { // Utilisation de la clé analysis.delete_confirm
            setCards(cards.filter(c => c.id !== id));
        }
    };

    const generateAIPrompt = (symbol) => {
        if (!symbol) return alert(t('watchlist.alert_req'));
        const prompt = t('analysis.ai_prompt_template', { symbol: symbol.toUpperCase() });
        navigator.clipboard.writeText(prompt).then(() => alert(t('analysis.prompt_copied')));
    };

    const updateCard = (id, field, value) => {
        setCards(currentCards => currentCards.map(c => {
            if (c.id === id) {
                const updated = { ...c, [field]: value };

                const valPrice = parseLocaleNumber(updated.currentPrice);
                const valBPA = parseLocaleNumber(updated.bpa);
                const valDiv = parseLocaleNumber(updated.dividendeAnnuel);

                if (field === 'currentPrice' || field === 'bpa') {
                    if (valPrice > 0 && valBPA > 0) {
                        updated.pe = (valPrice / valBPA).toFixed(2);
                    } else if (field === 'bpa' && (value === '' || valBPA === 0)) {
                        updated.pe = '';
                    } else if (valBPA === 0) {
                        updated.pe = '';
                    }
                }

                if (field === 'currentPrice' || field === 'dividendeAnnuel') {
                    if (valPrice > 0 && valDiv >= 0) {
                        updated.dividende = ((valDiv / valPrice) * 100).toFixed(2);
                    } else if (valDiv === 0 || value === '') {
                        updated.dividende = '';
                    }
                }

                return updated;
            }
            return c;
        }));
    };

    const toggleExclusion = (id, metric) => {
        setCards(cards.map(c => c.id === id ? { ...c, excluded: { ...c.excluded, [metric]: !c.excluded?.[metric] } } : c));
    };

    const saveToHistory = (card) => {
        if (!card.symbol) return alert(t('watchlist.alert_req'));
        const { finalScore } = calculateCardScore(card);
        const newEntry = { ...card, id: `saved-${Date.now()}`, savedAt: new Date().toLocaleDateString('fr-CA'), displayScore: finalScore.toFixed(0) };

        const exists = savedAnalyses.find(a => a.symbol === card.symbol);
        let newHistory;
        if (exists) {
            newHistory = savedAnalyses.map(a => a.symbol === card.symbol ? newEntry : a);
        } else {
            newHistory = [newEntry, ...savedAnalyses];
        }
        setSavedAnalyses(newHistory);
        alert(t('analysis.saved_msg', { symbol: card.symbol })); // Utilisation de saved_msg
    };

    const loadFromHistory = (symbol) => {
        if (!symbol) return;
        const entry = savedAnalyses.find(a => a.symbol === symbol);
        if (entry) {
            const uniqueId = `card-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
            setCards(prev => [...prev, { ...entry, id: uniqueId }]);
        }
    };

    const deleteHistoryItem = () => {
        if (!selectedHistory) return;
        if (window.confirm(t('analysis.delete_confirm'))) { // Utilisation de la clé analysis.delete_confirm
            setSavedAnalyses(prev => prev.filter(a => a.symbol !== selectedHistory));
            setSelectedHistory("");
        }
    };

    const addToWatchlist = (card) => {
        if (!card.symbol) return alert(t('watchlist.alert_req'));
        const targetInput = window.prompt(t('watchlist.watchlist_prompt', { symbol: card.symbol }), "");
        if (targetInput === null) return;

        const { finalScore } = calculateCardScore(card);
        const newItem = {
            id: Date.now().toString(), symbol: card.symbol.toUpperCase(),
            price: parseLocaleNumber(card.currentPrice) || 0, target: parseLocaleNumber(targetInput) || null,
            date: new Date().toISOString().split('T')[0], createdAt: new Date().toISOString(),
            note: `${t('analysis.score')}: ${finalScore.toFixed(0)}` // Utilisation du traducteur pour 'Score'
        };
        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.investment.watchlist) newState.investment.watchlist = [];
        newState.investment.watchlist.push(newItem);
        saveGlobalState(newState);
        alert(t('analysis.watchlist_success'));
    };

    const calculateCardScore = (card) => {
        let totalScore = 0;
        let maxPossible = 0;
        const scores = { priceScore: 0, growthScore: 0, marginScore: 0, debtScore: 0, roeScore: 0 };
        const details = [];

        const evaluate = (metric, label, value, goodThreshold, badThreshold, isLowerBetter = false, maxPts = 15) => {
            if (card.excluded?.[metric]) return;
            maxPossible += maxPts;
            const val = parseLocaleNumber(value);

            let pts = 0;
            let status = 'neutral';

            if (!isNaN(val) && value !== '') {
                if (isLowerBetter) {
                    if (val <= goodThreshold) { pts = maxPts; status = 'good'; }
                    else if (val <= badThreshold) { pts = maxPts / 2; status = 'medium'; }
                    else status = 'bad';
                } else {
                    if (val >= goodThreshold) { pts = maxPts; status = 'good'; }
                    else if (val >= badThreshold) { pts = maxPts / 2; status = 'medium'; }
                    else status = 'bad';
                }
            }

            totalScore += pts;
            details.push({ label, score: pts, max: maxPts, status });

            const radarVal = (pts / maxPts) * 20;
            if (metric === 'pe') scores.priceScore = radarVal;
            else if (metric === 'growth') scores.growthScore = radarVal;
            else if (metric === 'margin') scores.marginScore = radarVal;
            else if (metric === 'debt') scores.debtScore = radarVal;
            else if (metric === 'roe') scores.roeScore = radarVal;
        };

        evaluate('pe', t('analysis.valuation'), card.pe, 15, 25, true, 15);
        evaluate('growth', t('analysis.growth'), card.growth, 15, 5, false, 15);
        evaluate('margin', t('analysis.margin'), card.margin, 20, 10, false, 15);
        evaluate('debt', t('analysis.debt'), card.debt, 0.5, 1.0, true, 15);
        evaluate('roe', t('analysis.roe'), card.roe, 20, 12, false, 15);
        evaluate('liquidite', t('analysis.liquidity'), card.liquidite, 1.5, 1.0, false, 10);
        evaluate('dividende', t('analysis.div_yield'), card.dividende, 2.0, 1.0, false, 15);

        const finalScore = maxPossible > 0 ? (totalScore / maxPossible) * 100 : 0;

        const peVal = parseLocaleNumber(card.pe);
        const growthVal = parseLocaleNumber(card.growth);
        const peg = (peVal > 0 && growthVal > 0) ? (peVal / growthVal).toFixed(2) : '-';

        return { finalScore, scores, details, peg };
    };

    const cardsWithScores = cards.map(c => ({ ...c, finalScore: calculateCardScore(c).finalScore }));

    const tooltipsContent = {
        price: <div><strong>{t('analysis_tooltips.price_title')}</strong><p>{t('analysis_tooltips.price_desc')}</p><p style={{ color: 'var(--warning-color)' }}>{t('analysis_tooltips.price_warn')}</p></div>,
        bpa: <div><strong>{t('analysis_tooltips.bpa_title')}</strong><p>{t('analysis_tooltips.bpa_desc')}</p><p style={{ color: 'var(--danger-color)' }}>{t('analysis_tooltips.bpa_note')}</p></div>,
        pe: <div><strong>{t('analysis_tooltips.pe_title')}</strong><p>{t('analysis_tooltips.pe_desc')}</p><p>✅ {t('analysis_tooltips.pe_good')}</p><p>❌ {t('analysis_tooltips.pe_bad')}</p></div>,
        growth: <div><strong>{t('analysis_tooltips.growth_title')}</strong><p>{t('analysis_tooltips.growth_desc')}</p><p>✅ {t('analysis_tooltips.growth_good')}</p><p>❌ {t('analysis_tooltips.growth_bad')}</p></div>,
        margin: <div><strong>{t('analysis_tooltips.margin_title')}</strong><p>{t('analysis_tooltips.margin_desc')}</p><p>✅ {t('analysis_tooltips.margin_good')}</p><p>❌ {t('analysis_tooltips.margin_bad')}</p></div>,
        debt: <div><strong>{t('analysis_tooltips.debt_title')}</strong><p>{t('analysis_tooltips.debt_desc')}</p><p>✅ {t('analysis_tooltips.debt_good')}</p><p>❌ {t('analysis_tooltips.debt_bad')}</p></div>,
        roe: <div><strong>{t('analysis_tooltips.roe_title')}</strong><p>{t('analysis_tooltips.roe_desc')}</p><p>✅ {t('analysis_tooltips.roe_good')}</p><p>❌ {t('analysis_tooltips.roe_bad')}</p></div>,
        liq: <div><strong>{t('analysis_tooltips.liq_title')}</strong><p>{t('analysis_tooltips.liq_desc')}</p><p>✅ {t('analysis_tooltips.liq_good')}</p><p>❌ {t('analysis_tooltips.liq_bad')}</p></div>,
        divA: <div><strong>{t('analysis_tooltips.diva_title')}</strong><p>{t('analysis_tooltips.diva_desc')}</p><p style={{ color: 'var(--warning-color)' }}>{t('analysis_tooltips.diva_note')}</p></div>,
        divP: <div><strong>{t('analysis_tooltips.divp_title')}</strong><p>{t('analysis_tooltips.divp_desc')}</p><p>✅ {t('analysis_tooltips.divp_good')}</p><p>❌ {t('analysis_tooltips.divp_bad')}</p></div>,
        peg: <div><strong>{t('analysis_tooltips.peg_title')}</strong><p>{t('analysis_tooltips.peg_desc')}</p><p>✅ {t('analysis_tooltips.peg_good')}</p><p>⚠️ {t('analysis_tooltips.peg_fair')}</p><p>❌ {t('analysis_tooltips.peg_bad')}</p></div>
    };

    return (
        <div className="printable-content fade-in" style={{ display: 'block' }}>
            <div className="module-header-with-reset">
                <h2>{t('analysis.title')}</h2>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--card-background)', padding: '5px 10px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                        <ArchiveBoxArrowDownIcon style={{ width: '20px', color: 'var(--secondary-color)', marginRight: '8px' }} />
                        <label htmlFor="history-select" style={{ display: 'none' }}>{t('analysis.load_label')}</label>
                        <select
                            id="history-select"
                            name="history-select"
                            value={selectedHistory}
                            onChange={(e) => { setSelectedHistory(e.target.value); loadFromHistory(e.target.value); }}
                            style={{ border: 'none', background: 'transparent', color: 'var(--text-color)', cursor: 'pointer', outline: 'none', maxWidth: '200px' }}
                        >
                            <option value="">{t('analysis.load_placeholder')}</option>
                            {savedAnalyses.map((a, i) => <option key={i} value={a.symbol}>{a.symbol} ({a.displayScore})</option>)}
                        </select>
                        <button
                            onClick={deleteHistoryItem}
                            title={t('common.delete')}
                            style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--danger-color)', marginLeft: '8px', padding: '2px' }}
                        >
                            <TrashIcon style={{ width: '16px' }} />
                        </button>
                    </div>

                    <button onClick={addCard} className="btn-success" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><PlusIcon style={{ width: '20px' }} /> {t('analysis.add_card')}</button>
                </div>
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                <label htmlFor="compare-metric-select">{t('analysis.compare')} :</label>
                <select id="compare-metric-select" value={compareMetric} onChange={(e) => setCompareMetric(e.target.value)} style={{ padding: '8px', borderRadius: '6px' }}>
                    <option value="finalScore">⭐ {t('analysis.score')}</option>
                    <option value="pe">{t('analysis.pe')}</option>
                    <option value="growth">{t('analysis.growth')}</option>
                    <option value="roe">{t('analysis.roe')}</option>
                    <option value="dividende">{t('analysis.div_yield')}</option>
                </select>
            </div>

            {cards.length > 0 && <ComparisonChart cards={cardsWithScores} metric={compareMetric} t={t} />}

            <div id="analyse-cards-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
                {cards.map((card, index) => {
                    const { finalScore, scores, details, peg } = calculateCardScore(card);
                    const scoreColor = getScoreColor(finalScore);
                    const cardThemeColor = STOCK_COLORS[index % STOCK_COLORS.length];
                    const isSaved = card.symbol && savedAnalyses.some(a => a.symbol.toUpperCase() === card.symbol.toUpperCase());

                    const isPECalculated = parseLocaleNumber(card.currentPrice) > 0 && parseLocaleNumber(card.bpa) > 0;
                    const isYieldCalculated = parseLocaleNumber(card.currentPrice) > 0 && parseLocaleNumber(card.dividendeAnnuel) >= 0;

                    return (
                        <div key={card.id} className="analyse-stock-card" style={{ backgroundColor: 'var(--card-background)', borderTop: `5px solid ${cardThemeColor}`, borderRadius: '12px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <input
                                            id={`symbol-${card.id}`}
                                            name={`symbol-${card.id}`}
                                            type="text"
                                            value={card.symbol}
                                            onChange={(e) => updateCard(card.id, 'symbol', e.target.value)}
                                            placeholder={t('analysis.symbol_placeholder')}
                                            style={{ fontWeight: '800', fontSize: '1.1rem', width: '100px', textTransform: 'uppercase', border: `2px solid ${cardThemeColor}`, color: cardThemeColor, borderRadius: '6px', padding: '5px', textAlign: 'center' }}
                                        />
                                        <button onClick={() => generateAIPrompt(card.symbol)} title={t('analysis.prompt_copy')} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: cardThemeColor }}><LightBulbIcon style={{ width: '28px' }} /></button>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--success-color)', fontSize: '0.75rem', fontWeight: 'bold', marginLeft: '5px', visibility: isSaved ? 'visible' : 'hidden', minHeight: '20px' }}>
                                        <CheckBadgeIcon style={{ width: '16px' }} />
                                        <span>{t('analysis.already_saved')}</span>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        {t('analysis.peg')} <InfoIcon content={tooltipsContent.peg} />
                                    </span>
                                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: (peg !== '-' && parseFloat(peg) < 1) ? 'var(--success-color)' : 'var(--text-color)' }}>{peg}</span>
                                </div>

                                <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--secondary-color)', textTransform: 'uppercase' }}>{t('analysis.score')}</div>
                                        <div style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1', color: scoreColor }}>{finalScore.toFixed(0)}</div>
                                    </div>
                                    <TrophyIcon style={{ width: '40px', color: scoreColor }} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', rowGap: '12px', marginBottom: '20px' }}>
                                <InputRow idPrefix={`price-${card.id}`} label={t('analysis.price')} content={tooltipsContent.price} value={card.currentPrice} onChange={(v) => updateCard(card.id, 'currentPrice', v)} themeColor={cardThemeColor} t={t} />
                                <InputRow idPrefix={`bpa-${card.id}`} label={t('analysis.bpa')} content={tooltipsContent.bpa} value={card.bpa} onChange={(v) => updateCard(card.id, 'bpa', v)} themeColor={cardThemeColor} t={t} />

                                <InputRow
                                    idPrefix={`pe-${card.id}`}
                                    label={t('analysis.pe')}
                                    content={tooltipsContent.pe}
                                    value={card.pe}
                                    onChange={(v) => updateCard(card.id, 'pe', v)}
                                    themeColor={cardThemeColor}
                                    isExcluded={card.excluded?.pe}
                                    onToggleExclude={() => toggleExclusion(card.id, 'pe')}
                                    isAutoCalculated={isPECalculated}
                                    t={t}
                                />

                                <InputRow idPrefix={`growth-${card.id}`} label={t('analysis.growth')} content={tooltipsContent.growth} value={card.growth} onChange={(v) => updateCard(card.id, 'growth', v)} themeColor={cardThemeColor} isExcluded={card.excluded?.growth} onToggleExclude={() => toggleExclusion(card.id, 'growth')} t={t} />

                                <InputRow idPrefix={`margin-${card.id}`} label={t('analysis.margin')} content={tooltipsContent.margin} value={card.margin} onChange={(v) => updateCard(card.id, 'margin', v)} themeColor={cardThemeColor} isExcluded={card.excluded?.margin} onToggleExclude={() => toggleExclusion(card.id, 'margin')} t={t} />
                                <InputRow idPrefix={`debt-${card.id}`} label={t('analysis.debt')} content={tooltipsContent.debt} value={card.debt} onChange={(v) => updateCard(card.id, 'debt', v)} themeColor={cardThemeColor} isExcluded={card.excluded?.debt} onToggleExclude={() => toggleExclusion(card.id, 'debt')} t={t} />

                                <InputRow idPrefix={`roe-${card.id}`} label={t('analysis.roe')} content={tooltipsContent.roe} value={card.roe} onChange={(v) => updateCard(card.id, 'roe', v)} themeColor={cardThemeColor} isExcluded={card.excluded?.roe} onToggleExclude={() => toggleExclusion(card.id, 'roe')} t={t} />
                                <InputRow idPrefix={`liq-${card.id}`} label={t('analysis.liquidity')} content={tooltipsContent.liq} value={card.liquidite} onChange={(v) => updateCard(card.id, 'liquidite', v)} themeColor={cardThemeColor} isExcluded={card.excluded?.liquidite} onToggleExclude={() => toggleExclusion(card.id, 'liquidite')} t={t} />

                                <InputRow idPrefix={`divA-${card.id}`} label={t('analysis.div_annual')} content={tooltipsContent.divA} value={card.dividendeAnnuel} onChange={(v) => updateCard(card.id, 'dividendeAnnuel', v)} themeColor={cardThemeColor} isExcluded={card.excluded?.dividende} onToggleExclude={() => toggleExclusion(card.id, 'dividende')} t={t} />

                                <InputRow
                                    idPrefix={`divP-${card.id}`}
                                    label={t('analysis.div_yield')}
                                    content={tooltipsContent.divP}
                                    value={card.dividende}
                                    onChange={(v) => updateCard(card.id, 'dividende', v)}
                                    themeColor={cardThemeColor}
                                    isExcluded={card.excluded?.dividende}
                                    onToggleExclude={() => toggleExclusion(card.id, 'dividende')}
                                    isAutoCalculated={isYieldCalculated}
                                    t={t}
                                />
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '55% 40%',
                                gap: '5%',
                                alignItems: 'center',
                                borderTop: '1px solid var(--border-color)',
                                paddingTop: '20px',
                                paddingRight: '15px'
                            }}>
                                <div style={{ height: '220px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <StockRadar scores={scores} color={cardThemeColor} t={t} />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                                    {details.map((d, idx) => (
                                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-color)' }}>
                                                {d.status === 'good' ? <ArrowUpIcon style={{ width: '14px', color: 'var(--success-color)' }} /> : d.status === 'bad' ? <ArrowDownIcon style={{ width: '14px', color: 'var(--danger-color)' }} /> : <MinusIcon style={{ width: '14px', color: 'var(--secondary-color)' }} />}
                                                {d.label}
                                            </span>
                                            <strong style={{ color: d.status === 'good' ? 'var(--success-color)' : d.status === 'bad' ? 'var(--danger-color)' : 'var(--warning-color)' }}>{d.score}/{d.max}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '15px', borderTop: '1px dashed var(--border-color)' }}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button onClick={() => saveToHistory(card)} style={{ padding: '8px 15px', border: '1px solid var(--info-color)', background: 'rgba(52, 152, 219, 0.1)', color: 'var(--info-color)', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                        <BookmarkSquareIcon style={{ width: '18px' }} /> {t('analysis.save')}
                                    </button>
                                    <button onClick={() => addToWatchlist(card)} style={{ padding: '8px 15px', border: 'none', background: '#2C3E50', color: 'white', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                        <EyeIcon style={{ width: '18px' }} /> {t('analysis.monitor')}
                                    </button>
                                </div>
                                <button onClick={() => removeCard(card.id)} style={{ background: 'none', border: 'none', color: 'var(--danger-color)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                    <TrashIcon style={{ width: '18px' }} /> {t('common.delete')}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const InputRow = ({ idPrefix, label, content, value, onChange, themeColor, isExcluded, onToggleExclude, disabled, placeholder, isAutoCalculated, t }) => {
    const inputStyle = {
        width: '100%',
        maxWidth: '110px',
        border: '1px solid ' + themeColor,
        borderRadius: '4px',
        padding: '6px',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        color: isAutoCalculated ? 'var(--info-color)' : 'var(--text-color)',
        backgroundColor: (isAutoCalculated || disabled) ? '#f5f5f5' : 'white'
    };

    return (
        <div style={{ opacity: isExcluded ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: '8px', minHeight: '30px' }}>
            <div style={{ width: '110px', display: 'flex', alignItems: 'center', gap: '4px', overflow: 'visible', flexShrink: 0 }}>
                <label htmlFor={`curr-input-${idPrefix}`} style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-color)', margin: 0, whiteSpace: 'nowrap', cursor: 'pointer' }} title={label}>
                    {label}
                </label>
                {content && <InfoIcon content={content} />}
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <CurrencyInput
                    id={`curr-input-${idPrefix}`}
                    name={idPrefix}
                    value={value}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    disabled={isExcluded || disabled || isAutoCalculated}
                    placeholder={placeholder || "0"}
                    style={inputStyle}
                />
                {onToggleExclude && (
                    <input
                        type="checkbox"
                        id={`check-${idPrefix}`}
                        name={`check-${idPrefix}`}
                        checked={!isExcluded}
                        onChange={onToggleExclude}
                        // CORRECTION: Traduction de l'infobulle
                        title={t ? t('analysis.include_exclude') : "Inclure/Exclure"}
                        style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                    />
                )}
            </div>
        </div>
    );
};

export default Analyse;