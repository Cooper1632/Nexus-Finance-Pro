import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useData } from '../context/DataContext';

// Petit composant pour l'infobulle
const InfoIcon = ({ text, align = 'center' }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    // Positionnement dynamique de l'infobulle
    let tooltipStyle = { left: '50%', transform: 'translateX(-50%)' };
    let arrowStyle = { left: '50%', marginLeft: '-6px' };

    if (align === 'right') {
        tooltipStyle = { right: '-5px', left: 'auto', transform: 'none' };
        arrowStyle = { right: '8px', left: 'auto' };
    } else if (align === 'left') {
        tooltipStyle = { left: '-5px', right: 'auto', transform: 'none' };
        arrowStyle = { left: '8px', right: 'auto' };
    }

    return (
        <span
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '6px', cursor: 'help', zIndex: 50 }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onClick={() => setIsVisible(!isVisible)}
        >
            <QuestionMarkCircleIcon style={{ width: '18px', color: 'var(--secondary-color)' }} />
            {isVisible && (
                <span style={{
                    position: 'absolute', bottom: '135%',
                    backgroundColor: '#2C3E50', color: '#fff', padding: '10px 12px', borderRadius: '8px',
                    fontSize: '0.8rem', fontWeight: 'normal', width: 'max-content', maxWidth: '220px',
                    whiteSpace: 'normal', zIndex: 9999, textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', lineHeight: '1.4',
                    border: '1px solid rgba(255,255,255,0.1)', ...tooltipStyle
                }}>
                    {text}
                    <span style={{
                        position: 'absolute', top: '100%', borderWidth: '6px', borderStyle: 'solid',
                        borderColor: '#2C3E50 transparent transparent transparent', ...arrowStyle
                    }}></span>
                </span>
            )}
        </span>
    );
};

export default function Thermometer({ title, percentage, value1, label1, value2, label2, barColor, miniItems, tooltip, warning, value2Color, smallFont, alignTooltip = 'center' }) {
    const { formatCurrency } = useData();

    // LOGIQUE DE COULEUR : Rouge si négatif ou si warning actif
    const isNegative = percentage < 0 || value1 < 0;
    const effectiveColor = (isNegative || warning) ? 'var(--danger-color)' : barColor;

    // On s'assure que la barre ne dépasse pas 100% et gère les pourcentages négatifs
    const displayPct = Math.min(100, Math.max(0, Math.abs(percentage)));

    const valueFontSize = smallFont ? '0.9rem' : '1rem';
    const showScrollIndicator = miniItems && miniItems.length > 5;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
            {title && (
                <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', marginBottom: warning ? '5px' : '10px', marginTop: '0' }}>
                    {title} {tooltip && <InfoIcon text={tooltip} align={alignTooltip} />}
                </h3>
            )}

            {warning && (
                <div style={{ backgroundColor: 'rgba(236, 112, 99, 0.1)', color: 'var(--danger-color)', padding: '5px', borderRadius: '4px', fontSize: '0.75rem', textAlign: 'center', marginBottom: '10px', border: '1px solid var(--danger-color)', fontWeight: 'bold' }}>
                    {warning}
                </div>
            )}

            <div className="thermometer" style={{ marginBottom: '10px' }}>
                <div className="thermometer-track">
                    <div className="thermometer-progress" style={{ width: `${displayPct}%`, backgroundColor: effectiveColor }}>
                        <span className="thermometer-label">{displayPct > 10 ? displayPct.toFixed(0) + '%' : ''}</span>
                    </div>
                </div>
                <div className="thermometer-legend" style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="legend-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#666', marginBottom: '2px' }}>
                            <span className="legend-dot" style={{ backgroundColor: effectiveColor, width: '8px', height: '8px', borderRadius: '50%' }}></span>{label1}
                        </div>
                        <strong style={{ color: (isNegative || warning) ? 'var(--danger-color)' : 'inherit', fontSize: valueFontSize }}>{formatCurrency(value1)}</strong>
                    </div>
                    {value2 !== undefined && (
                        <div className="legend-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#666', marginBottom: '2px' }}>
                                <span className="legend-dot" style={{ backgroundColor: 'var(--border-color)', width: '8px', height: '8px', borderRadius: '50%' }}></span>{label2}
                            </div>
                            <strong style={{ color: value2Color || 'inherit', fontSize: valueFontSize }}>{formatCurrency(value2)}</strong>
                        </div>
                    )}
                </div>
            </div>

            {miniItems && miniItems.length > 0 && (
                <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                    <div className="mini-thermometer-container" style={{
                        marginTop: '0',
                        overflowY: 'auto',
                        paddingRight: '5px',
                        borderTop: '1px dashed var(--border-color)',
                        paddingTop: '10px',
                        flex: 1,
                        minHeight: 0
                    }}>
                        {miniItems.map((item, idx) => {
                            // Logique identique pour les sous-éléments
                            const itemNegative = item.value < 0;
                            const itemColor = (itemNegative || item.warning) ? 'var(--danger-color)' : barColor;

                            return (
                                <div key={idx} className="mini-thermometer-item">
                                    <div className="mini-thermometer-labels">
                                        <span className="mini-label">{item.label}</span>
                                        <span className="mini-value" style={(item.warning || itemNegative) ? { color: 'var(--danger-color)', fontWeight: 'bold' } : {}}>
                                            {formatCurrency(item.value)} / {formatCurrency(item.total)}
                                        </span>
                                    </div>
                                    <div className="mini-thermometer-track">
                                        <div className="mini-thermometer-progress" style={{ width: `${Math.min(100, Math.abs(item.percentage))}%`, backgroundColor: itemColor }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}