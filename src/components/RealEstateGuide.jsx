import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../context/DataContext';
import {
    XMarkIcon, HomeIcon, QuestionMarkCircleIcon, BookOpenIcon,
    CurrencyDollarIcon, CalculatorIcon, ChartBarIcon, ShieldCheckIcon,
    LightBulbIcon, WrenchScrewdriverIcon, ScaleIcon, AcademicCapIcon,
    ArrowTrendingUpIcon, BanknotesIcon, BuildingOfficeIcon, KeyIcon, ListBulletIcon
} from '@heroicons/react/24/outline';

import { realEstateGuideData as frData, realEstateGuideDataIntl as frDataIntl } from '../data/locales/fr/realEstateGuideData.jsx';
import { realEstateGuideData as enData, realEstateGuideDataIntl as enDataIntl } from '../data/locales/en/realEstateGuideData.jsx';
import { realEstateGuideData as esData, realEstateGuideDataIntl as esDataIntl } from '../data/locales/es/realEstateGuideData.jsx';
import { realEstateGuideData as deData, realEstateGuideDataIntl as deDataIntl } from '../data/locales/de/realEstateGuideData.jsx';
import { realEstateGuideData as ptData, realEstateGuideDataIntl as ptDataIntl } from '../data/locales/pt/realEstateGuideData.jsx';

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    container: { backgroundColor: 'var(--card-background)', width: '95%', maxWidth: '1400px', height: '95vh', borderRadius: '12px', display: 'flex', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' },
    sidebar: { width: '280px', backgroundColor: 'var(--background-color)', borderRight: '1px solid var(--border-color)', overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '5px' },
    content: { flex: 1, padding: '50px', overflowY: 'auto', scrollBehavior: 'smooth', color: 'var(--text-color)', fontFamily: "'Segoe UI', sans-serif", lineHeight: '1.8' },
    closeBtn: { position: 'absolute', top: '15px', right: '20px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-color)', zIndex: 10 },

    navItem: (active) => ({ padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', color: active ? 'white' : 'var(--text-color)', backgroundColor: active ? 'var(--immobilier-color)' : 'transparent', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '10px' }),
    navHeader: { fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--secondary-color)', marginTop: '20px', marginBottom: '8px', paddingLeft: '10px', textTransform: 'uppercase', letterSpacing: '1px' },

    chapterTitle: { fontSize: '2.2rem', color: 'var(--immobilier-color)', marginBottom: '25px', borderBottom: '2px solid var(--border-color)', paddingBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' },
    sectionTitle: { fontSize: '1.5rem', color: 'var(--secondary-color)', marginTop: '40px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' },
    paragraph: { fontSize: '1.1rem', marginBottom: '20px', textAlign: 'justify' },

    box: (type) => {
        const colors = {
            info: { bg: 'rgba(52, 152, 219, 0.1)', border: '#3498DB', icon: '#3498DB' },
            success: { bg: 'rgba(46, 204, 113, 0.1)', border: '#2ECC71', icon: '#2ECC71' },
            warning: { bg: 'rgba(241, 196, 15, 0.1)', border: '#F1C40F', icon: '#F1C40F' },
            danger: { bg: 'rgba(231, 76, 60, 0.1)', border: '#E74C3C', icon: '#E74C3C' },
            pro: { bg: 'rgba(142, 68, 173, 0.1)', border: '#9B59B6', icon: '#9B59B6' },
            'custom-cascade': { bg: 'var(--background-color)', border: 'var(--border-color)', icon: 'var(--primary-color)' } // Special case
        };
        const c = colors[type] || colors.info;
        if (type === 'custom-cascade') return { background: c.bg, padding: '20px', borderRadius: '10px', border: `1px dashed ${c.border}` };

        return { padding: '20px', borderRadius: '8px', margin: '25px 0', backgroundColor: c.bg, borderLeft: `5px solid ${c.border}`, display: 'flex', flexDirection: 'column', gap: '10px' };
    },
    code: { backgroundColor: 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'monospace', color: 'var(--primary-color)', fontWeight: 'bold', border: '1px solid rgba(0,0,0,0.1)' }
};

const ICONS_MAP = {
    intro: LightBulbIcon,
    module: CalculatorIcon,
    flux: CurrencyDollarIcon,
    ratios: ChartBarIcon,
    risque: ShieldCheckIcon,
    strategie: AcademicCapIcon,
    fiscalite: ScaleIcon,
    glossaire: BookOpenIcon
};

export default function RealEstateGuide({ isOpen, onClose }) {
    const { i18n } = useTranslation();
    const { appState } = useData();
    const [activeSection, setActiveSection] = useState('intro');
    const [showSidebar, setShowSidebar] = useState(true);

    const data = useMemo(() => {
        const isCAD = (appState?.settings?.currentCurrency || 'CAD') === 'CAD';

        if (i18n.language.startsWith('fr')) return isCAD ? frData : frDataIntl;
        if (i18n.language.startsWith('es')) return isCAD ? esData : esDataIntl;
        if (i18n.language.startsWith('de')) return isCAD ? deData : deDataIntl;
        if (i18n.language.startsWith('pt')) return isCAD ? ptData : ptDataIntl;

        return isCAD ? enData : enDataIntl;
    }, [i18n.language, appState?.settings?.currentCurrency]);

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

    const renderContentItem = (item, idx) => {
        if (item.type === 'p') return <p key={idx} style={styles.paragraph} dangerouslySetInnerHTML={{ __html: item.text }} />;

        if (item.type === 'subtitle') {
            return (
                <h3 key={idx} style={styles.sectionTitle}>
                    {item.icon} {item.title}
                </h3>
            );
        }

        if (item.type === 'ul') {
            return (
                <ul key={idx} style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                    {item.items.map((li, i) => <li key={i} dangerouslySetInnerHTML={{ __html: li }} style={{ marginBottom: '8px' }} />)}
                </ul>
            );
        }

        if (item.type === 'box') {
            return (
                <div key={idx} style={styles.box(item.style)}>
                    {item.title && <strong style={{ fontSize: '1.1em', display: 'block', marginBottom: '5px' }}>{item.title}</strong>}
                    {item.content && item.content.map((sub, i) => renderContentItem(sub, i))}
                </div>
            );
        }

        if (item.type === 'grid') {
            return (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {item.items.map((box, i) => (
                        <div key={i} style={styles.box(box.style)}>
                            <strong style={{ fontSize: '1.1em' }}>{box.title}</strong>
                            <span style={styles.code}>{box.code}</span>
                            <div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: box.text }}></div>
                        </div>
                    ))}
                </div>
            );
        }

        if (item.type === 'glossary-grid') {
            return (
                <div key={idx} style={{ display: 'grid', gap: '15px', fontSize: '1rem' }}>
                    {item.items.map((term, i) => (
                        <div key={i}>
                            <strong>{term.term} :</strong> {term.def}
                        </div>
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <div style={styles.overlay} onClick={handleOverlayClick}>
            <style>{`
                .guide-scroll-content::-webkit-scrollbar { width: 8px; }
                .guide-scroll-content::-webkit-scrollbar-track { background: transparent; }
                .guide-scroll-content::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 4px; }
                .guide-scroll-content::-webkit-scrollbar-thumb:hover { background-color: var(--immobilier-color); }
            `}</style>
            <div style={styles.container} className="animate-fade-in">
                <button onClick={onClose} style={styles.closeBtn} title="Fermer"><XMarkIcon style={{ width: '32px' }} /></button>

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
                        <h3 style={{ margin: '0 0 20px 0', color: 'var(--text-color)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <HomeIcon style={{ width: '32px', color: 'var(--immobilier-color)' }} /> {data.sidebar.title}
                        </h3>

                        {data.sidebar.sections.map((section, sIdx) => (
                            <div key={sIdx}>
                                <div style={styles.navHeader}>{section.title}</div>
                                {section.items.map(item => {
                                    const Icon = ICONS_MAP[item.id] || LightBulbIcon;
                                    return (
                                        <div key={item.id} onClick={() => scrollTo(item.id)} style={styles.navItem(activeSection === item.id)}>
                                            <Icon style={{ width: '18px' }} /> {item.label}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                )}

                {/* CONTENU */}
                <div style={styles.content} className="guide-scroll-content">
                    {Object.keys(data.chapters).map(key => {
                        const chapter = data.chapters[key];
                        const Icon = ICONS_MAP[chapter.icon] || LightBulbIcon;
                        return (
                            <section key={key} id={chapter.id} style={{ marginBottom: '60px' }}>
                                <h2 style={styles.chapterTitle}><Icon style={{ width: '36px' }} /> {chapter.title}</h2>
                                {chapter.content.map((item, idx) => renderContentItem(item, idx))}
                            </section>
                        );
                    })}

                    <div style={{ height: '100px' }}></div>
                </div>
            </div>
        </div>
    );
}