import React, { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import { useTranslation } from 'react-i18next';
import MiniCalculator from './MiniCalculator';
import {
    CalculatorIcon, PrinterIcon, ArrowDownTrayIcon, ArrowUpTrayIcon,
    MoonIcon, SunIcon, HomeIcon, ArrowPathRoundedSquareIcon, ArrowPathIcon,
    Cog6ToothIcon, XMarkIcon, ComputerDesktopIcon,
    AcademicCapIcon, BookOpenIcon, BuildingLibraryIcon, CurrencyDollarIcon,
    BeakerIcon, GlobeAltIcon, CheckIcon,
    // Icônes modules
    BanknotesIcon, ChartBarIcon, CreditCardIcon, PresentationChartLineIcon, ArrowTrendingUpIcon, Bars3Icon,
    ChevronDownIcon, ChevronUpIcon
} from '@heroicons/react/24/outline';

const modalStyles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    content: { backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '400px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', padding: '20px' },
    title: { margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-color)' },
    optionRow: { marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid var(--border-color)' },
    label: { marginBottom: '8px', fontWeight: '600', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '5px' },
    select: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', backgroundColor: 'var(--background-color)', color: 'var(--text-color)', fontSize: '1rem' },
    btnGroup: { display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' },
    btnCancel: { padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: 'var(--secondary-color-light)', color: 'var(--secondary-color)', fontWeight: 'bold' },
    btnConfirm: { padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', backgroundColor: 'var(--warning-color)', color: 'white', fontWeight: 'bold' }
};

const dropdownStyles = {
    container: { position: 'relative', display: 'inline-block' },
    menu: {
        position: 'absolute', top: '110%', right: 0,
        backgroundColor: 'var(--card-background)', border: '1px solid var(--border-color)',
        borderRadius: '8px', boxShadow: '0 5px 25px rgba(0,0,0,0.2)',
        width: '240px', zIndex: 1001, overflow: 'hidden', display: 'flex', flexDirection: 'column'
    },
    item: {
        padding: '12px 15px', border: 'none', background: 'transparent',
        textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
        color: 'var(--text-color)', fontSize: '0.9rem', borderBottom: '1px solid var(--border-color)',
        width: '100%'
    },
    backdrop: {
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        zIndex: 1000, cursor: 'default'
    }
};

function Header({ activeMode, setActiveMode, openUserGuide, openFinanceCourse, openRealEstateGuide }) {
    const { appState, saveGlobalState, resetToFactory, resetModuleData, importData } = useData();
    const { settings } = appState;
    const { t, i18n } = useTranslation();

    const fileInputRef = useRef(null);
    const [showCalc, setShowCalc] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [showEduMenu, setShowEduMenu] = useState(false);
    const [showResetModuleModal, setShowResetModuleModal] = useState(false);
    const [showResetSuccessModal, setShowResetSuccessModal] = useState(false);
    const [showResetChoiceModal, setShowResetChoiceModal] = useState(false);

    // État pour gérer le survol du bouton Dashboard
    const [dashboardHover, setDashboardHover] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showMobileGuides, setShowMobileGuides] = useState(false);

    const moduleTranslationKeys = {
        dashboard: 'header.dashboard',
        budget: 'header.budget',
        projections: 'header.calculators',
        perf: 'header.performance',
        plan: 'header.plan',
        remb: 'header.repayment',
        investissement: 'header.investment',
        analyse: 'header.analysis',
        immobilier: 'header.realestate'
    };

    const changeLanguage = (lang) => { i18n.changeLanguage(lang); };
    const toggleLanguage = () => { const currentLang = i18n.language || 'en'; const newLang = currentLang.startsWith('fr') ? 'en' : 'fr'; changeLanguage(newLang); };
    const handleCurrencyChange = (e) => { const newSettings = { ...settings, currentCurrency: e.target.value }; const newState = { ...appState, settings: newSettings }; saveGlobalState(newState); };
    const handleWidthChange = (e) => { const newSettings = { ...settings, maxWidth: e.target.value }; const newState = { ...appState, settings: newSettings }; saveGlobalState(newState); };
    const toggleTheme = () => { const newTheme = settings.theme === 'light' ? 'dark' : 'light'; const newSettings = { ...settings, theme: newTheme }; const newState = { ...appState, settings: newSettings }; saveGlobalState(newState); document.body.dataset.theme = newTheme; };
    const changeTheme = (e) => { const newTheme = e.target.value; const newSettings = { ...settings, theme: newTheme }; const newState = { ...appState, settings: newSettings }; saveGlobalState(newState); document.body.dataset.theme = newTheme; };
    const toggleDecimals = () => { const newSettings = { ...settings, showDecimals: !settings.showDecimals }; const newState = { ...appState, settings: newSettings }; saveGlobalState(newState); };

    const handleSave = () => {
        try {
            const dataStr = JSON.stringify(appState, null, 2);
            const blob = new Blob([dataStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            const date = new Date().toISOString().split('T')[0];
            link.download = `nexus_finance_backup_${date}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) { alert("Error: " + error.message); }
    };

    const handleFactoryReset = () => { if (window.confirm(t('header.reset_confirm'))) { resetToFactory(); } };
    const handleModuleReset = () => { if (activeMode === 'dashboard') return; setShowResetModuleModal(true); };
    const confirmModuleReset = () => { resetModuleData(activeMode); setShowResetModuleModal(false); };
    const handleImportClick = () => { if (fileInputRef.current) fileInputRef.current.click(); };
    const handleFileChange = (e) => { const file = e.target.files[0]; if (file) importData(file); e.target.value = null; };

    const getButtonClass = (mode) => { return activeMode === mode ? 'active' : ''; };

    return (
        <div className="header" style={{ position: 'relative' }}>
            <input id="import-file-input" name="import-file-input" type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".json" onChange={handleFileChange} />

            <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ height: '55px', width: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/pwa-192x192.png" alt="Nexus Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
                </div>
                <div><h1 style={{ margin: 0, fontSize: '2rem', lineHeight: '1.2' }}>{t('header.title')}</h1><p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>{t('header.subtitle')}</p></div>
            </div>

            <div className="header-right">

                {/* BOUTON DASHBOARD AVEC EFFET HOVER INVERSÉ */}
                <button
                    className={`icon-btn desktop-only ${activeMode === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveMode('dashboard')}
                    onMouseEnter={() => setDashboardHover(true)}
                    onMouseLeave={() => setDashboardHover(false)}
                    title={t('header.dashboard')}
                    style={{
                        borderRadius: '6px',
                        width: 'auto',
                        padding: '8px 15px',
                        display: 'flex',
                        gap: '8px',
                        fontWeight: 'bold',
                        marginRight: '10px',
                        transition: 'all 0.2s ease',
                        // Logique de couleur : Si survolé = NOIR/BLANC, sinon couleurs normales
                        backgroundColor: dashboardHover ? '#000000' : (activeMode === 'dashboard' ? 'var(--dashboard-color)' : 'var(--card-background)'),
                        color: dashboardHover ? '#FFFFFF' : (activeMode === 'dashboard' && settings.theme === 'light' ? '#333' : 'var(--text-color)'),
                        border: dashboardHover ? '1px solid #000000' : (activeMode === 'dashboard' ? '1px solid var(--dashboard-border)' : '1px solid var(--border-color)')
                    }}
                >
                    <HomeIcon style={{ width: '20px' }} /><span>{t('header.dashboard')}</span>
                </button>

                <div className="header-controls">
                    <div style={dropdownStyles.container}>
                        <button className="icon-btn" onClick={() => setShowEduMenu(!showEduMenu)} title={t('header.help_menu')} style={{ color: 'var(--info-color)', borderColor: 'var(--info-color)' }}><AcademicCapIcon style={{ width: '22px' }} /></button>
                        {showEduMenu && (
                            <>
                                <div style={dropdownStyles.backdrop} onClick={() => setShowEduMenu(false)}></div>
                                <div style={dropdownStyles.menu}>
                                    <button style={dropdownStyles.item} onClick={() => { openUserGuide(); setShowEduMenu(false); }}><BookOpenIcon style={{ width: '18px' }} /> {t('header.user_guide')}</button>
                                    <button style={dropdownStyles.item} onClick={() => { openFinanceCourse(); setShowEduMenu(false); }}><AcademicCapIcon style={{ width: '18px' }} /> {t('header.finance_course')}</button>
                                    <button style={{ ...dropdownStyles.item, borderBottom: 'none' }} onClick={() => { openRealEstateGuide(); setShowEduMenu(false); }}><BuildingLibraryIcon style={{ width: '18px' }} /> {t('header.realestate_guide')}</button>
                                </div>
                            </>
                        )}
                    </div>
                    <button className="icon-btn" onClick={() => setShowSettingsModal(true)} title={t('header.settings')}><Cog6ToothIcon style={{ width: '22px' }} /></button>
                    <button className="icon-btn" onClick={() => setShowCalc(!showCalc)} title={t('header.calculator')}><CalculatorIcon style={{ width: '22px' }} /></button>
                    {/* THEME BUTTON REMOVED FROM HERE */}
                    <button className="icon-btn" onClick={() => window.print()} title={t('header.print')}><PrinterIcon style={{ width: '22px' }} /></button>

                    {/* COMBINED RESET BUTTON */}
                    <button className="icon-btn" onClick={() => setShowResetChoiceModal(true)} title={t('header.reset_menu')} style={{ color: 'var(--warning-color)', borderColor: 'var(--border-color)' }}>
                        <ArrowPathRoundedSquareIcon style={{ width: '22px' }} />
                    </button>
                    <div style={{ width: '1px', height: '25px', background: 'var(--border-color)', margin: '0 5px' }}></div>
                    <button className="btn-info desktop-only" onClick={handleImportClick} title={t('header.import')} style={{ padding: '8px 12px' }}><ArrowUpTrayIcon style={{ width: '20px' }} /></button>
                    <button className="btn-success desktop-only" onClick={handleSave} title={t('header.save')} style={{ padding: '8px 12px' }}><ArrowDownTrayIcon style={{ width: '20px' }} /></button>
                </div>

                {/* HAMBURGER MENU (MOBILE ONLY) */}
                <button
                    className="icon-btn mobile-only"
                    onClick={() => setIsMobileMenuOpen(true)}
                    style={{ marginLeft: '10px' }}
                >
                    <Bars3Icon style={{ width: '24px' }} />
                </button>
            </div>

            {/* GRADIENT SEPARATOR LINE (Moved Up to Top) */}
            <div className="rainbow-separator" style={{ position: 'absolute', top: 0, left: 0, width: '100%', pointerEvents: 'none' }}></div>

            <div className="header-center" style={{ width: '100%', overflowX: 'auto', paddingBottom: '5px' }}>
                <div className="mode-buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%', flexWrap: 'nowrap' }}>

                    {/* 1. BUDGET */}
                    <button id="mode-budget-btn" className={getButtonClass('budget')} onClick={() => setActiveMode('budget')}>
                        <CurrencyDollarIcon /> <span>{t('header.budget')}</span>
                    </button>
                    <div className="nav-separator"></div>

                    {/* 2. PLAN (DETTES) */}
                    <button id="mode-plan-btn" className={getButtonClass('plan')} onClick={() => setActiveMode('plan')}>
                        <CreditCardIcon /> <span>{t('header.plan')}</span>
                    </button>
                    <div className="nav-separator"></div>

                    {/* 3. REMBOURSEMENT */}
                    <button id="mode-remb-btn" className={getButtonClass('remb')} onClick={() => setActiveMode('remb')}>
                        <BanknotesIcon /> <span>{t('header.repayment')}</span>
                    </button>
                    <div className="nav-separator"></div>

                    {/* 4. INVESTISSEMENT */}
                    <button id="mode-investissement-btn" className={getButtonClass('investissement')} onClick={() => setActiveMode('investissement')}>
                        <PresentationChartLineIcon /> <span>{t('header.investment')}</span>
                    </button>
                    <div className="nav-separator"></div>

                    {/* 5. ANALYSE ACTION */}
                    <button id="mode-analyse-btn" className={getButtonClass('analyse')} onClick={() => setActiveMode('analyse')}>
                        <ComputerDesktopIcon /> <span>{t('header.analysis')}</span>
                    </button>
                    <div className="nav-separator"></div>

                    {/* 6. IMMOBILIER */}
                    <button id="mode-immobilier-btn" className={getButtonClass('immobilier')} onClick={() => setActiveMode('immobilier')}>
                        <BuildingLibraryIcon /> <span>{t('header.realestate')}</span>
                    </button>
                    <div className="nav-separator"></div>

                    {/* 7. PERFORMANCE */}
                    <button id="mode-perf-btn" className={getButtonClass('perf')} onClick={() => setActiveMode('perf')}>
                        <ChartBarIcon /> <span>{t('header.performance')}</span>
                    </button>
                    <div className="nav-separator"></div>

                    {/* 8. PROJECTIONS (CALCULATEURS) */}
                    <button id="mode-projections-btn" className={getButtonClass('projections')} onClick={() => setActiveMode('projections')}>
                        <ArrowTrendingUpIcon /> <span>{t('header.calculators')}</span>
                    </button>

                </div>
            </div>



            {showCalc && <MiniCalculator onClose={() => setShowCalc(false)} />}

            {/* SETTINGS MODAL */}
            {
                showSettingsModal && (
                    <div style={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && setShowSettingsModal(false)}>
                        <div style={modalStyles.content}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}><Cog6ToothIcon style={{ width: '24px' }} /> {t('header.settings')}</h3>
                                <button onClick={() => setShowSettingsModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '24px' }} /></button>
                            </div>
                            <div style={modalStyles.optionRow}>
                                <label htmlFor="setting-lang" style={modalStyles.label}><GlobeAltIcon style={{ width: '18px' }} /> {t('settings.language')}</label>
                                <select id="setting-lang" name="setting-lang" value={i18n.language?.startsWith('fr') ? 'fr' : 'en'} onChange={(e) => changeLanguage(e.target.value)} style={modalStyles.select}>
                                    <option value="fr">🇫🇷 Français</option>
                                    <option value="en">🇺🇸 English</option>
                                </select>
                            </div>
                            <div style={modalStyles.optionRow}>
                                <label htmlFor="setting-width" style={modalStyles.label}><ComputerDesktopIcon style={{ width: '18px' }} /> {t('settings.width_label')}</label>
                                <select id="setting-width" name="setting-width" value={settings.maxWidth || '1400px'} onChange={handleWidthChange} style={modalStyles.select}>
                                    <option value="1000px">{t('settings.width_compact')}</option>
                                    <option value="1200px">{t('settings.width_standard')}</option>
                                    <option value="1400px">{t('settings.width_large')}</option>
                                    <option value="1600px">{t('settings.width_xl')}</option>
                                    <option value="100%">{t('settings.width_full')}</option>
                                </select>
                            </div>

                            {/* THEME SELECTION ADDED HERE */}
                            <div style={modalStyles.optionRow}>
                                <label htmlFor="setting-theme" style={modalStyles.label}>
                                    {settings.theme === 'light' ? <SunIcon style={{ width: '18px' }} /> : <MoonIcon style={{ width: '18px' }} />}
                                    {t('header.theme')}
                                </label>
                                <select id="setting-theme" name="setting-theme" value={settings.theme || 'light'} onChange={changeTheme} style={modalStyles.select}>
                                    <option value="light">☀️ {t('settings.theme_light')}</option>
                                    <option value="dark">🌙 {t('settings.theme_dark')}</option>
                                </select>
                            </div>

                            <div style={modalStyles.optionRow}>
                                <label htmlFor="setting-currency" style={modalStyles.label}><CurrencyDollarIcon style={{ width: '18px' }} /> {t('settings.currency_label')}</label>
                                <select id="setting-currency" name="setting-currency" value={settings.currentCurrency || 'CAD'} onChange={handleCurrencyChange} style={modalStyles.select}>
                                    <option value="CAD">CAD ($) - {t('settings.currencies.CAD')}</option>
                                    <option value="USD">USD ($) - {t('settings.currencies.USD')}</option>
                                    <option value="EUR">EUR (€) - {t('settings.currencies.EUR')}</option>
                                    <option value="GBP">GBP (£) - {t('settings.currencies.GBP')}</option>
                                    <option value="CHF">CHF (Fr) - {t('settings.currencies.CHF')}</option>
                                </select>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <div style={modalStyles.label}><span style={{ fontWeight: 'bold', fontSize: '1.1rem', marginRight: '5px' }}>.00</span> {t('settings.decimals_label')}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                    <input type="checkbox" id="modal-decimal-toggle" name="modal-decimal-toggle" checked={settings.showDecimals || false} onChange={toggleDecimals} style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                                    <label htmlFor="modal-decimal-toggle" style={{ cursor: 'pointer', color: 'var(--text-color)' }}>{settings.showDecimals ? t('settings.decimals_on') : t('settings.decimals_off')}</label>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', marginTop: '5px', fontStyle: 'italic' }}>{t('settings.decimals_note')}</p>
                            </div>
                            <div style={{ marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                                <div style={modalStyles.label}><span style={{ marginRight: '5px' }}>ℹ️</span> {t('settings.other_options')}</div>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('nexus_has_seen_welcome_v2');
                                        setShowResetSuccessModal(true); // REPLACED ALERT WITH MODAL STATE
                                    }}
                                    style={{ ...modalStyles.btnSecondary, marginTop: '10px', fontSize: '0.85rem' }}
                                >
                                    {t('settings.reset_welcome')}
                                </button>
                            </div>
                            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                                <button onClick={() => setShowSettingsModal(false)} style={{ padding: '8px 20px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>{t('common.close')}</button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* CUSTOM SUCCESS MODAL */}
            {
                showResetSuccessModal && (
                    <div style={{ ...modalStyles.overlay, zIndex: 2100 }} onClick={(e) => e.target === e.currentTarget && setShowResetSuccessModal(false)}>
                        <div style={{ ...modalStyles.content, maxWidth: '350px', textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#D5F5E3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                                <CheckIcon style={{ width: '30px', color: '#2ECC71' }} />
                            </div>
                            <h3 style={{ color: 'var(--text-color)', marginBottom: '10px' }}>{t('common.success')}</h3>
                            <p style={{ color: 'var(--secondary-color)', marginBottom: '25px', lineHeight: '1.5' }}>
                                {t('settings.welcome_reset_success')}
                            </p>
                            <button
                                onClick={() => setShowResetSuccessModal(false)}
                                style={{
                                    padding: '10px 30px', background: '#2ECC71', color: 'white',
                                    border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer'
                                }}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )
            }

            {/* RESET MODULE MODAL */}
            {
                showResetModuleModal && (
                    <div style={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && setShowResetModuleModal(false)}>
                        <div style={modalStyles.content}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--warning-color)' }}><ArrowPathIcon style={{ width: '24px' }} /> {t('header.reset_module')}</h3>
                                <button onClick={() => setShowResetModuleModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '24px' }} /></button>
                            </div>
                            <p style={{ color: 'var(--text-color)', marginBottom: '20px', lineHeight: '1.5' }}>{t('header.reset_module_confirm', { module: t(moduleTranslationKeys[activeMode] || activeMode) })}</p>
                            <div style={modalStyles.btnGroup}>
                                <button onClick={() => setShowResetModuleModal(false)} style={modalStyles.btnCancel}>{t('common.cancel')}</button>
                                <button onClick={confirmModuleReset} style={modalStyles.btnConfirm}>{t('common.confirm')}</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {/* RESET CHOICE MODAL (COMBINED) */}
            {
                showResetChoiceModal && (
                    <div style={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && setShowResetChoiceModal(false)}>
                        <div style={modalStyles.content}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowPathRoundedSquareIcon style={{ width: '24px' }} /> {t('header.reset_menu') || 'Options de Réinitialisation'}</h3>
                                <button onClick={() => setShowResetChoiceModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '24px' }} /></button>
                            </div>
                            <p style={{ color: 'var(--text-color)', marginBottom: '20px' }}>{t('header.reset_choice_prompt') || 'Que souhaitez-vous réinitialiser ?'}</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {activeMode !== 'dashboard' && (
                                    <button
                                        onClick={() => { setShowResetChoiceModal(false); handleModuleReset(); }}
                                        style={{ ...modalStyles.btnCancel, backgroundColor: 'transparent', border: '1px solid var(--warning-color)', color: 'var(--warning-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                                    >
                                        <ArrowPathIcon style={{ width: '20px' }} />
                                        {t('header.reset_module')} ({t(moduleTranslationKeys[activeMode] || activeMode)})
                                    </button>
                                )}

                                <button
                                    onClick={() => { setShowResetChoiceModal(false); handleFactoryReset(); }}
                                    style={{ ...modalStyles.btnConfirm, backgroundColor: 'var(--danger-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                                >
                                    <ArrowPathRoundedSquareIcon style={{ width: '20px' }} />
                                    {t('header.factory_reset')}
                                </button>

                                <button onClick={() => setShowResetChoiceModal(false)} style={{ marginTop: '10px', background: 'transparent', border: 'none', textDecoration: 'underline', cursor: 'pointer', color: 'var(--secondary-color)' }}>
                                    {t('common.cancel')}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* MOBILE MENU DRAWER */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 3000, display: 'flex',
                    justifyContent: 'flex-end', // Fix: Position on the Right
                    animation: 'fadeIn 0.2s'
                }} onClick={() => setIsMobileMenuOpen(false)}>
                    <div style={{
                        width: '85%', maxWidth: '320px', height: '100%',
                        backgroundColor: 'var(--card-background)',
                        padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px',
                        boxShadow: '-2px 0 15px rgba(0,0,0,0.3)', // Fix: Shadow on left
                        overflowY: 'auto',
                        animation: 'slideInRight 0.3s' // Fix: Animate from Right
                    }} onClick={e => e.stopPropagation()}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid var(--border-color)' }}>
                            <h3 style={{ margin: 0 }}>Menu</h3>
                            <button onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <XMarkIcon style={{ width: '28px', color: 'var(--text-color)' }} />
                            </button>
                        </div>

                        {/* Mobile Import/Export Actions */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                            <button className="btn-info" onClick={() => { handleImportClick(); setIsMobileMenuOpen(false); }} title={t('header.import')} style={{ padding: '10px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                                <ArrowUpTrayIcon style={{ width: '20px' }} /> {t('header.import')}
                            </button>
                            <button className="btn-success" onClick={() => { handleSave(); setIsMobileMenuOpen(false); }} title={t('header.save')} style={{ padding: '10px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                                <ArrowDownTrayIcon style={{ width: '20px' }} /> {t('header.save')}
                            </button>
                        </div>

                        <button className={getButtonClass('dashboard')} onClick={() => { setActiveMode('dashboard'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'dashboard' ? '#000000' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'dashboard' ? '#FFFFFF' : 'var(--text-color)', fontWeight: activeMode === 'dashboard' ? 'bold' : 'normal', borderRadius: '8px' }}>
                            <HomeIcon style={{ width: '22px', color: activeMode === 'dashboard' ? '#FFFFFF' : 'var(--text-color)' }} /> {t('header.dashboard')}
                        </button>

                        <button className={getButtonClass('budget')} onClick={() => { setActiveMode('budget'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'budget' ? 'rgba(46, 204, 113, 0.1)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'budget' ? 'var(--budget-color)' : 'var(--text-color)', fontWeight: activeMode === 'budget' ? 'bold' : 'normal' }}>
                            <CurrencyDollarIcon style={{ width: '22px' }} /> {t('header.budget')}
                        </button>

                        <button className={getButtonClass('plan')} onClick={() => { setActiveMode('plan'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'plan' ? 'rgba(155, 89, 182, 0.1)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'plan' ? 'var(--plan-color)' : 'var(--text-color)', fontWeight: activeMode === 'plan' ? 'bold' : 'normal' }}>
                            <CreditCardIcon style={{ width: '22px' }} /> {t('header.plan')}
                        </button>

                        <button className={getButtonClass('remb')} onClick={() => { setActiveMode('remb'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'remb' ? 'rgba(52, 152, 219, 0.1)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'remb' ? 'var(--remb-color)' : 'var(--text-color)', fontWeight: activeMode === 'remb' ? 'bold' : 'normal' }}>
                            <BanknotesIcon style={{ width: '22px' }} /> {t('header.repayment')}
                        </button>

                        <button className={getButtonClass('investissement')} onClick={() => { setActiveMode('investissement'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'investissement' ? 'rgba(46, 204, 113, 0.2)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'investissement' ? '#000000' : 'var(--text-color)', fontWeight: activeMode === 'investissement' ? 'bold' : 'normal', borderRadius: '8px' }}>
                            <PresentationChartLineIcon style={{ width: '22px', color: activeMode === 'investissement' ? '#000000' : 'var(--text-color)' }} /> {t('header.investment')}
                        </button>

                        <button className={getButtonClass('analyse')} onClick={() => { setActiveMode('analyse'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'analyse' ? 'rgba(142, 68, 173, 0.1)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'analyse' ? 'var(--analyse-color)' : 'var(--text-color)', fontWeight: activeMode === 'analyse' ? 'bold' : 'normal' }}>
                            <ComputerDesktopIcon style={{ width: '22px' }} /> {t('header.analysis')}
                        </button>

                        <button className={getButtonClass('immobilier')} onClick={() => { setActiveMode('immobilier'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'immobilier' ? 'rgba(231, 76, 60, 0.1)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'immobilier' ? 'var(--immobilier-color)' : 'var(--text-color)', fontWeight: activeMode === 'immobilier' ? 'bold' : 'normal' }}>
                            <BuildingLibraryIcon style={{ width: '22px' }} /> {t('header.realestate')}
                        </button>

                        <button className={getButtonClass('perf')} onClick={() => { setActiveMode('perf'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'perf' ? 'rgba(243, 156, 18, 0.1)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'perf' ? 'var(--perf-color)' : 'var(--text-color)', fontWeight: activeMode === 'perf' ? 'bold' : 'normal' }}>
                            <ChartBarIcon style={{ width: '22px' }} /> {t('header.performance')}
                        </button>

                        <button className={getButtonClass('projections')} onClick={() => { setActiveMode('projections'); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '12px', border: 'none', background: activeMode === 'projections' ? 'rgba(26, 188, 156, 0.1)' : 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '1rem', color: activeMode === 'projections' ? 'var(--proj-color)' : 'var(--text-color)', fontWeight: activeMode === 'projections' ? 'bold' : 'normal' }}>
                            <ArrowTrendingUpIcon style={{ width: '22px' }} /> {t('header.calculators')}
                        </button>

                        <div style={{ borderTop: '1px solid var(--border-color)', margin: '10px 0' }}></div>

                        <div style={{ marginLeft: '10px' }}>
                            <button
                                onClick={() => setShowMobileGuides(!showMobileGuides)}
                                style={{ width: '100%', justifyContent: 'space-between', padding: '12px 10px', border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', fontSize: '1rem', color: 'var(--text-color)', fontWeight: 'bold' }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><AcademicCapIcon style={{ width: '22px', color: 'var(--info-color)' }} /> {t('header.help_menu')}</span>
                                {showMobileGuides ? <ChevronUpIcon style={{ width: '20px' }} /> : <ChevronDownIcon style={{ width: '20px' }} />}
                            </button>

                            {showMobileGuides && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '15px', animation: 'fadeIn 0.2s' }}>
                                    <button onClick={() => { openUserGuide(); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '10px', border: 'none', background: 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-color)' }}>
                                        <BookOpenIcon style={{ width: '18px', color: 'var(--info-color)' }} /> {t('header.user_guide')}
                                    </button>
                                    <button onClick={() => { openFinanceCourse(); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '10px', border: 'none', background: 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-color)' }}>
                                        <AcademicCapIcon style={{ width: '18px', color: 'var(--success-color)' }} /> {t('header.finance_course')}
                                    </button>
                                    <button onClick={() => { openRealEstateGuide(); setIsMobileMenuOpen(false); }} style={{ width: '100%', justifyContent: 'flex-start', padding: '10px', border: 'none', background: 'transparent', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-color)' }}>
                                        <BuildingLibraryIcon style={{ width: '18px', color: 'var(--warning-color)' }} /> {t('header.realestate_guide')}
                                    </button>
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                            <button className="icon-btn" onClick={() => { setShowResetChoiceModal(true); setIsMobileMenuOpen(false); }} style={{ width: '100%', color: 'var(--warning-color)' }}>
                                <ArrowPathRoundedSquareIcon style={{ width: '22px' }} />
                            </button>
                            <button className="icon-btn" onClick={() => { setShowSettingsModal(true); setIsMobileMenuOpen(false); }} style={{ width: '100%' }}>
                                <Cog6ToothIcon style={{ width: '22px' }} />
                            </button>
                            <button className="icon-btn" onClick={() => { setShowCalc(!showCalc); setIsMobileMenuOpen(false); }} style={{ width: '100%' }}>
                                <CalculatorIcon style={{ width: '22px' }} />
                            </button>
                            <button className="icon-btn" onClick={() => { window.print(); setIsMobileMenuOpen(false); }} style={{ width: '100%' }}>
                                <PrinterIcon style={{ width: '22px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default Header;