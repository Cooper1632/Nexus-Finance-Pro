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
            { title: "Fundamentos", items: [{ id: 'intro', label: '1. Filosofia' }, { id: 'module', label: '2. Guia do Módulo' }] },
            { title: "Análise Financeira", items: [{ id: 'flux', label: '3. Cashflow' }, { id: 'ratios', label: '4. Rácios Chave' }, { id: 'risque', label: '5. Análise Risco' }] },
            { title: "Experiência", items: [{ id: 'strategie', label: '6. Estratégias Pro' }, { id: 'fiscalite', label: '7. Fiscalidade' }, { id: 'glossaire', label: '8. Glossário' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introdução: Alavancagem e Riqueza",
            icon: 'intro',
            content: [
                { type: 'p', text: "O investimento imobiliário é único porque usa a <strong>alavancagem</strong> (hipoteca) para amplificar ganhos. Usa o dinheiro do banco (muitas vezes 80% do preço) para controlar um ativo a 100%, enquanto goza de 100% da valorização e do fluxo de caixa." },
                { type: 'p', text: "Contudo, o imobiliário não perdoa. Um erro de cálculo de 100€/mês pode tornar-se uma perda de 30 000€ em 25 anos. Por isso foi criado o módulo <strong>Imobiliário</strong> no Nexus Finance Pro: para converter estimativas vagas em matemática precisa." },
                {
                    type: 'box', style: 'pro', title: 'Segredo Pro', content: [
                        { type: 'p', text: "O lucro faz-se na compra, não na venda. Se os números não batem certo no Dia 1 (Cashflow Negativo), não conte com a 'valorização futura' para o salvar. Isso é especulação, não investimento." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Como usar o Módulo",
            icon: 'module',
            content: [
                { type: 'p', text: "Este módulo é a sua calculadora de rentabilidade. Explicação detalhada:" },

                { type: 'subtitle', title: "Secção Aquisição (A Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Preço de Compra:</strong> O montante aceite pelo vendedor. Não inclua custos iniciais (IMT, notário) aqui, pois os rácios baseiam-se no valor do ativo.",
                        "<strong>Entrada Inicial:</strong> O dinheiro que sai do seu bolso.<br/><em>Impacto:</em> Uma entrada menor aumenta o Retorno do Investimento (ROI) via alavancagem, mas aumenta pagamentos mensais e reduz Cashflow.",
                        "<strong>Pagamento Hipoteca (Anual):</strong> O montante TOTAL pago ao banco num ano (Capital + Juros). Prestação mensal vezes 12.<br/><em>Dica:</em> Use o módulo <strong>Reembolso</strong> para calcular este valor exato.",
                        "<strong>Reembolso Capital (Ano 1):</strong> A parte dos pagamentos que reduz a dívida no primeiro ano. É poupança forçada."
                    ]
                },

                { type: 'subtitle', title: "Secção Operações (A Verdade)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Armadilha Clássica', content: [
                        { type: 'p', text: "Subestimar despesas. NUNCA tome os números do vendedor como certos. Eles 'esquecem' frequentemente gestão e manutenção." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Receitas Brutas:</strong> Total de todas as rendas se o prédio estivesse 100% cheio.",
                        "<strong>Taxa de Vacância (%):</strong> Percentagem de tempo que as frações estarão vazias.<br/><em>Padrão:</em> Use sempre pelo menos <strong>3% a 5%</strong> por precaução. Os bancos exigem isto.",
                        "<strong>Despesas Operacionais:</strong> A realidade crua. Inclua TUDO: IMI, Seguros, Condomínio, e especialmente Manutenção.<br/><em>Regra de ouro:</em> As despesas são geralmente <strong>35% a 45%</strong> das receitas brutas."
                    ]
                },

                { type: 'subtitle', title: "Configuração Avançada", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Valorização %:</strong> Quanto o imóvel valoriza por ano. Seja conservador (2-3%). É a cereja no topo do bolo.",
                        "<strong>Depreciação Fiscal:</strong> Dedução permitida pelo governo que reduz impostos hoje mas pode ser tributada na venda.",
                        "<strong>Taxa de Imposto %:</strong> A sua taxa marginal de imposto. Usada para calcular o Cashflow Líquido real após impostos."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Cashflow (Fluxo de Caixa)",
            icon: 'flux',
            content: [
                { type: 'p', text: "É o oxigénio do seu investimento. Sem cashflow positivo, tem de pagar do seu bolso todos os meses." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Rendas Brutas<br/>(-) Vacância<br/>= <strong>RENDAS EFETIVAS</strong><br/><br/>(-) Despesas Operacionais (IMI, Seguros...)<br/>= <strong>NOI (Receita Líq. Operacional)</strong> <span style='color:var(--info-color)'>◄ Rendimento puro</span><br/><br/>(-) Serviço Dívida (Hipoteca)<br/>= <strong>CASHFLOW</strong> <span style='color:var(--success-color)'>◄ Muda a sua vida</span>" }
                    ]
                },
                { type: 'p', text: "O <strong>NOI</strong> é crucial porque representa o desempenho do imóvel <em>independentemente</em> do financiamento." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Rácios de Desempenho",
            icon: 'ratios',
            content: [
                { type: 'p', text: "É um bom negócio? Os números não mentem." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate (Yield)', code: 'NOI / Preço', text: "Rendimento se pagasse 100% a pronto. A referência absoluta.<br/><strong>Objetivo:</strong> 4.5% a 6% (mais alto é melhor)." },
                        { style: 'success', title: 'Cash-on-Cash', code: 'Cashflow Anual / Entrada', text: "Retorno real sobre o dinheiro do seu bolso.<br/><strong>Objetivo:</strong> > 8% a 10%." },
                        { style: 'warning', title: 'Rácio Despesas', code: 'Despesas / Rendas Brutas', text: "Mede eficiência. Se > 55%, é ineficiente. Se < 25%, números provavelmente falsos.<br/><strong>Zona Sã:</strong> 35% - 45%." },
                        { style: 'pro', title: 'GRM (Multiplicador)', code: 'Preço / Rendas Brutas', text: "'Quantos anos de renda pago pelo imóvel?' Filtro rápido.<br/><strong>Padrão:</strong> 15x a 20x (depende da zona)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Análise de Risco",
            icon: 'risque',
            content: [
                { type: 'p', text: "Antes de emprestar, o banco olha para isto." },

                { type: 'subtitle', title: "DSCR (Cobertura Dívida)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Prestação</span><br/>As rendas cobrem a hipoteca? DSCR de <strong>1.25</strong> significa que para cada 100€ de prestação, tem 125€ de receita. Margem de segurança.<br/><strong>Perigo:</strong> < 1.10." },

                { type: 'subtitle', title: "LTV (Loan-to-Value)" },
                { type: 'p', text: "<span class='code-badge'>Montante Empréstimo / Valor Imóvel</span><br/>Percentagem financiada pelo banco. Maior LTV = maior alavancagem e risco." },

                { type: 'subtitle', title: "Break-Even (Ponto Equilíbrio)" },
                { type: 'p', text: "Ocupação mínima para não perder dinheiro. Se Break-even é 75%, pode ter 25% de vacância." },

                { type: 'subtitle', title: "Margem de Segurança" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Prestação) / NOI</span><br/>Percentagem que o rendimento pode cair antes de entrar em cashflow negativo. <strong>20%+</strong> recomendado." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Estratégias Pro",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'Estratégia BRRRR', content: [
                        { type: 'p', text: "Buy, Rehab, Rent, Refinance, Repeat.<br/><br/>Comprar degradado, renovar para forçar valorização, depois refinanciar para retirar 100% do capital inicial. Fica com o imóvel 'de graça'." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Iniciante)" },
                { type: 'p', text: "Comprar um duplex e viver numa unidade.<br/><strong>Vantagem:</strong> O inquilino paga a sua hipoteca." },

                { type: 'subtitle', title: "Taxa Interna de Rentabilidade (TIR / IRR)" },
                { type: 'p', text: "A TIR calcula o retorno total anualizado combinando os 4 pagadores:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Dinheiro mensal.",
                        "2. <strong>Reembolso Capital:</strong> Inquilino paga dívida.",
                        "3. <strong>Valorização:</strong> Inflação.",
                        "4. <strong>Benefícios Fiscais.</strong>"
                    ]
                },
                { type: 'p', text: "O Nexus Pro calcula esta TIR a 10 anos." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Fiscalidade",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Entender estes conceitos pode poupar milhares." },

                { type: 'subtitle', title: "Despesas vs Capital" },
                { type: 'p', text: "<strong>Correntes:</strong> Reparações (torneira). Dedutível no ano.<br/><strong>Capital:</strong> Melhorias (tehado novo). Deduzido ao longo de anos (depreciação)." },

                { type: 'subtitle', title: "Mais-valias" },
                { type: 'p', text: "Imposto sobre o lucro na venda. (Preço Venda - Preço Compra)." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glossário",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Reembolso Capital", def: "Parte da prestação que abate dívida." },
                        { term: "Depreciação", def: "Custo fiscal do desgaste do imóvel." },
                        { term: "Valorização", def: "Aumento do valor de mercado." },
                        { term: "Cap Rate", def: "Rendimento sem financiamento. NOI / Preço." },
                        { term: "Cash-on-Cash", def: "Retorno sobre dinheiro investido." },
                        { term: "Cashflow", def: "Lucro líquido no bolso." },
                        { term: "Despesas Operacionais", def: "Custos do imóvel (sem hipoteca)." },
                        { term: "DSCR", def: "Capacidade de pagar a dívida. > 1.20." },
                        { term: "Alavancagem", def: "Usar dívida para potenciar retorno." },
                        { term: "Equity", def: "Valor Mercado - Dívida. Riqueza líquida no imóvel." },
                        { term: "LTV", def: "Percentagem financiada." },
                        { term: "Entrada", def: "Capital inicial próprio." },
                        { term: "GRM", def: "Preço / Rendas Brutas." },
                        { term: "NOI", def: "Receitas - Despesas. Lucro da operação." },
                        { term: "Vacância", def: "% de rendas perdidas por imóvel vazio." },
                        { term: "TIR (IRR)", def: "Retorno total anualizado." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = realEstateGuideData;
