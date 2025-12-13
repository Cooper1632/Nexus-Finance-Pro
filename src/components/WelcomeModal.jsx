import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useData } from '../context/DataContext';

// Import des icônes standard du projet
import {
    BookOpenIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    ArrowRightIcon,
    CheckIcon
} from '@heroicons/react/24/outline';

// --- STYLES CSS STANDARD ---
const styles = {
    overlay: {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)',
        zIndex: 5000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    content: {
        backgroundColor: 'white', width: '90%', maxWidth: '450px',
        borderRadius: '16px', padding: '30px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        textAlign: 'center', position: 'relative',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
    },
    iconContainer: {
        width: '70px', height: '70px', borderRadius: '50%',
        backgroundColor: '#EBF5FB', // Bleu très pâle
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px', color: '#3498DB'
    },
    iconContainerGreen: {
        width: '70px', height: '70px', borderRadius: '50%',
        backgroundColor: '#E8F8F5', // Vert très pâle
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px', color: '#2ECC71'
    },
    title: {
        fontSize: '1.4rem', fontWeight: '700', color: '#2C3E50',
        margin: '0 0 10px 0', lineHeight: '1.3'
    },
    brandName: {
        display: 'block',
        fontSize: '1.8rem', fontWeight: '900', color: '#3498DB',
        marginTop: '5px'
    },
    subtitle: {
        fontSize: '1rem', color: '#7F8C8D', margin: '0 0 25px 0',
        lineHeight: '1.5'
    },
    label: {
        display: 'block', textAlign: 'left', fontSize: '0.85rem',
        fontWeight: '700', color: '#95A5A6', marginBottom: '8px',
        textTransform: 'uppercase', letterSpacing: '0.5px'
    },
    // Style pour les listes déroulantes (Select)
    selectInput: {
        width: '100%', padding: '12px 15px', borderRadius: '8px',
        border: '1px solid #BDC3C7', backgroundColor: 'white',
        fontSize: '1rem', color: '#2C3E50', cursor: 'pointer',
        marginBottom: '20px', outline: 'none', appearance: 'none',
        backgroundImage: 'linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%)',
        backgroundPosition: 'calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)',
        backgroundSize: '5px 5px, 5px 5px',
        backgroundRepeat: 'no-repeat'
    },
    btnPrimary: {
        width: '100%', padding: '14px', backgroundColor: '#3498DB',
        color: 'white', border: 'none', borderRadius: '10px',
        fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)', marginTop: '10px'
    },
    btnSuccess: {
        width: '100%', padding: '14px', backgroundColor: '#2ECC71',
        color: 'white', border: 'none', borderRadius: '10px',
        fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        boxShadow: '0 4px 10px rgba(46, 204, 113, 0.3)', marginBottom: '10px'
    },
    btnSecondary: {
        width: '100%', padding: '12px', backgroundColor: 'transparent',
        color: '#7F8C8D', border: '1px solid #BDC3C7', borderRadius: '10px',
        fontWeight: '600', fontSize: '0.95rem', cursor: 'pointer'
    },
    noteBox: {
        backgroundColor: '#FEF9E7', border: '1px solid #F1C40F',
        borderRadius: '8px', padding: '12px', width: '100%',
        display: 'flex', alignItems: 'flex-start', gap: '10px',
        textAlign: 'left', fontSize: '0.85rem', color: '#7D6608', marginBottom: '20px'
    },
    checkboxContainer: {
        marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee',
        width: '100%', display: 'flex', justifyContent: 'center'
    },
    checkboxLabel: {
        display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
        fontSize: '0.9rem', color: '#7F8C8D', userSelect: 'none'
    },
    customCheckbox: (checked) => ({
        width: '20px', height: '20px', borderRadius: '4px',
        border: checked ? 'none' : '2px solid #BDC3C7',
        backgroundColor: checked ? '#3498DB' : 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'white'
    })
};

const WelcomeModal = ({ isOpen, onClose, dontShowAgain, setDontShowAgain }) => {
    const { t, i18n } = useTranslation();
    const { appState, saveGlobalState } = useData();

    // DÉTECTION INTELLIGENTE DE LA LANGUE DU NAVIGATEUR
    // Note: On utilise navigator.language qui retourne 'fr', 'fr-CA', 'en-US', etc.
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    const isFrenchBrowser = browserLang.toLowerCase().startsWith('fr');

    // TEXTES DYNAMIQUES SELON LE NAVIGATEUR (avant le choix de l'utilisateur)
    const welcomeTitle = isFrenchBrowser ? "Bienvenue dans" : "Welcome to";

    if (!isOpen) return null;

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const changeCurrency = (e) => {
        const newSettings = { ...appState.settings, currentCurrency: e.target.value };
        const newState = { ...appState, settings: newSettings };
        saveGlobalState(newState);
    };

    const currentCurrency = appState.settings?.currentCurrency || 'CAD';
    const isFr = i18n.language.startsWith('fr');
    const currentLang = i18n.language.startsWith('fr') ? 'fr' : (i18n.language.startsWith('es') ? 'es' : (i18n.language.startsWith('de') ? 'de' : (i18n.language.startsWith('pt') ? 'pt' : 'en')));

    return (
        <div style={styles.overlay}>
            <div style={{ ...styles.content, maxWidth: '800px', flexDirection: 'column', height: 'auto', maxHeight: '90vh', overflowY: 'auto' }} className="animate-fade-in">

                <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>

                    {/* COLONNE GAUCHE : ICONE + BIENVENUE */}
                    <div style={{ flex: 1, textAlign: 'left', minWidth: 'min(300px, 100%)' }}>
                        <div style={{ ...styles.iconContainer, marginBottom: '20px', alignSelf: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                            <GlobeAltIcon style={{ width: '40px' }} />
                        </div>
                        <h2 style={{ ...styles.title, fontSize: '1.8rem', marginBottom: '15px', textAlign: 'center' }}>
                            {t('onboarding.welcome_title')} <span style={{ color: 'var(--primary-color)' }}>Nexus Finance Pro!</span>
                        </h2>
                        <p style={{ ...styles.subtitle, marginBottom: '25px', fontSize: '1rem', textAlign: 'center' }}>
                            {t('onboarding.intro_text')}
                        </p>

                        <div style={styles.noteBox}>
                            <ComputerDesktopIcon style={{ width: '24px', flexShrink: 0 }} />
                            <span><Trans i18nKey="onboarding.device_recommendation" components={{ strong: <strong style={{ color: '#2C3E50', fontWeight: '800' }} /> }} /></span>
                        </div>
                    </div>

                    {/* COLONNE DROITE : CONFIGURATION */}
                    <div style={{ flex: 1, paddingLeft: '30px', borderLeft: '1px solid #eee', minWidth: 'min(300px, 100%)' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#34495E', marginTop: 0, marginBottom: '20px' }}>
                            {t('settings.other_options')}
                        </h3>

                        {/* Choix Langue */}
                        <label htmlFor="lang-select" style={styles.label}>{t('onboarding.language_select')}</label>
                        <select
                            id="lang-select"
                            value={currentLang}
                            onChange={changeLanguage}
                            style={{ ...styles.selectInput, padding: '10px 15px' }}
                        >
                            <option value="fr">🇫🇷 Français</option>
                            <option value="en">🇺🇸 English</option>
                            <option value="es">🇪🇸 Español</option>
                            <option value="de">🇩🇪 Deutsch</option>
                            <option value="pt">🇵🇹 Português</option>
                        </select>

                        {/* Choix Devise */}
                        <label htmlFor="curr-select" style={styles.label}>{t('settings.currency_label')}</label>
                        <select
                            id="curr-select"
                            value={currentCurrency}
                            onChange={changeCurrency}
                            style={{ ...styles.selectInput, padding: '10px 15px' }}
                        >
                            {['CAD', 'USD', 'EUR', 'GBP', 'CHF'].map(curr => (
                                <option key={curr} value={curr}>
                                    {curr} ({curr === 'EUR' ? '€' : (curr === 'GBP' ? '£' : (curr === 'CHF' ? 'Fr' : '$'))}) - {t(`settings.currencies.${curr}`)}
                                </option>
                            ))}
                        </select>

                        {/* Choix Largeur */}
                        <label htmlFor="width-select" style={styles.label}>{t('settings.width_label')}</label>
                        <select
                            id="width-select"
                            value={appState.settings?.maxWidth || '1400px'}
                            onChange={(e) => {
                                const newSettings = { ...appState.settings, maxWidth: e.target.value };
                                const newState = { ...appState, settings: newSettings };
                                saveGlobalState(newState);
                            }}
                            style={{ ...styles.selectInput, padding: '10px 15px' }}
                        >
                            <option value="1000px">{t('settings.width_compact')}</option>
                            <option value="1200px">{t('settings.width_standard')}</option>
                            <option value="1400px">{t('settings.width_large')}</option>
                            <option value="1600px">{t('settings.width_xl')}</option>
                            <option value="100%">{t('settings.width_full')}</option>
                        </select>
                    </div>
                </div>

                {/* BOUTONS D'ACTION (BAS) */}
                <div style={{ width: '100%', marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => onClose(true)} style={{ ...styles.btnSuccess, width: 'auto', flex: '1 1 250px', padding: '12px 30px', marginBottom: 0 }}>
                            <BookOpenIcon style={{ width: '22px' }} />
                            {t('onboarding.guide_btn')}
                        </button>

                        <button onClick={() => onClose(false)} style={{ ...styles.btnSecondary, width: 'auto', flex: '1 1 250px', padding: '12px 30px' }}>
                            {t('onboarding.explore_btn')}
                        </button>
                    </div>

                    <div style={styles.checkboxContainer}>
                        <label style={styles.checkboxLabel}>
                            <div style={styles.customCheckbox(dontShowAgain)}>
                                {dontShowAgain && <CheckIcon style={{ width: '14px' }} />}
                            </div>
                            <input
                                type="checkbox"
                                checked={dontShowAgain}
                                onChange={(e) => setDontShowAgain(e.target.checked)}
                                style={{ display: 'none' }}
                            />
                            {t('onboarding.dont_show_again')}
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WelcomeModal;