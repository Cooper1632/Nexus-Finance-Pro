import React, { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';
import { XMarkIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'; // IMPORT

const styles = {
    overlay: { 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, 
        display: 'flex', alignItems: 'center', justifyContent: 'center' 
    },
    content: { 
        backgroundColor: 'var(--card-background)', width: '95%', maxWidth: '650px', 
        borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.2)', 
        maxHeight: '90vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '25px' 
    },
    header: { 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' 
    },
    sectionTitle: {
        fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--secondary-color)', 
        marginTop: '15px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'
    },
    line: { flex: 1, height: '1px', backgroundColor: 'var(--border-color)' },
    formGrid: { 
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'end' 
    },
    fullWidth: { gridColumn: '1 / -1' },
    label: { 
        display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px', 
        fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-color)' 
    },
    input: { 
        width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', 
        backgroundColor: 'var(--background-color)', fontSize: '1rem' 
    },
    select: { 
        width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', 
        backgroundColor: '#FFF8E1', fontSize: '1rem', cursor: 'pointer' 
    },
    btnGroup: { marginTop: '25px', display: 'flex', justifyContent: 'flex-end', gap: '10px' },
    tooltipContainer: { position: 'relative', display: 'inline-block', cursor: 'help' },
    tooltipText: { 
        visibility: 'hidden', width: '180px', backgroundColor: '#34495E', color: '#fff', 
        textAlign: 'left', borderRadius: '6px', padding: '10px', position: 'absolute', 
        zIndex: '100', bottom: '135%', left: '-10px', opacity: '0', transition: 'opacity 0.2s', 
        fontSize: '0.75rem', lineHeight: '1.4', fontWeight: 'normal', textTransform: 'none', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)', pointerEvents: 'none' 
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
            <QuestionMarkCircleIcon style={{width:'16px', color:'var(--info-color)', opacity: 0.7}}/>
            <div style={{...styles.tooltipText, visibility: hover ? 'visible' : 'hidden', opacity: hover ? 1 : 0}}>
                {text}
                <div style={{position:'absolute', top:'100%', left:'14px', borderWidth:'5px', borderStyle:'solid', borderColor:'#34495E transparent transparent transparent'}}></div>
            </div>
        </div>
    );
};

export default function TransactionModal({ isOpen, onClose, onSave, transactionToEdit, currentHoldings = [] }) {
  const { t } = useTranslation(); // HOOK
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    type: 'buy',
    symbol: '',
    quantity: '',
    price: '',
    currency: 'CAD',
    fees: 0,
    account: 'CELI'
  });

  useEffect(() => {
    if (isOpen) {
        if (transactionToEdit) {
            setFormData(transactionToEdit);
        } else {
            setFormData({
                date: new Date().toISOString().split('T')[0],
                type: 'buy',
                symbol: '',
                quantity: '',
                price: '',
                currency: 'CAD',
                fees: 0,
                account: 'CELI'
            });
        }
    }
  }, [transactionToEdit, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHoldingSelect = (e) => {
      const symbol = e.target.value;
      if (!symbol) return;

      const holding = currentHoldings.find(h => h.symbol === symbol);
      if (holding) {
          setFormData(prev => ({
              ...prev,
              symbol: holding.symbol,
              type: 'sell',
              quantity: holding.quantity,
              price: holding.currentPrice || '',
              account: holding.account || 'CELI'
          }));
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.symbol || !formData.date) return alert(t('transaction.alert_req'));

    const quantity = parseFloat(formData.quantity);

    if (formData.type === 'sell') {
        const holding = currentHoldings.find(h => h.symbol === formData.symbol);
        const currentQty = holding ? holding.quantity : 0;
        
        let effectiveQty = currentQty;
        if (transactionToEdit && transactionToEdit.type === 'buy' && transactionToEdit.symbol === formData.symbol) {
             effectiveQty -= parseFloat(transactionToEdit.quantity);
        }

        if (quantity > effectiveQty + 0.0001) {
            const confirmSell = window.confirm(
                t('transaction.alert_sell_excess', {qty: quantity, symbol: formData.symbol, owned: effectiveQty.toFixed(4)})
            );
            if (!confirmSell) return;
        }
    }
    
    onSave({
        ...formData,
        quantity: quantity,
        price: parseFloat(formData.price),
        fees: parseFloat(formData.fees)
    });
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.content}>
        <div style={styles.header}>
            <h3 style={{margin:0, color: 'var(--secondary-color)'}}>{transactionToEdit ? t('common.save') : t('transaction.title_add')}</h3>
            <button onClick={onClose} style={{background:'none', border:'none', cursor:'pointer', color:'var(--text-color)'}}><XMarkIcon style={{width:'24px'}}/></button>
        </div>

        <form onSubmit={handleSubmit}>
            
            {!transactionToEdit && currentHoldings.length > 0 && (
                <div style={{marginBottom: '20px'}}>
                    <label htmlFor="auto-fill-holding" style={{...styles.label, color:'var(--info-color)'}}>{t('transaction.auto_select')}</label>
                    <select 
                        id="auto-fill-holding" 
                        name="auto-fill-holding" 
                        onChange={handleHoldingSelect} 
                        style={styles.select}
                    >
                        <option value="">{t('transaction.choose_placeholder')}</option>
                        {currentHoldings.map(h => (
                            <option key={h.symbol} value={h.symbol}>
                                {h.symbol} ({h.quantity})
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div style={styles.sectionTitle}>
                <span>{t('common.description')}</span>
                <div style={styles.line}></div>
            </div>

            <div style={styles.formGrid}>
                <div>
                    <label htmlFor="tx-date" style={styles.label}>{t('common.date')}</label>
                    <input id="tx-date" type="date" name="date" value={formData.date} onChange={handleChange} style={styles.input} required />
                </div>
                <div>
                    <label htmlFor="tx-type" style={styles.label}>{t('investment.type')}</label>
                    <select id="tx-type" name="type" value={formData.type} onChange={handleChange} style={styles.input}>
                        <option value="buy">{t('investment.buy')}</option>
                        <option value="sell">{t('investment.sell')}</option>
                        <option value="dividend">{t('investment.dividend')}</option>
                    </select>
                </div>
                
                <div style={styles.fullWidth}>
                    <label htmlFor="tx-symbol" style={styles.label}>{t('investment.symbol')} <InfoTooltip text="Ex: AAPL, VFV.TO"/></label>
                    <input id="tx-symbol" type="text" name="symbol" value={formData.symbol} onChange={(e) => handleChange({target:{name:'symbol', value:e.target.value.toUpperCase()}})} style={{...styles.input, backgroundColor: '#FEF9E7', fontWeight: 'bold'}} required placeholder="SYM" />
                </div>

                <div>
                    <label htmlFor="tx-quantity" style={styles.label}>{t('investment.quantity')}</label>
                    <input id="tx-quantity" type="number" step="any" name="quantity" value={formData.quantity} onChange={handleChange} disabled={formData.type === 'dividend'} style={{...styles.input, backgroundColor: '#FEF9E7'}} placeholder="0" />
                </div>
                <div>
                    <label htmlFor="tx-price" style={styles.label}>{t('investment.price')}</label>
                    <CurrencyInput id="tx-price" name="price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} style={{...styles.input, backgroundColor: '#FEF9E7'}} placeholder="0.00" />
                </div>

                <div>
                    <label htmlFor="tx-fees" style={styles.label}>{t('investment.fees')}</label>
                    <CurrencyInput id="tx-fees" name="fees" value={formData.fees} onChange={(e) => setFormData({...formData, fees: e.target.value})} style={{...styles.input, backgroundColor: '#FEF9E7'}} placeholder="0.00" />
                </div>
                <div>
                    <label htmlFor="tx-currency" style={styles.label}>{t('investment.currency')}</label>
                    <select id="tx-currency" name="currency" value={formData.currency} onChange={handleChange} style={styles.input}>
                        <option value="CAD">CAD ($)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                    </select>
                </div>

                <div style={styles.fullWidth}>
                    <label htmlFor="tx-account" style={styles.label}>{t('investment.account')}</label>
                    <select id="tx-account" name="account" value={formData.account} onChange={handleChange} style={{...styles.input, backgroundColor: '#FEF9E7'}}>
                        <option value="CELI">CELI</option>
                        <option value="REER">REER</option>
                        <option value="CRI">CRI</option>
                        <option value="Non enregistré">Non enregistré</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
            </div>

            <div style={styles.btnGroup}>
                <button type="button" onClick={onClose} style={{padding:'10px 20px', border:'1px solid var(--danger-color)', borderRadius:'6px', background:'white', color:'var(--danger-color)', cursor:'pointer'}}>{t('common.cancel')}</button>
                <button type="submit" style={{padding:'10px 20px', border:'none', borderRadius:'6px', background:'var(--success-color)', color:'white', fontWeight:'bold', cursor:'pointer'}}>{t('common.save')}</button>
            </div>
        </form>
      </div>
    </div>
  );
}