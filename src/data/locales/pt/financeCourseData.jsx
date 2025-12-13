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
            formula: "Preço / Lucro (EPS)",
            desc: "Quanto você paga por 1$ de lucro. Indica se a ação está cara (Crescimento) ou barata (Valor).",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor (para Valor)",
            example: "100$ (Preço) / 5$ (EPS) = 20x"
        },
        fam: {
            title: "Preço de Compra Familiar",
            desc: "Imagine que alguém quer 'comprar' sua família. Se você economiza 10k/ano e compram por 200k, o P/L é 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor",
            example: "200.000$ / 10.000$ = 20x"
        }
    },
    {
        id: 2, title: "2. Crescimento (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Final / Inicial)^(1/n)) - 1",
            desc: "Velocidade na qual a empresa aumenta seus lucros ou vendas a cada ano.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Aumento Salarial",
            desc: "Seu aumento anual. Se você passa de 50k para 55k, tem um crescimento de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "(55k - 50k) / 50k = 10%"
        }
    },
    {
        id: 3, title: "3. Margem Líquida (%)", color: pastelColors[2],
        biz: {
            formula: "Lucro Líquido / Receita total",
            desc: "% de cada dólar de vendas que fica no bolso da empresa após despesas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "10.000$ / 100.000$ = 10%"
        },
        fam: {
            title: "Taxa de Poupança",
            desc: "Sua taxa de poupança. Se você ganha 4000$ e economiza 400$, sua margem é de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "400$ / 4000$ = 10%"
        }
    },
    {
        id: 4, title: "4. Dívida / Patrimônio", color: pastelColors[3],
        biz: {
            formula: "Dívida Total / Patrimônio Total",
            desc: "Nível de dívida. Se > 1.0, a empresa deve mais dinheiro do que vale no papel.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor (< 1.0)",
            example: "200k$ / 100k$ = 2.0 (Arriscado)"
        },
        fam: {
            title: "Rácio de Endividamento",
            desc: "(Hipoteca + Cartão) / Seu Patrimônio Líquido.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor",
            example: "300k$ (Dívida) / 100k$ (Líquido) = 3.0"
        }
    },
    {
        id: 5, title: "5. ROE (Retorno sobre Patrimônio)", color: pastelColors[4],
        biz: {
            formula: "Lucro Líquido / Patrimônio Acionistas",
            desc: "Eficiência da gestão em gerar lucros com o dinheiro dos acionistas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor (> 15%)",
            example: "15$ / 100$ = 15%"
        },
        fam: {
            title: "Eficiência de Investimento",
            desc: "Se você tem 100k de patrimônio e gera 10k em ganhos/juros, seu ROE é 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "10.000$ / 100.000$ = 10%"
        }
    },
    {
        id: 6, title: "6. Liquidez Corrente", color: pastelColors[5],
        biz: {
            formula: "Ativos Circ. / Passivos Circ.",
            desc: "Capacidade de pagar contas imediatas. Se < 1.0, risco de ficar sem dinheiro.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor (> 1.5)",
            example: "200k$ / 100k$ = 2.0"
        },
        fam: {
            title: "Cobertura Fundo Emergência",
            desc: "Seu Fundo de Emergência / Suas contas mensais.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor (Segurança)",
            example: "5000$ / 2500$ = 2.0"
        }
    },
    {
        id: 7, title: "7. Dividend Yield", color: pastelColors[6],
        biz: {
            formula: "Dividendo Anual / Preço Ação",
            desc: "O retorno em dinheiro do investimento pago pela empresa.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor (Max 10-12%)",
            example: "4$ / 100$ = 4%"
        },
        fam: {
            title: "Dinheiro de Bolso",
            desc: "O dinheiro que você se paga para diversão a partir de seus investimentos.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Mais liberdade",
            example: "50$ (Recebido) / 1000$ (Investido) = 5%"
        }
    },
    {
        id: 8, title: "8. Margem Bruta", color: pastelColors[7],
        biz: {
            formula: "(Receita - Custos) / Receita",
            desc: "Rentabilidade básica antes de escritórios, publicidade e impostos.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Taxa de Queima (Burn Rate)",
            desc: "Despesas vitais mensais (Aluguel + Comida). Quantos meses sobrevive sem renda?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor (Despesas)",
            example: "2000$ / mês (Despesas vitais)"
        }
    },
    {
        id: 9, title: "9. Preço/Vendas (P/S)", color: pastelColors[8],
        biz: {
            formula: "Cap. de Mercado / Receita",
            desc: "Para avaliar empresas sem lucro. Compara valor de mercado com volume de vendas.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor",
            example: "1M$ / 500k$ = 2.0x"
        },
        fam: {
            title: "ROI (Retorno de Investimento)",
            desc: "Investir 20k numa cozinha que aumenta o valor da casa em 30k.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "(30k - 20k) / 20k = 50%"
        }
    },
    {
        id: 10, title: "10. Preço/Fluxo de Caixa (P/CF)", color: pastelColors[9],
        biz: {
            formula: "Preço / Fluxo de Caixa por Ação",
            desc: "Muitas vezes mais confiável que o P/L. Indica a capacidade real de gerar dinheiro.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor",
            example: "100$ / 10$ = 10x"
        },
        fam: {
            title: "Capital de Giro",
            desc: "Seu colchão: Conta Corrente + Poupança Acessível MENOS contas próximas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor (Positivo)",
            example: "2000$ (Banco) - 1500$ (Contas) = +500$"
        }
    },
    {
        id: 11, title: "11. Dívida / Ativos Totais", color: pastelColors[10],
        biz: {
            formula: "Dívida Total / Ativos Totais",
            desc: "Que parte da empresa é financiada pelo banco?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor",
            example: "400k$ / 1M$ = 0.4"
        },
        fam: {
            title: "Fluxo de Caixa Livre",
            desc: "Suas economias MENOS reparos obrigatórios da casa. Dinheiro realmente disponível.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Maior = Melhor",
            example: "5000$ (Poupança) - 2000$ (Telhado) = 3000$"
        }
    },
    {
        id: 12, title: "12. Payout Ratio", color: pastelColors[11],
        biz: {
            formula: "Dividendos Pagos / Lucro Líquido",
            desc: "Parte dos lucros devolvida aos acionistas. Se > 80%, o dividendo pode estar em risco.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor (Sustentável)",
            example: "2$ (Div) / 4$ (EPS) = 50%"
        },
        fam: {
            title: "Índice de Pagamento Pessoal",
            desc: "% do seu excedente usado para se mimar (Restaurantes) em vez de reinvestir.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Melhor (Riqueza futura)",
            example: "400$ (Restos) / 1000$ (Excedente) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Guia de Finanças 101",
        subtitle: "Dominando as Finanças Pessoais de A a Z",
        parts: [
            { title: "Introdução", items: [{ id: 'intro', label: 'Por que este guia?' }] },
            { title: "Parte 1: Os Fundamentos", items: [{ id: 'chap1', label: "1. A Mentalidade Certa" }, { id: 'chap2', label: "2. O Orçamento, Seu GPS" }, { id: 'chap3', label: "3. Ativos vs Passivos" }, { id: 'chap4', label: "4. O Fundo de Emergência" }, { id: 'chap5', label: "5. Gerenciar a Dívida" }] },
            { title: "Parte 2: Investindo", items: [{ id: 'chap6', label: "6. Por que Investir?" }, { id: 'chap7', label: "7. Juros Compostos" }, { id: 'chap8', label: "8. Risco/Retorno" }, { id: 'chap9', label: "9. Tipos de Investimento" }, { id: 'chap10', label: "10. Tipos de Contas" }] },
            { title: "Parte 3: A Bolsa em Detalhe", items: [{ id: 'chap11', label: "11. A Ação" }, { id: 'chap12', label: "12. Análise Fundamental" }, { id: 'chap13', label: "13. Ratios Chave" }, { id: 'chap14', label: "14. Dividendos" }, { id: 'chap15', label: "15. Construindo seu Portfólio" }, { id: 'chap16', label: "16. Psicologia" }] },
            { title: "Parte 4: Seus Objetivos", items: [{ id: 'chap17', label: "17. Objetivos" }, { id: 'chap18', label: "18. Aposentadoria" }] },
            { title: "Parte 5: Estratégias Avançadas", items: [{ id: 'chap19', label: "19. Fund. vs Téc." }, { id: 'chap20', label: "20. Ordens de Bolsa" }, { id: 'chap21', label: "21. Impostos (ACB)" }, { id: 'chap22', label: "22. Rebalanceamento" }, { id: 'chap23', label: "23. Armadilhas Psicológicas" }] },
            { title: "Anexo", items: [{ id: 'chap24', label: "24. Glossário" }, { id: 'bonus_psych', label: "Bônus: Psicologia" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Introdução: Por que este guia?",
            content: [
                { type: 'p', text: "Você tem em mãos uma ferramenta poderosa: <strong>Nexus Finance Pro</strong>. É uma calculadora sofisticada, um gestor de portfólio preciso e um planejador de dívida estratégico, tudo em um." },
                { type: 'p', text: "Mas uma ferramenta, por mais poderosa que seja, só é eficaz se o artesão souber como e por que usá-la." },
                { type: 'p', text: "Este guia é o <strong>\"Porquê\"</strong>. Nexus Finance Pro é o <strong>\"Como\"</strong>." },
                { type: 'p', text: "Você não precisa ser um especialista para usar o Nexus Finance Pro, mas entender os conceitos fundamentais transformará sua experiência. Você não vai apenas clicar em botões; você executará um plano." },
                {
                    type: 'box', style: 'info', title: 'O que você aprenderá', content: [
                        { type: 'p', text: "Este guia ensinará os princípios atemporais da gestão do dinheiro. Cobriremos:" },
                        { type: 'ul', items: ["<strong>Psicologia:</strong> Como dominar suas emoções para evitar erros caros.", "<strong>Os Fundamentos:</strong> Construir um orçamento sólido, criar um fundo de emergência e atacar suas dívidas.", "<strong>Investir:</strong> Entender por que e como fazer seu dinheiro trabalhar para você.", "<strong>A Bolsa:</strong> Desmistificar ações, ETFs e índices financeiros para investir com confiança.", "<strong>Estratégias Avançadas:</strong> Conceitos de nível intermediário para otimizar seus impostos e gestão de portfólio."] }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Capítulo 1: A Mentalidade Certa",
            content: [
                { type: 'p', text: "Bem-vindo a este guia! Antes de falar de números, índices ou estratégias, devemos falar da ferramenta mais poderosa à sua disposição: sua mentalidade." },
                { type: 'p', text: "A gestão financeira não é uma questão de sorte. Não é um segredo reservado a uma elite. É um conjunto de hábitos, decisões e sistemas que qualquer um pode aprender e aplicar." },
                { type: 'p', text: "O maior obstáculo não é a falta de dinheiro, é a psicologia. É o medo de olhar para as suas contas, a procrastinação ou a sensação de ser \"ruim com números\"." },
                {
                    type: 'box', style: 'warning', title: 'Mitos a Desmascarar', content: [
                        { type: 'ul', items: ["<strong>Mito 1: \"É preciso dinheiro para ganhar dinheiro.\"</strong><br>Falso. É preciso hábitos para ganhar dinheiro. Uma pessoa que economiza 100$ por mês com um plano vencerá sempre uma pessoa que ganha 10.000$ por mês mas gasta 10.100$.", "<strong>Mito 2: \"Investir é como apostar.\"</strong><br>Falso. A especulação a curto prazo (day trading) é como apostar. Investir a longo prazo, baseado na análise da saúde da empresa, é participar do crescimento econômico global. É possuir uma parte de um negócio real.", "<strong>Mito 3: \"Sou muito jovem / muito velho para começar.\"</strong><br>Falso. Se você é jovem, seu maior ativo é o tempo (veja o Capítulo 7 sobre juros compostos). Se você é mais velho, seu maior ativo é (frequentemente) maiores rendimentos e disciplina. O melhor momento para começar foi há 10 anos. O segundo melhor momento é hoje."] }
                    ]
                },
                { type: 'p', text: "<strong>Seu Objetivo Principal:</strong> INDEPENDÊNCIA Financeira. Não se trata de ficar rico para comprar um carro de luxo. Trata-se de ter ativos (investimentos) suficientes trabalhando para você, para que você não precise mais trabalhar para pagar suas contas. O trabalho torna-se uma escolha, não uma obrigação." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Capítulo 2: O Orçamento, Seu GPS",
            content: [
                { type: 'p', text: "Você não pode chegar a um destino se não sabe onde está. O orçamento é o seu \"Você está aqui\" no mapa financeiro. Não é uma prisão projetada para impedir que você gaste; é uma ferramenta projetada para lhe dar permissão para gastar sem culpa." },
                { type: 'p', text: "Um orçamento responde a uma única pergunta: <strong>Para onde vai o meu dinheiro?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'O Orçamento Base Zero', content: [
                        { type: 'p', text: "O método mais eficaz é o \"Orçamento Base Zero\". A ideia é simples: no final do mês, a diferença entre seus rendimentos e suas saídas de dinheiro deve ser zero. Isso não significa que não lhe sobre nada! Significa que cada dólar recebeu uma missão." },
                        { type: 'p', text: "<code>Rendimentos - Despesas - Poupança - Investimentos = 0$</code>" },
                        { type: 'p', text: "Se você ganha 3000$ e tem 2500$ em despesas, sobram 500$. Com um orçamento base zero, você decide antecipadamente o que esses 500$ farão: \"200$ para fundo de emergência\", \"100$ para TFSA\", \"200$ para fundo de férias\"." }
                    ]
                },
                { type: 'p', text: "<strong>Aja:</strong> Use o <strong>Módulo de Orçamento</strong> do Nexus Finance Pro. Liste TODOS os seus rendimentos e TODAS as suas despesas, até o café de 3$. Use frequências (anual, mensal) para que a ferramenta calcule seu fluxo de caixa mensal exato. Este é o primeiro passo de todo o seu plano." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Capítulo 3: Ativos vs Passivos",
            content: [
                { type: 'p', text: "Este é o conceito mais importante em finanças pessoais, popularizado por Robert Kiyosaki em \"Pai Rico, Pai Pobre\"." },
                {
                    type: 'box', style: 'info', title: 'A Definição Simples', content: [
                        { type: 'p', text: "Um <strong>ATIVO</strong> coloca dinheiro no seu bolso." },
                        { type: 'p', text: "Um <strong>PASSIVO</strong> tira dinheiro do seu bolso." }
                    ]
                },
                { type: 'p', text: "É simples assim. O objetivo da sua vida financeira é usar seus rendimentos para comprar ativos, para que esses ativos gerem novos rendimentos para comprar ainda mais ativos." },
                {
                    type: 'grid', items: [
                        { title: "Exemplos de Ativos", text: "Uma ação que paga dividendo. Um ETF que ganha valor. Um imóvel de aluguel rentável." },
                        { title: "Exemplos de Passivos", text: "Um empréstimo de carro. Saldo de cartão de crédito. Empréstimo estudantil." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'A Armadilha da Residência Principal', content: [
                        { type: 'p', text: "\"Minha casa é meu maior ativo!\" Sério? Todo mês, ela tira dinheiro do seu bolso (hipoteca, impostos, seguro, reparos). Pela definição estrita, sua residência principal é um passivo." },
                        { type: 'p', text: "Pode tornar-se um ativo no dia em que você a vender (se tiver ganho valor) ou se alugar o porão (gera renda). Mas não confunda um passivo (que lhe custa dinheiro) com um investimento." }
                    ]
                },
                { type: 'p', text: "Seu <strong>Patrimônio Líquido</strong> é a medida da sua saúde financeira. É isso que você vê no seu Painel (Dashboard)." },
                { type: 'p', text: "<strong>Patrimônio Líquido = Ativos Totais - Passivos Totais</strong>. Seu objetivo é fazer crescer esse número, mês após mês, ano após ano." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Capítulo 4: O Fundo de Emergência",
            content: [
                { type: 'p', text: "A vida é imprevisível. O carro quebra. O telhado goteja. Você perde o emprego. A diferença entre um contratempo e um desastre financeiro chama-se fundo de emergência." },
                { type: 'p', text: "Um fundo de emergência é o seu escudo. É dinheiro separado exclusivamente para emergências. Esse dinheiro não é investido, não está lá para \"render\". Está lá para ser líquido, acessível e chato." },
                {
                    type: 'box', style: 'info', title: 'Quanto?', content: [
                        { type: 'p', text: "O objetivo padrão é ter de <strong>3 a 6 meses</strong> de despesas de subsistência." },
                        { type: 'p', text: "Calcule quanto precisa gastar todo mês para viver (aluguel/hipoteca, comida básica, contas, transporte mínimo). Se essa quantia for 2.500$, seu fundo de emergência deve estar entre 7.500$ e 15.000$." }
                    ]
                },
                { type: 'p', text: "<strong>Onde colocá-lo?</strong> Em um local seguro e acessível, mas não muito acessível (não na sua conta corrente diária). Uma Conta Poupança de Alto Rendimento (HISA) é ideal. Está separada das suas operações diárias, mas você pode acessá-la em 1 ou 2 dias." },
                { type: 'p', text: "<strong>Prioridade Absoluta:</strong> Antes de pagar dívidas (exceto mínimos) e antes de investir um único dólar na bolsa, construa um \"mini-fundo\" de 1.000$. Esse dinheiro evitará que você se endivide mais na próxima vez que um pneu furar." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Capítulo 5: Gerenciar a Dívida",
            content: [
                { type: 'p', text: "Existem dois tipos de dívida: dívida \"boa\" e dívida \"ruim\"." },
                { type: 'ul', items: ["<strong>Dívidas boas (Dívidas de investimento):</strong> Dívidas usadas para comprar um ativo que ganha valor. Ex: Uma hipoteca (para comprar imóveis), um empréstimo estudantil (para investir em si mesmo).", "<strong>Dívidas ruins (Dívidas de consumo):</strong> Dívidas usadas para comprar um passivo que perde valor. Ex: Um empréstimo de carro, saldo de cartão de crédito para férias ou restaurantes."] },
                { type: 'p', text: "Seu objetivo é pagar as dívidas ruins o mais rápido possível. Para isso, existem duas estratégias principais, que pode simular no Módulo de Planejamento." },
                {
                    type: 'box', style: 'info', title: 'Estratégia 1: A Avalanche', content: [
                        { type: 'p', text: "Lista todas as suas dívidas por taxa de juros decrescente. Coloca todo o dinheiro extra na dívida com a taxa mais alta." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Este método economiza a maior quantidade de dinheiro em juros. É o mais eficiente matematicamente." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Estratégia 2: A Bola de Neve', content: [
                        { type: 'p', text: "Lista todas as suas dívidas por saldo crescente (do menor para o maior). Ataca a dívida menor com todo o seu dinheiro extra." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Obtém \"vitórias\" rápidas. Pagar uma dívida pequena cria um imenso impulso psicológico e motivação para continuar." }
                    ]
                },
                { type: 'p', text: "Qual método escolher? Aquele que o mantiver motivado. O Módulo de Planejamento mostrará o impacto de ambos." }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Capítulo 6: Por que Investir?",
            content: [
                { type: 'p', text: "Se já tem um orçamento e um fundo de emergência, parabéns! Terminou o \"modo defesa\". É hora de mudar para o \"modo ataque\": investir." },
                { type: 'p', text: "Poupar (colocar dinheiro numa conta) protege-o. Investir (comprar ativos) enriquece-o." },
                {
                    type: 'box', style: 'warning', title: 'Seu Inimigo Nº 1: A Inflação', content: [
                        { type: 'p', text: "A inflação é o aumento geral dos preços ao longo do tempo. Se a inflação for de 3% ao ano, significa que 100$ de hoje só comprarão bens e serviços no valor de 97$ no próximo ano. Seu dinheiro <strong>perde</strong> valor se dormir." },
                        { type: 'p', text: "Se deixar 10.000$ numa conta corrente (0%) durante 25 anos com uma inflação média de 2,5%, seu \"poder de compra\" será apenas de 5.394$. Terá perdido quase metade do seu dinheiro, sem fazer nada." }
                    ]
                },
                { type: 'p', text: "O objetivo de investir é simples: obter um retorno superior à inflação para que seu poder de compra cresça ao longo do tempo." },
                { type: 'p', text: "O Nexus Finance Pro ajuda-o a ver este impacto. Nos módulos de Valor Futuro e Aposentadoria, a ferramenta calcula sempre o \"Valor Nominal\" (montante total) e o \"Poder de Compra Real\" (o que esse dinheiro valerá realmente após a inflação)." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Capítulo 7: Juros Compostos",
            content: [
                { type: 'p', text: "Albert Einstein supostamente disse que os juros compostos são \"a oitava maravilha do mundo\". É o motor da criação de riqueza." },
                { type: 'p', text: "Juros compostos são simplesmente ganhar juros sobre seus juros. É um efeito de bola de neve." },
                {
                    type: 'box', style: 'success', title: 'Exemplo Simples', content: [
                        { type: 'ul', items: ["Ano 1: Ganha 8% de 10.000$ (800$). Saldo: 10.800$.", "Ano 2: Ganha 8% de 10.800$ (864$). Saldo: 11.664$.", "Ano 3: Ganha 8% de 11.664$ (933$). Saldo: 12.597$."] },
                        { type: 'p', text: "O seu dinheiro trabalha para si, e os \"empregados\" (os seus ganhos) começam a trabalhar eles mesmos e a ter filhos!" }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'O Fator Tempo', content: [
                        { type: 'p', text: "A variável mais importante é o tempo. Veja a diferença:" },
                        { type: 'p', text: "<strong>Alex (25 a 35):</strong> Investe 5000$/ano durante 10 anos (Total 50k).<br><strong>Ben (35 a 65):</strong> Investe 5000$/ano durante 30 anos (Total 150k)." },
                        { type: 'p', text: "Aos 65 (retorno 8%):<br>Alex (que só colocou 50k) terá: <strong>1.028.000$</strong><br>Ben (que colocou 150k) terá: <strong>611.000$</strong>" },
                        { type: 'p', text: "Alex ganha, simplesmente porque começou 10 anos antes. Seus 50.000$ tiveram mais tempo para \"compor-se\"." }
                    ]
                },
                { type: 'p', text: "<strong>Aja:</strong> Vá ao Módulo de Valor Futuro. Insira seu capital inicial, contribuições mensais e um retorno (Ex: 8%). Veja o que o gráfico mostra a 30 anos. Ficará surpreso com a curva exponencial." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Capítulo 8: O Espectro Risco/Retorno",
            content: [
                { type: 'p', text: "Não há almoço grátis em finanças. A regra de ouro é: <strong>Quanto maior o retorno potencial, maior o risco de perda.</strong>" },
                { type: 'p', text: "O seu trabalho como investidor não é evitar o risco, mas geri-lo." },
                {
                    type: 'box', style: 'info', title: 'O Espectro', content: [
                        { type: 'ul', items: ["<strong>Baixo Risco / Baixo Retorno:</strong> Contas poupança, CIGs, Títulos do Tesouro. Capital garantido, mas mal supera a inflação.", "<strong>Risco Médio / Retorno Médio:</strong> ETFs de índice amplo (S&P 500, TSX), ações \"blue chip\".", "<strong>Alto Risco / Alto Retorno:</strong> Ações individuais, pequenas empresas, criptomoedas."] }
                    ]
                },
                { type: 'p', text: "<strong>O que é o Risco?</strong> O risco é <strong>volatilidade</strong>. É a velocidade a que o preço sobe e desce. Se o seu portfólio perder 30% em 3 meses, entrará em pânico e venderá? É crucial conhecer-se a si mesmo antes que a queda aconteça." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Capítulo 9: Tipos de Investimento",
            content: [
                { type: 'p', text: "Aqui estão os \"tijolos de Lego\" básicos que pode usar para construir o seu portfólio." },
                { type: 'ul', items: ["<strong>1. Ações (Equities):</strong> Comprar uma ação (`AAPL`, `TD`) é comprar uma pequena parte de uma empresa. Ganha via Apreciação (preço sobe) e Dividendos (parte dos lucros).", "<strong>2. Obrigações (Bonds):</strong> Emprestar dinheiro a um governo ou empresa por um juro fixo. Geralmente mais seguros que as ações.", "<strong>3. ETFs (Exchange Traded Funds):</strong> Muitas vezes o melhor ponto de partida. Um ETF é uma \"cesta\" que contém centenas de ações ou obrigações, mas compra-se como uma única ação."] },
                { type: 'p', text: "Com um ETF (Ex: `VFV` para S&P 500), possui uma parte minúscula das 500 maiores empresas dos EUA. É diversificação instantânea a um custo muito baixo." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Capítulo 10: Tipos de Contas (Canadá)",
            content: [
                { type: 'p', text: "Antes de comprar um investimento, deve escolher o \"recipiente\" fiscal. TFSA e RRSP <strong>não</strong> são investimentos, são contas com benefícios fiscais." },
                {
                    type: 'box', style: 'success', title: '1. TFSA (Conta Poupança Livre de Impostos)', content: [
                        { type: 'p', text: "Investe dinheiro após impostos (líquido). <strong>Benefício:</strong> TODOS os ganhos (ganhos de capital, dividendos) são <strong>100% livres de impostos</strong>, para toda a vida." },
                        { type: 'p', text: "<strong>Retiradas:</strong> Livres de impostos. O espaço de contribuição retorna no ano seguinte. Ideal para: Fundo de emergência, Entrada para casa, Aposentadoria." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. RRSP (Plano Registrado de Poupança para Aposentadoria)', content: [
                        { type: 'p', text: "Investe dinheiro antes de impostos. <strong>Benefício:</strong> A contribuição é deduzida do seu rendimento tributável (grande reembolso de impostos)." },
                        { type: 'p', text: "<strong>Retiradas:</strong> Tributáveis na aposentadoria. Ideal para: Poupança de aposentadoria a longo prazo se tiver rendimentos elevados." }
                    ]
                },
                { type: 'p', text: "<strong>3. Conta Não Registrada:</strong> Conta básica, sem benefício fiscal. Tributável anualmente sobre dividendos. Os ganhos de capital são tributáveis apenas na venda." },
                { type: 'p', text: "<strong>A Estratégia Vencedora:</strong> 1. Maximizar TFSA. 2. Maximizar RRSP. 3. Investir em Não Registrada (Dinheiro)." }
            ]
        },
        chap10_intl: {
            id: 'chap10',
            title: "Capítulo 10: Tipos de Contas (Internacional)",
            content: [
                { type: 'p', text: "Os governos de todo o mundo oferecem incentivos fiscais para encorajar a poupança. Embora os nomes mudem (401k nos EUA, ISA no Reino Unido), os conceitos centrais permanecem os mesmos." },
                {
                    type: 'box', style: 'success', title: '1. Contas Livres de Impostos', content: [
                        { type: 'p', text: "Investe dinheiro 'após impostos'. <strong>Vantagem:</strong> Os ganhos futuros são 100% livres de impostos." },
                        { type: 'p', text: "<strong>Exemplos:</strong> Roth IRA (EUA), ISA (Reino Unido), TFSA (Canadá)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Contas com Impostos Diferidos', content: [
                        { type: 'p', text: "Investe dinheiro 'antes de impostos'. <strong>Vantagem:</strong> Dedução fiscal imediata, mas paga impostos ao retirar." },
                        { type: 'p', text: "<strong>Exemplos:</strong> 401k / Traditional IRA (EUA), RRSP (Canadá)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Conta Tributável:</strong> Sem vantagem fiscal. Paga impostos sobre dividendos e ganhos de capital todos os anos." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Capítulo 11: A Ação",
            content: [
                { type: 'p', text: "Comprar uma ação é comprar uma parte de propriedade de uma empresa. Se uma empresa tem 1.000.000 de ações e você compra 100, possui 0,01% dessa empresa." },
                { type: 'p', text: "Agora é um proprietário. Tem direito a uma parte dos lucros (dividendos)." },
                { type: 'p', text: "<strong>A Bolsa:</strong> É um grande mercado público onde o preço é determinado pela oferta e procura. Se as pessoas esperam grandes lucros futuros (ex: novo iPhone), a procura sobe e o preço sobe." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Capítulo 12: Análise Fundamental",
            content: [
                { type: 'p', text: "A análise fundamental é a arte de avaliar a saúde financeira real e o valor de uma empresa. O objetivo é encontrar empresas extraordinárias a um preço comum." },
                { type: 'p', text: "Olhamos para as contas:" },
                { type: 'ul', items: ["<strong>Balanço Patrimonial (Balance Sheet):</strong> O que a empresa possui (ativos) e deve (passivos).", "<strong>Demonstração de Resultados (Income Statement):</strong> Vendas, despesas e lucros.", "<strong>Fluxo de Caixa (Cash Flow):</strong> Dinheiro que realmente entra e sai."] },
                { type: 'p', text: "O <strong>Módulo de Análise de Ações</strong> do Nexus Pro é uma ferramenta simplificada de análise fundamental." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Capítulo 13: Entendendo os Ratios",
            content: [
                { type: 'p', text: "Os ratios (índices) são atalhos para entender a saúde de uma empresa sem ler 100 páginas de relatórios. O Nexus Pro usa estes ratios para o seu \"Nexus Score\"." },
                { type: 'p', text: "<em>Nota: Para ratios imobiliários (LTV, Cap Rate), veja o guia imobiliário.</em>" },
                {
                    type: 'box', style: 'info', title: '1. Valorização', content: [
                        { type: 'ul', items: ["<strong>P/L (Preço/Lucro):</strong> Preço por 1$ de lucro. (20x = Paga 20$ por 1$ de lucro).", "<strong>PEG Ratio:</strong> P/L dividido pelo crescimento. Se < 1.0, a ação está potencialmente subvalorizada."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Rentabilidade', content: [
                        { type: 'ul', items: ["<strong>Margem Líquida:</strong> % de lucro puro em cada venda.", "<strong>ROE (Retorno sobre Patrimônio):</strong> Eficiência usando o dinheiro dos acionistas. > 15% é excelente."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Saúde Financeira', content: [
                        { type: 'ul', items: ["<strong>Dívida/Patrimônio (Debt/Equity):</strong> Mede o endividamento. Se > 1.0, tenha cuidado.", "<strong>Liquidez Corrente:</strong> Capacidade de pagar contas a curto prazo."] }
                    ]
                },
                { type: 'p', text: "Para entender completamente os ratios de ações, é útil compará-los com a sua própria gestão financeira pessoal. Uma empresa é simplesmente uma casa em grande escala. Abaixo comparamos cada conceito de 'Negócio' com o seu equivalente de 'Família'." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Capítulo 14: Investimento por Dividendos",
            content: [
                { type: 'p', text: "Estratégia focada em gerar rendimento passivo. Paga-lhe por esperar. É como possuir um pomar: não quer vender as árvores, quer colher as maçãs." },
                { type: 'p', text: "<strong>Dividend Yield (Rendimento):</strong> (Dividendo Anual / Preço Ação) * 100. Se uma ação custa 100$ e paga 4$, o rendimento é de 4%." },
                {
                    type: 'box', style: 'warning', title: 'A Armadilha do Rendimento (> 12%)', content: [
                        { type: 'p', text: "Regra Nexus: Qualquer Yield > 12% recebe uma pontuação de 0. Porquê?" },
                        { type: 'p', text: "Quando o preço de uma ação cai a pique (porque a empresa vai mal), o rendimento sobe mecanicamente. Um rendimento de 15% grita muitas vezes que o dividendo será cortado em breve. É uma \"Yield Trap\"." }
                    ]
                },
                { type: 'p', text: "<strong>Crescimento do Dividendo:</strong> A verdadeira magia é comprar empresas que <strong>aumentam</strong> o seu dividendo todos os anos (Aristocratas). No Módulo de Investimento, pode rastrear o seu rendimento passivo separadamente." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Capítulo 15: Construindo seu Portfólio",
            content: [
                { type: 'p', text: "O seu portfólio é a coleção de todos os seus investimentos. Construí-lo requer duas coisas: Diversificação e Alocação." },
                {
                    type: 'box', style: 'concept', title: 'Diversificação', content: [
                        { type: 'p', text: "Não coloque todos os ovos no mesmo cesto. Diversifique por <strong>Classe de Ativo</strong> (Ações/Obrigações), <strong>Setor</strong> (Tecnologia, Banca, Energia) e <strong>Geografia</strong> (Canadá, EUA, Mundo). Os ETFs oferecem isto instantaneamente." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Alocação de Ativos', content: [
                        { type: 'p', text: "É a % do seu dinheiro em Ações (Risco/Crescimento) vs Obrigações (Segurança/Estabilidade)." },
                        { type: 'ul', items: ["<strong>Jovem (20-35):</strong> Agressivo. Ex: 90% Ações / 10% Obrigações.", "<strong>Meio da Carreira (35-50):</strong> Equilibrado. Ex: 70% Ações / 30% Obrigações.", "<strong>Aposentadoria:</strong> Conservador. Ex: 40% Ações / 60% Obrigações."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Capítulo 16: Psicologia do Investidor",
            content: [
                { type: 'p', text: "Investir é simples, mas não fácil. O seu pior inimigo é você mesmo (as suas emoções)." },
                { type: 'ul', items: ["<strong>Ganância (FOMO):</strong> Comprar quando tudo sobe, no topo, por medo de perder algo. Resultado: Compra caro.", "<strong>Medo:</strong> Vender quando tudo cai. Resultado: Vende barato e torna a perda permanente."] },
                {
                    type: 'box', style: 'success', title: 'A Solução: DCA (Dollar-Cost Averaging)', content: [
                        { type: 'p', text: "Invista a mesma quantia (ex: 500$) todos os meses, aconteça o que acontecer, automaticamente." },
                        { type: 'p', text: "Quando o mercado desce, os seus 500$ compram MAIS ações. Quando sobe, compram MENOS. Beneficia das quedas sem emoções." }
                    ]
                },
                { type: 'p', text: "<strong>Ir mais longe:</strong> Foi adicionado um capítulo extra dedicado inteiramente à <strong>Psicologia do Dinheiro</strong> (baseado no livro de Morgan Housel) no final deste guia. Não perca!" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Capítulo 17: Definir Objetivos",
            content: [
                { type: 'p', text: "Não poupamos apenas por poupar. Poupamos para um objetivo. Um bom objetivo é <strong>S.M.A.R.T.</strong>: Específico, Mensurável, Atingível, Realista, Temporal." },
                { type: 'p', text: "Mal: \"Quero ser rico\".<br>Bem: \"Quero 50.000$ para uma entrada em 3 anos.\"" },
                { type: 'p', text: "<strong>Aja:</strong> O <strong>Módulo de Objetivos</strong> calcula exatamente quanto deve poupar por mês para alcançar os seus sonhos." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Capítulo 18: Planejamento para Aposentadoria",
            content: [
                { type: 'p', text: "É o momento em que o seu portfólio paga o seu estilo de vida." },
                {
                    type: 'box', style: 'info', title: 'A Regra dos 4%', content: [
                        { type: 'p', text: "Historicamente, pode retirar <strong>4%</strong> do seu portfólio anualmente sem que o dinheiro acabe durante 30 anos." },
                        { type: 'p', text: "Cálculo rápido da quantia necessária: <strong>Despesas Anuais Desejadas x 25</strong>." },
                        { type: 'p', text: "Ex: Para viver com 40.000$/ano: 40.000 x 25 = <strong>1.000.000$</strong>." }
                    ]
                },
                { type: 'p', text: "Utilize o <strong>Módulo de Aposentadoria</strong> para simular a sobrevivência do capital sob diferentes cenários." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Capítulo 19: Fundamental vs Técnico",
            content: [
                { type: 'p', text: "Um duelo de filosofias." },
                { type: 'ul', items: ["<strong>Fundamental (Investidor):</strong> Pergunta: \"É uma boa empresa?\" Ferramentas: Balanços, Ratios, Gestão. Objetivo: Longo prazo.", "<strong>Técnico (Trader):</strong> Pergunta: \"Para onde vai o preço?\" Ferramentas: Gráficos, Médias Móveis, RSI. Objetivo: Curto prazo (Timing)."] },
                { type: 'p', text: "<strong>Nossa visão:</strong> Para construir riqueza, Fundamental é rei. Técnico pode ajudar no timing, mas nunca deve ser a única base." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Capítulo 20: Ordens de Bolsa (O Guia Completo)",
            content: [
                { type: 'p', text: "Saber o que comprar é uma coisa, saber como comprar é outra. Aqui estão os 5 tipos de ordens essenciais para controlar seus preços de entrada e saída." },
                {
                    type: 'box', style: 'info', title: '1. Ordem de Mercado (Market)', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"Quero isto agora mesmo, não importa o preço exato.\"" },
                        { type: 'p', text: "<strong>Como funciona:</strong> A ordem é executada imediatamente ao melhor preço disponível dos vendedores." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Velocidade garantida. Obtém a ação de certeza." },
                        { type: 'p', text: "<strong>Risco:</strong> Não controla o preço. Se o mercado for rápido (volatilidade), pode pagar mais do que esperava." },
                        { type: 'p', text: "<strong>Exemplo concreto:</strong> Ação ABC está a 50,00$. Coloca uma ordem de mercado. Uma fração de segundo depois, o preço salta para 50,05$. A sua ordem é executada a 50,05$. O senhor paga 5 cêntimos a mais do que viu." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Ordem Limitada (Limit)', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"Quero comprar, mas não mais caro que X$.\" (ou vender não mais barato que X)." },
                        { type: 'p', text: "<strong>Como funciona:</strong> Define um preço máximo. A ordem só é executada se o mercado tocar no seu preço ou melhor." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Controlo total do preço. Sem más surpresas." },
                        { type: 'p', text: "<strong>Risco:</strong> Se a ação nunca descer ao seu preço limite, nunca a compra. Execução não garantida." },
                        { type: 'p', text: "<strong>Exemplo concreto:</strong> Ação XYZ está a 102$. Demasiado cara. Põe uma ordem Limit para comprar a 100$.<br><em>Cenário A:</em> Ação desce a 99$. Compra a 99$ (ainda melhor).<br><em>Cenário B:</em> Ação sobe a 105$. A sua ordem fica à espera e não compra nada." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Ordem Stop (Stop Loss)', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"A saída de emergência.\" (Torna-se ordem de Mercado ao disparar)." },
                        { type: 'p', text: "<strong>Como funciona:</strong> É uma ordem adormecida. Se o preço cair e tocar no seu limiar (ex: 90$), a ordem acorda e vende tudo imediatamente ao preço de mercado." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Protege de um grande colapso sem estar a olhar para o ecrã." },
                        { type: 'p', text: "<strong>Risco:</strong> Num flash crash, pode vender muito mais baixo que o seu limiar (ex: dispara a 90$ mas vende a 85$)." },
                        { type: 'p', text: "<strong>Exemplo concreto:</strong> Comprou a 100$. Stop em 90$. Más notícias, ação em queda livre. Cruza 90$ sem parar. Ordem dispara e vende ao primeiro comprador a 88$. Saiu, mas com um pouco mais de perda do que o planeado." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Ordem Stop Limit', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"A saída de emergência precisa.\" (Torna-se ordem Limit ao disparar)." },
                        { type: 'p', text: "<strong>Como funciona:</strong> Define dois preços: o gatilho (Stop) e o preço mínimo aceite (Limit)." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Garante que não venderá a um preço ridículo durante o pânico." },
                        { type: 'p', text: "<strong>Risco:</strong> Se o preço colapsar abaixo do seu limite, não vende. Fica com a ação a cair." },
                        { type: 'p', text: "<strong>Exemplo concreto:</strong> Comprou a 100$. Stop em 90$, Limit em 89$. Ação cai a 90$. Dispara venda. Mas mercado salta para 85$ (gap). Como 85$ está abaixo do seu limite de 89$, a ordem não vende. Continua a possuir a ação a 85$." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Trailing Stop', content: [
                        { type: 'p', text: "<strong>O conceito:</strong> \"Deixar correr os ganhos.\"" },
                        { type: 'p', text: "<strong>Como funciona:</strong> O preço de venda sobe automaticamente com a ação, mas nunca desce. Define uma distância ($ ou %)." },
                        { type: 'p', text: "<strong>Vantagem:</strong> Garante lucros sem limitar a subida." },
                        { type: 'p', text: "<strong>Exemplo concreto:</strong> Comprou a 100$ com Trailing Stop de 5$.<br>Ação sobe a 110$. Stop sobe a 105$.<br>Ação sobe a 150$. Stop é agora 145$.<br>Ação cai a 140$. Assim que toca 145$, vende. Garantiu 45$ de lucro automaticamente." }
                    ]
                },
                {
                    type: 'box', style: 'dark', title: 'Nota Importante: Duração', content: [
                        { type: 'p', text: "Para ordens Limit e Stop, deve escolher quanto tempo vive a ordem:" },
                        { type: 'ul', items: ["<strong>Dia (Day):</strong> Se não for executada até às 16:00 (fecho), é cancelada.", "<strong>GTC (Good 'Til Canceled):</strong> Permanece ativa (geralmente 60-90 dias) até que a cancele manualmente."] }
                    ]
                },
                { type: 'p', text: "<strong>Nota para curiosos:</strong> Existem ordens mais complexas para traders ativos, como OCO (One Cancels the Other), mas para um investidor a longo prazo, as 5 acima são tudo o que precisa." }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Capítulo 21: Impostos Avançados (ACB)",
            content: [
                { type: 'p', text: "Crucial para contas <strong>Não Registradas (Tributáveis)</strong>. Quando vende, paga impostos sobre: <code>Preço Venda - ACB</code>." },
                {
                    type: 'box', style: 'info', title: 'O ACB (Custo Base Ajustado)', content: [
                        { type: 'p', text: "É o termo fiscal para o seu custo médio. É o custo médio ponderado de todas as suas ações, incluindo comissões. Deve rastrear isto você mesmo para os impostos." },
                        { type: 'p', text: "Cálculo: (Custo Total de todas as compras) / (Número Total de ações)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro calcula automaticamente uma estimativa do seu ACB e ganhos não realizados no <strong>Módulo de Investimento</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Capítulo 22: Rebalanceamento do Portfólio",
            content: [
                { type: 'p', text: "Se o seu objetivo é 70% ações e 30% obrigações, e as ações sobem (agora 80%), o seu portfólio está demasiado arriscado." },
                { type: 'p', text: "<strong>Rebalanceamento:</strong> Vender o que subiu (ações) para comprar o que desceu (obrigações) para voltar ao 70/30." },
                { type: 'p', text: "É o auge da disciplina: força-o matematicamente a <strong>vender caro e comprar barato</strong>." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Capítulo 23: Armadilhas Psicológicas (Vieses)",
            content: [
                { type: 'ul', items: ["<strong>Viés de Confirmação:</strong> Ler apenas o que confirma a nossa opinião sobre uma ação (ex: Tesla) e ignorar os críticos.", "<strong>Ancoragem:</strong> Pensar que uma ação está \"barata\" só porque estava a 300$ e agora está a 150$. O passado não importa.", "<strong>Aversão à Perda:</strong> Vender vencedores demasiado cedo (para garantir lucros) e manter perdedores (esperando que recuperem). Muitas vezes deve fazer o oposto: cortar as perdas!"] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Capítulo 24: Glossário de Termos Chave",
            content: [
                { type: 'p', text: "Aqui está uma revisão rápida dos termos que encontrará." },
                {
                    type: 'grid', items: [
                        { title: "Asset (Ativo)", text: "Objeto de valor ou fonte de rendimento." },
                        { title: "Liability (Passivo)", text: "Algo que tira dinheiro do seu bolso." },
                        { title: "Ação", text: "Parte de propriedade numa empresa." },
                        { title: "Obrigação (Bond)", text: "Empréstimo a uma empresa/governo em troca de juros." },
                        { title: "Dividendo", text: "Parte dos lucros distribuída aos acionistas." },
                        { title: "ETF", text: "Cesta diversificada de investimentos." },
                        { title: "Volatilidade", text: "Amplitude das variações de preço (Risco)." },
                        { title: "EPS", text: "Earnings Per Share (Lucro por Ação)." },
                        { title: "P/L (P/E)", text: "Preço/Lucro. Indica se a ação está cara ou barata." },
                        { title: "TFSA", text: "Conta 100% livre de impostos (Canadá)." },
                        { title: "RRSP", text: "Conta com impostos diferidos (Canadá)." },
                        { title: "ACB", text: "Adjusted Cost Base (Custo fiscal médio)." },
                        { title: "Net Worth", text: "Patrimônio Líquido (Ativos - Passivos)." }
                    ]
                },
                { type: 'p', text: "Este curso deu-lhe os fundamentos. Nexus Finance Pro dá-lhe o poder de aplicá-los. O seu futuro financeiro está agora nas suas mãos. Boa sorte no planeamento!" }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bônus: A Psicologia do Dinheiro",
            content: [
                { type: 'p', text: "<strong>(Baseado nos conceitos de Morgan Housel)</strong> - Um dos livros mais importantes sobre psicologia financeira. Recomendamos vivamente a sua leitura!" },
                {
                    type: 'box', style: 'info', title: 'Parte 1: A nossa relação irracional com o dinheiro', content: [
                        { type: 'p', text: "<strong>1. Ninguém é louco:</strong>" },
                        { type: 'p', text: "Todos acreditamos saber como o mundo funciona, mas apenas experimentámos uma fração minúscula. As suas decisões financeiras dependem da sua geração, da inflação da sua juventude e da sua cultura. <em>Não julgue os outros. O que lhe parece 'louco' a si pode ser uma decisão lógica de sobrevivência para outro.</em>" },
                        { type: 'p', text: "<strong>2. Sorte e Risco:</strong>" },
                        { type: 'p', text: "O sucesso de Bill Gates deve-se ao seu génio, mas também à sorte de ir a uma escola com computador (uma possibilidade num milhão). O seu amigo Kent Evans era tão dotado quanto ele, mas morreu antes do secundário (um risco de um num milhão). <em>Seja humilde no sucesso e compassivo no fracasso. A sorte desempenha um grande papel.</em>" },
                        { type: 'p', text: "<strong>3. Nunca suficiente (A armadilha da ganância):</strong>" },
                        { type: 'p', text: "Rajat Gupta tinha tudo, mas queria mais e acabou na prisão por uso de informação privilegiada. <em>Não há razão para arriscar o que tem e precisa pelo que não tem e não precisa.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Parte 2: Construir Riqueza', content: [
                        { type: 'p', text: "<strong>4. Juros Compostos Confusos:</strong>" },
                        { type: 'p', text: "Warren Buffett não é rico por ser o melhor investidor, mas por investir desde criança. <em>Feche a boca e espere. O tempo é a força mais poderosa.</em>" },
                        { type: 'p', text: "<strong>5. Ficar rico vs. Manter-se rico:</strong>" },
                        { type: 'p', text: "Para ficar rico, precisa de ser otimista e correr riscos. Para <strong>manter-se</strong> rico, precisa de ser paranoico, frugal e receoso de perder tudo. <em>A sobrevivência é a chave.</em>" },
                        { type: 'p', text: "<strong>6. Tails, You Win (Eventos extremos):</strong>" },
                        { type: 'p', text: "Tal como na arte, um punhado de 'vencedores' pagam por todos os erros. <em>Pode estar errado 50% do tempo e ainda assim fazer uma fortuna. O que conta é a magnitude dos seus acertos, não a frequência.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Parte 3: Psicologia e Comportamento', content: [
                        { type: 'p', text: "<strong>7. Liberdade (O verdadeiro dividendo):</strong>" },
                        { type: 'p', text: "A forma mais alta de riqueza é acordar de manhã e dizer: 'Hoje posso fazer o que quiser'. O controlo sobre o seu tempo torna-o mais feliz do que bens de luxo." },
                        { type: 'p', text: "<strong>8. A paradoxo do Homem no Carro:</strong>" },
                        { type: 'p', text: "Ninguém está tão impressionado com as suas posses como você mesmo. Se quer respeito, seja humilde e gentil, não compre um carro grande." },
                        { type: 'p', text: "<strong>9. A riqueza é o que não se vê:</strong>" },
                        { type: 'p', text: "A verdadeira riqueza é dinheiro <strong>não</strong> gasto. Não confunda rendimentos elevados (Rich) com patrimônio líquido (Wealthy)." },
                        { type: 'p', text: "<strong>10. Poupe dinheiro (Apenas poupe):</strong>" },
                        { type: 'p', text: "Não precisa de um objetivo específico para poupar. Precisa de poupar para o desconhecido. É a sua margem de segurança." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: 'Parte 4: Uma filosofia realista', content: [
                        { type: 'p', text: "<strong>11. Razoável > Racional:</strong>" },
                        { type: 'p', text: "Não tente ser uma folha de cálculo fria. A melhor estratégia é a que o deixa dormir à noite." },
                        { type: 'p', text: "<strong>12. Nada é grátis:</strong>" },
                        { type: 'p', text: "Os altos retornos do mercado têm um preço, não em dólares, mas em volatilidade e medo. Veja as quedas como uma 'taxa de entrada', não como uma multa." },
                        { type: 'p', text: "<strong>13. A sedução do pessimismo:</strong>" },
                        { type: 'p', text: "O pessimismo soa inteligente, o otimismo soa ingénuo. Seja um 'otimista realista': acredite que as coisas vão melhorar a longo prazo, mas prepare-se para sofrer a curto prazo." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Conclusão: O Método do Autor', content: [
                        { type: 'p', text: "O que Morgan Housel faz com o seu próprio dinheiro:" },
                        { type: 'ul', items: ["O seu objetivo é a independência, não a riqueza máxima.", "Mantém muito dinheiro (margem de segurança).", "Investe em fundos de índice de baixo custo (ETFs).", "Não tenta vencer o mercado, mas manter-se investido o maior tempo possível."] }
                    ]
                }
            ]
        }
    }
};
