import React, { useMemo } from 'react';
import { XMarkIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'; // IMPORT

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)', zIndex: 2200, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    content: { backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxHeight: '85vh', overflowY: 'auto', padding: '25px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' },
    alertBox: { backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '15px', marginBottom: '15px', display: 'flex', gap: '10px' },
    successBox: { backgroundColor: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: '8px', padding: '20px', textAlign: 'center', color: '#065F46' }
};

export default function DiagnosticModal({ isOpen, onClose, transactions }) {
    const { t } = useTranslation(); // HOOK



    // Logique de diagnostic
    const problems = useMemo(() => {
        const issues = [];
        const holdings = {};
        const sorted = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));

        sorted.forEach(tx => {
            if (!holdings[tx.symbol]) holdings[tx.symbol] = 0;

            if (tx.type === 'buy') {
                holdings[tx.symbol] += parseFloat(tx.quantity);
            } else if (tx.type === 'sell') {
                if (holdings[tx.symbol] < parseFloat(tx.quantity) - 0.0001) {
                    issues.push({
                        id: tx.id,
                        date: tx.date,
                        symbol: tx.symbol,
                        type: t('diagnostic.error_sell_impossible'),
                        details: t('diagnostic.error_sell_details', { qty: tx.quantity, owned: holdings[tx.symbol].toFixed(4) })
                    });
                }
                holdings[tx.symbol] -= parseFloat(tx.quantity);
                if (holdings[tx.symbol] < 0) holdings[tx.symbol] = 0;
            }
        });
        return issues;
    }, [transactions, t]);

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <h3 style={{ margin: 0 }}>{t('diagnostic.title')}</h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><XMarkIcon style={{ width: '24px' }} /></button>
                </div>

                {problems.length === 0 ? (
                    <div style={styles.successBox}>
                        <CheckCircleIcon style={{ width: '48px', margin: '0 auto 10px' }} />
                        <h3>{t('diagnostic.success_title')}</h3>
                        <p>{t('diagnostic.success_msg')}</p>
                    </div>
                ) : (
                    <div>
                        <p style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ExclamationTriangleIcon style={{ width: '24px', color: '#F39C12' }} />
                            <strong>{problems.length} {t('diagnostic.issues_detected')}</strong> :
                        </p>
                        {problems.map((prob, idx) => (
                            <div key={idx} style={styles.alertBox}>
                                <ExclamationTriangleIcon style={{ width: '24px', color: '#DC2626', flexShrink: 0 }} />
                                <div>
                                    <strong style={{ color: '#DC2626' }}>{prob.symbol} - {prob.date}</strong>
                                    <p style={{ margin: '5px 0 0', fontSize: '0.9rem' }}>{prob.details}</p>
                                </div>
                            </div>
                        ))}
                        <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '20px' }}>
                            {t('diagnostic.advice')}
                        </p>
                    </div>
                )}

                <button onClick={onClose} style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>{t('common.close')}</button>
            </div>
        </div>
    );
}