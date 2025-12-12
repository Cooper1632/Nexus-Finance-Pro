import React, { useState, useRef, useEffect } from 'react';
import {
    XMarkIcon,
    Bars3Icon,
    ClipboardDocumentIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next'; // IMPORT

const styles = {
    container: (pos) => ({
        position: 'fixed', left: pos.x, top: pos.y, width: '320px',
        backgroundColor: 'var(--card-background)', border: '1px solid var(--border-color)',
        borderRadius: '18px', boxShadow: '0 15px 40px rgba(0,0,0,0.3)', zIndex: 10000,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        backdropFilter: 'blur(10px)', fontFamily: "'Segoe UI', sans-serif", height: 'auto'
    }),
    header: {
        backgroundColor: '#000000', // BLACK
        color: '#F1C40F', // YELLOW TEXT
        padding: '10px 15px', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', cursor: 'grab', userSelect: 'none', borderBottom: '2px solid #F1C40F' // Yellow accent
    },
    displayContainer: {
        backgroundColor: 'var(--background-color)', color: 'var(--text-color)', padding: '15px',
        textAlign: 'right', borderBottom: '1px solid var(--border-color)', display: 'flex',
        flexDirection: 'column', justifyContent: 'flex-end', minHeight: '90px', height: 'auto', position: 'relative'
    },
    historyText: {
        fontSize: '0.85rem', color: 'var(--secondary-color)', minHeight: '1.2em', overflow: 'hidden',
        opacity: 0.7, marginBottom: '2px', marginRight: '25px'
    },
    mainText: {
        fontSize: '2rem', fontWeight: '700', lineHeight: 1.2, wordBreak: 'break-all',
        whiteSpace: 'normal', overflowWrap: 'anywhere'
    },
    memoryIndicator: {
        position: 'absolute', top: '5px', left: '10px', fontSize: '0.75rem', fontWeight: 'bold', color: '#F1C40F'
    },
    keypad: {
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', padding: '15px', backgroundColor: 'var(--card-background)'
    },
    btn: {
        height: '50px', width: '50px', borderRadius: '50%', border: 'none', fontSize: '1.1rem',
        fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.1s', margin: '0 auto', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    btnNum: { backgroundColor: 'var(--background-color)', color: 'var(--text-color)' },
    btnOp: { backgroundColor: '#333333', color: '#F1C40F', fontSize: '1.3rem' }, // Dark + Yellow
    btnFunc: { backgroundColor: '#e0e0e0', color: '#333', fontSize: '0.9rem' },
    btnAC: { backgroundColor: '#E74C3C', color: 'white', fontSize: '1rem', fontWeight: 'bold' }, // RED
    btnMem: { backgroundColor: 'rgba(241, 196, 15, 0.1)', color: '#F1C40F', fontSize: '0.8rem', fontWeight: 'bold' },
    btnEq: { backgroundColor: '#F1C40F', color: 'black', fontSize: '1.4rem' }, // YELLOW

    copyBtn: {
        position: 'absolute', top: '10px', right: '10px', background: 'transparent',
        border: 'none', cursor: 'pointer', color: 'var(--secondary-color)', opacity: 0.6, padding: '5px'
    },
    closeBtn: {
        background: 'transparent', border: 'none', cursor: 'pointer', color: '#E74C3C', // RED
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px'
    }
};

export default function MiniCalculator({ onClose }) {
    const { t } = useTranslation(); // HOOK
    const [position, setPosition] = useState({ x: window.innerWidth - 350, y: window.innerHeight - 600 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStartPos = useRef({ x: 0, y: 0 });

    const [input, setInput] = useState('0');
    const [history, setHistory] = useState('');
    const [memory, setMemory] = useState(0);
    const [resetNext, setResetNext] = useState(false);

    // --- LOGIQUE DRAG & DROP (SOURIS ET TOUCH) ---
    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStartPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    const handleTouchStart = (e) => {
        // Prevent scrolling while starting to drag
        if (e.cancelable) e.preventDefault();
        setIsDragging(true);
        const touch = e.touches[0];
        dragStartPos.current = { x: touch.clientX - position.x, y: touch.clientY - position.y };
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault(); // Prevent text selection
            const newX = e.clientX - dragStartPos.current.x;
            const newY = e.clientY - dragStartPos.current.y;
            const boundedX = Math.max(0, Math.min(window.innerWidth - 320, newX));
            const boundedY = Math.max(0, Math.min(window.innerHeight - 600, newY));
            setPosition({ x: boundedX, y: boundedY });
        };
        const handleMouseUp = () => { setIsDragging(false); };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            if (e.cancelable) e.preventDefault(); // Prevent scrolling
            const touch = e.touches[0];
            const newX = touch.clientX - dragStartPos.current.x;
            const newY = touch.clientY - dragStartPos.current.y;
            const boundedX = Math.max(0, Math.min(window.innerWidth - 320, newX));
            const boundedY = Math.max(0, Math.min(window.innerHeight - 600, newY));
            setPosition({ x: boundedX, y: boundedY });
        };
        const handleTouchEnd = () => { setIsDragging(false); };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleTouchEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);

    // --- LOGIQUE CALCULATRICE ---
    const handleNum = (val) => {
        const errorMsg = t('calculator.error');
        if (resetNext || input === errorMsg || input === 'Infinity' || input === 'NaN') {
            setInput(val);
            setResetNext(false);
        } else {
            setInput(prev => prev === '0' ? val : prev + val);
        }
    };

    const handleOp = (op) => {
        setResetNext(false);
        const errorMsg = t('calculator.error');
        if (input === errorMsg || input === 'Infinity' || input === 'NaN') {
            setInput('0');
            return;
        }

        const lastChar = input.slice(-1);
        const stdOp = op === '×' ? '*' : (op === '÷' ? '/' : op);
        if (['+', '-', '*', '/'].includes(lastChar)) { setInput(prev => prev.slice(0, -1) + stdOp); }
        else { setInput(prev => prev + stdOp); }
    };

    const handleClear = () => { setInput('0'); setHistory(''); };

    const handleBackspace = () => {
        const errorMsg = t('calculator.error');
        if (input.length === 1 || input === errorMsg || input === 'Infinity' || input === 'NaN') { setInput('0'); }
        else { setInput(prev => prev.slice(0, -1)); }
    };

    // --- FONCTIONS MÉMOIRE ---
    const handleMC = () => { setMemory(0); setResetNext(true); };
    const handleMR = () => { setInput(memory.toString()); setResetNext(true); };
    const handleMPlus = () => {
        try {
            const expression = input.replace(/×/g, '*').replace(/÷/g, '/');
            // eslint-disable-next-line no-new-func
            const result = new Function('return ' + expression)();
            if (!isFinite(result) || isNaN(result)) throw new Error('Invalid');
            setMemory(prev => prev + result);
            setResetNext(true);
        } catch (e) { setInput(t('calculator.error')); }
    };
    const handleMMinus = () => {
        try {
            const expression = input.replace(/×/g, '*').replace(/÷/g, '/');
            // eslint-disable-next-line no-new-func
            const result = new Function('return ' + expression)();
            if (!isFinite(result) || isNaN(result)) throw new Error('Invalid');
            setMemory(prev => prev - result);
            setResetNext(true);
        } catch (e) { setInput(t('calculator.error')); }
    };

    const handleCalculate = () => {
        try {
            const expression = input.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
            // eslint-disable-next-line no-new-func
            const result = new Function('return ' + expression)();
            const formattedResult = parseFloat(result.toFixed(8)).toString();
            setHistory(input + ' =');
            setInput(formattedResult);
            setResetNext(true);
        } catch (e) { setInput(t('calculator.error')); setResetNext(true); }
    };

    const handleSpecial = (type) => {
        const current = parseFloat(input);
        if (isNaN(current)) return;
        let res = 0;
        if (type === 'sqrt') res = Math.sqrt(current);
        if (type === 'sq') res = current * current;
        setInput(parseFloat(res.toFixed(4)).toString());
        setResetNext(true);
    };

    const copyToClipboard = () => { navigator.clipboard.writeText(input); };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            if (/^[0-9]$/.test(key)) { e.preventDefault(); handleNum(key); }
            else if (key === '.' || key === ',') { e.preventDefault(); handleNum('.'); }
            else if (key === '+') { e.preventDefault(); handleOp('+'); }
            else if (key === '-') { e.preventDefault(); handleOp('-'); }
            else if (key === '*' || key === 'x') { e.preventDefault(); handleOp('*'); }
            else if (key === '/') { e.preventDefault(); handleOp('/'); }
            else if (key === 'Enter' || key === '=') { e.preventDefault(); handleCalculate(); }
            else if (key === 'Backspace') { e.preventDefault(); handleBackspace(); }
            else if (key === 'Escape' || key === 'Delete') { e.preventDefault(); handleClear(); }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => { window.removeEventListener('keydown', handleKeyDown); };
    }, [input, resetNext]);
    return (
        <div style={styles.container(position)}>
            <div style={{ ...styles.header, cursor: isDragging ? 'grabbing' : 'grab' }} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Bars3Icon style={{ width: '20px', opacity: 0.8 }} />
                    <span style={{ fontWeight: '600', letterSpacing: '0.5px' }}>Nexus</span>
                </div>
                <button onClick={onClose} style={styles.closeBtn} title={t('calculator.close')}>
                    <XMarkIcon style={{ width: '24px' }} />
                </button>
            </div>

            <div style={styles.displayContainer}>
                {memory !== 0 && <div style={styles.memoryIndicator}>M</div>}
                <button onClick={copyToClipboard} style={styles.copyBtn} title={t('calculator.copy')}>
                    <ClipboardDocumentIcon style={{ width: '18px' }} />
                </button>
                <div style={styles.historyText}>{history}</div>
                <div style={styles.mainText}>{input}</div>
            </div>

            <div style={styles.keypad}>
                <button style={{ ...styles.btn, ...styles.btnMem }} onClick={handleMC} title={t('common.calculator.clear_memory')}>MC</button>
                <button style={{ ...styles.btn, ...styles.btnMem }} onClick={handleMR} title={t('common.calculator.recall_memory')}>MR</button>
                <button style={{ ...styles.btn, ...styles.btnMem }} onClick={handleMMinus} title={t('common.calculator.memory_minus')}>M-</button>
                <button style={{ ...styles.btn, ...styles.btnMem }} onClick={handleMPlus} title={t('common.calculator.memory_plus')}>M+</button>

                <button style={{ ...styles.btn, ...styles.btnAC }} onClick={handleClear} title={t('calculator.clear_all')}>AC</button>
                <button style={{ ...styles.btn, ...styles.btnFunc }} onClick={() => handleSpecial('sqrt')}>√</button>
                <button style={{ ...styles.btn, ...styles.btnFunc }} onClick={() => handleSpecial('sq')}>x²</button>
                <button style={{ ...styles.btn, ...styles.btnOp }} onClick={() => handleOp('/')}>÷</button>

                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('7')}>7</button>
                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('8')}>8</button>
                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('9')}>9</button>
                <button style={{ ...styles.btn, ...styles.btnOp }} onClick={() => handleOp('*')}>×</button>

                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('4')}>4</button>
                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('5')}>5</button>
                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('6')}>6</button>
                <button style={{ ...styles.btn, ...styles.btnOp }} onClick={() => handleOp('-')}>-</button>

                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('1')}>1</button>
                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('2')}>2</button>
                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('3')}>3</button>
                <button style={{ ...styles.btn, ...styles.btnOp }} onClick={() => handleOp('+')}>+</button>

                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('0')}>0</button>
                <button style={{ ...styles.btn, ...styles.btnNum }} onClick={() => handleNum('.')}>.</button>
                <button style={{ ...styles.btn, ...styles.btnFunc }} onClick={handleBackspace}>⌫</button>
                <button style={{ ...styles.btn, ...styles.btnEq }} onClick={handleCalculate}>=</button>
            </div>
        </div >
    );
}