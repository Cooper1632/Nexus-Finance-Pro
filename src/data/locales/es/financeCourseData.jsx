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
        id: 1, title: "1. Precio/Beneficio (P/E)", color: pastelColors[0],
        biz: {
            formula: "Precio / Beneficio (EPS)",
            desc: "Cuánto paga por 1$ de beneficio. Indica si la acción es cara (Crecimiento) o barata (Valor).",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor (para Valor)",
            example: "100$ (Precio) / 5$ (EPS) = 20x"
        },
        fam: {
            title: "Precio de Compra Familiar",
            desc: "Imagine que alguien quiere 'comprar' a su familia. Si ahorra 10k/año y le compran por 200k, el P/E es 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor",
            example: "200.000$ / 10.000$ = 20x"
        }
    },
    {
        id: 2, title: "2. Crecimiento (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Final / Inicial)^(1/n)) - 1",
            desc: "Velocidad a la que la empresa aumenta sus beneficios o ventas cada año.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Aumento Salarial",
            desc: "Su aumento anual. Si pasa de 50k a 55k, tiene un crecimiento del 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "(55k - 50k) / 50k = 10%"
        }
    },
    {
        id: 3, title: "3. Margen Neto (%)", color: pastelColors[2],
        biz: {
            formula: "Beneficio Neto / Ingresos",
            desc: "% de cada dólar de ventas que se queda en el bolsillo de la empresa después de gastos.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "10.000$ / 100.000$ = 10%"
        },
        fam: {
            title: "Tasa de Ahorro",
            desc: "Su tasa de ahorro. Si gana 4000$ y ahorra 400$, su margen es del 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "400$ / 4000$ = 10%"
        }
    },
    {
        id: 4, title: "4. Deuda / Capital", color: pastelColors[3],
        biz: {
            formula: "Deuda Total / Capital Total",
            desc: "Nivel de deuda. Si > 1.0, la empresa debe más dinero de lo que vale en papel.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor (< 1.0)",
            example: "200k$ / 100k$ = 2.0 (Arriesgado)"
        },
        fam: {
            title: "Ratio de Endeudamiento",
            desc: "(Hipoteca + Tarjeta) / Su Patrimonio Neto.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor",
            example: "300k$ (Deuda) / 100k$ (Neto) = 3.0"
        }
    },
    {
        id: 5, title: "5. ROE (Retorno sobre Capital)", color: pastelColors[4],
        biz: {
            formula: "Beneficio Neto / Capital Accionistas",
            desc: "Eficiencia de la gestión para generar beneficios con el dinero de los accionistas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor (> 15%)",
            example: "15$ / 100$ = 15%"
        },
        fam: {
            title: "Eficiencia de Inversión",
            desc: "Si tiene 100k de patrimonio y genera 10k en ganancias/intereses, su ROE es 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "10.000$ / 100.000$ = 10%"
        }
    },
    {
        id: 6, title: "6. Ratio Corriente (Liquidez)", color: pastelColors[5],
        biz: {
            formula: "Activos Curr. / Pasivos Curr.",
            desc: "Capacidad para pagar facturas inmediatas. Si < 1.0, riesgo de quedarse sin efectivo.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor (> 1.5)",
            example: "200k$ / 100k$ = 2.0"
        },
        fam: {
            title: "Cobertura Fondo Emergencia",
            desc: "Su Fondo de Emergencia / Sus facturas mensuales.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor (Seguridad)",
            example: "5000$ / 2500$ = 2.0"
        }
    },
    {
        id: 7, title: "7. Rentabilidad por Dividendo", color: pastelColors[6],
        biz: {
            formula: "Dividendo Anual / Precio Acción",
            desc: "El retorno en efectivo de la inversión pagado por la empresa.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor (Max 10-12%)",
            example: "4$ / 100$ = 4%"
        },
        fam: {
            title: "Dinero de Bolsillo",
            desc: "El dinero que se paga a sí mismo para diversión de sus inversiones.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Más libertad",
            example: "50$ (Recibido) / 1000$ (Invertido) = 5%"
        }
    },
    {
        id: 8, title: "8. Margen Bruto", color: pastelColors[7],
        biz: {
            formula: "(Ingresos - Costos) / Ingresos",
            desc: "Rentabilidad básica antes de oficinas, publicidad e impuestos.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Tasa de Quema (Burn Rate)",
            desc: "Gastos vitales mensuales (Renta + Comida). ¿Cuántos meses sobrevive sin ingresos?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor (Gastos)",
            example: "2000$ / mes (Gastos vitales)"
        }
    },
    {
        id: 9, title: "9. Precio/Ventas (P/S)", color: pastelColors[8],
        biz: {
            formula: "Cap. de Mercado / Ingresos",
            desc: "Para valorar empresas sin beneficios. Compara valor de mercado con volumen de ventas.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor",
            example: "1M$ / 500k$ = 2.0x"
        },
        fam: {
            title: "ROI (Retorno de Inversión)",
            desc: "Invertir 20k en una cocina que aumenta el valor de la casa en 30k.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "(30k - 20k) / 20k = 50%"
        }
    },
    {
        id: 10, title: "10. Precio/Flujo de Caja (P/CF)", color: pastelColors[9],
        biz: {
            formula: "Precio / Flujo de Caja por Acción",
            desc: "A menudo más fiable que el P/E. Indica la capacidad real de generar efectivo.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor",
            example: "100$ / 10$ = 10x"
        },
        fam: {
            title: "Capital de Trabajo",
            desc: "Su colchón: Cuenta Corriente + Ahorros Accesibles MENOS facturas próximas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor (Positivo)",
            example: "2000$ (Banco) - 1500$ (Facturas) = +500$"
        }
    },
    {
        id: 11, title: "11. Deuda / Activos Totales", color: pastelColors[10],
        biz: {
            formula: "Deuda Total / Activos Totales",
            desc: "¿Qué parte de la empresa está financiada por el banco?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor",
            example: "400k$ / 1M$ = 0.4"
        },
        fam: {
            title: "Flujo de Caja Libre",
            desc: "Sus ahorros MENOS reparaciones obligatorias de la casa. Dinero realmente disponible.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Mayor = Mejor",
            example: "5000$ (Ahorros) - 2000$ (Techo) = 3000$"
        }
    },
    {
        id: 12, title: "12. Ratio de Pago (Payout)", color: pastelColors[11],
        biz: {
            formula: "Dividendos Pagados / Beneficio Neto",
            desc: "Parte de los beneficios devuelta a los accionistas. Si > 80%, el dividendo puede estar en riesgo.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor (Sostenible)",
            example: "2$ (Div) / 4$ (EPS) = 50%"
        },
        fam: {
            title: "Ratio de Pago Personal",
            desc: "% de su excedente usado para mimarse (Restaurantes) en lugar de reinvertir.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Menor = Mejor (Riqueza futura)",
            example: "400$ (Restos) / 1000$ (Excedente) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Guía de Finanzas 101",
        subtitle: "Dominando las Finanzas Personales de la A a la Z",
        parts: [
            { title: "Introducción", items: [{ id: 'intro', label: '¿Por qué esta guía?' }] },
            { title: "Parte 1: Los Cimientos", items: [{ id: 'chap1', label: "1. La Mentalidad Correcta" }, { id: 'chap2', label: "2. El Presupuesto, Su GPS" }, { id: 'chap3', label: "3. Activos vs Pasivos" }, { id: 'chap4', label: "4. El Fondo de Emergencia" }, { id: 'chap5', label: "5. Gestionar la Deuda" }] },
            { title: "Parte 2: Invirtiendo", items: [{ id: 'chap6', label: "6. ¿Por qué Invertir?" }, { id: 'chap7', label: "7. Interés Compuesto" }, { id: 'chap8', label: "8. Riesgo/Retorno" }, { id: 'chap9', label: "9. Tipos de Inversión" }, { id: 'chap10', label: "10. Tipos de Cuentas" }] },
            { title: "Parte 3: La Bolsa en Detalle", items: [{ id: 'chap11', label: "11. La Acción" }, { id: 'chap12', label: "12. Análisis Fundamental" }, { id: 'chap13', label: "13. Ratios Clave" }, { id: 'chap14', label: "14. Dividendos" }, { id: 'chap15', label: "15. Construyendo su Portafolio" }, { id: 'chap16', label: "16. Psicología" }] },
            { title: "Parte 4: Sus Objetivos", items: [{ id: 'chap17', label: "17. Objetivos" }, { id: 'chap18', label: "18. Jubilación" }] },
            { title: "Parte 5: Estrategias Avanzadas", items: [{ id: 'chap19', label: "19. Fund. vs Téc." }, { id: 'chap20', label: "20. Órdenes de Bolsa" }, { id: 'chap21', label: "21. Impuestos (ACB)" }, { id: 'chap22', label: "22. Rebalanceo" }, { id: 'chap23', label: "23. Trampas Psicológicas" }] },
            { title: "Anexo", items: [{ id: 'chap24', label: "24. Glosario" }, { id: 'bonus_psych', label: "Bonus: Psicología" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Introducción: ¿Por qué esta guía?",
            content: [
                { type: 'p', text: "Tiene en sus manos una herramienta poderosa: <strong>Nexus Finance Pro</strong>. Es una calculadora sofisticada, un gestor de portafolio preciso y un planificador de deuda estratégico, todo en uno." },
                { type: 'p', text: "Pero una herramienta, por poderosa que sea, solo es efectiva si el artesano sabe cómo y por qué usarla." },
                { type: 'p', text: "Esta guía es el <strong>\"Por qué\"</strong>. Nexus Finance Pro es el <strong>\"Cómo\"</strong>." },
                { type: 'p', text: "No necesita ser un experto para usar Nexus Finance Pro, pero comprender los conceptos fundamentales transformará su experiencia. No solo hará clic en botones; ejecutará un plan." },
                {
                    type: 'box', style: 'info', title: 'Lo que aprenderá', content: [
                        { type: 'p', text: "Esta guía le enseñará los principios atemporales de la gestión del dinero. Cubriremos:" },
                        { type: 'ul', items: ["<strong>Psicología:</strong> Cómo dominar sus emociones para evitar errores costosos.", "<strong>Los Cimientos:</strong> Construir un presupuesto sólido, crear un fondo de emergencia y atacar sus deudas.", "<strong>Invertir:</strong> Entender por qué y cómo hacer que su dinero trabaje para usted.", "<strong>La Bolsa:</strong> Desmitificar acciones, ETFs y ratios financieros para invertir con confianza.", "<strong>Estrategias Avanzadas:</strong> Conceptos de nivel intermedio para optimizar sus impuestos y gestión de portafolio."] }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Capítulo 1: La Mentalidad Correcta",
            content: [
                { type: 'p', text: "¡Bienvenido a esta guía! Antes de hablar de números, ratios o estrategias, debemos hablar de la herramienta más poderosa a su disposición: su mentalidad." },
                { type: 'p', text: "La gestión financiera no es cuestión de suerte. No es un secreto reservado para una élite. Es un conjunto de hábitos, decisiones y sistemas que cualquiera puede aprender y aplicar." },
                { type: 'p', text: "El mayor obstáculo no es la falta de dinero, es la psicología. Es el miedo a mirar sus cuentas, la procrastinación o la sensación de ser \"malo con los números\"." },
                {
                    type: 'box', style: 'warning', title: 'Mitos a Desmentir', content: [
                        { type: 'ul', items: ["<strong>Mito 1: \"Se necesita dinero para ganar dinero.\"</strong><br>Falso. Se necesitan hábitos para ganar dinero. Una persona que ahorra 100$ al mes con un plan siempre vencerá a una persona que gana 10.000$ al mes pero gasta 10.100$.", "<strong>Mito 2: \"Invertir es como apostar.\"</strong><br>Falso. La especulación a corto plazo (day trading) es como apostar. La inversión a largo plazo, basada en el análisis de la salud de la empresa, es participar en el crecimiento económico global. Es poseer una parte de un negocio real.", "<strong>Mito 3: \"Soy demasiado joven / demasiado viejo para empezar.\"</strong><br>Falso. Si es joven, su mayor activo es el tiempo (vea el Capítulo 7 sobre el interés compuesto). Si es mayor, su mayor activo es (a menudo) mayores ingresos y disciplina. El mejor momento para empezar fue hace 10 años. El segundo mejor momento es hoy."] }
                    ]
                },
                { type: 'p', text: "<strong>Su Objetivo Principal:</strong> INDEPENDENCIA Financiera. No se trata de hacerse rico para comprar un coche de lujo. Se trata de tener suficientes activos (inversiones) trabajando para usted, para que ya no necesite trabajar para pagar sus facturas. El trabajo se convierte en una elección, no en una obligación." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Capítulo 2: El Presupuesto, Su GPS",
            content: [
                { type: 'p', text: "No puede llegar a un destino si no sabe dónde está. El presupuesto es su \"Usted está aquí\" en el mapa financiero. No es una prisión diseñada para evitar que gaste; es una herramienta diseñada para darle permiso para gastar sin culpa." },
                { type: 'p', text: "Un presupuesto responde a una sola pregunta: <strong>¿A dónde va mi dinero?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'El Presupuesto Base Cero', content: [
                        { type: 'p', text: "El método más efectivo es el \"Presupuesto Base Cero\". La idea es simple: al final del mes, la diferencia entre sus ingresos y sus salidas de dinero debe ser cero. ¡Esto no significa que no le quede nada! Significa que cada dólar ha recibido una misión." },
                        { type: 'p', text: "<code>Ingresos - Gastos - Ahorros - Inversiones = 0$</code>" },
                        { type: 'p', text: "Si gana 3000$ y tiene 2500$ en gastos, le quedan 500$. Con un presupuesto base cero, decide por adelantado qué harán esos 500$: \"200$ para fondo de emergencia\", \"100$ para TFSA\", \"200$ para fondo de vacaciones\"." }
                    ]
                },
                { type: 'p', text: "<strong>Actúe:</strong> Use el <strong>Módulo de Presupuesto</strong> de Nexus Finance Pro. Enumere TODOS sus ingresos y TODOS sus gastos, incluso el café de 3$. Use frecuencias (anual, mensual) para que la herramienta calcule su flujo de caja mensual exacto. Este es el primer paso de todo su plan." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Capítulo 3: Activos vs Pasivos",
            content: [
                { type: 'p', text: "Este es el concepto más importante en finanzas personales, popularizado por Robert Kiyosaki en \"Padre Rico, Padre Pobre\"." },
                {
                    type: 'box', style: 'info', title: 'La Definición Simple', content: [
                        { type: 'p', text: "Un <strong>ACTIVO</strong> pone dinero en su bolsillo." },
                        { type: 'p', text: "Un <strong>PASIVO</strong> saca dinero de su bolsillo." }
                    ]
                },
                { type: 'p', text: "Es así de simple. El objetivo de su vida financiera es usar sus ingresos para comprar activos, para que esos activos generen nuevos ingresos para comprar aún más activos." },
                {
                    type: 'grid', items: [
                        { title: "Ejemplos de Activos", text: "Una acción que paga dividendo. Un ETF que gana valor. Una propiedad de alquiler rentable." },
                        { title: "Ejemplos de Pasivos", text: "Un préstamo de coche. Saldo de tarjeta de crédito. Préstamo estudiantil." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'La Trampa de la Residencia Principal', content: [
                        { type: 'p', text: "\"¡Mi casa es mi mayor activo!\" ¿De verdad? Cada mes, saca dinero de su bolsillo (hipoteca, impuestos, seguro, reparaciones). Por la definición estricta, su residencia principal es un pasivo." },
                        { type: 'p', text: "Puede convertirse en un activo el día que la venda (si ha ganado valor) o si alquila el sótano (genera ingresos). Pero no confunda un pasivo (que le cuesta dinero) con una inversión." }
                    ]
                },
                { type: 'p', text: "Su <strong>Patrimonio Neto</strong> es la medida de su salud financiera. Esto es lo que ve en su Panel (Dashboard)." },
                { type: 'p', text: "<strong>Patrimonio Neto = Activos Totales - Pasivos Totales</strong>. Su objetivo es hacer crecer este número, mes tras mes, año tras año." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Capítulo 4: El Fondo de Emergencia",
            content: [
                { type: 'p', text: "La vida es impredecible. El coche se avería. El techo gotea. Pierde su trabajo. La diferencia entre un contratiempo y un desastre financiero se llama fondo de emergencia." },
                { type: 'p', text: "Un fondo de emergencia es su escudo. Es dinero apartado exclusivamente para emergencias. Este dinero no se invierte, no está ahí para \"rendir\". Está ahí para ser líquido, accesible y aburrido." },
                {
                    type: 'box', style: 'info', title: '¿Cuánto?', content: [
                        { type: 'p', text: "El objetivo estándar es tener de <strong>3 a 6 meses</strong> de gastos de manutención." },
                        { type: 'p', text: "Calcule cuánto necesita gastar cada mes para vivir (alquiler/hipoteca, comida básica, servicios, transporte mínimo). Si esta cantidad es 2.500$, su fondo de emergencia debería estar entre 7.500$ y 15.000$." }
                    ]
                },
                { type: 'p', text: "<strong>¿Dónde ponerlo?</strong> En un lugar seguro y accesible, pero no demasiado accesible (no en su cuenta corriente diaria). Una Cuenta de Ahorro de Alto Interés (HISA) es ideal. Está separada de sus operaciones diarias, pero puede acceder a ella en 1 o 2 días." },
                { type: 'p', text: "<strong>Prioridad Absoluta:</strong> Antes de pagar deudas (excepto mínimos) y antes de invertir un solo dólar en la bolsa, construya un \"mini-fondo\" de 1.000$. Este dinero evitará que se endeude más la próxima vez que se pinche una rueda." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Capítulo 5: Gestionar la Deuda",
            content: [
                { type: 'p', text: "Hay dos tipos de deuda: deuda \"buena\" y deuda \"mala\"." },
                { type: 'ul', items: ["<strong>Deudas buenas (Deudas de inversión):</strong> Deudas usadas para comprar un activo que gana valor. Ej: Una hipoteca (para comprar bienes raíces), un préstamo estudiantil (para invertir en sí mismo).", "<strong>Deudas malas (Deudas de consumo):</strong> Deudas usadas para comprar un pasivo que pierde valor. Ej: Un préstamo de coche, saldo de tarjeta de crédito para vacaciones o restaurantes."] },
                { type: 'p', text: "Su objetivo es pagar las deudas malas lo más rápido posible. Para esto, hay dos estrategias principales, que puede simular en el Módulo de Planificación." },
                {
                    type: 'box', style: 'info', title: 'Estrategia 1: La Avalancha', content: [
                        { type: 'p', text: "Enumera todas sus deudas por tasa de interés descendente. Pone todo el dinero extra en la deuda con la tasa más alta." },
                        { type: 'p', text: "<strong>Ventaja:</strong> Este método le ahorra la mayor cantidad de dinero en intereses. Es el más eficiente matemáticamente." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Estrategia 2: La Bola de Nieve', content: [
                        { type: 'p', text: "Enumera todas sus deudas por saldo ascendente (de menor a mayor). Ataca la deuda más pequeña con todo su dinero extra." },
                        { type: 'p', text: "<strong>Ventaja:</strong> Obtiene \"victorias\" rápidas. Pagar una deuda pequeña crea un inmenso impulso psicológico y motivación para continuar." }
                    ]
                },
                { type: 'p', text: "¿Qué método elegir? El que le mantenga motivado. El Módulo de Planificación le mostrará el impacto de ambos." }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Capítulo 6: ¿Por qué Invertir?",
            content: [
                { type: 'p', text: "Si ya tiene un presupuesto y un fondo de emergencia, ¡felicidades! Ha terminado el \"modo defensa\". Es hora de cambiar al \"modo ataque\": invertir." },
                { type: 'p', text: "Ahorrar (poner dinero en una cuenta) le protege. Invertir (comprar activos) le enriquece." },
                {
                    type: 'box', style: 'warning', title: 'Su Enemigo N.º 1: La Inflación', content: [
                        { type: 'p', text: "La inflación es el aumento general de los precios a lo largo del tiempo. Si la inflación es del 3% anual, significa que 100$ de hoy solo comprarán bienes y servicios por valor de 97$ el próximo año. Su dinero <strong>pierde</strong> valor si duerme." },
                        { type: 'p', text: "Si deja 10.000$ en una cuenta corriente (0%) durante 25 años con una inflación promedio del 2,5%, su \"poder adquisitivo\" será solo de 5.394$. Habrá perdido casi la mitad de su dinero, haciendo nada." }
                    ]
                },
                { type: 'p', text: "El objetivo de invertir es simple: obtener un rendimiento superior a la inflación para que su poder adquisitivo crezca con el tiempo." },
                { type: 'p', text: "Nexus Finance Pro le ayuda a ver este impacto. En los módulos de Valor Futuro y Retiro, la herramienta siempre calcula el \"Valor Nominal\" (cantidad total) y el \"Poder Adquisitivo Real\" (lo que ese dinero valdrá realmente después de la inflación)." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Capítulo 7: Interés Compuesto",
            content: [
                { type: 'p', text: "Albert Einstein supuestamente dijo que el interés compuesto es \"la octava maravilla del mundo\". Es el motor de la creación de riqueza." },
                { type: 'p', text: "El interés compuesto es simplemente ganar interés sobre su interés. Es un efecto de bola de nieve." },
                {
                    type: 'box', style: 'success', title: 'Ejemplo Simple', content: [
                        { type: 'ul', items: ["Año 1: Gana el 8% de 10.000$ (800$). Saldo: 10.800$.", "Año 2: Gana el 8% de 10.800$ (864$). Saldo: 11.664$.", "Año 3: Gana el 8% de 11.664$ (933$). Saldo: 12.597$."] },
                        { type: 'p', text: "¡Su dinero trabaja para usted, y los \"empleados\" (sus ganancias) comienzan a trabajar ellos mismos y a tener hijos!" }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'El Factor Tiempo', content: [
                        { type: 'p', text: "La variable más importante es el tiempo. Mire la diferencia:" },
                        { type: 'p', text: "<strong>Alex (25 a 35):</strong> Invierte 5000$/año durante 10 años (Total 50k).<br><strong>Ben (35 a 65):</strong> Invierte 5000$/año durante 30 años (Total 150k)." },
                        { type: 'p', text: "A los 65 (retorno 8%):<br>Alex (que solo puso 50k) tendrá: <strong>1.028.000$</strong><br>Ben (que puso 150k) tendrá: <strong>611.000$</strong>" },
                        { type: 'p', text: "Alex gana, simplemente porque empezó 10 años antes. Sus 50.000$ tuvieron más tiempo para \"componerse\"." }
                    ]
                },
                { type: 'p', text: "<strong>Actúe:</strong> Vaya al Módulo de Valor Futuro. Ingrese su capital inicial, contribuciones mensuales y un retorno (Ej: 8%). Mire lo que le muestra el gráfico a 30 años. Se sorprenderá con la curva exponencial." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Capítulo 8: El Espectro Riesgo/Retorno",
            content: [
                { type: 'p', text: "No hay almuerzo gratis en finanzas. La regla de oro es: <strong>Cuanto mayor sea el retorno potencial, mayor será el riesgo de pérdida.</strong>" },
                { type: 'p', text: "Su trabajo como inversor no es evitar el riesgo, sino gestionarlo." },
                {
                    type: 'box', style: 'info', title: 'El Espectro', content: [
                        { type: 'ul', items: ["<strong>Bajo Riesgo / Bajo Retorno:</strong> Cuentas de ahorro, CIGs, Bonos del Estado. Capital garantizado, pero apenas supera la inflación.", "<strong>Riesgo Medio / Retorno Medio:</strong> ETFs de índice amplio (S&P 500, TSX), acciones \"blue chip\".", "<strong>Alto Riesgo / Alto Retorno:</strong> Acciones individuales, pequeñas empresas, criptomonedas."] }
                    ]
                },
                { type: 'p', text: "<strong>¿Qué es el Riesgo?</strong> El riesgo es <strong>volatilidad</strong>. Es la velocidad a la que el precio sube y baja. Si su portafolio pierde un 30% en 3 meses, ¿entrará en pánico y venderá? Es crucial conocerse a sí mismo antes de que ocurra la caída." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Capítulo 9: Tipos de Inversión",
            content: [
                { type: 'p', text: "Aquí están los \"ladrillos de Lego\" básicos que puede usar para construir su portafolio." },
                { type: 'ul', items: ["<strong>1. Acciones (Equities):</strong> Comprar una acción (`AAPL`, `TD`) es comprar una pequeña parte de una empresa. Gana vía Apreciación (precio sube) y Dividendos (parte de beneficios).", "<strong>2. Bonos (Bonds):</strong> Prestar dinero a un gobierno o empresa por un interés fijo. Generalmente más seguros que las acciones.", "<strong>3. Fondos Cotizados (ETFs):</strong> A menudo el mejor punto de partida. Un ETF es una \"cesta\" que contiene cientos de acciones o bonos, pero se compra como una sola acción."] },
                { type: 'p', text: "Con un ETF (Ej: `VFV` para S&P 500), posee una parte diminuta de las 500 mayores empresas de EE. UU. Es diversificación instantánea a muy bajo coste." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Capítulo 10: Tipos de Cuentas (Canadá)",
            content: [
                { type: 'p', text: "Antes de comprar una inversión, debe elegir el \"contenedor\" fiscal. TFSA y RRSP <strong>no</strong> son inversiones, son cuentas con beneficios fiscales." },
                {
                    type: 'box', style: 'success', title: '1. TFSA (Cuenta de Ahorro Libre de Impuestos)', content: [
                        { type: 'p', text: "Invierte dinero después de impuestos (neto). <strong>Beneficio:</strong> TODAS las ganancias (ganancias de capital, dividendos) son <strong>100% libres de impuestos</strong>, de por vida." },
                        { type: 'p', text: "<strong>Retiros:</strong> Libres de impuestos. El espacio de contribución regresa al año siguiente. Ideal para: Fondo de emergencia, Pago inicial de casa, Jubilación." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. RRSP (Plan Registrado de Ahorro para el Retiro)', content: [
                        { type: 'p', text: "Invierte dinero antes de impuestos. <strong>Beneficio:</strong> La contribución se deduce de su ingreso imponible (gran reembolso de impuestos)." },
                        { type: 'p', text: "<strong>Retiros:</strong> Imponibles en la jubilación. Ideal para: Ahorros de jubilación a largo plazo si tiene ingresos altos." }
                    ]
                },
                { type: 'p', text: "<strong>3. Cuenta No Registrada:</strong> Cuenta básica, sin beneficio fiscal. Imponible anualmente sobre dividendos. Las ganancias de capital son imponibles solo al vender." },
                { type: 'p', text: "<strong>La Estrategia Ganadora:</strong> 1. Maximizar TFSA. 2. Maximizar RRSP. 3. Invertir en No Registrada (Efectivo)." }
            ]
        },
        chap10_intl: {
            id: 'chap10',
            title: "Capítulo 10: Tipos de Cuentas (Internacional)",
            content: [
                { type: 'p', text: "Los gobiernos de todo el mundo ofrecen incentivos fiscales para fomentar el ahorro. Aunque los nombres cambian (401k en EE. UU., ISA en Reino Unido), los conceptos centrales siguen siendo los mismos." },
                {
                    type: 'box', style: 'success', title: '1. Cuentas Libres de Impuestos', content: [
                        { type: 'p', text: "Invierte dinero 'después de impuestos'. <strong>Ventaja:</strong> Las ganancias futuras son 100% libres de impuestos." },
                        { type: 'p', text: "<strong>Ejemplos:</strong> Roth IRA (EE. UU.), ISA (Reino Unido), TFSA (Canadá)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Cuentas con Impuestos Diferidos', content: [
                        { type: 'p', text: "Invierte dinero 'antes de impuestos'. <strong>Ventaja:</strong> Deducción fiscal inmediata, pero paga impuestos al retirar." },
                        { type: 'p', text: "<strong>Ejemplos:</strong> 401k / Traditional IRA (EE. UU.), RRSP (Canadá)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Cuenta Imponible:</strong> Sin ventaja fiscal. Paga impuestos sobre dividendos y ganancias de capital cada año." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Capítulo 11: La Acción",
            content: [
                { type: 'p', text: "Comprar una acción es comprar una parte de propiedad de una empresa. Si una empresa tiene 1.000.000 de acciones y usted compra 100, posee el 0,01% de esa empresa." },
                { type: 'p', text: "Ahora es un propietario. Tiene derecho a una parte de los beneficios (dividendos)." },
                { type: 'p', text: "<strong>La Bolsa:</strong> Es un gran mercado público donde el precio se determina por la oferta y la demanda. Si la gente espera grandes beneficios futuros (ej: nuevo iPhone), la demanda sube y el precio sube." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Capítulo 12: Análisis Fundamental",
            content: [
                { type: 'p', text: "El análisis fundamental es el arte de evaluar la salud financiera real y el valor de una empresa. El objetivo es encontrar empresas extraordinarias a un precio ordinario." },
                { type: 'p', text: "Miramos las cuentas:" },
                { type: 'ul', items: ["<strong>Balance General (Balance Sheet):</strong> Lo que la empresa posee (activos) y debe (pasivos).", "<strong>Estado de Resultados (Income Statement):</strong> Ventas, gastos y beneficios.", "<strong>Flujo de Caja (Cash Flow):</strong> Dinero que realmente entra y sale."] },
                { type: 'p', text: "El <strong>Módulo de Análisis de Acciones</strong> de Nexus Pro es una herramienta simplificada de análisis fundamental." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Capítulo 13: Entendiendo los Ratios",
            content: [
                { type: 'p', text: "Los ratios son atajos para entender la salud de una empresa sin leer 100 páginas de informes. Nexus Pro usa estos ratios para su \"Nexus Score\"." },
                { type: 'p', text: "<em>Nota: Para ratios inmobiliarios (LTV, Cap Rate), vea la guía inmobiliaria.</em>" },
                {
                    type: 'box', style: 'info', title: '1. Valoración', content: [
                        { type: 'ul', items: ["<strong>P/E (Precio/Beneficio):</strong> Precio por 1$ de beneficio. (20x = Paga 20$ por 1$ de ganancia).", "<strong>PEG Ratio:</strong> P/E dividido por el crecimiento. Si < 1.0, la acción está potencialmente infravalorada."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Rentabilidad', content: [
                        { type: 'ul', items: ["<strong>Margen Neto:</strong> % de beneficio puro en cada venta.", "<strong>ROE (Retorno sobre Capital):</strong> Eficiencia usando el dinero de los accionistas. > 15% es excelente."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Salud Financiera', content: [
                        { type: 'ul', items: ["<strong>Deuda/Capital (Debt/Equity):</strong> Mide el endeudamiento. Si > 1.0, tenga cuidado.", "<strong>Ratio Corriente:</strong> Capacidad para pagar facturas a corto plazo."] }
                    ]
                },
                { type: 'p', text: "Para entender completamente los ratios de acciones, es útil compararlos con su propia gestión financiera personal. Una empresa es simplemente un hogar a gran escala. Abajo comparamos cada concepto de 'Negocio' con su equivalente de 'Familia'." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Capítulo 14: Inversión por Dividendos",
            content: [
                { type: 'p', text: "Estrategia enfocada en generar ingresos pasivos. Le pagan por esperar. Es como poseer un huerto: no quiere vender los árboles, quiere cosechar las manzanas." },
                { type: 'p', text: "<strong>Rentabilidad (Yield):</strong> (Dividendo Anual / Precio Acción) * 100. Si una acción cuesta 100$ y paga 4$, la rentabilidad es del 4%." },
                {
                    type: 'box', style: 'warning', title: 'La Trampa de Rentabilidad (> 12%)', content: [
                        { type: 'p', text: "Regla Nexus: Cualquier Yield > 12% recibe una puntuación de 0. ¿Por qué?" },
                        { type: 'p', text: "Cuando el precio de una acción se desploma (porque la empresa va mal), la rentabilidad sube mecánicamente. Un 15% de rentabilidad a menudo grita que el dividendo se cortará pronto. Es una \"Yield Trap\"." }
                    ]
                },
                { type: 'p', text: "<strong>Crecimiento del Dividendo:</strong> La verdadera magia es comprar empresas que <strong>aumentan</strong> su dividendo cada año (Aristócratas). En el Módulo de Inversión, puede rastrear sus ingresos pasivos por separado." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Capítulo 15: Construyendo su Portafolio",
            content: [
                { type: 'p', text: "Su portafolio es la colección de todas sus inversiones. Construirlo requiere dos cosas: Diversificación y Asignación." },
                {
                    type: 'box', style: 'concept', title: 'Diversificación', content: [
                        { type: 'p', text: "No ponga todos los huevos en la misma cesta. Diversifique por <strong>Clase de Activo</strong> (Acciones/Bonos), <strong>Sector</strong> (Tecnología, Bancos, Energía) y <strong>Geografía</strong> (Canadá, EE. UU., Mundo). Los ETFs ofrecen esto al instante." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Asignación de Activos', content: [
                        { type: 'p', text: "Es el % de su dinero en Acciones (Riesgo/Crecimiento) vs Bonos (Seguro/Estabilidad)." },
                        { type: 'ul', items: ["<strong>Joven (20-35):</strong> Agresivo. Ej: 90% Acciones / 10% Bonos.", "<strong>Mitad Carrera (35-50):</strong> Equilibrado. Ej: 70% Acciones / 30% Bonos.", "<strong>Jubilación:</strong> Conservador. Ej: 40% Acciones / 60% Bonos."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Capítulo 16: Psicología del Inversor",
            content: [
                { type: 'p', text: "Invertir es simple, pero no fácil. Su peor enemigo es usted mismo (sus emociones)." },
                { type: 'ul', items: ["<strong>Codicia (FOMO):</strong> Comprar cuando todo sube, en la cima, por miedo a perderse algo. Resultado: Compra caro.", "<strong>Miedo:</strong> Vender cuando todo se desploma. Resultado: Vende barato y hace permanente la pérdida."] },
                {
                    type: 'box', style: 'success', title: 'La Solución: DCA (Dollar-Cost Averaging)', content: [
                        { type: 'p', text: "Invierta la misma cantidad (ej: 500$) cada mes, pase lo que pase, automáticamente." },
                        { type: 'p', text: "Cuando el mercado baja, sus 500$ compran MÁS acciones. Cuando sube, compran MENOS. Se beneficia de las caídas sin emociones." }
                    ]
                },
                { type: 'p', text: "<strong>Ir más allá:</strong> Se ha añadido un capítulo extra dedicado enteramente a la <strong>Psicología del Dinero</strong> (basado en el libro de Morgan Housel) al final de esta guía. ¡No se lo pierda!" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Capítulo 17: Definir Objetivos",
            content: [
                { type: 'p', text: "No ahorramos solo por ahorrar. Ahorramos para un objetivo. Un buen objetivo es <strong>S.M.A.R.T.</strong>: Específico, Medible, Alcanzable, Realista, Temporal." },
                { type: 'p', text: "Mal: \"Quiero ser rico\".<br>Bien: \"Quiero 50.000$ para un pago inicial en 3 años.\"" },
                { type: 'p', text: "<strong>Actúe:</strong> El <strong>Módulo de Objetivos</strong> calcula exactamente cuánto debe ahorrar por mes para alcanzar sus sueños." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Capítulo 18: Planificación para el Retiro",
            content: [
                { type: 'p', text: "Es el momento en que su portafolio paga su estilo de vida." },
                {
                    type: 'box', style: 'info', title: 'La Regla del 4%', content: [
                        { type: 'p', text: "Históricamente, puede retirar el <strong>4%</strong> de su portafolio anualmente sin que se le acabe el dinero durante 30 años." },
                        { type: 'p', text: "Cálculo rápido de la cantidad necesaria: <strong>Gastos Anuales Deseados x 25</strong>." },
                        { type: 'p', text: "Ej: Para vivir con 40.000$/año: 40.000 x 25 = <strong>1.000.000$</strong>." }
                    ]
                },
                { type: 'p', text: "Utilice el <strong>Módulo de Retiro</strong> para simular la supervivencia del capital bajo diferentes escenarios." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Capítulo 19: Fundamental vs Técnico",
            content: [
                { type: 'p', text: "Un duelo de filosofías." },
                { type: 'ul', items: ["<strong>Fundamental (Inversor):</strong> Pregunta: \"¿Es una buena empresa?\" Herramientas: Balances, Ratios, Gestión. Objetivo: Largo plazo.", "<strong>Técnico (Trader):</strong> Pregunta: \"¿Hacia dónde va el precio?\" Herramientas: Gráficos, Promedios Móviles, RSI. Objetivo: Corto plazo (Timing)."] },
                { type: 'p', text: "<strong>Nuestra visión:</strong> Para construir riqueza, Fundamental es el rey. Técnico puede ayudar en el timing, pero nunca debe ser la única base." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Capítulo 20: Órdenes de Bolsa (La Guía Completa)",
            content: [
                { type: 'p', text: "Saber qué comprar es una cosa, saber cómo comprarlo es otra. Aquí están los 5 tipos de órdenes esenciales para controlar sus precios de entrada y salida." },
                {
                    type: 'box', style: 'info', title: '1. Orden de Mercado (Market)', content: [
                        { type: 'p', text: "<strong>El concepto:</strong> \"Lo quiero ahora mismo, no importa el precio exacto.\"" },
                        { type: 'p', text: "<strong>Cómo funciona:</strong> La orden se ejecuta inmediatamente al mejor precio disponible de los vendedores." },
                        { type: 'p', text: "<strong>Ventaja:</strong> Velocidad garantizada. Obtiene la acción seguro." },
                        { type: 'p', text: "<strong>Riesgo:</strong> No controla el precio. Si el mercado es rápido (volatilidad), puede pagar más de lo esperado." },
                        { type: 'p', text: "<strong>Ejemplo concreto:</strong> Acción ABC está a 50,00$. Coloca una orden de mercado. Una fracción de segundo después, el precio salta a 50,05$. Su orden se ejecuta a 50,05$. Paga 5 centavos más de lo que vio." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Orden Limitada (Limit)', content: [
                        { type: 'p', text: "<strong>El concepto:</strong> \"Quiero comprar, pero no más caro que X$.\" (o vender no más barato que X)." },
                        { type: 'p', text: "<strong>Cómo funciona:</strong> Usted establece un precio máximo. La orden solo se ejecuta si el mercado toca su precio o mejor." },
                        { type: 'p', text: "<strong>Ventaja:</strong> Control total del precio. Sin malas sorpresas." },
                        { type: 'p', text: "<strong>Riesgo:</strong> Si la acción nunca baja a su precio límite, nunca la compra. Ejecución no garantizada." },
                        { type: 'p', text: "<strong>Ejemplo concreto:</strong> Acción XYZ está a 102$. Demasiado cara. Pone una orden Limit para comprar a 100$.<br><em>Escenario A:</em> Acción baja a 99$. Compra a 99$ (incluso mejor).<br><em>Escenario B:</em> Acción sube a 105$. Su orden se queda esperando y no compra nada." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Orden Stop (Stop Loss)', content: [
                        { type: 'p', text: "<strong>El concepto:</strong> \"La salida de emergencia.\" (Se convierte en orden de Mercado al dispararse)." },
                        { type: 'p', text: "<strong>Cómo funciona:</strong> Es una orden dormida. Si el precio cae y toca su umbral (ej: 90$), la orden se despierta y vende todo inmediatamente al precio de mercado." },
                        { type: 'p', text: "<strong>Ventaja:</strong> Protege de un gran desplome sin estar mirando la pantalla." },
                        { type: 'p', text: "<strong>Riesgo:</strong> En un flash crash, puede vender mucho más bajo que su umbral (ej: dispara a 90$ pero vende a 85$)." },
                        { type: 'p', text: "<strong>Ejemplo concreto:</strong> Compró a 100$. Stop en 90$. Malas noticias, acción en caída libre. Cruza 90$ sin parar. Orden se dispara y vende al primer comprador a 88$. Salió, pero con un poco más de pérdida de lo planeado." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Orden Stop Limit', content: [
                        { type: 'p', text: "<strong>El concepto:</strong> \"La salida de emergencia precisa.\" (Se convierte en orden Limit al dispararse)." },
                        { type: 'p', text: "<strong>Cómo funciona:</strong> Define dos precios: el disparador (Stop) y el precio mínimo aceptado (Limit)." },
                        { type: 'p', text: "<strong>Ventaja:</strong> Garantiza que no venderá a un precio ridículo durante el pánico." },
                        { type: 'p', text: "<strong>Riesgo:</strong> Si el precio se desploma por debajo de su límite, no vende. Se queda con la acción cayendo." },
                        { type: 'p', text: "<strong>Ejemplo concreto:</strong> Compró a 100$. Stop en 90$, Limit en 89$. Acción cae a 90$. Se dispara venta. Pero mercado salta a 85$ (hueco). Como 85$ está bajo su límite de 89$, la orden no vende. Sigue poseyendo la acción a 85$." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Trailing Stop', content: [
                        { type: 'p', text: "<strong>El concepto:</strong> \"Dejar correr las ganancias.\"" },
                        { type: 'p', text: "<strong>Cómo funciona:</strong> El precio de venta sube automáticamente con la acción, pero nunca baja. Usted establece una distancia ($ o %)." },
                        { type: 'p', text: "<strong>Ventaja:</strong> Asegura ganancias sin limitar la subida." },
                        { type: 'p', text: "<strong>Ejemplo concreto:</strong> Compró a 100$ con Trailing Stop de 5$.<br>Acción sube a 110$. Stop sube a 105$.<br>Acción sube a 150$. Stop es ahora 145$.<br>Acción cae a 140$. En cuanto toca 145$, vende. Ha asegurado 45$ de ganancia automáticamente." }
                    ]
                },
                {
                    type: 'box', style: 'dark', title: 'Nota Importante: Duración', content: [
                        { type: 'p', text: "Para órdenes Limit y Stop, debe elegir cuánto tiempo vive la orden:" },
                        { type: 'ul', items: ["<strong>Día (Day):</strong> Si no se ejecuta a las 4:00 PM (cierre), se cancela.", "<strong>GTC (Good 'Til Canceled):</strong> Permanece activa (generalmente 60-90 días) hasta que usted la cancele manualmente."] }
                    ]
                },
                { type: 'p', text: "<strong>Nota para curiosos:</strong> Existen órdenes más complejas para traders activos, como OCO (One Cancels the Other) que permiten poner un objetivo de ganancia y un stop loss a la vez. Pero para un inversor a largo plazo, las 5 de arriba son todo lo que necesita." }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Capítulo 21: Impuestos Avanzados (ACB)",
            content: [
                { type: 'p', text: "Crucial para cuentas <strong>No Registradas (Imponibles)</strong>. Cuando vende, paga impuestos sobre: <code>Precio Venta - ACB</code>." },
                {
                    type: 'box', style: 'info', title: 'El ACB (Costo Base Ajustado)', content: [
                        { type: 'p', text: "Es el término fiscal para su costo promedio. Es el costo promedio ponderado de todas sus acciones, incluyendo comisiones. Debe rastrear esto usted mismo para los impuestos." },
                        { type: 'p', text: "Cálculo: (Costo Total de todas las compras) / (Número Total de acciones)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro calcula automáticamente una estimación de su ACB y ganancias no realizadas en el <strong>Módulo de Inversión</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Capítulo 22: Rebalanceo del Portafolio",
            content: [
                { type: 'p', text: "Si su objetivo es 70% acciones y 30% bonos, y las acciones suben (ahora 80%), su portafolio es demasiado arriesgado." },
                { type: 'p', text: "<strong>Rebalanceo:</strong> Vender lo que ha subido (acciones) para comprar lo que ha bajado (bonos) para volver al 70/30." },
                { type: 'p', text: "Es la cumbre de la disciplina: le obliga matemáticamente a <strong>vender caro y comprar barato</strong>." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Capítulo 23: Trampas Psicológicas (Sesgos)",
            content: [
                { type: 'ul', items: ["<strong>Sesgo de Confirmación:</strong> Leer solo lo que confirma nuestra opinión sobre una acción (ej: Tesla) e ignorar a los críticos.", "<strong>Anclaje:</strong> Pensar que una acción está \"barata\" solo porque estaba a 300$ y ahora está a 150$. El pasado no importa.", "<strong>Aversión a la Pérdida:</strong> Vender ganadores demasiado rápido (para tomar ganancias) y mantener perdedores (esperando que se recuperen). A menudo hay que hacer lo contrario: ¡cortar las pérdidas!"] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Capítulo 24: Glosario de Términos Clave",
            content: [
                { type: 'p', text: "Aquí hay un repaso rápido de los términos que encontrará." },
                {
                    type: 'grid', items: [
                        { title: "Asset (Activo)", text: "Objeto de valor o fuente de ingresos." },
                        { title: "Liability (Pasivo)", text: "Algo que saca dinero de su bolsillo." },
                        { title: "Acción", text: "Parte de propiedad en una empresa." },
                        { title: "Bono", text: "Préstamo a una empresa/gobierno a cambio de interés." },
                        { title: "Dividendo", text: "Parte de las ganancias distribuida a los accionistas." },
                        { title: "ETF", text: "Cesta diversificada de inversiones." },
                        { title: "Volatilidad", text: "Amplitud de las variaciones de precio (Riesgo)." },
                        { title: "EPS", text: "Earnings Per Share (Beneficio por Acción)." },
                        { title: "P/E", text: "Precio/Beneficio. Indica si la acción es cara o barata." },
                        { title: "TFSA", text: "Cuenta 100% libre de impuestos (Canadá)." },
                        { title: "RRSP", text: "Cuenta con impuestos diferidos (Canadá)." },
                        { title: "ACB", text: "Adjusted Cost Base (Costo fiscal promedio)." },
                        { title: "Net Worth", text: "Patrimonio Neto (Activos - Pasivos)." }
                    ]
                },
                { type: 'p', text: "Este curso le dio los fundamentos. Nexus Finance Pro le da el poder de aplicarlos. Su futuro financiero está ahora en sus manos. ¡Buena suerte en la planificación!" }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bonus: La Psicología del Dinero",
            content: [
                { type: 'p', text: "<strong>(Basado en los conceptos de Morgan Housel)</strong> - Uno de los libros más importantes sobre psicología financiera. ¡Recomendamos encarecidamente leerlo!" },
                {
                    type: 'box', style: 'info', title: 'Parte 1: Nuestra relación irracional con el dinero', content: [
                        { type: 'p', text: "<strong>1. Nadie está loco:</strong>" },
                        { type: 'p', text: "Todos creemos saber cómo funciona el mundo, pero solo hemos experimentado una fracción diminuta. Sus decisiones financieras dependen de su generación, la inflación de su juventud y su cultura. <em>No juzgue a los demás. Lo que le parece 'loco' a usted podría ser una decisión lógica de supervivencia para otro.</em>" },
                        { type: 'p', text: "<strong>2. Suerte y Riesgo:</strong>" },
                        { type: 'p', text: "El éxito de Bill Gates se debe a su genio, pero también a la suerte de ir a una escuela con computadora (una posibilidad entre un millón). Su amigo Kent Evans era igual de dotado, pero murió antes de la secundaria (un riesgo de uno entre un millón). <em>Sea humilde en el éxito y compasivo en el fracaso. La suerte juega un gran papel.</em>" },
                        { type: 'p', text: "<strong>3. Nunca suficiente (La trampa de la codicia):</strong>" },
                        { type: 'p', text: "Rajat Gupta lo tenía todo, pero quería más y terminó en la cárcel por uso de información privilegiada. <em>No hay razón para arriesgar lo que tiene y necesita por lo que no tiene y no necesita.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Parte 2: Construir Riqueza', content: [
                        { type: 'p', text: "<strong>4. Interés Compuesto Confuso:</strong>" },
                        { type: 'p', text: "Warren Buffett no es rico por ser el mejor inversor, sino por llevar invirtiendo desde niño. <em>Cierre la boca y espere. El tiempo es la fuerza más poderosa.</em>" },
                        { type: 'p', text: "<strong>5. Hacerse rico vs. Mantenerse rico:</strong>" },
                        { type: 'p', text: "Para hacerse rico, necesita ser optimista y tomar riesgos. Para <strong>mantenerse</strong> rico, necesita ser paranoico, frugal y temeroso de perderlo todo. <em>La supervivencia es la clave.</em>" },
                        { type: 'p', text: "<strong>6. Tails, You Win (Eventos extremos):</strong>" },
                        { type: 'p', text: "Como en el arte, un puñado de 'ganadores' pagan por todos los errores. <em>Puede estar equivocado el 50% del tiempo y aun así hacer una fortuna. Lo que cuenta es la magnitud de sus aciertos, no la frecuencia.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Parte 3: Psicología y Comportamiento', content: [
                        { type: 'p', text: "<strong>7. Libertad (El verdadero dividendo):</strong>" },
                        { type: 'p', text: "La forma más alta de riqueza es despertarse por la mañana y decir: 'Hoy puedo hacer lo que quiera'. El control sobre su tiempo le hace más feliz que los bienes de lujo." },
                        { type: 'p', text: "<strong>8. La paradoja del Hombre en el Coche:</strong>" },
                        { type: 'p', text: "Nadie está tan impresionado con sus posesiones como usted mismo. Si quiere respeto, sea humilde y amable, no compre un coche grande." },
                        { type: 'p', text: "<strong>9. La riqueza es lo que no se ve:</strong>" },
                        { type: 'p', text: "La verdadera riqueza es dinero <strong>no</strong> gastado. No confunda altos ingresos (Rich) con patrimonio neto (Wealthy)." },
                        { type: 'p', text: "<strong>10. Ahorre dinero (Solo ahorre):</strong>" },
                        { type: 'p', text: "No necesita un objetivo específico para ahorrar. Necesita ahorrar para lo desconocido. Es su margen de seguridad." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: 'Parte 4: Una filosofía realista', content: [
                        { type: 'p', text: "<strong>11. Razonable > Racional:</strong>" },
                        { type: 'p', text: "No intente ser una hoja de cálculo fría. La mejor estrategia es la que le deja dormir por la noche." },
                        { type: 'p', text: "<strong>12. Nada es gratis:</strong>" },
                        { type: 'p', text: "Los altos retornos del mercado tienen un precio, no en dólares, sino en volatilidad y miedo. Vea las caídas como una 'tarifa de entrada', no como una multa." },
                        { type: 'p', text: "<strong>13. La seducción del pesimismo:</strong>" },
                        { type: 'p', text: "El pesimismo suena inteligente, el optimismo suena ingenuo. Sea un 'optimista realista': crea que las cosas mejorarán a largo plazo, pero prepárese para sufrir a corto plazo." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Conclusión: El Método del Autor', content: [
                        { type: 'p', text: "Lo que Morgan Housel hace con su propio dinero:" },
                        { type: 'ul', items: ["Su objetivo es la independencia, no la riqueza máxima.", "Mantiene mucho efectivo (margen de seguridad).", "Invierte en fondos indexados de bajo costo (ETFs).", "No intenta ganar al mercado, sino mantenerse invertido el mayor tiempo posible."] }
                    ]
                }
            ]
        }
    }
};
