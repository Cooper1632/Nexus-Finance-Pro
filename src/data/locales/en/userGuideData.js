import {
    HomeIcon, ArrowTrendingUpIcon, ShieldCheckIcon, CpuChipIcon,
    BanknotesIcon, ChartBarIcon, InformationCircleIcon, Cog6ToothIcon,
    ListBulletIcon, ArrowPathIcon, CheckCircleIcon, LightBulbIcon,
    ExclamationTriangleIcon, BuildingLibraryIcon, ScaleIcon,
    PresentationChartLineIcon, CursorArrowRaysIcon, ArrowDownTrayIcon,
    CalculatorIcon, ArrowPathRoundedSquareIcon
} from '@heroicons/react/24/outline';

export const userGuideData = {
    sidebar: {
        title: "User Guide",
        items: [
            { id: 'intro', label: 'Introduction' },
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'budget', label: 'Budget' },
            { id: 'plan', label: 'Debt Plan' },
            { id: 'remb', label: 'Repayment' },
            { id: 'invest', label: 'Investment' },
            { id: 'analyse', label: 'Stock Analysis' },
            { id: 'immo', label: 'Real Estate' },
            { id: 'perf', label: 'Performance' },
            { id: 'projections', label: 'Projections' },
            { id: 'params', label: 'Settings' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Your reference guide for mastering the software.",
    cards: [
        { title: "Overview", desc: "Centralize your Net Worth.", color: "info" },
        { title: "Budget & Flow", desc: "Master income & expenses.", color: "warning" },
        { title: "Debt Strategy", desc: "Smart debt elimination.", color: "danger" },
        { title: "Performance", desc: "Track real returns.", color: "dark" },
        { title: "Growth", desc: "Compound interest & Retirement.", color: "success" },
        { title: "Intelligence", desc: "Stock & Real Estate Analysis.", color: "concept" }
    ],
    benefits: {
        title: "What this software does for you:",
        items: [
            { title: "Global View (Dashboard):", text: "Centralize your Net Worth, assets, and debts in a single glance." },
            { title: "Budget Control:", text: "Track your income, expenses, and monthly savings capacity." },
            { title: "Debt Strategy:", text: "Plan debt elimination (Avalanche/Snowball) to save on interest." },
            { title: "Repayment Simulators:", text: "Calculate payments for mortgages, loans, and credit cards." },
            { title: "Portfolio Tracking:", text: "Manage your investments and visualize your real performance." },
            { title: "Real Estate Analysis:", text: "Calculate the exact profitability of your rental projects." },
            { title: "Stock Intelligence:", text: "Analyze company quality (Nexus Score) before investing." },
            { title: "Performance Tracking:", text: "Visualize historical wealth evolution and compare against indices." },
            { title: "Future Projections:", text: "Calculate compound interest, plan retirement and withdrawals." },
            { title: "Total Privacy:", text: "Your data is stored locally on your device, nothing is sent to the cloud." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Getting Started:",
                content: "This guide is designed to walk you through step-by-step. Each module is explained with <strong>concrete examples</strong> so you understand not just <em>how</em> to use the software, but <em>why</em> these tools will help you build wealth."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Dashboard",
            desc: "Your control tower. It aggregates data from all other modules to give you an immediate view of your financial health.",
            items: [
                { title: "Net Worth:", text: "This is THE most important number. It's everything you own (Assets) MINUS everything you owe (Liabilities).", example: "If you own a $400k house and $50k in investments (Total Assets = $450k) but have a $300k mortgage (Liability), your Net Worth is $150k." },
                { title: "Total Assets:", text: "The sum of your Real Estate value, Vehicles (Budget Module), and Investments (Investment Module).", example: "House ($350k) + Car ($20k) + Investments ($30k) = $400k Assets." },
                { title: "Total Liabilities:", text: "The sum of all debts recorded in the 'Debt Plan' module (Mortgages, Cards, Loans).", example: "Mortgage ($280k) + Car Loan ($15k) + Visa ($5k) = $300k Liabilities." },
                { title: "Cash Flow:", text: "The money left in your pocket at the end of the month. Calculated automatically from the Budget module.", example: "Income ($5000) - Fixed Expenses ($3000) - Variable Expenses ($1000) = +$1000 Flow." }
            ],
            box: {
                type: "warning",
                title: "Scenario Awareness:",
                content: "The Dashboard is dynamic. If you select 'Scenario B' in the Budget module, the Dashboard will instantly update to show the impact of that scenario on your Net Worth."
            }
        },
        budget: {
            id: "budget",
            title: "Budget",
            desc: "Stop wondering where your money went. This module lets you tell your money where to go.",
            items: [
                { title: "Income & Expenses:", text: "Enter your figures and choose the frequency (Weekly, Monthly, Annual). The software converts everything to 'Monthly' for easy reading.", example: "Pay $1200 car insurance yearly? Enter '1200' and frequency 'Annual'. The software counts it as a $100/month expense." },
                { title: "Asset Management (House/Car):", text: "Special section to list physical assets. This is where you enter the market value of your home or car.", example: "Add a line 'Main Home' with a value of $450,000. This amount adds to your Total Assets." },
                { title: "Taxes:", text: "Don't forget to include taxes if you are self-employed, or property taxes.", example: "Add 'Property Taxes': $3500/year." },
                { title: "Scenarios (A/B):", text: "Create up to 3 versions of your budget to test hypotheses.", example: "Scenario A = Current Life. Scenario B = 'What if I buy this duplex?' (Add rental income and new expenses)." }
            ]
        },
        plan: {
            id: "plan",
            title: "Debt Plan",
            desc: "The ultimate tool to become debt-free faster and save thousands in interest.",
            items: [
                { title: "'Avalanche' Method:", text: "Mathematically optimal. Pay off the debt with the highest interest rate first.", example: "You have a 20% credit card and a 7% car loan. Avalanche attacks the 20% card first. Maximum interest savings." },
                { title: "'Snowball' Method:", text: "Psychologically motivating. Eliminate the smallest debt first to get a quick win.", example: "You have a small $500 debt (Visa) and a large $15,000 debt (Car). Kill the $500 debt immediately to feel proud and motivated." },
                { title: "'Balance' Column:", text: "This is a simulator. The balance drops virtually month after month.", example: "Important: If you make a real payment at your bank, update the balance here once a month to keep the simulation accurate." }
            ],
            warning: {
                title: "Mortgage Tip",
                content: "You can uncheck the **'Include'** box for your mortgage. This lets you focus the tool solely on eliminating 'bad' consumer debts (Cards, Loans) without the huge mortgage distorting the chart."
            }
        },
        remb: {
            id: "remb",
            title: "Repayment",
            desc: "This module contains 3 distinct calculators to help you make informed decisions before signing a loan contract.",
            cards: [
                { title: "Tab 1: Mortgage", desc: "Simulate monthly or bi-weekly payments. Understand the impact of a larger down payment or different rate.", example: "For a $400k condo at 5% interest over 25 years: Enter these figures to see you'll pay $701,508 total (including $301,508 just in interest!)." },
                { title: "Tab 2: Loan", desc: "Ideal for car or personal loans. See the real cost of financing over too long a period.", example: "Buying a $30,000 car financed over 84 months (7 years) at 8%. The calculator shows this car will actually cost you $39,200." },
                { title: "Tab 3: Credit Card", desc: "The reality check tool. Calculates time (often decades!) to pay off a card if you only make minimum payments.", example: "$2000 debt on a 19.99% card with 3% minimum payment: It will take 11 years to pay off and cost $1800 in interest." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investment",
            desc: "Your command center for piloting your stock portfolio (Stocks, ETFs, Crypto).",
            items: [
                { title: "Key Indicators (KPI):", text: "Top of page summaries: 1. Current Value (What you have), 2. Total Invested (What you put in), 3. Gain/Loss $ (The difference), 4. Return % (Simple return), 5. CAGR (Compound Annual Growth Rate - the true speed of your wealth creation)." },
                { title: "Analysis Bubbles:", text: "Each holding gets a colored tag for quick decision making:\n• Green (Excellence): Gain > $1000 & > 15%.\n• Blue (Engine): Gain > $1000 (High volume).\n• Grey (Sleeping): Small position or little movement.\n• Red (Danger): In loss (Monitor)." },
                { title: "Toolbar:", text: "• 'Refresh' (Arrows): Update market prices.\n• '+' Button: Add transaction (Buy/Sell/Dividend).\n• 'Performance' (Chart): Open detailed report (see below).\n• 'Watchlist' (Star): Track stocks without buying.\n• 'Tools' Menu (Gear): Configure API, clear cache, or run diagnostics." }
            ],
            box: {
                type: "info",
                title: "Performance Report (Chart Button)",
                content: "The heart of real tracking. This module separates real gains from deposits. It has 3 tabs:\n\n1. **Overview**: Chart comparing Blue Line (Capital Invested) vs Green Line (Real Value). The gap is your pure profit.\n\n2. **Deposits**: Record *fresh* money injected here (e.g., $500 transfer to investment account). Crucial so the software doesn't mistake a deposit for sudden profit.\n\n3. **Snapshots**: Correct or history your total account value at a specific date (e.g., 'On Dec 31, my account was $50,000'). The software smooths the curve between points."
            },
            subSections: [
                {
                    title: "Transaction Management",
                    intro: "Click '+' or the pencil on a row to open the editor.",
                    items: [
                        { title: "Buy", text: "Increases quantity and recalculates Average Price (ACB) automatically.", example: "Buy 10 AAPL at $150. Total cost increases by $1500." },
                        { title: "Sell", text: "Reduces quantity and crystallizes (realizes) gain or loss.", example: "Sell 5 AAPL. Software calculates how much profit you *actually* made on those 5 shares." },
                        { title: "Dividend", text: "Adds cash without changing share quantity.", example: "Receive $50 dividend. Pure profit." }
                    ]
                },
                {
                    title: "Configuration & APIs",
                    intro: "For live prices, go to Tools -> Settings.",
                    items: [
                        { title: "Yahoo Finance (Default)", text: "Global coverage, free, no key required. Perfect for beginners." },
                        { title: "Alpha Vantage", text: "Professional data. Requires free API key. More stable for large US portfolios." },
                        { title: "Questrade", text: "Direct integration. Imports real positions. Requires manual secure reconnection (Token) as Nexus never stores bank credentials." }
                    ]
                }
            ],
            button: "See Finance 101 Guide"
        },
        analyse: {
            id: "analyse",
            title: "Stock Analysis",
            desc: "Stop picking stocks at random. Analyze them like a pro in seconds.",
            items: [
                { title: "Goal:", text: "This module gives you an objective score (Nexus Score) on a company's fundamental health, ignoring media hype." },
                { title: "Nexus Score (0-100):", text: "Global score based on 7 pillars. >70 is Excellent (Green), <40 is Risky (Red)." },
                { title: "Comparator:", text: "Create multiple cards side-by-side to compare Apple vs Microsoft vs Google and see the best opportunity today." }
            ],
            subSections: [
                {
                    title: "Data Entry",
                    intro: "Fill fields manually or use the AI Assistant.",
                    items: [
                        { title: "Symbol & Price", text: "Enter Ticker (e.g., AAPL). Price is needed for valuation ratios." },
                        { title: "EPS", text: "Earnings Per Share. If you enter Price and EPS, P/E calculates automatically." },
                        { title: "Auto-Calculated Fields", text: "<strong>P/E</strong> and <strong>Div Yield %</strong> are grayed out because they calculate automatically from raw data (Price, EPS, Div)." },
                        { title: "Exclusion (Check)", text: "Uncheck the box right of a field to exclude it from the score (e.g., ignore Dividend for Tesla which pays none)." }
                    ]
                },
                {
                    title: "Understanding the 7 Pillars",
                    intro: "Points assigned for each quality metric.",
                    items: [
                        { title: "1. Valuation (P/E)", text: "Is it expensive? We want P/E between 15 and 25." },
                        { title: "2. Growth", text: "Is it growing? We want >15% per year." },
                        { title: "3. Net Margin", text: "Is it profitable? We want >20%." },
                        { title: "4. Debt", text: "Is it solvent? Debt/Equity < 1.0." },
                        { title: "5. ROE", text: "Management efficiency. We want >15%." },
                        { title: "6. Liquidity", text: "Ability to pay short-term bills. We want >1.5." },
                        { title: "7. Dividend", text: "Bonus. We look for >2% (if applicable)." }
                    ]
                },
                {
                    title: "Smart Tools",
                    intro: "Features to speed up analysis.",
                    items: [
                        { title: "Lightbulb (AI Assistant)", text: "Click yellow bulb. Copies a 'Magic Prompt'. Paste into ChatGPT/Gemini to get all numbers in table format." },
                        { title: "PEG Ratio", text: "Shown at top. If < 1.0, it's a bargain (Price low relative to Growth). Peter Lynch's favorite." },
                        { title: "Visual Radar", text: "Spider chart showing balance or major weakness (e.g., high growth but huge debt)." },
                        { title: "Save & Watch", text: "'Save' button keeps analysis in memory. 'Watch' (Eye) adds to Watchlist in Investment module." }
                    ]
                }
            ]
        },
        immo: {
            id: "immo",
            title: "Real Estate",
            desc: "For the serious investor. Don't trust 'feelings', trust math. calculates real profitability in seconds.",
            cards: [
                { title: "NOI (Net Operating Income)", text: "Pure profit generated before mortgage. The most reliable figure to compare two properties.", example: "Triplex generates $60k rent. Taxes, insurance, maintenance cost $20k. NOI is $40k." },
                { title: "Cap Rate", text: "Engine power. Yield if bought 100% cash. High Cap Rate (>6%) signals good deal.", example: "Price: $800k. NOI: $40k. 40k/800k = 5% Cap Rate. (A bit low, negotiate price down!)." },
                { title: "Cash-on-Cash", text: "Real ROI on money out of pocket. How much % does your down payment earn in cash each year?", example: "Down payment $150k. Remaining cashflow after mortgage $15k. 15k/150k = 10% CoC. Excellent (better than stocks!)." },
                { title: "DSCR (Debt Service Coverage)", text: "Banker's favorite. Does income cover mortgage safely?", example: "Mortgage costs $30k/yr. NOI is $40k. DSCR = 40k/30k = 1.33. Bank is happy (33% safety margin)." },
                { title: "GRM (Gross Rent Multiplier)", text: "Quick filter. How many times gross revenue are you paying?", example: "Price 500k, Revenue 50k. GRM = 10. If market is 14, it's a deal. If 8, it's expensive." },
                { title: "Break-Even", text: "Safety level. What % of revenue is eaten by expenses + mortgage?", example: "If 85%, you keep 15% profit, but if rents drop 16%, you lose money." },
                { title: "LTV (Loan-to-Value)", text: "Leverage. What part is financed by bank?", example: "80% LTV means you put 20% down. Higher LTV = higher leverage (and risk)." },
                { title: "Total ROI", text: "Big picture. Includes Cashflow (pocket money) + Principal Paydown (equity build-up).", example: "You earn $5000 cashflow, but tenants paid off $7000 of your loan. Real enrichment is $12,000." }
            ],
            button: "See Full Real Estate Guide"
        },
        perf: {
            id: "perf",
            title: "Performance (Calculator)",
            desc: "An impartial auditor. Calculate precise return of an investment between two dates.",
            items: [
                { title: "Goal:", text: "This module is NOT your global portfolio (see Investment module). It is an isolated calculator to answer: 'How much did this specific stock return between Jan 1st and Dec 31st?'" },
                { title: "Independent:", text: "No link to your registered accounts. Just enter Start Value, End Value, and two dates." }
            ],
            subSections: [
                {
                    title: "Total Return vs CAGR",
                    intro: "Two ways to see the truth:",
                    items: [
                        { title: "Total Return", text: "Simple and raw. 'I made +20%'. Useful for short terms.", example: "Bought $100, Sold $120 = +20%." },
                        { title: "CAGR (Annual Rate)", text: "The true judge for long term. Annualizes return to compare with savings account.", example: "Making +20% is good. But if it took 10 years, CAGR is only 1.8%/year (bad). If it took 6 months, CAGR is 44% (genius)." }
                    ]
                },
                {
                    title: "The Benchmark (S&P 500)",
                    intro: "The acid test.",
                    items: [
                        { title: "Comparison", text: "Enter dates and toggle switch. Software fetches REAL historical S&P 500 data for that specific period." },
                        { title: "Verdict", text: "Chart overlays your performance (Green) vs US Market (Grey). If above, you beat Wall Street. If below, you'd have earned more doing nothing (Index ETF)." }
                    ]
                }
            ]
        },
        projections: {
            id: "projections",
            title: "Projections & Calculators",
            desc: "Stop guessing. Know exactly when you can stop working.",
            cards: [
                { title: "Future Value", desc: "Magic of compound interest.", example: "What will my $10k be worth in 20 years?" },
                { title: "Target", desc: "Reverse planning.", example: "I want $1 million. How much must I save monthly?" },
                { title: "Withdrawal (Fire)", desc: "Drawdown strategy.", example: "Can my million support $4000/month withdrawals forever?" }
            ],
            subSections: [
                {
                    title: "Calc 1: Future Value",
                    intro: "For savers looking ahead.",
                    items: [
                        { title: "Frequency & Growth", text: "Simulate contributions that increase every year (e.g., indexed to salary)." },
                        { title: "Timing (Start/End)", text: "Subtle detail: Investing Jan 1st earns more than Dec 31st. Change 'Period Start' to see 30-year impact." },
                        { title: "Inflation", text: "Don't forget it! 1 million in 30 years won't buy what 1 million does today. Watch 'Real Purchasing Power' line for truth." }
                    ]
                },
                {
                    title: "Calc 2: Savings Target",
                    intro: "Plan specific goal (House, Trip, Retirement).",
                    items: [
                        { title: "Clear Answer", text: "Tool gives EXACT amount to save per day/week/month to reach goal." },
                        { title: "Adjust Rate", text: "See how getting 7% return instead of 5% drastically reduces required savings effort." }
                    ]
                },
                {
                    title: "Calc 3: Withdrawal (Annuity)",
                    intro: "The ultimate retirement test.",
                    items: [
                        { title: "Inflation Adjustment", text: "Checking this is vital. Simulates increasing withdrawals yearly to pay for bread that gets expensiver. Without it, living standard drops." },
                        { title: "Depletion Risk", text: "If chart hits zero before end, you have a problem. Reduce withdrawals or work longer." }
                    ]
                }
            ]
        },
        params: {
            id: "params",
            title: "Settings & Tools",
            subSections: [
                {
                    title: "Data & Security (Privacy First)",
                    intro: "Nexus Finance is unique: Your data NEVER leaves your computer.",
                    items: [
                        { title: "JSON Backup", text: "Since we have no cloud server (for your security), you are responsible for data. Do a backup ('Export') once a month." },
                        { title: "Import", text: "Restore backup or transfer data from PC to Mac in seconds." }
                    ]
                },
                {
                    title: "Customization",
                    intro: "Adapt tool to your style.",
                    items: [
                        { title: "Currency & Display", text: "Switch between CAD, USD, EUR. Changes symbol ($/€) only, no exchange rate conversion." },
                        { title: "Decimal Mode (.00)", text: "Enable for max precision (e.g., $1250.45). Disable for cleaner minimalist look (e.g., $1250). Ideal for large amounts where cents don't matter." },
                        { title: "Dark/Light Theme", text: "Click moon/sun. Dark mode recommended for intense night sessions." },
                        { title: "Site Width", text: "If you have a large screen, choose '1600px' or '100%'. Widens interface for comfort, preventing everything from being cramped in center." }
                    ]
                },
                {
                    title: "Danger Zone (Reset)",
                    intro: "Use with caution.",
                    items: [
                        { title: "Reset Module (Orange)", text: "Clears ONLY active tab data (e.g., clear just Budget to start new year). Safe." },
                        { title: "Factory Reset (RED)", text: "Atomic weapon. Wipes EVERYTHING. Budget, Investments, History. Irreversible (unless you have JSON backup)." }
                    ]
                }
            ],
            items: []
        },
        glossaire: {
            id: "glossaire",
            title: "Glossary",
            items: [
                { title: "EPS", text: "Earnings Per Share." },
                { title: "P/E", text: "Price/Earnings Ratio. Indicates if stock is expensive or cheap." },
                { title: "Tax-Free Account", text: "Account where gains are not taxable (e.g., TFSA, Roth IRA, ISA)." },
                { title: "Retirement Account", text: "Tax-deferred account for long term (e.g., RRSP, 401k)." },
                { title: "ACB", text: "Adjusted Cost Base. Your average tax cost." },
                { title: "Net Worth", text: "Assets - Liabilities. True wealth." }
            ]
        }
    }
};
