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
        title: "Guia do Usuário",
        items: [
            { id: 'intro', label: 'Introdução' },
            { id: 'dashboard', label: 'Painel de Controle' },
            { id: 'budget', label: 'Orçamento e Ativos' },
            { id: 'plan', label: 'Plano de Dívidas' },
            { id: 'remb', label: 'Reembolso' },
            { id: 'invest', label: 'Investimento' },
            { id: 'analyse', label: 'Análise de Ações' },
            { id: 'immo', label: 'Imobiliário' },
            { id: 'perf', label: 'Desempenho' },
            { id: 'projections', label: 'Projeções' },
            { id: 'params', label: 'Configurações' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Seu guia de referência para usar o software.",
    cards: [
        { title: "Visão Global", desc: "Centralize seu Patrimônio Líquido.", color: "info" },
        { title: "Orçamento e Fluxo", desc: "Domínio de receitas e despesas.", color: "warning" },
        { title: "Estratégia de Dívida", desc: "Eliminação inteligente de dívidas.", color: "danger" },
        { title: "Desempenho", desc: "Acompanhamento real de seus retornos.", color: "dark" },
        { title: "Crescimento", desc: "Juros compostos e Aposentadoria.", color: "success" },
        { title: "Inteligência", desc: "Análise de Bolsa e Imobiliária.", color: "concept" }
    ],
    benefits: {
        title: "O que este software traz para você:",
        items: [
            { title: "Visão Global (Dashboard):", text: "Centralize seu Patrimônio Líquido, seus ativos e suas dívidas em um piscar de olhos." },
            { title: "Controle Orçamentário:", text: "Acompanhe suas receitas, despesas e sua capacidade de poupança mensal." },
            { title: "Estratégia de Dívida:", text: "Planeje a eliminação de suas dívidas (Avalanche/Bola de neve) para economizar juros." },
            { title: "Simuladores de Reembolso:", text: "Calcule seus pagamentos para hipotecas, empréstimos e cartões de crédito." },
            { title: "Acompanhamento de Portfólio:", text: "Gerencie seus investimentos e visualize seu desempenho real." },
            { title: "Análise Imobiliária:", text: "Calcule a rentabilidade exata de seus projetos de aluguel." },
            { title: "Inteligência Bursátil:", text: "Analise a qualidade das empresas (Nexus Score) antes de investir." },
            { title: "Acompanhamento de Desempenho:", text: "Visualize a evolução histórica de sua riqueza e a compare com os índices." },
            { title: "Projeções Futuras:", text: "Calcule seus juros compostos, planeje sua aposentadoria e suas retiradas." },
            { title: "Confidencialidade Total:", text: "Seus dados são armazenados localmente em seu dispositivo, nada é enviado para a nuvem." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Dica:",
                content: "Este guia explica o uso técnico do software. Para conceitos teóricos financeiros (Bolsa, Índices), consulte o <strong>Guia Finanças 101</strong> disponível no menu Educação."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Painel de Controle",
            desc: "Seu centro de controle que agrega os dados de todos os módulos.",
            items: [
                { title: "Patrimônio Líquido:", text: "Indicador chave <code>(Total Ativos - Total Passivos)</code>." },
                { title: "Ativos Totais:", text: "Soma do seu portfólio (Investimento) e seus bens (Orçamento/Ativos)." },
                { title: "Passivos Totais:", text: "Acumulado de todas as dívidas inseridas no módulo Plano." },
                { title: "Fluxo de Caixa:", text: "Seu saldo mensal disponível (Receitas - Despesas - Poupança)." }
            ],
            box: {
                type: "warning",
                title: "Nota Importante - Cenários:",
                content: "O Painel de Controle exibe sempre os dados do <strong>Cenário Ativo</strong> (o cenário selecionado na tela) para cada módulo. Se você mudar de cenário no módulo Orçamento, o Painel de Controle será atualizado para refletir essa escolha."
            }
        },
        budget: {
            id: "budget",
            title: "Orçamento e Ativos",
            desc: "A pedra angular de sua gestão financeira.",
            items: [
                { text: "Preencha os valores para cada item com a frequência correta." },
                { title: "Impostos e Taxas:", text: "Nova categoria para gerenciar seus pagamentos antecipados ou saldos de impostos." },
                { title: "Seção 'Valor de seus ativos':", text: "Esta seção é dedicada exclusivamente aos seus bens materiais (Imóveis, Veículos) para estabelecer seu patrimônio líquido. Suas ações e investimentos vão no módulo Investimento." }
            ]
        },
        projections: {
            id: "projections",
            title: "Calculadoras de Projeção",
            cards: [
                { title: "Valor Futuro", desc: "Visualize o crescimento de seus investimentos com juros compostos." },
                { title: "Objetivo", desc: "Defina um valor alvo e uma data, a ferramenta calcula o esforço de poupança necessário." },
                { title: "Retirada", desc: "Simule a fase de retirada. Quanto tempo durará seu capital?" }
            ]
        },
        plan: {
            id: "plan",
            title: "Plano de Dívidas",
            desc: "Estabeleça sua estratégia de reembolso ideal.",
            items: [
                { title: "Avalanche:", text: "Prioriza as taxas de juros altas (Economia máxima)." },
                { title: "Bola de Neve:", text: "Prioriza os saldos pequenos (Motivação psicológica)." }
            ],
            warning: {
                title: "Nota Importante - Hipotecas",
                content: "O módulo 'Plano' é um <strong>simulador</strong>. Ele não atualiza automaticamente seu saldo real no Painel de Controle.<br/><strong>Ação necessária:</strong> Uma vez por mês, ajuste manualmente o campo 'Valor' neste módulo para refletir seu extrato bancário real."
            }
        },
        remb: {
            id: "remb",
            title: "Simuladores de Reembolso",
            desc: "Calcule seus pagamentos para diferentes tipos de empréstimos.",
            cards: [
                { title: "Hipoteca:", desc: "Simule seus pagamentos mensais, o total de juros e o impacto de uma entrada (Compra/Renovação)." },
                { title: "Empréstimo Pessoal:", desc: "Calcule o custo real de um empréstimo de carro ou pessoal." },
                { title: "Cartão de Crédito:", desc: "Veja o tempo necessário para pagar um cartão com o pagamento mínimo." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investimento",
            desc: "Acompanhamento completo de seu portfólio de ações.",
            items: [
                { title: "Fontes de Dados:", text: "Escolha entre <strong>Yahoo Finance (Grátis, Atraso 15min)</strong> ou <strong>Alpha Vantage (Tempo Real, Chave necessária)</strong> através das configurações." },
                { title: "Atualizar:", text: "Atualiza o valor de seus títulos instantaneamente." },
                { title: "Histórico:", text: "Modifique ou exclua qualquer transação passada." },
                { title: "Desempenho (GIPS):", text: "Analisa o retorno real (CAGR) ponderado pelo tempo." }
            ],
            box: {
                type: "warning",
                title: "Sobre as Novidades:",
                content: "<ul><li><strong>Yahoo Finance:</strong> Excelente escolha gratuita, mas observe que os preços têm um atraso de 15 minutos em relação ao mercado.</li><li><strong>Questrade:</strong> A opção de conexão aparecerá <em>apenas</em> se sua moeda principal for o <strong>CAD</strong> (Dólar Canadense).</li></ul>"
            },
            button: "Ver o Guia Finanças 101"
        },
        analyse: {
            id: "analyse",
            title: "Análise de Ações",
            desc: "Avalie a saúde fundamental de uma empresa antes de investir.",
            items: [
                { title: "Nexus Score (0-100):", text: "Nota sintética baseada em 7 métricas chave (P/L, Crescimento, Margem, Dívida, ROE...)." },
                { title: "Índice PEG:", text: "Detecta as ações subvalorizadas em relação ao seu crescimento." },
                { title: "Assistente IA:", text: "Gera um prompt otimizado para Gemini/ChatGPT para recuperar os dados financeiros." }
            ]
        },
        perf: {
            id: "perf",
            title: "Desempenho",
            desc: "Visualize a evolução real de sua riqueza.",
            items: [
                { title: "Gráfico Histórico:", text: "Curva de evolução de seu Patrimônio Líquido e de seus Ativos totais no tempo." },
                { title: "Benchmarks:", text: "Compare seu próprio desempenho com o dos grandes índices (S&P 500, TSX)." }
            ]
        },
        immo: {
            id: "immo",
            title: "Imobiliário",
            desc: "Análise de rentabilidade de aluguel profissional.",
            cards: [
                { title: "NOI:", text: "Receita Líquida Operacional (Lucro antes da hipoteca)." },
                { title: "Cap Rate:", text: "Rendimento puro do edifício sem alavancagem." },
                { title: "Cash-on-Cash:", text: "Retorno real sobre sua entrada." },
                { title: "DSCR:", text: "Índice de cobertura da dívida (Banco)." }
            ],
            button: "Guia Imobiliário"
        },
        params: {
            id: "params",
            title: "Configurações e Ferramentas",
            items: [
                { title: "Backup / Restauração:", text: "Exporte seus dados em arquivo JSON para nunca perdê-los." },
                { title: "Calculadora:", text: "Ferramenta flutuante disponível em todo o aplicativo." },
                { title: "Redefinir Módulo:", text: "O botão laranja (seta circular) apaga apenas os dados do módulo ativo." },
                { title: "Redefinição de Fábrica:", text: "O botão vermelho apaga TODOS os dados do aplicativo. <span style='color:var(--danger-color); font-weight:bold'>Ação irreversível.</span>" }
            ]
        }
    }
};
