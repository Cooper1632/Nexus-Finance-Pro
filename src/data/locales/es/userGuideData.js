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
            { id: 'budget', label: 'Presupuesto' },
            { id: 'plan', label: 'Plan de Deuda' },
            { id: 'remb', label: 'Reembolso' },
            { id: 'invest', label: 'Inversión' },
            { id: 'analyse', label: 'Análisis de Acciones' },
            { id: 'immo', label: 'Inmobiliaria' },
            { id: 'perf', label: 'Rendimiento' },
            { id: 'projections', label: 'Proyecciones' },
            { id: 'params', label: 'Configuración' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Su guía de referencia para dominar el software.",
    cards: [
        { title: "Visión Global", desc: "Centralice su Patrimonio Neto.", color: "info" },
        { title: "Presupuesto", desc: "Controle ingresos y gastos.", color: "warning" },
        { title: "Estrategia Deuda", desc: "Eliminación inteligente de deudas.", color: "danger" },
        { title: "Rendimiento", desc: "Seguimiento real de sus ganancias.", color: "dark" },
        { title: "Crecimiento", desc: "Interés compuesto y Jubilación.", color: "success" },
        { title: "Inteligencia", desc: "Análisis de Bolsa e Inmobiliaria.", color: "concept" }
    ],
    benefits: {
        title: "Lo que este software hace por usted:",
        items: [
            { title: "Vista Global (Dashboard):", text: "Centralice su Patrimonio Neto, activos y pasivos en un solo vistazo." },
            { title: "Control Presupuestario:", text: "Siga sus ingresos, gastos y capacidad de ahorro mensual." },
            { title: "Estrategia de Deuda:", text: "Planifique la eliminación de deudas (Avalancha/Bola de Nieve) para ahorrar intereses." },
            { title: "Simuladores de Reembolso:", text: "Calcule pagos para hipotecas, préstamos y tarjetas de crédito." },
            { title: "Seguimiento de Cartera:", text: "Gestione sus inversiones y visualice su rendimiento real." },
            { title: "Análisis Inmobiliario:", text: "Calcule la rentabilidad exacta de sus proyectos de alquiler." },
            { title: "Inteligencia Bursátil:", text: "Analice la calidad de las empresas (Puntuación Nexus) antes de invertir." },
            { title: "Seguimiento de Rendimiento:", text: "Visualice la evolución histórica de su riqueza y compárela con los índices." },
            { title: "Proyecciones Futuras:", text: "Calcule el interés compuesto, planifique su jubilación y retiros." },
            { title: "Privacidad Total:", text: "Sus datos se almacenan localmente en su dispositivo, nada se envía a la nube." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Para empezar:",
                content: "Esta guía está diseñada para acompañarle paso a paso. Cada módulo se explica con <strong>ejemplos concretos</strong> para que comprenda no solo <em>cómo</em> usar el software, sino también <em>por qué</em> estas herramientas le ayudarán a enriquecerse."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Panel de Control (Dashboard)",
            desc: "Su torre de control. Agrega datos de todos los demás módulos para darle una visión inmediata de su salud financiera.",
            items: [
                { title: "Patrimonio Neto:", text: "Es EL número más importante. Es todo lo que posee (Activos) MENOS todo lo que debe (Pasivos).", example: "Si tiene una casa de 400k$ y 50k$ en inversiones (Total Activos = 450k$) pero una hipoteca de 300k$ (Pasivo), su Patrimonio Neto es de 150k$." },
                { title: "Activos Totales:", text: "La suma del valor de sus Bienes Raíces, Vehículos (Módulo Presupuesto) e Inversiones (Módulo Inversión).", example: "Casa (350k$) + Auto (20k$) + Inversiones (30k$) = 400k$ de Activos." },
                { title: "Pasivos Totales:", text: "La suma de todas sus deudas registradas en el módulo 'Plan de Deuda' (Hipotecas, Tarjetas, Préstamos).", example: "Hipoteca (280k$) + Préstamo Auto (15k$) + Visa (5k$) = 300k$ de Pasivos." },
                { title: "Flujo de Caja:", text: "El dinero que queda en su bolsillo al final del mes. Calculado automáticamente desde el módulo Presupuesto.", example: "Ingresos (5000$) - Gastos Fijos (3000$) - Gastos Variables (1000$) = Flujo de +1000$." }
            ],
            box: {
                type: "warning",
                title: "Atención a los Escenarios:",
                content: "El Dashboard es dinámico. Si selecciona el 'Escenario B' en el módulo Presupuesto, el Dashboard cambiará instantáneamente para mostrar el impacto de ese escenario en su Patrimonio Neto."
            }
        },
        budget: {
            id: "budget",
            title: "Presupuesto",
            desc: "No sufra más sus gastos. Este módulo le permite decir a su dinero a dónde ir en lugar de preguntarse a dónde se fue.",
            items: [
                { title: "Ingresos y Gastos:", text: "Ingrese sus cifras y elija la frecuencia (Semanal, Mensual, Anual). El software convierte todo a 'Mensual' para simplificar la lectura.", example: "¿Paga su seguro de auto 1200$ al año? Ingrese '1200' y frecuencia 'Anual'. El software contará un gasto de 100$/mes." },
                { title: "Gestión de Activos (Casa/Auto):", text: "Sección especial para listar sus bienes materiales. Aquí ingresa el valor de mercado de su casa o su coche.", example: "Añada una línea 'Casa Principal' con un valor de 450 000$. Este monto se sumará a sus Activos Totales." },
                { title: "Impuestos:", text: "No olvide incluir sus impuestos si es trabajador autónomo, o los impuestos municipales de su propiedad.", example: "Añada 'Impuestos Municipales': 3500$/año." },
                { title: "Escenarios (A/B):", text: "Cree hasta 3 versiones de su presupuesto para probar hipótesis.", example: "Escenario A = Vida actual. Escenario B = '¿Y si compro este dúplex?' (Añado los ingresos de alquiler y los nuevos gastos)." }
            ]
        },
        plan: {
            id: "plan",
            title: "Plan de Deuda",
            desc: "La herramienta definitiva para liberarse de deudas más rápido y ahorrar miles de dólares en intereses.",
            items: [
                { title: "Método 'Avalancha':", text: "Matemáticamente óptimo. Se paga primero la deuda con la tasa de interés más alta.", example: "Tiene una tarjeta de crédito al 20% y un préstamo de auto al 7%. La Avalancha ataca la tarjeta al 20% primero. Ahorro máximo de intereses." },
                { title: "Método 'Bola de Nieve':", text: "Psicológicamente motivador. Se elimina la deuda más pequeña primero para obtener una victoria rápida.", example: "Tiene una deuda pequeña de 500$ (Visa) y una grande de 15 000$ (Auto). Eliminamos la deuda de 500$ inmediatamente para sentir orgullo y motivación." },
                { title: "Columna 'Saldo':", text: "Esto es un simulador. El saldo baja virtualmente mes tras mes.", example: "Importante: Si hace un pago real en su banco, actualice el saldo aquí una vez al mes para mantener la simulación precisa." }
            ],
            warning: {
                title: "Consejo Hipoteca",
                content: "Puede desmarcar la casilla **'Incluir'** para su hipoteca. Esto le permite usar el módulo para enfocarse solo en eliminar sus 'malas' deudas de consumo (Tarjetas, Préstamos personales) sin que la hipoteca deforme el gráfico."
            }
        },
        remb: {
            id: "remb",
            title: "Reembolso",
            desc: "Este módulo contiene 3 calculadoras distintas para ayudarle a tomar decisiones informadas antes de firmar un contrato de préstamo.",
            cards: [
                { title: "Pestaña 1: Hipoteca", desc: "Simule sus pagos mensuales o quincenales. Comprenda el impacto de un pago inicial más alto o una tasa diferente.", example: "Para un condominio de 400 000$ al 5% de interés en 25 años: Ingrese estas cifras para ver que pagará al final 701 508$ (¡de los cuales 301 508$ son solo intereses al banco!)." },
                { title: "Pestaña 2: Préstamo", desc: "Ideal para préstamos de auto o personales. Descubra el costo real de una financiación a largo plazo.", example: "Compra un auto de 30 000$ financiado a 84 meses (7 años) al 8%. La calculadora le mostrará que este coche le costará en realidad 39 200$." },
                { title: "Pestaña 3: Tarjeta de Crédito", desc: "La herramienta de concienciación. Calcula el tiempo (¡a menudo décadas!) necesario para pagar una tarjeta si solo hace el pago mínimo.", example: "Una deuda de 2000$ en una tarjeta al 19.99% con pago mínimo del 3%: Tardará 11 años en pagar todo y pagará 1800$ en intereses." }
            ]
        },
        invest: {
            id: "invest",
            title: "Inversión",
            desc: "Su centro de mando para pilotar su cartera bursátil (Acciones, ETF, Cripto).",
            items: [
                { title: "Indicadores Clave (KPI):", text: "En la parte superior, 5 tarjetas resumen su situación: 1. Valor Actual (Lo que tiene), 2. Total Invertido (Lo que sacó de su bolsillo), 3. Ganancia/Pérdida $ (La diferencia bruta), 4. Rendimiento % (Rendimiento simple), 5. CAGR (Tasa de Crecimiento Anual Compuesto - la verdadera medida de su velocidad de enriquecimiento)." },
                { title: "Burbujas de Análisis:", text: "Cada título recibe una etiqueta de color para ayudarle a decidir rápido:\n• Verde (Excelencia): Ganancia > 1000$ y > 15%.\n• Azul (Motor): Ganancia > 1000$ (Gran volumen).\n• Gris (Dormido): Posición pequeña o poco movimiento.\n• Rojo (Peligro): En pérdida (A vigilar)." },
                { title: "Barra de Herramientas:", text: "• Botón 'Actualizar' (Flechas): Actualiza los precios del mercado.\n• Botón '+': Añadir una transacción (Compra/Venta/Dividendo).\n• Botón 'Rendimiento' (Gráfico): Abre el informe detallado (ver abajo).\n• Botón 'Watchlist' (Ojo): Seguir acciones sin comprarlas.\n• Menú 'Herramientas' (Rueda): Configurar API, vaciar caché o ejecutar diagnóstico." }
            ],
            box: {
                type: "info",
                title: "Informe de Rendimiento (Botón Gráfico)",
                content: "Es el corazón del seguimiento real. Este módulo separa sus ganancias reales de sus simples depósitos de dinero. Contiene 3 pestañas:\n\n1. **Vista General**: Gráfico comparando la Línea Azul (Su capital investido) vs la Línea Verde (Valor real). La brecha entre ambas es su beneficio puro.\n\n2. **Depósitos**: Aquí es donde registra el dinero *fresco* que inyecta (ej: transferencia de 500$ a su cuenta de inversión). Es crucial para que el software no piense que esta transferencia es una ganancia repentina.\n\n3. **Extractos (Snapshots)**: Permite corregir o historiar el valor total de su cuenta en una fecha precisa (ej: 'El 31 de dic, mi cuenta valía 50 000$'). El software suavizará la curva entre estos puntos."
            },
            subSections: [
                {
                    title: "Gestión de Transacciones",
                    intro: "Haga clic en el botón '+' o en el lápiz en una línea para abrir el editor.",
                    items: [
                        { title: "Compra (Buy)", text: "Incrementa su cantidad y recalcula su Precio Medio (PMP) automáticamente.", example: "Compra 10 AAPL a 150$. Su costo total aumenta en 1500$." },
                        { title: "Venta (Sell)", text: "Reduce su cantidad y cristaliza (realiza) la ganancia o pérdida.", example: "Vende 5 AAPL. El software calcula cuánto beneficio ha hecho *realmente* en esas 5 acciones." },
                        { title: "Dividendo", text: "Añade efectivo sin cambiar la cantidad de acciones.", example: "Recibe 50$ de dividendos. Es beneficio puro." }
                    ]
                },
                {
                    title: "Configuración y APIs",
                    intro: "Para tener precios en directo, vaya al menú Herramientas -> Configuración.",
                    items: [
                        { title: "Yahoo Finance (Por defecto)", text: "Cobertura mundial, gratis, sin clave requerida. Perfecto para principiantes." },
                        { title: "Alpha Vantage", text: "Datos profesionales. Requiere clave API gratuita (obtener en su web). Más estable para grandes carteras de EE.UU." },
                        { title: "Questrade", text: "Integración directa. Importa sus posiciones reales. Requiere reconexión manual (Token) segura ya que Nexus no almacena sus credenciales bancarias." }
                    ]
                }
            ],
            button: "Ver Guía Finanzas 101"
        },
        analyse: {
            id: "analyse",
            title: "Análisis de Acciones",
            desc: "No elija más sus acciones al azar. Analícelas como un profesional en segundos.",
            items: [
                { title: "Objetivo:", text: "Este módulo le da una nota objetiva (Puntuación Nexus) sobre la salud fundamental de una empresa, independientemente del 'hype' mediático." },
                { title: "Puntuación Nexus (0-100):", text: "Nota global calculada sobre 7 pilares. >70 es Excelente (Verde), <40 es Arriesgado (Rojo)." },
                { title: "Comparador:", text: "Cree varias tarjetas una al lado de la otra para comparar Apple vs Microsoft vs Google y ver cuál es la mejor oportunidad hoy." }
            ],
            subSections: [
                {
                    title: "Entrada de Datos",
                    intro: "Rellene los campos manualmente o use el Asistente IA.",
                    items: [
                        { title: "Símbolo y Precio", text: "Ingrese el Ticker (ej: AAPL). El precio es necesario para calcular los ratios de valoración." },
                        { title: "BPA (EPS)", text: "Beneficio Por Acción. Si ingresa Precio y BPA, el ratio PER (P/E) se calcula automáticamente." },
                        { title: "Campos Auto-Calculados", text: "El <strong>PER (P/E)</strong> y el <strong>Rendimiento Div. (%)</strong> están en gris porque se calculan automáticamente si proporciona los datos brutos (Precio, BPA, Div. Anual)." },
                        { title: "Exclusión (Casilla)", text: "Desmarque la casilla a la derecha de un campo para excluirlo del cálculo de la puntuación (ej: ignorar el Dividendo para una empresa como Tesla que no paga)." }
                    ]
                },
                {
                    title: "Comprender los 7 Pilares",
                    intro: "Puntos asignados por cada métrica de calidad.",
                    items: [
                        { title: "1. Valoración (PER)", text: "¿Es caro? Buscamos un PER entre 15 y 25. Demasiado alto = Burbuja, Demasiado bajo = Problema." },
                        { title: "2. Crecimiento", text: "¿La empresa crece? Buscamos >15% por año." },
                        { title: "3. Margen Neto", text: "¿Es rentable? Buscamos >20%." },
                        { title: "4. Deuda", text: "¿Es solvente? Deuda/Capital < 1.0." },
                        { title: "5. ROE", text: "Eficacia de la gestión. Buscamos >15%." },
                        { title: "6. Liquidez", text: "Capacidad de pagar facturas a corto plazo. Buscamos >1.5." },
                        { title: "7. Dividendo", text: "Bonus. Buscamos >2% (si aplica)." }
                    ]
                },
                {
                    title: "Herramientas Inteligentes",
                    intro: "Funcionalidades para acelerar su análisis.",
                    items: [
                        { title: "Bombilla (Asistente IA)", text: "Haga clic en la bombilla amarilla. Copia un 'Prompt Mágico'. Péguelo en ChatGPT/Gemini y le dará todas las cifras para rellenar en tabla." },
                        { title: "Ratio PEG", text: "Mostrado arriba. Si < 1.0, es una ganga (el Precio es bajo respecto al Crecimiento). Es el ratio favorito de Peter Lynch." },
                        { title: "Radar Visual", text: "Un gráfico de araña muestra si la empresa está equilibrada o si tiene una debilidad mayor (ej: fuerte crecimiento pero deuda enorme)." },
                        { title: "Guardar y Vigilar", text: "Botón 'Guardar' para mantener el análisis en memoria. Botón 'Vigilar' (Ojo) para añadirlo a su Watchlist en el módulo Inversión." }
                    ]
                }
            ]
        },
        immo: {
            id: "immo",
            title: "Inmobiliaria",
            desc: "Para el inversor serio. No confíe en el 'instinto', confíe en las matemáticas. Este módulo calcula la rentabilidad real de un inmueble en segundos.",
            cards: [
                { title: "NOI (Ingreso Neto Operativo)", text: "Es el beneficio puro que el inmueble genera antes incluso de pensar en la hipoteca. Es la cifra más fiable para comparar dos inmuebles.", example: "Un triplex genera 60 000$ de alquileres. Impuestos, seguros y mantenimiento cuestan 20 000$. El NOI es 40 000$." },
                { title: "Cap Rate (Tasa de Capitalización)", text: "La potencia del motor del inmueble. Mide el rendimiento si lo comprara 100% al contado. Un Cap Rate alto (>6%) es signo de buen negocio.", example: "Precio: 800 000$. NOI: 40 000$. Cálculo: 40k / 800k = 5% de Cap Rate. (Un poco bajo, ¡intente negociar el precio!)." },
                { title: "Cash-on-Cash (Retorno sobre Efectivo)", text: "Es el verdadero retorno de inversión (ROI) de su dinero. ¿Cuánto % le reporta su pago inicial en su bolsillo cada año?", example: "Puso 150 000$ de entrada. Después de pagar la hipoteca, le quedan 15 000$ de flujo positivo anual. 15k / 150k = 10% Cash-on-Cash. Excelente (¡mejor que la bolsa!)." },
                { title: "DSCR (Cobertura de Deuda)", text: "La cifra que su banquero mira primero. Mide si el inmueble genera suficiente dinero para pagar la hipoteca con seguridad.", example: "Su hipoteca cuesta 30 000$/año. Su NOI es 40 000$. DSCR = 40k / 30k = 1.33. El banco estará feliz porque tiene 33% de margen de seguridad." },
                { title: "GRM (Multiplicador de Alquiler Bruto)", text: "Un ratio rápido para filtrar tratos. ¿Cuántas veces los ingresos brutos paga por el inmueble?", example: "Precio 500k, Ingresos 50k. GRM = 10. Si el mercado está a 14, es una ganga. Si está a 8, es muy caro." },
                { title: "Punto de Equilibrio (Break-Even)", text: "Su nivel de seguridad. ¿Qué porcentaje de los ingresos se comen los gastos y la hipoteca?", example: "Si el ratio es 85%, significa que se queda con 15% de beneficio, pero si los alquileres bajan un 16%, pierde dinero." },
                { title: "LTV (Préstamo-Valor)", text: "El apalancamiento. ¿Qué parte del inmueble financia el banco?", example: "80% LTV significa que puso 20% de entrada. A mayor LTV, mayor apalancamiento (pero mayor riesgo)." },
                { title: "ROI Total (Rendimiento Global)", text: "La visión de conjunto. Incluye el Cashflow (dinero bolsillo) + el Reembolso de Capital (enriquecimiento latente).", example: "Gana 5000$ de cashflow, pero sus inquilinos también han pagado 7000$ de capital de su préstamo. Su enriquecimiento real es 12 000$." }
            ],
            button: "Ver Guía Inmobiliaria Completa"
        },
        perf: {
            id: "perf",
            title: "Rendimiento (Calculadora)",
            desc: "Un auditor imparcial. Calcule el rendimiento preciso de una inversión entre dos fechas.",
            items: [
                { title: "Objetivo:", text: "Este módulo NO es su cartera global (ver módulo Inversión). Es una calculadora aislada para responder: '¿Cuánto me reportó esta acción específica entre el 1 de Enero y el 31 de Diciembre?'" },
                { title: "Independiente:", text: "Sin vínculo con sus cuentas registradas. Simplemente ingrese un monto inicial, un monto final y dos fechas." }
            ],
            subSections: [
                {
                    title: "Rendimiento Total vs CAGR",
                    intro: "Dos formas de ver la verdad:",
                    items: [
                        { title: "Rendimiento Total", text: "Simple y bruto. 'Hice +20%'. Útil para duraciones cortas.", example: "Comprado 100$, Vendido 120$ = +20%." },
                        { title: "CAGR (Tasa Anual)", text: "El verdadero juez para el largo plazo. Anualiza su rendimiento para hacerlo comparable a una cuenta de ahorros.", example: "Hacer +20% está bien. Pero si le tomó 10 años, el CAGR es solo 1.8% anual (malo). Si le tomó 6 meses, el CAGR es 44% (genio)." }
                    ]
                },
                {
                    title: "El Benchmark (S&P 500)",
                    intro: "La prueba de fuego.",
                    items: [
                        { title: "La Comparación", text: "Ingrese sus fechas y active el interruptor. El software buscará el historial REAL del S&P 500 en ese periodo preciso." },
                        { title: "El Veredicto", text: "El gráfico superpone su rendimiento (Línea Verde) con la del mercado americano (Línea Gris). Si está por encima, venció al mercado. Si no, habría ganado más no haciendo nada (ETF índice)." }
                    ]
                }
            ]
        },
        projections: {
            id: "projections",
            title: "Proyecciones y Calculadoras",
            desc: "No adivine más. Sepa exactamente cuándo podrá dejar de trabajar.",
            cards: [
                { title: "Valor Futuro", desc: "La magia del interés compuesto.", example: "¿Cuánto valdrán mis 10 000$ en 20 años?" },
                { title: "Objetivo (Target)", desc: "Planificación inversa.", example: "Quiero 1 millón $. ¿Cuánto debo poner al mes?" },
                { title: "Retiro (Renta)", desc: "Estrategia de desembolso.", example: "¿Mi millón me permite retirar 4000$/mes de por vida?" }
            ],
            subSections: [
                {
                    title: "Calculadora 1: Valor Futuro",
                    intro: "Para los ahorradores que miran lejos.",
                    items: [
                        { title: "Frecuencia y Crecimiento", text: "Puede simular pagos que aumentan cada año (ej: indexado a su salario)." },
                        { title: "Timing (Inicio/Fin)", text: "Detalle sutil: Invertir el 1 de enero rinde más que el 31 de diciembre. Cambie 'Inicio de periodo' para ver el impacto en 30 años." },
                        { title: "Inflación", text: "¡No la olvide! 1 millón en 30 años no valdrá lo que 1 millón de hoy. Mire la línea 'Poder Adquisitivo Real' para la verdad." }
                    ]
                },
                {
                    title: "Calculadora 2: Objetivo de Ahorro",
                    intro: "Para planificar un proyecto preciso (Casa, Viaje, Jubilación).",
                    items: [
                        { title: "La Respuesta Clara", text: "La herramienta le da el monto EXACTO a ahorrar por día/semana/mes para lograr su meta." },
                        { title: "Ajuste la Tasa", text: "Vea cómo obtener un rendimiento del 7% en lugar del 5% reduce drásticamente el esfuerzo de ahorro necesario." }
                    ]
                },
                {
                    title: "Calculadora 3: Retiros (Renta)",
                    intro: "La prueba definitiva de la jubilación.",
                    items: [
                        { title: "Ajuste Inflación", text: "Marcar esta casilla es vital. Simula que aumenta sus retiros cada año para pagar el pan que se encarece. Si no lo hace, su nivel de vida bajará." },
                        { title: "El Riesgo de Agotamiento", text: "Si el gráfico cae a cero antes del final, tiene un problema. Reduzca sus retiros o trabaje más tiempo." }
                    ]
                }
            ]
        },
        params: {
            id: "params",
            title: "Configuración y Herramientas",
            subSections: [
                {
                    title: "Datos y Seguridad (Privacidad Primero)",
                    intro: "Nexus Finance es único: Sus datos NUNCA salen de su computadora.",
                    items: [
                        { title: "Backup JSON (Copia seguridad)", text: "Como no tenemos servidor en la nube (por su seguridad), usted es responsable de sus datos. Haga una copia ('Exportar') una vez al mes." },
                        { title: "Importar", text: "Permite restaurar una copia o transferir sus datos de un PC a un Mac en segundos." }
                    ]
                },
                {
                    title: "Personalización",
                    intro: "Adapte la herramienta a su estilo.",
                    items: [
                        { title: "Divisa y Visualización", text: "Cambie entre CAD, USD, EUR. Solo cambia el símbolo ($/€), el software no hace conversión de tasa de cambio." },
                        { title: "Modo Decimal (.00)", text: "Actívelo para máxima precisión (ej: 1250.45$). Desactívelo para un look más depurado y minimalista (ej: 1250$). Ideal para grandes montos donde los céntimos importan poco." },
                        { title: "Tema Oscuro/Claro", text: "Haga clic en la luna/sol. El modo Oscuro se recomienda para sesiones nocturnas intensas." },
                        { title: "Ancho del sitio", text: "Si tiene una pantalla grande, elija '1600px' o '100%'. Amplía la interfaz para más comodidad, evitando que todo esté comprimido en el centro." }
                    ]
                },
                {
                    title: "Zona de Peligro (Reinicio)",
                    intro: "Usar con precaución.",
                    items: [
                        { title: "Reiniciar Módulo (Naranja)", text: "Borra SOLO los datos de la pestaña activa (ej: borrar solo el Presupuesto para empezar el año). Es seguro." },
                        { title: "Reinicio de Fábrica (ROJO)", text: "El arma nuclear. Borra TODO. Presupuesto, Inversiones, Historial. Es irreversible (salvo si tiene un backup JSON)." }
                    ]
                }
            ],
            items: []
        },
        glossaire: {
            id: "glossaire",
            title: "Glosario",
            items: [
                { title: "BPA (EPS)", text: "Beneficio Por Acción." },
                { title: "PER (P/E)", text: "Ratio Precio/Beneficio. Indica si la acción es cara o barata." },
                { title: "Cuenta Libre de Impuestos", text: "Cuenta donde las ganancias no son imponibles (ej: TFSA, Roth IRA, ISA)." },
                { title: "Cuenta de Jubilación", text: "Cuenta con impuestos diferidos para largo plazo (ej: RRSP, 401k)." },
                { title: "ACB", text: "Costo Base Ajustado. Su costo fiscal promedio." },
                { title: "Patrimonio Neto", text: "Activos - Pasivos. Riqueza real." }
            ]
        }
    }
};
