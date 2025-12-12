import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'; // IMPORT

const styles = {
    overlay: {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)', zIndex: 2000,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    content: {
        backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '500px',
        borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        display: 'flex', flexDirection: 'column', overflow: 'hidden'
    },
    header: {
        padding: '15px 20px', borderBottom: '1px solid var(--border-color)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backgroundColor: 'var(--background-color)'
    },
    body: { padding: '20px' },
    textarea: {
        width: '100%', height: '150px', padding: '10px', borderRadius: '8px',
        border: '1px solid var(--border-color)', resize: 'vertical',
        fontFamily: 'inherit', fontSize: '1rem'
    },
    footer: {
        padding: '15px 20px', borderTop: '1px solid var(--border-color)',
        display: 'flex', justifyContent: 'flex-end', gap: '10px',
        backgroundColor: 'var(--background-color)'
    }
};

export default function NoteModal({ isOpen, onClose, initialNote, title, onSave }) {
    const { t } = useTranslation(); // HOOK
    const [note, setNote] = useState('');

    useEffect(() => {
        setNote(initialNote || '');
    }, [initialNote, isOpen]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave(note);
        onClose();
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <h3 style={{margin:0, fontSize:'1.1rem'}}>{title || t('note_modal.default_title')}</h3>
                    <button onClick={onClose} style={{background:'none', border:'none', cursor:'pointer', color:'var(--secondary-color)'}}>
                        <XMarkIcon style={{width:'24px'}}/>
                    </button>
                </div>
                <div style={styles.body}>
                    <textarea 
                        id="note-content"
                        name="note-content"
                        aria-label="Contenu de la note"
                        style={styles.textarea} 
                        value={note} 
                        onChange={(e) => setNote(e.target.value)}
                        placeholder={t('note_modal.placeholder')}
                        autoFocus
                    />
                </div>
                <div style={styles.footer}>
                    <button onClick={onClose} style={{padding:'8px 16px', borderRadius:'6px', border:'1px solid var(--border-color)', background:'white', cursor:'pointer'}}>{t('common.cancel')}</button>
                    <button onClick={handleSave} style={{padding:'8px 16px', borderRadius:'6px', border:'none', background:'var(--primary-color)', color:'white', fontWeight:'bold', cursor:'pointer'}}>{t('common.save')}</button>
                </div>
            </div>
        </div>
    );
}