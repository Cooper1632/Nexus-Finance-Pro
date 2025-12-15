import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { InformationCircleIcon, CheckBadgeIcon, SparklesIcon } from '@heroicons/react/24/outline'; // More icons
import { useTranslation } from 'react-i18next';

const IntroModule = ({ moduleId, title, introText, features, isOpen, onClose }) => {
    const { t } = useTranslation();
    const [dontShowAgain, setDontShowAgain] = useState(false);

    // When modal opens, reset the checkbox state AND clear the "seen" flag
    // This allows the modal to reappear on next visit if the user closes it without checking "Don't show again"
    useEffect(() => {
        if (isOpen) {
            setDontShowAgain(false);
            localStorage.removeItem(`nexus_intro_${moduleId}_seen`);
        }
    }, [isOpen, moduleId]);

    const handleClose = () => {
        if (dontShowAgain) {
            localStorage.setItem(`nexus_intro_${moduleId}_seen`, 'true');
        }
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        backgroundColor: '#E0F2FE', // Light blue bg
                        padding: '8px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <InformationCircleIcon style={{ width: '24px', color: '#0284C7' }} /> {/* Darker blue icon */}
                    </div>
                    <span style={{
                        background: 'linear-gradient(90deg, #0284C7, #2563EB)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '700',
                        fontSize: '1.3rem'
                    }}>
                        {title}
                    </span>
                </div>
            }
            zIndex={2000}
            footer={
                <button
                    onClick={handleClose}
                    style={{
                        padding: '10px 28px',
                        background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '1rem',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)', // Blue shadow
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 6px 15px rgba(37, 99, 235, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
                    }}
                >
                    {t('common.got_it')}
                </button>
            }
        >
            <div style={{ color: '#4B5563' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6', color: '#374151' }}>
                    {introText}
                </p>

                <div style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '1px solid #E2E8F0',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                }}>
                    <h4 style={{
                        color: '#0F172A',
                        marginBottom: '16px',
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <SparklesIcon style={{ width: '20px', color: '#F59E0B' }} /> {/* Gold/Orange sparkles */}
                        {t('common.features_title')}
                    </h4>

                    <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                        {features.map((feature, index) => (
                            <li key={index} style={{
                                marginBottom: '12px',
                                position: 'relative',
                                paddingLeft: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '0.95rem',
                                color: '#334155'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '2px',
                                    backgroundColor: '#DCFCE7', // Light green
                                    borderRadius: '50%',
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CheckBadgeIcon style={{ width: '16px', color: '#16A34A' }} /> {/* Green Check */}
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{
                    marginTop: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        color: '#64748B',
                        userSelect: 'none',
                        transition: 'color 0.2s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#334155'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#64748B'}
                    >
                        <input
                            type="checkbox"
                            checked={dontShowAgain}
                            onChange={(e) => setDontShowAgain(e.target.checked)}
                            style={{
                                marginRight: '10px',
                                width: '16px',
                                height: '16px',
                                cursor: 'pointer',
                                accentColor: '#2563EB'
                            }}
                        />
                        {t('common.dont_show_again')}
                    </label>
                </div>
            </div>
        </Modal>
    );
};

export default IntroModule;
