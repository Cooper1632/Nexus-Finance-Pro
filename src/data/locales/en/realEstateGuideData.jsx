import React from 'react';
import {
    LightBulbIcon, CalculatorIcon, CurrencyDollarIcon, ChartBarIcon,
    ShieldCheckIcon, AcademicCapIcon, ScaleIcon, BookOpenIcon,
    HomeIcon, BanknotesIcon, WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const ICONS = {
    intro: LightBulbIcon,
    module: CalculatorIcon,
    flux: CurrencyDollarIcon,
    ratios: ChartBarIcon,
    risque: ShieldCheckIcon,
    strategie: AcademicCapIcon,
    fiscalite: ScaleIcon,
    glossaire: BookOpenIcon
};

export const realEstateGuideData = {
    sidebar: {
        title: "Real Estate Guide",
        sections: [
            { title: "Foundations", items: [{ id: 'intro', label: '1. Philosophy' }, { id: 'module', label: '2. Module Guide' }] },
            { title: "Financial Analysis", items: [{ id: 'flux', label: '3. Cashflow' }, { id: 'ratios', label: '4. Key Ratios' }, { id: 'risque', label: '5. Risk Analysis' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Pro Strategies' }, { id: 'fiscalite', label: '7. Taxes' }, { id: 'glossaire', label: '8. Full Glossary' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introduction: Leverage & Wealth",
            icon: 'intro',
            content: [
                { type: 'p', text: "Real estate investment is unique because it uses <strong>leverage</strong> (mortgage) to amplify your gains. You use the bank's money (often 80% of the price) to control an asset 100%, while enjoying 100% of the appreciation and cashflow." },
                { type: 'p', text: "However, real estate is unforgiving. A $100/month calculation error can become a $30,000 loss over 25 years. That's why the <strong>Real Estate</strong> module in Nexus Finance Pro was created: to turn vague estimates into precise math." },
                {
                    type: 'box', style: 'pro', title: 'Pro Secret', content: [
                        { type: 'p', text: "You make your profit when you buy, not when you sell. If the numbers don't work on Day 1 (Negative Cashflow), don't count on 'future appreciation' to save you. That is speculation, not investing." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. How to use the Real Estate Module",
            icon: 'module',
            content: [
                { type: 'p', text: "This module is your profitability calculator. Here is a detailed explanation of each field to help you make precise analyses." },

                { type: 'subtitle', title: "Acquisition Section (The Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Purchase Price:</strong> The amount accepted by the seller. Do not include startup costs (notary, taxes) here, as the module calculates ratios based on asset value.",
                        "<strong>Down Payment:</strong> The cash you must take out of your pocket.<br/><em>Impact:</em> A lower down payment increases your Return on Investment (ROI) via leverage, but increases monthly payments and reduces Cashflow.",
                        "<strong>Mortgage Payment (Annual):</strong> The TOTAL amount paid to the bank in a year (Principal + Interest). Multiply your monthly payment by 12.<br/><em>Tip:</em> Use the <strong>Repayment</strong> module to calculate this exact figure.",
                        "<strong>Principal Paydown (Year 1):</strong> The portion of your payments that pays down debt in the first year. This is forced savings. You find this on your mortgage amortization schedule."
                    ]
                },

                { type: 'subtitle', title: "Operations Section (The Truth)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Classic Trap', content: [
                        { type: 'p', text: "Underestimating expenses. NEVER take the seller's numbers for granted. They often 'forget' management and maintenance." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Gross Income:</strong> Total of all rents if the building were 100% full all year.",
                        "<strong>Vacancy Rate (%):</strong> Percentage of time units will be empty (between tenants).<br/><em>Standard:</em> Always use at least <strong>3% to 5%</strong> purely for caution, even if full. Banks require this in their math.",
                        "<strong>Operating Expenses:</strong> The core reality. Include EVERYTHING: Taxes (Property), Insurance, Utilities (Common areas), Lawn/Snow, Ads, Management, and especially Maintenance (reserve).<br/><em>Rule of Thumb:</em> Expenses are often <strong>35% to 45%</strong> of gross revenue. If your calculation arrives at 15%, you forgot something."
                    ]
                },

                { type: 'subtitle', title: "Advanced Settings (The Future)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Appreciation %:</strong> How much the property value rises per year. Be conservative (2% to 3% to match inflation). This is the icing on the cake, not the cake.",
                        "<strong>Tax Amortization:</strong> Depreciation deduction allowed by government. Reduces taxes today but is 'recaptured' (taxed) upon sale. Ask an accountant.",
                        "<strong>Tax Rate %:</strong> Your marginal tax rate. Used to calculate real Net Cashflow after taxes."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Cashflow",
            icon: 'flux',
            content: [
                { type: 'p', text: "It is the oxygen of your investment. Without positive cashflow, you must pay out of pocket every month to keep the building. That is risky." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Gross Rental Income<br/>(-) Vacancy & Bad Debt (losses)<br/>= <strong>EFFECTIVE INCOME</strong><br/><br/>(-) Operating Expenses (Taxes, Insurance...)<br/>= <strong>NET OPERATING INCOME (NOI)</strong> <span style='color:var(--info-color)'>◄ Pure property performance</span><br/><br/>(-) Debt Service (Mortgage)<br/>= <strong>CASHFLOW</strong> <span style='color:var(--success-color)'>◄ Changes your life</span>" }
                    ]
                },
                { type: 'p', text: "<strong>NOI</strong> is crucial because it represents property performance <em>independent</em> of your financing. This is the figure banks use to evaluate economic value." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Performance Ratios",
            icon: 'ratios',
            content: [
                { type: 'p', text: "How to know if it's a good deal? Numbers don't lie." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate', code: 'NOI / Price', text: "Yield if you paid 100% cash. The absolute reference to compare properties.<br/><strong>Target:</strong> 4.5% to 6% (higher is better)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Annual Cashflow / Down Payment', text: "Real return on cash out of your pocket. Your 'true' interest rate.<br/><strong>Target:</strong> > 8% to 10%." },
                        { style: 'warning', title: 'Expense Ratio (OER)', code: 'Expenses / Gross Income', text: "Measures management efficiency. If > 55%, building is a sieve. If < 25%, numbers are likely fake.<br/><strong>Healthy Zone:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Gross Rent Multiplier (GRM)', code: 'Price / Gross Income', text: "'How many times revenue am I paying?' Useful for quick sorting, but dangerous as it ignores real expenses.<br/><strong>Standard:</strong> 12x to 18x+ (varies heavily by market)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Risk Analysis & Banking",
            icon: 'risque',
            content: [
                { type: 'p', text: "Before lending you hundreds of thousands, the bank looks at these ratios to ensure you won't default." },

                { type: 'subtitle', title: "Debt Service Coverage Ratio (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Mortgage Payment</span><br/>Do rents cover the mortgage? DSCR of <strong>1.25</strong> means for every $100 payment to bank, you have $125 net income. This is the safety margin required by banks.<br/><strong>Danger Zone:</strong> < 1.10." },

                { type: 'subtitle', title: "Loan-to-Value (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Loan Amount / Property Value</span><br/>The percentage of the building owned by the bank. Higher LTV = higher leverage, but higher risk." },

                { type: 'subtitle', title: "Break-Even Ratio" },
                { type: 'p', text: "Minimum occupancy to not lose money. If Break-even is 75%, you can have 25% vacancy and still pay bills. Lower is safer." },

                { type: 'subtitle', title: "Safety Margin" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Mortgage) / NOI</span><br/>Percentage of Net Income that can vanish before you hit negative cashflow. <strong>20%+</strong> margin is recommended." },

                { type: 'subtitle', title: "Loan Constant" },
                { type: 'p', text: "<span class='code-badge'>Total Annual Payment / Loan Amount</span><br/>True cost of your debt. <br/><strong>Positive Leverage Secret:</strong> If Cap Rate > Loan Constant, you get richer using bank's money." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Pro Strategies",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'BRRRR Strategy', content: [
                        { type: 'p', text: "Buy, Rehab, Rent, Refinance, Repeat.<br/><br/>The Holy Grail. Goal is to buy distressed, increase value via renovations (force appreciation), then refinance to pull out 100% of initial capital. You own the building for 'free' (infinite return)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Beginner)" },
                { type: 'p', text: "Buy a duplex/triplex and live in one unit.<br/><strong>Advantage:</strong> Reduced down payment. Tenants pay your mortgage. Best way to start." },

                { type: 'subtitle', title: "Internal Rate of Return (IRR)" },
                { type: 'p', text: "Beginners look at Cashflow. Pros look at IRR. IRR calculates annualized total return combining all 4 payors:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Monthly money.",
                        "2. <strong>Principal Paydown:</strong> Tenant pays debt (you get richer monthly).",
                        "3. <strong>Appreciation:</strong> Value rises with inflation.",
                        "4. <strong>Tax Benefits:</strong> Depreciation and deductions."
                    ]
                },
                { type: 'p', text: "Nexus Pro calculates this IRR for you over 10 years at the bottom of the module." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Real Estate Taxation",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Real estate is powerful, but taxes are waiting. Understanding these concepts can save thousands." },

                { type: 'subtitle', title: "Current vs Capital Expenses" },
                { type: 'p', text: "<strong>Current:</strong> Minor repairs (tap fix, paint). 100% deductible same year.<br/><strong>Capital:</strong> Major improvements (new roof, windows). Not instantly deductible. Added to building cost and depreciated over years." },

                { type: 'subtitle', title: "Depreciation Recapture" },
                { type: 'p', text: "If you take tax depreciation to reduce taxes annually, beware! Upon sale, if you sell for more than you bought, government 'recaptures' that depreciation and taxes it. It's a tax loan, not a gift." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Full Glossary",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Principal Paydown", def: "Portion of mortgage payment reducing debt. It is enrichment." },
                        { term: "Tax Depreciation", def: "Paper expense allowed by tax code that reduces taxable income." },
                        { term: "Appreciation", def: "Increase in property value over time." },
                        { term: "VTB (Vendor Take Back)", def: "Seller accepts to be paid later for part of price. A loan from seller to you." },
                        { term: "Cap Rate", def: "Yield without financing. NOI / Price." },
                        { term: "Cash-on-Cash", def: "Liquid return on invested cash. Cashflow / Down Payment." },
                        { term: "Cashflow", def: "Net profit remaining in pocket after all expenses and mortgage." },
                        { term: "Operating Exp.", def: "Costs to run building (Ins, Tax, Maint). Excludes mortgage." },
                        { term: "Debt Yield", def: "NOI / Loan Amount. Safety ratio for commercial lenders." },
                        { term: "DSCR", def: "Debt payment capacity ratio. Must be > 1.20." },
                        { term: "Leverage", def: "Using debt to increase return on equity." },
                        { term: "Equity", def: "Market Value - Mortgage Balance. Net wealth in property." },
                        { term: "LTV", def: "Loan to Value %." },
                        { term: "Down Payment", def: "Initial personal cash contribution." },
                        { term: "GRM", def: "Price / Gross Income. Quick expensiveness measure." },
                        { term: "Refinance", def: "Re-borrowing on higher value to pull out tax-free capital." },
                        { term: "NOI (Net Operating Income)", def: "Revenue - Expenses. Pure operation profit." },
                        { term: "Vacancy Rate", def: "% of revenue lost to empty units." },
                        { term: "IRR (Internal Rate of Return)", def: "Total annualized return including cashflow, principal, appreciation." },
                        { term: "Valuation", def: "Estimate of market value, often based on NOI and Cap Rate." },
                        { term: "Loan Constant", def: "Total Annual Payment / Loan. If < Cap Rate, positive leverage." },
                        { term: "Safety Margin", def: "% revenue drop bearable before loss." },
                        { term: "Gross Yield", def: "Gross Income / Price. Inverse of GRM." },
                        { term: "ROE (Return on Equity)", def: "Total Profit / Net Equity. True return on trapped money." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = realEstateGuideData;
