import React from 'react';
import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const styles = {
    overlay: { 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', 
        zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' 
    },
    content: { 
        backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '400px', 
        borderRadius: '12px', padding: '25px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', 
        display: 'flex', flexDirection: 'column', gap: '15px', animation: 'fadeIn 0.2s ease-out' 
    },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    title: { margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-color)', display:'flex', alignItems:'center', gap:'10px' },
    message: { color: 'var(--secondary-color)', fontSize: '0.95rem', lineHeight: '1.5' },
    btnGroup: { display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' },
    btnCancel: { 
        padding: '10px 20px', borderRadius: '8px', border: '1px solid var(--border-color)', 
        backgroundColor: 'var(--background-color)', cursor: 'pointer', fontWeight: '600', color: 'var(--text-color)' 
    },
    btnConfirm: (isDanger) => ({ 
        padding: '10px 20px', borderRadius: '8px', border: 'none', 
        backgroundColor: isDanger ? 'var(--danger-color)' : 'var(--primary-color)', 
        color: 'white', cursor: 'pointer', fontWeight: 'bold', 
        boxShadow: isDanger ? '0 4px 10px rgba(231, 76, 60, 0.3)' : 'none'
    })
};

export default function ConfirmationModal({ isOpen, onClose, onConfirm, title, message, isDanger = false }) {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div style={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <h3 style={styles.title}>
                        {isDanger && <ExclamationTriangleIcon style={{width:'24px', color:'var(--danger-color)'}}/>}
                        {title || t('common.warning')}
                    </h3>
                    <button onClick={onClose} style={{background:'none', border:'none', cursor:'pointer', color:'var(--text-color)'}}>
                        <XMarkIcon style={{width:'24px'}}/>
                    </button>
                </div>
                
                <p style={styles.message}>
                    {message || t('common.confirm_delete')}
                </p>

                <div style={styles.btnGroup}>
                    <button onClick={onClose} style={styles.btnCancel}>
                        {t('common.cancel')}
                    </button>
                    <button onClick={() => { onConfirm(); onClose(); }} style={styles.btnConfirm(isDanger)}>
                        {t('common.confirm')}
                    </button>
                </div>
            </div>
        </div>
    );
}