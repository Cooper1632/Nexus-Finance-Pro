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
            formula: "Price / Earnings (EPS)",
            desc: "How much you pay for $1 of profit. Indicates if stock is expensive (Growth) or cheap (Value).",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (for value)",
            example: "$100 (Price) / $5 (EPS) = 20x"
        },
        fam: {
            title: "Family Purchase Price",
            desc: "Imagine someone wants to 'buy' your family. If you save 10k/year, and they buy you for 200k, the P/E is 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$200,000 / $10,000 = 20x"
        }
    },
    {
        id: 2, title: "2. Growth (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Final / Initial)^(1/n)) - 1",
            desc: "Speed at which the company increases its profits or sales each year (Compound Annual Growth Rate).",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Salary Increase",
            desc: "Your annual salary raise. If you go from 50k to 55k, you have a 10% growth.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "(55k - 50k) / 50k = 10%"
        }
    },
    {
        id: 3, title: "3. Net Margin (%)", color: pastelColors[2],
        biz: {
            formula: "Net Income / Revenue",
            desc: "% of every dollar of sales that stays in the company's pocket after all expenses.",
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
            formula: "Total Debt / Total Equity",
            desc: "Debt level. If > 1.0, the company owes more money than it is worth on paper.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (< 1.0)",
            example: "$200k / $100k = 2.0 (Risky)"
        },
        fam: {
            title: "Debt Ratio",
            desc: "(Mortgage + Credit Card) / Your Net Worth.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$300k (Debt) / $100k (Net) = 3.0"
        }
    },
    {
        id: 5, title: "5. ROE (Return on Equity)", color: pastelColors[4],
        biz: {
            formula: "Net Income / Shareholder's Equity",
            desc: "Efficiency of management in generating profit with shareholders' money.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (> 15%)",
            example: "$15 / $100 = 15%"
        },
        fam: {
            title: "Investment Efficiency",
            desc: "If you have 100k net worth and it generates 10k in gains/interest, your ROE is 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "$10,000 / $100,000 = 10%"
        }
    },
    {
        id: 6, title: "6. Current Ratio (Liquidity)", color: pastelColors[5],
        biz: {
            formula: "Current Assets / Current Liabilities",
            desc: "Ability to pay immediate bills. If < 1.0, risk of running out of cash.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (> 1.5)",
            example: "$200k / $100k = 2.0"
        },
        fam: {
            title: "Emergency Fund Coverage",
            desc: "Your Emergency Fund / Your monthly bills.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (Safety)",
            example: "$5000 / $2500 = 2.0"
        }
    },
    {
        id: 7, title: "7. Dividend Yield (%)", color: pastelColors[6],
        biz: {
            formula: "Annual Dividend / Stock Price",
            desc: "The cash return on investment paid by the company.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (Max 10-12%)",
            example: "$4 / $100 = 4%"
        },
        fam: {
            title: "Pocket Money",
            desc: "The pocket money you pay yourself for fun from your investments.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = More freedom",
            example: "$50 (Received) / $1000 (Invested) = 5%"
        }
    },
    {
        id: 8, title: "8. Gross Margin", color: pastelColors[7],
        biz: {
            formula: "(Revenue - COGS) / Revenue",
            desc: "Basic profitability before paying for offices, ads, and taxes.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Burn Rate",
            desc: "Vital monthly expenses (Rent + Food). How many months can you survive without income?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (Expenses)",
            example: "$2000 / month (Vital expenses)"
        }
    },
    {
        id: 9, title: "9. Price/Sales (P/S)", color: pastelColors[8],
        biz: {
            formula: "Market Cap / Revenue",
            desc: "Used to value companies with no profit. Compares market value to sales volume.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$1M / $500k = 2.0x"
        },
        fam: {
            title: "ROI (Return on Investment)",
            desc: "Investing $20k in a kitchen that increases home value by $30k.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "(30k - 20k) / 20k = 50%"
        }
    },
    {
        id: 10, title: "10. Price/Cash Flow (P/CF)", color: pastelColors[9],
        biz: {
            formula: "Price / Cash Flow Per Share",
            desc: "Often more reliable than P/E. Indicates the company's actual ability to generate cash.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$100 / $10 = 10x"
        },
        fam: {
            title: "Working Capital",
            desc: "Your financial cushion: Checking + Accessible Savings MINUS upcoming bills.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better (Positive)",
            example: "$2000 (Bank) - $1500 (Bills) = +$500"
        }
    },
    {
        id: 11, title: "11. Debt / Total Assets", color: pastelColors[10],
        biz: {
            formula: "Total Debt / Total Assets",
            desc: "What part of the company is financed by the bank?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better",
            example: "$400k / $1M = 0.4"
        },
        fam: {
            title: "Free Cash Flow",
            desc: "Your savings MINUS mandatory house repairs. This is the real available money.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Higher = Better",
            example: "$5000 (Savings) - $2000 (Roof) = $3000"
        }
    },
    {
        id: 12, title: "12. Payout Ratio", color: pastelColors[11],
        biz: {
            formula: "Dividends Paid / Net Income",
            desc: "The share of profits given back to shareholders. If > 80%, the dividend might be at risk.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (Sustainable)",
            example: "$2 (Div) / $4 (EPS) = 50%"
        },
        fam: {
            title: "Personal Payout Ratio",
            desc: "% of your surplus used to spoil yourself (Restaurants) instead of reinvesting.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Lower = Better (Future wealth)",
            example: "$400 (Restos) / $1000 (Surplus) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Finance 101 Guide",
        subtitle: "Mastering Personal Finance from A to Z",
        parts: [
            { title: "Introduction", items: [{ id: 'intro', label: 'Why this guide?' }] },
            { title: "Part 1: The Foundations", items: [{ id: 'chap1', label: "1. The Right Mindset" }, { id: 'chap2', label: "2. The Budget, Your GPS" }, { id: 'chap3', label: "3. Assets vs Liabilities" }, { id: 'chap4', label: "4. The Emergency Fund" }, { id: 'chap5', label: "5. Managing Debt" }] },
            { title: "Part 2: Investing", items: [{ id: 'chap6', label: "6. Why Invest?" }, { id: 'chap7', label: "7. Compound Interest" }, { id: 'chap8', label: "8. Risk/Return" }, { id: 'chap9', label: "9. Investment Types" }, { id: 'chap10', label: "10. Account Types" }] },
            { title: "Part 3: The Stock Market in Detail", items: [{ id: 'chap11', label: "11. The Stock" }, { id: 'chap12', label: "12. Fundamental Analysis" }, { id: 'chap13', label: "13. Key Ratios" }, { id: 'chap14', label: "14. Dividends" }, { id: 'chap15', label: "15. Building Your Portfolio" }, { id: 'chap16', label: "16. Psychology" }] },
            { title: "Part 4: Your Goals", items: [{ id: 'chap17', label: "17. Goals" }, { id: 'chap18', label: "18. Retirement" }] },
            { title: "Part 5: Advanced Strategies", items: [{ id: 'chap19', label: "19. Fund. vs Tech." }, { id: 'chap20', label: "20. Stock Orders" }, { id: 'chap21', label: "21. Taxation (ACB)" }, { id: 'chap22', label: "22. Rebalancing" }, { id: 'chap23', label: "23. Psychological Traps" }] },
            { title: "Annex", items: [{ id: 'chap24', label: "24. Glossary" }, { id: 'bonus_psych', label: "Bonus: Psychology" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Introduction: Why this guide?",
            content: [
                { type: 'p', text: "You have in your hands a powerful tool: <strong>Nexus Finance Pro</strong>. It is a sophisticated calculator, a precise portfolio manager, and a strategic debt planner, all in one." },
                { type: 'p', text: "But a tool, however powerful, is only effective if the craftsman knows how and why to use it." },
                { type: 'p', text: "This guide is the <strong>\"Why\"</strong>. Nexus Finance Pro is the <strong>\"How\"</strong>." },
                { type: 'p', text: "You don't need to be an expert to use Nexus Finance Pro, but understanding the fundamental concepts will transform your experience. You won't just be clicking buttons; you will be executing a plan. However, keep in mind that even though this tool is very powerful, it is designed to assist you: for validating your strategies and obtaining personalized advice, the guidance of a certified professional remains a wise choice." },
                {
                    type: 'box', style: 'info', title: 'What you will learn', content: [
                        { type: 'p', text: "This guide will teach you the timeless principles of money management. We will cover:" },
                        { type: 'ul', items: ["<strong>Psychology:</strong> How to master your emotions to avoid costly mistakes.", "<strong>The Foundations:</strong> Building a solid budget, creating an emergency fund, and attacking your debts.", "<strong>Investing:</strong> Understanding why and how to make your money work for you.", "<strong>The Stock Market:</strong> Demystifying stocks, ETFs, and financial ratios to invest with confidence.", "<strong>Advanced Strategies:</strong> Intermediate-level concepts to optimize your taxation and portfolio management."] },
                        { type: 'p', text: "By the end of this guide, each module of Nexus Finance Pro will no longer be just a simple tab, but a weapon in your arsenal to build your financial independence." }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Chapter 1: The Right Mindset",
            content: [
                { type: 'p', text: "Welcome to this guide! Before talking about numbers, ratios, or strategies, we must talk about the most powerful tool at your disposal: your mindset." },
                { type: 'p', text: "Financial management is not a matter of luck. It is not a secret reserved for an elite. It is a set of habits, decisions, and systems that anyone can learn and apply." },
                { type: 'p', text: "The biggest obstacle is not the lack of money, it's psychology. It's the fear of looking at your accounts, procrastination, or the feeling of being \"bad with numbers\"." },
                {
                    type: 'box', style: 'warning', title: 'Myths to Debunk', content: [
                        { type: 'ul', items: ["<strong>Myth 1: \"You need money to make money.\"</strong><br>False. You need habits to make money. A person who saves $100 a month with a plan will always beat a person who earns $10,000 a month but spends $10,100.", "<strong>Myth 2: \"Investing is like gambling.\"</strong><br>False. Short-term speculation (day trading) is like gambling. Long-term investment, based on analyzing company health, is participation in global economic growth. It is owning a share of a real business.", "<strong>Myth 3: \"I am too young / too old to start.\"</strong><br>False. If you are young, your biggest asset is time (see Chapter 7 on compound interest). If you are older, your biggest asset is (often) higher income and discipline. The best time to start was 10 years ago. The second best time is today."] }
                    ]
                },
                { type: 'p', text: "<strong>Your Main Goal:</strong> Financial INDEPENDENCE. It's not about becoming rich to buy a luxury car. It's about having enough assets (investments) working for you, so you no longer need to work to pay your bills. Work becomes a choice, not an obligation." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Chapter 2: The Budget, Your GPS",
            content: [
                { type: 'p', text: "You cannot reach a destination if you don't know where you are. The budget is your \"You are here\" on the financial map. It is not a prison designed to stop you from spending; it is a tool designed to give you permission to spend without guilt." },
                { type: 'p', text: "A budget answers one single question: <strong>Where is my money going?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'The Zero-Based Budget', content: [
                        { type: 'p', text: "The most effective method is the \"Zero-Based Budget\". The idea is simple: at the end of the month, the difference between your income and your money outflows must be zero. This doesn't mean you have nothing left! It means every dollar has received a mission." },
                        { type: 'p', text: "<code>Income - Expenses - Savings - Investments = $0</code>" },
                        { type: 'p', text: "If you earn $3000 and have $2500 in expenses, you have $500 left. With a zero-based budget, you decide in advance what those $500 will do: \"$200 to emergency fund\", \"$100 to TFSA\", \"$200 to vacation savings\"." }
                    ]
                },
                { type: 'p', text: "<strong>Take Action:</strong> Use the <strong>Budget Module</strong> of Nexus Finance Pro. List ALL your income and ALL your expenses, even the $3 coffee. Use frequencies (annual, monthly) so the tool calculates your exact monthly cash flow. This is the first step of your entire plan." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Chapter 3: Assets vs Liabilities",
            content: [
                { type: 'p', text: "This is the most important concept in personal finance, popularized by Robert Kiyosaki in \"Rich Dad Poor Dad\"." },
                {
                    type: 'box', style: 'info', title: 'The Simple Definition', content: [
                        { type: 'p', text: "An <strong>ASSET</strong> puts money in your pocket." },
                        { type: 'p', text: "A <strong>LIABILITY</strong> takes money out of your pocket." }
                    ]
                },
                { type: 'p', text: "It is that simple. The goal of your financial life is to use your income to buy assets, so that those assets generate new income to buy even more assets." },
                {
                    type: 'grid', items: [
                        { title: "Asset Examples", text: "A stock paying a dividend. An ETF gaining value. A profitable rental property." },
                        { title: "Liability Examples", text: "A car loan. Credit card balance. Student loan." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'The Primary Residence Trap', content: [
                        { type: 'p', text: "\"My house is my biggest asset!\" Really? Every month, it takes money out of your pocket (mortgage, taxes, insurance, repairs). By the strict definition, your primary residence is a liability." },
                        { type: 'p', text: "It can become an asset the day you sell it (if it has gained value), or if you rent out the basement (it generates income). But do not confuse a liability (which costs you money) with an investment." }
                    ]
                },
                { type: 'p', text: "Your <strong>Net Worth</strong> is the measure of your financial health. This is what you see on your Dashboard." },
                { type: 'p', text: "<strong>Net Worth = Total Assets - Total Liabilities</strong>. Your goal is to make this number grow, month after month, year after year." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Chapter 4: The Emergency Fund",
            content: [
                { type: 'p', text: "Life is unpredictable. The car breaks down. The roof leaks. You lose your job. The difference between a mishap and a financial disaster is called an emergency fund." },
                { type: 'p', text: "An emergency fund is your shield. It is money set aside exclusively for emergencies. This money is not invested, it is not there to \"perform\". It is there to be liquid, accessible, and boring." },
                {
                    type: 'box', style: 'info', title: 'How much?', content: [
                        { type: 'p', text: "The standard goal is to hold <strong>3 to 6 months</strong> of living expenses." },
                        { type: 'p', text: "Calculate how much you need to spend each month to live (rent/mortgage, basic food, utilities, minimum transport). If this amount is $2,500, your emergency fund should be between $7,500 and $15,000." }
                    ]
                },
                { type: 'p', text: "<strong>Where to put it?</strong> In a safe and accessible place, but not too accessible (not your everyday checking account). A High Interest Savings Account (HISA) is ideal. It is separate from your daily operations, but you can access it in 1 or 2 days." },
                { type: 'p', text: "<strong>Absolute Priority:</strong> Before paying off debts (except minimums) and before investing a single dollar in the stock market, build a \"mini-fund\" of $1,000. This money will prevent you from going further into debt the next time a tire blows." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Chapter 5: Managing Debt",
            content: [
                { type: 'p', text: "There are two types of debt: \"good\" debt and \"bad\" debt." },
                { type: 'ul', items: ["<strong>Good debts (Investment debts):</strong> Debts used to buy an asset that gains value. Ex: A mortgage (to buy real estate), a student loan (to invest in yourself).", "<strong>Bad debts (Consumption debts):</strong> Debts used to buy a liability that loses value. Ex: A car loan, credit card balance for vacation or restaurants."] },
                { type: 'p', text: "Your goal is to pay off bad debts as fast as possible. For this, there are two main strategies, which you can simulate in the Plan Module." },
                {
                    type: 'box', style: 'info', title: 'Strategy 1: The Avalanche', content: [
                        { type: 'p', text: "You list all your debts by descending interest rate. You put all extra money on the debt with the highest rate." },
                        { type: 'p', text: "<strong>Advantage:</strong> This method saves you the most money in interest. It is the most mathematically efficient." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Strategy 2: The Snowball', content: [
                        { type: 'p', text: "You list all your debts by ascending balance (smallest to largest). You attack the smallest debt with all your extra money." },
                        { type: 'p', text: "<strong>Advantage:</strong> You get quick \"wins\". Paying off a small debt creates immense psychological momentum and motivation to continue." }
                    ]
                },
                { type: 'p', text: "Which method to choose? The one that will keep you motivated. The Plan Module will show you the impact of both." }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Chapter 6: Why Invest?",
            content: [
                { type: 'p', text: "If you already have a budget and an emergency fund, congratulations! You have finished \"defense mode\". It is time to switch to \"attack mode\": investing." },
                { type: 'p', text: "Saving (putting money in an account) protects you. Investing (buying assets) enriches you." },
                {
                    type: 'box', style: 'warning', title: 'Your Enemy No. 1: Inflation', content: [
                        { type: 'p', text: "Inflation is the general increase in prices over time. If inflation is 3% per year, it means $100 today will only buy $97 worth of goods and services next year. Your money <strong>loses</strong> value if it sleeps." },
                        { type: 'p', text: "If you leave $10,000 in a checking account (0%) for 25 years with average inflation of 2.5%, your \"purchasing power\" will only be $5,394. You will have lost nearly half your money, doing nothing." }
                    ]
                },
                { type: 'p', text: "The goal of investing is simple: get a return higher than inflation so your purchasing power grows over time." },
                { type: 'p', text: "Nexus Finance Pro helps you see this impact. In the Future Value and Withdrawal modules, the tool always calculates \"Nominal Value\" (total amount) and \"Real Purchasing Power\" (what that money will really be worth after inflation)." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Chapter 7: Compound Interest",
            content: [
                { type: 'p', text: "Albert Einstein reputedly said compound interest is \"the eighth wonder of the world\". It is the engine of wealth creation." },
                { type: 'p', text: "Compound interest is simply earning interest on your interest. It is a snowball effect." },
                {
                    type: 'box', style: 'success', title: 'Simple Example', content: [
                        { type: 'ul', items: ["Year 1: You earn 8% of $10,000 ($800). Balance: $10,800.", "Year 2: You earn 8% of $10,800 ($864). Balance: $11,664.", "Year 3: You earn 8% of $11,664 ($933). Balance: $12,597."] },
                        { type: 'p', text: "Your money works for you, and the \"employees\" (your gains) start working themselves and having children!" }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'The Time Factor', content: [
                        { type: 'p', text: "The most important variable is time. Look at the difference:" },
                        { type: 'p', text: "<strong>Alex (25 to 35):</strong> Invests $5000/year for 10 years (Total 50k).<br><strong>Ben (35 to 65):</strong> Invests $5000/year for 30 years (Total 150k)." },
                        { type: 'p', text: "At 65 (8% return):<br>Alex (who only put in 50k) will have: <strong>$1,028,000</strong><br>Ben (who put in 150k) will have: <strong>$611,000</strong>" },
                        { type: 'p', text: "Alex wins, simply because he started 10 years earlier. His $50,000 had more time to \"compound\"." }
                    ]
                },
                { type: 'p', text: "<strong>Take Action:</strong> Go to the Future Value Module. Enter your initial capital, monthly contributions, and a return (ex: 8%). Look at what the chart shows you over 30 years. You will be amazed by the exponential curve." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Chapter 8: The Risk/Return Spectrum",
            content: [
                { type: 'p', text: "There is no free lunch in finance. The golden rule is: <strong>The higher the potential return, the higher the risk of loss.</strong>" },
                { type: 'p', text: "Your job as an investor is not to avoid risk, but to manage it." },
                {
                    type: 'box', style: 'info', title: 'The Spectrum', content: [
                        { type: 'ul', items: ["<strong>Low Risk / Low Return:</strong> Savings accounts, GICs, Gov Bonds. Capital guaranteed, but barely beats inflation.", "<strong>Medium Risk / Medium Return:</strong> Broad index ETFs (S&P 500, TSX), \"blue chip\" stocks.", "<strong>High Risk / High Return:</strong> Individual stocks, small companies, cryptocurrencies."] }
                    ]
                },
                { type: 'p', text: "<strong>What is Risk?</strong> Risk is <strong>volatility</strong>. It is the speed at which the price goes up and down. If your portfolio loses 30% in 3 months, will you panic and sell? It is crucial to know yourself before the drop happens." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Chapter 9: Investment Types",
            content: [
                { type: 'p', text: "Here are the basic \"Lego blocks\" you can use to build your portfolio." },
                { type: 'ul', items: ["<strong>1. Stocks (Equities):</strong> Buying a stock (`AAPL`, `TD`) is buying a small share of the company. You gain via Appreciation (price up) and Dividends (share of profits).", "<strong>2. Bonds:</strong> Lending money to a government or company for fixed interest. Generally safer than stocks.", "<strong>3. Exchange Traded Funds (ETFs):</strong> Often the best starting point. An ETF is a \"basket\" containing hundreds of stocks or bonds, but buys like a single stock."] },
                { type: 'p', text: "With an ETF (ex: `VFV` for S&P 500), you own a tiny part of the 500 biggest US companies. It is instant diversification at very low cost." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Chapter 10: Account Types (Canada)",
            content: [
                { type: 'p', text: "Before buying an investment, you must choose the tax \"container\". TFSA and RRSP are <strong>not</strong> investments, they are accounts with tax benefits." },
                {
                    type: 'box', style: 'success', title: '1. TFSA (Tax-Free Savings Account)', content: [
                        { type: 'p', text: "You invest after-tax money (net). <strong>Benefit:</strong> ALL gains (capital gains, dividends) are <strong>100% tax-free</strong>, for life." },
                        { type: 'p', text: "<strong>Withdrawals:</strong> Tax-free. Contribution room returns the following year. Ideal for: Emergency fund, Down payment, Retirement." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. RRSP (Registered Retirement Savings Plan)', content: [
                        { type: 'p', text: "You invest pre-tax money. <strong>Benefit:</strong> Contribution is deducted from your taxable income (big tax refund)." },
                        { type: 'p', text: "<strong>Withdrawals:</strong> Taxable at retirement. Ideal for: Long term retirement savings if high income." }
                    ]
                },
                { type: 'p', text: "<strong>3. Non-Registered Account:</strong> Basic account, no tax benefit. Taxable annually on dividends. Capital gains are taxable only upon sale." },
                { type: 'p', text: "<strong>The Winning Strategy:</strong> 1. Maximize TFSA. 2. Maximize RRSP. 3. Invest in Non-Registered (Cash)." }
            ]
        },
        chap10_intl: {
            id: 'chap10',
            title: "Chapter 10: Account Types (International)",
            content: [
                { type: 'p', text: "Governments around the world offer tax incentives to encourage savings. While the names change (401k in US, ISA in UK), the core concepts remain the same." },
                {
                    type: 'box', style: 'success', title: '1. Tax-Free Accounts', content: [
                        { type: 'p', text: "You invest 'after-tax' money. <strong>Advantage:</strong> Future gains are 100% tax-free." },
                        { type: 'p', text: "<strong>Examples:</strong> Roth IRA (USA), ISA (UK), TFSA (Canada)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Tax-Deferred Accounts', content: [
                        { type: 'p', text: "You invest 'pre-tax' money. <strong>Advantage:</strong> Immediate tax deduction, but you pay tax upon withdrawal." },
                        { type: 'p', text: "<strong>Examples:</strong> 401k / Traditional IRA (USA), RRSP (Canada)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Taxable Account:</strong> No tax advantage. You pay taxes on dividends and capital gains every year." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Chapter 11: What is a Stock?",
            content: [
                { type: 'p', text: "Buying a stock is buying a share of ownership in a company. If a company has 1,000,000 shares and you buy 100, you own 0.01% of that company." },
                { type: 'p', text: "You are now an owner. You are entitled to a share of profits (dividends)." },
                { type: 'p', text: "<strong>The Stock Market:</strong> It is a large public marketplace where price is determined by supply and demand. If people anticipate high future profits (ex: new iPhone), demand increases and price goes up." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Chapter 12: Fundamental Analysis",
            content: [
                { type: 'p', text: "Fundamental analysis is the art of evaluating the real financial health and value of a company. The goal is to find extraordinary companies at an ordinary price." },
                { type: 'p', text: "We look at the accounts:" },
                { type: 'ul', items: ["<strong>Balance Sheet:</strong> What the company owns (assets) and owes (debts).", "<strong>Income Statement:</strong> Revenue, expenses, and profits.", "<strong>Cash Flow:</strong> Money that actually comes in and goes out."] },
                { type: 'p', text: "The <strong>Stock Analysis Module</strong> of Nexus Pro is a simplified fundamental analysis tool." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Chapter 13: Understanding Key Ratios",
            content: [
                { type: 'p', text: "Ratios are shortcuts to understand a company's health without reading 100 pages of reports. Nexus Pro uses these ratios for its \"Nexus Score\"." },
                { type: 'p', text: "<em>Note: For real estate ratios (LTV, Cap Rate), see the Real Estate Guide.</em>" },
                {
                    type: 'box', style: 'info', title: '1. Valuation', content: [
                        { type: 'ul', items: ["<strong>P/E Ratio (Price/Earnings):</strong> Price paid for $1 of profit. (20x = You pay $20 for $1 profit).", "<strong>PEG Ratio:</strong> P/E divided by Growth. If < 1.0, stock is potentially undervalued."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Profitability', content: [
                        { type: 'ul', items: ["<strong>Net Margin:</strong> % of pure profit on every sale.", "<strong>ROE (Return on Equity):</strong> Efficiency using shareholder money. > 15% is excellent."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Financial Health', content: [
                        { type: 'ul', items: ["<strong>Debt/Equity:</strong> Measures indebtedness. If > 1.0, be careful.", "<strong>Current Ratio:</strong> Ability to pay short term bills."] }
                    ]
                },
                { type: 'p', text: "To fully understand stock ratios, it is helpful to compare them to your own personal financial management. A company is simply a household on a large scale. Below, we compare each 'Business' concept to its 'Family' equivalent." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Chapter 14: Dividend Investing",
            content: [
                { type: 'p', text: "Strategy focused on passive income generation. You are paid to wait. It's like owning an orchard: you don't want to sell the trees, you want to harvest the apples." },
                { type: 'p', text: "<strong>Yield:</strong> (Annual Dividend / Stock Price) * 100. If a stock costs $100 and pays $4, the yield is 4%." },
                {
                    type: 'box', style: 'warning', title: 'The Yield Trap (> 12%)', content: [
                        { type: 'p', text: "Nexus Rule: Any yield > 12% gets a score of 0. Why?" },
                        { type: 'p', text: "If a stock price collapses (because the company is failing), yield goes up mechanically. A 15% yield often screams that the dividend will be cut soon. It is a \"Yield Trap\"." }
                    ]
                },
                { type: 'p', text: "<strong>Dividend Growth:</strong> The real magic is buying companies that <strong>increase</strong> their dividend every year (Aristocrats). In the Investment Module, you can track passive income separately." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Chapter 15: Building Your Portfolio",
            content: [
                { type: 'p', text: "Your portfolio is the collection of all your investments. Building it requires two things: Diversification and Allocation." },
                {
                    type: 'box', style: 'concept', title: 'Diversification', content: [
                        { type: 'p', text: "Don't put all eggs in one basket. Diversify by <strong>asset class</strong> (Stocks/Bonds), <strong>sector</strong> (Tech, Banks, Energy) and <strong>geography</strong> (Canada, USA, World). ETFs offer this instantly." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Asset Allocation', content: [
                        { type: 'p', text: "It is the % of your money in Stocks (Risky/Growth) vs Bonds (Safe/Stability)." },
                        { type: 'ul', items: ["<strong>Young (20-35):</strong> Aggressive. Ex: 90% Stocks / 10% Bonds.", "<strong>Mid-career (35-50):</strong> Balanced. Ex: 70% Stocks / 30% Bonds.", "<strong>Retirement:</strong> Conservative. Ex: 40% Stocks / 60% Bonds."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Chapter 16: Investor Psychology",
            content: [
                { type: 'p', text: "Investing is simple, but not easy. Your worst enemy is you (your emotions)." },
                { type: 'ul', items: ["<strong>Greed (FOMO):</strong> Buying when everything is up, at the top, fearing missing out. Result: Buying high.", "<strong>Fear:</strong> Selling when everything crashes. Result: Selling low and locking in permanent loss."] },
                {
                    type: 'box', style: 'success', title: 'The Solution: DCA', content: [
                        { type: 'p', text: "<strong>Dollar-Cost Averaging</strong>. Invest $500 a month, no matter what, automatically." },
                        { type: 'p', text: "When market is down, your $500 buys MORE shares. When up, it buys LESS. You profit from dips without emotion." }
                    ]
                },
                { type: 'p', text: "<strong>Going Further:</strong> A bonus chapter entirely dedicated to the <strong>Psychology of Money</strong> (based on Morgan Housel's book) has been added to the end of this guide. Don't miss it!" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Chapter 17: Defining Your Goals",
            content: [
                { type: 'p', text: "We don't save just to save. We save for a goal. A good goal is <strong>S.M.A.R.T.</strong>: Specific, Measurable, Achievable, Realistic, Time-bound." },
                { type: 'p', text: "Bad: \"I want to be rich\".<br>Good: \"I want $50,000 for a down payment in 3 years.\"" },
                { type: 'p', text: "<strong>Take Action:</strong> The <strong>Goal Module</strong> calculates exactly how much you need to save per month to hit your targets." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Chapter 18: Planning for Retirement",
            content: [
                { type: 'p', text: "It is the moment your portfolio pays for your lifestyle." },
                {
                    type: 'box', style: 'info', title: 'The 4% Rule', content: [
                        { type: 'p', text: "Historically, you can withdraw <strong>4%</strong> of your portfolio annually without running out of money for 30 years." },
                        { type: 'p', text: "Quick calc of amount needed: <strong>Desired Annual Expenses x 25</strong>." },
                        { type: 'p', text: "Ex: To live on $40,000/year: 40,000 x 25 = <strong>$1,000,000</strong>." }
                    ]
                },
                { type: 'p', text: "Use the <strong>Withdrawal Module</strong> to simulate existing capital survival under different scenarios." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Chapter 19: Fundamental vs Technical Analysis",
            content: [
                { type: 'p', text: "Duel of philosophies." },
                { type: 'ul', items: ["<strong>Fundamental (Investor):</strong> Question: \"Is it a good company?\" Tools: Balance sheets, Ratios, Management. Goal: Long term.", "<strong>Technical (Trader):</strong> Question: \"Where is price going?\" Tools: Charts, Moving Averages, RSI. Goal: Short term (Timing)."] },
                { type: 'p', text: "<strong>Our view:</strong> For wealth creation, fundamental is king. Technical can help with timing, but never be the sole basis." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Chapter 20: Stock Orders (The Complete Guide)",
            content: [
                { type: 'p', text: "Knowing what to buy is one thing, knowing how to buy it is another. Here are the 5 essential order types to control your entry and exit prices." },
                {
                    type: 'box', style: 'info', title: '1. Market Order', content: [
                        { type: 'p', text: "<strong>The Concept:</strong> \"I want it right now, regardless of the exact price.\"" },
                        { type: 'p', text: "<strong>How it works:</strong> The order is executed immediately at the best available price offered by sellers." },
                        { type: 'p', text: "<strong>Advantage:</strong> Speed guaranteed. You are sure to get the stock." },
                        { type: 'p', text: "<strong>Risk:</strong> You do not control the price. If the market moves fast (volatility), you might pay more than expected." },
                        { type: 'p', text: "<strong>Concrete Example:</strong> Stock ABC is at $50.00. You place a Market Order. A fraction of a second later, the price jumps to $50.05. Your order fills at $50.05. You pay $5 more in total than the displayed price." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Limit Order', content: [
                        { type: 'p', text: "<strong>The Concept:</strong> \"I want to buy, but not higher than $X.\" (or sell not lower than X)." },
                        { type: 'p', text: "<strong>How it works:</strong> You set a ceiling price. The order will only execute if the market reaches your price or better." },
                        { type: 'p', text: "<strong>Advantage:</strong> Total price control. No bad surprises." },
                        { type: 'p', text: "<strong>Risk:</strong> If the stock never drops to your limit price, you will never buy it. Execution is not guaranteed." },
                        { type: 'p', text: "<strong>Concrete Example:</strong> Stock XYZ is $102. Too expensive. You place a Limit Order to buy at $100.<br><em>Scenario A:</em> Stock drops to $99. You buy at $99 (even better).<br><em>Scenario B:</em> Stock goes to $105. Your order sits there and you buy nothing." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Stop Order (Stop-Loss)', content: [
                        { type: 'p', text: "<strong>The Concept:</strong> \"The Emergency Exit.\" (Becomes a Market Order once triggered)." },
                        { type: 'p', text: "<strong>How it works:</strong> It's a dormant order. If price drops and hits your threshold (ex: $90), the order wakes up and sells everything immediately at market price." },
                        { type: 'p', text: "<strong>Advantage:</strong> Protects against a major crash without watching the screen." },
                        { type: 'p', text: "<strong>Risk:</strong> In a flash crash, you might sell much lower than your threshold (ex: triggered at $90, but sold at $85)." },
                        { type: 'p', text: "<strong>Concrete Example:</strong> Bought at $100. Stop at $90. Bad news hits, stock vertical drop. It crosses $90 without stopping. Order triggers and sells to first buyer at $88. You are out, but with a slightly larger loss than planned." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Stop-Limit Order', content: [
                        { type: 'p', text: "<strong>The Concept:</strong> \"The Precise Emergency Exit.\" (Becomes a Limit Order once triggered)." },
                        { type: 'p', text: "<strong>How it works:</strong> You define two prices: the trigger (Stop) and the minimum accepted price (Limit)." },
                        { type: 'p', text: "<strong>Advantage:</strong> Guarantees you won't sell at a ridiculous price during panic." },
                        { type: 'p', text: "<strong>Risk:</strong> If price crashes below your limit, you don't sell. You are stuck with the falling stock." },
                        { type: 'p', text: "<strong>Concrete Example:</strong> Bought at $100. Stop at $90, Limit at $89. Stock drops to $90. Sale triggers. But market gaps to $85. Since $85 is below your $89 limit, order does not sell. You still own the stock at $85." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Trailing Stop', content: [
                        { type: 'p', text: "<strong>The Concept:</strong> \"Let profits run.\"" },
                        { type: 'p', text: "<strong>How it works:</strong> The sell price rises automatically with the stock, but never goes down. You set a distance ($ or %)." },
                        { type: 'p', text: "<strong>Advantage:</strong> Secures gains without capping upside potential." },
                        { type: 'p', text: "<strong>Concrete Example:</strong> Bought at $100 with $5 Trailing Stop.<br>Stock goes to $110. Stop moves to $105.<br>Stock goes to $150. Stop is now $145.<br>Stock drops to $140. As soon as it hits $145, you sell. You locked in $45 profit automatically." }
                    ]
                },
                {
                    type: 'box', style: 'dark', title: 'Important Note: Order Duration', content: [
                        { type: 'p', text: "For Limit and Stop orders, you must choose how long the order remains active:" },
                        { type: 'ul', items: ["<strong>Day:</strong> If not executed by 4:00 PM (market close), it is canceled.", "<strong>GTC (Good 'Til Canceled):</strong> Stays active (usually 60-90 days) until you cancel it manually."] }
                    ]
                },
                { type: 'p', text: "<strong>Note for the curious:</strong> There are more complex orders for active traders, like OCO (One Cancels the Other) which allow you to set a profit target and a loss limit simultaneously. However, for a long-term investor, the 5 orders above are ample." }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Chapter 21: Advanced Taxation (ACB)",
            content: [
                { type: 'p', text: "Crucial for <strong>Non-Registered (Taxable)</strong> accounts. When you sell, you pay tax on: <code>Sale Price - ACB</code>." },
                {
                    type: 'box', style: 'info', title: 'The ACB (Adjusted Cost Base)', content: [
                        { type: 'p', text: "It is the official tax term for your average cost. It corresponds to the weighted average cost of all your shares, including commission fees. You must track it yourself for taxes." },
                        { type: 'p', text: "Calculation: (Total cost of all purchases) / (Total number of shares)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro automatically calculates an estimate of your ACB and unrealized gains in the <strong>Investment Module</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Chapter 22: Portfolio Rebalancing",
            content: [
                { type: 'p', text: "If your target is 70% Stocks and 30% Bonds, and stocks rally (now 80%), your portfolio is too risky." },
                { type: 'p', text: "<strong>Rebalancing:</strong> Selling what went up (Stocks) to buy what went down (Bonds) to return to 70/30." },
                { type: 'p', text: "It is the height of discipline: it mathematically forces you to <strong>sell high and buy low</strong>." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Chapter 23: Psychological Traps (Biases)",
            content: [
                { type: 'ul', items: ["<strong>Confirmation Bias:</strong> Only reading what confirms our opinion on a stock (ex: Tesla) and ignoring critics.", "<strong>Anchoring:</strong> Thinking a stock is \"cheap\" just because it was $300 and is now $150. The past doesn't matter.", "<strong>Loss Aversion:</strong> Selling winners too fast (to take profit) and keeping losers (hoping they bounce back). Often you must do the reverse: cut losses!"] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Chapter 24: Key Terms Glossary",
            content: [
                { type: 'p', text: "Here is a quick refresher of terms you will encounter." },
                {
                    type: 'grid', items: [
                        { title: "Asset", text: "Item of value or source of income." },
                        { title: "Liability", text: "Something that takes money out of your pocket." },
                        { title: "Stock", text: "Share of ownership in a company." },
                        { title: "Bond", text: "Loan to a company/state for interest." },
                        { title: "Dividend", text: "Share of profits distributed to shareholders." },
                        { title: "ETF", text: "Diversified basket of investments." },
                        { title: "Volatility", text: "Amplitude of price swings (Risk)." },
                        { title: "EPS", text: "Earnings Per Share." },
                        { title: "P/E", text: "Price/Earnings Ratio. Indicates if the stock is expensive or cheap." },
                        { title: "TFSA", text: "100% Tax-Free Account." },
                        { title: "RRSP", text: "Tax-deferred account." },
                        { title: "ACB", text: "Adjusted Cost Base (Tax cost)." },
                        { title: "Net Worth", text: "Assets - Liabilities. True wealth." }
                    ]
                },
                { type: 'p', text: "This course gave you the foundations. Nexus Finance Pro gives you the power to apply them. Your financial future is now in your hands. Happy planning!" }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bonus: The Psychology of Money",
            content: [
                { type: 'p', text: "<strong>(Based on Morgan Housel's concepts)</strong> - One of the most important books on financial psychology. We highly recommend you get it!" },
                {
                    type: 'box', style: 'info', title: 'Part 1: Our Irrational Relationship with Money', content: [
                        { type: 'p', text: "<strong>1. No One is Crazy:</strong>" },
                        { type: 'p', text: "We all think we know how the world works, but we've only experienced a tiny fraction of it. Your financial decisions depend on your generation, inflation in your youth, and your culture. <em>Don't judge others. What looks 'crazy' to you might be a logical survival decision for someone else.</em>" },
                        { type: 'p', text: "<strong>2. Luck and Risk:</strong>" },
                        { type: 'p', text: "Bill Gates' success is due to his genius, but also the luck of attending a school with a computer (one in a million chance). His friend Kent Evans was just as gifted but died before high school (one in a million risk). <em>Be humble in success and forgiving in failure. Luck plays a huge role.</em>" },
                        { type: 'p', text: "<strong>3. Never Enough (The Trap of Greed):</strong>" },
                        { type: 'p', text: "Rajat Gupta had it all (wealth, reputation) but wanted more and ended up in prison for insider trading. <em>There is no reason to risk what you have and need, to get what you don't have and don't need.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Part 2: Building Wealth', content: [
                        { type: 'p', text: "<strong>4. Confounding Compounding:</strong>" },
                        { type: 'p', text: "Warren Buffett is rich not because he is the best investor, but because he has been investing since childhood. <em>Shut up and wait. Time is the most powerful force in investing.</em>" },
                        { type: 'p', text: "<strong>5. Getting Wealthy vs Staying Wealthy:</strong>" },
                        { type: 'p', text: "To get wealthy, you need to be optimistic and take risks. To <strong>stay</strong> wealthy, you need to be paranoid, frugal, and afraid of losing it all. <em>Survival is key.</em>" },
                        { type: 'p', text: "<strong>6. Tails, You Win (Extreme Events):</strong>" },
                        { type: 'p', text: "Like in art, a handful of 'winners' pay for all the mistakes. <em>You can be wrong 50% of the time and still make a fortune. It's the magnitude of your wins that counts, not the frequency.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Part 3: Psychology and Behavior', content: [
                        { type: 'p', text: "<strong>7. Freedom (The True Dividend):</strong>" },
                        { type: 'p', text: "The highest form of wealth is waking up in the morning and saying: 'I can do whatever I want today'. Controlling your time makes you happier than luxury goods." },
                        { type: 'p', text: "<strong>8. The Man in the Car Paradox:</strong>" },
                        { type: 'p', text: "No one is as impressed by your possessions as you are. If you want respect, be humble and kind, don't buy a big car." },
                        { type: 'p', text: "<strong>9. Wealth is What You Don't See:</strong>" },
                        { type: 'p', text: "True wealth is money that has <strong>not</strong> been spent. Don't confuse having a high income (Rich) with having net worth (Wealthy)." },
                        { type: 'p', text: "<strong>10. Save Money (Just Save):</strong>" },
                        { type: 'p', text: "You don't need a specific goal to save. You need to save for the unknown. It is your margin of safety." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: 'Part 4: A Realistic Philosophy', content: [
                        { type: 'p', text: "<strong>11. Reasonable > Rational:</strong>" },
                        { type: 'p', text: "Don't try to be a cold spreadsheet. The best strategy is the one that lets you sleep at night." },
                        { type: 'p', text: "<strong>12. Nothing is Free:</strong>" },
                        { type: 'p', text: "High market returns have a price, not in dollars, but in volatility and fear. View crashes as an 'admission fee', not a fine." },
                        { type: 'p', text: "<strong>13. The Seduction of Pessimism:</strong>" },
                        { type: 'p', text: "Pessimism sounds smart, optimism sounds naive. Be a 'realistic optimist': believe things will get better in the long run, but prepare to suffer in the short run." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Conclusion: The Author\'s Method', content: [
                        { type: 'p', text: "What Morgan Housel does with his own money:" },
                        { type: 'ul', items: ["His goal is independence, not maximum wealth.", "He keeps a lot of cash (margin of safety).", "He invests in low-cost index funds (ETFs).", "He doesn't try to beat the market, but to stay invested as long as possible."] }
                    ]
                }
            ]
        }
    }
};
