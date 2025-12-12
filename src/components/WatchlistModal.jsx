import React, { useState, useMemo } from 'react';
import { XMarkIcon, TrashIcon, PlusIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import CurrencyInput from './CurrencyInput';
import NoteModal from './NoteModal';
import { useTranslation } from 'react-i18next'; // IMPORT

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    content: { backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '900px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', maxHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
    header: { padding: '20px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    body: { padding: '20px', overflowY: 'auto' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '25px' },
    th: { textAlign: 'left', padding: '12px', borderBottom: '2px solid var(--border-color)', color: 'var(--secondary-color)', cursor: 'pointer', userSelect: 'none' },
    td: { padding: '12px', borderBottom: '1px solid var(--border-color)' },
    inputGroup: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '15px', alignItems: 'end', backgroundColor: 'var(--background-color)', padding: '20px', borderRadius: '8px' }
};

export default function WatchlistModal({ isOpen, onClose, watchlist, onSave, onDelete, formatCurrency }) {
    const { t } = useTranslation(); // HOOK
    const [newItem, setNewItem] = useState({ symbol: '', price: '', target: '' });
    
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
    const [noteModalOpen, setNoteModalOpen] = useState(false);
    const [currentNoteItem, setCurrentNoteItem] = useState(null);

    const sortedWatchlist = useMemo(() => {
        let data = watchlist ? [...watchlist] : [];
        if (sortConfig.key) {
            data.sort((a, b) => {
                let valA, valB;
                if (sortConfig.key === 'date') {
                    valA = new Date(a.createdAt || a.date).getTime();
                    valB = new Date(b.createdAt || b.date).getTime();
                } else {
                    valA = a[sortConfig.key];
                    valB = b[sortConfig.key];
                }
                if (valA === valB) return 0;
                if (valA === null || valA === undefined) return 1;
                if (valB === null || valB === undefined) return -1;
                if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
                if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return data;
    }, [watchlist, sortConfig]);

    if (!isOpen) return null;

    const handleAdd = () => {
        if (!newItem.symbol || !newItem.price) return alert(t('watchlist.alert_req'));
        
        const todaySimple = new Date().toISOString().split('T')[0];
        const nowExact = new Date().toISOString();

        onSave({
            id: Date.now().toString(),
            symbol: newItem.symbol.toUpperCase(),
            price: parseFloat(newItem.price) || 0,
            target: parseFloat(newItem.target) || null,
            date: todaySimple,   
            createdAt: nowExact, 
            note: ''
        });
        setNewItem({ symbol: '', price: '', target: '' });
    };

    const openNote = (item) => {
        setCurrentNoteItem(item);
        setNoteModalOpen(true);
    };

    const saveNote = (text) => {
        if (currentNoteItem) {
            const updatedItem = { ...currentNoteItem, note: text };
            onSave(updatedItem);
        }
    };

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
        setSortConfig({ key, direction });
    };

    return (
        <>
            <div style={styles.overlay}>
                <div style={styles.content}>
                    <div style={styles.header}>
                        <h3 style={{margin:0}}>{t('watchlist.title')}</h3>
                        <button onClick={onClose} style={{background:'none', border:'none', cursor:'pointer'}}><XMarkIcon style={{width:'24px'}}/></button>
                    </div>
                    <div style={styles.body}>
                        <div style={styles.inputGroup}>
                            <div>
                                <label htmlFor="wl-symbol" style={{fontSize:'0.8rem', fontWeight:'600'}}>{t('watchlist.symbol')}</label>
                                <input 
                                    id="wl-symbol"
                                    name="wl-symbol"
                                    type="text" 
                                    value={newItem.symbol} 
                                    onChange={e => setNewItem({...newItem, symbol: e.target.value})} 
                                    style={{width:'100%', padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}} 
                                    placeholder="AAPL" 
                                />
                            </div>
                            <div>
                                <label htmlFor="wl-price" style={{fontSize:'0.8rem', fontWeight:'600'}}>{t('watchlist.current_price')}</label>
                                <CurrencyInput 
                                    id="wl-price"
                                    name="wl-price"
                                    value={newItem.price} 
                                    onChange={(e) => setNewItem({...newItem, price: e.target.value})} 
                                    placeholder="0.00" 
                                    style={{width:'100%', padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}} 
                                />
                            </div>
                            <div>
                                <label htmlFor="wl-target" style={{fontSize:'0.8rem', fontWeight:'600'}}>{t('watchlist.target_opt')}</label>
                                <CurrencyInput 
                                    id="wl-target"
                                    name="wl-target"
                                    value={newItem.target} 
                                    onChange={(e) => setNewItem({...newItem, target: e.target.value})} 
                                    placeholder="0.00" 
                                    style={{width:'100%', padding:'10px', border:'1px solid #ccc', borderRadius:'4px'}} 
                                />
                            </div>
                            <button onClick={handleAdd} style={{padding:'10px 15px', backgroundColor:'var(--success-color)', color:'white', border:'none', borderRadius:'4px', cursor:'pointer', height:'42px', display:'flex', alignItems:'center', justifyContent:'center'}}><PlusIcon style={{width:'20px'}}/></button>
                        </div>

                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th} onClick={() => requestSort('date')}>{t('common.date')} {sortConfig.key==='date' && (sortConfig.direction==='asc'?'▲':'▼')}</th>
                                    <th style={styles.th} onClick={() => requestSort('symbol')}>{t('watchlist.symbol')} {sortConfig.key==='symbol' && (sortConfig.direction==='asc'?'▲':'▼')}</th>
                                    <th style={styles.th} onClick={() => requestSort('price')}>{t('watchlist.tracked_price')} {sortConfig.key==='price' && (sortConfig.direction==='asc'?'▲':'▼')}</th>
                                    <th style={styles.th} onClick={() => requestSort('target')}>{t('watchlist.target')} {sortConfig.key==='target' && (sortConfig.direction==='asc'?'▲':'▼')}</th>
                                    <th style={{...styles.th, textAlign:'center', cursor:'default'}}>{t('common.note')}</th>
                                    <th style={{...styles.th, textAlign:'center', cursor:'default'}}>{t('common.action')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedWatchlist.map(item => (
                                    <tr key={item.id} style={{backgroundColor: item.target && item.price <= item.target ? '#ECFDF5' : 'transparent'}}>
                                        <td style={styles.td}>{item.date}</td>
                                        <td style={styles.td}><strong>{item.symbol}</strong></td>
                                        <td style={styles.td}>{formatCurrency(item.price)}</td>
                                        <td style={styles.td}>
                                            {item.target ? (
                                                <span style={{color: item.price <= item.target ? 'var(--success-color)' : 'inherit', fontWeight: item.price <= item.target ? 'bold' : 'normal'}}>
                                                    {formatCurrency(item.target)}
                                                </span>
                                            ) : '-'}
                                        </td>
                                        <td style={{...styles.td, textAlign:'center'}}>
                                            <button 
                                                onClick={() => openNote(item)} 
                                                title={item.note ? item.note : t('watchlist.add_note')}
                                                style={{background:'none', border:'none', cursor:'pointer', color: item.note ? 'var(--info-color)' : 'var(--secondary-color)'}}
                                            >
                                                <ChatBubbleBottomCenterTextIcon style={{width:'22px'}}/>
                                            </button>
                                        </td>
                                        <td style={{...styles.td, textAlign:'center'}}>
                                            <button onClick={() => onDelete(item.id)} style={{background:'none', border:'none', color:'var(--danger-color)', cursor:'pointer'}}><TrashIcon style={{width:'20px'}}/></button>
                                        </td>
                                    </tr>
                                ))}
                                {sortedWatchlist.length === 0 && <tr><td colSpan="6" style={{padding:'30px', textAlign:'center', fontStyle:'italic', color:'#999'}}>{t('watchlist.empty')}</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <NoteModal 
                isOpen={noteModalOpen}
                onClose={() => setNoteModalOpen(false)}
                initialNote={currentNoteItem?.note}
                title={t('watchlist.note_title', {symbol: currentNoteItem?.symbol})}
                onSave={saveNote}
            />
        </>
    );
}