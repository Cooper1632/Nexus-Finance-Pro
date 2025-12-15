import React from 'react';
import IntroModule from './IntroModule';
import { useTranslation } from 'react-i18next';

const IntroRemboursement = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    return (
        <IntroModule
            moduleId="remboursement"
            title={t('intro.remboursement.title')}
            introText={t('intro.remboursement.text')}
            features={t('intro.remboursement.features', { returnObjects: true })}
            isOpen={isOpen}
            onClose={onClose}
        />
    );
};

export default IntroRemboursement;
