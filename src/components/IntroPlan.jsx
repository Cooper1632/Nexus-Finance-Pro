import React from 'react';
import IntroModule from './IntroModule';
import { useTranslation } from 'react-i18next';

const IntroPlan = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    return (
        <IntroModule
            moduleId="plan"
            title={t('intro.plan.title')}
            introText={t('intro.plan.text')}
            features={t('intro.plan.features', { returnObjects: true })}
            isOpen={isOpen}
            onClose={onClose}
        />
    );
};

export default IntroPlan;
