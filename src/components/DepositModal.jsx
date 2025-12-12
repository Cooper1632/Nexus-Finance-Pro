import React, { useState, useMemo } from 'react';
import CurrencyInput from './CurrencyInput';
import { XMarkIcon, TrashIcon, PencilSquareIcon, BanknotesIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'; // IMPORT

const DepositModal = ({ isOpen, onClose, deposits, onSave, onDelete, formatCurrency }) => {
  const { t } = useTranslation(); // HOOK
  const [formData, setFormData] = useState({ id: undefined, date: new Date().toISOString().split('T')[0], amount: 0, account: 'CELI' });
  const [filterAccount, setFilterAccount] = useState('All');

  const summary = useMemo(() => {
    const sums = {}; let total = 0;
    if (deposits) { deposits.forEach(d => { sums[d.account] = (sums[d.account] || 0) + d.amount; total += d.amount; }); }
    return { sums, total };
  }, [deposits]);

  const processedDeposits = useMemo(() => {
    let data = deposits ? [...deposits] : [];
    if (filterAccount !== 'All') { data = data.filter(d => d.account === filterAccount); }
    return data.reverse().sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [deposits, filterAccount]);

  const handleSubmit = (shouldClose) => {
    if (!formData.date || (formData.amount || 0) <= 0) return alert(t('deposit_modal.alert_req'));
    onSave({ ...formData, id: formData.id || Date.now().toString(), amount: parseFloat(formData.amount) || 0 });
    if (shouldClose) { setFormData({ id: undefined, date: new Date().toISOString().split('T')[0], amount: 0, account: 'CELI' }); onClose(); }
    else { setFormData({ ...formData, id: undefined, amount: 0 }); }
  };

  const handleEdit = (item) => { setFormData(item); };
  const handleAmountChange = (e) => { setFormData(prev => ({ ...prev, amount: e.target.value })); };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="modal-container" style={{ backgroundColor: '#FFFFFF', width: '95%', maxWidth: '900px', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.2)', maxHeight: '90vh', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}><BanknotesIcon style={{ width: '24px', height: '24px', color: '#10B981' }} /> {t('deposit_modal.title')}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9CA3AF' }}><XMarkIcon style={{ width: '28px', height: '28px' }} /></button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#6B7280', textTransform: 'uppercase', marginBottom: '8px', marginTop: 0 }}>{t('deposit_modal.totals_by_account')}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {Object.entries(summary.sums).map(([acc, val]) => (
                  <div key={acc} style={{ backgroundColor: '#FFFFFF', padding: '4px 12px', borderRadius: '9999px', border: '1px solid #E5E7EB', fontSize: '0.875rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}><span style={{ fontWeight: '600', color: '#4B5563' }}>{acc}: </span><span style={{ fontWeight: 'bold', color: '#3B82F6' }}>{formatCurrency(val)}</span></div>
                ))}
                {Object.keys(summary.sums).length === 0 && <span style={{ color: '#9CA3AF', fontStyle: 'italic', fontSize: '0.875rem' }}>{t('deposit_modal.no_deposits')}</span>}
              </div>
            </div>
            <div style={{ backgroundColor: '#ECFDF5', border: '2px solid #10B981', padding: '12px 24px', borderRadius: '12px', textAlign: 'center', minWidth: '180px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('deposit_modal.total_deposits')}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10B981' }}>{formatCurrency(summary.total)}</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1F2937', marginBottom: '16px', paddingLeft: '12px', borderLeft: '4px solid #3B82F6' }}>{formData.id ? t('deposit_modal.edit_deposit') : t('deposit_modal.add_deposit')}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'end' }}>
              <div>
                <label htmlFor="dep-date" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>{t('common.date')}</label>
                <input id="dep-date" name="date" type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} style={{ width: '100%', borderRadius: '8px', border: '1px solid #D1D5DB', padding: '8px 12px', fontSize: '1rem' }} />
              </div>
              <div>
                <label htmlFor="dep-amount" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>{t('common.amount')}</label>
                <CurrencyInput id="dep-amount" name="amount" value={formData.amount} onChange={handleAmountChange} placeholder="0.00" style={{ width: '100%', borderRadius: '8px', border: '1px solid #D1D5DB', padding: '8px 12px', fontSize: '1rem' }} />
              </div>
              <div>
                <label htmlFor="dep-account" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>{t('perf_modal.account_label')}</label>
                <select id="dep-account" name="account" value={formData.account} onChange={e => setFormData({ ...formData, account: e.target.value })} style={{ width: '100%', borderRadius: '8px', border: '1px solid #D1D5DB', padding: '8px 12px', fontSize: '1rem', backgroundColor: '#fff' }}>
                  <option value="CELI">{t('common.account_types.celi')}</option><option value="REER">{t('common.account_types.reer')}</option><option value="CRI">{t('common.account_types.cri')}</option><option value="Non enregistré">{t('common.account_types.non_reg')}</option><option value="Autre">{t('common.account_types.other')}</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => handleSubmit(true)} style={{ flex: 1, backgroundColor: '#10B981', color: 'white', padding: '10px', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>{formData.id ? t('common.update') : t('common.save')}</button>
              {!formData.id && (<button onClick={() => handleSubmit(false)} style={{ flex: 1, backgroundColor: '#3B82F6', color: 'white', padding: '10px', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}><PlusIcon style={{ width: '20px', height: '20px' }} /> {t('deposit_modal.save_and_add')}</button>)}
              {formData.id && (<button onClick={() => setFormData({ id: undefined, date: new Date().toISOString().split('T')[0], amount: 0, account: 'CELI' })} style={{ padding: '10px 16px', border: '1px solid #D1D5DB', backgroundColor: 'white', color: '#374151', borderRadius: '8px', cursor: 'pointer' }}>{t('common.cancel')}</button>)}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1F2937', margin: 0 }}>{t('deposit_modal.history')}</h3>
              <div>
                <label htmlFor="filter-account" style={{ marginRight: '10px', fontSize: '0.875rem' }}>{t('deposit_modal.filter_label')}</label>
                <select id="filter-account" name="filter-account" value={filterAccount} onChange={e => setFilterAccount(e.target.value)} style={{ fontSize: '0.875rem', border: '1px solid #D1D5DB', borderRadius: '6px', padding: '4px 8px' }}>
                  <option value="All">{t('deposit_modal.all_accounts')}</option><option value="CELI">CELI</option><option value="REER">REER</option><option value="Non enregistré">Non enregistré</option>
                </select>
              </div>
            </div>
            <div style={{ overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#F9FAFB' }}><tr><th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>{t('common.date')}</th><th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>{t('perf_modal.account_label')}</th><th style={{ padding: '12px 16px', textAlign: 'right', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>{t('common.amount')}</th><th style={{ padding: '12px 16px', textAlign: 'center', fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>{t('common.action')}</th></tr></thead>
                <tbody style={{ backgroundColor: '#FFFFFF' }}>
                  {processedDeposits.map((deposit) => (
                    <tr key={deposit.id} style={{ borderTop: '1px solid #E5E7EB' }}>
                      <td style={{ padding: '16px', fontSize: '0.875rem', color: '#111827' }}>{deposit.date}</td>
                      <td style={{ padding: '16px', fontSize: '0.875rem', color: '#6B7280' }}><span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: '9999px', backgroundColor: '#EFF6FF', padding: '2px 8px', fontSize: '0.75rem', fontWeight: '500', color: '#1D4ED8' }}>{deposit.account}</span></td>
                      <td style={{ padding: '16px', fontSize: '0.875rem', textAlign: 'right', fontWeight: 'bold', color: '#111827' }}>{formatCurrency(deposit.amount)}</td>
                      <td style={{ padding: '16px', textAlign: 'center', fontSize: '0.875rem' }}>
                        <button onClick={() => handleEdit(deposit)} style={{ color: '#3B82F6', border: 'none', background: 'none', cursor: 'pointer', marginRight: '12px' }} title={t('common.edit')}><PencilSquareIcon style={{ width: '20px', height: '20px' }} /></button>
                        <button onClick={() => onDelete(deposit.id)} style={{ color: '#EF4444', border: 'none', background: 'none', cursor: 'pointer' }} title={t('common.delete')}><TrashIcon style={{ width: '20px', height: '20px' }} /></button>
                      </td>
                    </tr>
                  ))}
                  {processedDeposits.length === 0 && (<tr><td colSpan={4} style={{ padding: '32px', textAlign: 'center', fontSize: '0.875rem', color: '#6B7280', fontStyle: 'italic' }}>{t('deposit_modal.no_deposits')}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#F9FAFB', padding: '16px 24px', borderTop: '1px solid #E5E7EB', textAlign: 'right', borderRadius: '0 0 12px 12px' }}><button onClick={onClose} style={{ padding: '8px 24px', backgroundColor: '#FFFFFF', border: '1px solid #D1D5DB', borderRadius: '8px', color: '#374151', fontWeight: '500', cursor: 'pointer' }}>{t('common.close')}</button></div>
      </div>
    </div>
  );
};
export default DepositModal;