import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 3000, // Z-Index very high to be above everything
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)'
    },
    panel: {
        backgroundColor: 'var(--card-background)',
        color: 'var(--text-color)',
        borderRadius: '12px',
        padding: '25px',
        width: '95%',
        maxWidth: '650px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 3001
    },
    closeButton: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--secondary-color)'
    },
    headerIcon: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 15px auto'
    },
    section: {
        marginBottom: '15px',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid transparent',
        backgroundColor: 'rgba(255, 255, 255, 0.03)'
    },
    exampleBox: {
        marginTop: '8px',
        padding: '10px',
        backgroundColor: 'var(--background-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        fontSize: '0.85rem',
        fontStyle: 'italic',
        opacity: 0.9
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '20px',
        fontSize: '1rem'
    }
};

export default function HelpPerformanceModal({ isOpen, onClose }) {
    const { t } = useTranslation();

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" style={{ position: 'relative', zIndex: 3000 }} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div style={styles.overlay} />
                </Transition.Child>

                <div style={{ position: 'fixed', inset: 0, zIndex: 3001, overflowY: 'auto' }}>
                    <div style={{ display: 'flex', minHeight: '100%', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel style={styles.panel}>
                                <button type="button" onClick={onClose} style={styles.closeButton}>
                                    <XMarkIcon style={{ width: '24px' }} />
                                </button>

                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <div style={styles.headerIcon}>
                                        <LightBulbIcon style={{ width: '28px', color: '#3498DB' }} />
                                    </div>
                                    <Dialog.Title as="h3" style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                                        {t('help_perf.modal_title')}
                                    </Dialog.Title>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', margin: 0 }}>
                                        {t('help_perf.modal_intro')}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {/* SECTION 1: VUE D'ENSEMBLE */}
                                    <div style={{ ...styles.section, backgroundColor: 'rgba(52, 152, 219, 0.05)', border: '1px solid rgba(52, 152, 219, 0.2)' }}>
                                        <h4 style={{ color: '#3498DB', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            1. {t('help_perf.tab_overview_title')}
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', margin: 0 }}>{t('help_perf.tab_overview_desc')}</p>
                                        <div style={styles.exampleBox}>
                                            <strong>Exemple :</strong> {t('help_perf.tab_overview_example')}
                                        </div>
                                    </div>

                                    {/* SECTION 2: GÉRER LES DÉPÔTS */}
                                    <div style={{ ...styles.section, backgroundColor: 'rgba(46, 204, 113, 0.05)', border: '1px solid rgba(46, 204, 113, 0.2)' }}>
                                        <h4 style={{ color: '#2ECC71', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            2. {t('help_perf.tab_deposits_title')}
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', margin: 0 }}>{t('help_perf.tab_deposits_desc')}</p>
                                        <div style={styles.exampleBox}>
                                            <strong>Exemple :</strong> {t('help_perf.tab_deposits_example')}
                                        </div>
                                    </div>

                                    {/* SECTION 3: JOURNAL DE VALEUR */}
                                    <div style={{ ...styles.section, backgroundColor: 'rgba(155, 89, 182, 0.05)', border: '1px solid rgba(155, 89, 182, 0.2)' }}>
                                        <h4 style={{ color: '#9B59B6', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            3. {t('help_perf.tab_journal_title')}
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', margin: 0 }}>{t('help_perf.tab_journal_desc')}</p>
                                        <div style={styles.exampleBox}>
                                            <strong>Exemple :</strong> {t('help_perf.tab_journal_example')}
                                        </div>
                                    </div>
                                </div>

                                <button type="button" onClick={onClose} style={styles.button}>
                                    {t('common.close') || 'Fermer'}
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
