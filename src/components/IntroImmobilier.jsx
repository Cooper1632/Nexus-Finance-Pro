import React from 'react';
import IntroModule from './IntroModule';
import { useTranslation } from 'react-i18next';

const IntroImmobilier = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    return (
        <IntroModule
            moduleId="immobilier"
            title={t('intro.immobilier.title')}
            introText={t('intro.immobilier.text')}
            features={t('intro.immobilier.features', { returnObjects: true })}
            isOpen={isOpen}
            onClose={onClose}
        />
    );
};

export default IntroImmobilier;
