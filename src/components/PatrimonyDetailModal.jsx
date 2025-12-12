import React from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from '../context/DataContext';
import {
    XMarkIcon, TrophyIcon, BanknotesIcon, HomeIcon,
    CreditCardIcon, ChartBarIcon, BuildingLibraryIcon
} from '@heroicons/react/24/outline';

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: 2200, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    content: { backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '650px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.25)', maxHeight: '90vh', overflowY: 'auto', padding: '0', display: 'flex', flexDirection: 'column' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 25px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--background-color)' },
    title: { margin: 0, fontSize: '1.4rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '10px' },
    body: { padding: '25px', display: 'flex', flexDirection: 'column', gap: '25px' },
    summarySection: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' },
    summaryCircle: { width: '130px', height: '130px', minWidth: '130px', minHeight: '130px', flexShrink: 0, borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', textAlign: 'center' },
    detailsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' },
    detailCard: { backgroundColor: 'var(--background-color)', padding: '15px', borderRadius: '10px', border: '1px solid var(--border-color)' },
    closeButton: { padding: '12px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }
};

const PatrimonyDetailModal = ({ isOpen, onClose, netWorth, totalAssets, totalLiabilities, assetsDetails, liabilitiesDetails }) => {
    const { t } = useTranslation();
    const { formatCurrency } = useData();

    if (!isOpen) return null;

    const netWorthColor = netWorth >= 0 ? '#10B981' : '#EF4444'; // Green or Red

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.content} onClick={e => e.stopPropagation()}>
                <div style={styles.header}>
                    <h3 style={styles.title}>
                        <BuildingLibraryIcon style={{ width: '28px', color: '#3B82F6' }} />
                        {t('dashboard.patrimony_details_title')}
                    </h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <XMarkIcon style={{ width: '28px', color: 'var(--text-color)' }} />
                    </button>
                </div>

                <div style={styles.body}>
                    <div style={styles.summarySection}>
                        <div style={{ ...styles.summaryCircle, backgroundColor: netWorthColor }}>
                            <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>{t('dashboard.net_worth')}</span>
                            <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{formatCurrency(netWorth, { notation: 'compact' })}</span>
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{t('dashboard.patrimony_subtitle')}</h4>
                            <p style={{ margin: 0, color: '#666' }}>{t('dashboard.patrimony_description')}</p>
                        </div>
                    </div>

                    <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>{t('dashboard.assets_breakdown')} ({formatCurrency(totalAssets)})</h4>

                    <div style={styles.detailsGrid}>
                        <div style={styles.detailCard}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold', color: '#10B981' }}>
                                <ChartBarIcon style={{ width: '20px' }} />
                                {t('dashboard.investments')}
                            </div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{formatCurrency(assetsDetails.investments)}</div>
                        </div>

                        <div style={styles.detailCard}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold', color: '#3B82F6' }}>
                                <HomeIcon style={{ width: '20px' }} />
                                {t('dashboard.physical_assets')}
                            </div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{formatCurrency(assetsDetails.physical)}</div>
                        </div>
                    </div>

                    <h4 style={{ margin: '20px 0 0 0', fontSize: '1.1rem', color: 'var(--danger-color)' }}>{t('dashboard.liabilities_breakdown')} ({formatCurrency(totalLiabilities)})</h4>

                    <div style={styles.detailsGrid}>
                        <div style={styles.detailCard}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold', color: '#EF4444' }}>
                                <CreditCardIcon style={{ width: '20px' }} />
                                {t('dashboard.debts')}
                            </div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{formatCurrency(liabilitiesDetails.total)}</div>
                        </div>
                    </div>

                    <button onClick={onClose} style={styles.closeButton}>
                        {t('common.close')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PatrimonyDetailModal;
