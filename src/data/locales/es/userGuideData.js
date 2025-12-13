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
        title: "Guía del Usuario",
        items: [
            { id: 'intro', label: 'Introducción' },
            { id: 'dashboard', label: 'Panel de Control' },
            { id: 'budget', label: 'Presupuesto y Activos' },
            { id: 'plan', label: 'Plan de Deudas' },
            { id: 'remb', label: 'Reembolso' },
            { id: 'invest', label: 'Inversión' },
            { id: 'analyse', label: 'Análisis de Acciones' },
            { id: 'immo', label: 'Inmobiliario' },
            { id: 'perf', label: 'Rendimiento' },
            { id: 'projections', label: 'Proyecciones' },
            { id: 'params', label: 'Configuración' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Su guía de referencia para usar el software.",
    cards: [
        { title: "Vista Global", desc: "Centralice su Patrimonio Neto.", color: "info" },
        { title: "Presupuesto y Flujo", desc: "Dominio de ingresos y gastos.", color: "warning" },
        { title: "Estrategia de Deuda", desc: "Eliminación inteligente de deudas.", color: "danger" },
        { title: "Rendimiento", desc: "Seguimiento real de sus rendimientos.", color: "dark" },
        { title: "Crecimiento", desc: "Interés compuesto y Jubilación.", color: "success" },
        { title: "Inteligencia", desc: "Análisis Bolsa e Inmobiliario.", color: "concept" }
    ],
    benefits: {
        title: "Lo que este software le aporta:",
        items: [
            { title: "Vista Global (Dashboard):", text: "Centralice su Patrimonio Neto, sus activos y sus deudas de un vistazo." },
            { title: "Control Presupuestario:", text: "Siga sus ingresos, gastos y su capacidad de ahorro mensual." },
            { title: "Estrategia de Deuda:", text: "Planifique la eliminación de sus deudas (Avalancha/Bola de nieve) para ahorrar intereses." },
            { title: "Simuladores de Reembolso:", text: "Calcule sus pagos para hipotecas, préstamos y tarjetas de crédito." },
            { title: "Seguimiento de Cartera:", text: "Gestione sus inversiones y visualice su rendimiento real." },
            { title: "Análisis Inmobiliario:", text: "Calcule la rentabilidad exacta de sus proyectos de alquiler." },
            { title: "Inteligencia Bursátil:", text: "Analice la calidad de las empresas (Nexus Score) antes de invertir." },
            { title: "Seguimiento de Rendimiento:", text: "Visualice la evolución histórica de su riqueza y compárela con los índices." },
            { title: "Proyecciones Futuras:", text: "Calcule sus intereses compuestos, planifique su jubilación y sus retiros." },
            { title: "Confidencialidad Total:", text: "Sus datos se almacenan localmente en su dispositivo, nada se envía a la nube." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Consejo:",
                content: "Esta guía explica el uso técnico del software. Para conceptos teóricos financieros (Bolsa, Ratios), consulte la <strong>Guía Finanzas 101</strong> disponible en el menú Educación."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Panel de Control",
            desc: "Su centro de control que agrega los datos de todos los módulos.",
            items: [
                { title: "Patrimonio Neto:", text: "Indicador clave <code>(Total Activos - Total Pasivos)</code>." },
                { title: "Activos Totales:", text: "Suma de su cartera (Inversión) y sus bienes (Presupuesto/Activos)." },
                { title: "Pasivos Totales:", text: "Acumulado de todas las deudas ingresadas en el módulo Plan." },
                { title: "Flujo de Caja:", text: "Su saldo mensual disponible (Ingresos - Gastos - Ahorro)." }
            ],
            box: {
                type: "warning",
                title: "Nota Importante - Escenarios:",
                content: "El Panel de Control muestra siempre los datos del <strong>Escenario Activo</strong> (el escenario seleccionado en la pantalla) para cada módulo. Si cambia de escenario en el módulo Presupuesto, el Panel de Control se actualizará para reflejar esa elección."
            }
        },
        budget: {
            id: "budget",
            title: "Presupuesto y Activos",
            desc: "La piedra angular de su gestión financiera.",
            items: [
                { text: "Rellene los importes para cada partida con la frecuencia correcta." },
                { title: "Impuestos y Tasas:", text: "Nueva categoría para gestionar sus pagos a cuenta o saldos de impuestos." },
                { title: "Sección 'Valor de sus activos':", text: "Esta sección está dedicada exclusivamente a sus bienes materiales (Inmuebles, Vehículos) para establecer su patrimonio neto. Sus acciones e inversiones van en el módulo Inversión." }
            ]
        },
        projections: {
            id: "projections",
            title: "Calculadoras de Proyección",
            cards: [
                { title: "Valor Futuro", desc: "Visualice el crecimiento de sus inversiones con el interés compuesto." },
                { title: "Objetivo", desc: "Fije un monto objetivo y una fecha, la herramienta calcula el esfuerzo de ahorro requerido." },
                { title: "Retiro", desc: "Simule la fase de desembolso. ¿Cuánto tiempo durará su capital?" }
            ]
        },
        plan: {
            id: "plan",
            title: "Plan de Deudas",
            desc: "Establezca su estrategia de reembolso óptima.",
            items: [
                { title: "Avalancha:", text: "Prioriza las tasas de interés altas (Ahorro máximo)." },
                { title: "Bola de Nieve:", text: "Prioriza los saldos pequeños (Motivación psicológica)." }
            ],
            warning: {
                title: "Nota Importante - Hipotecas",
                content: "El módulo 'Plan' es un <strong>simulador</strong>. No actualiza automáticamente su saldo real en el Panel de Control.<br/><strong>Acción requerida:</strong> Una vez al mes, ajuste manualmente el campo 'Monto' en este módulo para reflejar su estado de cuenta real."
            }
        },
        remb: {
            id: "remb",
            title: "Simuladores de Reembolso",
            desc: "Calcule sus pagos para diferentes tipos de préstamos.",
            cards: [
                { title: "Hipoteca:", desc: "Simule sus pagos mensuales, el interés total y el impacto de un pago inicial (Compra/Renovación)." },
                { title: "Préstamo Personal:", desc: "Calcule el costo real de un préstamo de auto o personal." },
                { title: "Tarjeta de Crédito:", desc: "Vea el tiempo necesario para pagar una tarjeta con el pago mínimo." }
            ]
        },
        invest: {
            id: "invest",
            title: "Inversión",
            desc: "Seguimiento completo de su cartera bursátil.",
            items: [
                { title: "Fuentes de Datos:", text: "Elija entre <strong>Yahoo Finance (Gratis, Diferido 15min)</strong> o <strong>Alpha Vantage (Tiempo Real, Clave requerida)</strong> a través de la configuración." },
                { title: "Actualizar:", text: "Actualiza el valor de sus títulos instantáneamente." },
                { title: "Historial:", text: "Modifique o elimine cualquier transacción pasada." },
                { title: "Rendimiento (GIPS):", text: "Analiza el rendimiento real (CAGR) ponderado por el tiempo." }
            ],
            box: {
                type: "warning",
                title: "Sobre las Novedades:",
                content: "<ul><li><strong>Yahoo Finance:</strong> Excelente opción gratuita, pero tenga en cuenta que los precios tienen un retraso de 15 minutos con respecto al mercado.</li><li><strong>Questrade:</strong> La opción de conexión aparecerá <em>únicamente</em> si su moneda principal es el <strong>CAD</strong> (Dólar Canadiense).</li></ul>"
            },
            button: "Ver la Guía Finanzas 101"
        },
        analyse: {
            id: "analyse",
            title: "Análisis de Acciones",
            desc: "Evalúe la salud fundamental de una empresa antes de invertir.",
            items: [
                { title: "Nexus Score (0-100):", text: "Nota sintética basada en 7 métricas clave (P/E, Crecimiento, Margen, Deuda, ROE...)." },
                { title: "Ratio PEG:", text: "Detecta las acciones infravaloradas en relación con su crecimiento." },
                { title: "Asistente IA:", text: "Genera un prompt optimizado para Gemini/ChatGPT para recuperar los datos financieros." }
            ]
        },
        perf: {
            id: "perf",
            title: "Rendimiento",
            desc: "Visualice la evolución real de su riqueza.",
            items: [
                { title: "Gráfico Histórico:", text: "Curva de evolución de su Patrimonio Neto y de sus Activos totales en el tiempo." },
                { title: "Benchmarks:", text: "Compare su propio rendimiento con el de los grandes índices (S&P 500, TSX)." }
            ]
        },
        immo: {
            id: "immo",
            title: "Inmobiliario",
            desc: "Análisis de rentabilidad de alquiler profesional.",
            cards: [
                { title: "NOI:", text: "Ingreso Neto Operativo (Beneficio antes de hipoteca)." },
                { title: "Cap Rate:", text: "Rendimiento puro del edificio sin apalancamiento." },
                { title: "Cash-on-Cash:", text: "Rendimiento real sobre su pago inicial." },
                { title: "DSCR:", text: "Ratio de cobertura de la deuda (Banco)." }
            ],
            button: "Guía Inmobiliaria"
        },
        params: {
            id: "params",
            title: "Configuración y Herramientas",
            items: [
                { title: "Copia de Seguridad / Restauración:", text: "Exporte sus datos en archivo JSON para no perderlos nunca." },
                { title: "Calculadora:", text: "Herramienta flotante disponible en toda la aplicación." },
                { title: "Restablecer Módulo:", text: "El botón naranja (flecha circular) borra solo los datos del módulo activo." },
                { title: "Restablecimiento de Fábrica:", text: "El botón rojo borra TODOS los datos de la aplicación. <span style='color:var(--danger-color); font-weight:bold'>Acción irreversible.</span>" }
            ]
        }
    }
};
