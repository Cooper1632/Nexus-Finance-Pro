import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    XMarkIcon, BookOpenIcon, HomeIcon, ChartBarIcon,
    BanknotesIcon, ShieldCheckIcon,
    InformationCircleIcon, CpuChipIcon, Cog6ToothIcon,
    ListBulletIcon, CalculatorIcon, ArrowDownTrayIcon, ArrowUpTrayIcon,
    AcademicCapIcon, BuildingLibraryIcon, LightBulbIcon, ScaleIcon,
    ArrowTrendingUpIcon, BriefcaseIcon, PresentationChartLineIcon,
    CursorArrowRaysIcon, ArrowPathIcon, ArrowPathRoundedSquareIcon,
    CheckCircleIcon, ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

import { userGuideData as frData } from '../data/locales/fr/userGuideData';
import { userGuideData as enData } from '../data/locales/en/userGuideData';

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    container: { backgroundColor: 'var(--card-background)', width: '95%', maxWidth: '1200px', height: '90vh', borderRadius: '16px', display: 'flex', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.35)', position: 'relative' },

    // Sidebar moderne
    sidebar: { width: '260px', backgroundColor: 'var(--background-color)', borderRight: '1px solid var(--border-color)', overflowY: 'auto', padding: '70px 15px 25px 15px', display: 'flex', flexDirection: 'column', gap: '8px' },

    content: { flex: 1, padding: '40px 60px', overflowY: 'auto', scrollBehavior: 'smooth', color: 'var(--text-color)', lineHeight: '1.7', fontFamily: '"Segoe UI", sans-serif' },

    // Bouton Fermer ajusté
    closeBtn: {
        position: 'absolute',
        top: '30px',
        right: '30px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-color)',
        zIndex: 10,
        opacity: 0.7,
        transition: 'opacity 0.2s'
    },

    navItem: (active) => ({
        padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: active ? '600' : '400',
        color: active ? 'white' : 'var(--text-color)',
        backgroundColor: active ? 'var(--primary-color)' : 'transparent',
        display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.2s ease-in-out'
    }),

    // Titres repensés
    mainTitle: { fontSize: '2.4rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '10px', marginTop: '0', letterSpacing: '-0.5px' },
    sectionTitle: { fontSize: '1.8rem', color: 'var(--secondary-color)', marginTop: '50px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' },
    subTitle: { fontSize: '1.2rem', color: 'var(--dark-color)', marginTop: '25px', marginBottom: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' },

    text: { fontSize: '1rem', marginBottom: '15px', color: 'var(--text-color)', textAlign: 'justify' },

    // Listes stylisées
    ul: { paddingLeft: '0', marginBottom: '20px', listStyle: 'none' },
    li: { marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' },

    // Boîtes d'alerte modernes
    highlightBox: (type) => ({
        padding: '18px', borderRadius: '10px', margin: '20px 0', fontSize: '0.95rem',
        backgroundColor: type === 'info' ? 'rgba(52, 152, 219, 0.08)' : (type === 'warning' ? 'rgba(241, 196, 15, 0.08)' : 'rgba(46, 204, 113, 0.08)'),
        borderLeft: `4px solid ${type === 'info' ? '#3498DB' : (type === 'warning' ? '#F1C40F' : '#2ECC71')}`,
        display: 'flex', flexDirection: 'column', gap: '8px'
    }),

    iconSmall: { width: '18px', height: '18px', flexShrink: 0, marginTop: '4px' }
};

const ICONS_MAP = {
    intro: InformationCircleIcon,
    dashboard: HomeIcon,
    budget: BanknotesIcon,
    projections: ArrowTrendingUpIcon,
    plan: ShieldCheckIcon,
    invest: ChartBarIcon,
    analyse: CpuChipIcon,
    immo: BuildingLibraryIcon,
    params: Cog6ToothIcon
};

const SUMMARY_ICONS = {
    "Vue Globale": HomeIcon, "Global View": HomeIcon,
    "Croissance": ArrowTrendingUpIcon, "Growth": ArrowTrendingUpIcon,
    "Stratégie Dette": ShieldCheckIcon, "Debt Strategy": ShieldCheckIcon,
    "Intelligence": CpuChipIcon,
    "Budget & Flux": BanknotesIcon, "Budget & Flow": BanknotesIcon,
    "Performance": ChartBarIcon
};

const BENEFIT_ICONS = [HomeIcon, BanknotesIcon, ShieldCheckIcon, ArrowTrendingUpIcon, ChartBarIcon, CpuChipIcon, BuildingLibraryIcon, ScaleIcon];

export default function UserGuide({ isOpen, onClose, onOpenRealEstateGuide, onOpenFinanceCourse }) {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState('intro');
    const [showSidebar, setShowSidebar] = useState(true); // Toggle sidebar

    // Select Data based on language
    const data = useMemo(() => {
        return i18n.language.startsWith('fr') ? frData : enData;
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

    return (
        <div style={styles.overlay} onClick={handleOverlayClick}>
            <style>{`
                .guide-scroll-content::-webkit-scrollbar { width: 8px; }
                .guide-scroll-content::-webkit-scrollbar-track { background: transparent; }
                .guide-scroll-content::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 4px; }
                .guide-scroll-content::-webkit-scrollbar-thumb:hover { background-color: var(--primary-color); }
            `}</style>

            <div style={styles.container}>
                <button onClick={onClose} style={styles.closeBtn} title={t('common.close')}><XMarkIcon style={{ width: '28px' }} /></button>

                {/* TOGGLE SIDEBAR BUTTON (Floating Left) */}
                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    title={showSidebar ? t('common.hide_menu') : t('common.show_menu')}
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
                        <h3 style={{ margin: '0 0 20px 10px', color: 'var(--text-color)', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700' }}>
                            <BookOpenIcon style={{ width: '24px', color: 'var(--primary-color)' }} /> {data.sidebar.title}
                        </h3>
                        {data.sidebar.items.map(item => {
                            const Icon = ICONS_MAP[item.id] || InformationCircleIcon;
                            return (
                                <div key={item.id} style={styles.navItem(activeSection === item.id)} onClick={() => scrollTo(item.id)}>
                                    <Icon style={{ width: '18px' }} /> {item.label}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* CONTENU */}
                <div style={styles.content} className="guide-scroll-content">

                    <h1 style={styles.mainTitle}>{data.mainTitle}</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--secondary-color)', marginTop: '-5px', marginBottom: '30px' }}>{data.subTitle}</p>

                    {/* GRILLE DE CARTES RÉSUMÉS */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '25px' }}>
                        {data.cards.map((card, idx) => {
                            const Icon = SUMMARY_ICONS[card.title] || InformationCircleIcon;
                            const colors = {
                                info: { bg: 'rgba(52, 152, 219, 0.05)', border: 'rgba(52, 152, 219, 0.1)', text: 'var(--info-color)' },
                                success: { bg: 'rgba(46, 204, 113, 0.05)', border: 'rgba(46, 204, 113, 0.1)', text: 'var(--success-color)' },
                                danger: { bg: 'rgba(231, 76, 60, 0.05)', border: 'rgba(231, 76, 60, 0.1)', text: 'var(--danger-color)' },
                                concept: { bg: 'rgba(142, 68, 173, 0.05)', border: 'rgba(142, 68, 173, 0.1)', text: 'var(--perf-color)' },
                                warning: { bg: 'rgba(243, 156, 18, 0.05)', border: 'rgba(243, 156, 18, 0.1)', text: 'var(--warning-color)' },
                                dark: { bg: 'rgba(52, 73, 94, 0.05)', border: 'rgba(52, 73, 94, 0.1)', text: 'var(--dark-color)' },
                            };
                            const c = colors[card.color] || colors.info;
                            return (
                                <div key={idx} style={{ backgroundColor: c.bg, padding: '15px', borderRadius: '12px', border: `1px solid ${c.border}` }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', fontWeight: 'bold', color: c.text }}>
                                        <Icon style={{ width: '22px' }} /> {card.title}
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.85rem' }}>{card.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* LA LISTE DÉTAILLÉE */}
                    <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.03)', padding: '25px', borderRadius: '12px', marginBottom: '40px', border: '1px dashed rgba(52, 152, 219, 0.3)' }}>
                        <h4 style={{ margin: '0 0 20px 0', color: 'var(--info-color)', fontSize: '1.1rem', fontWeight: '700' }}>{data.benefits.title}</h4>
                        <ul style={styles.ul}>
                            {data.benefits.items.map((item, idx) => {
                                const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
                                return (
                                    <li key={idx} style={styles.li}>
                                        <Icon style={styles.iconSmall} />
                                        <span><strong>{item.title}</strong> {item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* SECTIONS */}
                    <section id="intro">
                        <div style={styles.highlightBox('info')}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <LightBulbIcon style={{ width: '20px', color: '#3498DB' }} />
                                <strong>{data.sections.intro.box.title}</strong>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: data.sections.intro.box.content }}></div>
                        </div>
                    </section>

                    <section id="dashboard">
                        <h2 style={styles.sectionTitle}><HomeIcon style={{ width: '28px' }} /> {data.sections.dashboard.title}</h2>
                        <p style={styles.text}>{data.sections.dashboard.desc}</p>

                        {data.sections.dashboard.box && (
                            <div style={styles.highlightBox(data.sections.dashboard.box.type || 'info')}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                                    <InformationCircleIcon style={{ width: '20px', color: 'var(--info-color)' }} />
                                    <strong>{data.sections.dashboard.box.title}</strong>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: data.sections.dashboard.box.content }}></div>
                            </div>
                        )}

                        <ul style={styles.ul}>
                            {data.sections.dashboard.items.map((item, i) => (
                                <li key={i} style={styles.li}>
                                    <CheckCircleIcon style={{ ...styles.iconSmall, color: 'var(--success-color)' }} />
                                    <span dangerouslySetInnerHTML={{ __html: `<strong>${item.title}</strong> ${item.text}` }}></span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="budget">
                        <h2 style={styles.sectionTitle}><BanknotesIcon style={{ width: '28px' }} /> {data.sections.budget.title}</h2>
                        <p style={styles.text}>{data.sections.budget.desc}</p>
                        <ul style={styles.ul}>
                            {data.sections.budget.items.map((item, i) => (
                                <li key={i} style={styles.li}>
                                    <div style={{ ...styles.iconSmall, backgroundColor: 'var(--secondary-color)', borderRadius: '50%', width: '6px', height: '6px', marginTop: '8px' }}></div>
                                    <span dangerouslySetInnerHTML={{ __html: item.title ? `<strong>${item.title}</strong> ${item.text}` : item.text }}></span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="projections">
                        <h2 style={styles.sectionTitle}><ArrowTrendingUpIcon style={{ width: '28px' }} /> {data.sections.projections.title}</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            {data.sections.projections.cards.map((card, i) => {
                                const Icons = [PresentationChartLineIcon, CursorArrowRaysIcon, BanknotesIcon];
                                const Icon = Icons[i] || PresentationChartLineIcon;
                                return (
                                    <div key={i}>
                                        <h3 style={styles.subTitle}><Icon style={{ width: '20px' }} /> {card.title}</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-color)' }}>{card.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section id="plan">
                        <h2 style={styles.sectionTitle}><ShieldCheckIcon style={{ width: '28px' }} /> {data.sections.plan.title}</h2>
                        <p style={styles.text}>{data.sections.plan.desc}</p>
                        <ul style={styles.ul}>
                            {data.sections.plan.items.map((item, i) => (
                                <li key={i} style={styles.li}>
                                    <CheckCircleIcon style={{ ...styles.iconSmall, color: 'var(--info-color)' }} />
                                    <span><strong>{item.title}</strong> {item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div style={styles.highlightBox('warning')}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#D35400' }}>
                                <ExclamationTriangleIcon style={{ width: '20px' }} /> {data.sections.plan.warning.title}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: data.sections.plan.warning.content }}></div>
                        </div>
                    </section>

                    <section id="invest">
                        <h2 style={styles.sectionTitle}><ChartBarIcon style={{ width: '28px' }} /> {data.sections.invest.title}</h2>
                        <p style={styles.text}>{data.sections.invest.desc}</p>
                        <ul style={styles.ul}>
                            {data.sections.invest.items.map((item, i) => {
                                const Icons = [Cog6ToothIcon, ArrowPathIcon, ListBulletIcon, ChartBarIcon];
                                const Icon = Icons[i];
                                return (
                                    <li key={i} style={styles.li}>
                                        <Icon style={{ ...styles.iconSmall, color: 'var(--secondary-color)' }} />
                                        <span><strong>{item.title}</strong> {item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>

                        {data.sections.invest.button && (
                            <button
                                onClick={() => {
                                    if (onOpenFinanceCourse) {
                                        onClose();
                                        setTimeout(onOpenFinanceCourse, 300);
                                    }
                                }}
                                style={{
                                    backgroundColor: 'var(--primary-color)', color: 'white', border: 'none',
                                    padding: '12px 25px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
                                    display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem',
                                    boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3)', marginTop: '20px'
                                }}
                            >
                                <AcademicCapIcon style={{ width: '20px' }} /> {data.sections.invest.button}
                            </button>
                        )}
                    </section>

                    <section id="analyse">
                        <h2 style={styles.sectionTitle}><CpuChipIcon style={{ width: '28px' }} /> {data.sections.analyse.title}</h2>
                        <p style={styles.text}>{data.sections.analyse.desc}</p>
                        <ul style={styles.ul}>
                            {data.sections.analyse.items.map((item, i) => (
                                <li key={i} style={styles.li}>
                                    {i === 2 ? <LightBulbIcon style={{ ...styles.iconSmall, color: 'var(--perf-color)' }} /> : <CheckCircleIcon style={{ ...styles.iconSmall, color: 'var(--perf-color)' }} />}
                                    <span><strong>{item.title}</strong> {item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="immo">
                        <h2 style={styles.sectionTitle}><BuildingLibraryIcon style={{ width: '28px' }} /> {data.sections.immo.title}</h2>
                        <p style={styles.text}>{data.sections.immo.desc}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                            {data.sections.immo.cards.map((card, i) => (
                                <div key={i} style={{ background: 'var(--background-color)', padding: '10px', borderRadius: '6px', fontSize: '0.9rem' }}>
                                    <strong>{card.title}</strong> {card.text}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                if (onOpenRealEstateGuide) {
                                    onClose();
                                    setTimeout(onOpenRealEstateGuide, 300);
                                }
                            }}
                            style={{
                                backgroundColor: 'var(--immobilier-color)', color: 'white', border: 'none',
                                padding: '12px 25px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold',
                                display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem',
                                boxShadow: '0 4px 10px rgba(192, 57, 43, 0.3)'
                            }}
                        >
                            <BookOpenIcon style={{ width: '20px' }} /> {data.sections.immo.button}
                        </button>
                    </section>

                    <section id="params">
                        <h2 style={styles.sectionTitle}><Cog6ToothIcon style={{ width: '28px' }} /> {data.sections.params.title}</h2>
                        <div style={{ display: 'grid', gap: '15px' }}>
                            {data.sections.params.items.map((item, i) => {
                                const Icons = [ArrowDownTrayIcon, CalculatorIcon, ArrowPathIcon, ArrowPathRoundedSquareIcon];
                                const Colors = ['var(--secondary-color)', 'var(--secondary-color)', 'var(--warning-color)', 'var(--danger-color)'];
                                const Icon = Icons[i];
                                const color = Colors[i];
                                return (
                                    <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                                        <Icon style={{ width: '20px', color: color, marginTop: '3px' }} />
                                        <div>
                                            <strong>{item.title}</strong> <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <div style={{ height: '80px' }}></div>
                </div>
            </div>
        </div>
    );
}