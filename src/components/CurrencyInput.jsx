import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const CurrencyInput = ({ value, onChange, name, placeholder, className = "currency-input", style = {}, disabled = false, id }) => {
    const { i18n } = useTranslation();
    const [displayValue, setDisplayValue] = useState('');
    
    // On utilise une référence directe vers l'input pour être plus précis qu'avec un ID
    const inputRef = useRef(null);
    const fallbackId = useRef(`input-${Math.random().toString(36).substr(2, 9)}`);
    const finalId = id || fallbackId.current;
    const finalName = name || finalId;

    const formatNumber = (num) => {
        if (num === '' || num === null || num === undefined || isNaN(num)) return '';
        return new Intl.NumberFormat(i18n.language, { maximumFractionDigits: 10 }).format(num);
    };

    const parseNumber = (str) => {
        if (!str) return '';
        if (typeof str === 'number') return str;
        let clean = str.toString().replace(/[^0-9.,-]/g, '');
        clean = clean.replace(',', '.');
        return clean;
    };

    // Met à jour l'affichage si la valeur externe change, MAIS seulement si on n'est pas en train d'écrire dedans
    useEffect(() => {
        // On vérifie si cet input précis a le focus
        const isFocused = inputRef.current && document.activeElement === inputRef.current;
        
        if (!isFocused) {
             setDisplayValue(formatNumber(value));
        }
    }, [value, i18n.language]);

    const handleFocus = (e) => {
        const rawVal = parseNumber(e.target.value);
        setDisplayValue(rawVal === 0 ? '' : rawVal);
        
        // CORRECTION MAJEURE ICI :
        // On attend un tout petit peu, mais on vérifie si l'élément est TOUJOURS celui qui a le focus
        // avant de faire le "select()". Ça empêche le curseur de sauter si on clique vite ailleurs.
        setTimeout(() => {
            if (inputRef.current && document.activeElement === inputRef.current) {
                inputRef.current.select();
            }
        }, 10); 
    };

    const handleBlur = (e) => {
        const rawVal = parseNumber(e.target.value);
        setDisplayValue(formatNumber(rawVal));
        if (onChange) {
            onChange({
                target: {
                    name: finalName,
                    value: rawVal
                }
            });
        }
    };

    const handleChange = (e) => {
        setDisplayValue(e.target.value);
    };

    return (
        <input
            ref={inputRef} // On attache la référence ici
            id={finalId}
            name={finalName}
            type="text"
            inputMode="decimal"
            value={displayValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={className}
            style={style}
            disabled={disabled}
            autoComplete="off"
        />
    );
};

export default CurrencyInput;