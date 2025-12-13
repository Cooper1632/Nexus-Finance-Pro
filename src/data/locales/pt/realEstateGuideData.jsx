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
        title: "Guia Imobiliário",
        sections: [
            { title: "Fundamentos", items: [{ id: 'intro', label: '1. A Filosofia' }, { id: 'module', label: '2. Guia do Módulo' }] },
            { title: "Análise Financeira", items: [{ id: 'flux', label: '3. O Cashflow' }, { id: 'ratios', label: '4. Rácios Chave' }, { id: 'risque', label: '5. Análise de Risco' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Estratégias Pro' }, { id: 'fiscalite', label: '7. Fiscalidade' }, { id: 'glossaire', label: '8. Glossário Completo' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introdução: Alavancagem e Riqueza",
            icon: 'intro',
            content: [
                { type: 'p', text: "O investimento imobiliário é único porque utiliza a <strong>alavancagem</strong> (a hipoteca) para amplificar seus ganhos. Você utiliza o dinheiro do banco (frequentemente 80% do preço) para controlar um ativo a 100%, enquanto aproveita 100% da valorização e do free cashflow." },
                { type: 'p', text: "No entanto, o setor imobiliário não perdoa. Um erro de cálculo de 100$ por mês pode se tornar uma perda de 30.000$ em 25 anos. É por isso que o módulo <strong>Imobiliário</strong> do Nexus Finance Pro foi criado: para transformar estimativas vagas em matemática precisa." },
                {
                    type: 'box', style: 'pro', title: 'O Segredo dos Pros', content: [
                        { type: 'p', text: "O lucro é feito na compra, não na venda. Se os números não funcionarem no dia 1 (Cashflow negativo), não conte com a 'valorização futura' para salvá-lo. Isso é especulação, não investimento." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Como usar o Módulo Imobiliário",
            icon: 'module',
            content: [
                { type: 'p', text: "Este módulo é sua calculadora de rentabilidade. Aqui está uma explicação detalhada de cada campo para ajudá-lo a fazer análises precisas." },

                { type: 'subtitle', title: "Seção Aquisição (A Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Preço de Compra:</strong> O valor aceito pelo vendedor. Não inclua aqui os custos iniciais (notário, impostos de transferência), pois o módulo calcula os rácios com base no valor do ativo.",
                        "<strong>Entrada (Cash Down):</strong> O dinheiro vivo que você deve tirar do bolso.<br/><em>Impacto:</em> Uma entrada menor aumenta seu retorno sobre o investimento (ROI) graças à alavancagem, mas aumenta seus pagamentos mensais e reduz seu Cashflow.",
                        "<strong>Pagamento Hipot. (Anual):</strong> O valor TOTAL pago ao banco em um ano (Capital + Juros). Multiplique sua mensalidade por 12.<br/><em>Dica:</em> Use o módulo <strong>Reembolso</strong> para calcular este número exato.",
                        "<strong>Amort. Capital (Ano 1):</strong> A parcela de seus pagamentos que serve para pagar a dívida no primeiro ano. É poupança forçada. Você encontrará este número em sua tabela de amortização hipotecária."
                    ]
                },

                { type: 'subtitle', title: "Seção Operações (A Verdade)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'A Armadilha Clássica', content: [
                        { type: 'p', text: "Subestimar as despesas. NUNCA tome os números do vendedor como garantidos. Eles frequentemente 'esquecem' a gestão e a manutenção." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Receitas Brutas:</strong> O total de todos os aluguéis se o prédio estivesse 100% cheio o ano todo.",
                        "<strong>Taxa de Vacância (%):</strong> Porcentagem do tempo em que as unidades estarão vazias (entre inquilinos).<br/><em>Padrão:</em> Coloque sempre pelo menos <strong>3% a 5%</strong> por prudência, mesmo se estiver cheio. Os bancos exigem isso em seus cálculos.",
                        "<strong>Despesas Operacionais:</strong> O ponto crucial. Inclua TUDO: Impostos (municipais), Seguros, Eletricidade (áreas comuns), Manutenção, Publicidade, Gestão e, sobretudo, a Reserva de Manutenção.<br/><em>Regra geral:</em> As despesas representam frequentemente <strong>35% a 45%</strong> das receitas brutas. Se seu cálculo chegar a 15%, você esqueceu algo."
                    ]
                },

                { type: 'subtitle', title: "Seção Parâmetros Avançados (O Futuro)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Valorização %:</strong> Quanto o valor do imóvel aumenta por ano. Seja conservador (2% a 3% para acompanhar a inflação). É a cereja no topo do bolo, não o bolo.",
                        "<strong>Amort. Fiscal (DPA):</strong> A Dedução por Amortização. O valor que o governo permite que você deduza de seus rendimentos pelo desgaste do imóvel. Isso reduz seus impostos hoje, mas será 'recuperado' (tributado) na venda. Consulte um contador.",
                        "<strong>Imposto %:</strong> Sua taxa marginal de imposto. Serve para calcular o Cashflow líquido real após impostos."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. O Cashflow",
            icon: 'flux',
            content: [
                { type: 'p', text: "É o oxigênio do seu investimento. Sem cashflow positivo, você deve pagar do bolso todo mês para manter o imóvel. É arriscado." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Receitas de Aluguel Brutas<br/>(-) Vacância & Inadimplência (perdas)<br/>= <strong>RECEITA EFETIVA</strong><br/><br/>(-) Despesas Operacionais (Impostos, Seguros...)<br/>= <strong>RECEITA OPERACIONAL LÍQUIDA (NOI)</strong> <span style='color:var(--info-color)'>◄ O desempenho puro do prédio</span><br/><br/>(-) Serviço da Dívida (Hipoteca)<br/>= <strong>CASHFLOW</strong> <span style='color:var(--success-color)'>◄ O que vai para o seu bolso</span>" }
                    ]
                },
                { type: 'p', text: "O <strong>NOI</strong> é crucial porque representa o desempenho do imóvel <em>independentemente</em> do seu financiamento. É neste número que o banco se baseia para avaliar o valor econômico do imóvel." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Rácios de Desempenho",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Como saber se é um bom negócio? Os números não mentem." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate (Taxa de Cap.)', code: 'NOI / Preço Compra', text: "O rendimento do imóvel se você o pagasse 100% à vista. É a referência absoluta para comparar imóveis entre si.<br/><strong>Alvo:</strong> 4.5% a 6% (quanto maior, melhor)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Cashflow Anual / Entrada', text: "Seu retorno real sobre o dinheiro vivo que saiu do seu bolso. É sua 'verdadeira' taxa de juros.<br/><strong>Alvo:</strong> > 8% a 10%." },
                        { style: 'warning', title: 'Rácio de Despesas (OER)', code: 'Despesas / Receitas Brutas', text: "Mede a eficiência da gestão. Se > 55%, o imóvel é um ralo. Se < 25%, os números provavelmente são falsos.<br/><strong>Zona Saudável:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Multiplicador de Renda Bruta (GRM)', code: 'Preço / Receitas Brutas', text: "'Quantas vezes a receita eu estou pagando?' Útil para uma triagem rápida, mas perigoso porque ignora as despesas reais.<br/><strong>Padrão:</strong> 12x a 18x+ (varia muito conforme a cidade e a qualidade do imóvel)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Análise de Risco & Banco",
            icon: 'risque',
            content: [
                { type: 'p', text: "Antes de emprestar centenas de milhares de dólares, o banco olhará para esses rácios para garantir que você não dará calote." },

                { type: 'subtitle', title: "Rácio de Cobertura da Dívida (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Pagamentos Hipotecários</span><br/>Os aluguéis cobrem a hipoteca? Um DSCR de <strong>1.25</strong> significa que para cada 100$ de pagamento ao banco, você tem 125$ de receita líquida. É a margem de segurança exigida pelos bancos.<br/><strong>Nota:</strong> Os bancos frequentemente usam taxas de juros 'qualificadas' mais altas para este cálculo.<br/><strong>Zona de perigo:</strong> < 1.10." },

                { type: 'subtitle', title: "Rácio Empréstimo-Valor (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Valor do Empréstimo / Valor da Propriedade</span><br/>A porcentagem do imóvel que pertence ao banco. Quanto mais alto, maior a alavancagem, mas maior o risco." },

                { type: 'subtitle', title: "Ponto de Equilíbrio (Break-even)" },
                { type: 'p', text: "É a taxa de ocupação mínima para não perder dinheiro. Se seu Break-even for de 75%, significa que você pode ter 25% de suas unidades vazias e ainda assim pagar todas as suas contas. Quanto menor este número, mais seguro é o investimento." },

                { type: 'subtitle', title: "Margem de Segurança" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Pagamento Hipoteca) / NOI</span><br/>Porcentagem da Receita Líquida que pode desaparecer antes que você esteja em cashflow negativo. Recomenda-se uma margem de <strong>20%+</strong> para absorver imprevistos." },

                { type: 'subtitle', title: "Constante de Empréstimo (Loan Constant)" },
                { type: 'p', text: "<span class='code-badge'>Pagamento Anual Total / Valor do Empréstimo</span><br/>O custo real da sua dívida (incluindo o reembolso de capital).<br/><strong>O Segredo da Alavancagem Positiva:</strong> Se seu Cap Rate > Constante de Empréstimo, você enriquece com o dinheiro do banco. Se Cap Rate < Constante, a alavancagem joga contra você." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Estratégias Avançadas (Pros)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'A Estratégia BRRRR', content: [
                        { type: 'p', text: "Buy (Comprar), Rehab (Reformar), Rent (Alugar), Refinance (Refinanciar), Repeat (Repetir).<br/><br/>O Santo Graal do mercado imobiliário. O objetivo é comprar um imóvel degradado, aumentar seu valor através de reformas (forçar a valorização), depois refinanciar para recuperar 100% de sua entrada inicial. Você então possui um imóvel 'de graça' (entrada infinita = retorno infinito)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Iniciante)" },
                { type: 'p', text: "Comprar um duplex ou triplex e morar em uma das unidades.<br/><strong>Vantagem:</strong> Entrada reduzida. Os inquilinos pagam sua hipoteca. É a melhor maneira de começar." },

                { type: 'subtitle', title: "A TIR (Taxa Interna de Retorno - IRR)" },
                { type: 'p', text: "O investidor iniciante olha o Cashflow. O investidor pro olha a TIR (IRR). A TIR calcula o retorno total anualizado combinando os 4 pagadores do imobiliário:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> O dinheiro mensal.",
                        "2. <strong>Capitalização:</strong> O inquilino paga sua dívida (você enriquece a cada mês).",
                        "3. <strong>Valorização:</strong> O valor do imóvel sobe com a inflação.",
                        "4. <strong>Benefícios Fiscais:</strong> Deduções de juros e amortização."
                    ]
                },
                { type: 'p', text: "O Nexus Pro calcula esta TIR para você ao longo de 10 anos na parte inferior do módulo Imobiliário." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Fiscalidade Imobiliária",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "O setor imobiliário é poderoso, mas o fisco espera por você. Compreender esses conceitos pode economizar milhares de dólares." },

                { type: 'subtitle', title: "Despesas Correntes vs Capitalizáveis" },
                { type: 'p', text: "<strong>Correntes:</strong> Reparos menores (trocar uma torneira, pintura). Dedutíveis 100% no mesmo ano.<br/><strong>Capitalizáveis:</strong> Melhorias maiores (refazer o telhado, trocar janelas). Não são dedutíveis de uma vez. Elas são adicionadas ao custo do imóvel e amortizadas em vários anos." },

                { type: 'subtitle', title: "A Recuperação de Amortização" },
                { type: 'p', text: "Se você usar a amortização fiscal (DPA) para reduzir seus impostos a cada ano, cuidado! Na venda do imóvel, se você vender mais caro do que comprou, o governo vai 'recuperar' toda essa amortização e cobrar impostos sobre ela. É um empréstimo fiscal, não um presente." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glossário Completo",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Amortização Capital", def: "A parcela do seu pagamento hipotecário que serve para pagar a dívida. Um enriquecimento para você." },
                        { term: "Amortização Fiscal (DPA)", def: "Uma despesa 'fictícia' permitida pelo governo (depreciação do edifício) que reduz seu imposto a pagar hoje." },
                        { term: "Valorização", def: "Aumento do valor do imóvel ao longo do tempo." },
                        { term: "Cap Rate", def: "Taxa de retorno sem financiamento. NOI / Preço." },
                        { term: "Cash-on-Cash", def: "Retorno líquido sobre o dinheiro investido. Cashflow / Entrada." },
                        { term: "Cashflow", def: "Lucro líquido mensal ou anual que sobra no seu bolso após todas as despesas e a hipoteca." },
                        { term: "Despesas Operacionais", def: "Custos para operar o imóvel (Seguros, Impostos, Manutenção). Exclui a hipoteca." },
                        { term: "DSCR (Cobertura)", def: "Rácio de capacidade de pagamento da dívida. Deve ser > 1.20." },
                        { term: "Alavancagem", def: "Usar a dívida para aumentar o retorno dos seus próprios capitais." },
                        { term: "Patrimônio (Equity)", def: "Valor de Mercado - Saldo Hipotecário. A riqueza líquida no imóvel." },
                        { term: "LTV (Empréstimo-Valor)", def: "Porcentagem do valor financiado pelo banco." },
                        { term: "Entrada", def: "Aporte pessoal inicial." },
                        { term: "GRM", def: "Preço / Receitas Brutas. Medida rápida de quão caro é." },
                        { term: "NOI (Receita Líquida Operacional)", def: "Receitas - Despesas. O lucro puro da operação." },
                        { term: "Taxa de Vacância", def: "% de receitas perdidas porque as unidades estão vazias." },
                        { term: "TIR (Taxa Interna de Retorno)", def: "Retorno total anualizado incluindo cashflow, capital e mais-valia." },
                        { term: "Avaliação", def: "Estimativa do valor de mercado, frequentemente baseada no NOI e no Cap Rate do mercado." },
                        { term: "ROE (Retorno sobre Patrimônio)", def: "Lucro total / Patrimônio líquido." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = {
    sidebar: {
        title: "Guia Imobiliário (Intl)",
        sections: [
            { title: "Fundamentos", items: [{ id: 'intro', label: '1. A Filosofia' }, { id: 'module', label: '2. Guia do Módulo' }] },
            { title: "Análisis Financiero", items: [{ id: 'flux', label: '3. O Cashflow' }, { id: 'ratios', label: '4. Rácios Chave' }, { id: 'risque', label: '5. Análise de Risco' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Estratégias Pro' }, { id: 'fiscalite', label: '7. Fiscalidade' }, { id: 'glossaire', label: '8. Glossário Completo' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introdução: Alavancagem e Riqueza",
            icon: 'intro',
            content: [
                { type: 'p', text: "O investimento imobiliário é único porque utiliza a <strong>alavancagem</strong> (a hipoteca) para amplificar seus ganhos. Você utiliza o dinheiro do banco (frequentemente 80% do preço) para controlar um ativo a 100%, enquanto aproveita 100% da valorização e do free cashflow." },
                { type: 'p', text: "No entanto, o setor imobiliário não perdoa. Um erro de cálculo de 100$ por mês pode se tornar uma perda de 30.000$ em 25 anos. É por isso que o módulo <strong>Imobiliário</strong> do Nexus Finance Pro foi criado: para transformar estimativas vagas em matemática precisa." },
                {
                    type: 'box', style: 'pro', title: 'O Segredo dos Pros', content: [
                        { type: 'p', text: "O lucro é feito na compra, não na venda. Se os números não funcionarem no dia 1 (Cashflow negativo), não conte com a 'valorização futura' para salvá-lo. Isso é especulação, não investimento." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Como usar o Módulo Imobiliário",
            icon: 'module',
            content: [
                { type: 'p', text: "Este módulo é sua calculadora de rentabilidade. Aqui está uma explicação detalhada de cada campo para ajudá-lo a fazer análises precisas." },
                { type: 'subtitle', title: "Seção Aquisição (A Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Preço de Compra:</strong> O valor aceito pelo vendedor.",
                        "<strong>Entrada (Cash Down):</strong> O dinheiro vivo que você deve tirar do bolso.",
                        "<strong>Pagamento Hipot. (Anual):</strong> O valor TOTAL pago ao banco em um ano.",
                        "<strong>Amort. Capital (Ano 1):</strong> A parcela de seus pagamentos que serve para pagar a dívida."
                    ]
                },
                { type: 'subtitle', title: "Seção Operações (A Verdade)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Receitas Brutas:</strong> O total de todos os aluguéis.",
                        "<strong>Taxa de Vacância (%):</strong> Padrão 3-5%.",
                        "<strong>Despesas Operacionais:</strong> Impostos, Seguros, Manutenção."
                    ]
                },
                { type: 'subtitle', title: "Seção Parâmetros Avançados", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Valorização %:</strong> Aumento anual do valor.",
                        "<strong>Amort. Fiscal:</strong> Dedução por depreciação.",
                        "<strong>Imposto %:</strong> Taxa marginal de imposto."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. O Cashflow",
            icon: 'flux',
            content: [
                { type: 'p', text: "É o oxigênio do seu investimento. Sem cashflow positivo, você deve pagar do bolso todo mês para manter o imóvel." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Receitas Brutas<br/>(-) Vacância<br/>= <strong>RECEITA EFETIVA</strong><br/><br/>(-) Despesas Operacionais<br/>= <strong>NOI (RECEITA LÍQUIDA OPERACIONAL)</strong><br/><br/>(-) Hipoteca<br/>= <strong>CASHFLOW</strong>" }
                    ]
                }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Rácios Chave",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Os indicadores essenciais para avaliar o desempenho." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate', code: 'NOI / Preço', text: "Rendimento sem alavancagem." },
                        { style: 'success', title: 'Cash-on-Cash', code: 'Cashflow / Entrada', text: "Retorno sobre o dinheiro investido." },
                        { style: 'warning', title: 'Rácio de Despesas', code: 'Despesas / Receitas', text: "% de receitas que vão para despesas." },
                        { style: 'pro', title: 'GRM', code: 'Preço / Receitas', text: "Multiplicador de renda bruta." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Análise de Risco",
            icon: 'risque',
            content: [
                { type: 'p', text: "Avalie a segurança do seu investimento." },
                { type: 'subtitle', title: "DSCR" },
                { type: 'p', text: "Deve ser superior a 1.25." },
                { type: 'subtitle', title: "LTV" },
                { type: 'p', text: "% do valor financiado pelo banco." },
                { type: 'subtitle', title: "Ponto de Equilíbrio" },
                { type: 'p', text: "Ocupação mínima necessária para cobrir despesas." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Estratégias Pro",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'BRRRR', content: [
                        { type: 'p', text: "Comprar, Reformar, Alugar, Refinanciar, Repetir." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking" },
                { type: 'p', text: "Morar em uma das unidades." },
                { type: 'subtitle', title: "TIR" },
                { type: 'p', text: "Medida completa de retorno." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Fiscalidade",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Consulte um especialista local." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glossário",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "NOI", def: "Receita Líquida Operacional" },
                        { term: "Cap Rate", def: "Taxa de Capitalização" },
                        { term: "Cashflow", def: "Fundo de Maneio" }
                    ]
                }
            ]
        }
    }
};
