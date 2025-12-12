import React, { useState, useMemo, useEffect } from 'react';
import {
    XMarkIcon, TrashIcon, BanknotesIcon,
    ChartBarIcon, TableCellsIcon, QuestionMarkCircleIcon,
    PencilIcon, CalculatorIcon, ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import CurrencyInput from './CurrencyInput';
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend, Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next'; // IMPORT

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const styles = {
    overlay: {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    content: {
        backgroundColor: 'var(--card-background)', width: '95%', maxWidth: '1000px',
        borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden'
    },
    header: {
        padding: '20px', borderBottom: '1px solid var(--border-color)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backgroundColor: 'var(--background-color)'
    },
    body: { flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column' },
    tabContainer: {
        display: 'flex', borderBottom: '1px solid var(--border-color)',
        marginBottom: '20px', backgroundColor: 'var(--card-background)', padding: '0 10px'
    },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
    sortableTh: {
        textAlign: 'left', padding: '12px', borderBottom: '2px solid var(--border-color)',
        fontSize: '0.9rem', color: 'var(--secondary-color)', cursor: 'pointer', userSelect: 'none'
    },
    th: {
        textAlign: 'left', padding: '12px', borderBottom: '2px solid var(--border-color)',
        fontSize: '0.9rem', color: 'var(--secondary-color)'
    },
    td: { padding: '12px', borderBottom: '1px solid var(--border-color)', verticalAlign: 'middle' },

    formGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        alignItems: 'end',
        backgroundColor: 'var(--background-color)',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid var(--border-color)'
    },

    tooltipContainer: { position: 'relative', display: 'inline-block', cursor: 'help', marginLeft: '5px' },
    tooltipText: {
        visibility: 'hidden', width: '320px', backgroundColor: 'rgba(30, 30, 40, 0.95)', color: '#fff',
        textAlign: 'left', borderRadius: '8px', padding: '15px', position: 'absolute',
        zIndex: '1000', top: '135%', left: '50%', transform: 'translateX(-50%)',
        opacity: '0', transition: 'opacity 0.2s, top 0.2s',
        fontSize: '0.85rem', lineHeight: '1.5', fontWeight: 'normal', textTransform: 'none',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)', pointerEvents: 'none', border: '1px solid rgba(255,255,255,0.1)',
        whiteSpace: 'normal'
    },
    iconOnlyBtn: {
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: '32px', height: '32px', minWidth: '32px', borderRadius: '50%',
        border: '1px solid var(--border-color)', backgroundColor: 'var(--card-background)',
        cursor: 'pointer', padding: 0, margin: '0 2px'
    },
    checkboxTh: { width: '40px', textAlign: 'center', padding: '12px', borderBottom: '2px solid var(--border-color)' },
    checkboxTd: { width: '40px', textAlign: 'center', padding: '12px', borderBottom: '1px solid var(--border-color)' },

    detailsSection: {
        gridColumn: '1 / -1',
        marginTop: '10px',
        padding: '15px',
        backgroundColor: 'var(--card-background)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        animation: 'fadeIn 0.3s ease'
    },
    detailRow: {
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
        alignItems: 'center'
    }
};

const InfoTooltip = ({ text }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            style={styles.tooltipContainer}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <QuestionMarkCircleIcon style={{ width: '16px', color: 'var(--info-color)', opacity: 0.7 }} />
            <div style={{ ...styles.tooltipText, visibility: hover ? 'visible' : 'hidden', opacity: hover ? 1 : 0 }}>
                {text}
            </div>
        </div>
    );
};

const DetailTooltip = ({ t }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '8px', cursor: 'help' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <ClipboardDocumentListIcon style={{ width: '18px', color: 'var(--info-color)' }} />
            <div style={{
                ...styles.tooltipText,
                visibility: hover ? 'visible' : 'hidden',
                opacity: hover ? 1 : 0,
                width: '240px',
                left: '-110px',
                bottom: '140%'
            }}>
                {t('perf_modal.tooltip_detail')}

                <div style={{ position: 'absolute', top: '100%', left: '50%', marginLeft: '-5px', borderWidth: '5px', borderStyle: 'solid', borderColor: '#34495E transparent transparent transparent' }}></div>
            </div>
        </div>
    );
};

const getTabStyle = (isActive, color) => ({
    padding: '12px 25px',
    background: isActive ? 'var(--card-background)' : 'transparent',
    border: 'none',
    borderBottom: isActive ? `4px solid ${color}` : '4px solid transparent',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem',
    color: isActive ? 'var(--text-color)' : 'var(--secondary-color)',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
});

const ACCOUNT_TYPES = {
    CAD: ['CELI', 'REER', 'CRI', 'REEE', 'Non enregistré', 'Compte sur marge', 'Ferr'],
    USD: ['Roth IRA', 'Traditional IRA', '401(k)', 'Taxable Account', 'Margin Account', '529 Plan'],
    EUR: ['PEA', 'Compte-titres', 'Assurance-vie', 'Plan Épargne Retraite', 'Livret A'],
    GBP: ['ISA', 'SIPP', 'General Investment Account'],
    Generic: ['Investment Account', 'Retirement Account', 'Savings', 'Other']
};

export default function PerformanceModal({
    isOpen, onClose, deposits, snapshots,
    onSaveDeposit, onDeleteDeposit, onDeleteMultipleDeposits,
    onSaveSnapshot, onDeleteSnapshot, onDeleteMultipleSnapshots,
    formatCurrency, currency = 'CAD'
}) {
    const { t } = useTranslation(); // HOOK
    const [activeTab, setActiveTab] = useState('overview');

    // Tooltip logic based on currency
    const depositsTooltipKey = currency === 'CAD'
        ? 'perf_modal.tooltip_tab_deposits_CAD'
        : 'perf_modal.tooltip_tab_deposits_GENERIC';

    // DEBUG: Verify component reload
    useEffect(() => {
        console.log('PerformanceModal loaded. Currency:', currency);
        console.log('Tooltip Key:', depositsTooltipKey);
    }, [currency, depositsTooltipKey]);

    const [depositSort, setDepositSort] = useState({ key: 'date', direction: 'desc' });
    const [snapshotSort, setSnapshotSort] = useState({ key: 'date', direction: 'desc' });

    const [depositForm, setDepositForm] = useState({ id: null, date: new Date().toISOString().split('T')[0], amount: '', account: 'CELI' });

    const [snapshotForm, setSnapshotForm] = useState({
        id: null,
        date: new Date().toISOString().split('T')[0],
        value: '',
        details: [],
        showDetails: false
    });

    const [selectedDeposits, setSelectedDeposits] = useState([]);
    const [selectedSnapshots, setSelectedSnapshots] = useState([]);

    const sortedDeposits = useMemo(() => {
        let data = [...(deposits || [])];
        if (depositSort.key) {
            data.sort((a, b) => {
                let valA = a[depositSort.key];
                let valB = b[depositSort.key];
                if (depositSort.key === 'date') { valA = new Date(valA); valB = new Date(valB); }
                if (valA < valB) return depositSort.direction === 'asc' ? -1 : 1;
                if (valA > valB) return depositSort.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return data;
    }, [deposits, depositSort]);

    const getInvestedAtDate = (dateStr) => {
        const targetDate = new Date(dateStr);
        return (deposits || []).reduce((total, d) => {
            return new Date(d.date) <= targetDate ? total + d.amount : total;
        }, 0);
    };

    const enrichedSnapshots = useMemo(() => {
        let data = (snapshots || []).map(s => {
            const calculatedCost = getInvestedAtDate(s.date);
            const gain = s.value - calculatedCost;
            const pct = calculatedCost > 0 ? (gain / calculatedCost * 100) : 0;
            return { ...s, cost: calculatedCost, gain, pct };
        });

        if (snapshotSort.key) {
            data.sort((a, b) => {
                let valA = a[snapshotSort.key];
                let valB = b[snapshotSort.key];
                if (snapshotSort.key === 'date') { valA = new Date(valA); valB = new Date(valB); }
                if (valA < valB) return snapshotSort.direction === 'asc' ? -1 : 1;
                if (valA > valB) return snapshotSort.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return data;
    }, [snapshots, deposits, snapshotSort]);

    const allDates = [...new Set([
        ...(deposits || []).map(d => d.date),
        ...(snapshots || []).map(s => s.date)
    ])].sort();

    // Fonctions pour les dégradés
    const createGradient = (ctx, area, colorStart, colorEnd) => {
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
        return gradient;
    };

    const chartData = {
        labels: allDates,
        datasets: [
            {
                label: t('perf_modal.chart_invested'),
                data: allDates.map(date => getInvestedAtDate(date)),
                borderColor: '#3498DB',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const area = context.chart.chartArea;
                    if (!area) return 'rgba(52, 152, 219, 0.1)';
                    return createGradient(ctx, area, 'rgba(52, 152, 219, 0.0)', 'rgba(52, 152, 219, 0.2)');
                },
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4
            },
            {
                label: t('perf_modal.chart_value'),
                data: allDates.map(date => {
                    const snap = (snapshots || []).slice().sort((a, b) => new Date(a.date) - new Date(b.date)).reverse().find(s => s.date <= date);
                    return snap ? snap.value : null;
                }),
                borderColor: '#2ECC71',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const area = context.chart.chartArea;
                    if (!area) return 'rgba(46, 204, 113, 0.1)';
                    return createGradient(ctx, area, 'rgba(46, 204, 113, 0.0)', 'rgba(46, 204, 113, 0.3)');
                },
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                spanGaps: true,
                pointRadius: 3,
                pointHoverRadius: 6,
                pointBackgroundColor: '#2ECC71',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }
        ]
    };

    const toggleDepositSelection = (id) => setSelectedDeposits(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    const toggleAllDeposits = (e) => setSelectedDeposits(e.target.checked ? sortedDeposits.map(d => d.id) : []);
    const toggleSnapshotSelection = (id) => setSelectedSnapshots(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    const toggleAllSnapshots = (e) => setSelectedSnapshots(e.target.checked ? enrichedSnapshots.map(s => s.id) : []);

    if (!isOpen) return null;

    const handleSortDeposits = (key) => setDepositSort(prev => ({ key, direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc' }));
    const handleSortSnapshots = (key) => setSnapshotSort(prev => ({ key, direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc' }));
    const getSortArrow = (config, key) => (config.key !== key ? null : (config.direction === 'asc' ? ' ▲' : ' ▼'));

    const handleSaveDeposit = () => {
        if (!depositForm.date || !depositForm.amount) return alert(t('common.error_missing_fields') || "Date et Montant requis");
        onSaveDeposit({
            ...depositForm,
            id: depositForm.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            amount: parseFloat(depositForm.amount)
        });
        setDepositForm(prev => ({ ...prev, id: null }));
    };

    const handleEditDeposit = (deposit) => {
        setDepositForm({ ...deposit });
        document.getElementById('deposit-form-container')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleAddDetailRow = () => {
        const newId = `detail-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        setSnapshotForm(prev => ({
            ...prev,
            details: [...prev.details, { id: newId, label: '', value: '' }]
        }));
    };

    const handleUpdateDetail = (id, field, val) => {
        setSnapshotForm(prev => {
            const newDetails = prev.details.map(d => d.id === id ? { ...d, [field]: val } : d);
            const total = newDetails.reduce((sum, d) => sum + (parseFloat(d.value) || 0), 0);
            return { ...prev, details: newDetails, value: total };
        });
    };

    const handleRemoveDetail = (id) => {
        setSnapshotForm(prev => {
            const newDetails = prev.details.filter(d => d.id !== id);
            const total = newDetails.reduce((sum, d) => sum + (parseFloat(d.value) || 0), 0);
            return { ...prev, details: newDetails, value: total };
        });
    };

    const toggleDetailsMode = () => {
        setSnapshotForm(prev => {
            const newMode = !prev.showDetails;
            let newDetails = prev.details;
            if (newMode && prev.details.length === 0) {
                newDetails = [{ id: `detail-${Date.now()}`, label: t('perf_modal.main_account') || 'Compte Principal', value: prev.value || '' }];
            }
            return { ...prev, showDetails: newMode, details: newDetails };
        });
    };

    const handleSaveSnapshot = () => {
        if (!snapshotForm.date || !snapshotForm.value) return alert(t('common.error_missing_fields') || "Date et Valeur requises");
        onSaveSnapshot({
            ...snapshotForm,
            id: snapshotForm.id || `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            value: parseFloat(snapshotForm.value)
        });
        setSnapshotForm({ id: null, date: new Date().toISOString().split('T')[0], value: '', details: [], showDetails: false });
    };

    const handleEditSnapshot = (snapshot) => {
        const hasDetails = snapshot.details && snapshot.details.length > 0;
        setSnapshotForm({
            ...snapshot,
            details: snapshot.details || [],
            showDetails: hasDetails
        });
        document.getElementById('snapshot-form-container')?.scrollIntoView({ behavior: 'smooth' });
    };

    const executeDeleteDeposits = () => {
        if (selectedDeposits.length === 0) return;
        onDeleteMultipleDeposits(selectedDeposits);
        setSelectedDeposits([]);
    };

    const executeDeleteSnapshots = () => {
        if (selectedSnapshots.length === 0) return;
        onDeleteMultipleSnapshots(selectedSnapshots);
        setSelectedSnapshots([]);
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ChartBarIcon style={{ width: '28px', color: 'var(--primary-color)' }} /> {t('perf_modal.title')}
                    </h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '28px', color: 'var(--text-color)' }} /></button>
                </div>

                <div style={styles.tabContainer}>
                    <button style={getTabStyle(activeTab === 'overview', 'var(--primary-color)')} onClick={() => setActiveTab('overview')}>
                        <ChartBarIcon style={{ width: '20px' }} /> {t('perf_modal.tab_overview')}
                        <InfoTooltip text={t('perf_modal.tooltip_tab_overview')} />
                    </button>
                    <button style={getTabStyle(activeTab === 'deposits', 'var(--success-color)')} onClick={() => setActiveTab('deposits')}>
                        <BanknotesIcon style={{ width: '20px' }} /> {t('perf_modal.tab_deposits')}
                        <InfoTooltip text={t(depositsTooltipKey)} />
                    </button>
                    <button style={getTabStyle(activeTab === 'snapshots', 'var(--info-color)')} onClick={() => setActiveTab('snapshots')}>
                        <TableCellsIcon style={{ width: '20px' }} /> {t('perf_modal.tab_snapshots')}
                        <InfoTooltip text={t('perf_modal.tooltip_tab_snapshots')} />
                    </button>
                </div>

                <div style={styles.body}>
                    {activeTab === 'overview' && (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                                <div style={{ padding: '15px', background: 'var(--background-color)', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)' }}>{t('perf_modal.total_invested')}</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#3498DB' }}>{formatCurrency(getInvestedAtDate(new Date().toISOString()))}</div>
                                </div>
                                <div style={{ padding: '15px', background: 'var(--background-color)', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)' }}>{t('perf_modal.current_value')}</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2ECC71' }}>
                                        {enrichedSnapshots.length > 0 ? formatCurrency(enrichedSnapshots[0].value) : '-'}
                                    </div>
                                </div>
                                <div style={{ padding: '15px', background: 'var(--background-color)', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--secondary-color)' }}>{t('perf_modal.gain_loss')}</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: (enrichedSnapshots.length > 0 && enrichedSnapshots[0].gain >= 0) ? 'var(--success-color)' : 'var(--danger-color)' }}>
                                        {enrichedSnapshots.length > 0 ? formatCurrency(enrichedSnapshots[0].gain) : '-'}
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                flex: 1,
                                minHeight: '350px',
                                position: 'relative',
                                backgroundColor: '#13131F',
                                borderRadius: '12px',
                                padding: '20px',
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                                border: '1px solid #2A2A35'
                            }}>
                                <Line
                                    data={chartData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        interaction: {
                                            mode: 'index',
                                            intersect: false,
                                        },
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                                align: 'end',
                                                labels: {
                                                    usePointStyle: true,
                                                    boxWidth: 8,
                                                    color: '#FFFFFF',
                                                    font: { size: 12 }
                                                }
                                            },
                                            tooltip: {
                                                backgroundColor: 'rgba(20, 20, 30, 0.9)',
                                                titleColor: '#FFFFFF',
                                                bodyColor: '#FFFFFF',
                                                borderColor: 'var(--border-color)',
                                                borderWidth: 1,
                                                padding: 10,
                                                displayColors: true,
                                                callbacks: {
                                                    label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`
                                                }
                                            }
                                        },
                                        scales: {
                                            x: {
                                                grid: { display: false, drawBorder: false },
                                                ticks: { color: '#FFFFFF', maxTicksLimit: 8 }
                                            },
                                            y: {
                                                grid: { color: 'rgba(255, 255, 255, 0.1)', borderDash: [5, 5] },
                                                ticks: {
                                                    callback: (v) => formatCurrency(v, 0),
                                                    color: '#FFFFFF',
                                                    font: { size: 11 }
                                                },
                                                border: { display: false }
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'deposits' && (
                        <div>
                            <div id="deposit-form-container" style={styles.formGrid}>
                                <div>
                                    <label htmlFor="dep-date">{t('common.date')}</label>
                                    <input
                                        id="dep-date"
                                        name="date"
                                        type="date"
                                        value={depositForm.date}
                                        onChange={e => setDepositForm({ ...depositForm, date: e.target.value })}
                                        // AJOUT ICI : Sélection
                                        onFocus={(e) => e.target.select()}
                                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dep-account">{t('perf_modal.account_label')}</label>
                                    <select id="dep-account" name="account" value={depositForm.account} onChange={e => setDepositForm({ ...depositForm, account: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}>
                                        {(ACCOUNT_TYPES[currency] || ACCOUNT_TYPES.Generic).map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="dep-amount">{t('perf_modal.amount_label')}</label>
                                    <CurrencyInput id="dep-amount" name="amount" value={depositForm.amount} onChange={(e) => setDepositForm({ ...depositForm, amount: e.target.value })} placeholder="0.00" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }} />
                                </div>
                                <button onClick={handleSaveDeposit} style={{ padding: '10px', backgroundColor: depositForm.id ? 'var(--info-color)' : 'var(--success-color)', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                                    {depositForm.id ? t('common.update') : t('perf_modal.add_deposit')}
                                </button>
                                {depositForm.id && (<button onClick={() => setDepositForm({ id: null, date: new Date().toISOString().split('T')[0], amount: '', account: 'CELI' })} style={{ padding: '10px', backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>{t('common.cancel')}</button>)}
                            </div>

                            {selectedDeposits.length > 0 && (
                                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                                    <button onClick={executeDeleteDeposits} style={{ padding: '8px 15px', backgroundColor: 'var(--danger-color)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <TrashIcon style={{ width: '18px' }} /> {t('perf_modal.delete_selection')} ({selectedDeposits.length})
                                    </button>
                                </div>
                            )}

                            <table style={styles.table}>
                                <thead>
                                    <tr>
                                        <th style={styles.checkboxTh}>
                                            <input
                                                id="select-all-deposits"
                                                name="select-all-deposits"
                                                aria-label="Sélectionner tous les dépôts"
                                                type="checkbox"
                                                onChange={toggleAllDeposits}
                                                checked={sortedDeposits.length > 0 && selectedDeposits.length === sortedDeposits.length}
                                            />
                                        </th>
                                        <th style={styles.sortableTh} onClick={() => handleSortDeposits('date')}>{t('common.date')} {getSortArrow(depositSort, 'date')}</th>
                                        <th style={styles.sortableTh} onClick={() => handleSortDeposits('account')}>{t('perf_modal.account_label')} {getSortArrow(depositSort, 'account')}</th>
                                        <th style={styles.sortableTh} onClick={() => handleSortDeposits('amount')}>{t('common.amount')} {getSortArrow(depositSort, 'amount')}</th>
                                        <th style={{ ...styles.th, textAlign: 'center' }}>{t('common.action')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedDeposits.map((d, index) => (
                                        <tr key={`${d.id || 'dep'}-${index}`} style={{ backgroundColor: selectedDeposits.includes(d.id) ? '#FFF5F5' : 'transparent' }}>
                                            <td style={styles.checkboxTd}>
                                                <input
                                                    id={`select-deposit-${d.id}`}
                                                    name={`select-deposit-${d.id}`}
                                                    aria-label={`Sélectionner le dépôt du ${d.date}`}
                                                    type="checkbox"
                                                    checked={selectedDeposits.includes(d.id)}
                                                    onChange={() => toggleDepositSelection(d.id)}
                                                />
                                            </td>
                                            <td style={styles.td}>{d.date}</td>
                                            <td style={styles.td}><span style={{ background: '#EBF5FB', color: '#2980B9', padding: '2px 8px', borderRadius: '10px', fontSize: '0.8rem' }}>{d.account}</span></td>
                                            <td style={{ ...styles.td, fontWeight: 'bold', color: '#3498DB' }}>{formatCurrency(d.amount)}</td>
                                            <td style={{ ...styles.td, textAlign: 'center' }}>
                                                <button onClick={() => handleEditDeposit(d)} style={styles.iconOnlyBtn} title={t('common.edit')}><PencilIcon style={{ width: '16px', color: 'var(--info-color)' }} /></button>
                                                <button onClick={() => onDeleteDeposit(d.id)} style={styles.iconOnlyBtn} title={t('common.delete')}><TrashIcon style={{ width: '16px', color: 'var(--danger-color)' }} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                    {sortedDeposits.length === 0 && <tr><td colSpan="5" style={{ padding: '20px', textAlign: 'center', fontStyle: 'italic' }}>{t('perf_modal.empty_deposits')}</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'snapshots' && (
                        <div>
                            <div id="snapshot-form-container" style={{ ...styles.formGrid, gridTemplateColumns: '1fr 1fr auto' }}>
                                <div>
                                    <label htmlFor="snap-date">{t('perf_modal.snapshot_date')}</label>
                                    <input
                                        id="snap-date"
                                        name="date"
                                        type="date"
                                        value={snapshotForm.date}
                                        onChange={e => setSnapshotForm({ ...snapshotForm, date: e.target.value })}
                                        // AJOUT ICI : Sélection
                                        onFocus={(e) => e.target.select()}
                                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}
                                    />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                        <label htmlFor="snap-value">{t('perf_modal.snapshot_total')}</label>
                                        <button
                                            type="button"
                                            onClick={toggleDetailsMode}
                                            style={{ border: 'none', background: 'transparent', color: 'var(--info-color)', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '3px' }}
                                        >
                                            <CalculatorIcon style={{ width: '16px' }} /> {snapshotForm.showDetails ? t('perf_modal.hide_detail') : t('perf_modal.detail_mode')}
                                        </button>
                                    </div>
                                    <CurrencyInput
                                        id="snap-value"
                                        name="value"
                                        value={snapshotForm.value}
                                        onChange={(e) => setSnapshotForm({ ...snapshotForm, value: e.target.value })}
                                        placeholder="0.00"
                                        style={{
                                            width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontWeight: 'bold',
                                            backgroundColor: snapshotForm.showDetails ? '#F9FAFB' : 'white',
                                            color: snapshotForm.showDetails ? '#6B7280' : 'inherit'
                                        }}
                                        disabled={snapshotForm.showDetails}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                    <button onClick={handleSaveSnapshot} style={{ padding: '10px', backgroundColor: snapshotForm.id ? 'var(--info-color)' : '#2ECC71', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                                        {snapshotForm.id ? t('common.update') : t('perf_modal.add_snapshot')}
                                    </button>
                                </div>

                                {snapshotForm.showDetails && (
                                    <div style={styles.detailsSection}>
                                        <h4 style={{ marginTop: 0, marginBottom: '10px', color: 'var(--secondary-color)', fontSize: '0.9rem' }}>{t('perf_modal.add_accounts_title') || 'Additionner vos comptes :'}</h4>
                                        {snapshotForm.details.map((detail, idx) => (
                                            <div key={detail.id} style={styles.detailRow}>
                                                <input
                                                    id={`detail-label-${detail.id}`}
                                                    name={`detail-label-${detail.id}`}
                                                    aria-label="Nom du compte"
                                                    type="text"
                                                    placeholder={t('perf_modal.detail_account_placeholder')}
                                                    value={detail.label}
                                                    onChange={(e) => handleUpdateDetail(detail.id, 'label', e.target.value)}
                                                    // AJOUT ICI : Sélection pour le champ texte
                                                    onFocus={(e) => e.target.select()}
                                                    style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                                />
                                                <CurrencyInput
                                                    id={`detail-value-${detail.id}`}
                                                    name={`detail-value-${detail.id}`}
                                                    aria-label="Valeur du compte"
                                                    value={detail.value}
                                                    onChange={(e) => handleUpdateDetail(detail.id, 'value', e.target.value)}
                                                    placeholder="0.00"
                                                    style={{ width: '120px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                                />
                                                <button onClick={() => handleRemoveDetail(detail.id)} style={{ background: 'none', border: 'none', color: 'var(--danger-color)', cursor: 'pointer' }}>
                                                    <TrashIcon style={{ width: '18px' }} />
                                                </button>
                                            </div>
                                        ))}
                                        <button onClick={handleAddDetailRow} style={{ background: 'none', border: '1px dashed var(--secondary-color)', color: 'var(--secondary-color)', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', width: '100%' }}>
                                            {t('perf_modal.add_account_row')}
                                        </button>
                                    </div>
                                )}

                                {snapshotForm.id && (<button onClick={() => setSnapshotForm({ id: null, date: new Date().toISOString().split('T')[0], value: '', details: [], showDetails: false })} style={{ gridColumn: '3', padding: '10px', backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>{t('common.cancel')}</button>)}
                            </div>

                            <div style={{ textAlign: 'center', marginBottom: '15px', fontSize: '0.9rem', color: 'var(--secondary-color)' }}>
                                {t('perf_modal.chart_invested')} :
                                <strong style={{ color: '#3498DB', marginLeft: '5px' }}>{formatCurrency(getInvestedAtDate(snapshotForm.date))}</strong>
                            </div>

                            {selectedSnapshots.length > 0 && (
                                <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                                    <button onClick={executeDeleteSnapshots} style={{ padding: '8px 15px', backgroundColor: 'var(--danger-color)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <TrashIcon style={{ width: '18px' }} /> {t('perf_modal.delete_selection')} ({selectedSnapshots.length})
                                    </button>
                                </div>
                            )}

                            <table style={styles.table}>
                                <thead>
                                    <tr>
                                        <th style={styles.checkboxTh}>
                                            <input
                                                id="select-all-snapshots"
                                                name="select-all-snapshots"
                                                aria-label="Sélectionner tous les relevés"
                                                type="checkbox"
                                                onChange={toggleAllSnapshots}
                                                checked={enrichedSnapshots.length > 0 && selectedSnapshots.length === enrichedSnapshots.length}
                                            />
                                        </th>
                                        <th style={styles.sortableTh} onClick={() => handleSortSnapshots('date')}>{t('common.date')} {getSortArrow(snapshotSort, 'date')}</th>
                                        <th style={styles.sortableTh} onClick={() => handleSortSnapshots('value')}>{t('perf_modal.chart_value')} {getSortArrow(snapshotSort, 'value')}</th>
                                        <th style={styles.th}>{t('perf_modal.total_invested')} <InfoTooltip text={t('perf_modal.tooltip_invested')} /></th>
                                        <th style={styles.sortableTh} onClick={() => handleSortSnapshots('gain')}>{t('perf_modal.gain_loss')} {getSortArrow(snapshotSort, 'gain')}</th>
                                        <th style={styles.sortableTh} onClick={() => handleSortSnapshots('pct')}>% {getSortArrow(snapshotSort, 'pct')}</th>
                                        <th style={{ ...styles.th, textAlign: 'center' }}>{t('common.action')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enrichedSnapshots.map((s, index) => (
                                        <tr key={`${s.id || 'snap'}-${index}`} style={{ backgroundColor: selectedSnapshots.includes(s.id) ? '#FFF5F5' : 'transparent' }}>
                                            <td style={styles.checkboxTd}>
                                                <input
                                                    id={`select-snapshot-${s.id}`}
                                                    name={`select-snapshot-${s.id}`}
                                                    aria-label={`Sélectionner le relevé du ${s.date}`}
                                                    type="checkbox"
                                                    checked={selectedSnapshots.includes(s.id)}
                                                    onChange={() => toggleSnapshotSelection(s.id)}
                                                />
                                            </td>
                                            <td style={styles.td}>{s.date}</td>
                                            <td style={{ ...styles.td, fontWeight: 'bold' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    {formatCurrency(s.value)}
                                                    {s.details && s.details.length > 0 && <DetailTooltip t={t} />}
                                                </div>
                                            </td>
                                            <td style={{ ...styles.td, color: 'var(--secondary-color)' }}>{formatCurrency(s.cost)}</td>
                                            <td style={{ ...styles.td, fontWeight: 'bold', color: s.gain >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{s.gain > 0 ? '+' : ''}{formatCurrency(s.gain)}</td>
                                            <td style={{ ...styles.td, color: s.pct >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{s.pct.toFixed(2)}%</td>
                                            <td style={{ ...styles.td, textAlign: 'center' }}>
                                                <button onClick={() => handleEditSnapshot(s)} style={styles.iconOnlyBtn} title={t('common.edit')}><PencilIcon style={{ width: '16px', color: 'var(--info-color)' }} /></button>
                                                <button onClick={() => onDeleteSnapshot(s.id)} style={styles.iconOnlyBtn} title={t('common.delete')}><TrashIcon style={{ width: '16px', color: 'var(--danger-color)' }} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                    {enrichedSnapshots.length === 0 && <tr><td colSpan="7" style={{ padding: '20px', textAlign: 'center', fontStyle: 'italic' }}>{t('perf_modal.empty_snapshots')}</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}