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
            { title: "Fundamentos", items: [{ id: 'intro', label: '1. Filosofía' }, { id: 'module', label: '2. Guía del Módulo' }] },
            { title: "Análisis Financiero", items: [{ id: 'flux', label: '3. Cashflow' }, { id: 'ratios', label: '4. Ratios Clave' }, { id: 'risque', label: '5. Análisis de Riesgo' }] },
            { title: "Experiencia", items: [{ id: 'strategie', label: '6. Estrategias Pro' }, { id: 'fiscalite', label: '7. Fiscalidad' }, { id: 'glossaire', label: '8. Glosario Completo' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introducción: Apalancamiento y Riqueza",
            icon: 'intro',
            content: [
                { type: 'p', text: "La inversión inmobiliaria es única porque utiliza el <strong>apalancamiento</strong> (hipoteca) para amplificar sus ganancias. Usa el dinero del banco (a menudo el 80% del precio) para controlar un activo al 100%, mientras disfruta del 100% de la plusvalía y el flujo de caja." },
                { type: 'p', text: "Sin embargo, el sector inmobiliario no perdona. Un error de cálculo de 100$/mes puede convertirse en una pérdida de 30 000$ en 25 años. Por eso se creó el módulo <strong>Inmobiliaria</strong> en Nexus Finance Pro: para convertir estimaciones vagas en matemáticas precisas." },
                {
                    type: 'box', style: 'pro', title: 'Secreto Pro', content: [
                        { type: 'p', text: "Usted obtiene su ganancia cuando compra, no cuando vende. Si los números no cuadran el Día 1 (Cashflow Negativo), no cuente con la 'plusvalía futura' para salvarle. Eso es especulación, no inversión." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Cómo usar el Módulo Inmobiliaria",
            icon: 'module',
            content: [
                { type: 'p', text: "Este módulo es su calculadora de rentabilidad. Aquí hay una explicación detallada de cada campo para ayudarle a realizar análisis precisos." },

                { type: 'subtitle', title: "Sección Adquisición (La Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Precio de Compra:</strong> El monto aceptado por el vendedor. No incluya costos de inicio (notario, impuestos) aquí, ya que los ratios se calculan sobre el valor del activo.",
                        "<strong>Pago Inicial (Entrada):</strong> El efectivo que debe sacar de su bolsillo.<br/><em>Impacto:</em> Un pago inicial más bajo aumenta su Retorno de Inversión (ROI) vía apalancamiento, pero aumenta los pagos mensuales y reduce el Cashflow.",
                        "<strong>Pago Hipotecario (Anual):</strong> El monto TOTAL pagado al banco en un año (Capital + Interés). Multiplique su pago mensual por 12.<br/><em>Consejo:</em> Use el módulo <strong>Reembolso</strong> para calcular esta cifra exacta.",
                        "<strong>Reembolso Capital (Año 1):</strong> La parte de sus pagos que reduce la deuda en el primer año. Es ahorro forzado. Lo encuentra en su tabla de amortización hipotecaria."
                    ]
                },

                { type: 'subtitle', title: "Sección Operaciones (La Verdad)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Trampa Clásica', content: [
                        { type: 'p', text: "Subestimar los gastos. NUNCA tome los números del vendedor por sentado. A menudo 'olvidan' la gestión y el mantenimiento." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Ingresos Brutos:</strong> Total de todos los alquileres si el edificio estuviera 100% lleno todo el año.",
                        "<strong>Tasa de Vacancia (%):</strong> Porcentaje de tiempo que las unidades estarán vacías (entre inquilinos).<br/><em>Estándar:</em> Use siempre al menos <strong>3% a 5%</strong> por precaución, incluso si está lleno. Los bancos exigen esto en sus cálculos.",
                        "<strong>Gastos Operativos:</strong> La cruda realidad. Incluya TODO: Impuestos (Propiedad), Seguros, Servicios (Zonas comunes), Publicidad, Gestión, y especialmente Mantenimiento (reserva).<br/><em>Regla general:</em> Los gastos suelen ser del <strong>35% al 45%</strong> de los ingresos brutos. Si su cálculo llega al 15%, olvidó algo."
                    ]
                },

                { type: 'subtitle', title: "Configuración Avanzada (El Futuro)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Plusvalía (Apreciación) %:</strong> Cuánto sube el valor de la propiedad por año. Sea conservador (2% a 3% para igualar la inflación). Esto es la guinda del pastel, no el pastel.",
                        "<strong>Amortización Fiscal:</strong> Deducción por depreciación permitida por el gobierno. Reduce impuestos hoy pero se 'recupera' (grava) al vender. Consulte a un contador.",
                        "<strong>Tasa Impositiva %:</strong> Su tasa marginal de impuestos. Se usa para calcular el Cashflow Neto real después de impuestos."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Cashflow (Flujo de Caja)",
            icon: 'flux',
            content: [
                { type: 'p', text: "Es el oxígeno de su inversión. Sin cashflow positivo, debe pagar de su bolsillo cada mes para mantener el edificio. Eso es arriesgado." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Ingresos Brutos de Alquiler<br/>(-) Vacancia y Malas Deudas (pérdidas)<br/>= <strong>INGRESOS EFECTIVOS</strong><br/><br/>(-) Gastos Operativos (Impuestos, Seguros...)<br/>= <strong>INGRESO NETO OPERATIVO (NOI)</strong> <span style='color:var(--info-color)'>◄ Rendimiento puro propiedad</span><br/><br/>(-) Servicio Deuda (Hipoteca)<br/>= <strong>CASHFLOW</strong> <span style='color:var(--success-color)'>◄ Cambia su vida</span>" }
                    ]
                },
                { type: 'p', text: "El <strong>NOI</strong> es crucial porque representa el rendimiento de la propiedad <em>independiente</em> de su financiación. Es la cifra que usan los bancos para evaluar el valor económico." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Ratios de Rendimiento",
            icon: 'ratios',
            content: [
                { type: 'p', text: "¿Cómo saber si es un buen trato? Los números no mienten." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Cap Rate', code: 'NOI / Precio', text: "Rendimiento si pagara 100% al contado. La referencia absoluta para comparar propiedades.<br/><strong>Objetivo:</strong> 4.5% a 6% (más alto es mejor)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Cashflow Anual / Pago Inicial', text: "Retorno real sobre efectivo de su bolsillo. Su 'verdadera' tasa de interés.<br/><strong>Objetivo:</strong> > 8% a 10%." },
                        { style: 'warning', title: 'Ratio de Gastos (OER)', code: 'Gastos / Ingresos Brutos', text: "Mide la eficiencia de gestión. Si > 55%, el edificio es un colador. Si < 25%, los números son probablemente falsos.<br/><strong>Zona Sana:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Multiplicador Alquiler Bruto (GRM)', code: 'Precio / Ingresos Brutos', text: "'¿Cuántas veces los ingresos estoy pagando?' Útil para clasificación rápida, pero peligroso pues ignora gastos reales.<br/><strong>Estándar:</strong> 12x a 18x+ (varía mucho por mercado)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Análisis de Riesgo y Banca",
            icon: 'risque',
            content: [
                { type: 'p', text: "Antes de prestarle cientos de miles, el banco mira estos ratios para asegurarse de que no fallará." },

                { type: 'subtitle', title: "Ratio Cobertura de Deuda (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Pago Hipoteca</span><br/>¿Cubren los alquileres la hipoteca? DSCR de <strong>1.25</strong> significa que por cada 100$ de pago al banco, tiene 125$ de ingreso neto. Es el margen de seguridad requerido por los bancos.<br/><strong>Zona Peligro:</strong> < 1.10." },

                { type: 'subtitle', title: "Loan-to-Value (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Monto Préstamo / Valor Propiedad</span><br/>El porcentaje del edificio propiedad del banco. Mayor LTV = mayor apalancamiento, pero mayor riesgo." },

                { type: 'subtitle', title: "Punto de Equilibrio (Break-Even)" },
                { type: 'p', text: "Ocupación mínima para no perder dinero. Si el Break-even es 75%, puede tener 25% de vacancia y aún pagar facturas. Más bajo es más seguro." },

                { type: 'subtitle', title: "Margen de Seguridad" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Hipoteca) / NOI</span><br/>Porcentaje de Ingreso Neto que puede desaparecer antes de entrar en cashflow negativo. Se recomienda <strong>20%+</strong>." },

                { type: 'subtitle', title: "Constante del Préstamo" },
                { type: 'p', text: "<span class='code-badge'>Pago Anual Total / Monto Préstamo</span><br/>Costo verdadero de su deuda. <br/><strong>Secreto Apalancamiento Positivo:</strong> Si Cap Rate > Constante Préstamo, se enriquece usando el dinero del banco." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Estrategias Pro",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'Estrategia BRRRR', content: [
                        { type: 'p', text: "Buy, Rehab, Rent, Refinance, Repeat.<br/><br/>El Santo Grial. El objetivo es comprar deteriorado, aumentar valor vía renovación (forzar plusvalía), luego refinanciar para retirar el 100% del capital inicial. Posee el edificio 'gratis' (retorno infinito)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Principiante)" },
                { type: 'p', text: "Comprar un dúplex/triplex y vivir en una unidad.<br/><strong>Ventaja:</strong> Pago inicial reducido. Los inquilinos pagan su hipoteca. La mejor forma de empezar." },

                { type: 'subtitle', title: "Tasa Interna de Retorno (TIR / IRR)" },
                { type: 'p', text: "Los principiantes miran el Cashflow. Los pros miran la TIR. La TIR calcula el retorno total anualizado combinando los 4 pagadores:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Dinero mensual.",
                        "2. <strong>Reembolso Capital:</strong> Inquilino paga deuda (se enriquece mensualmente).",
                        "3. <strong>Plusvalía:</strong> Valor sube con inflación.",
                        "4. <strong>Beneficios Fiscales:</strong> Depreciación y deducciones."
                    ]
                },
                { type: 'p', text: "Nexus Pro calcula esta TIR por usted sobre 10 años al final del módulo." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Fiscalidad Inmobiliaria",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "El ladrillo es poderoso, pero los impuestos esperan. Entender estos conceptos puede ahorrar miles." },

                { type: 'subtitle', title: "Gastos Corrientes vs Capital" },
                { type: 'p', text: "<strong>Corrientes:</strong> Reparaciones menores (grifo, pintura). 100% deducible el mismo año.<br/><strong>Capital:</strong> Mejoras mayores (techo nuevo, ventanas). No deducible al instante. Se añade al costo del edificio y se deprecia en años." },

                { type: 'subtitle', title: "Recuperación de Depreciación" },
                { type: 'p', text: "Si toma depreciación fiscal para reducir impuestos anualmente, ¡cuidado! Al vender, si vende por más de lo que compró, el gobierno 'recupera' esa depreciación y la grava. Es un préstamo fiscal, no un regalo." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glosario Completo",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Reembolso Capital", def: "Parte del pago hipotecario que reduce deuda. Es enriquecimiento." },
                        { term: "Depreciación Fiscal", def: "Gasto en papel permitido por código fiscal que reduce ingreso imponible." },
                        { term: "Plusvalía", def: "Aumento del valor de la propiedad con el tiempo." },
                        { term: "VTB (Vendor Take Back)", def: "Vendedor acepta ser pagado más tarde por parte del precio. Préstamo del vendedor a usted." },
                        { term: "Cap Rate", def: "Rendimiento sin financiación. NOI / Precio." },
                        { term: "Cash-on-Cash", def: "Retorno líquido sobre efectivo invertido. Cashflow / Pago Inicial." },
                        { term: "Cashflow", def: "Beneficio neto en bolsillo tras todos los gastos e hipoteca." },
                        { term: "Gastos Operativos", def: "Costos para operar edificio (Seg, Imp, Mant). Excluye hipoteca." },
                        { term: "Debt Yield", def: "NOI / Monto Préstamo. Ratio de seguridad para prestamistas comerciales." },
                        { term: "DSCR", def: "Ratio capacidad pago deuda. Debe ser > 1.20." },
                        { term: "Apalancamiento", def: "Usar deuda para aumentar retorno sobre capital." },
                        { term: "Equidad (Equity)", def: "Valor Mercado - Saldo Hipoteca. Riqueza neta en propiedad." },
                        { term: "LTV", def: "Loan to Value % (Préstamo-Valor)." },
                        { term: "Pago Inicial", def: "Contribución inicial de efectivo personal." },
                        { term: "GRM", def: "Precio / Ingresos Brutos. Medida rápida de precio." },
                        { term: "Refinanciar", def: "Re-prestar sobre valor más alto para sacar capital libre de impuestos." },
                        { term: "NOI", def: "Ingresos - Gastos. Beneficio puro operación." },
                        { term: "Tasa Vacancia", def: "% de ingresos perdidos por unidades vacías." },
                        { term: "TIR (IRR)", def: "Retorno total anualizado incluyendo cashflow, capital, plusvalía." },
                        { term: "Valoración", def: "Estimación valor mercado, a menudo basado en NOI y Cap Rate." },
                        { term: "Constante Préstamo", def: "Pago Anual Total / Préstamo. Si < Cap Rate, apalancamiento positivo." },
                        { term: "Margen Seguridad", def: "% caída ingresos soportable antes de pérdida." },
                        { term: "Gross Yield", def: "Ingresos Brutos / Precio. Inverso del GRM." },
                        { term: "ROE (Retorno s/ Equity)", def: "Beneficio Total / Equidad Neta. Retorno real sobre dinero atrapado." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = realEstateGuideData;
