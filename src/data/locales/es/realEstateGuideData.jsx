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
        title: "Guía Inmobiliaria",
        sections: [
            { title: "Fundamentos", items: [{ id: 'intro', label: '1. La Filosofía' }, { id: 'module', label: '2. Guía del Módulo' }] },
            { title: "Análisis Financiero", items: [{ id: 'flux', label: '3. El Flujo de Caja' }, { id: 'ratios', label: '4. Ratios Clave' }, { id: 'risque', label: '5. Análisis de Riesgo' }] },
            { title: "Experiencia", items: [{ id: 'strategie', label: '6. Estrategias Pro' }, { id: 'fiscalite', label: '7. Fiscalidad' }, { id: 'glossaire', label: '8. Glosario Completo' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introducción: Apalancamiento y Riqueza",
            icon: 'intro',
            content: [
                { type: 'p', text: "La inversión inmobiliaria es única porque utiliza el <strong>apalancamiento</strong> (la hipoteca) para amplificar sus ganancias. Usted utiliza el dinero del banco (a menudo el 80% del precio) para controlar un activo al 100%, mientras disfruta del 100% de la apreciación y del flujo de caja." },
                { type: 'p', text: "Sin embargo, 'inmueble' no perdona. Un error de cálculo de 100$ al mes puede convertirse en una pérdida de 30.000$ en 25 años. Es por eso que el módulo <strong>Inmobiliario</strong> de Nexus Finance Pro fue creado: para transformar estimaciones vagas en matemáticas precisas." },
                {
                    type: 'box', style: 'pro', title: 'El Secreto de los Pros', content: [
                        { type: 'p', text: "Las ganancias se hacen en la compra, no en la venta. Si los números no funcionan el día 1 (Flujo de caja negativo), no cuente con la 'apreciación futura' para salvarlo. Eso es especulación, no inversión." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Cómo usar el Módulo Inmobiliario",
            icon: 'module',
            content: [
                { type: 'p', text: "Este módulo es su calculadora de rentabilidad. Aquí hay una explicación detallada de cada campo para ayudarlo a hacer análisis precisos." },

                { type: 'subtitle', title: "Sección Adquisición (La Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Precio de Compra:</strong> El monto aceptado por el vendedor. No incluya aquí los gastos de inicio (notario, impuestos de transferencia), ya que el módulo calcula los ratios basados en el valor del activo.",
                        "<strong>Pago Inicial (Cash Down):</strong> El dinero en efectivo que debe sacar de su bolsillo.<br/><em>Impacto:</em> Un pago inicial más bajo aumenta su retorno de inversión (ROI) gracias al apalancamiento, pero aumenta sus pagos mensuales y reduce su Flujo de Caja.",
                        "<strong>Pago Hipot. (Anual):</strong> El monto TOTAL pagado al banco en un año (Capital + Intereses). Multiplique su mensualidad por 12.<br/><em>Truco:</em> Use el módulo <strong>Reembolso</strong> para calcular este número exacto.",
                        "<strong>Amort. Capital (Año 1):</strong> La porción de sus pagos que sirve para reembolsar la deuda el primer año. Es ahorro forzado. Encontrará este número en su tabla de amortización hipotecaria."
                    ]
                },

                { type: 'subtitle', title: "Sección Operaciones (La Verdad)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'La Trampa Clásica', content: [
                        { type: 'p', text: "Subestimar los gastos. NUNCA tome los números del vendedor por sentado. A menudo 'olvidan' la gestión y el mantenimiento." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Ingresos Brutos:</strong> El total de todos los alquileres si el edificio estuviera lleno al 100% todo el año.",
                        "<strong>Tasa de Vacancia (%):</strong> Porcentaje del tiempo en que las viviendas estarán vacías (entre inquilinos).<br/><em>Estándar:</em> Ponga siempre al menos <strong>3% a 5%</strong> por prudencia, incluso si está lleno. Los bancos lo exigen en sus cálculos.",
                        "<strong>Gastos de Explotación:</strong> El nervio de la guerra. Incluya TODO: Impuestos (municipales, escolares), Seguros, Electricidad (zonas comunes), Mantenimiento, Publicidad, Gestión, y sobre todo la Reserva de Mantenimiento.<br/><em>Regla general:</em> Los gastos representan a menudo <strong>35% a 45%</strong> de los ingresos brutos. Si su cálculo llega a 15%, ha olvidado algo."
                    ]
                },

                { type: 'subtitle', title: "Sección Parámetros Avanzados (El Futuro)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Apreciación %:</strong> Cuánto aumenta el valor del inmueble por año. Sea conservador (2% a 3% para seguir la inflación). Es la guinda del pastel, no el pastel.",
                        "<strong>Amort. Fiscal (DPA):</strong> La Deducción por Amortización. El monto que el gobierno le permite deducir de sus ingresos por el desgaste del inmueble. Esto reduce sus impuestos hoy pero será 'recuperado' (gravado) en la venta. Consulte a un contador.",
                        "<strong>Impuesto %:</strong> Su tasa marginal de impuestos. Sirve para calcular el Flujo de Caja neto real después de impuestos."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. El Flujo de Caja (Cashflow)",
            icon: 'flux',
            content: [
                { type: 'p', text: "Es el oxígeno de su inversión. Sin flujo de caja positivo, debe pagar de su bolsillo cada mes para mantener el inmueble. Es arriesgado." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Ingresos por Alquiler Brutos<br/>(-) Vacancia & Malas Deudas (pérdidas)<br/>= <strong>INGRESOS EFECTIVOS</strong><br/><br/>(-) Gastos de Operación (Impuestos, Seguros...)<br/>= <strong>INGRESO NETO OPERATIVO (NOI)</strong> <span style='color:var(--info-color)'>◄ El rendimiento puro del edificio</span><br/><br/>(-) Servicio de la Deuda (Hipoteca)<br/>= <strong>CASHFLOW (Flujo de Caja)</strong> <span style='color:var(--success-color)'>◄ Lo que va a su bolsillo</span>" }
                    ]
                },
                { type: 'p', text: "El <strong>NOI</strong> es crucial porque representa el rendimiento del inmueble <em>independientemente</em> de su financiación. Es en este número que el banco se basa para evaluar el valor económico del inmueble." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Los Ratios de Rendimiento",
            icon: 'ratios',
            content: [
                { type: 'p', text: "¿Cómo saber si es un buen negocio? Los números no mienten." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Tasa de Capitalización (Cap Rate)', code: 'NOI / Precio Compra', text: "El rendimiento del inmueble si lo pagara 100% al contado. Es la referencia absoluta para comparar inmuebles entre sí.<br/><strong>Objetivo:</strong> 4.5% a 6% (cuanto más alto, mejor)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Flujo de Caja Anual / Pago Inicial', text: "Su rendimiento real sobre el dinero en efectivo que salió de su bolsillo. Es su 'verdadera' tasa de interés.<br/><strong>Objetivo:</strong> > 8% a 10%." },
                        { style: 'warning', title: 'Ratio de Gastos (OER)', code: 'Gastos / Ingresos Brutos', text: "Mide la eficiencia de la gestión. Si > 55%, el inmueble es un colador. Si < 25%, los números son probablemente falsos.<br/><strong>Zona Saludable:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Multiplicador Ingreso Bruto (GRM)', code: 'Precio / Ingresos Brutos', text: "'¿Cuántas veces los ingresos estoy pagando?' Útil para una clasificación rápida, pero peligroso porque ignora los gastos reales.<br/><strong>Estándar:</strong> 12x a 18x+ (varía mucho según la ciudad y la calidad del inmueble)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Análisis de Riesgo & Banco",
            icon: 'risque',
            content: [
                { type: 'p', text: "Antes de prestarle cientos de miles de dólares, el banco mirará estos ratios para asegurarse de que no incumplirá." },

                { type: 'subtitle', title: "Ratio de Cobertura de la Deuda (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Pagos Hipotecarios</span><br/>¿Cubren los alquileres la hipoteca? Un DSCR de <strong>1.25</strong> significa que por cada 100$ de pago al banco, usted tiene 125$ de ingresos netos. Es el margen de seguridad exigido por los bancos.<br/><strong>Nota:</strong> Los bancos a menudo usan tasas de interés 'calificadas' más altas para este cálculo.<br/><strong>Zona de peligro:</strong> < 1.10." },

                { type: 'subtitle', title: "Ratio Préstamo-Valor (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Monto del Préstamo / Valor de la Propiedad</span><br/>El porcentaje del inmueble que pertenece al banco. Cuanto más alto es, más fuerte es el apalancamiento, pero más alto es el riesgo." },

                { type: 'subtitle', title: "Punto de Equilibrio (Break-even)" },
                { type: 'p', text: "Es la tasa de ocupación mínima para no perder dinero. Si su Break-even es del 75%, significa que puede tener el 25% de sus viviendas vacías y aún así pagar todas sus facturas. Cuanto más bajo sea este número, más segura es la inversión." },

                { type: 'subtitle', title: "Margen de Seguridad" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Pago Hipoteca) / NOI</span><br/>Porcentaje del Ingreso Neto que puede desaparecer antes de que esté en flujo de caja negativo. Se recomienda un margen de <strong>20%+</strong> para absorber los imprevistos." },

                { type: 'subtitle', title: "Constante de Préstamo (Loan Constant)" },
                { type: 'p', text: "<span class='code-badge'>Pago Anual Total / Monto del Préstamo</span><br/>El costo real de su deuda (incluyendo el reembolso de capital).<br/><strong>El Secreto del Apalancamiento Positivo:</strong> Si su Cap Rate > Constante de Préstamo, se enriquece con el dinero del banco. Si Cap Rate < Constante, el apalancamiento juega en su contra." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Estrategias Avanzadas (Pros)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'La Estrategia BRRRR', content: [
                        { type: 'p', text: "Buy (Comprar), Rehab (Renovar), Rent (Alquilar), Refinance (Refinanciar), Repeat (Repetir).<br/><br/>El Santo Grial de la propiedad inmobiliaria. El objetivo es comprar un inmueble deteriorado, aumentar su valor mediante renovaciones (forzar la apreciación), luego refinanciarlo para recuperar el 100% de su pago inicial original. Entonces posee un inmueble 'gratis' (pago inicial infinito = retorno infinito)." }
                    ]
                },
                { type: 'subtitle', title: "El House Hacking (Principiante)" },
                { type: 'p', text: "Comprar un dúplex o triplex y vivir en una de las unidades.<br/><strong>Ventaja:</strong> Pago inicial reducido. Los inquilinos pagan su hipoteca. Es la mejor manera de comenzar." },

                { type: 'subtitle', title: "La TIR (Tasa Interna de Retorno - IRR)" },
                { type: 'p', text: "El inversor principiante mira el Flujo de Caja. El inversor pro mira la TIR (IRR). La TIR calcula el rendimiento total anualizado combinando los 4 pagadores del sector inmobiliario:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Flujo de Caja:</strong> El dinero mensual.",
                        "2. <strong>Capitalización:</strong> El inquilino paga su deuda (usted se enriquece cada mes).",
                        "3. <strong>Apreciación:</strong> El valor del inmueble sube con la inflación.",
                        "4. <strong>Beneficios Fiscales:</strong> Deducciones de intereses y amortización."
                    ]
                },
                { type: 'p', text: "Nexus Pro calcula esta TIR para usted a lo largo de 10 años en la parte inferior del módulo Inmobiliario." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. La Fiscalidad Inmobiliaria",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "El sector inmobiliario es poderoso, pero el fisco lo espera a la vuelta de la esquina. Comprender estos conceptos puede ahorrarle miles de dólares." },

                { type: 'subtitle', title: "Gastos Corrientes vs Capitalizables" },
                { type: 'p', text: "<strong>Corrientes:</strong> Reparaciones menores (cambiar un grifo, pintura). Deducibles al 100% el mismo año.<br/><strong>Capitalizables:</strong> Mejoras mayores (renovar el techo, cambiar ventanas). No son deducibles de golpe. Se añaden al costo del inmueble y se amortizan en varios años." },

                { type: 'subtitle', title: "La Recuperación de Amortización" },
                { type: 'p', text: "Si toma la amortización fiscal (DPA) para reducir sus impuestos cada año, ¡cuidado! Al vender el inmueble, si vende más caro de lo que compró, el gobierno 'recuperará' toda esa amortización y le cobrará impuestos sobre ella. Es un préstamo fiscal, no un regalo." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glosario Completo",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Amortización Capital", def: "La porción de su pago hipotecario que sirve para pagar la deuda. Un enriquecimiento para usted." },
                        { term: "Amortización Fiscal (DPA)", def: "Un gasto 'ficticio' permitido por el gobierno (depreciación del edificio) que reduce su impuesto a pagar hoy." },
                        { term: "Apreciación", def: "Aumento del valor del inmueble a lo largo del tiempo." },
                        { term: "Cap Rate", def: "Tasa de rendimiento sin financiación. NOI / Precio." },
                        { term: "Cash-on-Cash", def: "Rendimiento líquido sobre el dinero invertido. Flujo de Caja / Pago inicial." },
                        { term: "Cashflow", def: "Beneficio neto mensual o anual que queda en sus bolsillos después de todos los gastos y la hipoteca." },
                        { term: "Gastos de operación", def: "Costos para operar el inmueble (Seguros, Impuestos, Mantenimiento). Excluye la hipoteca." },
                        { term: "DSCR (Cobertura)", def: "Ratio de capacidad de pago de la deuda. Debe ser > 1.20." },
                        { term: "Apalancamiento", def: "Usar la deuda para aumentar el rendimiento de sus propios capitales." },
                        { term: "Patrimonio (Equity)", def: "Valor de Mercado - Saldo Hipotecario. La riqueza neta en el inmueble." },
                        { term: "LTV (Préstamo-Valor)", def: "Porcentaje del valor financiado por el banco." },
                        { term: "Pago inicial", def: "Aporte personal inicial." },
                        { term: "GRM", def: "Precio / Ingresos Brutos. Medida rápida de qué tan caro es." },
                        { term: "NOI (Ingreso Neto Operativo)", def: "Ingresos - Gastos. El beneficio puro de la operación." },
                        { term: "Tasa de vacancia", def: "% de ingresos perdidos porque las viviendas están vacías." },
                        { term: "TIR (Tasa Interna de Retorno)", def: "Rendimiento total anualizado incluyendo flujo de caja, capital y plusvalía." },
                        { term: "Valuación", def: "Estimación del valor de mercado, a menudo basada en el NOI y el Cap Rate del mercado." },
                        { term: "ROE (Rendimiento sobre Patrimonio)", def: "Beneficio total / Patrimonio neto." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = {
    sidebar: {
        title: "Guía Inmobiliaria (Intl)",
        sections: [
            { title: "Fundamentos", items: [{ id: 'intro', label: '1. La Filosofía' }, { id: 'module', label: '2. Guía del Módulo' }] },
            { title: "Análisis Financiero", items: [{ id: 'flux', label: '3. El Flujo de Caja' }, { id: 'ratios', label: '4. Ratios Clave' }, { id: 'risque', label: '5. Análisis de Riesgo' }] },
            { title: "Experiencia", items: [{ id: 'strategie', label: '6. Estrategias Pro' }, { id: 'fiscalite', label: '7. Fiscalidad Inmobiliaria' }, { id: 'glossaire', label: '8. Glosario Completo' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introducción: Apalancamiento y Riqueza",
            icon: 'intro',
            content: [
                { type: 'p', text: "La inversión inmobiliaria es única porque utiliza el <strong>apalancamiento</strong> (la hipoteca) para amplificar sus ganancias. Usted utiliza el dinero del banco (a menudo el 80% del precio) para controlar un activo al 100%, mientras disfruta del 100% de la apreciación y del flujo de caja." },
                { type: 'p', text: "Sin embargo, 'inmueble' no perdona. Un error de cálculo de 100$ al mes puede convertirse en una pérdida de 30.000$ en 25 años. Es por eso que el módulo <strong>Inmobiliario</strong> de Nexus Finance Pro fue creado: para transformar estimaciones vagas en matemáticas precisas." },
                {
                    type: 'box', style: 'pro', title: 'El Secreto de los Pros', content: [
                        { type: 'p', text: "Las ganancias se hacen en la compra, no en la venta. Si los números no funcionan el día 1 (Flujo de caja negativo), no cuente con la 'apreciación futura' para salvarlo. Eso es especulación, no inversión." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Cómo usar el Módulo Inmobiliario",
            icon: 'module',
            content: [
                { type: 'p', text: "Este módulo es su calculadora de rentabilidad. Aquí hay una explicación detallada de cada campo para ayudarlo a hacer análisis precisos." },
                { type: 'subtitle', title: "Sección Adquisición (La Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Precio de Compra:</strong> El monto aceptado por el vendedor.",
                        "<strong>Pago Inicial (Cash Down):</strong> El dinero en efectivo que debe sacar de su bolsillo.",
                        "<strong>Pago Hipot. (Anual):</strong> El monto TOTAL pagado al banco en un año (Capital + Intereses).",
                        "<strong>Amort. Capital (Año 1):</strong> La porción de sus pagos que sirve para reembolsar la deuda el primer año."
                    ]
                },
                { type: 'subtitle', title: "Sección Operaciones (La Verdad)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Ingresos Brutos:</strong> El total de todos los alquileres si el edificio estuviera lleno al 100%.",
                        "<strong>Tasa de Vacancia (%):</strong> Porcentaje del tiempo en que las viviendas estarán vacías. Estándar: 3%-5%.",
                        "<strong>Gastos de Explotación:</strong> Incluya TODO: Impuestos, Seguros, Mantenimiento, Gestión."
                    ]
                },
                { type: 'subtitle', title: "Sección Parámetros Avanzados", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Apreciación %:</strong> Cuánto aumenta el valor del inmueble por año.",
                        "<strong>Amort. Fiscal:</strong> Deducción por depreciación del edificio.",
                        "<strong>Impuesto %:</strong> Su tasa de impuestos para calcular el flujo de caja neto."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. El Flujo de Caja (Cashflow)",
            icon: 'flux',
            content: [
                { type: 'p', text: "Es el oxígeno de su inversión. Sin flujo de caja positivo, debe pagar de su bolsillo cada mes para mantener el inmueble." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Ingresos Brutos<br/>(-) Vacancia<br/>= <strong>INGRESOS EFECTIVOS</strong><br/><br/>(-) Gastos de Operación<br/>= <strong>NOI (INGRESO NETO OPERATIVO)</strong><br/><br/>(-) Hipoteca<br/>= <strong>CASHFLOW</strong>" }
                    ]
                }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Ratios Clave",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Los indicadores esenciales para evaluar el rendimiento." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate', code: 'NOI / Precio', text: "Rendimiento sin apalancamiento." },
                        { style: 'success', title: 'Cash-on-Cash', code: 'Cashflow / Pago Inicial', text: "Retorno sobre su dinero invertido." },
                        { style: 'warning', title: 'Ratio de Gastos', code: 'Gastos / Ingresos', text: "% de ingresos que se van en gastos." },
                        { style: 'pro', title: 'GRM', code: 'Precio / Ingresos', text: "Multiplicador de renta bruta." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Análisis de Riesgo",
            icon: 'risque',
            content: [
                { type: 'p', text: "Evalúe la seguridad de su inversión." },
                { type: 'subtitle', title: "DSCR (Cobertura de Deuda)" },
                { type: 'p', text: "NOI / Hipoteca. Debe ser superior a 1.25 para ser seguro." },
                { type: 'subtitle', title: "LTV (Préstamo-Valor)" },
                { type: 'p', text: "% del valor financiado por el banco." },
                { type: 'subtitle', title: "Punto de Equilibrio" },
                { type: 'p', text: "Ocupación mínima necesaria para cubrir gastos." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Estrategias Pro",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'BRRRR', content: [
                        { type: 'p', text: "Comprar, Rehabilitar, Rentar, Refinanciar, Repetir." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking" },
                { type: 'p', text: "Vivir en una de las unidades para reducir sus costos de vivienda." },
                { type: 'subtitle', title: "TIR (Tasa Interna de Retorno)" },
                { type: 'p', text: "Medida completa del rendimiento incluyendo apreciación y amortización de deuda." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Fiscalidad",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Consulte a un experto local sobre las reglas de depreciación y deducción de gastos en su país." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glosario",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "NOI", def: "Ingreso Neto Operativo" },
                        { term: "Cap Rate", def: "Tasa de Capitalización" },
                        { term: "Cashflow", def: "Flujo de Caja" },
                        { term: "LTV", def: "Loan to Value (Préstamo a Valor)" },
                        { term: "ROE", def: "Return on Equity (Retorno sobre Patrimonio)" }
                    ]
                }
            ]
        }
    }
};
