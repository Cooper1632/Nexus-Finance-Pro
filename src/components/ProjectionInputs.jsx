import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const InfoTooltip = ({ text }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            style={{ position: 'relative', display: 'inline-block', marginLeft: '5px', cursor: 'help', verticalAlign: 'middle' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <QuestionMarkCircleIcon style={{ width: '16px', color: 'var(--info-color)', opacity: 0.7 }} />
            <div style={{
                visibility: hover ? 'visible' : 'hidden', opacity: hover ? 1 : 0,
                width: '220px', backgroundColor: '#34495E', color: '#fff',
                textAlign: 'center', borderRadius: '6px', padding: '8px',
                position: 'absolute', zIndex: '100', bottom: '125%', left: '50%',
                transform: 'translateX(-50%)', transition: 'opacity 0.2s',
                fontSize: '0.75rem', lineHeight: '1.4', fontWeight: 'normal',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)', pointerEvents: 'none'
            }}>
                {text}
                <div style={{
                    position: 'absolute', top: '100%', left: '50%', marginLeft: '-5px',
                    borderWidth: '5px', borderStyle: 'solid',
                    borderColor: '#34495E transparent transparent transparent'
                }}></div>
            </div>
        </div>
    );
};

function ProjectionInputs({ scenario, updateScenario }) {
    const { t } = useTranslation();

    const handleChange = (field, value) => {
        updateScenario(field, value);
    };

    // Fonction pour sélectionner tout le texte quand on clique dans la case
    const handleFocus = (e) => e.target.select();

    return (
        <fieldset style={{ marginTop: '20px' }}>
            <legend>{t('projections.shared_params')}</legend>
            <div className="fieldset-grid">

                <div className="input-group">
                    <label htmlFor="sharedRate">{t('projections.annual_return')} <InfoTooltip text={t('projections.tooltip_rate')} /></label>
                    <div className="slider-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                            id="sharedRate"
                            name="sharedRate"
                            type="number"
                            value={scenario.sharedRate}
                            onChange={(e) => handleChange('sharedRate', e.target.value)}
                            onFocus={handleFocus}
                            style={{ width: '80px', textAlign: 'center', padding: '5px' }}
                        />
                        <input
                            id="sharedRate-slider"
                            name="sharedRate-slider"
                            type="range"
                            min="-20"
                            max="100"
                            step="0.5"
                            value={scenario.sharedRate}
                            onChange={(e) => handleChange('sharedRate', e.target.value)}
                            style={{ flex: 1, accentColor: scenario.sharedRate < 0 ? 'var(--danger-color)' : 'var(--secondary-color)' }}
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label htmlFor="sharedYears">{t('projections.horizon')} <InfoTooltip text={t('projections.tooltip_years')} /></label>
                    <div className="slider-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                            id="sharedYears"
                            name="sharedYears"
                            type="number"
                            value={scenario.sharedYears}
                            onChange={(e) => handleChange('sharedYears', e.target.value)}
                            onFocus={handleFocus}
                            style={{ width: '80px', textAlign: 'center', padding: '5px' }}
                        />
                        <input
                            id="sharedYears-slider"
                            name="sharedYears-slider"
                            type="range"
                            min="1"
                            max="100"
                            step="1"
                            value={scenario.sharedYears}
                            onChange={(e) => handleChange('sharedYears', e.target.value)}
                            style={{ flex: 1, accentColor: scenario.sharedYears < 0 ? 'var(--danger-color)' : 'var(--secondary-color)' }}
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label htmlFor="sharedInflation">{t('projections.inflation')} <InfoTooltip text={t('projections.tooltip_inflation')} /></label>
                    <div className="slider-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                            id="sharedInflation"
                            name="sharedInflation"
                            type="number"
                            value={scenario.sharedInflation}
                            onChange={(e) => handleChange('sharedInflation', e.target.value)}
                            onFocus={handleFocus}
                            style={{ width: '80px', textAlign: 'center', padding: '5px' }}
                        />
                        <input
                            id="sharedInflation-slider"
                            name="sharedInflation-slider"
                            type="range"
                            min="0"
                            max="20"
                            step="0.1"
                            value={scenario.sharedInflation}
                            onChange={(e) => handleChange('sharedInflation', e.target.value)}
                            style={{ flex: 1, accentColor: scenario.sharedInflation < 0 ? 'var(--danger-color)' : 'var(--secondary-color)' }}
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label htmlFor="sharedFees">{t('projections.fees')} <InfoTooltip text={t('projections.tooltip_fees')} /></label>
                    <div className="slider-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input
                            id="sharedFees"
                            name="sharedFees"
                            type="number"
                            value={scenario.sharedFees}
                            onChange={(e) => handleChange('sharedFees', e.target.value)}
                            onFocus={handleFocus}
                            style={{ width: '80px', textAlign: 'center', padding: '5px' }}
                        />
                        <input
                            id="sharedFees-slider"
                            name="sharedFees-slider"
                            type="range"
                            min="0"
                            max="5"
                            step="0.1"
                            value={scenario.sharedFees}
                            onChange={(e) => handleChange('sharedFees', e.target.value)}
                            style={{ flex: 1, accentColor: scenario.sharedFees < 0 ? 'var(--danger-color)' : 'var(--secondary-color)' }}
                        />
                    </div>
                </div>

            </div>
        </fieldset>
    );
}

export default ProjectionInputs;