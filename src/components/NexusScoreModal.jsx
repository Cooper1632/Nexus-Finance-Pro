import React from 'react';
import { useTranslation } from 'react-i18next';
import { XMarkIcon, TrophyIcon, ShieldCheckIcon, BanknotesIcon, ArrowTrendingUpIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    content: { backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '650px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.25)', maxHeight: '90vh', overflowY: 'auto', padding: '0', display: 'flex', flexDirection: 'column' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 25px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--background-color)' },
    title: { margin: 0, fontSize: '1.4rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '10px' },
    body: { padding: '25px', display: 'flex', flexDirection: 'column', gap: '25px' },
    scoreSection: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' },
    scoreCircle: { width: '110px', height: '110px', minWidth: '110px', minHeight: '110px', flexShrink: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' },
    detailsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' },
    detailCard: { backgroundColor: 'var(--background-color)', padding: '15px', borderRadius: '10px', border: '1px solid var(--border-color)' },
    adviceSection: { backgroundColor: '#F0F9FF', padding: '20px', borderRadius: '10px', border: '1px solid #BAE6FD' },
    closeButton: { padding: '12px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }
};

const NexusScoreModal = ({ isOpen, onClose, score, details }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    let scoreColor = '#EF4444'; // Red
    if (score >= 50) scoreColor = '#F59E0B'; // Orange
    if (score >= 70) scoreColor = '#FCD34D'; // Yellow
    if (score >= 90) scoreColor = '#10B981'; // Green
    if (score === 100) scoreColor = '#3B82F6'; // Blue

    const getAdvice = () => {
        const advice = [];
        if (details.debtScore < 30) advice.push(t('nexus_score.advice_debt'));
        if (details.savingsScore < 30) advice.push(t('nexus_score.advice_savings'));
        if (details.nwScore < 20) advice.push(t('nexus_score.advice_nw'));
        if (details.perfScore < 20) advice.push(t('nexus_score.advice_perf'));

        if (advice.length === 0) advice.push(t('nexus_score.advice_perfect'));

        return advice;
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.content} onClick={e => e.stopPropagation()}>
                <div style={styles.header}>
                    <h3 style={styles.title}>
                        <TrophyIcon style={{ width: '28px', color: '#F59E0B' }} />
                        {t('nexus_score.title_detailed')}
                    </h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <XMarkIcon style={{ width: '28px', color: 'var(--text-color)' }} />
                    </button>
                </div>

                <div style={styles.body}>
                    <div style={styles.scoreSection}>
                        <div style={{ ...styles.scoreCircle, backgroundColor: scoreColor }}>
                            {score.toFixed(0)}
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{t('nexus_score.subtitle')}</h4>
                            <p style={{ margin: 0, color: '#666' }}>{t('nexus_score.description')}</p>
                        </div>
                    </div>

                    <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>{t('nexus_score.breakdown_title')}</h4>

                    <div style={styles.detailsGrid}>
                        <div style={styles.detailCard}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
                                <ShieldCheckIcon style={{ width: '20px', color: '#10B981' }} />
                                {t('dashboard.score_debt')}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>Max: 30</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: details.debtScore === 30 ? '#10B981' : '#F59E0B' }}>{details.debtScore}</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#888', margin: '5px 0 0 0' }}>{t('nexus_score.explain_debt')}</p>
                        </div>

                        <div style={styles.detailCard}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
                                <BanknotesIcon style={{ width: '20px', color: '#3B82F6' }} />
                                {t('dashboard.score_savings')}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>Max: 30</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: details.savingsScore === 30 ? '#10B981' : '#F59E0B' }}>{details.savingsScore}</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#888', margin: '5px 0 0 0' }}>{t('nexus_score.explain_savings')}</p>
                        </div>

                        <div style={styles.detailCard}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
                                <BuildingLibraryIcon style={{ width: '20px', color: '#8B5CF6' }} />
                                {t('dashboard.score_assets')}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>Max: 20</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: details.nwScore === 20 ? '#10B981' : '#F59E0B' }}>{details.nwScore}</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#888', margin: '5px 0 0 0' }}>{t('nexus_score.explain_nw')}</p>
                        </div>

                        <div style={styles.detailCard}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
                                <ArrowTrendingUpIcon style={{ width: '20px', color: '#EC4899' }} />
                                {t('dashboard.score_perf')}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>Max: 20</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: details.perfScore === 20 ? '#10B981' : '#F59E0B' }}>{details.perfScore}</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#888', margin: '5px 0 0 0' }}>{t('nexus_score.explain_perf')}</p>
                        </div>
                    </div>

                    <div style={styles.adviceSection}>
                        <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#0369A1' }}>{t('nexus_score.advice_title')}</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {getAdvice().map((item, index) => (
                                <li key={index} style={{ color: '#0C4A6E' }}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <button onClick={onClose} style={styles.closeButton}>
                        {t('common.close')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NexusScoreModal;
