import React from 'react';
import { useTranslation } from 'react-i18next';
import { XMarkIcon, ChartPieIcon } from '@heroicons/react/24/outline'; // Utilisation d'icônes génériques
import { Radar } from 'react-chartjs-2';

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: 2200, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    content: { backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '650px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.25)', maxHeight: '90vh', overflowY: 'auto', padding: '0', display: 'flex', flexDirection: 'column' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 25px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--background-color)' },
    title: { margin: 0, fontSize: '1.4rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '10px' },
    body: { padding: '25px', display: 'flex', flexDirection: 'column', gap: '25px' },
    chartContainer: { height: '250px', width: '100%', display: 'flex', justifyContent: 'center' },
    explanationGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' },
    pointCard: { padding: '15px', borderRadius: '10px', backgroundColor: 'var(--background-color)', border: '1px solid var(--border-color)' },
    pointTitle: { fontWeight: 'bold', marginBottom: '5px', fontSize: '1rem', color: 'var(--secondary-color)' },
    pointDesc: { fontSize: '0.85rem', color: '#666', lineHeight: '1.4' },
    closeButton: { padding: '12px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }
};

const HealthRadarModal = ({ isOpen, onClose, scores }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    // Réutilisation des données du graphique pour l'affichage visuel
    const data = {
        labels: [t('dashboard.radar_safety'), t('dashboard.radar_growth'), t('dashboard.radar_perf'), t('dashboard.radar_wealth'), t('dashboard.radar_liquidity')],
        datasets: [
            {
                label: t('dashboard.radar_profile'),
                data: [scores.debt || 0, scores.savings || 0, scores.perf || 0, scores.nw || 0, scores.flow || 0],
                backgroundColor: 'rgba(130, 224, 170, 0.4)',
                borderColor: '#82E0AA',
                borderWidth: 2,
                pointBackgroundColor: '#82E0AA',
                fill: true
            },
            {
                label: t('dashboard.radar_target'),
                data: [100, 100, 100, 100, 100],
                borderColor: '#ccc',
                borderWidth: 1,
                pointRadius: 0,
                borderDash: [5, 5],
                fill: false
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true, position: 'bottom' } },
        scales: {
            r: {
                angleLines: { color: 'rgba(0,0,0,0.05)' },
                grid: { color: 'rgba(0,0,0,0.05)' },
                pointLabels: { font: { size: 11 }, color: '#666' },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: { display: false, stepSize: 20 }
            }
        }
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.content} onClick={e => e.stopPropagation()}>
                <div style={styles.header}>
                    <h3 style={styles.title}>
                        <ChartPieIcon style={{ width: '28px', color: '#82E0AA' }} />
                        {t('health_radar.title_detailed')}
                    </h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <XMarkIcon style={{ width: '28px', color: 'var(--text-color)' }} />
                    </button>
                </div>

                <div style={styles.body}>
                    <div style={styles.chartContainer}>
                        <Radar data={data} options={options} />
                    </div>

                    <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>{t('health_radar.subtitle')}</p>

                    <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--secondary-color)' }}>{t('health_radar.points_title')}</h4>

                    <div style={styles.explanationGrid}>
                        <div style={styles.pointCard}>
                            <div style={styles.pointTitle}>{t('dashboard.radar_safety')}</div>
                            <div style={styles.pointDesc}>{t('health_radar.explain_safety')}</div>
                        </div>
                        <div style={styles.pointCard}>
                            <div style={styles.pointTitle}>{t('dashboard.radar_growth')}</div>
                            <div style={styles.pointDesc}>{t('health_radar.explain_growth')}</div>
                        </div>
                        <div style={styles.pointCard}>
                            <div style={styles.pointTitle}>{t('dashboard.radar_perf')}</div>
                            <div style={styles.pointDesc}>{t('health_radar.explain_perf')}</div>
                        </div>
                        <div style={styles.pointCard}>
                            <div style={styles.pointTitle}>{t('dashboard.radar_wealth')}</div>
                            <div style={styles.pointDesc}>{t('health_radar.explain_wealth')}</div>
                        </div>
                        <div style={styles.pointCard}>
                            <div style={styles.pointTitle}>{t('dashboard.radar_liquidity')}</div>
                            <div style={styles.pointDesc}>{t('health_radar.explain_liquidity')}</div>
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

export default HealthRadarModal;
