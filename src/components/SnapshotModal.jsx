import React, { useState, useEffect } from 'react';
import { XMarkIcon, TrashIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import CurrencyInput from './CurrencyInput';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next'; // IMPORT

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    content: { backgroundColor: 'var(--card-background)', width: '95%', maxWidth: '900px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '25px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '20px' },
    th: { textAlign: 'left', padding: '10px', borderBottom: '2px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--secondary-color)' },
    td: { padding: '10px', borderBottom: '1px solid var(--border-color)' },
    form: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '15px', alignItems: 'end', backgroundColor: 'var(--background-color)', padding: '15px', borderRadius: '8px', marginBottom: '20px' },
    tooltipContainer: { position: 'relative', display: 'inline-block', cursor: 'help', marginLeft: '5px' },
    tooltipText: { visibility: 'hidden', width: '250px', backgroundColor: '#34495E', color: '#fff', textAlign: 'left', borderRadius: '6px', padding: '10px', position: 'absolute', zIndex: '100', bottom: '135%', left: '-100px', opacity: '0', transition: 'opacity 0.2s', fontSize: '0.75rem', lineHeight: '1.4', fontWeight: 'normal', textTransform: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', pointerEvents: 'none' }
};

const InfoTooltip = ({ text }) => {
    const [hover, setHover] = useState(false);
    return (
        <div style={styles.tooltipContainer} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <QuestionMarkCircleIcon style={{ width: '16px', color: 'var(--info-color)', opacity: 0.7 }} />
            <div style={{ ...styles.tooltipText, visibility: hover ? 'visible' : 'hidden', opacity: hover ? 1 : 0 }}>
                {text}
                <div style={{ position: 'absolute', top: '100%', left: '50%', marginLeft: '-5px', borderWidth: '5px', borderStyle: 'solid', borderColor: '#34495E transparent transparent transparent' }}></div>
            </div>
        </div>
    );
};

export default function SnapshotModal({ isOpen, onClose, snapshots, deposits, onSave, onDelete, formatCurrency }) {
    const { t } = useTranslation(); // HOOK
    const [newSnap, setNewSnap] = useState({ date: new Date().toISOString().split('T')[0], value: '', cost: '' });

    useEffect(() => {
        if (!isOpen) return;
        const targetDate = new Date(newSnap.date);
        const previousSnapshots = (snapshots || []).filter(s => new Date(s.date) < targetDate);
        previousSnapshots.sort((a, b) => new Date(a.date) - new Date(b.date));
        const lastSnapshot = previousSnapshots[previousSnapshots.length - 1];
        let baseCost = 0;
        let lastDate = new Date('2000-01-01');
        if (lastSnapshot) { baseCost = lastSnapshot.cost; lastDate = new Date(lastSnapshot.date); }
        const newDeposits = (deposits || []).reduce((sum, d) => { const dDate = new Date(d.date); if (dDate > lastDate && dDate <= targetDate) return sum + d.amount; return sum; }, 0);
        const suggestedCost = baseCost + newDeposits;
        if (newSnap.cost === '' || newSnap.cost == 0) setNewSnap(prev => ({ ...prev, cost: suggestedCost }));
    }, [newSnap.date, isOpen, snapshots, deposits]);

    if (!isOpen) return null;

    const handleAdd = () => {
        if (!newSnap.date || !newSnap.value) return alert(t('invest.alert_date_value'));
        const finalCost = newSnap.cost === '' ? parseFloat(newSnap.value) : parseFloat(newSnap.cost);
        onSave({ id: Date.now().toString(), date: newSnap.date, value: parseFloat(newSnap.value) || 0, cost: finalCost || 0 });
        setNewSnap({ date: new Date().toISOString().split('T')[0], value: '', cost: '' });
    };

    const sortedData = (snapshots || []).map(s => { const gain = s.value - s.cost; const pct = s.cost > 0 ? (gain / s.cost * 100) : 0; return { ...s, gain, pct }; }).sort((a, b) => new Date(a.date) - new Date(b.date));
    const tableData = [...sortedData].reverse();

    const chartData = {
        labels: sortedData.map(s => s.date),
        datasets: [
            { label: t('perf_modal.current_value'), data: sortedData.map(s => s.value), borderColor: '#2ECC71', backgroundColor: 'rgba(46, 204, 113, 0.1)', fill: true, tension: 0.3 },
            { label: t('snap_modal.cost_label'), data: sortedData.map(s => s.cost), borderColor: '#3498DB', backgroundColor: 'rgba(52, 152, 219, 0.05)', borderDash: [5, 5], fill: true, tension: 0.3 }
        ]
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <h3 style={{ margin: 0 }}>{t('snap_modal.title')}</h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '24px' }} /></button>
                </div>
                <div style={{ height: '300px', marginBottom: '20px' }}>
                    <Line data={chartData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}` } } }, scales: { y: { ticks: { callback: (v) => formatCurrency(v) } } } }} />
                </div>
                <div style={styles.form}>
                    <div>
                        <label htmlFor="snap-date" style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('common.date')}</label>
                        <input id="snap-date" name="snap-date" type="date" value={newSnap.date} onChange={e => setNewSnap({ ...newSnap, date: e.target.value })} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>
                    <div>
                        <label htmlFor="snap-value" style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('perf_modal.current_value')}</label>
                        <CurrencyInput id="snap-value" name="snap-value" value={newSnap.value} onChange={(e) => setNewSnap({ ...newSnap, value: e.target.value })} placeholder="0.00" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontWeight: 'bold', color: 'var(--success-color)' }} />
                    </div>
                    <div>
                        <label htmlFor="snap-cost" style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.9rem' }}>{t('snap_modal.cost_label')} <InfoTooltip text={t('snap_modal.cost_tooltip')} /></label>
                        <CurrencyInput id="snap-cost" name="snap-cost" value={newSnap.cost} onChange={(e) => setNewSnap({ ...newSnap, cost: e.target.value })} placeholder="0.00" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', color: 'var(--info-color)' }} />
                        <div style={{ fontSize: '0.75rem', color: 'var(--secondary-color)', marginTop: '2px', fontStyle: 'italic' }}>{t('snap_modal.cost_note')}</div>
                    </div>
                    <button onClick={handleAdd} style={{ gridColumn: '4', padding: '8px 15px', backgroundColor: 'var(--success-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', height: '38px', display: 'flex', alignItems: 'center', gap: '5px', alignSelf: 'start', marginTop: '28px' }}>
                        <PlusIcon style={{ width: '20px' }} /> {t('common.add')}
                    </button>
                </div>
                <table style={styles.table}>
                    <thead><tr><th style={styles.th}>{t('common.date')}</th><th style={styles.th}>{t('perf_modal.current_value')}</th><th style={styles.th}>{t('snap_modal.cost_label')}</th><th style={styles.th}>{t('perf_modal.gain_loss')}</th><th style={styles.th}>%</th><th style={{ ...styles.th, textAlign: 'center' }}>{t('common.action')}</th></tr></thead>
                    <tbody>
                        {tableData.map(s => (
                            <tr key={s.id}>
                                <td style={styles.td}>{s.date}</td>
                                <td style={{ ...styles.td, fontWeight: 'bold' }}>{formatCurrency(s.value)}</td>
                                <td style={{ ...styles.td, color: 'var(--secondary-color)' }}>{formatCurrency(s.cost)}</td>
                                <td style={{ ...styles.td, color: s.gain >= 0 ? 'var(--success-color)' : 'var(--danger-color)', fontWeight: 'bold' }}>{s.gain > 0 ? '+' : ''}{formatCurrency(s.gain)}</td>
                                <td style={{ ...styles.td, color: s.pct >= 0 ? 'var(--success-color)' : 'var(--danger-color)' }}>{s.pct.toFixed(2)}%</td>
                                <td style={{ ...styles.td, textAlign: 'center' }}><button onClick={() => onDelete(s.id)} style={{ background: 'none', border: 'none', color: 'var(--danger-color)', cursor: 'pointer' }}><TrashIcon style={{ width: '18px' }} /></button></td>
                            </tr>
                        ))}
                        {tableData.length === 0 && <tr><td colSpan="6" style={{ padding: '20px', textAlign: 'center', fontStyle: 'italic' }}>{t('snap_modal.empty')}</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}