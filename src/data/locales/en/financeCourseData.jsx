import React from 'react';
import {
    ArrowTrendingUpIcon, ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';

const pastelColors = [
    '#E3F2FD', '#FFFDE7', '#E8F5E9', '#E0F7FA', '#FFF3E0', '#FFEBEE',
    '#F3E5F5', '#EFEBE9', '#F1F8E9', '#E0F2F1', '#FCE4EC', '#ECEFF1'
];

export const comparisonRatios = [
    {
        id: 1, title: "1. Price/Earnings (P/E)", color: pastelColors[0],
        biz: {
            formula: "Price / Earnings Per Share (EPS)",
            desc: "How much you pay for $1 of profit. Indicates if stock is expensive (Growth) or cheap (Value).",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (for value)",
            example: "$100 (Price) / $5 (EPS) = 20x"
        },
        fam: {
            title: "Family Buyout Price",
            desc: "Imagine buying your family. If you save $10k/year, and someone buys you for $200k, the P/E is 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$200,000 / $10,000 = 20x"
        }
    },
    {
        id: 2, title: "2. Growth (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Final / Initial)^(1/n)) - 1",
            desc: "Speed at which company increases profits or sales each year.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Salary Raise",
            desc: "Your annual raise. Going from $50k to $55k is 10% growth.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "($55k - $50k) / $50k = 10%"
        }
    },
    {
        id: 3, title: "3. Net Margin (%)", color: pastelColors[2],
        biz: {
            formula: "Net Profit / Revenue",
            desc: "% of each dollar of sales that stays in company pocket after all expenses.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "$10,000 / $100,000 = 10%"
        },
        fam: {
            title: "Savings Rate",
            desc: "Your Savings Rate. If you earn $4000 and save $400, your margin is 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "$400 / $4000 = 10%"
        }
    },
    {
        id: 4, title: "4. Debt / Equity", color: pastelColors[3],
        biz: {
            formula: "Total Debt / Equity",
            desc: "Leverage level. If > 1.0, company owes more than its book value.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (< 1.0)",
            example: "$200k / $100k = 2.0 (Risky)"
        },
        fam: {
            title: "Indebtedness Ratio",
            desc: "(Mortgage + Credit Card) / Net Worth.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$300k (Debts) / $100k (Net) = 3.0"
        }
    },
    {
        id: 5, title: "5. ROE (Return on Equity)", color: pastelColors[4],
        biz: {
            formula: "Net Profit / Equity",
            desc: "Management efficiency at generating profit with shareholder money.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (> 15%)",
            example: "$15 / $100 = 15%"
        },
        fam: {
            title: "Investment Efficiency",
            desc: "If you have $100k net worth generating $10k gains, your ROE is 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "$10,000 / $100,000 = 10%"
        }
    },
    {
        id: 6, title: "6. Liquidity (Current Ratio)", color: pastelColors[5],
        biz: {
            formula: "Current Assets / Current Liab.",
            desc: "Ability to pay immediate bills. If < 1.0, risk of default.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (> 1.5)",
            example: "$200k / $100k = 2.0"
        },
        fam: {
            title: "Emergency Fund Coverage",
            desc: "Your Emergency Fund / Monthly Bills.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (Safety)",
            example: "$5000 / $2500 = 2.0"
        }
    },
    {
        id: 7, title: "7. Dividend Yield (%)", color: pastelColors[6],
        biz: {
            formula: "Annual Dividend / Stock Price",
            desc: "Cash ROI paid by company.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (Max 10-12%)",
            example: "$4 / $100 = 4%"
        },
        fam: {
            title: "Pocket Money",
            desc: "Pocket money you pay yourself for fun from your investments.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = More Freedom",
            example: "$50 (Received) / $1000 (Invested) = 5%"
        }
    },
    {
        id: 8, title: "8. Gross Margin", color: pastelColors[7],
        biz: {
            formula: "(Revenue - COGS) / Revenue",
            desc: "Basic profitability before paying offices, ads, and taxes.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Burn Rate",
            desc: "Vital monthly expenses (Rent + Food). How many months can you survive without income?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (Expenses)",
            example: "$2000 / month (Vital)"
        }
    },
    {
        id: 9, title: "9. Price/Sales (P/S)", color: pastelColors[8],
        biz: {
            formula: "Market Cap / Revenue",
            desc: "Used for unprofitable companies. Compares market value to sales volume.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$1M / $500k = 2.0x"
        },
        fam: {
            title: "ROI (Renovation)",
            desc: "Investing $20k in a kitchen that adds $30k to house value.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "($30k - $20k) / $20k = 50%"
        }
    },
    {
        id: 10, title: "10. Price/Cash Flow (P/CF)", color: pastelColors[9],
        biz: {
            formula: "Price / Cash Flow per Share",
            desc: "Often more reliable than P/E. Shows real cash generation ability.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$100 / $10 = 10x"
        },
        fam: {
            title: "Working Capital",
            desc: "Financial cushion: Checking + Savings MINUS upcoming bills.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (Positive)",
            example: "$2000 (Bank) - $1500 (Bills) = +$500"
        }
    },
    {
        id: 11, title: "11. Debt / Total Assets", color: pastelColors[10],
        biz: {
            formula: "Total Debt / Total Assets",
            desc: "What part of company is funded by bank?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$400k / $1M = 0.4"
        },
        fam: {
            title: "Free Cash Flow",
            desc: "Savings MINUS mandatory house repairs. The real available money.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "$5000 (Savings) - $2000 (Roof) = $3000"
        }
    },
    {
        id: 12, title: "12. Payout Ratio", color: pastelColors[11],
        biz: {
            formula: "Dividends Paid / Net Profit",
            desc: "Share of profits returned to shareholders. If > 80%, dividend might be at risk.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (Sustainable)",
            example: "$2 (Div) / $4 (EPS) = 50%"
        },
        fam: {
            title: "Personal Payout Ratio",
            desc: "% of surplus used for treating yourself (Restaurants) instead of reinvesting.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (Future wealth)",
            example: "$400 (Fun) / $1000 (Surplus) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Finance 101 Guide",
        subtitle: "Mastering Personal Finance A to Z",
        parts: [
            { title: "Introduction", items: [{ id: 'intro', label: 'Why this guide?' }] },
            { title: "Part 1: Foundations", items: [{ id: 'chap1', label: "1. The Mindset" }, { id: 'chap2', label: "2. The Budget (GPS)" }, { id: 'chap3', label: "3. Assets vs Liabilities" }, { id: 'chap4', label: "4. Emergency Fund" }, { id: 'chap5', label: "5. Managing Debt" }] },
            { title: "Part 2: Investing", items: [{ id: 'chap6', label: "6. Why Invest?" }, { id: 'chap7', label: "7. Compound Interest" }, { id: 'chap8', label: "8. Risk/Return" }, { id: 'chap9', label: "9. Investment Types" }, { id: 'chap10', label: "10. Account Types" }] },
            { title: "Part 3: Stock Market", items: [{ id: 'chap11', label: "11. The Stock" }, { id: 'chap12', label: "12. Fundamental Analysis" }, { id: 'chap13', label: "13. Key Ratios" }, { id: 'chap14', label: "14. Dividends" }, { id: 'chap15', label: "15. Building Portfolio" }, { id: 'chap16', label: "16. Psychology" }] },
            { title: "Part 4: Goals", items: [{ id: 'chap17', label: "17. Goals" }, { id: 'chap18', label: "18. Retirement" }] },
            { title: "Part 5: Advanced Strategies", items: [{ id: 'chap19', label: "19. Fund. vs Tech." }, { id: 'chap20', label: "20. Stock Orders" }, { id: 'chap21', label: "21. Taxation (ACB)" }, { id: 'chap22', label: "22. Rebalancing" }, { id: 'chap23', label: "23. Psychological Traps" }] },
            { title: "Annex", items: [{ id: 'chap24', label: "24. Glossary" }, { id: 'bonus_psych', label: "Bonus: Psychology" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Introduction: Why this guide?",
            content: [
                { type: 'p', text: "You hold a powerful tool: <strong>Nexus Finance Pro</strong>. It's a sophisticated calculator, a precise portfolio manager, and a strategic debt planner, all in one." },
                { type: 'p', text: "But a tool, however powerful, is only effective if the craftsperson knows how and why to use it." },
                { type: 'p', text: "This guide is the <strong>\"Why\"</strong>. The Nexus Finance Pro app is the <strong>\"How\"</strong>." },
                { type: 'p', text: "You don't need to be an expert to use Nexus Finance Pro, but understanding key concepts will transform your experience. You won't just click buttons; you'll execute a plan. Keep in mind that while this tool is powerful, it is designed to assist you: for personalized advice, consulting a certified professional remains a wise choice." },
                {
                    type: 'box', style: 'info', title: 'What you will learn', content: [
                        { type: 'p', text: "This guide teaches timeless money management principles. We will cover:" },
                        { type: 'ul', items: ["<strong>Psychology:</strong> Mastering emotions to avoid costly mistakes.", "<strong>Foundations:</strong> Building a solid budget, emergency fund, and attacking debt.", "<strong>Investing:</strong> Understanding why and how to make money work for you.", "<strong>Stock Market:</strong> Demystifying stocks, ETFs, and ratios to invest with confidence.", "<strong>Advanced Strategies:</strong> Intermediate concepts to optimize taxation and portfolio management."] },
                        { type: 'p', text: "By the end of this guide, each Nexus Finance Pro module won't just be a tab, but a weapon in your arsenal to build financial independence." }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Chapter 1: The Right Mindset",
            content: [
                { type: 'p', text: "Welcome! Before talking numbers or ratios, we must discuss the most powerful tool available: your mindset." },
                { type: 'p', text: "Financial management isn't luck. It's not a secret for the elite. It's a set of habits, decisions, and systems anyone can learn." },
                { type: 'p', text: "The biggest obstacle isn't lack of money, it's psychology. It's fear of looking at accounts, procrastination, or feeling \"bad with numbers\"." },
                {
                    type: 'box', style: 'warning', title: 'Myths to Bust', content: [
                        { type: 'ul', items: ["<strong>Myth 1: \"You need money to make money.\"</strong><br>False. You need habits to make money. Someone saving $100/month with a plan will beat someone earning $10k/month but spending $10.1k.", "<strong>Myth 2: \"Investing is like gambling.\"</strong><br>False. Short-term speculation (day trading) is like gambling. Long-term investing, based on company health, is participating in global economic growth.", "<strong>Myth 3: \"I'm too young / too old.\"</strong><br>False. If young, your asset is time. If older, your asset is (usually) higher income and discipline. The best time to start was 10 years ago. The second best time is today."] }
                    ]
                },
                { type: 'p', text: "<strong>Main Goal:</strong> Financial INDEPENDENCE. Not getting rich to buy luxury cars. It's having enough assets working for you so you don't *need* to work to pay bills. Work becomes a choice, not an obligation." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Chapter 2: The Budget (Your GPS)",
            content: [
                { type: 'p', text: "You can't reach a destination if you don't know where you are. The budget is your \"You are here\" point. It's not a prison; it's a tool giving you permission to spend without guilt." },
                { type: 'p', text: "A budget answers one question: <strong>Where is my money going?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'Zero-Based Budget', content: [
                        { type: 'p', text: "The most effective method. Idea: At month end, Income minus Outflow must equal zero. This doesn't mean you have zero money left! It means every dollar has a mission." },
                        { type: 'p', text: "<code>Income - Expenses - Savings - Investments = $0</code>" },
                        { type: 'p', text: "If you earn $3000 and spend $2500, you have $500 left. You decide in advance: \"$200 to Emergency Fund\", \"$100 to Investments\", \"$200 for Vacation\"." }
                    ]
                },
                { type: 'p', text: "<strong>Action:</strong> Use the <strong>Budget Module</strong>. List ALL income and expenses, even the $3 coffee. Use frequencies so the tool calculates exact monthly cashflow." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Chapter 3: Assets vs Liabilities",
            content: [
                { type: 'p', text: "The most important concept, popularized by Robert Kiyosaki." },
                {
                    type: 'box', style: 'info', title: 'Simple Definition', content: [
                        { type: 'p', text: "An <strong>ASSET</strong> puts money IN your pocket." },
                        { type: 'p', text: "A <strong>LIABILITY</strong> takes money OUT of your pocket." }
                    ]
                },
                { type: 'p', text: "Your goal: Use income to buy assets, so these assets generate new income to buy more assets." },
                {
                    type: 'grid', items: [
                        { title: "Asset Examples", text: "Dividend stock. ETF gaining value. Profitable rental property." },
                        { title: "Liability Examples", text: "Car loan. Credit card balance. Student loan." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'The Main Home Trap', content: [
                        { type: 'p', text: "\"My home is my biggest asset!\" Really? Every month, it takes money out of your pocket (Mortgage, tax, insurance). Strictly speaking, it's a liability." },
                        { type: 'p', text: "It becomes an asset when you sell (if value rose), or if you rent a part out." }
                    ]
                },
                { type: 'p', text: "Your <strong>Net Worth</strong> is your financial health score. <strong>Assets - Liabilities</strong>. Your goal is to increase this number." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Chapter 4: Emergency Fund",
            content: [
                { type: 'p', text: "Life is unpredictable. Car breaks down. Roof leaks. Job loss. The difference between a mishap and a disaster is an emergency fund." },
                { type: 'p', text: "It's your shield. Money set aside strictly for emergencies. Not for investing, not for performance. It's there to be liquid and accessible." },
                {
                    type: 'box', style: 'info', title: 'How Much?', content: [
                        { type: 'p', text: "Standard goal: <strong>3 to 6 months</strong> of living expenses." },
                        { type: 'p', text: "If living costs are $2500, fund should be $7500 to $15000." }
                    ]
                },
                { type: 'p', text: "<strong>Where?</strong> High Interest Savings Account (HISA). Separate from checking but accessible in 1-2 days." },
                { type: 'p', text: "<strong>Priority:</strong> Before paying debt (except minimums) or investing, build a \"mini-fund\" of $1000." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Chapter 5: Managing Debt",
            content: [
                { type: 'p', text: "Two types: 'Good' vs 'Bad' debt." },
                { type: 'ul', items: ["<strong>Good Debt:</strong> Used to buy an appreciating asset. Ex: Mortgage (property), Student loan (invest in yourself).", "<strong>Bad Debt:</strong> Used to buy consumer liabilities. Ex: Car loan, Credit card."] },
                { type: 'p', text: "Pay off bad debt ASAP using two strategies (simulate in Debt Plan Module):" },
                {
                    type: 'box', style: 'info', title: 'Strategy 1: Avalanche', content: [
                        { type: 'p', text: "List debts by interest rate (Highest first). Pay minimums on all, throw all extra cash at highest rate." },
                        { type: 'p', text: "<strong>Pros:</strong> Saves most money mathematically." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Strategy 2: Snowball', content: [
                        { type: 'p', text: "List debts by balance (Smallest first). Attack smallest debt with everything." },
                        { type: 'p', text: "<strong>Pros:</strong> Quick wins. Psychological momentum." }
                    ]
                }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Chapter 6: Why Invest?",
            content: [
                { type: 'p', text: "Budget and Emergency Fund done? 'Defense mode' complete. Enter 'Attack mode': Investing." },
                { type: 'p', text: "Savings protect you. Investing makes you rich." },
                {
                    type: 'box', style: 'warning', title: 'Enemy #1: Inflation', content: [
                        { type: 'p', text: "Inflation is prices rising. At 3% inflation, $100 today buys only $97 worth next year. Cash <strong>loses</strong> value if it sleeps." },
                        { type: 'p', text: "Leaving $10,000 in checking for 25 years at 2.5% inflation leaves you with $5,394 of purchasing power. You lost half your money by doing nothing." }
                    ]
                },
                { type: 'p', text: "Investing goal: Get return > inflation. Nexus Pro calculates 'Real Purchasing Power' in Future Value module to show this." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Chapter 7: Compound Interest",
            content: [
                { type: 'p', text: "Einstein called it the '8th wonder of the world'. It's interest on interest. A snowball effect." },
                {
                    type: 'box', style: 'success', title: 'Simple Example', content: [
                        { type: 'ul', items: ["Year 1: 10k * 8% = $800. Total $10,800.", "Year 2: 10.8k * 8% = $864. Total $11,664."] },
                        { type: 'p', text: "Your money works for you, and your 'employees' (gains) start working too." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Time Factor', content: [
                        { type: 'p', text: "<strong>Alex (25-35):</strong> Invests $5k/yr for 10 years (Total 50k).<br><strong>Ben (35-65):</strong> Invests $5k/yr for 30 years (Total 150k)." },
                        { type: 'p', text: "At age 65 (8% return):<br>Alex (only 50k in) has: <strong>$1,028,000</strong><br>Ben (150k in) has: <strong>$611,000</strong>" },
                        { type: 'p', text: "Alex wins because he started 10 years earlier." }
                    ]
                },
                { type: 'p', text: "<strong>Action:</strong> Use Future Value Module. See the exponential curve." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Chapter 8: Risk/Return Spectrum",
            content: [
                { type: 'p', text: "No free lunch. <strong>Higher potential return = Higher risk of loss.</strong>" },
                {
                    type: 'box', style: 'info', title: 'The Spectrum', content: [
                        { type: 'ul', items: ["<strong>Low Risk/Return:</strong> Savings, GICs, Gov Bonds. Struggles to beat inflation.", "<strong>Med Risk/Return:</strong> Broad ETFs (S&P 500), Blue chip stocks.", "<strong>High Risk/Return:</strong> Individual stocks, Crypto, Startups."] }
                    ]
                },
                { type: 'p', text: "<strong>Risk is Volatility.</strong> If portfolio drops 30%, will you panic sell? Know yourself." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Chapter 9: Investment Types",
            content: [
                { type: 'p', text: "The LEGO blocks of your portfolio." },
                { type: 'ul', items: ["<strong>1. Stocks:</strong> Buying a share (`AAPL`) is owning a piece of the company. Gain via Price Rise + Dividends.", "<strong>2. Bonds:</strong> Loaning money to gov/company for fixed interest. Safer than stocks.", "<strong>3. ETFs (Exchange Traded Funds):</strong> Best starting point. A basket of hundreds of stocks bought as one."] },
                { type: 'p', text: "With one ETF (e.g., S&P 500 tracker), you own a slice of top 500 US companies. Instant diversification." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Chapter 10: Account Types (International)",
            content: [
                { type: 'p', text: "Governments offer tax incentives to encourage saving. Names change (401k/Roth in US, ISA in UK, TFSA/RRSP in Canada), concepts stay same." },
                {
                    type: 'box', style: 'success', title: '1. Tax-Free Accounts', content: [
                        { type: 'p', text: "Invest 'after-tax' money. <strong>Benefit:</strong> Future gains are 100% tax-free." },
                        { type: 'p', text: "<strong>Examples:</strong> Roth IRA (USA), ISA (UK), TFSA (Canada)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Tax-Deferred Accounts', content: [
                        { type: 'p', text: "Invest 'pre-tax' money. <strong>Benefit:</strong> Immediate tax deduction, but pay tax on withdrawal." },
                        { type: 'p', text: "<strong>Examples:</strong> 401k / Traditional IRA (USA), RRSP (Canada)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Taxable Account:</strong> No perks. Pay tax on dividends/gains annually." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Chapter 11: What is a Stock?",
            content: [
                { type: 'p', text: "Buying a stock is buying ownership. If a company has 1M shares and you buy 100, you own 0.01%." },
                { type: 'p', text: "You are an owner. You get a share of profits (dividends)." },
                { type: 'p', text: "<strong>Stock Market:</strong> A public auction where price is set by supply/demand." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Chapter 12: Fundamental Analysis",
            content: [
                { type: 'p', text: "Art of evaluating real company value. Finding extraordinary companies at ordinary prices." },
                { type: 'ul', items: ["<strong>Balance Sheet:</strong> Assets vs Debts.", "<strong>Income Statement:</strong> Revenues & Profits.", "<strong>Cash Flow:</strong> Real money in/out."] },
                { type: 'p', text: "The <strong>Stock Analysis Module</strong> in Nexus Pro simplifies this." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Chapter 13: Understanding Key Ratios",
            content: [
                { type: 'p', text: "Ratios are shortcuts to check health without reading 100 pages." },
                {
                    type: 'box', style: 'info', title: '1. Valuation', content: [
                        { type: 'ul', items: ["<strong>P/E:</strong> Price paid for $1 profit. (20x = pay $20 for $1 earnings).", "<strong>PEG:</strong> P/E divided by Growth. < 1.0 is potential bargain."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Profitability', content: [
                        { type: 'ul', items: ["<strong>Net Margin:</strong> % profit on sales.", "<strong>ROE:</strong> Efficiency of shareholder money. > 15% is great."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Health', content: [
                        { type: 'ul', items: ["<strong>Debt/Equity:</strong> Measures leverage. > 1.0 needs caution.", "<strong>Current Ratio:</strong> Ability to pay short-term bills."] }
                    ]
                },
                { type: 'p', text: "To understand stock ratios, compare them to personal finance. A company is just a large household. Below, we compare 'Business' concepts to 'Family' equivalents." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Chapter 14: Dividend Investing",
            content: [
                { type: 'p', text: "Strategy focused on passive income. Paid to wait. Like owning an orchard: you want apples, not to sell the trees." },
                { type: 'p', text: "<strong>Yield:</strong> (Annual Div / Price) * 100." },
                {
                    type: 'box', style: 'warning', title: 'Yield Trap (> 12%)', content: [
                        { type: 'p', text: "Nexus Rule: Yield > 12% gets 0 score. Why? If price crashes, yield spikes. 15% yield usually screams 'Dividend Cut Incoming'." }
                    ]
                },
                { type: 'p', text: "<strong>Dividend Growth:</strong> The magic is buying companies that <strong>increase</strong> dividends annually (Aristocrats)." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Chapter 15: Building a Portfolio",
            content: [
                { type: 'p', text: "Your portfolio needs 2 things: Diversification & Allocation." },
                {
                    type: 'box', style: 'concept', title: 'Diversification', content: [
                        { type: 'p', text: "Don't put all eggs in one basket. Mix <strong>Assets</strong> (Stocks/Bonds), <strong>Sectors</strong> (Tech/Bank/Energy) and <strong>Geography</strong> (USA/World). ETFs do this instantly." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Allocation', content: [
                        { type: 'p', text: "% of money in Stocks (Risk/Growth) vs Bonds (Safe)." },
                        { type: 'ul', items: ["<strong>Young (20-35):</strong> Aggressive. Ex: 90% Stocks.", "<strong>Mid (35-50):</strong> Balanced. Ex: 70% Stocks / 30% Bonds.", "<strong>Retired:</strong> Safe. Ex: 40% Stocks / 60% Bonds."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Chapter 16: Investor Psychology",
            content: [
                { type: 'p', text: "Investing is simple but not easy. Your worst enemy is you." },
                { type: 'ul', items: ["<strong>Greed (FOMO):</strong> Buying at the top.", "<strong>Fear:</strong> Selling at the bottom."] },
                {
                    type: 'box', style: 'success', title: 'Solution: DCA', content: [
                        { type: 'p', text: "<strong>Dollar-Cost Averaging</strong>. Invest fixed amount monthly, no matter what." },
                        { type: 'p', text: "When market drops, you buy MORE shares cheap. When it rises, you buy LESS. Removes emotion." }
                    ]
                },
                { type: 'p', text: "<strong>Bonus:</strong> Read the Psychology of Money bonus chapter at the end!" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Chapter 17: Defining Goals",
            content: [
                { type: 'p', text: "Don't save just to save. Save for a purpose. Goal must be Smart." },
                { type: 'p', text: "Bad: \"I want to be rich\".<br>Good: \"I want $50k down payment in 3 years.\"" },
                { type: 'p', text: "<strong>Action:</strong> <strong>Goal Module</strong> calculates required monthly savings." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Chapter 18: Planning Retirement",
            content: [
                { type: 'p', text: "When your portfolio pays for your lifestyle." },
                {
                    type: 'box', style: 'info', title: '4% Rule', content: [
                        { type: 'p', text: "Historically, you can withdraw <strong>4%</strong> of portfolio annually without running out for 30 years." },
                        { type: 'p', text: "Target Amount: <strong>Annual Expenses x 25</strong>." },
                        { type: 'p', text: "Ex: Need $40k/yr? 40k x 25 = <strong>$1,000,000</strong>." }
                    ]
                },
                { type: 'p', text: "Use <strong>Withdrawal Module</strong> to simulate." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Chapter 19: Fundamental vs Technical",
            content: [
                { type: 'p', text: "Duel of philosophies." },
                { type: 'ul', items: ["<strong>Fundamental (Investor):</strong> \"Is this a good company?\" Tool: Balance Sheet. Goal: Long term.", "<strong>Technical (Trader):</strong> \"Where is price going?\" Tool: Charts. Goal: Short term timing."] },
                { type: 'p', text: "<strong>Our view:</strong> For wealth, Fundamental is king. Technical helps timing but shouldn't be the basis." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Chapter 20: Stock Orders (Full Guide)",
            content: [
                { type: 'p', text: "Knowing what to buy is one thing, knowing how is another. Here are the 5 essential order types." },
                {
                    type: 'box', style: 'info', title: '1. Market Order', content: [
                        { type: 'p', text: "<strong>Concept:</strong> \"I want it NOW, price doesn't matter.\"" },
                        { type: 'p', text: "<strong>How:</strong> Executed immediately at best available price." },
                        { type: 'p', text: "<strong>Risk:</strong> Price might jump up before execution." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Limit Order', content: [
                        { type: 'p', text: "<strong>Concept:</strong> \"I want to buy, but not pay more than $X.\"" },
                        { type: 'p', text: "<strong>How:</strong> You set a ceiling price. Executes only if market hits it." },
                        { type: 'p', text: "<strong>Benefit:</strong> Total price control." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Stop Loss', content: [
                        { type: 'p', text: "<strong>Concept:</strong> \"Emergency Exit.\"" },
                        { type: 'p', text: "<strong>How:</strong> Dormant order. Wake up if price drops to X, then sell at market." },
                        { type: 'p', text: "<strong>Risk:</strong> In a crash, you might sell way below your stop price." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Stop Limit', content: [
                        { type: 'p', text: "<strong>Concept:</strong> \"Precise Emergency Exit.\"" },
                        { type: 'p', text: "<strong>How:</strong> Same as Stop, but with a limit on how low you'll sell." },
                        { type: 'p', text: "<strong>Risk:</strong> If price crashes too fast, you might not sell at all." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Trailing Stop', content: [
                        { type: 'p', text: "<strong>Concept:</strong> \"Let profits run.\"" },
                        { type: 'p', text: "<strong>How:</strong> Stop price rises with stock, but never drops. Follows the trend." }
                    ]
                }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Chapter 21: Taxation (ACB)",
            content: [
                { type: 'p', text: "Crucial for <strong>Taxable Accounts</strong>. When you sell, you pay tax on: <code>Sale Price - ACB</code>." },
                {
                    type: 'box', style: 'info', title: 'ACB (Adjusted Cost Base)', content: [
                        { type: 'p', text: "Official term for your average cost. Weighted average of all purchases including commissions." },
                        { type: 'p', text: "Calc: (Total cost of all buys) / (Total shares)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro estimates ACB automatically in <strong>Investment Module</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Chapter 22: Rebalancing",
            content: [
                { type: 'p', text: "If target is 70/30 Stocks/Bonds, and stocks gain (now 80%), portfolio is too risky." },
                { type: 'p', text: "<strong>Rebalance:</strong> Sell high (Stocks) and buy low (Bonds) to get back to 70/30." },
                { type: 'p', text: "It forces you to <strong>Buy Low, Sell High</strong> mathematically." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Chapter 23: Psychological Traps",
            content: [
                { type: 'ul', items: ["<strong>Confirmation Bias:</strong> Only reading news that agrees with your opinion.", "<strong>Anchoring:</strong> Thinking stock is cheap because it was $300 before. Past doesn't matter.", "<strong>Loss Aversion:</strong> Selling winners too fast and keeping losers too long."] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Chapter 24: Glossary",
            content: [
                { type: 'p', text: "Quick refresher." },
                {
                    type: 'grid', items: [
                        { title: "Asset", text: "Puts money in pocket." },
                        { title: "Liability", text: "Takes money out." },
                        { title: "Stock", text: "Ownership share." },
                        { title: "Bond", text: "Loan to entity." },
                        { title: "Dividend", text: "Shared profit." },
                        { title: "ETF", text: "Basket of stocks." },
                        { title: "EPS", text: "Earnings Per Share." },
                        { title: "P/E", text: "Price/Earnings Ratio." },
                        { title: "ACB", text: "Adjusted Cost Base (Tax)." },
                        { title: "Net Worth", text: "Assets - Liabilities." }
                    ]
                }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bonus: Psychology of Money",
            content: [
                { type: 'p', text: "<strong>(Based on Morgan Housel's concepts)</strong>." },
                {
                    type: 'box', style: 'info', title: 'Part 1: No one is crazy', content: [
                        { type: 'p', text: "We all make decisions based on our unique history. Don't judge others." },
                        { type: 'p', text: "<strong>Luck & Risk:</strong> Bill Gates had skill + luck (school computer). Success has both. Be humble." },
                        { type: 'p', text: "<strong>Never Enough:</strong> Don't risk what you have and need for what you don't have and don't need." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Part 2: Building Wealth', content: [
                        { type: 'p', text: "<strong>Confounding Compounding:</strong> Warren Buffett is rich because he started as a child. <em>Shut up and wait.</em>" },
                        { type: 'p', text: "<strong>Getting Rich vs Staying Rich:</strong> Staying rich requires paranoia and frugality." },
                        { type: 'p', text: "<strong>Tails, You Win:</strong> You can be wrong 50% of time and still win if your winners are huge." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Part 3: Freedom', content: [
                        { type: 'p', text: "<strong>Freedom:</strong> The highest dividend is controlling your time." },
                        { type: 'p', text: "<strong>Man in the Car Paradox:</strong> No one cares about your fancy car. They look at the car, not you. Be humble." },
                        { type: 'p', text: "<strong>Wealth is what you don't see:</strong> Wealth is saved money, not spent money." }
                    ]
                }
            ]
        }
    }
};
