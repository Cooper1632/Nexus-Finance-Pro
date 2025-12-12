
export const userGuideData = {
    sidebar: {
        title: "User Guide",
        items: [
            { id: 'intro', label: 'Introduction' },
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'budget', label: 'Budget & Assets' },
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
    subTitle: "Your manual for financial mastery.",
    cards: [
        { title: "Global View", desc: "Centralize your Net Worth.", color: "info" },
        { title: "Budget & Flow", desc: "Master income & expenses.", color: "warning" },
        { title: "Debt Strategy", desc: "Smart debt elimination.", color: "danger" },
        { title: "Performance", desc: "Track your real returns.", color: "dark" },
        { title: "Projections", desc: "Compound interest & Retirement.", color: "success" },
        { title: "Intelligence", desc: "Stock & Real Estate Analysis.", color: "concept" }
    ],
    benefits: {
        title: "What this software brings you:",
        items: [
            { title: "Global View (Dashboard):", text: "Centralize your Net Worth, assets, and debts at a glance." },
            { title: "Budget Control:", text: "Track your income, expenses, and monthly savings capacity." },
            { title: "Debt Strategy:", text: "Plan your debt elimination (Avalanche/Snowball) to save on interest." },
            { title: "Repayment Simulators:", text: "Calculate payments for mortgages, loans, and credit cards." },
            { title: "Portfolio Tracking:", text: "Manage your investments and visualize your real performance." },
            { title: "Real Estate Analysis:", text: "Calculate the exact profitability of your rental projects." },
            { title: "Stock Intelligence:", text: "Analyze company quality (Nexus Score) before investing." },
            { title: "Performance Tracking:", text: "Visualize the historical evolution of your wealth and compare against benchmarks." },
            { title: "Future Projections:", text: "Calculate compound interest, plan your retirement and withdrawals." },
            { title: "Total Privacy:", text: "Your data is stored locally on your device, nothing is sent to the cloud." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Tip:",
                content: "This guide explains the technical use of the software. For theoretical financial concepts (Stock Market, Ratios), refer to the <strong>Finance 101 Course</strong> available in the Education menu."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Dashboard",
            desc: "Your control center that aggregates data from all modules.",
            items: [
                { title: "Net Worth:", text: "Key indicator <code>(Total Assets - Total Liabilities)</code>." },
                { title: "Total Assets:", text: "Sum of your portfolio (Investment) and your goods (Budget/Assets)." },
                { title: "Total Liabilities:", text: "Sum of all debts entered in the Plan module." },
                { title: "Cash Flow:", text: "Your available monthly balance (Income - Expenses - Savings)." }
            ],
            box: {
                type: "warning",
                title: "Important Note - Scenarios:",
                content: "The Dashboard always displays data from the <strong>Active Scenario</strong> (the scenario currently selected on screen) for each module. If you switch scenarios in the Budget module, the Dashboard will update to reflect that choice."
            }
        },
        budget: {
            id: "budget",
            title: "Budget & Assets",
            desc: "The cornerstone of your financial management.",
            items: [
                { text: "Fill in the amounts for each item with the correct frequency." },
                { title: "Taxes:", text: "New category to manage your tax installments or balances." },
                { title: "'Asset Value' Section:", text: "This section is dedicated exclusively to your physical assets (Real Estate, Vehicles) to establish your net worth. Your stocks and investments belong in the Investment module." }
            ]
        },
        projections: {
            id: "projections",
            title: "Projection Calculators",
            cards: [
                { title: "Future Value", desc: "Visualize the growth of your RRSP or TFSA with compound interest." },
                { title: "Goal", desc: "Set a target amount and date, the tool calculates the required savings effort." },
                { title: "Withdrawal", desc: "Simulate the decumulation phase. How long will your capital last?" }
            ]
        },
        plan: {
            id: "plan",
            title: "Debt Plan",
            desc: "Establish your optimal repayment strategy.",
            items: [
                { title: "Avalanche:", text: "Prioritizes high interest rates (Maximum savings)." },
                { title: "Snowball:", text: "Prioritizes small balances (Psychological motivation)." }
            ],
            warning: {
                title: "Important Note - Mortgages",
                content: "The 'Plan' module is a <strong>simulator</strong>. It does not automatically update your actual balance in the Dashboard.<br/><strong>Action required:</strong> Once a month, manually adjust the 'Amount' field in this module to reflect your real bank statement."
            }
        },
        remb: {
            id: "remb",
            title: "Repayment Simulators",
            desc: "Calculate your payments for different types of loans.",
            cards: [
                { title: "Mortgage:", desc: "Simulate monthly payments, total interest, and down payment impact (Purchase/Renewal)." },
                { title: "Personal Loan:", desc: "Calculate the real cost of a car or personal loan." },
                { title: "Credit Card:", desc: "See the time needed to pay off a card with minimum payments." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investment",
            desc: "Complete tracking of your stock portfolio.",
            items: [
                { title: "Data Sources:", text: "Choose between <strong>Yahoo Finance (Free, Delayed 15min)</strong> or <strong>Alpha Vantage (Real-Time, Key Required)</strong> via configuration." },
                { title: "Refresh:", text: "Instantly updates the value of your holdings." },
                { title: "History:", text: "Edit or delete any past transaction." },
                { title: "Performance (GIPS):", text: "Analyzes real time-weighted return (CAGR)." }
            ],
            box: {
                type: "warning",
                title: "New Features Note:",
                content: "<ul><li><strong>Yahoo Finance:</strong> Great free choice, but please note prices are delayed by 15 minutes.</li><li><strong>Questrade:</strong> The connect option will appear <em>only</em> if your main currency is set to <strong>CAD</strong> (Canadian Dollar).</li></ul>"
            },
            button: "View Finance 101 Guide"
        },
        analyse: {
            id: "analyse",
            title: "Stock Analysis",
            desc: "Evaluate the fundamental health of a company before investing.",
            items: [
                { title: "Nexus Score (0-100):", text: "Synthetic score based on 7 key metrics (P/E, Growth, Margin, Debt, ROE...)." },
                { title: "PEG Ratio:", text: "Detects undervalued stocks relative to their growth." },
                { title: "AI Assistant:", text: "Generates an optimized prompt for Gemini/ChatGPT to retrieve financial data." }
            ]
        },
        perf: {
            id: "perf",
            title: "Performance",
            desc: "Visualize the real evolution of your wealth.",
            items: [
                { title: "Historical Chart:", text: "Evolution curve of your Net Worth and Total Assets over time." },
                { title: "Benchmarks:", text: "Compare your own performance to major indices (S&P 500, TSX)." }
            ]
        },
        immo: {
            id: "immo",
            title: "Real Estate",
            desc: "Professional rental profitability analysis.",
            cards: [
                { title: "NOI:", text: "Net Operating Income (Profit before mortgage)." },
                { title: "Cap Rate:", text: "Pure yield of the building without leverage." },
                { title: "Cash-on-Cash:", text: "Real return on your down payment." },
                { title: "DSCR:", text: "Debt Service Coverage Ratio (Bank)." }
            ],
            button: "Real Estate Guide"
        },
        params: {
            id: "params",
            title: "Settings & Tools",
            items: [
                { title: "Backup / Restore:", text: "Export your data to a JSON file to never lose it." },
                { title: "Calculator:", text: "Floating tool available everywhere in the application." },
                { title: "Module Reset:", text: "The orange button (circular arrow) clears only the active module's data." },
                { title: "Factory Reset:", text: "The red button clears ALL application data. <span style='color:var(--danger-color); font-weight:bold'>Irreversible action.</span>" }
            ]
        }
    }
};
