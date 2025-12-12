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
            { title: "Financial Analysis", items: [{ id: 'flux', label: '3. Cash Flow' }, { id: 'ratios', label: '4. Key Ratios' }, { id: 'risque', label: '5. Risk Analysis' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Pro Strategies' }, { id: 'fiscalite', label: '7. Taxation' }, { id: 'glossaire', label: '8. Complete Glossary' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introduction: Leverage & Wealth",
            icon: 'intro',
            content: [
                { type: 'p', text: "Real estate investment is unique because it uses <strong>leverage</strong> (mortgage) to amplify your gains. You use the bank's money (often 80% of the price) to control an asset 100%, while enjoying 100% of the appreciation and cash flow." },
                { type: 'p', text: "However, real estate is unforgiving. A $100/month calculation error can become a $30,000 loss over 25 years. That's why the <strong>Real Estate</strong> module of Nexus Finance Pro was created: to turn vague estimates into precise mathematics." },
                {
                    type: 'box', style: 'pro', title: 'The Pro Secret', content: [
                        { type: 'p', text: "You make your profit when you buy, not when you sell. If the numbers don't work on day 1 (Negative Cash Flow), don't count on \"future appreciation\" to save you. That is speculation, not investment." }
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
                        "<strong>Purchase Price:</strong> The amount accepted by the seller. Do not include startup fees (notary, Land Transfer Tax) here, as the module calculates ratios based on the asset value.",
                        "<strong>Down Payment (Cash Down):</strong> The cash you must pay out of pocket.<br/><em>Impact:</em> A lower down payment increases your Return on Investment (ROI) thanks to leverage, but increases your monthly payments and reduces your Cash Flow.",
                        "<strong>Mortgage Payment (Annual):</strong> The TOTAL amount paid to the bank in a year (Principal + Interest). Multiply your monthly payment by 12.<br/><em>Tip:</em> Use the <strong>Repayment</strong> module to calculate this exact figure.",
                        "<strong>Principal Paydown (Year 1):</strong> The portion of your payments that goes towards paying off the debt in the first year. It is forced savings. You will find this number on your mortgage schedule."
                    ]
                },

                { type: 'subtitle', title: "Operations Section (The Truth)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'The Classic Trap', content: [
                        { type: 'p', text: "Underestimating expenses. NEVER take the seller's numbers (\"listing sheet\") for granted. They often \"forget\" management and maintenance." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Gross Income:</strong> The total of all rents if the building were 100% full all year.",
                        "<strong>Vacancy Rate (%):</strong> Percentage of time units will be empty (between tenants).<br/><em>Standard:</em> Always put at least <strong>3% to 5%</strong> to be safe, even if it's full. Banks require it in their calculations.",
                        "<strong>Operating Expenses:</strong> The core of the war. Include EVERYTHING: Taxes (municipal, school), Insurance, Electricity (common areas), Snow removal, Lawn, Advertising, Management, and especially Maintenance (reserve).<br/><em>Rule of thumb:</em> Expenses often represent <strong>35% to 45%</strong> of gross income. If your calculation arrives at 15%, you missed something."
                    ]
                },

                { type: 'subtitle', title: "Advanced Parameters Section (The Future)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Appreciation %:</strong> How much the building's value increases per year. Be conservative (2% to 3% to follow inflation). It's the icing on the cake, not the cake.",
                        "<strong>CCA (Tax Amortization):</strong> Capital Cost Allowance. The amount the government allows you to deduct from your income for the wear and tear of the building. This reduces your taxes today but will be \"recaptured\" (taxed) upon sale. Consult a accountant.",
                        "<strong>Tax Rate %:</strong> Your marginal tax rate. Used to calculate real net Cash Flow after taxes."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Cash Flow",
            icon: 'flux',
            content: [
                { type: 'p', text: "It is the oxygen of your investment. Without positive cash flow, you have to pay out of your pocket every month to keep the building. It is risky." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Gross Rental Income<br/>(-) Vacancy & Bad Debt (losses)<br/>= <strong>EFFECTIVE INCOME</strong><br/><br/>(-) Operating Expenses (Taxes, Insurance...)<br/>= <strong>NET OPERATING INCOME (NOI)</strong> <span style='color:var(--info-color)'>◄ The pure performance of the building</span><br/><br/>(-) Debt Service (Mortgage)<br/>= <strong>CASHFLOW (Net Cash)</strong> <span style='color:var(--success-color)'>◄ What goes in your pocket</span>" }
                    ]
                },
                { type: 'p', text: "The <strong>NOI</strong> is crucial because it represents the performance of the building <em>independently</em> of your financing. This is the figure the bank uses to assess the economic value of the building." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Key Performance Ratios",
            icon: 'ratios',
            content: [
                { type: 'p', text: "How to know if it's a good deal? Numbers don't lie." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate', code: 'NOI / Purchase Price', text: "The yield of the building if you paid 100% cash. It is the absolute reference for comparing buildings.<br/><strong>Target:</strong> 4.5% to 6% (higher is better)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Annual Cashflow / Down Payment', text: "Your real return on the cash taken out of your pocket. It is your \"true\" interest rate.<br/><strong>Target:</strong> > 8% to 10%." },
                        { style: 'warning', title: 'Expense Ratio (OER)', code: 'Expenses / Gross Income', text: "Measures management efficiency. If > 55%, the building is bleeding money. If < 25%, numbers are likely fake.<br/><strong>Healthy Zone:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Gross Rent Multiplier (GRM)', code: 'Price / Gross Income', text: "\"How many times the revenue am I paying?\" Useful for quick sorting, but dangerous as it ignores real expenses.<br/><strong>Standard:</strong> 12x to 18x+ (varies greatly by city and building quality)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Risk Analysis & Bank",
            icon: 'risque',
            content: [
                { type: 'p', text: "Before lending you hundreds of thousands of dollars, the bank will look at these ratios to ensure you won't default." },

                { type: 'subtitle', title: "Debt Service Coverage Ratio (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Mortgage Payments</span><br/>Do rents cover the mortgage? A DSCR of <strong>1.25</strong> means for every $100 of payment to the bank, you have $125 of net income. This is the safety margin required by CMHC and banks for multi-family.<br/><strong>Note:</strong> Banks often use higher \"qualifying\" interest rates for this calculation, making it harder to reach.<br/><strong>Danger Zone:</strong> < 1.10." },

                { type: 'subtitle', title: "Loan-to-Value (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Loan Amount / Property Value</span><br/>The percentage of the building owned by the bank. The higher it is, the stronger the leverage, but the higher the risk." },

                { type: 'subtitle', title: "Break-even Point" },
                { type: 'p', text: "It is the minimum occupancy rate to not lose money. If your Break-even is 75%, it means you can have 25% of your units empty and still pay all your bills. The lower this number, the safer the investment." },

                { type: 'subtitle', title: "Safety Margin" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Mortgage Payment) / NOI</span><br/>Percentage of Net Operating Income that can disappear before you hit negative cash flow. A margin of <strong>20%+</strong> is recommended to absorb unexpected costs." },

                { type: 'subtitle', title: "Loan Constant" },
                { type: 'p', text: "<span class='code-badge'>Total Annual Payment / Loan Amount</span><br/>The true cost of your debt (including principal repayment).<br/><strong>The Secret to Positive Leverage:</strong> If your Cap Rate > Loan Constant, you are getting richer with the bank's money. If Cap Rate < Loan Constant, leverage is working against you." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Advanced Strategies (Pros)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'The BRRRR Strategy', content: [
                        { type: 'p', text: "Buy, Rehab, Rent, Refinance, Repeat.<br/><br/>The Holy Grail of real estate. The goal is to buy a rundown building, increase its value through renovations (force appreciation), then refinance to pull out 100% of your initial down payment. You then own a building \"for free\" (infinite down payment = infinite return)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Beginner)" },
                { type: 'p', text: "Buying a duplex or triplex and living in one of the units.<br/><strong>Advantage:</strong> Reduced down payment (often 5% or 10% instead of 20%). Tenants pay your mortgage. It is the best way to start." },

                { type: 'subtitle', title: "Internal Rate of Return (IRR)" },
                { type: 'p', text: "The beginner investor looks at Cashflow. The pro investor looks at IRR. The IRR calculates the annualized total return combining the 4 payers of real estate:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Monthly money.",
                        "2. <strong>Amortization:</strong> The tenant pays your debt (you get richer every month).",
                        "3. <strong>Appreciation:</strong> The building's value goes up with inflation.",
                        "4. <strong>Tax Benefits:</strong> Deduction of interest and CCA."
                    ]
                },
                { type: 'p', text: "Nexus Pro calculates this IRR for you over 10 years at the bottom of the Real Estate module." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Real Estate Taxation",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Real estate is powerful, but the taxman is waiting for you. Understanding these concepts can save you thousands of dollars." },

                { type: 'subtitle', title: "Current vs Capital Expenses" },
                { type: 'p', text: "<strong>Current:</strong> Minor repairs (changing a faucet, painting). 100% deductible in the same year.<br/><strong>Capital:</strong> Major improvements (redo roof, change windows). Not deductible at once. They are added to the cost of the building and amortized over several years." },

                { type: 'subtitle', title: "Recapture of CCA" },
                { type: 'p', text: "If you take tax amortization (CCA) to reduce your taxes each year, beware! When selling the building, if you sell for more than you bought, the government will \"recapture\" all that amortization and tax you on it. It is a tax loan, not a gift." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Complete Glossary",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Principal Paydown", def: "The portion of your mortgage payment that goes towards paying off the debt (not interest). It is wealth creation for you." },
                        { term: "CCA (Tax Amortization)", def: "A \"fictional\" expense allowed by the government (building depreciation) that reduces your tax payable today." },
                        { term: "Appreciation", def: "Increase in the building's value over time." },
                        { term: "Vendor Take-Back (VTB)", def: "When the seller accepts to be paid later for a portion of the sale price. It is a loan the seller gives you." },
                        { term: "Cap Rate", def: "Yield without financing. NOI / Price." },
                        { term: "Cash-on-Cash", def: "Liquid return on invested cash. Cash Flow / Down Payment." },
                        { term: "Cash Flow", def: "Net monthly or annual profit remaining in your pockets after all expenses and mortgage." },
                        { term: "Operating Expenses", def: "Costs to operate the building (Insurance, Taxes, Maintenance). Excludes mortgage." },
                        { term: "Debt Yield", def: "NOI / Loan Amount. Safety ratio for commercial lenders." },
                        { term: "DSCR (Coverage)", def: "Debt payment capacity ratio. Should be > 1.20." },
                        { term: "Leverage", def: "Using debt to increase the return on your own capital." },
                        { term: "Equity", def: "Market Value - Mortgage Balance. The net wealth in the building." },
                        { term: "LTV (Loan-to-Value)", def: "Percentage of value financed by the bank." },
                        { term: "Down Payment", def: "Initial personal contribution." },
                        { term: "GRM", def: "Price / Gross Income. Quick measure of expensive/cheap." },
                        { term: "Refinance", def: "Borrowing again against the increased value of the building to pull out tax-free capital." },
                        { term: "NOI (Net Operating Income)", def: "Revenue - Expenses. The pure profit of the operation." },
                        { term: "Vacancy Rate", def: "% of lost revenue due to empty units." },
                        { term: "IRR (Internal Rate of Return)", def: "Total annualized return including cash flow, principal paydown, and appreciation." },
                        { term: "Valuation", def: "Estimate of market value, often based on NOI and market Cap Rate." },
                        { term: "Loan Constant", def: "Total annual payment / Loan. If < Cap Rate, leverage is positive." },
                        { term: "Safety Margin", def: "% of revenue drop sustainable before losing money." },
                        { term: "Gross Yield", def: "Gross Income / Price. The inverse of GRM. Metric of gross production." },
                        { term: "ROE (Return on Equity)", def: "Total Profit (Cashflow + Principal + Appreciation) / Net Equity. The true return on your trapped money." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = {
    sidebar: {
        title: "Real Estate Guide (Intl)",
        sections: [
            { title: "Foundations", items: [{ id: 'intro', label: '1. Philosophy' }, { id: 'module', label: '2. Module Guide' }] },
            { title: "Financial Analysis", items: [{ id: 'flux', label: '3. Cash Flow' }, { id: 'ratios', label: '4. Key Ratios' }, { id: 'risque', label: '5. Risk Analysis' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Pro Strategies' }, { id: 'fiscalite', label: '7. Taxation' }, { id: 'glossaire', label: '8. Complete Glossary' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introduction: Leverage & Wealth",
            icon: 'intro',
            content: [
                { type: 'p', text: "Real estate investment is unique because it uses <strong>leverage</strong> (mortgage) to amplify your gains. You use the bank's money (often 80% of the price) to control an asset 100%, while enjoying 100% of the appreciation and cash flow." },
                { type: 'p', text: "However, real estate is unforgiving. A $100/month calculation error can become a $30,000 loss over 25 years. That's why the <strong>Real Estate</strong> module of Nexus Finance Pro was created: to turn vague estimates into precise mathematics." },
                {
                    type: 'box', style: 'pro', title: 'The Pro Secret', content: [
                        { type: 'p', text: "You make your profit when you buy, not when you sell. If the numbers don't work on day 1 (Negative Cash Flow), don't count on \"future appreciation\" to save you. That is speculation, not investment." }
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
                        "<strong>Purchase Price:</strong> The amount accepted by the seller. Do not include startup fees (notary, taxes), here as the module calculates ratios based on the asset value.",
                        "<strong>Down Payment (Cash Down):</strong> The cash you must pay out of pocket.<br/><em>Impact:</em> A lower down payment increases your Return on Investment (ROI) thanks to leverage, but increases your monthly payments and reduces your Cash Flow.",
                        "<strong>Mortgage Payment (Annual):</strong> The TOTAL amount paid to the bank in a year (Principal + Interest). Multiply your monthly payment by 12.<br/><em>Tip:</em> Use the <strong>Repayment</strong> module to calculate this exact figure.",
                        "<strong>Principal Paydown (Year 1):</strong> The portion of your payments that goes towards paying off the debt in the first year. It is forced savings. You will find this number on your mortgage schedule."
                    ]
                },

                { type: 'subtitle', title: "Operations Section (The Truth)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'The Classic Trap', content: [
                        { type: 'p', text: "Underestimating expenses. NEVER take the seller's numbers (\"listing sheet\") for granted. They often \"forget\" management and maintenance." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Gross Income:</strong> The total of all rents if the building were 100% full all year.",
                        "<strong>Vacancy Rate (%):</strong> Percentage of time units will be empty (between tenants).<br/><em>Standard:</em> Always put at least <strong>3% to 5%</strong> to be safe, even if it's full. Banks require it in their calculations.",
                        "<strong>Operating Expenses:</strong> The core of the war. Include EVERYTHING: Taxes, Insurance, Electricity (common areas), Snow removal, Lawn, Advertising, Management, and especially Maintenance (reserve).<br/><em>Rule of thumb:</em> Expenses often represent <strong>35% to 45%</strong> of gross income. If your calculation arrives at 15%, you missed something."
                    ]
                },

                { type: 'subtitle', title: "Advanced Parameters Section (The Future)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Appreciation %:</strong> How much the building's value increases per year. Be conservative (2% to 3% to follow inflation). It's the icing on the cake, not the cake.",
                        "<strong>Tax Amortization:</strong> The amount the government allows you to deduct from your income for the wear and tear of the building. This reduces your taxes today but will be \"recaptured\" (taxed) upon sale. Consult a accountant.",
                        "<strong>Tax Rate %:</strong> Your marginal tax rate. Used to calculate real net Cash Flow after taxes."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Cash Flow",
            icon: 'flux',
            content: [
                { type: 'p', text: "It is the oxygen of your investment. Without positive cash flow, you have to pay out of your pocket every month to keep the building. It is risky." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Gross Rental Income<br/>(-) Vacancy & Bad Debt (losses)<br/>= <strong>EFFECTIVE INCOME</strong><br/><br/>(-) Operating Expenses (Taxes, Insurance...)<br/>= <strong>NET OPERATING INCOME (NOI)</strong> <span style='color:var(--info-color)'>◄ The pure performance of the building</span><br/><br/>(-) Debt Service (Mortgage)<br/>= <strong>CASHFLOW (Net Cash)</strong> <span style='color:var(--success-color)'>◄ What goes in your pocket</span>" }
                    ]
                },
                { type: 'p', text: "The <strong>NOI</strong> is crucial because it represents the performance of the building <em>independently</em> of your financing. This is the figure the bank uses to assess the economic value of the building." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Key Performance Ratios",
            icon: 'ratios',
            content: [
                { type: 'p', text: "How to know if it's a good deal? Numbers don't lie." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate', code: 'NOI / Purchase Price', text: "The yield of the building if you paid 100% cash. It is the absolute reference for comparing buildings.<br/><strong>Target:</strong> 4.5% to 6% (higher is better)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Annual Cashflow / Down Payment', text: "Your real return on the cash taken out of your pocket. It is your \"true\" interest rate.<br/><strong>Target:</strong> > 8% to 10%." },
                        { style: 'warning', title: 'Expense Ratio (OER)', code: 'Expenses / Gross Income', text: "Measures management efficiency. If > 55%, the building is bleeding money. If < 25%, numbers are likely fake.<br/><strong>Healthy Zone:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Gross Rent Multiplier (GRM)', code: 'Price / Gross Income', text: "\"How many times the revenue am I paying?\" Useful for quick sorting, but dangerous as it ignores real expenses.<br/><strong>Standard:</strong> 12x to 18x+ (varies greatly by city and building quality)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Risk Analysis & Bank",
            icon: 'risque',
            content: [
                { type: 'p', text: "Before lending you hundreds of thousands of dollars, the bank will look at these ratios to ensure you won't default." },

                { type: 'subtitle', title: "Debt Service Coverage Ratio (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Mortgage Payments</span><br/>Do rents cover the mortgage? A DSCR of <strong>1.25</strong> means for every $100 of payment to the bank, you have $125 of net income. This is the safety margin required by banks.<br/><strong>Note:</strong> Banks often use higher \"qualifying\" interest rates for this calculation, making it harder to reach.<br/><strong>Danger Zone:</strong> < 1.10." },

                { type: 'subtitle', title: "Loan-to-Value (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Loan Amount / Property Value</span><br/>The percentage of the building owned by the bank. The higher it is, the stronger the leverage, but the higher the risk." },

                { type: 'subtitle', title: "Break-even Point" },
                { type: 'p', text: "It is the minimum occupancy rate to not lose money. If your Break-even is 75%, it means you can have 25% of your units empty and still pay all your bills. The lower this number, the safer the investment." },

                { type: 'subtitle', title: "Safety Margin" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Mortgage Payment) / NOI</span><br/>Percentage of Net Operating Income that can disappear before you hit negative cash flow. A margin of <strong>20%+</strong> is recommended to absorb unexpected costs." },

                { type: 'subtitle', title: "Loan Constant" },
                { type: 'p', text: "<span class='code-badge'>Total Annual Payment / Loan Amount</span><br/>The true cost of your debt (including principal repayment).<br/><strong>The Secret to Positive Leverage:</strong> If your Cap Rate > Loan Constant, you are getting richer with the bank's money. If Cap Rate < Loan Constant, leverage is working against you." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Advanced Strategies (Pros)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'The BRRRR Strategy', content: [
                        { type: 'p', text: "Buy, Rehab, Rent, Refinance, Repeat.<br/><br/>The Holy Grail of real estate. The goal is to buy a rundown building, increase its value through renovations (force appreciation), then refinance to pull out 100% of your initial down payment. You then own a building \"for free\" (infinite down payment = infinite return)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Beginner)" },
                { type: 'p', text: "Buying a duplex or triplex and living in one of the units.<br/><strong>Advantage:</strong> Reduced down payment. Tenants pay your mortgage. It is the best way to start." },

                { type: 'subtitle', title: "Internal Rate of Return (IRR)" },
                { type: 'p', text: "The beginner investor looks at Cashflow. The pro investor looks at IRR. The IRR calculates the annualized total return combining the 4 payers of real estate:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Monthly money.",
                        "2. <strong>Amortization:</strong> The tenant pays your debt (you get richer every month).",
                        "3. <strong>Appreciation:</strong> The building's value goes up with inflation.",
                        "4. <strong>Tax Benefits:</strong> Deduction of interest and Tax Amortization."
                    ]
                },
                { type: 'p', text: "Nexus Pro calculates this IRR for you over 10 years at the bottom of the Real Estate module." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Real Estate Taxation",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Real estate is powerful, but the taxman is waiting for you. Understanding these concepts can save you thousands of dollars." },

                { type: 'subtitle', title: "Current vs Capital Expenses" },
                { type: 'p', text: "<strong>Current:</strong> Minor repairs (changing a faucet, painting). 100% deductible in the same year.<br/><strong>Capital:</strong> Major improvements (redo roof, change windows). Not deductible at once. They are added to the cost of the building and amortized over several years." },

                { type: 'subtitle', title: "Recapture of CCA" },
                { type: 'p', text: "If you take tax amortization (CCA) to reduce your taxes each year, beware! When selling the building, if you sell for more than you bought, the government will \"recapture\" all that amortization and tax you on it. It is a tax loan, not a gift." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Complete Glossary",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Principal Paydown", def: "The portion of your mortgage payment that goes towards paying off the debt (not interest). It is wealth creation for you." },
                        { term: "Tax Amortization", def: "A \"fictional\" expense allowed by the government (building depreciation) that reduces your tax payable today." },
                        { term: "Appreciation", def: "Increase in the building's value over time." },
                        { term: "Vendor Take-Back (VTB)", def: "When the seller accepts to be paid later for a portion of the sale price. It is a loan the seller gives you." },
                        { term: "Cap Rate", def: "Yield without financing. NOI / Price." },
                        { term: "Cash-on-Cash", def: "Liquid return on invested cash. Cash Flow / Down Payment." },
                        { term: "Cash Flow", def: "Net monthly or annual profit remaining in your pockets after all expenses and mortgage." },
                        { term: "Operating Expenses", def: "Costs to operate the building (Insurance, Taxes, Maintenance). Excludes mortgage." },
                        { term: "Debt Yield", def: "NOI / Loan Amount. Safety ratio for commercial lenders." },
                        { term: "DSCR (Coverage)", def: "Debt payment capacity ratio. Should be > 1.20." },
                        { term: "Leverage", def: "Using debt to increase the return on your own capital." },
                        { term: "Equity", def: "Market Value - Mortgage Balance. The net wealth in the building." },
                        { term: "LTV (Loan-to-Value)", def: "Percentage of value financed by the bank." },
                        { term: "Down Payment", def: "Initial personal contribution." },
                        { term: "GRM", def: "Price / Gross Income. Quick measure of expensive/cheap." },
                        { term: "Refinance", def: "Borrowing again against the increased value of the building to pull out tax-free capital." },
                        { term: "NOI (Net Operating Income)", def: "Revenue - Expenses. The pure profit of the operation." },
                        { term: "Vacancy Rate", def: "% of lost revenue due to empty units." },
                        { term: "IRR (Internal Rate of Return)", def: "Total annualized return including cash flow, principal paydown, and appreciation." },
                        { term: "Valuation", def: "Estimate of market value, often based on NOI and market Cap Rate." },
                        { term: "Loan Constant", def: "Total annual payment / Loan. If < Cap Rate, leverage is positive." },
                        { term: "Safety Margin", def: "% of revenue drop sustainable before losing money." },
                        { term: "Gross Yield", def: "Gross Income / Price. The inverse of GRM. Metric of gross production." },
                        { term: "ROE (Return on Equity)", def: "Total Profit (Cashflow + Principal + Appreciation) / Net Equity. The true return on your trapped money." }
                    ]
                }
            ]
        }
    }
};
