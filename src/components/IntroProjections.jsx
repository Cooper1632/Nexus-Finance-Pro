import React from 'react';
import IntroModule from './IntroModule';
import { useTranslation } from 'react-i18next';

const IntroProjections = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    return (
        <IntroModule
            moduleId="projections"
            title={t('intro.projections.title')}
            introText={t('intro.projections.text')}
            features={t('intro.projections.features', { returnObjects: true })}
            isOpen={isOpen}
            onClose={onClose}
        />
    );
};

export default IntroProjections;
