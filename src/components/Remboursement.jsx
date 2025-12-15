import React, { useState, useEffect, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation } from 'react-i18next';
import CurrencyInput from './CurrencyInput';
import ScenarioTabs from './ScenarioTabs';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { HomeIcon, BanknotesIcon, CreditCardIcon, PlusCircleIcon, InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import IntroRemboursement from './IntroRemboursement';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

const TEXT_COLOR = { blue: '#3498DB', red: '#E74C3C', green: '#2ECC71', purple: '#9B59B6', warning: '#F39C12', dark: '#2C3E50' };
const GRAPH_COLOR = { blue: '#85C1E9', red: '#F1948A', green: '#82E0AA', purple: '#D2B4DE', blueBg: 'rgba(133, 193, 233, 0.2)' };
const TAB_COLORS = { hypotheque: '#52BE80', pret: '#3498DB', carte: '#E74C3C' };

const shadowPlugin = {
    id: 'shadowPlugin',
    beforeDatasetsDraw: (chart) => {
        const { ctx } = chart;
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
    },
    afterDatasetsDraw: (chart) => {
        chart.ctx.restore();
    }
};

const parseLocaleNumber = (s) => {
    if (!s) return 0;
    if (typeof s === 'number') return s;
    // Nettoyage robuste : enlève tout sauf chiffres, points, virgules et moins
    let c = s.toString().replace(/[^0-9.,-]/g, '').replace(',', '.');
    const f = parseFloat(c);
    return isNaN(f) ? 0 : f;
};

const roundMoney = (v) => Math.round(v * 100) / 100;

const formatDuration = (totalMonths, t) => {
    if (totalMonths >= 12) {
        const years = Math.floor(totalMonths / 12);
        const months = Math.round(totalMonths % 12);
        const yearText = `${years} ${t('common.years')}`;
        if (months > 0) {
            return `${yearText} ${t('common.total')?.toLowerCase() !== 'total' ? 'et' : '&'} ${months} ${t('common.months')}`;
        }
        return yearText;
    }
    return `${Math.round(totalMonths)} ${t('common.months')}`;
};

const InfoTooltip = ({ text }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            style={{ position: 'relative', display: 'inline-block', marginLeft: '5px', cursor: 'help', verticalAlign: 'middle' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={{
                width: '16px', height: '16px', borderRadius: '50%',
                border: '1px solid var(--info-color)', color: 'var(--info-color)',
                textAlign: 'center', lineHeight: '14px', fontSize: '0.7rem', fontWeight: 'bold'
            }}>?</div>
            <div style={{
                visibility: hover ? 'visible' : 'hidden', opacity: hover ? 1 : 0,
                width: '220px', backgroundColor: '#34495E', color: '#fff',
                textAlign: 'center', borderRadius: '6px', padding: '8px',
                position: 'absolute', zIndex: '100', bottom: '125%', left: '50%',
                transform: 'translateX(-50%)', transition: 'opacity 0.2s',
                fontSize: '0.75rem', lineHeight: '1.4', fontWeight: 'normal',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)', pointerEvents: 'none'
            }}>
                {text}
                <div style={{
                    position: 'absolute', top: '100%', left: '50%', marginLeft: '-5px',
                    borderWidth: '5px', borderStyle: 'solid',
                    borderColor: '#34495E transparent transparent transparent'
                }}></div>
            </div>
        </div>
    );
};

const AmortizationTable = ({ data, type, totalInterestInitial, formatCurrency, t }) => {
    if (!data || data.length <= 1) return null;
    return (
        <div className="table-container" style={{ maxHeight: '400px', marginTop: '20px', overflowX: 'auto' }}>
            <h3 style={{ marginTop: '0', fontSize: '1.2rem' }}>{t('common.amortization_table')}</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead style={{ position: 'sticky', top: 0, backgroundColor: 'var(--card-background)', zIndex: 10 }}>
                    <tr>
                        <th style={{ padding: '8px', textAlign: 'left' }}>#</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>{t('common.payment')}</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>{t('common.interest')}</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>{t('common.capital')}</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>{t('common.balance')}</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>{t('common.remaining_interest')}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(1).map((row, idx) => {
                        const remainingInterest = Math.max(0, totalInterestInitial - row.cumulativeInterest);
                        return (
                            <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '8px' }}>{row.period}</td>
                                <td style={{ padding: '8px' }}>{formatCurrency(row.principal + row.interest)}</td>
                                <td style={{ padding: '8px', color: TEXT_COLOR.red }}>{formatCurrency(row.interest)}</td>
                                <td style={{ padding: '8px', color: TEXT_COLOR.green }}>{formatCurrency(row.principal)}</td>
                                <td style={{ padding: '8px', fontWeight: 'bold' }}>{formatCurrency(row.balance)}</td>
                                <td style={{ padding: '8px', color: '#F39C12' }}>{formatCurrency(remainingInterest)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const ResultRow = ({ label, value, color, subLabel, tooltip }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
        <span style={{ fontWeight: '500', color: 'var(--text-color)', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
            {label} {tooltip && <InfoTooltip text={tooltip} />}
        </span>
        <div style={{ textAlign: 'right' }}>
            <span style={{ fontWeight: 'bold', color: color || 'var(--text-color)', fontSize: '1rem', display: 'block' }}>{value}</span>
            {subLabel && <span style={{ fontSize: '0.75rem', color: '#777' }}>{subLabel}</span>}
        </div>
    </div>
);

// --- POPUP ANALYSE DE DETTE ---
const PaymentAnalysisModal = ({ isOpen, onClose, solde, taux, paiement, formatCurrency, t }) => {
    if (!isOpen) return null;

    const iMensuel = (taux / 100) / 12;
    const interetMensuel = solde * iMensuel;

    // Génération de s scénarios optimistes
    const scenarios = [];
    const basePaiements = [500, 600, 750, 1000]; // Exemples fixes comme demandé

    basePaiements.forEach(p => {
        if (p <= interetMensuel) return; // On ignore si ça couvre pas les intérêts

        let b = solde;
        let count = 0;
        let totalInt = 0;
        while (b > 0 && count < 600) { // Max 50 ans
            count++;
            let i = b * iMensuel;
            let princ = p - i;
            if (b - princ <= 0) { princ = b; b = 0; }
            else { b -= princ; }
            totalInt += i;
        }

        if (b === 0) {
            scenarios.push({
                montant: p,
                count: count,
                duree: formatDuration(count, t),
                interets: totalInt
            });
        }
    });

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1000,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                backgroundColor: 'var(--card-background)',
                padding: '30px', borderRadius: '15px',
                maxWidth: '600px', width: '90%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                position: 'relative',
                maxHeight: '90vh', overflowY: 'auto',
                border: '1px solid var(--border-color)'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '15px', right: '15px',
                        background: 'none', border: 'none',
                        color: 'var(--text-color)', fontSize: '1.5rem', cursor: 'pointer'
                    }}
                >×</button>

                <h2 style={{ marginTop: 0, color: TEXT_COLOR.red, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ExclamationTriangleIcon style={{ width: '28px' }} /> {t('debt_analysis.title')}
                </h2>

                <div style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-color)' }}>
                    <p style={{ fontWeight: 'bold' }}>{t('debt_analysis.warning_intro')}</p>

                    <p>{t('debt_analysis.explanation_p1', {
                        solde: formatCurrency(solde),
                        taux: taux,
                        interetMensuel: formatCurrency(interetMensuel)
                    })}</p>

                    <p style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', padding: '10px', borderLeft: `4px solid ${TEXT_COLOR.red}`, borderRadius: '4px' }}>
                        {t('debt_analysis.explanation_p2', { paiement: formatCurrency(paiement) })}
                    </p>

                    <p>{t('debt_analysis.minimum_req', { minPaiement: formatCurrency(interetMensuel + 1) })}</p>

                    <h3>{t('debt_analysis.examples_title')}</h3>

                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                                <th style={{ padding: '8px' }}>{t('debt_analysis.col_payment')}</th>
                                <th style={{ padding: '8px' }}>{t('debt_analysis.col_count')}</th>
                                <th style={{ padding: '8px' }}>{t('debt_analysis.col_duration')}</th>
                                <th style={{ padding: '8px' }}>{t('debt_analysis.col_total_interest')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scenarios.map((s, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '8px', fontWeight: 'bold', color: TEXT_COLOR.green }}>{formatCurrency(s.montant)}</td>
                                    <td style={{ padding: '8px' }}>{s.count}</td>
                                    <td style={{ padding: '8px' }}>{s.duree}</td>
                                    <td style={{ padding: '8px', color: TEXT_COLOR.red }}>{formatCurrency(s.interets)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--secondary-color)' }}>
                        {t('debt_analysis.conclusion', { paiement: formatCurrency(paiement) })}
                    </p>
                </div>

                <div style={{ marginTop: '30px', textAlign: 'right' }}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '10px 25px', borderRadius: '25px',
                            background: TEXT_COLOR.blue, color: '#fff',
                            border: 'none', fontWeight: 'bold', cursor: 'pointer'
                        }}
                    >
                        {t('common.close')}
                    </button>
                </div>
            </div>
        </div>
    );
};

function Remboursement() {
    const { appState, setAppState, saveGlobalState, formatCurrency } = useData();
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('hypotheque');
    const [results, setResults] = useState(null);
    const [warningMessage, setWarningMessage] = useState('');
    const [showAnalysisModal, setShowAnalysisModal] = useState(false); // État pour le modal
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        const hasSeenIntro = localStorage.getItem('nexus_intro_remboursement_seen');
        if (!hasSeenIntro) {
            setShowIntro(true);
        }
    }, []);

    const currentCurrency = appState.settings?.currentCurrency || 'CAD';
    const SCENARIO_KEYS = { hypotheque: 'hypScenarios', pret: 'pretScenarios', carte: 'carteScenarios' };
    const ACTIVE_INDEX_KEYS = { hypotheque: 'activeHypScenarioIndex', pret: 'activePretScenarioIndex', carte: 'activeCarteScenarioIndex' };

    // Initialisation sécurisée
    useEffect(() => {
        if (!appState.remboursement) {
            const newState = JSON.parse(JSON.stringify(appState));
            newState.remboursement = {
                hypScenarios: [{ name: "1", hypType: 'achat', hypPrix: '', hypMiseDeFonds: '', hypTaux: '', hypDuree: '25', hypDureeUnit: 'years', hypFreq: '12', hypManualToggle: false, hypInsuranceTax: false, hypInsuranceType: 'schl' }],
                pretScenarios: [{ name: "1", pretMontant: '', pretTaux: '', pretDuree: '', pretDureeUnit: 'months', pretFreq: '12' }],
                carteScenarios: [{ name: "1", carteSolde: '', carteTaux: '', cartePaiement: '' }]
            };
            newState.volatile = { ...newState.volatile, activeHypScenarioIndex: 0, activePretScenarioIndex: 0, activeCarteScenarioIndex: 0 };
            setAppState(newState);
            saveGlobalState(newState);
        }
    }, []);

    const scenariosKey = SCENARIO_KEYS[activeTab];
    const activeIndexKey = ACTIVE_INDEX_KEYS[activeTab];
    const scenarios = appState.remboursement?.[scenariosKey] || [];
    const activeIndex = appState.volatile?.[activeIndexKey] || 0;
    const inputs = scenarios[activeIndex] || {};

    // Valeur par défaut robuste pour le type
    const activeHypType = inputs.hypType || 'achat';

    const handleAddScenario = () => {
        const newState = JSON.parse(JSON.stringify(appState));
        const nextName = (scenarios.length + 1).toString();
        const newScen = { ...inputs, name: nextName };

        if (activeTab === 'hypotheque') { newScen.hypPrix = ''; newScen.hypMiseDeFonds = ''; newScen.hypTaux = ''; newScen.hypDuree = ''; newScen.hypType = 'achat'; newScen.hypManualToggle = false; }
        if (activeTab === 'pret') { newScen.pretMontant = ''; newScen.pretTaux = ''; newScen.pretDuree = ''; }
        if (activeTab === 'carte') { newScen.carteSolde = ''; newScen.carteTaux = ''; newScen.cartePaiement = ''; }

        newState.remboursement[scenariosKey].push(newScen);
        newState.volatile[activeIndexKey] = newState.remboursement[scenariosKey].length - 1;
        saveGlobalState(newState);
    };

    const handleDeleteScenario = (index) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.remboursement[scenariosKey].splice(index, 1);
        if (activeIndex >= index) newState.volatile[activeIndexKey] = Math.max(0, activeIndex - 1);
        saveGlobalState(newState);
    };

    const handleSelectScenario = (index) => {
        const newState = { ...appState };
        newState.volatile[activeIndexKey] = index;
        setAppState(newState);
    };

    const handleRenameScenario = (index, newName) => {
        const newState = JSON.parse(JSON.stringify(appState));
        newState.remboursement[scenariosKey][index].name = newName;
        saveGlobalState(newState);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newVal = type === 'checkbox' ? checked : value;

        setAppState(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            // Vérification de sécurité pour s'assurer que le chemin existe
            if (newState.remboursement &&
                newState.remboursement[scenariosKey] &&
                newState.remboursement[scenariosKey][activeIndex]) {
                newState.remboursement[scenariosKey][activeIndex][name] = newVal;
            }
            return newState;
        });
    };

    // Switch corrigée avec mise à jour automatique des calculs
    const handleTypeChange = (newType) => {
        setAppState(prev => {
            const newState = JSON.parse(JSON.stringify(prev));
            // Ensure structure exists
            if (!newState.remboursement) newState.remboursement = {};
            if (!newState.remboursement[scenariosKey]) newState.remboursement[scenariosKey] = [];
            if (!newState.remboursement[scenariosKey][activeIndex]) {
                // If scenario missing, create default with ROBUST defaults
                newState.remboursement[scenariosKey][activeIndex] = {
                    name: "1",
                    hypType: newType,
                    hypFreq: '12',
                    hypDuree: '25',
                    hypDureeUnit: 'years',
                    hypPrix: '',
                    hypTaux: ''
                };
            }

            newState.remboursement[scenariosKey][activeIndex]['hypType'] = newType;
            return newState;
        });
    };

    const getDurationInYears = (val, unit) => {
        const num = parseFloat(val) || 0;
        if (unit === 'years') return num;
        if (unit === 'months') return num / 12;
        return 0;
    };

    // --- CALCUL HYPOTHÈQUE ---
    const calculateHypotheque = () => {
        setWarningMessage('');
        const prixAchat = parseLocaleNumber(inputs.hypPrix);
        // Utilisation de activeHypType pour éviter les erreurs "undefined"
        let montantPretInitial = activeHypType === 'renouvellement' ? prixAchat : Math.max(0, prixAchat - parseLocaleNumber(inputs.hypMiseDeFonds));
        const tauxAnnuel = parseLocaleNumber(inputs.hypTaux) / 100;
        // Default to 25 years if empty to allow calculation flow
        const dureeAnnees = getDurationInYears(inputs.hypDuree || '25', inputs.hypDureeUnit || 'years');
        let frequence = 12;
        if (inputs.hypFreq) frequence = inputs.hypFreq.includes('-acc') ? parseInt(inputs.hypFreq.split('-')[0]) : parseInt(inputs.hypFreq);
        const montantAnticipe = parseLocaleNumber(inputs.hypAnticipe);
        const versementSupp = parseLocaleNumber(inputs.hypVersementSupp);

        // Validation assouplie pour affichage rapide
        if (prixAchat <= 0 || dureeAnnees <= 0) { setResults(null); return; }

        let primeAssurance = 0; let taxeSurPrime = 0; let tauxPrimeEffectif = 0;
        const ratio = (activeHypType === 'achat' && prixAchat > 0) ? parseLocaleNumber(inputs.hypMiseDeFonds) / prixAchat : 1;
        const isCad = currentCurrency === 'CAD';

        if (activeHypType === 'achat') {
            const forceManual = !isCad;
            // Utilisation directe de la valeur booléenne
            const useManual = (inputs.hypManualToggle === true) || forceManual;

            if (useManual) {
                if (parseLocaleNumber(inputs.hypManualAmount) > 0) {
                    primeAssurance = parseLocaleNumber(inputs.hypManualAmount);
                    if (montantPretInitial > 0) tauxPrimeEffectif = primeAssurance / montantPretInitial;
                } else if (parseLocaleNumber(inputs.hypManualPercent) > 0) {
                    tauxPrimeEffectif = parseLocaleNumber(inputs.hypManualPercent) / 100;
                    primeAssurance = montantPretInitial * tauxPrimeEffectif;
                }
            } else if (isCad) {
                const insuranceType = inputs.hypInsuranceType || 'schl';
                if (insuranceType !== 'none' && ratio < 0.20) {
                    if (ratio < 0.05) tauxPrimeEffectif = 0.04;
                    else if (ratio < 0.10) tauxPrimeEffectif = 0.04;
                    else if (ratio < 0.15) tauxPrimeEffectif = 0.031;
                    else if (ratio < 0.20) tauxPrimeEffectif = 0.028;
                    primeAssurance = montantPretInitial * tauxPrimeEffectif;
                    if (inputs.hypInsuranceTax) taxeSurPrime = primeAssurance * 0.09;
                }
            }
        }

        const montantTotalAmorti = montantPretInitial + primeAssurance;
        let iPeriodique = isCad ? Math.pow(1 + (Math.pow(1 + tauxAnnuel / 2, 2) - 1), 1 / frequence) - 1 : tauxAnnuel / frequence;
        let nTotal = Math.round(dureeAnnees * frequence);

        let versementBase = 0;
        if (iPeriodique > 0) versementBase = montantTotalAmorti * (iPeriodique * Math.pow(1 + iPeriodique, nTotal)) / (Math.pow(1 + iPeriodique, nTotal) - 1);
        else versementBase = montantTotalAmorti / nTotal;

        const versementTotal = roundMoney(versementBase + versementSupp);
        let balance = montantTotalAmorti;
        let totalInterest = 0;
        let totalPrincipal = 0;
        let periods = 0;

        let data = [{ period: 0, balance: balance, interest: 0, principal: 0, cumulativeInterest: 0, cumulativePrincipal: 0 }];
        const maxPeriods = nTotal * 1.5;

        while (balance > 0.01 && periods < maxPeriods) {
            periods++;
            let interest = roundMoney(balance * iPeriodique);
            let principal = roundMoney(versementTotal - interest);
            if (principal < 0) principal = 0;
            if (montantAnticipe > 0 && periods % frequence === 0) principal += Math.min(balance - principal, montantAnticipe);

            if (balance - principal <= 0.01) { principal = balance; balance = 0; } else { balance = roundMoney(balance - principal); }

            totalInterest += interest;
            totalPrincipal += principal;

            data.push({
                period: periods,
                balance: balance,
                interest: interest,
                principal: principal,
                cumulativeInterest: totalInterest,
                cumulativePrincipal: totalPrincipal
            });
        }

        const totalMonthsReal = Math.round(periods * (12 / frequence));

        setResults({
            type: 'hyp', montantTotal: montantTotalAmorti, primeAssurance, tauxPrimeEffectif, montantPretInitial, taxeSurPrime,
            versementTotal, totalInterest, coutTotalReel: montantTotalAmorti + totalInterest,
            periods,
            frequence,
            data,
            durationFormatted: formatDuration(totalMonthsReal, t)
        });
    };

    // --- CALCUL PRÊT ---
    const calculatePret = () => {
        setWarningMessage('');
        const montant = parseLocaleNumber(inputs.pretMontant);
        const tauxAnnuel = parseLocaleNumber(inputs.pretTaux) / 100;
        const dureeAnnees = getDurationInYears(inputs.pretDuree, inputs.pretDureeUnit || 'months');
        const frequence = parseInt(inputs.pretFreq || '12');

        if (montant <= 0 || dureeAnnees <= 0) { setResults(null); return; }

        const nTotal = Math.round(dureeAnnees * frequence);
        const iPeriodique = tauxAnnuel / frequence;
        let paiement = 0;
        if (iPeriodique === 0) paiement = montant / nTotal;
        else paiement = montant * (iPeriodique * Math.pow(1 + iPeriodique, nTotal)) / (Math.pow(1 + iPeriodique, nTotal) - 1);

        paiement = roundMoney(paiement);
        let balance = montant;
        let totalInterest = 0;
        let totalPrincipal = 0;
        let periods = 0;
        let data = [{ period: 0, balance, interest: 0, principal: 0, cumulativeInterest: 0, cumulativePrincipal: 0 }];
        const maxPeriods = nTotal * 1.5;

        while (balance > 0.01 && periods < maxPeriods) {
            periods++;
            let interest = roundMoney(balance * iPeriodique);
            let principal = roundMoney(paiement - interest);
            if (balance - principal <= 0.01) { principal = balance; balance = 0; } else { balance = roundMoney(balance - principal); }
            totalInterest += interest;
            totalPrincipal += principal;
            data.push({ period: periods, balance, interest, principal, cumulativeInterest: totalInterest, cumulativePrincipal: totalPrincipal });
        }

        const totalMonthsReal = Math.round(periods * (12 / frequence));

        setResults({ type: 'pret', montantTotal: montant, versementTotal: paiement, totalInterest, coutTotalReel: montant + totalInterest, periods, frequence, data, durationFormatted: formatDuration(totalMonthsReal, t) });
    };

    // --- CALCUL CARTE DE CRÉDIT ---
    const calculateCarte = () => {
        setWarningMessage('');
        const solde = parseLocaleNumber(inputs.carteSolde);
        const tauxAnnuel = parseLocaleNumber(inputs.carteTaux) / 100;
        const paiement = parseLocaleNumber(inputs.cartePaiement);
        const paiementMinExige = Math.max(10, roundMoney(solde * 0.03));

        if (solde <= 0 || tauxAnnuel < 0) { setResults(null); return; }

        const iMensuel = tauxAnnuel / 12;
        const interetMin = solde * iMensuel;


        // CALCUL DE L'AVERTISSEMENT MAIS PAS DE BLOCAGE DES RÉSULTATS
        // Version avec bouton pour ouvrir le modal
        if (paiement > 0 && paiement <= interetMin) {
            // "TRAP_DETECTED" sert de signal pour afficher le bouton dans le rendu
            setWarningMessage('TRAP_DETECTED');
        } else if (paiement > 0 && paiement < paiementMinExige) {
            setWarningMessage(`${t('repayment.alert_payment_low')} (${formatCurrency(paiementMinExige)}).`);
        } else {
            // Reset si tout est OK (important sinon le message reste)
            setWarningMessage('');
        }

        // Si aucun paiement défini, on ne calcule rien
        if (paiement <= 0) { setResults(null); return; }

        let balance = solde;
        let totalInterest = 0;
        let totalPrincipal = 0;
        let periods = 0;
        let data = [{ period: 0, balance, interest: 0, principal: 0, cumulativeInterest: 0, cumulativePrincipal: 0 }];
        const maxMonths = 600;

        while (balance > 0.01 && periods < maxMonths) {
            periods++;
            let interest = roundMoney(balance * iMensuel);
            let principal = roundMoney(paiement - interest);

            // Si le paiement ne couvre pas les intérêts, la balance augmente
            if (balance - principal <= 0.01) { principal = balance; balance = 0; }
            else { balance = roundMoney(balance - principal); }

            totalInterest += interest;
            totalPrincipal += principal;
            data.push({ period: periods, balance, interest, principal, cumulativeInterest: totalInterest, cumulativePrincipal: totalPrincipal });
        }

        setResults({
            type: 'carte',
            montantTotal: solde,
            versementTotal: paiement,
            totalInterest,
            coutTotalReel: solde + totalInterest,
            periods,
            frequence: 12,
            data,
            limitReached: periods >= maxMonths,
            durationFormatted: periods >= maxMonths ? '> 50 ans' : formatDuration(periods, t)
        });
    };

    // EFFET: Auto-remplissage du paiement minimum carte de crédit
    useEffect(() => {
        if (activeTab === 'carte') {
            const solde = parseLocaleNumber(inputs.carteSolde);
            // Si le solde change et que le paiement est vide ou nul, on propose le minimum
            if (solde > 0 && (!inputs.cartePaiement || parseLocaleNumber(inputs.cartePaiement) === 0)) {
                // Formule synchronisée avec Plan.jsx : Intérêts + 1% du solde (ou 10$ min)
                const tauxMensuel = (parseLocaleNumber(inputs.carteTaux) / 100) / 12;
                const interets = solde * tauxMensuel;
                const capitalUnPourcent = solde * 0.01;
                const minPayment = Math.ceil(Math.max(10, interets + capitalUnPourcent));

                // Mise à jour de l'état sans écraser si l'utilisateur tape
                setAppState(prev => {
                    const newState = JSON.parse(JSON.stringify(prev));
                    if (newState.remboursement && newState.remboursement[SCENARIO_KEYS.carte] && newState.remboursement[SCENARIO_KEYS.carte][activeIndex]) {
                        // On vérifie encore ici pour être sûr
                        if (!newState.remboursement[SCENARIO_KEYS.carte][activeIndex].cartePaiement) {
                            newState.remboursement[SCENARIO_KEYS.carte][activeIndex].cartePaiement = minPayment;
                        }
                    }
                    return newState;
                });
            }
        }
    }, [inputs.carteSolde, activeTab, activeIndex]); // Dépendance uniquement sur le solde

    useEffect(() => {
        const timer = setTimeout(() => {
            if (activeTab === 'hypotheque') calculateHypotheque();
            else if (activeTab === 'pret') calculatePret();
            else if (activeTab === 'carte') calculateCarte();
        }, 500);
        return () => clearTimeout(timer);
    }, [inputs, activeTab, currentCurrency, t]);

    const chartData = useMemo(() => {
        if (!results || !results.data) return null;
        return {
            lineData: {
                labels: results.data.map(d => d.period),
                datasets: [
                    { label: t('common.balance'), data: results.data.map(d => d.balance), borderColor: GRAPH_COLOR.blue, backgroundColor: GRAPH_COLOR.blueBg, fill: true, tension: 0.1, borderWidth: 2, pointRadius: 0 },
                    { label: t('repayment.capital_paid'), data: results.data.map(d => d.cumulativePrincipal), borderColor: TEXT_COLOR.green, fill: false, tension: 0.1, borderWidth: 2, pointRadius: 0 },
                    { label: t('repayment.interest_cumul'), data: results.data.map(d => d.cumulativeInterest), borderColor: TEXT_COLOR.red, fill: false, tension: 0.1, borderWidth: 2, pointRadius: 0 },
                    { label: `${t('common.interest')} (${t('common.frequency')})`, data: results.data.map(d => d.interest), borderColor: TEXT_COLOR.warning, borderDash: [2, 4], fill: false, tension: 0.1, borderWidth: 1, pointRadius: 0 }
                ]
            },
            barData: {
                labels: [t('common.capital'), t('common.interest')],
                datasets: [{ label: t('common.amount'), data: [results.montantTotal, results.totalInterest], backgroundColor: [GRAPH_COLOR.blue, GRAPH_COLOR.red], borderWidth: 0, borderRadius: 4 }]
            }
        };
    }, [results, t]);

    const tabStyle = (name, color) => ({ padding: '12px 25px', background: activeTab === name ? 'var(--card-background)' : 'transparent', border: 'none', borderBottom: activeTab === name ? `4px solid ${color}` : '4px solid transparent', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', color: activeTab === name ? 'var(--text-color)' : 'var(--secondary-color)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' });
    const isCad = currentCurrency === 'CAD';
    const showInsuranceSection = activeHypType === 'achat';

    // --- STYLES EN LIGNE POUR LA SWITCH (Bouton Achat/Renouvellement) ---
    const switchContainerStyle = {
        display: 'flex',
        backgroundColor: 'var(--background-color)',
        padding: '4px',
        borderRadius: '30px',
        marginBottom: '25px',
        border: '1px solid var(--border-color)',
        maxWidth: '300px',
        margin: '0 auto 25px auto',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)'
    };

    const switchOptionStyle = (isActive, activeColor) => ({
        flex: 1,
        padding: '8px 15px',
        textAlign: 'center',
        borderRadius: '25px',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: isActive ? activeColor : 'transparent',
        color: isActive ? '#fff' : 'var(--secondary-color)',
        transition: 'all 0.3s ease',
        fontSize: '0.9rem',
        userSelect: 'none'
    });

    const addToPlan = () => {
        if (!results || activeTab !== 'hypotheque') {
            alert(t('common.calculate_first') || "Veuillez calculer d'abord");
            return;
        }

        const newState = JSON.parse(JSON.stringify(appState));
        if (!newState.plan) newState.plan = {};
        if (!newState.plan.mortgages) newState.plan.mortgages = [];

        const newId = `mort-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        let title = inputs.name || t('repayment.tab_mortgage');
        if (inputs.hypPrix) title += ` (${formatCurrency(parseLocaleNumber(inputs.hypPrix))})`;

        newState.plan.mortgages.push({
            id: newId,
            titre: title,
            solde: results.montantTotal,
            taux: parseLocaleNumber(inputs.hypTaux) / 100,
            paiement: results.versementTotal,
            valeur: parseLocaleNumber(inputs.hypPrix)
        });

        saveGlobalState(newState);
        alert(t('plan.added_to_plan'));
    };

    return (
        <div className="printable-content" style={{ display: 'block' }}>
            <div className="module-header-with-reset" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h2 style={{ margin: 0 }}>{t('remboursement.title')}</h2>
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

            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '25px', overflowX: 'auto' }}>
                <button style={tabStyle('hypotheque', TEXT_COLOR.green)} onClick={() => setActiveTab('hypotheque')}><HomeIcon style={{ width: '20px', height: '20px' }} /> {t('repayment.tab_mortgage')}</button>
                <button style={tabStyle('pret', TEXT_COLOR.blue)} onClick={() => setActiveTab('pret')}><BanknotesIcon style={{ width: '20px', height: '20px' }} /> {t('repayment.tab_loan')}</button>
                <button style={tabStyle('carte', TEXT_COLOR.red)} onClick={() => setActiveTab('carte')}><CreditCardIcon style={{ width: '20px', height: '20px' }} /> {t('repayment.tab_card')}</button>
            </div>

            <ScenarioTabs
                scenarios={scenarios}
                activeIndex={activeIndex}
                onSelect={handleSelectScenario}
                onAdd={handleAddScenario}
                onDelete={handleDeleteScenario}
                onRename={handleRenameScenario}
                activeColor={TAB_COLORS[activeTab]}
            />

            {/* AVERTISSEMENT / BOUTON ANALYSE */}
            {warningMessage === 'TRAP_DETECTED' ? (
                <div style={{
                    marginBottom: '20px', padding: '15px',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    border: `1px solid ${TEXT_COLOR.red}`, borderRadius: '8px',
                    color: TEXT_COLOR.red, textAlign: 'center'
                }}>
                    <button
                        onClick={() => setShowAnalysisModal(true)}
                        style={{
                            background: TEXT_COLOR.red, color: '#fff', border: 'none',
                            padding: '10px 20px', borderRadius: '25px',
                            fontWeight: 'bold', cursor: 'pointer',
                            display: 'inline-flex', alignItems: 'center', gap: '8px'
                        }}
                    >
                        {t('debt_analysis.button_analyze')}
                    </button>
                </div>
            ) : (
                warningMessage && <div className="budget-warning-pulse" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <ExclamationTriangleIcon style={{ width: '24px', flexShrink: 0 }} />
                    {warningMessage}
                </div>
            )}

            {/* MODAL ANALYSE */}
            <PaymentAnalysisModal
                isOpen={showAnalysisModal}
                onClose={() => setShowAnalysisModal(false)}
                solde={parseLocaleNumber(inputs.carteSolde)}
                taux={parseLocaleNumber(inputs.carteTaux)}
                paiement={parseLocaleNumber(inputs.cartePaiement)}
                formatCurrency={formatCurrency}
                t={t}
            />

            {activeTab === 'hypotheque' && (
                <div className="budget-category card-hover-fix" style={{ padding: '25px', background: 'var(--card-background)' }}>

                    {/* SWITCH CORRIGÉE : Utilisation de Classes CSS Responsive (Desktop=Absolute, Mobile=Flex Column) */}
                    <div className="remboursement-switch-container">
                        <button
                            onClick={addToPlan}
                            className="btn-success remboursement-add-btn"
                            style={{
                                padding: '8px 15px',
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                marginRight: '20px', marginBottom: '10px' // Ajout d'espace explicite
                            }}
                            title={t('plan.add_mortgage')}
                        >
                            <PlusCircleIcon style={{ width: '18px' }} />
                            <span className="hide-mobile">{t('plan.add_to_plan')}</span>
                        </button>

                        <div style={{ ...switchContainerStyle }} className="remboursement-toggle-wrapper">
                            <button
                                type="button"
                                style={switchOptionStyle(activeHypType === 'achat', '#3498DB')}
                                onClick={() => handleTypeChange('achat')}
                            >
                                {t('repayment.purchase')}
                            </button>
                            <button
                                type="button"
                                style={switchOptionStyle(activeHypType === 'renouvellement', '#F39C12')}
                                onClick={() => handleTypeChange('renouvellement')}
                            >
                                {t('repayment.renewal')}
                            </button>
                        </div>
                    </div>

                    <div className="fieldset-grid">
                        <div className="input-group">
                            <label htmlFor={`hypPrix-${activeIndex}`}>{activeHypType === 'achat' ? t('realestate.purchase_price') : t('common.balance')}</label>
                            <CurrencyInput id={`hypPrix-${activeIndex}`} name="hypPrix" value={inputs.hypPrix} onChange={handleChange} placeholder="0.00" />
                        </div>
                        {activeHypType === 'achat' && (
                            <div className="input-group">
                                <label htmlFor={`hypMiseDeFonds-${activeIndex}`}>{t('realestate.down_payment')}</label>
                                <CurrencyInput id={`hypMiseDeFonds-${activeIndex}`} name="hypMiseDeFonds" value={inputs.hypMiseDeFonds} onChange={handleChange} placeholder="0.00" />
                            </div>
                        )}
                        <div className="input-group">
                            <label htmlFor={`hypTaux-${activeIndex}`}>{t('common.rate')} (%)</label>
                            <input id={`hypTaux-${activeIndex}`} name="hypTaux" type="number" value={inputs.hypTaux} onChange={handleChange} placeholder="0.0" onFocus={(e) => e.target.select()} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '70%' }} />
                        </div>

                        <div className="input-group">
                            <label htmlFor={`hypDuree-${activeIndex}`}>{t('common.duration')}</label>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <input id={`hypDuree-${activeIndex}`} name="hypDuree" type="number" value={inputs.hypDuree} onChange={handleChange} placeholder="0" onFocus={(e) => e.target.select()} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '50%' }} />
                                <select name="hypDureeUnit" value={inputs.hypDureeUnit || 'years'} onChange={handleChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '50%' }}>
                                    <option value="years">{t('common.years')}</option>
                                    <option value="months">{t('common.months')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor={`hypFreq-${activeIndex}`}>{t('common.frequency')}</label>
                            <select id={`hypFreq-${activeIndex}`} name="hypFreq" value={inputs.hypFreq} onChange={handleChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }}>
                                <option value="12">{t('common.freq_monthly')} (x12)</option>
                                <option value="26">{t('common.freq_biweekly')} (x26)</option>
                                <option value="26-acc">{t('common.freq_biweekly')} + (Acc.)</option>
                                <option value="52">{t('common.freq_weekly')} (x52)</option>
                                <option value="52-acc">{t('common.freq_weekly')} + (Acc.)</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor={`hypAnticipe-${activeIndex}`}>{t('repayment.prepayment_annual')}</label>
                            <CurrencyInput id={`hypAnticipe-${activeIndex}`} name="hypAnticipe" value={inputs.hypAnticipe} onChange={handleChange} placeholder="0.00" />
                        </div>
                    </div>

                    {showInsuranceSection && (
                        <div style={{ marginTop: '20px', padding: '15px', background: 'var(--background-color)', borderRadius: '8px', border: '1px dashed var(--warning-color)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                                <h4 style={{ marginTop: 0, marginBottom: 0, fontSize: '1rem', color: 'var(--warning-color)' }}>
                                    {isCad ? t('repayment.insurance_schl') : t('common.insurance')}
                                </h4>

                                {isCad && (
                                    <div className="switch-container">
                                        <label className="switch-label" htmlFor={`hypManualToggle-${activeIndex}`} style={{ marginRight: '10px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                                            <input id={`hypManualToggle-${activeIndex}`} type="checkbox" name="hypManualToggle" checked={inputs.hypManualToggle === true} onChange={handleChange} style={{ width: '18px', height: '18px' }} />
                                            {t('repayment.manual_mode')}
                                        </label>
                                    </div>
                                )}
                            </div>

                            {/* LOGIQUE CORRIGÉE : Si manualToggle est VRAI OU si ce n'est pas du CAD, on affiche les champs manuels */}
                            {(inputs.hypManualToggle === true || !isCad) ? (
                                <div className="fieldset-grid">
                                    <div className="input-group"><label htmlFor={`hypManualPercent-${activeIndex}`}>{t('repayment.premium_percent')}</label><input id={`hypManualPercent-${activeIndex}`} name="hypManualPercent" type="number" value={inputs.hypManualPercent} onChange={handleChange} placeholder="ex: 4.0" onFocus={(e) => e.target.select()} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)' }} /></div>
                                    <div className="input-group"><label htmlFor={`hypManualAmount-${activeIndex}`}>{t('repayment.manual_amount')}</label><CurrencyInput id={`hypManualAmount-${activeIndex}`} name="hypManualAmount" value={inputs.hypManualAmount} onChange={handleChange} placeholder="0.00" /></div>
                                </div>
                            ) : (
                                <div className="fieldset-grid">
                                    <div className="input-group"><label htmlFor={`hypInsuranceType-${activeIndex}`}>{t('repayment.insurance_type')}</label><select id={`hypInsuranceType-${activeIndex}`} name="hypInsuranceType" value={inputs.hypInsuranceType || 'schl'} onChange={handleChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }}>
                                        <option value="schl">SCHL / Sagen</option>
                                        <option value="none">{t('repayment.insurance_none')}</option>
                                    </select></div>
                                    <div className="input-group"><label style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><input id={`hypInsuranceTax-${activeIndex}`} type="checkbox" name="hypInsuranceTax" checked={inputs.hypInsuranceTax} onChange={handleChange} style={{ width: '18px', height: '18px' }} /> {t('repayment.add_tax')}</label></div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'pret' && (
                <div className="budget-category card-hover-fix" style={{ padding: '25px', background: 'var(--card-background)' }}>
                    <div className="fieldset-grid">
                        <div className="input-group"><label htmlFor={`pretMontant-${activeIndex}`}>{t('common.amount')}</label><CurrencyInput id={`pretMontant-${activeIndex}`} name="pretMontant" value={inputs.pretMontant} onChange={handleChange} placeholder="0.00" /></div>
                        <div className="input-group"><label htmlFor={`pretTaux-${activeIndex}`}>{t('common.rate')} (%)</label><input id={`pretTaux-${activeIndex}`} name="pretTaux" type="number" value={inputs.pretTaux} onChange={handleChange} placeholder="0.0" onFocus={(e) => e.target.select()} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }} /></div>
                        <div className="input-group"><label htmlFor={`pretDuree-${activeIndex}`}>{t('common.duration')}</label><div style={{ display: 'flex', gap: '5px' }}><input id={`pretDuree-${activeIndex}`} name="pretDuree" type="number" value={inputs.pretDuree} onChange={handleChange} placeholder="0" onFocus={(e) => e.target.select()} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '60%' }} /><select name="pretDureeUnit" value={inputs.pretDureeUnit || 'months'} onChange={handleChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '40%' }}><option value="months">{t('common.months')}</option><option value="years">{t('common.years')}</option></select></div></div>
                        <div className="input-group"><label htmlFor={`pretFreq-${activeIndex}`}>{t('common.frequency')}</label><select id={`pretFreq-${activeIndex}`} name="pretFreq" value={inputs.pretFreq} onChange={handleChange} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }}><option value="12">{t('common.freq_monthly')}</option><option value="26">{t('common.freq_biweekly')}</option><option value="52">{t('common.freq_weekly')}</option></select></div>
                    </div>
                </div>
            )}

            {activeTab === 'carte' && (
                <div className="budget-category card-hover-fix" style={{ padding: '25px', background: 'var(--card-background)' }}>
                    <div className="fieldset-grid">
                        <div className="input-group"><label htmlFor={`carteSolde-${activeIndex}`}>{t('common.balance')}</label><CurrencyInput id={`carteSolde-${activeIndex}`} name="carteSolde" value={inputs.carteSolde} onChange={handleChange} placeholder="0.00" /></div>
                        <div className="input-group"><label htmlFor={`carteTaux-${activeIndex}`}>{t('common.rate')} (%)</label><input id={`carteTaux-${activeIndex}`} name="carteTaux" type="number" value={inputs.carteTaux} onChange={handleChange} placeholder="0.0" onFocus={(e) => e.target.select()} style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', width: '100%' }} /></div>
                        <div className="input-group"><label htmlFor={`cartePaiement-${activeIndex}`}>{t('common.payment')}</label><CurrencyInput id={`cartePaiement-${activeIndex}`} name="cartePaiement" value={inputs.cartePaiement} onChange={handleChange} placeholder="0.00" /></div>
                    </div>
                </div>
            )}

            {results ? (
                <div className="results-section" style={{ marginTop: '30px' }}>
                    <div className="repayment-results-grid">
                        <div className="card-hover-fix" style={{ background: 'var(--card-background)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ marginTop: 0, color: 'var(--primary-color)' }}>{t('common.results')} ({inputs.name})</h3>

                            {activeTab === 'hypotheque' && (
                                <>
                                    <ResultRow label={t('repayment.financed_amount')} value={formatCurrency(results.montantTotal)} color={TEXT_COLOR.blue} subLabel={(results.primeAssurance > 0) ? `(Incl. ${t('common.insurance')})` : null} />
                                    {results.primeAssurance > 0 && (
                                        <ResultRow label={t('repayment.insurance_total')} value={formatCurrency(results.primeAssurance)} color={TEXT_COLOR.warning} tooltip={`Calcul : ${formatCurrency(results.montantPretInitial)} x ${(results.tauxPrimeEffectif * 100).toFixed(2)}%`} />
                                    )}
                                    {results.taxeSurPrime > 0 && <ResultRow label={t('repayment.tax_9')} value={formatCurrency(results.taxeSurPrime)} color={TEXT_COLOR.warning} subLabel={t('repayment.tax_sub')} />}
                                    <ResultRow label={t('common.payment')} value={formatCurrency(results.versementTotal)} color={TEXT_COLOR.green} />
                                    <ResultRow label={t('common.interest')} value={formatCurrency(results.totalInterest)} color={TEXT_COLOR.red} />
                                    <ResultRow label={t('common.duration')} value={results.durationFormatted} color={TEXT_COLOR.dark} />
                                </>
                            )}

                            {activeTab === 'pret' && (
                                <>
                                    <ResultRow label={t('common.payment')} value={formatCurrency(results.versementTotal)} color={TEXT_COLOR.green} />
                                    <ResultRow label={t('common.capital')} value={formatCurrency(results.montantTotal)} color={TEXT_COLOR.blue} />
                                    <ResultRow label={t('common.interest')} value={formatCurrency(results.totalInterest)} color={TEXT_COLOR.red} />
                                    <ResultRow label={t('common.total_paid')} value={formatCurrency(results.coutTotalReel)} color={TEXT_COLOR.dark} />
                                    <ResultRow label={t('common.duration')} value={results.durationFormatted} color={TEXT_COLOR.dark} />
                                </>
                            )}

                            {activeTab === 'carte' && (
                                <>
                                    <ResultRow label={t('common.duration')} value={results.limitReached ? "> 50 ans" : results.durationFormatted} color={results.limitReached ? TEXT_COLOR.red : TEXT_COLOR.green} />
                                    <ResultRow label={t('common.capital')} value={formatCurrency(results.montantTotal)} color={TEXT_COLOR.blue} />
                                    <ResultRow label={t('common.interest')} value={formatCurrency(results.totalInterest)} color={TEXT_COLOR.red} />
                                    <ResultRow label={t('common.total_paid')} value={formatCurrency(results.coutTotalReel)} color={TEXT_COLOR.dark} />
                                </>
                            )}
                            <div style={{ width: '100%', height: '220px', marginTop: '20px' }}>
                                {chartData && <Bar data={chartData.barData} plugins={[shadowPlugin]} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, title: { display: true, text: 'Répartition' } }, scales: { y: { beginAtZero: true } } }} />}
                            </div>
                        </div>
                        <div className="chart-container" style={{ height: '100%', minHeight: '300px' }}>
                            {chartData && <Line data={chartData.lineData} options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }} />}
                        </div>
                    </div>
                    <AmortizationTable data={results.data} type={results.type} totalInterestInitial={results.totalInterest} formatCurrency={formatCurrency} t={t} />
                </div>
            ) : (
                /* MESSAGE D'ATTENTE CORRIGÉ (TEXTE EN DUR + FALLBACK) */
                <div style={{ marginTop: '30px', padding: '30px', textAlign: 'center', color: 'var(--secondary-color)', fontStyle: 'italic', border: '2px dashed var(--border-color)', borderRadius: '10px' }}>
                    {t('repayment.fill_parameters')}
                </div>
            )}
            <IntroRemboursement
                isOpen={showIntro}
                onClose={() => setShowIntro(false)}
            />
        </div>
    );
}

export default Remboursement;