import * as yf from 'yahoo-finance2';
console.log('Keys:', Object.keys(yf));
console.log('Default:', yf.default);
try {
    console.log('Default prototype:', Object.getPrototypeOf(yf.default));
} catch (e) { }
