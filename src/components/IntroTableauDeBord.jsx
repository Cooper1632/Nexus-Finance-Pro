import React from 'react';
import IntroModule from './IntroModule';
import { useTranslation } from 'react-i18next';

const IntroTableauDeBord = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    return (
        <IntroModule
            moduleId="dashboard"
            title={t('intro.dashboard.title')}
            introText={t('intro.dashboard.text')}
            features={t('intro.dashboard.features', { returnObjects: true })}
            isOpen={isOpen}
            onClose={onClose}
        />
    );
};

export default IntroTableauDeBord;
