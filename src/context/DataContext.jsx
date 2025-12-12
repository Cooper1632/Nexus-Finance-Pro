import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from '../i18n';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

  const getDefaultBudget = () => {
    const t = i18n.t;
    return {
      revenus: [
        { id: 'rev-1', label: t('budget.defaults.salary_main'), cost: 0, freq: 26, day: 1 },
        { id: 'rev-2', label: t('budget.defaults.salary_partner'), cost: 0, freq: 26, day: 1 }
      ],
      depenses: {
        "Dépenses Fixes": [
          { id: 'fix-1', label: t('budget.defaults.rent'), cost: 0, freq: 12, day: 1 },
          { id: 'fix-2', label: t('budget.defaults.tax_mun'), cost: 0, freq: 1, day: 1 },
          { id: 'fix-3', label: t('budget.defaults.electricity'), cost: 0, freq: 12, day: 1 },
          { id: 'fix-4', label: t('budget.defaults.insurance'), cost: 0, freq: 12, day: 1 },
          { id: 'fix-5', label: t('budget.defaults.phone'), cost: 0, freq: 12, day: 1 },
          { id: 'fix-6', label: t('budget.defaults.license'), cost: 0, freq: 1, day: 1 }
        ],
        "Dépenses Variables": [
          { id: 'var-1', label: t('budget.defaults.grocery'), cost: 0, freq: 52, day: 1 },
          { id: 'var-2', label: t('budget.defaults.restaurant'), cost: 0, freq: 52, day: 1 },
          { id: 'var-3', label: t('budget.defaults.gas'), cost: 0, freq: 52, day: 1 },
          { id: 'var-4', label: t('budget.defaults.personal_care'), cost: 0, freq: 12, day: 1 },
          { id: 'var-5', label: t('budget.defaults.hobbies'), cost: 0, freq: 12, day: 1 },
          { id: 'var-6', label: t('budget.defaults.maintenance'), cost: 0, freq: 12, day: 1 }
        ],
        "Dettes": [
          { id: 'det-1', label: t('budget.defaults.car_loan'), cost: 0, freq: 12, day: 1 },
          { id: 'det-2', label: t('budget.defaults.cc_payment'), cost: 0, freq: 12, day: 1 },
          { id: 'det-3', label: t('budget.defaults.student_loan'), cost: 0, freq: 12, day: 1 }
        ],
        "Abonnement": [
          { id: 'abo-1', label: t('budget.defaults.streaming'), cost: 0, freq: 12, day: 1 },
          { id: 'abo-2', label: t('budget.defaults.gym'), cost: 0, freq: 12, day: 1 }
        ],
        "Impôts et Taxes": [
          { id: 'tax-1', label: t('budget.defaults.tax_income'), cost: 0, freq: 1, day: 1 }
        ]
      },
      epargne: [
        { id: 'ep-1', label: t('budget.defaults.tfsa'), cost: 0, freq: 12, day: 1 },
        { id: 'ep-2', label: t('budget.defaults.rrsp'), cost: 0, freq: 12, day: 1 },
        { id: 'ep-3', label: t('budget.defaults.emergency'), cost: 0, freq: 12, day: 1 }
      ],
      actifs: [
        { id: 'act-1', label: t('budget.defaults.residence'), cost: 0 },
        { id: 'act-2', label: t('budget.defaults.bank_accounts'), cost: 0 },
        { id: 'act-3', label: t('budget.defaults.vehicles'), cost: 0 }
      ]
    };
  };

  // CORRECTION ICI : TOUS LES PARAMÈTRES GÉNÉRAUX À 0
  const defaultScenario = {
    name: '1',
    sharedRate: 0, sharedYears: 0, sharedInflation: 0, sharedFees: 0, // <-- ZÉROS ICI
    fvInitial: 0, fvPmt: 0, fvFreq: 12, fvGrowth: 0, fvTiming: "end",
    goalTarget: 0, goalInitial: 0, goalFreq: 12, goalGrowth: 0,
    wdInitial: 0, wdAmount: 0, wdFreq: 12, wdAdjust: true
  };

  // IDEM POUR LE RESET : TOUT À 0
  const blankScenario = {
    name: '1',
    sharedRate: 0, sharedYears: 0, sharedInflation: 0, sharedFees: 0, // <-- ZÉROS ICI
    fvInitial: 0, fvPmt: 0, fvFreq: 12, fvGrowth: 0, fvTiming: "end",
    goalTarget: 0, goalInitial: 0, goalFreq: 12, goalGrowth: 0,
    wdInitial: 0, wdAmount: 0, wdFreq: 12, wdAdjust: true
  };

  const defaultImmoInput = {
    name: '1',
    prixAchat: "", revenusBruts: "", autresRevenus: "", depensesExploitation: "",
    hypothequeAnnuelle: "", miseDeFonds: "", amortissementCapital: "",
    tauxImposition: "", nombreLogements: "", tauxAppreciation: "", tauxVacance: "",
    fraisBienvenue: "", fraisNotaire: "", fraisRenovations: "", fraisDivers: "",
    depensesDetails: [], revenusDetails: [], fraisDiversDetails: [],
    valeurActuelle: "", montantTotalPret: "", soldeHypothequeRestant: "", amortissementFiscal: ""
  };

  const defaultPerformanceScenario = {
    name: '1',
    initial: "",
    final: "",
    startDate: "",
    endDate: ""
  };

  const defaultState = {
    settings: { currentCurrency: 'CAD', theme: 'light', maxWidth: '1400px', showDecimals: true },
    budget: getDefaultBudget(),
    budgetScenarios: [],
    projections: { fvScenarios: [defaultScenario], goalScenarios: [defaultScenario], wdScenarios: [defaultScenario] },
    plan: { debts: [], strategy: 'avalanche', budgetTotal: '', startDate: '' },
    remboursement: {
      hypScenarios: [{ name: '1', hypType: 'achat', hypPrix: '', hypMiseDeFonds: '', hypTaux: '', hypDuree: '', hypDureeUnit: 'years', hypFreq: '12', hypManualToggle: false, hypInsuranceTax: false, hypInsuranceType: 'schl' }],
      pretScenarios: [{ name: '1', pretMontant: '', pretTaux: '', pretDuree: '', pretDureeUnit: 'months', pretFreq: '12' }],
      carteScenarios: [{ name: '1', carteSolde: '', carteTaux: '', cartePaiement: '' }]
    },
    investment: {
      transactions: [], deposits: [], watchlist: [], snapshots: [], prices: {}
    },
    analyse: { cards: [], savedAnalyses: [] },
    immobilier: { immoScenarios: [defaultImmoInput] },
    performanceScenarios: [defaultPerformanceScenario],
    volatile: {
      activeBudgetIndex: 0, activeFvIndex: 0, activeGoalIndex: 0, activeWdIndex: 0,
      activeHypIndex: 0, activePretIndex: 0, activeCarteIndex: 0, activeImmoIndex: 0,
      activePerformanceScenarioIndex: 0,
      resetTrigger: 0
    }
  };

  const [appState, setAppState] = useState(() => {
    try {
      const localData = localStorage.getItem('nexus_finance_data_v2');
      return localData ? JSON.parse(localData) : defaultState;
    } catch (e) {
      return defaultState;
    }
  });

  useEffect(() => {
    localStorage.setItem('nexus_finance_data_v2', JSON.stringify(appState));
    document.body.dataset.theme = appState.settings.theme || 'light';
  }, [appState]);

  const saveGlobalState = (newState) => setAppState(newState);

  const resetToFactory = () => {
    setAppState(defaultState);
    window.location.reload();
  };

  const resetModuleData = (moduleName) => {
    setAppState(prev => {
      const newState = { ...prev };

      if (!newState.volatile) {
        newState.volatile = { ...defaultState.volatile };
      }

      newState.volatile.resetTrigger = Date.now();

      if (moduleName === 'budget') {
        newState.budget = getDefaultBudget();
        newState.budgetScenarios = [];
        newState.volatile.activeBudgetIndex = 0;
      } else if (moduleName === 'projections') {
        // Utilise maintenant le blankScenario avec des ZÉROS
        newState.projections = {
          fvScenarios: [{ ...blankScenario }],
          goalScenarios: [{ ...blankScenario }],
          wdScenarios: [{ ...blankScenario }]
        };
        newState.volatile.activeFvIndex = 0;
        newState.volatile.activeGoalIndex = 0;
        newState.volatile.activeWdIndex = 0;
      } else if (moduleName === 'perf') {
        newState.performanceScenarios = [{ ...defaultPerformanceScenario }];
        newState.volatile.activePerformanceScenarioIndex = 0;
      } else if (moduleName === 'plan') {
        newState.plan = { debts: [], strategy: 'avalanche', budgetTotal: '', startDate: '' };
      } else if (moduleName === 'remb') {
        newState.remboursement = defaultState.remboursement;
        newState.volatile.activeHypIndex = 0;
        newState.volatile.activePretIndex = 0;
        newState.volatile.activeCarteIndex = 0;
      } else if (moduleName === 'investment') {
        newState.investment = { transactions: [], deposits: [], watchlist: [], snapshots: [], prices: {} };
      } else if (moduleName === 'analyse') {
        newState.analyse = { cards: [], savedAnalyses: [] };
      } else if (moduleName === 'immobilier') {
        newState.immobilier = { immoScenarios: [{ ...defaultImmoInput }] };
        newState.volatile.activeImmoIndex = 0;
      }

      return newState;
    });
  };

  const importData = (jsonData) => {
    try {
      const parsed = JSON.parse(jsonData);
      setAppState(prev => ({ ...prev, ...parsed }));
      alert(i18n.t('messages.save_success'));
    } catch (e) {
      alert(i18n.t('messages.error_generic'));
    }
  };

  const formatCurrency = (value, options = {}) => {
    const { currentCurrency, showDecimals } = appState.settings;
    const val = parseFloat(value) || 0;

    const config = {
      style: options.noSymbol ? 'decimal' : 'currency',
      currency: currentCurrency || 'CAD',
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0,
      ...options
    };

    // Si on est en mode 'decimal', on retire la propriété currency pour éviter des conflits
    if (options.noSymbol) delete config.currency;

    return new Intl.NumberFormat(i18n.language, config).format(val);
  };

  return (
    <DataContext.Provider value={{ appState, setAppState, saveGlobalState, resetToFactory, resetModuleData, importData, formatCurrency, defaultScenario, defaultImmoInput }}>
      {children}
    </DataContext.Provider>
  );
};