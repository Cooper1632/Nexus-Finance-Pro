import React, { useMemo } from 'react';
import { XMarkIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'; // IMPORT

const styles = {
    overlay: { 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, 
        display: 'flex', alignItems: 'center', justifyContent: 'center' 
    },
    content: { 
        backgroundColor: 'var(--card-background)', width: '95%', maxWidth: '900px', 
        borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.2)', 
        maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' 
    },
    header: { 
        padding: '20px', borderBottom: '1px solid var(--border-color)', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        backgroundColor: 'var(--background-color)' 
    },
    body: { flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '0' },
    th: { 
        textAlign: 'left', padding: '12px', borderBottom: '2px solid var(--border-color)', 
        fontSize: '0.9rem', color: 'var(--secondary-color)', position: 'sticky', top: 0, backgroundColor: 'var(--card-background)'
    },
    td: { padding: '12px', borderBottom: '1px solid var(--border-color)' },
    iconOnlyBtn: { 
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', 
        width: '32px', height: '32px', minWidth: '32px', borderRadius: '50%', 
        border: '1px solid var(--border-color)', backgroundColor: 'var(--card-background)', 
        cursor: 'pointer', padding: 0, margin: '0 2px' 
    }
};

export default function HoldingDetailsModal({ isOpen, onClose, symbol, transactions, onEditTransaction, onDeleteTransaction, formatCurrency, formatPrecise }) {
    const { t } = useTranslation(); // HOOK
    
    // Filtrer les transactions pour ce symbole uniquement
    const holdingTransactions = useMemo(() => {
        return (transactions || [])
            .filter(t => t.symbol === symbol)
            .sort((a, b) => new Date(b.date) - new Date(a.date)); // Plus récent en haut
    }, [transactions, symbol]);

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <div>
                        <h2 style={{margin:0, display:'flex', alignItems:'center', gap:'10px', color: 'var(--invest-color)'}}>
                            {t('holding_modal.title_history', {symbol})}
                        </h2>
                        <p style={{margin:0, fontSize:'0.85rem', color:'var(--secondary-color)', marginTop:'5px'}}>
                            {t('holding_modal.subtitle')}
                        </p>
                    </div>
                    <button onClick={onClose} style={{background:'none', border:'none', cursor:'pointer'}}><XMarkIcon style={{width:'28px', color:'var(--text-color)'}}/></button>
                </div>

                <div style={styles.body}>
                    {holdingTransactions.length > 0 ? (
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>{t('common.date')}</th>
                                    <th style={styles.th}>{t('investment.type')}</th>
                                    <th style={styles.th}>{t('investment.account')}</th>
                                    <th style={{...styles.th, textAlign:'right'}}>{t('investment.quantity')}</th>
                                    <th style={{...styles.th, textAlign:'right'}}>{t('investment.price')}</th>
                                    <th style={{...styles.th, textAlign:'right'}}>{t('investment.fees')}</th>
                                    <th style={{...styles.th, textAlign:'center'}}>{t('investment.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {holdingTransactions.map(tx => (
                                    <tr key={tx.id} style={{backgroundColor: 'var(--card-background)'}}>
                                        <td style={styles.td}>{tx.date}</td>
                                        <td style={styles.td}>
                                            <span style={{
                                                padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold',
                                                backgroundColor: tx.type === 'buy' ? 'rgba(46, 204, 113, 0.1)' : (tx.type === 'sell' ? 'rgba(231, 76, 60, 0.1)' : 'rgba(52, 152, 219, 0.1)'),
                                                color: tx.type === 'buy' ? 'var(--success-color)' : (tx.type === 'sell' ? 'var(--danger-color)' : 'var(--info-color)')
                                            }}>
                                                {tx.type === 'buy' ? t('investment.buy') : (tx.type === 'sell' ? t('investment.sell') : t('investment.dividend'))}
                                            </span>
                                        </td>
                                        <td style={styles.td}>{tx.account}</td>
                                        <td style={{...styles.td, textAlign:'right'}}>{tx.quantity}</td>
                                        <td style={{...styles.td, textAlign:'right'}}>{formatPrecise(tx.price)}</td>
                                        <td style={{...styles.td, textAlign:'right'}}>{formatCurrency(tx.fees)}</td>
                                        <td style={{...styles.td, textAlign:'center'}}>
                                            <button onClick={() => onEditTransaction(tx)} style={styles.iconOnlyBtn} title={t('common.edit')}>
                                                <PencilIcon style={{width:'16px', color:'var(--info-color)'}}/>
                                            </button>
                                            <button onClick={() => onDeleteTransaction(tx.id)} style={styles.iconOnlyBtn} title={t('common.delete')}>
                                                <TrashIcon style={{width:'16px', color:'var(--danger-color)'}}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div style={{textAlign:'center', padding:'40px', color:'var(--secondary-color)', fontStyle:'italic'}}>
                            {t('holding_modal.no_transactions', {symbol})}
                        </div>
                    )}
                </div>
                
                <div style={{padding: '15px 20px', borderTop: '1px solid var(--border-color)', textAlign: 'right', backgroundColor: 'var(--background-color)'}}>
                    <button onClick={onClose} style={{padding:'8px 20px', backgroundColor:'var(--secondary-color)', color:'white', border:'none', borderRadius:'6px', fontWeight:'bold', cursor:'pointer'}}>
                        {t('common.close')}
                    </button>
                </div>
            </div>
        </div>
    );
}