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
        title: "Guia do Utilizador",
        items: [
            { id: 'intro', label: 'Introdução' },
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'budget', label: 'Orçamento' },
            { id: 'plan', label: 'Plano de Dívida' },
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
    subTitle: "O seu guia de referência para dominar o software.",
    cards: [
        { title: "Visão Global", desc: "Centralize o seu Património Líquido.", color: "info" },
        { title: "Orçamento", desc: "Controle Receitas e Despesas.", color: "warning" },
        { title: "Estratégia Dívida", desc: "Eliminação inteligente de dívidas.", color: "danger" },
        { title: "Desempenho", desc: "Acompanhe os seus ganhos reais.", color: "dark" },
        { title: "Crescimento", desc: "Juro Composto e Reforma.", color: "success" },
        { title: "Inteligência", desc: "Análise de Bolsa e Imobiliário.", color: "concept" }
    ],
    benefits: {
        title: "O que este software faz por si:",
        items: [
            { title: "Visão Global (Dashboard):", text: "Centralize o seu Património Líquido, ativos e passivos num piscar de olhos." },
            { title: "Controlo Orçamental:", text: "Acompanhe as suas receitas, despesas e capacidade mensal de poupança." },
            { title: "Estratégia de Dívida:", text: "Planeie a eliminação de dívidas (Avalanche/Bola de Neve) para poupar juros." },
            { title: "Simuladores de Reembolso:", text: "Calcule pagamentos para hipotecas, empréstimos e cartões de crédito." },
            { title: "Seguimento de Portfólio:", text: "Gira os seus investimentos e visualize o desempenho real." },
            { title: "Análise Imobiliária:", text: "Calcule a rentabilidade exata dos seus projetos de arrendamento." },
            { title: "Inteligência Bolsista:", text: "Analise a qualidade das empresas (Score Nexus) antes de investir." },
            { title: "Seguimento de Desempenho:", text: "Visualize a evolução histórica da sua riqueza e compare com índices." },
            { title: "Projeções Futuras:", text: "Calcule juros compostos, planeie a sua reforma e levantamentos." },
            { title: "Privacidade Total:", text: "Os seus dados são guardados localmente no seu dispositivo, nada é enviado para a nuvem." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Para começar:",
                content: "Este guia foi desenhado para acompanhá-lo passo a passo. Cada módulo é explicado com <strong>exemplos concretos</strong> para que compreenda não só <em>como</em> usar o software, mas também <em>porquê</em> estas ferramentas o ajudarão a enriquecer."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Dashboard (Painel de Controlo)",
            desc: "A sua torre de controlo. Agrega dados de todos os outros módulos para lhe dar uma visão imediata da sua saúde financeira.",
            items: [
                { title: "Património Líquido:", text: "É O número mais importante. É tudo o que possui (Ativos) MENOS tudo o que deve (Passivos).", example: "Se tem uma casa de 400k€ e 50k€ em investimentos (Total Ativos = 450k€) mas uma hipoteca de 300k€ (Passivo), o seu Património Líquido é de 150k€." },
                { title: "Total Ativos:", text: "A soma do valor do seu Imobiliário, Veículos (Módulo Orçamento) e Investimentos (Módulo Investimento).", example: "Casa (350k) + Carro (20k) + Investimentos (30k) = 400k€ Ativos." },
                { title: "Total Passivos:", text: "A soma de todas as suas dívidas registadas no módulo 'Plano de Dívida' (Hipotecas, Cartões, Empréstimos).", example: "Hipoteca (280k) + Crédito Auto (15k) + Visa (5k) = 300k€ Passivos." },
                { title: "Fluxo de Caixa:", text: "O dinheiro que sobra no seu bolso ao fim do mês. Calculado automaticamente do módulo Orçamento.", example: "Receitas (5000) - Despesas Fixas (3000) - Variáveis (1000) = +1000€ Fluxo." }
            ],
            box: {
                type: "warning",
                title: "Atenção aos Cenários:",
                content: "O Dashboard é dinâmico. Se selecionar o 'Cenário B' no módulo Orçamento, o Dashboard mudará instantaneamente para mostrar o impacto desse cenário no seu Património Líquido."
            }
        },
        budget: {
            id: "budget",
            title: "Orçamento",
            desc: "Não sofra mais com as suas despesas. Este módulo permite-lhe dizer ao seu dinheiro para onde ir em vez de se perguntar para onde foi.",
            items: [
                { title: "Receitas e Despesas:", text: "Introduza os seus números e escolha a frequência (Semanal, Mensal, Anual). O software converte tudo para 'Mensal' para simplificar a leitura.", example: "Paga o seguro do carro 1200€ por ano? Introduza '1200' e frequência 'Anual'. O software contará uma despesa de 100€/mês." },
                { title: "Gestão de Ativos (Casa/Carro):", text: "Secção especial para listar bens materiais. Aqui introduz o valor de mercado da sua casa ou carro.", example: "Adicione uma linha 'Casa Própria' com valor de 450 000€. Este montante somar-se-á aos seus Ativos Totais." },
                { title: "Impostos:", text: "Não se esqueça de incluir impostos se for trabalhador independente, ou impostos municipais (IMI).", example: "Adicione 'Impostos Municipais': 3500€/ano." },
                { title: "Cenários (A/B):", text: "Crie até 3 versões do seu orçamento para testar hipóteses.", example: "Cenário A = Vida atual. Cenário B = 'E se comprar este duplex?' (Adiciono rendas e novas despesas)." }
            ]
        },
        plan: {
            id: "plan",
            title: "Plano de Dívida",
            desc: "A ferramenta definitiva para se libertar de dívidas mais rápido e poupar milhares em juros.",
            items: [
                { title: "Método 'Avalanche':", text: "Matematicamente ideal. Paga-se primeiro a dívida com a taxa de juro mais alta.", example: "Tem um cartão a 20% e um crédito auto a 7%. A Avalanche ataca o cartão a 20% primeiro. Poupança máxima de juros." },
                { title: "Método 'Bola de Neve':", text: "Psicologicamente motivador. Elimina-se a dívida mais pequena primeiro para obter uma vitória rápida.", example: "Tem uma dívida pequena de 500€ (Visa) e uma grande de 15 000€ (Carro). Eliminamos a 500€ imediatamente para sentir orgulho." },
                { title: "Coluna 'Saldo':", text: "Isto é um simulador. O saldo desce virtualmente mês a mês.", example: "Importante: Se fizer um pagamento real no banco, atualize o saldo aqui uma vez por mês." }
            ],
            warning: {
                title: "Dica Hipoteca",
                content: "Pode desmarcar a caixa **'Incluir'** para a sua hipoteca. Isto permite focar o módulo apenas na eliminação de 'más' dívidas de consumo sem que a hipoteca deforme o gráfico."
            }
        },
        remb: {
            id: "remb",
            title: "Reembolso",
            desc: "Este módulo contém 3 calculadoras distintas para o ajudar a tomar decisões informadas antes de assinar um contrato.",
            cards: [
                { title: "Aba 1: Hipoteca", desc: "Simule os seus pagamentos mensais. Compreenda o impacto de uma entrada maior ou taxa diferente.", example: "Para um apartamento de 400 000€ a 5% juros a 25 anos: Verá que pagará no final 701 508€ (dos quais 301 508€ são só juros!)." },
                { title: "Aba 2: Empréstimo", desc: "Ideal para carros ou créditos pessoais. Descubra o custo real de um financiamento longo.", example: "Carro de 30 000€ financiado a 84 meses (7 anos) a 8%. A calculadora mostrará que custará na realidade 39 200€." },
                { title: "Aba 3: Cartão de Crédito", desc: "Ferramenta de consciencialização. Calcula o tempo necessário para pagar um cartão se fizer apenas o pagamento mínimo.", example: "Dívida de 2000€ num cartão a 19.99% com mínimo de 3%: Demorará 11 anos a pagar e custará 1800€ em juros." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investimento",
            desc: "O seu centro de comando para pilotar a sua carteira de investimentos (Ações, ETF, Cripto).",
            items: [
                { title: "Indicadores Chave (KPI):", text: "No topo, 5 cartões resumem a situação: 1. Valor Atual, 2. Total Investido, 3. Ganho/Perda €, 4. Rendimento %, 5. CAGR (Taxa de Crescimento Anual Composta)." },
                { title: "Bolhas de Análise:", text: "Cada título recebe uma etiqueta de cor:\n• Verde (Excelência): Ganho > 1000€ & > 15%.\n• Azul (Motor): Ganho > 1000€.\n• Cinza (Adormecido): Posição pequena.\n• Vermelho (Perigo): Em perda." },
                { title: "Barra de Ferramentas:", text: "• Botão 'Atualizar' (Setas): Atualiza preços de mercado.\n• Botão '+': Adicionar transação.\n• Botão 'Performance' (Gráfico): Abre relatório detalhado.\n• Botão 'Watchlist' (Olho): Seguir ações." }
            ],
            box: {
                type: "info",
                title: "Relatório de Desempenho (Botão Gráfico)",
                content: "O coração do acompanhamento real. Este módulo separa ganhos reais de simples depósitos. 3 abas:\n\n1. **Vista Geral**: Gráfico Linha Azul (Capital investido) vs Linha Verde (Valor real). A diferença é o seu lucro.\n\n2. **Depósitos**: Onde regista dinheiro *fresco* injetado.\n\n3. **Snapshots**: Permite corrigir ou historiar o valor total da conta numa data precisa."
            },
            subSections: [
                {
                    title: "Gestão de Transações",
                    intro: "Clique em '+' ou no lápis.",
                    items: [
                        { title: "Compra (Buy)", text: "Aumenta quantidade e recalcula Preço Médio (PMP).", example: "Compra 10 AAPL a 150€. Custo total sobe 1500€." },
                        { title: "Venda (Sell)", text: "Reduz quantidade e realiza ganho/perda.", example: "Vende 5 AAPL. O software calcula quanto lucro fez *realmente* nessas 5 ações." },
                        { title: "Dividendo", text: "Adiciona dinheiro sem mudar quantidade de ações.", example: "Recebe 50€ dividendos. Lucro puro." }
                    ]
                },
                {
                    title: "Configuração e APIs",
                    intro: "Para preços em direto, vá a Ferramentas -> Configurações.",
                    items: [
                        { title: "Yahoo Finance (Padrão)", text: "Cobertura mundial, grátis. Perfeito para iniciantes." },
                        { title: "Alpha Vantage", text: "Dados profissionais. Requer chave API gratuita." },
                        { title: "Questrade", text: "Integração direta. Importa posições reais." }
                    ]
                }
            ],
            button: "Ver Guia Finanças 101"
        },
        analyse: {
            id: "analyse",
            title: "Análise de Ações",
            desc: "Não escolha mais ações ao acaso. Analise como um profissional em segundos.",
            items: [
                { title: "Objetivo:", text: "Este módulo dá uma nota objetiva (Score Nexus) sobre a saúde fundamental de uma empresa." },
                { title: "Score Nexus (0-100):", text: "Nota global sobre 7 pilares. >70 é Excelente, <40 é Arriscado." },
                { title: "Comparador:", text: "Crie vários cartões lado a lado para comparar Apple vs Microsoft vs Google." }
            ],
            subSections: [
                {
                    title: "Entrada de Dados",
                    intro: "Preencha manualmente ou use o Assistente IA.",
                    items: [
                        { title: "Símbolo e Preço", text: "Introduza Ticker (ex: AAPL)." },
                        { title: "BPA (EPS)", text: "Lucro Por Ação. PER calcula-se automaticamente." },
                        { title: "Auto-Cálculo", text: "<strong>PER (P/E)</strong> e <strong>Yield %</strong> são cinzentos porque são calculados." },
                        { title: "Exclusão", text: "Desmarque a caixa para excluir um campo do cálculo da pontuação." }
                    ]
                },
                {
                    title: "Os 7 Pilares",
                    intro: "Pontos por métrica.",
                    items: [
                        { title: "1. Valorização (PER)", text: "É caro? Procuramos PER entre 15 e 25." },
                        { title: "2. Crescimento", text: "A empresa cresce? Procuramos >15% ao ano." },
                        { title: "3. Margem Líquida", text: "É rentável? Procuramos >20%." },
                        { title: "4. Dívida", text: "É solvente? Dívida/Capital < 1.0." },
                        { title: "5. ROE", text: "Eficácia da gestão. Procuramos >15%." },
                        { title: "6. Liquidez", text: "Capacidade de pagar contas curto prazo. >1.5." },
                        { title: "7. Dividendo", text: "Bónus. Procuramos >2%." }
                    ]
                },
                {
                    title: "Ferramentas Inteligentes",
                    intro: "Funcionalidades extra.",
                    items: [
                        { title: "Lâmpada (IA)", text: "Clique para copiar 'Prompt Mágico'. Cole no ChatGPT para obter dados." },
                        { title: "PEG Ratio", text: "Se < 1.0, é uma pechincha." },
                        { title: "Radar Visual", text: "Gráfico aranha mostra equilíbrio." },
                        { title: "Guardar e Vigiar", text: "'Guardar' mantém análise. 'Olho' adiciona à Watchlist." }
                    ]
                }
            ]
        },
        immo: {
            id: "immo",
            title: "Imobiliário",
            desc: "Para o investidor sério. Não confie no 'instinto', confie na matemática.",
            cards: [
                { title: "NOI (Receita Líquida Operacional)", text: "Lucro puro antes da hipoteca. A cifra mais fiável.", example: "Rendas 60k. Despesas 20k. NOI é 40k." },
                { title: "Cap Rate", text: "Potência do motor. Rendimento se comprasse a pronto. >6% é bom sinal.", example: "Preço 800k. NOI 40k. 5% Cap Rate." },
                { title: "Cash-on-Cash", text: "Retorno real sobre o seu dinheiro de entrada.", example: "Entrada 150k. Cashflow 15k. 10% Retorno. Excelente." },
                { title: "DSCR (Cobertura Dívida)", text: "O que o banco olha. Rendas cobrem hipoteca?", example: "Hipoteca 30k. NOI 40k. DSCR = 1.33. Seguro." },
                { title: "GRM", text: "Quantas vezes a renda bruta paga pelo imóvel?", example: "Preço 500k, Renda 50k. GRM = 10." },
                { title: "Break-Even", text: "Nível de segurança. Percentagem de ocupação mínima para não perder dinheiro." },
                { title: "LTV", text: "Alavancagem. Parte financiada pelo banco.", example: "80% LTV = 20% entrada." },
                { title: "ROI Total", text: "Cashflow + Reembolso Capital (Enriquecimento latente)." }
            ],
            button: "Ver Guia Imobiliário"
        },
        perf: {
            id: "perf",
            title: "Desempenho (Calculadora)",
            desc: "Um auditor imparcial. Calcule a rentabilidade precisa entre duas datas.",
            items: [
                { title: "Objetivo:", text: "NÃO é a sua carteira global. É uma calculadora isolada: 'Quanto rendeu a ação X entre Jan e Dez?'" },
                { title: "Independente:", text: "Sem ligação às suas contas." }
            ],
            subSections: [
                {
                    title: "Retorno Total vs CAGR",
                    intro: "Duas visões:",
                    items: [
                        { title: "Retorno Total", text: "Simples. 'Fiz +20%'.", example: "Compra 100, Venda 120." },
                        { title: "CAGR (Anual)", text: "O verdadeiro juiz. Anualiza o rendimento.", example: "+20% em 10 anos é fraco (1.8% ano)." }
                    ]
                },
                {
                    title: "O Benchmark (S&P 500)",
                    intro: "A prova de fogo.",
                    items: [
                        { title: "Comparação", text: "Ative o interruptor. O software busca o histórico REAL do S&P 500." },
                        { title: "Veredicto", text: "Se a sua linha (Verde) está acima da cinza, bateu o mercado." }
                    ]
                }
            ]
        },
        projections: {
            id: "projections",
            title: "Projeções",
            desc: "Não adivinhe. Saiba exatamente quando poderá deixar de trabalhar.",
            cards: [
                { title: "Valor Futuro", desc: "Magia do juro composto.", example: "Quanto valerão os meus 10k em 20 anos?" },
                { title: "Objetivo (Target)", desc: "Planeamento inverso.", example: "Quero 1 milhão. Quanto devo poupar?" },
                { title: "Reforma (Renda)", desc: "Estratégia de levantamento.", example: "Posso levantar 4000€/mês para sempre?" }
            ],
            subSections: [
                {
                    title: "Calc 1: Valor Futuro",
                    intro: "Para aforradores.",
                    items: [
                        { title: "Frequência", text: "Simule pagamentos crescentes." },
                        { title: "Timing", text: "Começar cedo é crucial. Veja o impacto de 30 anos." },
                        { title: "Inflação", text: "Não esqueça! Olhe para a linha 'Poder de Compra Real'." }
                    ]
                },
                {
                    title: "Calc 2: Objetivo Poupança",
                    intro: "Para projetos.",
                    items: [
                        { title: "Resposta Clara", text: "Montante EXATO a poupar por mês." },
                        { title: "Ajuste Taxa", text: "Veja como 7% de retorno facilita a vida comparado a 5%." }
                    ]
                },
                {
                    title: "Calc 3: Reforma",
                    intro: "O teste final.",
                    items: [
                        { title: "Ajuste Inflação", text: "Marcar esta caixa é vital. Simula aumento de levantamentos." },
                        { title: "Risco Ruína", text: "Se o gráfico cai a zero, tem um problema." }
                    ]
                }
            ]
        },
        params: {
            id: "params",
            title: "Configurações",
            subSections: [
                {
                    title: "Dados e Segurança",
                    intro: "Os seus dados NUNCA saem do seu computador.",
                    items: [
                        { title: "Backup JSON", text: "Faça uma cópia ('Exportar') uma vez por mês." },
                        { title: "Importar", text: "Restaure uma cópia." }
                    ]
                },
                {
                    title: "Personalização",
                    intro: "Adapte a ferramenta.",
                    items: [
                        { title: "Moeda", text: "Mude entre CAD, USD, EUR. Apenas muda o símbolo." },
                        { title: "Modo Decimal (.00)", text: "Ative para precisão (1250.45€). Desative para minimalismo." },
                        { title: "Tema Escuro/Claro", text: "Modo Escuro recomendado para a noite." },
                        { title: "Largura Site", text: "'1600px' ou '100%' para ecrãs grandes." }
                    ]
                },
                {
                    title: "Zona de Perigo",
                    intro: "Cuidado.",
                    items: [
                        { title: "Reiniciar Módulo", text: "Limpa SÓ a aba ativa." },
                        { title: "Reset Fábrica", text: "Limpa TUDO. Irreversível." }
                    ]
                }
            ],
            items: []
        },
        glossaire: {
            id: "glossaire",
            title: "Glossário",
            items: [
                { title: "BPA (EPS)", text: "Lucro Por Ação." },
                { title: "PER (P/E)", text: "Ratio Preço/Lucro." },
                { title: "Conta Livre Impostos", text: "Ganhos não tributáveis." },
                { title: "Conta Reforma", text: "Imposto diferido." },
                { title: "Património Líquido", text: "Ativos - Passivos." }
            ]
        }
    }
};
