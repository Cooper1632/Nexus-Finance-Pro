import React from 'react';
import { XMarkIcon, DocumentDuplicateIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const styles = {
    overlay: { 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', 
        zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' 
    },
    content: { 
        backgroundColor: 'var(--card-background)', width: '90%', maxWidth: '450px', 
        borderRadius: '12px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', 
        display: 'flex', flexDirection: 'column', gap: '15px' 
    },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    title: { margin: 0, color: 'var(--text-color)', fontSize: '1.2rem', fontWeight: 'bold' },
    closeBtn: { background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)' },
    question: { margin: 0, color: 'var(--secondary-color)', fontSize: '0.95rem' },
    
    btnCopy: {
        padding: '15px', borderRadius: '10px', border: '2px solid var(--info-color)', 
        backgroundColor: 'rgba(52, 152, 219, 0.05)', display: 'flex', flexDirection: 'column', 
        gap: '5px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s'
    },
    btnEmpty: {
        padding: '15px', borderRadius: '10px', border: '2px solid var(--border-color)', 
        backgroundColor: 'var(--background-color)', display: 'flex', flexDirection: 'column', 
        gap: '5px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s'
    },
    btnTitle: { display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' },
    btnDesc: { fontSize: '0.85rem', color: 'var(--text-color)', opacity: 0.8 }
};

export default function ScenarioChoiceModal({ isOpen, onClose, onConfirm }) {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div style={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div style={styles.content}>
                
                <div style={styles.header}>
                    {/* AJOUT DE 'common.' DEVANT LES CLÉS */}
                    <h3 style={styles.title}>{t('common.scenario_modal_title')}</h3>
                    <button onClick={onClose} style={styles.closeBtn}>
                        <XMarkIcon style={{width:'24px'}}/>
                    </button>
                </div>
                
                <p style={styles.question}>{t('common.scenario_modal_question')}</p>

                <button 
                    onClick={() => onConfirm('copy')}
                    style={styles.btnCopy}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(52, 152, 219, 0.1)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(52, 152, 219, 0.05)'}
                >
                    <div style={{...styles.btnTitle, color:'var(--info-color)'}}>
                        <DocumentDuplicateIcon style={{width:'20px'}}/>
                        {t('common.btn_copy')}
                    </div>
                    <span style={styles.btnDesc}>{t('common.btn_copy_desc')}</span>
                </button>

                <button 
                    onClick={() => onConfirm('empty')}
                    style={styles.btnEmpty}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--secondary-color)'}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                    <div style={{...styles.btnTitle, color:'var(--text-color)'}}>
                        <SparklesIcon style={{width:'20px', color:'var(--warning-color)'}}/>
                        {t('common.btn_empty')}
                    </div>
                    <span style={styles.btnDesc}>{t('common.btn_empty_desc')}</span>
                </button>

            </div>
        </div>
    );
}