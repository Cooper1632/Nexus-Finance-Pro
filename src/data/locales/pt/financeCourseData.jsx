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
        id: 1, title: "1. Preço/Lucro (P/L)", color: pastelColors[0],
        biz: {
            formula: "Preço / Lucro por Ação (LPA)",
            desc: "Quanto você paga por $1 de lucro. Indica se a ação está cara (Crescimento) ou barata (Valor).",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor (para valor)",
            example: "$100 (Preço) / $5 (LPA) = 20x"
        },
        fam: {
            title: "Preço de Compra da Família",
            desc: "Imagine que alguém queira \"comprar\" sua família. Se você economiza 10k por ano e alguém te compra por 200k, o P/L é 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor",
            example: "$200.000 / $10.000 = 20x"
        }
    },
    {
        id: 2, title: "2. Crescimento (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Final / Inicial)^(1/n)) - 1",
            desc: "Velocidade com que a empresa aumenta seus lucros ou vendas a cada ano (Taxa de Crescimento Anual Composta).",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Aumento de Salário",
            desc: "Seu aumento salarial anual. Se você passa de 50k para 55k, você tem um crescimento de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "(55k - 50k) / 50k = 10%"
        }
    },
    {
        id: 3, title: "3. Margem Líquida (%)", color: pastelColors[2],
        biz: {
            formula: "Lucro Líquido / Receitas",
            desc: "% de cada dólar de venda que fica no bolso da empresa após todas as despesas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "$10.000 / $100.000 = 10%"
        },
        fam: {
            title: "Taxa de Poupança",
            desc: "Sua Taxa de Poupança. Se você ganha $4000 e economiza $400, sua margem é de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "$400 / $4000 = 10%"
        }
    },
    {
        id: 4, title: "4. Dívida / Patrimônio", color: pastelColors[3],
        biz: {
            formula: "Dívida Total / Patrimônio Líquido",
            desc: "Nível de endividamento. Se > 1.0, a empresa deve mais dinheiro do que vale contabilmente.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor (< 1.0)",
            example: "$200k / $100k = 2.0 (Arriscado)"
        },
        fam: {
            title: "Taxa de Endividamento",
            desc: "(Hipoteca + Cartão de Crédito) / Seu Patrimônio Líquido.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor",
            example: "$300k (Dívidas) / $100k (Líquido) = 3.0"
        }
    },
    {
        id: 5, title: "5. ROE (Retorno sobre Patrimônio)", color: pastelColors[4],
        biz: {
            formula: "Lucro Líquido / Patrimônio Líquido",
            desc: "Eficiência da gestão em gerar lucro com o dinheiro dos acionistas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor (> 15%)",
            example: "$15 / $100 = 15%"
        },
        fam: {
            title: "Eficiência dos Investimentos",
            desc: "Se você tem 100k de patrimônio e ele gera 10k de ganhos/juros, seu ROE é de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "$10.000 / $100.000 = 10%"
        }
    },
    {
        id: 6, title: "6. Liquidez Corrente", color: pastelColors[5],
        biz: {
            formula: "Ativos Circulantes / Passivos Circulantes",
            desc: "Capacidade de pagar contas imediatas. Se < 1.0, risco de falta de liquidez.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor (> 1.5)",
            example: "$200k / $100k = 2.0"
        },
        fam: {
            title: "Cobertura do Fundo de Emergência",
            desc: "Seu Fundo de Emergência / Suas contas mensais.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor (Segurança)",
            example: "$5000 / $2500 = 2.0"
        }
    },
    {
        id: 7, title: "7. Dividend Yield (%)", color: pastelColors[6],
        biz: {
            formula: "Dividendo Anual / Preço da Ação",
            desc: "O retorno sobre investimento em dinheiro vivo (cash) pago pela empresa.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor (Max 10-12%)",
            example: "$4 / $100 = 4%"
        },
        fam: {
            title: "Dinheiro para Lazer",
            desc: "O dinheiro que você retira dos investimentos para gastar com lazer.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Mais liberdade",
            example: "$50 (Recebido) / $1000 (Investido) = 5%"
        }
    },
    {
        id: 8, title: "8. Margem Bruta", color: pastelColors[7],
        biz: {
            formula: "(Receitas - Custos Diretos) / Receitas",
            desc: "A rentabilidade básica antes de pagar escritório, publicidade e impostos.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Taxa de Queima (Burn Rate)",
            desc: "Despesas vitais mensais (Aluguel + Comida). Quantos meses você sobrevive sem renda?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor (Despesas)",
            example: "$2000 / mês (Despesas vitais)"
        }
    },
    {
        id: 9, title: "9. Preço/Vendas (P/S)", color: pastelColors[8],
        biz: {
            formula: "Capitalização / Receita",
            desc: "Usado para avaliar empresas sem lucro. Compara o valor de mercado com o volume de vendas.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor",
            example: "$1M / $500k = 2.0x"
        },
        fam: {
            title: "ROI (Retorno sobre Investimento)",
            desc: "Investir 20k numa cozinha que aumenta o valor da casa em 30k.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "(30k - 20k) / 20k = 50%"
        }
    },
    {
        id: 10, title: "10. Preço/Fluxo de Caixa (P/CF)", color: pastelColors[9],
        biz: {
            formula: "Preço / Fluxo de Caixa por Ação",
            desc: "Frequentemente mais confiável que o P/L. Indica a capacidade real de gerar dinheiro.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor",
            example: "$100 / $10 = 10x"
        },
        fam: {
            title: "Capital de Giro",
            desc: "Seu colchão financeiro: Conta corrente + poupança acessível MENOS contas a pagar.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor (Positivo)",
            example: "$2000 (Banco) - $1500 (Contas) = +$500"
        }
    },
    {
        id: 11, title: "11. Dívida / Ativos Totais", color: pastelColors[10],
        biz: {
            formula: "Dívida Total / Ativos Totais",
            desc: "Que parte da empresa é financiada pelo banco?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor",
            example: "$400k / $1M = 0.4"
        },
        fam: {
            title: "Fluxo de Caixa Livre",
            desc: "Sua poupança MENOS reparos obrigatórios da casa. É o dinheiro realmente disponível.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais alto = Melhor",
            example: "$5000 (Poupança) - $2000 (Telhado) = $3000"
        }
    },
    {
        id: 12, title: "12. Payout Ratio", color: pastelColors[11],
        biz: {
            formula: "Dividendos Pagos / Lucro Líquido",
            desc: "A parte dos lucros devolvida aos acionistas. Se > 80%, o dividendo pode estar em risco.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor (Sustentável)",
            example: "$2 (Div) / $4 (LPA) = 50%"
        },
        fam: {
            title: "Payout Ratio Pessoal",
            desc: "% do seu excedente usado para mimos (Restaurantes) em vez de reinvestir.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mais baixo = Melhor (Riqueza futura)",
            example: "$400 (Restaurantes) / $1000 (Excedente) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Guia Finanças 101",
        subtitle: "Domine suas finanças pessoais de A a Z",
        parts: [
            { title: "Introdução", items: [{ id: 'intro', label: 'Por que este guia?' }] },
            { title: "Parte 1: As Fundações", items: [{ id: 'chap1', label: "1. A Mentalidade Correta" }, { id: 'chap2', label: "2. O Orçamento, Seu GPS" }, { id: 'chap3', label: "3. Ativos vs Passivos" }, { id: 'chap4', label: "4. O Fundo de Emergência" }, { id: 'chap5', label: "5. Gerenciar Dívidas" }] },
            { title: "Parte 2: Investimentos", items: [{ id: 'chap6', label: "6. Por que Investir?" }, { id: 'chap7', label: "7. Juros Compostos" }, { id: 'chap8', label: "8. Risco/Retorno" }, { id: 'chap9', label: "9. Tipos de Investimentos" }, { id: 'chap10', label: "10. Tipos de Contas" }] },
            { title: "Parte 3: A Bolsa em Detalhes", items: [{ id: 'chap11', label: "11. A Ação" }, { id: 'chap12', label: "12. Análise Fundamentalista" }, { id: 'chap13', label: "13. Índices Chave" }, { id: 'chap14', label: "14. Dividendos" }, { id: 'chap15', label: "15. Construir Portfólio" }, { id: 'chap16', label: "16. Psicologia" }] },
            { title: "Parte 4: Seus Objetivos", items: [{ id: 'chap17', label: "17. Objetivos" }, { id: 'chap18', label: "18. Aposentadoria" }] },
            { title: "Parte 5: Estratégias Avançadas", items: [{ id: 'chap19', label: "19. Fund. vs Téc." }, { id: 'chap20', label: "20. Ordens de Bolsa" }, { id: 'chap21', label: "21. Fiscalidade" }, { id: 'chap22', label: "22. Rebalanceamento" }, { id: 'chap23', label: "23. Armadilhas Psicológicas" }] },
            { title: "Anexo", items: [{ id: 'chap24', label: "24. Glossário" }, { id: 'bonus_psych', label: "Bônus: Psicologia" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Introdução: Por que este guia?",
            content: [
                { type: 'p', text: "Você tem em mãos uma ferramenta poderosa: <strong>Nexus Finance Pro</strong>. É uma calculadora sofisticada, um gerenciador de portfólio preciso e um planejador de dívidas estratégico, tudo em um." },
                { type: 'p', text: "Mas uma ferramenta, por mais poderosa que seja, só é eficaz se o artesão souber como e por que usá-la." },
                { type: 'p', text: "Este guia é o <strong>\"Porquê\"</strong>. O aplicativo Nexus Finance Pro é o <strong>\"Como\"</strong>." },
                { type: 'p', text: "Você não precisa ser um expert para usar o Nexus Finance Pro, mas entender os conceitos fundamentais transformará sua experiência. Você não clicará apenas em botões; você executará um plano. Lembre-se, porém, que embora esta ferramenta seja muito poderosa, ela foi projetada para assisti-lo: para validar suas estratégias e obter conselhos personalizados, o acompanhamento de um profissional certificado continua sendo uma escolha sábia." },
                {
                    type: 'box', style: 'info', title: 'O que você vai aprender', content: [
                        { type: 'p', text: "Este guia ensinará os princípios atemporais da gestão do dinheiro. Cobriremos:" },
                        { type: 'ul', items: ["<strong>A Psicologia:</strong> Como dominar suas emoções para evitar erros caros.", "<strong>As Fundações:</strong> Construir um orçamento sólido, criar um fundo de emergência e atacar suas dívidas.", "<strong>Investimentos:</strong> Entender por que e como fazer seu dinheiro trabalhar para você.", "<strong>A Bolsa:</strong> Desmistificar ações, ETFs e índices financeiros para investir com confiança.", "<strong>Estratégias Avançadas:</strong> Conceitos de nível intermediário para otimizar sua fiscalidade e gestão de portfólio."] },
                        { type: 'p', text: "Ao final deste guia, cada módulo do Nexus Finance Pro não será mais uma simples aba, mas uma arma no seu arsenal para construir sua independência financeira." }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Capítulo 1: A Mentalidade Correta",
            content: [
                { type: 'p', text: "Bem-vindo a este guia! Antes de falar de números, índices ou estratégias, precisamos falar da ferramenta mais poderosa à sua disposição: sua mentalidade." },
                { type: 'p', text: "A gestão financeira não é uma questão de sorte. Não é um segredo reservado a uma elite. É um conjunto de hábitos, decisões e sistemas que qualquer um pode aprender e aplicar." },
                { type: 'p', text: "O maior obstáculo não é a falta de dinheiro, é a psicologia. É o medo de olhar suas contas, a procrastinação ou a sensação de ser \"ruim com números\"." },
                {
                    type: 'box', style: 'warning', title: 'Mitos a Derrubar', content: [
                        { type: 'ul', items: ["<strong>Mito 1: \"É preciso dinheiro para fazer dinheiro.\"</strong><br>Falso. É preciso hábitos para fazer dinheiro. Uma pessoa que economiza $100 por mês com um plano sempre vencerá alguém que ganha $10.000 por mês mas gasta $10.100.", "<strong>Mito 2: \"Investir é como jogar no cassino.\"</strong><br>Falso. A especulação de curto prazo (day trading) assemelha-se ao jogo. O investimento de longo prazo, baseado na análise da saúde das empresas, é uma participação no crescimento econômico global. É possuir uma parte de uma empresa real.", "<strong>Mito 3: \"Sou muito jovem / muito velho para começar.\"</strong><br>Falso. Se você é jovem, seu maior trunfo é o tempo (ver Capítulo 7 sobre juros compostos). Se você é mais velho, seu maior trunfo é (muitas vezes) uma renda mais alta e disciplina. O melhor momento para começar foi há 10 anos. O segundo melhor momento é hoje."] }
                    ]
                },
                { type: 'p', text: "<strong>Seu Objetivo Principal:</strong> A independÊNCIA financeira. Não é ficar rico para comprar um carro de luxo. É ter ativos (investimentos) suficientes trabalhando para você, para que você não precise mais trabalhar para pagar suas contas. O trabalho torna-se uma escolha, não uma obrigação." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Capítulo 2: O Orçamento, Seu GPS",
            content: [
                { type: 'p', text: "Você não pode chegar a um destino se não sabe onde está. O orçamento é o seu \"Você está aqui\" no mapa financeiro. Não é uma prisão projetada para impedi-lo de gastar; é uma ferramenta projetada para lhe dar permissão para gastar sem culpa." },
                { type: 'p', text: "Um orçamento responde a uma única pergunta: <strong>Para onde vai meu dinheiro?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'O Orçamento Base Zero', content: [
                        { type: 'p', text: "O método mais eficaz é o \"Orçamento Base Zero\". A ideia é simples: no final do mês, a diferença entre sua renda e suas saídas deve ser zero. Isso não significa que não sobra nada! Significa que cada real recebeu uma missão." },
                        { type: 'p', text: "<code>Renda - Despesas - Poupança - Investimentos = $0</code>" },
                        { type: 'p', text: "Se você ganha $3000 e tem $2500 de despesas, sobram $500. Com um orçamento zero, você decide antecipadamente o que esses $500 farão: \"$200 irão para o fundo de emergência\", \"$100 para o investimento\", \"$200 para a poupança de férias\"." }
                    ]
                },
                { type: 'p', text: "<strong>Aja:</strong> Use o <strong>Módulo Orçamento</strong> do Nexus Finance Pro. Liste TODAS as suas rendas e TODAS as suas despesas, até o café de $3. Use as frequências (anual, mensal) para que a ferramenta calcule seu fluxo de caixa mensal exato. Este é o primeiro passo de todo o seu plano." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Capítulo 3: Ativos vs Passivos",
            content: [
                { type: 'p', text: "Este é o conceito mais importante das finanças pessoais, popularizado por Robert Kiyosaki em \"Pai Rico, Pai Pobre\"." },
                {
                    type: 'box', style: 'info', title: 'A Definição Simples', content: [
                        { type: 'p', text: "Um <strong>ATIVO</strong> coloca dinheiro no seu bolso." },
                        { type: 'p', text: "Um <strong>PASSIVO</strong> tira dinheiro do seu bolso." }
                    ]
                },
                { type: 'p', text: "É tão simples quanto isso. O objetivo da sua vida financeira é usar sua renda para comprar ativos, para que esses ativos gerem nova renda para comprar ainda mais ativos." },
                {
                    type: 'grid', items: [
                        { title: "Exemplos de Ativos", text: "Uma ação que paga dividendos. Um ETF que valoriza. Um imóvel alugado lucrativo." },
                        { title: "Exemplos de Passivos", text: "Um financiamento de carro. Saldo de cartão de crédito. Um empréstimo estudantil." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'A armadilha da residência principal', content: [
                        { type: 'p', text: "\"Minha casa é meu maior ativo!\" Sério? Todo mês, ela tira dinheiro do seu bolso (hipoteca, impostos, seguros, reparos). Pela definição estrita, sua casa principal é um passivo." },
                        { type: 'p', text: "Ela pode se tornar um ativo no dia em que você a vender (se valorizou), ou se alugar o porão (gera renda). Mas não confunda um passivo (que custa dinheiro) com um investimento." }
                    ]
                },
                { type: 'p', text: "Seu <strong>Patrimônio Líquido</strong> é a medida da sua saúde financeira. É o que você vê no seu Painel." },
                { type: 'p', text: "<strong>Patrimônio Líquido = Total de Ativos - Total de Passivos</strong>. Seu objetivo é aumentar esse número, mês após mês, ano após ano." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Capítulo 4: O Fundo de Emergência",
            content: [
                { type: 'p', text: "A vida é imprevisível. O carro quebra. O telhado começa a vazar. Você perde o emprego. A diferença entre um imprevisto e uma catástrofe financeira chama-se fundo de emergência." },
                { type: 'p', text: "Um fundo de emergência é seu escudo. É dinheiro reservado exclusivamente para emergências. Este dinheiro não é investido, não está lá para \"render\". Ele está lá para ser líquido, acessível e chato." },
                {
                    type: 'box', style: 'info', title: 'Quanto?', content: [
                        { type: 'p', text: "O objetivo padrão é ter <strong>3 a 6 meses</strong> de despesas de subsistência." },
                        { type: 'p', text: "Calcule quanto você precisa gastar por mês para viver (aluguel/hipoteca, comida básica, eletricidade, transporte mínimo). Se esse valor for $2.500, seu fundo de emergência deve ficar entre $7.500 e $15.000." }
                    ]
                },
                { type: 'p', text: "<strong>Onde colocar?</strong> Em um local seguro e acessível, mas não muito acessível (não na sua conta corrente do dia a dia). Uma conta poupança de alto rendimento é ideal. Separada das operações diárias, mas acessível em 1 ou 2 dias." },
                { type: 'p', text: "<strong>A prioridade absoluta:</strong> Antes de pagar dívidas (exceto o mínimo) e antes de investir um único dólar na bolsa, construa um \"mini-fundo\" de emergência de $1.000. Esse dinheiro evitará que você se endivide mais na próxima vez que um pneu furar." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Capítulo 5: Gerenciar Dívidas",
            content: [
                { type: 'p', text: "Existem dois tipos de dívidas: as \"boas\" e as \"más\"." },
                { type: 'ul', items: ["<strong>Boas dívidas (Investimento):</strong> Usadas para comprar um ativo que valoriza. Ex: Hipoteca (imóvel), empréstimo estudantil (investir em si mesmo).", "<strong>Más dívidas (Consumo):</strong> Usadas para comprar um passivo que perde valor. Ex: Financiamento de carro, cartão de crédito para férias ou restaurantes."] },
                { type: 'p', text: "Seu objetivo é pagar as más dívidas o mais rápido possível. Para isso, existem duas estratégias principais, que você pode simular no Módulo Plano." },
                {
                    type: 'box', style: 'info', title: 'Estratégia 1: A Avalanche', content: [
                        { type: 'p', text: "Liste todas as dívidas por ordem decrescente de taxa de juros. Coloque todo o dinheiro extra na dívida com a maior taxa." },
                        { type: 'p', text: "<strong>Vantagem:</strong> É o método que economizará mais dinheiro em juros. É o mais eficiênte matematicamente." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Estratégia 2: A Bola de Neve', content: [
                        { type: 'p', text: "Liste todas as dívidas por ordem crescente de saldo (da menor para a maior). Ataque a menor dívida com todo seu dinheiro extra." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Você obtém \"vitórias\" rápidas. Pagar uma dívida pequena cria impulso psicológico e motivação imensa para continuar." }
                    ]
                },
                { type: 'p', text: "Qual método escolher? Aquele que o manterá motivado. O Módulo Plano mostrará o impacto de ambos." }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Capítulo 6: Por que Investir?",
            content: [
                { type: 'p', text: "Se você já tem um orçamento e um fundo de emergência, parabéns! Você completou o \"modo defesa\". É hora de passar para o \"modo ataque\": o investimento." },
                { type: 'p', text: "Poupar (guardar dinheiro) protege você. Investir (comprar ativos) enriquece você." },
                {
                    type: 'box', style: 'warning', title: 'Seu Inimigo Nº 1: A Inflação', content: [
                        { type: 'p', text: "A inflação é o aumento geral dos preços ao longo do tempo. Se a inflação for de 3% ao ano, isso significa que $100 hoje comprarão apenas $97 de bens e serviços no próximo ano. Seu dinheiro <strong>perde</strong> valor se ficar parado." },
                        { type: 'p', text: "Se você deixar $10.000 numa conta corrente (0%) por 25 anos com inflação média de 2,5%, seu \"poder de compra\" será de apenas $5.394. Você perdeu quase metade do seu dinheiro sem fazer nada." }
                    ]
                },
                { type: 'p', text: "O objetivo do investimento é simples: obter um retorno superior à inflação para que seu poder de compra aumente com o tempo." },
                { type: 'p', text: "O Nexus Finance Pro ajuda a ver esse impacto. Nos módulos Valor Futuro e Retirada, a ferramenta calcula sempre o \"Valor Nominal\" (montante total) e o \"Poder de Compra Real\" (o que esse dinheiro realmente valerá após inflação)." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Capítulo 7: Juros Compostos",
            content: [
                { type: 'p', text: "Albert Einstein teria dito que os juros compostos são \"a oitava maravilha do mundo\". É o motor da criação de riqueza." },
                { type: 'p', text: "Juros compostos são simplesmente ganhar juros sobre seus juros. É um efeito bola de neve." },
                {
                    type: 'box', style: 'success', title: 'Exemplo Simples', content: [
                        { type: 'ul', items: ["Ano 1: Você ganha 8% de $10.000 ($800). Saldo: $10.800.", "Ano 2: Você ganha 8% de $10.800 ($864). Saldo: $11.664.", "Ano 3: Você ganha 8% de $11.664 ($933). Saldo: $12.597."] },
                        { type: 'p', text: "Seu dinheiro trabalha para você, e os \"funcionários\" (seus ganhos) começam eles mesmos a trabalhar e a ter filhos!" }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'O Fator Tempo', content: [
                        { type: 'p', text: "A variável mais importante é o tempo. Veja a diferença:" },
                        { type: 'p', text: "<strong>Alex (25 a 35 anos):</strong> Investe $5.000/ano por 10 anos (Total 50k).<br><strong>Ben (35 a 65 anos):</strong> Investe $5.000/ano por 30 anos (Total 150k)." },
                        { type: 'p', text: "Aos 65 anos (8% retorno):<br>Alex (que pôs apenas 50k) terá: <strong>$1.028.000</strong><br>Ben (que pôs 150k) terá: <strong>$611.000</strong>" },
                        { type: 'p', text: "Alex ganha, simplesmente porque começou 10 anos antes. Seus $50.000 tiveram mais tempo para \"compor\"." }
                    ]
                },
                { type: 'p', text: "<strong>Aja:</strong> Vá ao Módulo Valor Futuro. Insira seu capital inicial, depósitos mensais e uma taxa de retorno (ex: 8%). Veja o gráfico em 30 anos. Você ficará impressionado com a curva exponencial." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Capítulo 8: O Espectro Risco/Retorno",
            content: [
                { type: 'p', text: "Não existe almoço grátis em finanças. A regra de ouro é: <strong>Quanto maior o retorno potencial, maior o risco de perda.</strong>" },
                { type: 'p', text: "Seu trabalho como investidor não é evitar o risco, mas gerenciá-lo." },
                {
                    type: 'box', style: 'info', title: 'O Espectro', content: [
                        { type: 'ul', items: ["<strong>Risco Baixo / Retorno Baixo:</strong> Poupança, Títulos do Gov. Capital garantido, mas mal bate a inflação.", "<strong>Risco Médio / Retorno Médio:</strong> ETFs de índices (S&P 500), ações \"blue chip\".", "<strong>Risco Alto / Retorno Alto:</strong> Ações individuais, pequenas empresas, criptomoedas."] }
                    ]
                },
                { type: 'p', text: "<strong>O que é o Risco?</strong> Risco é <strong>volatilidade</strong>. É a velocidade com que o preço sobe e desce. Se seu portfólio cair 30% em 3 meses, você entrará em pânico e venderá? É crucial conhecer-se antes que a queda aconteça." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Capítulo 9: Tipos de Investimentos",
            content: [
                { type: 'p', text: "Estes são os \"blocos de Lego\" básicos para construir seu portfólio." },
                { type: 'ul', items: ["<strong>1. Ações (Stocks):</strong> Comprar uma ação (`AAPL`, `PETR4`) é comprar uma pequena parte da empresa. Você ganha via Valorização (preço sobe) e Dividendos (parte dos lucros).", "<strong>2. Obrigações/Títulos (Bonds):</strong> Empréstimo ao governo ou empresa por juros fixos. Geralmente menos arriscado que ações.", "<strong>3. Fundos Negociados em Bolsa (FNB / ETF):</strong> Frequentemente o melhor ponto de partida. Um ETF é uma \"cesta\" contendo centenas de ações ou títulos, mas comprada como uma única ação."] },
                { type: 'p', text: "Com um ETF (ex: `IVV` para o S&P 500), você possui uma minúscula parte das 500 maiores empresas americanas. É diversificação instantânea a baixo custo." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Capítulo 10: Tipos de Contas (Canadá)",
            content: [
                { type: 'p', text: "Antes de comprar um investimento, você deve escolher o \"recipiente\" fiscal." },
                {
                    type: 'box', style: 'success', title: '1. CELI (Conta de Poupança Livre de Impostos)', content: [
                        { type: 'p', text: "Você investe dinheiro após impostos (líquido). <strong>Vantagem:</strong> TODOS os ganhos (valorização, dividendos) são <strong>100% isentos de impostos</strong>, vitaliciamente." },
                        { type: 'p', text: "<strong>Retiradas:</strong> Isentas. O espaço de contribuição retorna no ano seguinte. Ideal para: Emergência, Entrada de casa, Aposentadoria." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. REER (Plano Registrado de Poupança Reforma)', content: [
                        { type: 'p', text: "Você investe dinheiro antes de impostos. <strong>Vantagem:</strong> O valor contribuído é deduzido da sua renda tributável (grande reembolso de imposto)." },
                        { type: 'p', text: "<strong>Retiradas:</strong> Tributáveis na aposentadoria. Ideal para: Longo prazo se renda alta." }
                    ]
                },
                { type: 'p', text: "<strong>3. Conta Não Registrada:</strong> Conta básica, sem vantagem fiscal. Tributável anualmente sobre dividendos e ganhos de capital." },
                { type: 'p', text: "<strong>A Estratégia Vencedora:</strong> 1. Maximizar o CELI. 2. Maximizar o REER. 3. Investir em Não Registrada." }
            ]
        },
        chap10_intl: {
            id: 'chap10',
            title: "Capítulo 10: Tipos de Contas (Internacional)",
            content: [
                { type: 'p', text: "Governos de todo o mundo oferecem incentivos fiscais para encorajar a poupança. Embora os nomes mudem (401k nos EUA, ISA no Reino Unido, PPR em Portugal), os conceitos permanecem os mesmos." },
                {
                    type: 'box', style: 'success', title: '1. Contas Isentas de Impostos (Tax-Free)', content: [
                        { type: 'p', text: "Você investe dinheiro 'pós-imposto' (líquido). <strong>Vantagem:</strong> Os ganhos futuros são 100% isentos de impostos." },
                        { type: 'p', text: "<strong>Exemplos:</strong> Roth IRA (EUA), ISA (UK), CELI (Canadá)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Contas com Imposto Diferido (Tax-Deferred)', content: [
                        { type: 'p', text: "Você investe dinheiro 'pré-imposto' (bruto). <strong>Vantagem:</strong> Dedução fiscal imediata, mas paga imposto na retirada." },
                        { type: 'p', text: "<strong>Exemplos:</strong> 401k / Traditional IRA (EUA), PPR (Portugal), PGBL (Brasil)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Conta Comum (Tributável):</strong> Sem vantagem fiscal. Você paga imposto sobre dividendos e ganhos de capital anualmente." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Capítulo 11: O que é uma Ação?",
            content: [
                { type: 'p', text: "Comprar uma ação é comprar uma parte da propriedade de uma empresa. Se uma empresa tem 1.000.000 de ações e você compra 100, você possui 0,01% dessa empresa." },
                { type: 'p', text: "Agora você é proprietário. Tem direito a uma parte dos lucros (os dividendos)." },
                { type: 'p', text: "<strong>O Mercado de Ações:</strong> É um grande mercado público onde o preço é determinado pela oferta e demanda. Se as pessoas antecipam lucros futuros altos (ex: novo iPhone), a demanda aumenta e o preço sobe." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Capítulo 12: Análise Fundamentalista",
            content: [
                { type: 'p', text: "A análise fundamentalista é a arte de avaliar a saúde financeira e o valor real de uma empresa. O objetivo é encontrar empresas extraordinárias a um preço comum." },
                { type: 'p', text: "Olhamos para as demonstrações:" },
                { type: 'ul', items: ["<strong>Balanço Patrimonial:</strong> O que a empresa possui (ativos) e o que deve (dívidas).", "<strong>Demonstrativo de Resultados:</strong> Receitas, despesas e lucros.", "<strong>Fluxo de Caixa:</strong> O dinheiro que realmente entra e sai."] },
                { type: 'p', text: "O <strong>Módulo Análise Ação</strong> do Nexus Pro é uma ferramenta de análise fundamentalista simplificada." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Capítulo 13: Entendendo os Índices Chave",
            content: [
                { type: 'p', text: "Os índices (ratios) são atalhos para entender a saúde de uma empresa sem ler 100 páginas de relatórios. O Nexus Pro usa esses índices para seu \"Nexus Score\"." },
                { type: 'p', text: "<em>Nota: Para índices imobiliários (LTV, Cap Rate), veja o Guia Imobiliário.</em>" },
                {
                    type: 'box', style: 'info', title: '1. Valorização (Valuation)', content: [
                        { type: 'ul', items: ["<strong>P/L (P/E):</strong> Preço pago por $1 de lucro. (20x = Você paga $20 por $1 de lucro).", "<strong>PEG Ratio:</strong> P/L dividido pelo Crescimento. Se < 1.0, a ação pode estar subvalorizada."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Rentabilidade', content: [
                        { type: 'ul', items: ["<strong>Margem Líquida:</strong> % de lucro puro em cada venda.", "<strong>ROE (Retorno sobrePL):</strong> Eficiência ao usar o dinheiro dos acionistas. > 15% é excelente."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Saúde Financeira', content: [
                        { type: 'ul', items: ["<strong>Dívida / Patrimônio:</strong> Mede o endividamento. Se > 1.0, atenção.", "<strong>Liquidez:</strong> Capacidade de pagar contas de curto prazo."] }
                    ]
                },
                { type: 'p', text: "Para entender bem os índices bolsistas, é útil compará-los à sua própria gestão financeira pessoal. Uma empresa nada mais é do que uma família em grande escala. Abaixo, comparamos cada conceito 'Business' ao seu equivalente 'Família'." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Capítulo 14: Investimento em Dividendos",
            content: [
                { type: 'p', text: "Estratégia focada na geração de renda passiva. Você é pago para esperar. É como possuir um pomar: você não quer vender as árvores, quer colher as maçãs." },
                { type: 'p', text: "<strong>O Rendimento (Yield):</strong> (Dividendo Anual / Preço da Ação) * 100. Se uma ação custa $100 e paga $4, o rendimento é 4%." },
                {
                    type: 'box', style: 'warning', title: 'A Armadilha de Rendimento (> 12%)', content: [
                        { type: 'p', text: "Regra Nexus: Todo rendimento > 12% recebe uma pontuação de 0. Por quê?" },
                        { type: 'p', text: "Se o preço de uma ação despenca (porque a empresa vai mal), o rendimento sobe mecanicamente. Um rendimento de 15% muitas vezes grita que o dividendo será cortado em breve. É um \"Yield Trap\"." }
                    ]
                },
                { type: 'p', text: "<strong>O Crescimento do Dividendo:</strong> A verdadeira mágica é comprar empresas que <strong>aumentam</strong> seus dividendos a cada ano (os Aristocratas). No Módulo Investimento, você pode acompanhar sua renda passiva separadamente." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Capítulo 15: Construindo seu Portfólio",
            content: [
                { type: 'p', text: "Seu portfólio é a coleção de todos os seus investimentos. Construí-lo requer duas coisas: Diversificação e Alocação." },
                {
                    type: 'box', style: 'concept', title: 'A Diversificação', content: [
                        { type: 'p', text: "Não coloque todos os ovos na mesma cesta. Diversifique por <strong>classe de ativos</strong> (Ações/Obrigações), por <strong>setor</strong> (Tecnologia, Bancos, Energia) e por <strong>geografia</strong> (Brasil, EUA, Mundo). ETFs oferecem isso instantaneamente." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'A Alocação de Ativos', content: [
                        { type: 'p', text: "É a % do seu dinheiro em Ações (Risco/Crescimento) vs Obrigações/Renda Fixa (Segurança/Estabilidade)." },
                        { type: 'ul', items: ["<strong>Jovem (20-35 anos):</strong> Agressivo. Ex: 90% Ações / 10% Renda Fixa.", "<strong>Meio (35-50 anos):</strong> Equilibrado. Ex: 70% Ações / 30% Renda Fixa.", "<strong>Aposentadoria:</strong> Prudente. Ex: 40% Ações / 60% Renda Fixa."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Capítulo 16: A Psicologia do Investidor",
            content: [
                { type: 'p', text: "Investir é simples, mas não é fácil. Seu pior inimigo é você (suas emoções)." },
                { type: 'ul', items: ["<strong>Ganância (FOMO):</strong> Comprar quando tudo sobe, no topo, por medo de perder o barco. Resultado: Compra-se caro.", "<strong>Medo:</strong> Vender quando tudo cai. Resultado: Vende-se barato e consolida-se uma perda permanente."] },
                {
                    type: 'box', style: 'success', title: 'A Solução: O DCA', content: [
                        { type: 'p', text: "O <strong>Dollar-Cost Averaging</strong> (Investimento periódico fixo). Invista $500 por mês, aconteça o que acontecer, automaticamente." },
                        { type: 'p', text: "Quando o mercado cai, seus $500 compram MAIS ações. Quando sobe, compram MENOS. Você aproveita as quedas sem emoções." }
                    ]
                },
                { type: 'p', text: "<strong>Para ir além:</strong> Um capítulo bônus dedicado inteiramente à <strong>Psicologia do Dinheiro</strong> (baseado no livro de Morgan Housel) foi adicionado ao final deste guia. Não perca!" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Capítulo 17: Definir Objetivos",
            content: [
                { type: 'p', text: "Não se poupa por poupar. Poupa-se com um objetivo. Um bom objetivo é <strong>S.M.A.R.T.</strong>: Específico, Mensurável, Atingível, Realista, Temporal." },
                { type: 'p', text: "Ruim: \"Quero ser rico\".<br>Bom: \"Quero $50.000 para uma entrada de casa em 3 anos.\"" },
                { type: 'p', text: "<strong>Aja:</strong> O <strong>Módulo Objetivo</strong> calcula exatamente quanto você precisa economizar por mês para atingir seus alvos." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Capítulo 18: Planejar a Aposentadoria",
            content: [
                { type: 'p', text: "É o momento em que seu portfólio paga seu estilo de vida." },
                {
                    type: 'box', style: 'info', title: 'A Regra dos 4%', content: [
                        { type: 'p', text: "Historicamente, você pode retirar <strong>4%</strong> do seu portfólio a cada ano sem ficar sem dinheiro por 30 anos." },
                        { type: 'p', text: "Cálculo rápido do montante necessário: <strong>Despesas Anuais Desejadas x 25</strong>." },
                        { type: 'p', text: "Ex: Para viver com $40.000/ano: 40.000 x 25 = <strong>$1.000.000</strong>." }
                    ]
                },
                { type: 'p', text: "Use o <strong>Módulo Retirada</strong> para simular a duração do seu capital em diferentes cenários." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Capítulo 19: Análise Fundamentalista vs Técnica",
            content: [
                { type: 'p', text: "Duelo de filosofias." },
                { type: 'ul', items: ["<strong>Análise Fundamentalista (O Investidor):</strong> Pergunta: \"É uma boa empresa?\" Ferramentas: Balanços, Índices, Qualidade da gestão. Objetivo: Longo prazo.", "<strong>Análise Técnica (O Trader):</strong> Pergunta: \"Para onde vai o preço?\" Ferramentas: Gráficos, Médias móveis, RSI. Objetivo: Curto prazo (Timing)."] },
                { type: 'p', text: "<strong>Nossa opinião:</strong> Para criação de riqueza, a análise fundamentalista é rainha. A técnica pode ajudar no timing, mas nunca deve ser a única base." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Capítulo 20 : Ordens de Bolsa (Guia Completo)",
            content: [
                { type: 'p', text: "Saber o que comprar é uma coisa, saber como comprar é outra. Aqui estão os 5 tipos de ordens essenciais para controlar seus preços de entrada e saída." },
                {
                    type: 'box', style: 'info', title: '1. Ordem a Mercado (Market Order)', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"Quero agora, não importa o preço exato.\"" },
                        { type: 'p', text: "<strong>Funcionamento:</strong> A ordem é executada imediatamente ao melhor preço disponível." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Rapidez garantida." },
                        { type: 'p', text: "<strong>Risco:</strong> Você não controla o preço. Se o mercado for volátil, pode pagar mais caro que o previsto." },
                        { type: 'p', text: "<strong>Exemplo:</strong> Ação ABC está em $50,00. Você lança ordem a mercado. Num segundo, o preço vai a $50,05. Você paga $50,05." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Ordem Limitada (Limit Order)', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"Quero comprar, mas não mais caro que X.\"" },
                        { type: 'p', text: "<strong>Funcionamento:</strong> Você fixa um preço teto. A ordem só executa se o mercado atingir seu preço ou melhor." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Controle total do preço." },
                        { type: 'p', text: "<strong>Risco:</strong> Se a ação não cair ao seu preço, você nunca compra." },
                        { type: 'p', text: "<strong>Exemplo:</strong> XYZ vale $102. Você põe Ordem Limitada de compra a $100. Se cair a $99, você compra. Se subir a $105, nada acontece." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Ordem Stop (Stop-Loss)', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"A saída de emergência.\"" },
                        { type: 'p', text: "<strong>Funcionamento:</strong> É uma ordem dormente. Se o preço cair e tocar seu limite (ex: $90), ela acorda e vende tudo a mercado." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Protege contra crashes sem precisar olhar a tela." },
                        { type: 'p', text: "<strong>Risco:</strong> Em queda brusca, pode vender bem abaixo do gatilho (ex: disparou em $90, vendeu a $85)." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Ordem Stop-Limit', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"Saída de emergência precisa.\"" },
                        { type: 'p', text: "<strong>Funcionamento:</strong> Define dois preços: o gatilho (Stop) e o mínimo aceito (Limit)." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Garante que não venderá a preço ridículo." },
                        { type: 'p', text: "<strong>Risco:</strong> Se cair rápido demais, a ordem não executa e você continua com a ação em queda." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Ordem Trailing Stop (Stop Móvel)', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"Deixe os lucros correrem.\"" },
                        { type: 'p', text: "<strong>Funcionamento:</strong> O preço de venda sobe automaticamente com a ação, mas nunca desce. Você fixa uma distância." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Garante lucros sem limitar a alta." },
                        { type: 'p', text: "<strong>Exemplo:</strong> Compra a $100, Stop Móvel de $5. Ação vai a $150 (Stop agora em $145). Ação cai para $140. Vende a $145. Lucro garantido." }
                    ]
                },
                {
                    type: 'box', style: 'dark', title: 'Nota Importante: A Validade', content: [
                        { type: 'p', text: "Para ordens Limit e Stop, escolha a duração:" },
                        { type: 'ul', items: ["<strong>Day (Dia):</strong> Expira às 16:00 se não executada.", "<strong>GTC (Good 'Til Canceled):</strong> Ativa até ser cancelada (ou ~60 dias)."] }
                    ]
                },
                { type: 'p', text: "Para o investidor de longo prazo, essas 5 ordens são tudo o que você precisa." }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Capítulo 21 : Fiscalidade Avançada",
            content: [
                { type: 'p', text: "Crucial para contas <strong>Tributáveis</strong>. Quando vende, paga imposto sobre: <code>Preço de Venda - Preço Médio (Custo)</code>." },
                {
                    type: 'box', style: 'info', title: 'O Preço Médio (Custo de Aquisição)', content: [
                        { type: 'p', text: "É o custo médio ponderado de todas as suas ações, incluindo taxas. Você deve acompanhar isso para seus impostos." },
                        { type: 'p', text: "Cálculo: (Custo total de todas as compras) / (Número total de ações)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro calcula automaticamente uma estimativa do seu Preço Médio e ganhos latentes no <strong>Módulo Investimento</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Capítulo 22: O Rebalanceamento do Portfólio",
            content: [
                { type: 'p', text: "Se seu alvo é 70% Ações e 30% Renda Fixa, e as ações sobem muito (agora 80%), seu portfólio ficou muito arriscado." },
                { type: 'p', text: "<strong>Rebalancear:</strong> É vender o que subiu (Ações) para comprar o que caiu (Renda Fixa) e voltar a 70/30." },
                { type: 'p', text: "É o auge da disciplina: força você matematicamente a <strong>vender na alta e comprar na baixa</strong>." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Capítulo 23: Armadilhas Psicológicas (Vieses)",
            content: [
                { type: 'ul', items: ["<strong>Viés de Confirmação:</strong> Ler apenas o que confirma nossa opinião e ignorar críticas.", "<strong>Ancoragem:</strong> Achar que uma ação está \"barata\" só porque valia $300 antes e vale $150 agora. O passado não importa.", "<strong>Aversão à Perda:</strong> Vender ganhadores rápido demais e segurar perdedores (esperando que subam). Deve-se fazer o oposto!"] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Capítulo 24: Glossário de Termos Chave",
            content: [
                { type: 'p', text: "Aqui está um lembrete rápido dos termos que você encontrará." },
                {
                    type: 'grid', items: [
                        { title: "Ativo", text: "Bem de valor ou fonte de renda." },
                        { title: "Passivo", text: "Algo que tira dinheiro do seu bolso." },
                        { title: "Ação", text: "Parte da propriedade de uma empresa." },
                        { title: "Obrigação", text: "Empréstimo a empresa/governo contra juros." },
                        { title: "Dividendo", text: "Parte dos lucros distribuída aos acionistas." },
                        { title: "ETF (FNB)", text: "Cesta de investimentos diversificada." },
                        { title: "Volatilidade", text: "Amplitude das variações de preço (Risco)." },
                        { title: "LPA (EPS)", text: "Lucro Por Ação." },
                        { title: "P/L (P/E)", text: "Preço/Lucro. Se a ação está cara ou barata." },
                        { title: "Isento de Imposto", text: "Conta onde ganhos não pagam imposto." },
                        { title: "Imposto Diferido", text: "Conta dedutível, imposto pago na retirada." },
                        { title: "Preço Médio", text: "Seu custo médio de aquisição." },
                        { title: "Patrimônio Líquido", text: "Ativos - Passivos. Riqueza real." }
                    ]
                },
                { type: 'p', text: "Este guia deu as fundações. A ferramenta Nexus Finance Pro lhe dá o poder de aplicá-las. Seu futuro financeiro está agora em suas mãos. Bom planejamento!" }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bônus: A Psicologia do Dinheiro",
            content: [
                { type: 'p', text: "<strong>(Baseado nos conceitos de Morgan Housel)</strong> - Um dos livros mais importantes sobre psicologia financeira. Recomendamos fortemente a leitura!" },
                {
                    type: 'box', style: 'info', title: 'Parte 1: Nossa relação irracional com o dinheiro', content: [
                        { type: 'p', text: "<strong>1. Ninguém é louco:</strong>" },
                        { type: 'p', text: "Todos achamos que sabemos como o mundo funciona, mas vivemos apenas uma fração minúscula dele. Suas decisões financeiras dependem da sua geração, da inflação da sua juventude e cultura. <em>Não julgue. O que parece 'loucura' para você pode ser sobrevivência lógica para outro.</em>" },
                        { type: 'p', text: "<strong>2. Sorte e Risco:</strong>" },
                        { type: 'p', text: "O sucesso de Bill Gates deve-se ao gênio, mas também à sorte de ter acesso a um computador na escola. <em>Seja humilde no sucesso e indulgente no fracasso. O acaso desempenha um papel imenso.</em>" },
                        { type: 'p', text: "<strong>3. Nunca é o bastante (A ganância):</strong>" },
                        { type: 'p', text: "Não há razão para arriscar o que você tem e precisa, para obter o que você não tem e não precisa." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Parte 2: A construção da riqueza', content: [
                        { type: 'p', text: "<strong>4. A confusão dos juros compostos:</strong>" },
                        { type: 'p', text: "Warren Buffett é rico porque investe desde criança. <em>Cale-se e espere. O tempo é a força mais poderosa.</em>" },
                        { type: 'p', text: "<strong>5. Ficar rico vs Permanecer rico:</strong>" },
                        { type: 'p', text: "Para ficar rico, é preciso otimismo e risco. Para <strong>permanecer</strong> rico, é preciso paranoia e frugalidade. <em>A sobrevivência é a chave.</em>" },
                        { type: 'p', text: "<strong>6. Eventos extremos:</strong>" },
                        { type: 'p', text: "Você pode estar errado 50% do tempo e ainda fazer fortuna. O que importa é a magnitude das suas vitórias, não a frequência." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Parte 3: Psicologia e comportamento', content: [
                        { type: 'p', text: "<strong>7. A liberdade (O verdadeiro dividendo):</strong>" },
                        { type: 'p', text: "A maior riqueza é acordar e dizer: 'Posso fazer o que eu quiser hoje'. Controlar seu tempo traz mais felicidade que o luxo." },
                        { type: 'p', text: "<strong>8. O paradoxo do homem no carro:</strong>" },
                        { type: 'p', text: "Ninguém fica tão impressionado com suas posses quanto você. Se quer respeito, seja humilde e gentil." },
                        { type: 'p', text: "<strong>9. Riqueza é o que não se vê:</strong>" },
                        { type: 'p', text: "A verdadeira riqueza (Wealth) é o dinheiro <strong>não</strong> gasto." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: 'Parte 4: Uma filosofia realista', content: [
                        { type: 'p', text: "<strong>10. Razoável > Racional:</strong>" },
                        { type: 'p', text: "A melhor estratégia é aquela que lhe permite dormir bem à noite." },
                        { type: 'p', text: "<strong>11. Nada é gratuito:</strong>" },
                        { type: 'p', text: "O preço dos retornos da bolsa é a volatilidade e o medo. Encare as quedas como uma 'taxa de entrada', não uma multa." },
                        { type: 'p', text: "<strong>12. O pessimismo sedutor:</strong>" },
                        { type: 'p', text: "O pessimismo parece inteligente, o otimismo parece ingênuo. Seja um 'otimista realista': acredite que vai melhorar a longo prazo, mas prepare-se para sofrer a curto prazo." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Conclusão', content: [
                        { type: 'p', text: "O que Morgan Housel faz: Seu objetivo é independência, não riqueza máxima. Ele mantém muito caixa (segurança). Investe em ETFs de baixo custo. Não tenta bater o mercado, mas permanecer investido o maior tempo possível." }
                    ]
                }
            ]
        }
    }
};
