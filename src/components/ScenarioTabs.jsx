import React, { useState } from 'react';
import { PlusIcon, XMarkIcon, PencilIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import ConfirmationModal from './ConfirmationModal'; // <-- IMPORT DU NOUVEAU MODAL

const ScenarioTabs = ({ scenarios, activeIndex, onSelect, onAdd, onDelete, onRename, activeColor = 'var(--primary-color)' }) => {
    const { t } = useTranslation();
    const [editingIndex, setEditingIndex] = useState(null);
    const [tempName, setTempName] = useState("");
    
    // Nouveaux états pour gérer le Pop-up de suppression
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [scenarioToDelete, setScenarioToDelete] = useState(null);

    const startEditing = (e, index, currentName) => {
        e.stopPropagation();
        setEditingIndex(index);
        setTempName(currentName);
    };

    const saveName = (e, index) => {
        e.stopPropagation();
        onRename(index, tempName);
        setEditingIndex(null);
    };

    const cancelEditing = (e) => {
        e.stopPropagation();
        setEditingIndex(null);
    };

    // Nouvelle fonction de demande de suppression
    const requestDelete = (e, index) => {
        e.stopPropagation();
        if (scenarios.length <= 1) {
            alert(t('common.cannot_delete_last'));
            return;
        }
        // Au lieu de window.confirm, on ouvre le modal
        setScenarioToDelete(index);
        setShowDeleteModal(true);
    };

    // Fonction exécutée quand l'utilisateur confirme dans le modal
    const confirmDelete = () => {
        if (scenarioToDelete !== null) {
            onDelete(scenarioToDelete);
            setScenarioToDelete(null);
        }
    };

    const actionButtonStyle = {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px', 
        height: '30px',
        borderRadius: '50%',
        transition: 'background-color 0.2s',
        flexShrink: 0 
    };

    return (
        <>
            <div style={{display:'flex', gap:'10px', alignItems:'center', marginBottom:'20px', flexWrap:'wrap', padding:'10px', background:'var(--input-group-cluster-bg)', borderRadius:'8px'}}>
                {scenarios.map((sc, idx) => {
                    const isActive = idx === activeIndex;
                    const isEditing = idx === editingIndex;

                    return (
                        <div 
                            key={idx}
                            onClick={() => !isEditing && onSelect(idx)}
                            style={{
                                padding: isEditing ? '4px 8px' : '6px 10px 6px 15px', 
                                borderRadius:'8px', 
                                cursor: isEditing ? 'default' : 'pointer', 
                                backgroundColor: isActive ? activeColor : 'var(--card-background)',
                                color: isActive ? 'white' : 'var(--text-color)',
                                border: isActive ? `1px solid ${activeColor}` : '1px solid var(--border-color)',
                                display:'flex', alignItems:'center', gap:'5px',
                                boxShadow: isActive ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
                                transition: 'all 0.2s',
                                minWidth: '140px',
                                maxWidth: '240px',
                                justifyContent: 'space-between',
                                opacity: (isActive || isEditing) ? 1 : 0.75,
                                userSelect: 'none'
                            }}
                        >
                            {isEditing ? (
                                <div style={{display:'flex', alignItems:'center', gap:'2px', width:'100%'}}>
                                    <input 
                                        type="text" 
                                        value={tempName}
                                        onChange={(e) => setTempName(e.target.value)}
                                        autoFocus
                                        onKeyDown={(e) => { if(e.key === 'Enter') saveName(e, idx); }}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            width: '100%', border: 'none', borderRadius: '4px', padding: '6px',
                                            color: 'var(--text-color)', fontSize: '1rem',
                                            outline: '2px solid var(--info-color)'
                                        }}
                                    />
                                    <button onClick={(e) => saveName(e, idx)} style={{...actionButtonStyle, color: isActive ? 'white' : 'var(--success-color)'}} title={t('common.save')}>
                                        <CheckIcon style={{width:'20px'}}/>
                                    </button>
                                    <button onClick={cancelEditing} style={{...actionButtonStyle, color: isActive ? 'white' : 'var(--danger-color)'}} title={t('common.cancel')}>
                                        <XMarkIcon style={{width:'20px'}}/>
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <span style={{fontWeight:'bold', fontSize:'0.95rem', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', marginRight:'5px'}}>
                                        {sc.name}
                                    </span>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <button 
                                            onClick={(e) => startEditing(e, idx, sc.name)} 
                                            title={t('common.rename')}
                                            style={{...actionButtonStyle, color:'inherit', opacity: 0.8}}
                                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                        >
                                            <PencilIcon style={{width:'16px'}}/>
                                        </button>
                                        
                                        {scenarios.length > 1 && (
                                            <button 
                                                onClick={(e) => requestDelete(e, idx)} 
                                                title={t('common.delete')}
                                                style={{...actionButtonStyle, color:'inherit', opacity: 0.8}}
                                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                            >
                                                <XMarkIcon style={{width:'18px'}}/>
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
                
                <button 
                    onClick={onAdd} 
                    title={t('common.add_scenario')}
                    style={{
                        width:'42px', height:'42px', borderRadius:'50%', 
                        border:'1px solid var(--secondary-color)', 
                        backgroundColor: 'var(--secondary-color)', color:'white',
                        cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
                        padding: 0, flexShrink: 0, boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <PlusIcon style={{width:'24px', height:'24px'}}/>
                </button>
            </div>

            {/* --- INTÉGRATION DU MODAL --- */}
            <ConfirmationModal 
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={confirmDelete}
                title={t('common.delete') + " ?"}
                message={t('common.confirm_delete')}
                isDanger={true}
            />
        </>
    );
};

export default ScenarioTabs;