import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../context/DataContext';
import {
    XMarkIcon, BookOpenIcon, ChevronDownIcon, ChevronRightIcon,
    ArrowTrendingUpIcon, LinkIcon,
    ArrowTrendingDownIcon, CurrencyDollarIcon, BanknotesIcon,
    BuildingLibraryIcon, ScaleIcon, PresentationChartLineIcon,
    ExclamationTriangleIcon, LightBulbIcon, CheckCircleIcon,
    AcademicCapIcon, ChartBarIcon, CalculatorIcon, FireIcon,
    UserGroupIcon, ArrowsRightLeftIcon, HomeIcon, ListBulletIcon
} from '@heroicons/react/24/outline';

import { financeCourseData as frData, comparisonRatios as frRatios } from '../data/locales/fr/financeCourseData';
import { financeCourseData as enData, comparisonRatios as enRatios } from '../data/locales/en/financeCourseData';
import { financeCourseData as esData, comparisonRatios as esRatios } from '../data/locales/es/financeCourseData';
import { financeCourseData as deData, comparisonRatios as deRatios } from '../data/locales/de/financeCourseData';
import { financeCourseData as ptData, comparisonRatios as ptRatios } from '../data/locales/pt/financeCourseData';

// Styles
const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    container: { backgroundColor: 'var(--card-background)', width: '95%', maxWidth: '1400px', height: '90vh', borderRadius: '16px', display: 'flex', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.35)', position: 'relative' },

    sidebar: { width: '300px', backgroundColor: 'var(--background-color)', borderRight: '1px solid var(--border-color)', overflowY: 'auto', padding: '25px 15px', display: 'flex', flexDirection: 'column' },
    content: { flex: 1, padding: '50px 80px', overflowY: 'auto', scrollBehavior: 'smooth', color: 'var(--text-color)', fontFamily: '"Segoe UI", sans-serif', lineHeight: '1.8' },

    closeBtn: { position: 'absolute', top: '30px', right: '30px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-color)', zIndex: 10, opacity: 0.7, transition: 'opacity 0.2s' },

    partTitle: { fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--secondary-color)', fontWeight: 'bold', marginTop: '25px', marginBottom: '10px', paddingLeft: '10px', letterSpacing: '1px' },
    navItem: (active) => ({ padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.92rem', fontWeight: active ? '600' : '400', color: active ? 'white' : 'var(--text-color)', backgroundColor: active ? 'var(--primary-color)' : 'transparent', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.15s ease-in-out', marginBottom: '4px' }),

    // Typographie Contenu
    mainTitle: { fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '10px', marginTop: '0', letterSpacing: '-0.5px' },
    moduleSubTitle: { fontSize: '1.2rem', color: 'var(--secondary-color)', marginTop: '-5px', marginBottom: '40px', fontWeight: '400' },

    chapterTitle: { fontSize: '2rem', color: 'var(--dark-color)', marginTop: '80px', marginBottom: '30px', paddingBottom: '15px', borderBottom: '2px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '15px' },
    sectionTitle: { fontSize: '1.4rem', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '15px', fontWeight: 'bold' },

    paragraph: { fontSize: '1.05rem', marginBottom: '20px', color: 'var(--text-color)', textAlign: 'justify' },
    ul: { paddingLeft: '20px', marginBottom: '25px', listStyle: 'none' },
    li: { marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.05rem' },

    // Boîtes Pédagogiques
    box: (type) => ({
        padding: '25px', borderRadius: '12px', margin: '30px 0', fontSize: '1rem',
        backgroundColor: type === 'info' ? 'rgba(52, 152, 219, 0.08)' : (type === 'warning' ? 'rgba(231, 76, 60, 0.08)' : (type === 'success' ? 'rgba(46, 204, 113, 0.08)' : 'rgba(142, 68, 173, 0.08)')),
        borderLeft: `5px solid ${type === 'info' ? '#3498DB' : (type === 'warning' ? '#E74C3C' : (type === 'success' ? '#2ECC71' : '#9B59B6'))}`,
    }),

    code: { backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.9em', color: 'var(--primary-color)' },

    // Grid (Glossaire)
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' },
    gridItem: { backgroundColor: 'var(--card-background)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
    gridTitle: { fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '5px', display: 'block' },
    gridText: { fontSize: '0.95rem', color: 'var(--text-color)', margin: 0 }
};

export default function FinanceCourse({ isOpen, onClose }) {
    const { t, i18n } = useTranslation();
    const { appState } = useData();
    const currency = appState.settings?.currentCurrency || 'CAD';

    const [activeSection, setActiveSection] = useState('intro');
    const [showSidebar, setShowSidebar] = useState(true);

    // Data Selection
    const data = useMemo(() => {
        if (i18n.language.startsWith('fr')) return frData;
        if (i18n.language.startsWith('es')) return esData;
        if (i18n.language.startsWith('de')) return deData;
        if (i18n.language.startsWith('pt')) return ptData;
        return enData;
    }, [i18n.language]);

    const comparisonRatios = useMemo(() => {
        if (i18n.language.startsWith('fr')) return frRatios;
        if (i18n.language.startsWith('es')) return esRatios;
        if (i18n.language.startsWith('de')) return deRatios;
        if (i18n.language.startsWith('pt')) return ptRatios;
        return enRatios;
    }, [i18n.language]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    if (!isOpen) return null;

    // Helper to render content items
    const renderContentItem = (item, idx) => {
        if (item.type === 'p') {
            return <p key={idx} style={styles.paragraph} dangerouslySetInnerHTML={{ __html: item.text }} />;
        }
        if (item.type === 'ul') {
            return (
                <ul key={idx} style={styles.ul}>
                    {item.items.map((li, i) => (
                        <li key={i} style={styles.li}>
                            <ChevronRightIcon style={{ width: '18px', flexShrink: 0, color: 'var(--primary-color)', marginTop: '4px' }} />
                            <span dangerouslySetInnerHTML={{ __html: li }} />
                        </li>
                    ))}
                </ul>
            );
        }
        if (item.type === 'box') {
            const icons = { info: LightBulbIcon, warning: ExclamationTriangleIcon, success: CheckCircleIcon, concept: AcademicCapIcon };
            const Icon = icons[item.style] || LightBulbIcon;
            return (
                <div key={idx} style={styles.box(item.style)}>
                    {item.title && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', fontWeight: '700', fontSize: '1.1rem', color: item.style === 'info' ? '#3498DB' : (item.style === 'warning' ? '#E74C3C' : (item.style === 'success' ? '#2ECC71' : '#9B59B6')) }}>
                            <Icon style={{ width: '22px' }} /> {item.title}
                        </div>
                    )}
                    {item.content && item.content.map((subItem, i) => renderContentItem(subItem, i))}
                </div>
            );
        }
        if (item.type === 'grid') {
            return (
                <div key={idx} style={styles.grid}>
                    {item.items.map((gridItem, i) => (
                        <div key={i} style={styles.gridItem}>
                            <span style={styles.gridTitle}>{gridItem.title}</span>
                            <p style={styles.gridText}>{gridItem.text}</p>
                        </div>
                    ))}
                </div>
            );
        }
        if (item.type === 'comparison_ratios') {
            return (
                <div key={idx} style={{ marginTop: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <ArrowsRightLeftIcon style={{ width: '30px', color: 'var(--primary-color)' }} />
                        <p style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-color)' }}>
                            {i18n.language.startsWith('fr')
                                ? "Pour bien comprendre les ratios boursiers, comparez-les à votre propre gestion familiale."
                                : "To understand stock ratios, compare them to your own family management."}
                        </p>
                    </div>
                    <div>
                        {comparisonRatios.map((ratio) => (
                            <div key={ratio.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px', paddingBottom: '25px', borderBottom: '1px dashed var(--border-color)' }}>
                                {/* BUSINESS COLUMN */}
                                <div style={{ backgroundColor: ratio.color, padding: '25px', borderRadius: '12px', border: `1px solid rgba(0,0,0,0.05)`, boxShadow: '0 2px 5px rgba(0,0,0,0.05)', minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                                        <ChartBarIcon style={{ width: '24px', color: 'var(--dark-color)' }} />
                                        <h4 style={{ margin: 0, color: 'var(--dark-color)', fontSize: '1.2rem', fontWeight: 'bold' }}>{ratio.title}</h4>
                                    </div>
                                    <div style={{ backgroundColor: 'rgba(255,255,255,0.6)', padding: '8px', borderRadius: '6px', marginBottom: '15px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                        <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>Formula: {ratio.biz.formula}</p>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-color)', lineHeight: '1.6', flex: 1 }}>{ratio.biz.desc}</p>
                                    <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
                                        {ratio.biz.targetText && (
                                            <div style={{ marginBottom: '8px', fontWeight: 'bold', color: 'var(--info-color)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                {ratio.biz.targetIcon} {ratio.biz.targetText}
                                            </div>
                                        )}
                                        <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '6px', fontSize: '0.9rem', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <CalculatorIcon style={{ width: '16px', color: 'var(--secondary-color)' }} />
                                            <span><strong>Ex:</strong> {ratio.biz.example}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* FAMILY COLUMN */}
                                <div style={{ backgroundColor: ratio.color, padding: '25px', borderRadius: '12px', border: `1px solid rgba(0,0,0,0.05)`, boxShadow: '0 2px 5px rgba(0,0,0,0.05)', minHeight: '350px', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                                        <HomeIcon style={{ width: '24px', color: 'var(--dark-color)' }} />
                                        <h4 style={{ margin: 0, color: 'var(--dark-color)', fontSize: '1.2rem', fontWeight: 'bold' }}>{ratio.fam.title}</h4>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-color)', lineHeight: '1.6', whiteSpace: 'pre-line', flex: 1 }}>{ratio.fam.desc}</p>
                                    <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
                                        {ratio.fam.targetText && (
                                            <div style={{ marginBottom: '8px', fontWeight: 'bold', color: 'var(--info-color)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                {ratio.fam.targetIcon} {ratio.fam.targetText}
                                            </div>
                                        )}
                                        <div style={{ padding: '8px', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '6px', fontSize: '0.9rem', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <CalculatorIcon style={{ width: '16px', color: 'var(--secondary-color)' }} />
                                            <span><strong>Ex:</strong> {ratio.fam.example}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={styles.overlay} onClick={handleOverlayClick}>
            <style>{`
                .course-scroll-content::-webkit-scrollbar { width: 8px; }
                .course-scroll-content::-webkit-scrollbar-track { background: transparent; }
                .course-scroll-content::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 4px; }
                .course-scroll-content::-webkit-scrollbar-thumb:hover { background-color: var(--primary-color); }
            `}</style>

            <div style={styles.container}>
                <button onClick={onClose} style={styles.closeBtn} title="Fermer"><XMarkIcon style={{ width: '28px' }} /></button>

                {/* TOGGLE SIDEBAR BUTTON */}
                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    title={showSidebar ? "Masquer le menu" : "Afficher le menu"}
                    style={{
                        position: 'absolute', top: '20px', left: '20px',
                        background: 'var(--card-background)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '50%',
                        width: '40px', height: '40px',
                        minWidth: '40px', minHeight: '40px',
                        padding: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', zIndex: 100,
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        color: 'var(--text-color)'
                    }}
                >
                    {showSidebar ? <XMarkIcon style={{ width: '22px', height: '22px', strokeWidth: 2 }} /> : <ListBulletIcon style={{ width: '22px', height: '22px', strokeWidth: 2 }} />}
                </button>

                {/* SIDEBAR */}
                {showSidebar && (
                    <div style={styles.sidebar}>
                        <h3 style={{ margin: '0 0 10px 10px', color: 'var(--text-color)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800' }}>
                            <AcademicCapIcon style={{ width: '28px', color: 'var(--primary-color)' }} /> {data.sidebar.title}
                        </h3>

                        {data.sidebar.parts.map((part, pIdx) => (
                            <div key={pIdx}>
                                <div style={styles.partTitle}>{part.title}</div>
                                {part.items.map(item => (
                                    <div key={item.id} style={styles.navItem(activeSection === item.id)} onClick={() => scrollTo(item.id)}>
                                        {activeSection === item.id && <ChevronRightIcon style={{ width: '14px' }} />}
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {/* CONTENU */}
                <div style={styles.content} className="course-scroll-content">
                    <h1 style={styles.mainTitle}>{data.sidebar.title}</h1>
                    <p style={styles.moduleSubTitle}>{data.sidebar.subtitle}</p>

                    {/* Rendering Sections Loop */}
                    {Object.keys(data.sections).map((key) => {
                        let section = data.sections[key];

                        // Currency Localization for Chapter 10
                        if (key === 'chap10' && currency !== 'CAD') {
                            if (data.sections.chap10_intl) {
                                // Use International content but keep the ID 'chap10' so sidebar navigation works
                                section = { ...data.sections.chap10_intl, id: 'chap10' };
                            }
                        }
                        // Skip rendering the international chapter if it appears in the keys loop naturally
                        if (key === 'chap10_intl') return null;

                        // Special icons for Glossaire
                        const TitleIcon = key === 'glossaire' || key === 'chap24' ? BookOpenIcon : null;

                        return (
                            <section key={key} id={key}>
                                <h2 style={styles.chapterTitle}>
                                    {TitleIcon && <TitleIcon style={{ width: '40px' }} />}
                                    {section.title}
                                </h2>
                                {section.content && section.content.map((item, idx) => renderContentItem(item, idx))}
                            </section>
                        );
                    })}

                    <div style={{ height: '100px' }}></div>
                </div>
            </div>
        </div>
    );
}