import React from 'react';
import IntroModule from './IntroModule';
import { useTranslation } from 'react-i18next';

const IntroBudget = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    return (
        <IntroModule
            moduleId="budget"
            title={t('intro.budget.title')}
            introText={t('intro.budget.text')}
            features={t('intro.budget.features', { returnObjects: true })}
            isOpen={isOpen}
            onClose={onClose}
        />
    );
};

export default IntroBudget;
