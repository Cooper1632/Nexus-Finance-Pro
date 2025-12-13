import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Budget from './components/Budget';
import Investissement from './components/Investissement';
import Projections from './components/Projections';
import Performance from './components/Performance';
import Plan from './components/Plan';
import Remboursement from './components/Remboursement';
import Analyse from './components/Analyse';
import Immobilier from './components/Immobilier';

// IMPORTATION DES GUIDES
import UserGuide from './components/UserGuide';
import FinanceCourse from './components/FinanceCourse';
import RealEstateGuide from './components/RealEstateGuide';
// IMPORTATION DU NOUVEAU MODAL
import WelcomeModal from './components/WelcomeModal';

import { DataProvider, useData } from './context/DataContext';

const AppContent = () => {
  const [activeMode, setActiveMode] = useState('dashboard');
  const { appState } = useData();
  const maxWidth = appState.settings?.maxWidth || '100%';

  // ÉTAT POUR LES GUIDES
  const [showUserGuide, setShowUserGuide] = useState(false);
  const [showFinanceCourse, setShowFinanceCourse] = useState(false);
  const [showRealEstateGuide, setShowRealEstateGuide] = useState(false);

  // ÉTAT POUR LE POP-UP DE BIENVENUE
  const [showWelcome, setShowWelcome] = useState(false);
  const [dontShowWelcomeAgain, setDontShowWelcomeAgain] = useState(false);

  // --- EFFET POUR GÉRER LE PREMIER CHARGEMENT ---
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('nexus_has_seen_welcome_v2');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => setShowWelcome(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseWelcome = (shouldOpenGuide) => {
    if (dontShowWelcomeAgain) {
      localStorage.setItem('nexus_has_seen_welcome_v2', 'true');
    }
    setShowWelcome(false);
    if (shouldOpenGuide === true) {
      setTimeout(() => setShowUserGuide(true), 300); // Petit délai pour laisser le modal se fermer
    }
  };

  const handleOpenGuideFromWelcome = () => {
    handleCloseWelcome();
    setShowUserGuide(true);
  };

  // --- RENDER DU CONTENU PRINCIPAL ---
  const renderContent = () => {
    // DEBUG CURRENCY
    if (activeMode === 'perf') {
      console.log('App.jsx - Currency passed to Performance:', appState.settings?.currentCurrency);
    }
    switch (activeMode) {
      case 'dashboard': return <Dashboard setActiveMode={setActiveMode} />;
      case 'budget': return <Budget />;
      case 'investissement': return <Investissement />;
      case 'projections': return <Projections />;
      case 'perf': return <Performance currency={appState.settings?.currentCurrency || 'CAD'} />;
      case 'plan': return <Plan />;
      case 'remb': return <Remboursement />;
      case 'analyse': return <Analyse />;
      case 'immobilier': return <Immobilier />;
      default: return <Dashboard setActiveMode={setActiveMode} />;
    }
  };

  // C'EST ICI QUE LA MAGIE OPÈRE POUR LE RESET :
  // On récupère le "numéro de série" du reset. S'il change, le module se recharge.
  const resetTrigger = appState.volatile?.resetTrigger || 0;

  return (
    <div className="App" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      <Header
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        openUserGuide={() => setShowUserGuide(true)}
        openFinanceCourse={() => setShowFinanceCourse(true)}
        openRealEstateGuide={() => setShowRealEstateGuide(true)}
      />

      {/* GRADIENT SEPARATOR LINE */}


      <div
        className="app-container-wrapper"
        style={{
          '--user-max-width': maxWidth,
          maxWidth: 'var(--user-max-width)', // Use variable to allow CSS override
          width: '100%',
          margin: '0 auto',
          flex: 1,
          padding: '0 20px 40px 20px'
        }}>
        <main className="main-content">
          {/* LA CLÉ (KEY) CI-DESSOUS FORCE LA MISE À JOUR.
                   Elle combine le nom du module (activeMode) ET le signal de reset (resetTrigger).
                */}
          <div className="module-wrapper fade-in" key={`${activeMode}-${resetTrigger}`}>
            {renderContent()}
          </div>
        </main>
      </div>

      {/* GUIDES */}
      <UserGuide
        isOpen={showUserGuide}
        onClose={() => setShowUserGuide(false)}
        onOpenRealEstateGuide={() => { setShowUserGuide(false); setTimeout(() => setShowRealEstateGuide(true), 300); }}
        onOpenFinanceCourse={() => { setShowUserGuide(false); setTimeout(() => setShowFinanceCourse(true), 300); }}
      />
      <FinanceCourse isOpen={showFinanceCourse} onClose={() => setShowFinanceCourse(false)} />
      <RealEstateGuide isOpen={showRealEstateGuide} onClose={() => setShowRealEstateGuide(false)} />

      {/* WELCOME MODAL */}
      <WelcomeModal
        isOpen={showWelcome}
        onClose={handleCloseWelcome}
        dontShowAgain={dontShowWelcomeAgain}
        setDontShowAgain={setDontShowWelcomeAgain}
      />

    </div>
  );
};

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;