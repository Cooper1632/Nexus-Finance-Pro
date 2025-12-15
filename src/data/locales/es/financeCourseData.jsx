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
        id: 1, title: "1. Precio/Beneficio (PER)", color: pastelColors[0],
        biz: {
            formula: "Precio / Beneficio por Acción (BPA)",
            desc: "Cuánto paga por 1$ de beneficio. Indica si la acción es cara (Crecimiento) o barata (Valor).",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor (para valor)",
            example: "$100 (Precio) / $5 (BPA) = 20x"
        },
        fam: {
            title: "Precio de Compra Familiar",
            desc: "Imagine comprar a su familia. Si ahorra 10k$/año y alguien le compra por 200k$, el PER es 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor",
            example: "$200,000 / $10,000 = 20x"
        }
    },
    {
        id: 2, title: "2. Crecimiento (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Final / Inicial)^(1/n)) - 1",
            desc: "Velocidad a la que la empresa aumenta beneficios o ventas cada año.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Aumento Salarial",
            desc: "Su aumento anual. Pasar de 50k$ a 55k$ es 10% de crecimiento.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "($55k - $50k) / $50k = 10%"
        }
    },
    {
        id: 3, title: "3. Margen Neto (%)", color: pastelColors[2],
        biz: {
            formula: "Beneficio Neto / Ingresos",
            desc: "% de cada dólar de ventas que queda en el bolsillo tras todos los gastos.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "$10,000 / $100,000 = 10%"
        },
        fam: {
            title: "Tasa de Ahorro",
            desc: "Su Tasa de Ahorro. Si gana 4000$ y ahorra 400$, su margen es 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "$400 / $4000 = 10%"
        }
    },
    {
        id: 4, title: "4. Deuda / Patrimonio", color: pastelColors[3],
        biz: {
            formula: "Deuda Total / Patrimonio (Equity)",
            desc: "Nivel de apalancamiento. Si > 1.0, debe más que su valor contable.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor (< 1.0)",
            example: "$200k / $100k = 2.0 (Arriesgado)"
        },
        fam: {
            title: "Ratio de Endeudamiento",
            desc: "(Hipoteca + Tarjetas) / Patrimonio Neto.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor",
            example: "$300k (Deudas) / $100k (Neto) = 3.0"
        }
    },
    {
        id: 5, title: "5. ROE (Retorno sobre Equidad)", color: pastelColors[4],
        biz: {
            formula: "Beneficio Neto / Patrimonio",
            desc: "Eficiencia de la gestión para generar beneficio con dinero de accionistas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor (> 15%)",
            example: "$15 / $100 = 15%"
        },
        fam: {
            title: "Eficiencia de Inversión",
            desc: "Si tiene 100k$ de patrimonio generando 10k$ de ganancias, su ROE es 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "$10,000 / $100,000 = 10%"
        }
    },
    {
        id: 6, title: "6. Liquidez (Ratio Corriente)", color: pastelColors[5],
        biz: {
            formula: "Activos Corrientes / Pasivos Corr.",
            desc: "Capacidad de pagar facturas inmediatas. Si < 1.0, riesgo de impago.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor (> 1.5)",
            example: "$200k / $100k = 2.0"
        },
        fam: {
            title: "Cobertura Fondo Emergencia",
            desc: "Su Fonda de Emergencia / Facturas Mensuales.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor (Seguridad)",
            example: "$5000 / $2500 = 2.0"
        }
    },
    {
        id: 7, title: "7. Rendimiento Div. (%)", color: pastelColors[6],
        biz: {
            formula: "Dividendo Anual / Precio Acción",
            desc: "ROI en efectivo pagado por la empresa.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor (Max 10-12%)",
            example: "$4 / $100 = 4%"
        },
        fam: {
            title: "Dinero de Bolsillo",
            desc: "Dinero que se paga a sí mismo para diversión desde sus inversiones.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Más Libertad",
            example: "$50 (Recibido) / $1000 (Invertido) = 5%"
        }
    },
    {
        id: 8, title: "8. Margen Bruto", color: pastelColors[7],
        biz: {
            formula: "(Ingresos - COGS) / Ingresos",
            desc: "Rentabilidad básica antes de pagar oficinas, anuncios e impuestos.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Tasa de Supervivencia",
            desc: "Gastos vitales (Alquiler + Comida). ¿Cuántos meses sobrevive sin ingresos?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor (Gastos)",
            example: "$2000 / mes (Vital)"
        }
    },
    {
        id: 9, title: "9. Precio/Ventas (P/S)", color: pastelColors[8],
        biz: {
            formula: "Cap. Mercado / Ingresos",
            desc: "Usado para empresas no rentables. Compara valor de mercado con volumen de ventas.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor",
            example: "$1M / $500k = 2.0x"
        },
        fam: {
            title: "ROI (Renovación)",
            desc: "Invertir 20k$ en una cocina que añade 30k$ al valor de la casa.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "($30k - $20k) / $20k = 50%"
        }
    },
    {
        id: 10, title: "10. Precio/Flujo Caja (P/CF)", color: pastelColors[9],
        biz: {
            formula: "Precio / Flujo Caja por Acción",
            desc: "A menudo más fiable que el PER. Muestra capacidad real de generación de efectivo.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor",
            example: "$100 / $10 = 10x"
        },
        fam: {
            title: "Capital de Trabajo",
            desc: "Colchón financiero: Cheques + Ahorros MENOS facturas próximas.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor (Positivo)",
            example: "$2000 (Banco) - $1500 (Facturas) = +$500"
        }
    },
    {
        id: 11, title: "11. Deuda / Activos Totales", color: pastelColors[10],
        biz: {
            formula: "Deuda Total / Activos Totales",
            desc: "¿Qué parte de la empresa está financiada por el banco?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor",
            example: "$400k / $1M = 0.4"
        },
        fam: {
            title: "Flujo de Caja Libre",
            desc: "Ahorros MENOS reparaciones obligatorias casa. El dinero real disponible.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más alto = Mejor",
            example: "$5000 (Ahorros) - $2000 (Techo) = $3000"
        }
    },
    {
        id: 12, title: "12. Payout Ratio", color: pastelColors[11],
        biz: {
            formula: "Dividendos Pagados / Beneficio Neto",
            desc: "Parte de beneficios devuelta a accionistas. Si > 80%, el dividendo puede estar en riesgo.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor (Sostenible)",
            example: "$2 (Div) / $4 (BPA) = 50%"
        },
        fam: {
            title: "Ratio de Gasto Personal",
            desc: "% del excedente usado para darse gustos (Restaurantes) en lugar de reinvertir.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Más bajo = Mejor (Riqueza futura)",
            example: "$400 (Diversión) / $1000 (Excedente) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Guía Finanzas 101",
        subtitle: "Dominar las Finanzas Personales de A a Z",
        parts: [
            { title: "Introducción", items: [{ id: 'intro', label: '¿Por qué esta guía?' }] },
            { title: "Parte 1: Fundamentos", items: [{ id: 'chap1', label: "1. La Mentalidad" }, { id: 'chap2', label: "2. El Presupuesto (GPS)" }, { id: 'chap3', label: "3. Activos vs Pasivos" }, { id: 'chap4', label: "4. Fondo Emergencia" }, { id: 'chap5', label: "5. Gestión de Deuda" }] },
            { title: "Parte 2: Inversión", items: [{ id: 'chap6', label: "6. ¿Por qué Invertir?" }, { id: 'chap7', label: "7. Interés Compuesto" }, { id: 'chap8', label: "8. Riesgo/Retorno" }, { id: 'chap9', label: "9. Tipos de Inversión" }, { id: 'chap10', label: "10. Tipos de Cuenta" }] },
            { title: "Parte 3: Bolsa", items: [{ id: 'chap11', label: "11. La Acción" }, { id: 'chap12', label: "12. Análisis Fundamental" }, { id: 'chap13', label: "13. Ratios Clave" }, { id: 'chap14', label: "14. Dividendos" }, { id: 'chap15', label: "15. Construir Cartera" }, { id: 'chap16', label: "16. Psicología" }] },
            { title: "Parte 4: Metas", items: [{ id: 'chap17', label: "17. Objetivos" }, { id: 'chap18', label: "18. Jubilación" }] },
            { title: "Parte 5: Estrategias Avanzadas", items: [{ id: 'chap19', label: "19. Fund. vs Téc." }, { id: 'chap20', label: "20. Órdenes Bolsa" }, { id: 'chap21', label: "21. Fiscalidad (ACB)" }, { id: 'chap22', label: "22. Rebalanceo" }, { id: 'chap23', label: "23. Trampas Psicológicas" }] },
            { title: "Anexo", items: [{ id: 'chap24', label: "24. Glosario" }, { id: 'bonus_psych', label: "Bonus: Psicología" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Introducción: ¿Por qué esta guía?",
            content: [
                { type: 'p', text: "Tiene en sus manos una herramienta poderosa: <strong>Nexus Finance Pro</strong>. Es una calculadora sofisticada, un gestor de cartera preciso y un planificador de deuda estratégico, todo en uno." },
                { type: 'p', text: "Pero una herramienta, por poderosa que sea, solo es efectiva si el artesano sabe cómo y por qué usarla." },
                { type: 'p', text: "Esta guía es el <strong>\"Por qué\"</strong>. La app Nexus Finance Pro es el <strong>\"Cómo\"</strong>." },
                { type: 'p', text: "No necesita ser un experto para usar Nexus Finance Pro, pero entender los conceptos clave transformará su experiencia. No solo hará clic en botones; ejecutará un plan. Tenga en cuenta que aunque esta herramienta es poderosa, está diseñada para asistirle: para consejos personalizados, consultar a un profesional certificado sigue siendo una elección sabia." },
                {
                    type: 'box', style: 'info', title: 'Lo que aprenderá', content: [
                        { type: 'p', text: "Esta guía enseña principios de gestión financiera atemporales. Cubriremos:" },
                        { type: 'ul', items: ["<strong>Psicología:</strong> Dominar emociones para evitar errores costosos.", "<strong>Fundamentos:</strong> Construir un presupuesto sólido, fondo de emergencia y atacar la deuda.", "<strong>Inversión:</strong> Entender por qué y cómo hacer que el dinero trabaje para usted.", "<strong>Bolsa:</strong> Desmitificar acciones, ETFs y ratios para invertir con confianza.", "<strong>Estrategias Avanzadas:</strong> Conceptos intermedios para optimizar fiscalidad y gestión de cartera."] },
                        { type: 'p', text: "Al final de esta guía, cada módulo de Nexus Finance Pro no será solo una pestaña, sino un arma en su arsenal para construir independencia financiera." }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Capítulo 1: La Mentalidad Correcta",
            content: [
                { type: 'p', text: "¡Bienvenido! Antes de hablar de números o ratios, debemos hablar de la herramienta más poderosa disponible: su mentalidad." },
                { type: 'p', text: "La gestión financiera no es suerte. No es un secreto para la élite. Es un conjunto de hábitos, decisiones y sistemas que cualquiera puede aprender." },
                { type: 'p', text: "El mayor obstáculo no es la falta de dinero, es la psicología. Es el miedo a mirar las cuentas, la procrastinación o sentirse \"malo con los números\"." },
                {
                    type: 'box', style: 'warning', title: 'Mitos a Derribar', content: [
                        { type: 'ul', items: ["<strong>Mito 1: \"Necesitas dinero para hacer dinero.\"</strong><br>Falso. Necesitas hábitos para hacer dinero. Alguien ahorrando 100$/mes con un plan vencerá a quien gana 10k$/mes pero gasta 10.1k$.", "<strong>Mito 2: \"Invertir es como apostar.\"</strong><br>Falso. La especulación a corto plazo (day trading) es como apostar. La inversión a largo plazo, basada en la salud de la empresa, es participar en el crecimiento económico global.", "<strong>Mito 3: \"Soy demasiado joven / viejo.\"</strong><br>Falso. Si es joven, su activo es el tiempo. Si es mayor, su activo es (usualmente) mayores ingresos y disciplina. El mejor momento para empezar fue hace 10 años. El segundo mejor momento es hoy."] }
                    ]
                },
                { type: 'p', text: "<strong>Meta Principal:</strong> INDEPENDENCIA Financiera. No hacerse rico para comprar autos de lujo. Es tener suficientes activos trabajando para usted para no *necesitar* trabajar para pagar facturas. El trabajo se vuelve una elección, no una obligación." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Capítulo 2: El Presupuesto (Su GPS)",
            content: [
                { type: 'p', text: "No puede llegar a un destino si no sabe dónde está. El presupuesto es su punto \"Usted está aquí\". No es una prisión; es una herramienta que le da permiso para gastar sin culpa." },
                { type: 'p', text: "Un presupuesto responde a una pregunta: <strong>¿A dónde va mi dinero?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'Presupuesto Base Cero', content: [
                        { type: 'p', text: "El método más efectivo. Idea: A fin de mes, Ingresos menos Salidas debe ser igual a cero. ¡Esto no significa tener cero dinero! Significa que cada dólar tiene una misión." },
                        { type: 'p', text: "<code>Ingresos - Gastos - Ahorros - Inversiones = 0$</code>" },
                        { type: 'p', text: "Si gana 3000$ y gasta 2500$, le quedan 500$. Decide por adelantado: \"200$ a Fondo Emergencia\", \"100$ a Inversiones\", \"200$ para Vacaciones\"." }
                    ]
                },
                { type: 'p', text: "<strong>Acción:</strong> Use el <strong>Módulo Presupuesto</strong>. Liste TODOS los ingresos y gastos, hasta el café de 3$. Use frecuencias para que la herramienta calcule el flujo de caja mensual exacto." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Capítulo 3: Activos vs Pasivos",
            content: [
                { type: 'p', text: "El concepto más importante, popularizado por Robert Kiyosaki." },
                {
                    type: 'box', style: 'info', title: 'Definición Simple', content: [
                        { type: 'p', text: "Un <strong>ACTIVO</strong> pone dinero EN su bolsillo." },
                        { type: 'p', text: "Un <strong>PASIVO</strong> saca dinero DE su bolsillo." }
                    ]
                },
                { type: 'p', text: "Su meta: Usar ingresos para comprar activos, para que estos activos generen nuevos ingresos para comprar más activos." },
                {
                    type: 'grid', items: [
                        { title: "Ejemplos Activos", text: "Acción con dividendo. ETF que gana valor. Propiedad de alquiler rentable." },
                        { title: "Ejemplos Pasivos", text: "Préstamo auto. Saldo tarjeta crédito. Préstamo estudiantil." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'La Trampa de la Casa Principal', content: [
                        { type: 'p', text: "\"¡Mi casa es mi mayor activo!\" ¿De verdad? Cada mes, saca dinero de su bolsillo (Hipoteca, impuestos, seguro). Estrictamente hablando, es un pasivo." },
                        { type: 'p', text: "Se vuelve activo cuando vende (si el valor subió), o si alquila una parte." }
                    ]
                },
                { type: 'p', text: "Su <strong>Patrimonio Neto</strong> es su puntuación de salud financiera. <strong>Activos - Pasivos</strong>. Su meta es aumentar este número." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Capítulo 4: Fondo de Emergencia",
            content: [
                { type: 'p', text: "La vida es impredecible. El coche se rompe. El techo gotea. Pérdida de empleo. La diferencia entre un contratiempo y un desastre es un fondo de emergencia." },
                { type: 'p', text: "Es su escudo. Dinero apartado estrictamente para emergencias. No para invertir, no para rendimiento. Está ahí para ser líquido y accesible." },
                {
                    type: 'box', style: 'info', title: '¿Cuánto?', content: [
                        { type: 'p', text: "Meta estándar: <strong>3 a 6 meses</strong> de gastos de vida." },
                        { type: 'p', text: "Si los costos de vida son 2500$, el fondo debe ser 7500$ a 15000$." }
                    ]
                },
                { type: 'p', text: "<strong>¿Dónde?</strong> Cuenta de Ahorro Alto Interés. Separada de la cuenta corriente pero accesible en 1-2 días." },
                { type: 'p', text: "<strong>Prioridad:</strong> Antes de pagar deuda (salvo mínimos) o invertir, construya un \"mini-fondo\" de 1000$." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Capítulo 5: Gestión de Deuda",
            content: [
                { type: 'p', text: "Dos tipos: Deuda 'Buena' vs 'Mala'." },
                { type: 'ul', items: ["<strong>Deuda Buena:</strong> Usada para comprar un activo que se aprecia. Ej: Hipoteca (propiedad), Préstamo estudiantil (invertir en sí mismo).", "<strong>Deuda Mala:</strong> Usada para comprar pasivos de consumo. Ej: Préstamo auto, Tarjeta crédito."] },
                { type: 'p', text: "Pague la deuda mala ASAP usando dos estrategias (simule en Módulo Plan de Deuda):" },
                {
                    type: 'box', style: 'info', title: 'Estrategia 1: Avalancha', content: [
                        { type: 'p', text: "Liste deudas por tasa de interés (Más alta primero). Pague mínimos en todas, tire todo el dinero extra a la tasa más alta." },
                        { type: 'p', text: "<strong>Pros:</strong> Ahorra más dinero matemáticamente." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Estrategia 2: Bola de Nieve', content: [
                        { type: 'p', text: "Liste deudas por saldo (Más pequeña primero). Ataque la deuda más pequeña con todo." },
                        { type: 'p', text: "<strong>Pros:</strong> Victorias rápidas. Momento psicológico." }
                    ]
                }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Capítulo 6: ¿Por qué Invertir?",
            content: [
                { type: 'p', text: "¿Presupuesto y Fondo Emergencia hechos? 'Modo defensa' completo. Entre en 'Modo ataque': Inversión." },
                { type: 'p', text: "Ahorrar le protege. Invertir le hace rico." },
                {
                    type: 'box', style: 'warning', title: 'Enemigo #1: Inflación', content: [
                        { type: 'p', text: "Inflación es precios subiendo. Al 3% inflación, 100$ hoy compran solo 97$ el próximo año. El efectivo <strong>pierde</strong> valor si duerme." },
                        { type: 'p', text: "Dejar 10,000$ en cuenta corriente por 25 años al 2.5% de inflación le deja con 5,394$ de poder adquisitivo. Perdió la mitad de su dinero sin hacer nada." }
                    ]
                },
                { type: 'p', text: "Meta inversión: Obtener retorno > inflación. Nexus Pro calcula 'Poder Adquisitivo Real' en módulo Valor Futuro para mostrar esto." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Capítulo 7: Interés Compuesto",
            content: [
                { type: 'p', text: "Einstein lo llamó la '8ª maravilla del mundo'. Es interés sobre interés. Un efecto bola de nieve." },
                {
                    type: 'box', style: 'success', title: 'Ejemplo Simple', content: [
                        { type: 'ul', items: ["Año 1: 10k * 8% = 800$. Total 10,800$.", "Año 2: 10.8k * 8% = 864$. Total 11,664$."] },
                        { type: 'p', text: "Su dinero trabaja para usted, y sus 'empleados' (ganancias) empiezan a trabajar también." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Factor Tiempo', content: [
                        { type: 'p', text: "<strong>Alex (25-35):</strong> Invierte 5k/año por 10 años (Total 50k).<br><strong>Ben (35-65):</strong> Invierte 5k/año por 30 años (Total 150k)." },
                        { type: 'p', text: "A los 65 años (8% retorno):<br>Alex (solo 50k dentro) tiene: <strong>1,028,000$</strong><br>Ben (150k dentro) tiene: <strong>611,000$</strong>" },
                        { type: 'p', text: "Alex gana porque empezó 10 años antes." }
                    ]
                },
                { type: 'p', text: "<strong>Acción:</strong> Use Módulo Valor Futuro. Vea la curva exponencial." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Capítulo 8: Espectro Riesgo/Retorno",
            content: [
                { type: 'p', text: "Nada es gratis. <strong>Mayor potencial retorno = Mayor riesgo pérdida.</strong>" },
                {
                    type: 'box', style: 'info', title: 'El Espectro', content: [
                        { type: 'ul', items: ["<strong>Bajo Riesgo/Retorno:</strong> Ahorros, Bonos Gob. Lucha por vencer inflación.", "<strong>Medio Riesgo/Retorno:</strong> ETFs amplios (S&P 500), Acciones Blue chip.", "<strong>Alto Riesgo/Retorno:</strong> Acciones individuales, Cripto, Startups."] }
                    ]
                },
                { type: 'p', text: "<strong>Riesgo es Volatilidad.</strong> Si la cartera cae 30%, ¿venderá en pánico? Conózcase a sí mismo." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Capítulo 9: Tipos de Inversión",
            content: [
                { type: 'p', text: "Los bloques LEGO de su cartera." },
                { type: 'ul', items: ["<strong>1. Acciones:</strong> Comprar una acción (`AAPL`) es poseer un pedazo de la empresa. Gana vía Precio + Dividendos.", "<strong>2. Bonos:</strong> Prestar dinero a gob/empresa por interés fijo. Más seguro que acciones.", "<strong>3. ETFs (Fondos Cotizados):</strong> Mejor punto de partida. Una cesta de cientos de acciones compradas como una sola."] },
                { type: 'p', text: "Con un ETF (ej: rastreador S&P 500), posee una rebanada de las top 500 empresas de EE.UU. Diversificación instantánea." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Capítulo 10: Tipos de Cuenta (Internacional)",
            content: [
                { type: 'p', text: "Los gobiernos ofrecen incentivos fiscales para fomentar el ahorro. Los nombres cambian (401k/Roth en EE.UU., ISA en UK, TFSA/RRSP en Canadá), los conceptos son los mismos." },
                {
                    type: 'box', style: 'success', title: '1. Cuentas Libres de Impuestos', content: [
                        { type: 'p', text: "Invierte dinero 'después de impuestos'. <strong>Beneficio:</strong> Ganancias futuras son 100% libres de impuestos." },
                        { type: 'p', text: "<strong>Ejemplos:</strong> Roth IRA (USA), ISA (UK), TFSA (Canadá)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Cuentas de Impuestos Diferidos', content: [
                        { type: 'p', text: "Invierte dinero 'antes de impuestos'. <strong>Beneficio:</strong> Deducción fiscal inmediata, pero paga impuestos al retirar." },
                        { type: 'p', text: "<strong>Ejemplos:</strong> 401k / Traditional IRA (USA), RRSP (Canadá)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Cuenta Gravable:</strong> Sin ventajas. Paga impuestos sobre dividendos/ganancias anualmente." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Capítulo 11: ¿Qué es una Acción?",
            content: [
                { type: 'p', text: "Comprar una acción es comprar propiedad. Si una empresa tiene 1M acciones y compra 100, posee 0.01%." },
                { type: 'p', text: "Usted es propietario. Obtiene una parte de los beneficios (dividendos)." },
                { type: 'p', text: "<strong>Bolsa:</strong> Una subasta pública donde el precio lo fija oferta/demanda." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Capítulo 12: Análisis Fundamental",
            content: [
                { type: 'p', text: "Arte de evaluar el valor real de la empresa. Encontrar empresas extraordinarias a precios ordinarios." },
                { type: 'ul', items: ["<strong>Balance:</strong> Activos vs Deudas.", "<strong>Cuenta Resultados:</strong> Ingresos y Beneficios.", "<strong>Cash Flow:</strong> Dinero real entra/sale."] },
                { type: 'p', text: "El <strong>Módulo Análisis Acciones</strong> en Nexus Pro simplifica esto." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Capítulo 13: Entender Ratios Clave",
            content: [
                { type: 'p', text: "Los ratios son atajos para revisar la salud sin leer 100 páginas." },
                {
                    type: 'box', style: 'info', title: '1. Valoración', content: [
                        { type: 'ul', items: ["<strong>PER:</strong> Precio pagado por 1$ beneficio. (20x = pagar 20$ por 1$ ganancias).", "<strong>PEG:</strong> PER dividido por Crecimiento. < 1.0 es ganga potencial."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Rentabilidad', content: [
                        { type: 'ul', items: ["<strong>Margen Neto:</strong> % beneficio sobre ventas.", "<strong>ROE:</strong> Eficiencia dinero accionistas. > 15% es genial."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Salud', content: [
                        { type: 'ul', items: ["<strong>Deuda/Patrimonio:</strong> Mide apalancamiento. > 1.0 necesita precaución.", "<strong>Ratio Corriente:</strong> Capacidad pagar facturas corto plazo."] }
                    ]
                },
                { type: 'p', text: "Para entender ratios bursátiles, compárelos con finanzas personales. Una empresa es solo un hogar grande. Abajo, comparamos conceptos 'Negocio' con equivalentes 'Familia'." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Capítulo 14: Inversión por Dividendos",
            content: [
                { type: 'p', text: "Estrategia enfocada en ingreso pasivo. Pagado por esperar. Como tener un huerto: quiere manzanas, no vender los árboles." },
                { type: 'p', text: "<strong>Rentabilidad (Yield):</strong> (Div Anual / Precio) * 100." },
                {
                    type: 'box', style: 'warning', title: 'Trampa de Yield (> 12%)', content: [
                        { type: 'p', text: "Regla Nexus: Yield > 12% obtiene nota 0. ¿Por qué? Si precio cae, yield sube. 15% yield usualmente grita 'Recorte Dividendo Inminente'." }
                    ]
                },
                { type: 'p', text: "<strong>Crecimiento Dividendo:</strong> La magia es comprar empresas que <strong>aumentan</strong> dividendos anualmente (Aristócratas)." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Capítulo 15: Construir una Cartera",
            content: [
                { type: 'p', text: "Su cartera necesita 2 cosas: Diversificación y Asignación." },
                {
                    type: 'box', style: 'concept', title: 'Diversificación', content: [
                        { type: 'p', text: "No ponga todos los huevos en la misma cesta. Mezcle <strong>Activos</strong> (Acciones/Bonos), <strong>Sectores</strong> (Tec/Banca/Energía) y <strong>Geografía</strong> (EE.UU./Mundo). Los ETFs hacen esto al instante." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Asignación', content: [
                        { type: 'p', text: "% de dinero en Acciones (Riesgo/Crecimiento) vs Bonos (Seguro)." },
                        { type: 'ul', items: ["<strong>Joven (20-35):</strong> Agresivo. Ej: 90% Acciones.", "<strong>Medio (35-50):</strong> Equilibrado. Ej: 70% Acciones / 30% Bonos.", "<strong>Jubilado:</strong> Seguro. Ej: 40% Acciones / 60% Bonos."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Capítulo 16: Psicología del Inversor",
            content: [
                { type: 'p', text: "Invertir es simple pero no fácil. Su peor enemigo es usted." },
                { type: 'ul', items: ["<strong>Codicia (FOMO):</strong> Comprar en la cima.", "<strong>Miedo:</strong> Vender en el fondo."] },
                {
                    type: 'box', style: 'success', title: 'Solución: DCA', content: [
                        { type: 'p', text: "<strong>Dollar-Cost Averaging</strong>. Invierta monto fijo mensualmente, pase lo que pase." },
                        { type: 'p', text: "Cuando mercado cae, compra MÁS acciones barato. Cuando sube, compra MENOS. Elimina emoción." }
                    ]
                },
                { type: 'p', text: "<strong>Bonus:</strong> ¡Lea el capítulo bonus Psicología del Dinero al final!" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Capítulo 17: Definir Objetivos",
            content: [
                { type: 'p', text: "No ahorre solo por ahorrar. Ahorre con propósito. Meta debe ser Smart." },
                { type: 'p', text: "Mal: \"Quiero ser rico\".<br>Bien: \"Quiero 50k$ entrada casa en 3 años.\"" },
                { type: 'p', text: "<strong>Acción:</strong> <strong>Módulo Meta</strong> calcula ahorro mensual requerido." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Capítulo 18: Planificar Jubilación",
            content: [
                { type: 'p', text: "Cuando su cartera paga su estilo de vida." },
                {
                    type: 'box', style: 'info', title: 'Regla del 4%', content: [
                        { type: 'p', text: "Históricamente, puede retirar <strong>4%</strong> de cartera anualmente sin agotarla por 30 años." },
                        { type: 'p', text: "Monto Meta: <strong>Gastos Anuales x 25</strong>." },
                        { type: 'p', text: "Ej: ¿Necesita 40k$/año? 40k x 25 = <strong>1,000,000$</strong>." }
                    ]
                },
                { type: 'p', text: "Use <strong>Módulo Retiro</strong> para simular." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Capítulo 19: Fundamental vs Técnico",
            content: [
                { type: 'p', text: "Duelo de filosofías." },
                { type: 'ul', items: ["<strong>Fundamental (Inversor):</strong> \"¿Es buena empresa?\" Herramienta: Balance. Meta: Largo plazo.", "<strong>Técnico (Trader):</strong> \"¿A dónde va el precio?\" Herramienta: Gráficos. Meta: Timing corto plazo."] },
                { type: 'p', text: "<strong>Nuestra visión:</strong> Para riqueza, Fundamental es rey. Técnico ayuda timing pero no debe ser la base." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Capítulo 20: Órdenes de Bolsa (Guía Completa)",
            content: [
                { type: 'p', text: "Saber qué comprar es una cosa, saber cómo es otra. Aquí los 5 tipos esenciales." },
                {
                    type: 'box', style: 'info', title: '1. Orden de Mercado', content: [
                        { type: 'p', text: "<strong>Concepto:</strong> \"Lo quiero YA, el precio no importa.\"" },
                        { type: 'p', text: "<strong>Cómo:</strong> Ejecutada inmediatamente al mejor precio disponible." },
                        { type: 'p', text: "<strong>Riesgo:</strong> Precio puede saltar antes de ejecución." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Orden Limitada', content: [
                        { type: 'p', text: "<strong>Concepto:</strong> \"Quiero comprar, pero no pagar más de X$.\"" },
                        { type: 'p', text: "<strong>Cómo:</strong> Fija un precio techo. Ejecuta solo si mercado lo toca." },
                        { type: 'p', text: "<strong>Beneficio:</strong> Control total precio." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Stop Loss', content: [
                        { type: 'p', text: "<strong>Concepto:</strong> \"Salida Emergencia.\"" },
                        { type: 'p', text: "<strong>Cómo:</strong> Orden dormida. Despierta si precio cae a X, luego vende a mercado." },
                        { type: 'p', text: "<strong>Riesgo:</strong> En un crash, puede vender muy por debajo de su precio stop." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Stop Limit', content: [
                        { type: 'p', text: "<strong>Concepto:</strong> \"Salida Emergencia Precisa.\"" },
                        { type: 'p', text: "<strong>Cómo:</strong> Igual que Stop, pero con límite de a cuánto vende bajo." },
                        { type: 'p', text: "<strong>Riesgo:</strong> Si precio cae muy rápido, puede no venderse nada." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Trailing Stop', content: [
                        { type: 'p', text: "<strong>Concepto:</strong> \"Dejar correr ganancias.\"" },
                        { type: 'p', text: "<strong>Cómo:</strong> Precio stop sube con la acción, pero nunca baja. Sigue la tendencia." }
                    ]
                }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Capítulo 21: Fiscalidad (ACB)",
            content: [
                { type: 'p', text: "Crucial para <strong>Cuentas Gravables</strong>. Cuando vende, paga impuesto sobre: <code>Precio Venta - ACB</code>." },
                {
                    type: 'box', style: 'info', title: 'ACB (Costo Base Ajustado)', content: [
                        { type: 'p', text: "Término oficial para su costo promedio. Promedio ponderado de todas compras incluyendo comisiones." },
                        { type: 'p', text: "Calc: (Costo total todas compras) / (Total acciones)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro estima ACB automáticamente en <strong>Módulo Inversión</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Capítulo 22: Rebalanceo",
            content: [
                { type: 'p', text: "Si meta es 70/30 Acciones/Bonos, y acciones ganan (ahora 80%), cartera es muy arriesgada." },
                { type: 'p', text: "<strong>Rebalancear:</strong> Vender alto (Acciones) y comprar bajo (Bonos) para volver a 70/30." },
                { type: 'p', text: "Le fuerza a <strong>Comprar Bajo, Vender Alto</strong> matemáticamente." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Capítulo 23: Trampas Psicológicas",
            content: [
                { type: 'ul', items: ["<strong>Sesgo Confirmación:</strong> Leer solo noticias que concuerdan con su opinión.", "<strong>Anclaje:</strong> Pensar que acción está barata porque estaba a 300$ antes. El pasado no importa.", "<strong>Aversión Pérdida:</strong> Vender ganadores muy rápido y mantener perdedores mucho tiempo."] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Capítulo 24: Glosario",
            content: [
                { type: 'p', text: "Repaso rápido." },
                {
                    type: 'grid', items: [
                        { title: "Activo", text: "Pone dinero en bolsillo." },
                        { title: "Pasivo", text: "Saca dinero." },
                        { title: "Acción", text: "Parte propiedad." },
                        { title: "Bono", text: "Préstamo a entidad." },
                        { title: "Dividendo", text: "Beneficio compartido." },
                        { title: "ETF", text: "Cesta de acciones." },
                        { title: "BPA", text: "Beneficio Por Acción." },
                        { title: "PER", text: "Precio/Beneficio." },
                        { title: "ACB", text: "Costo Base Ajustado (Fiscal)." },
                        { title: "Patrimonio Neto", text: "Activos - Pasivos." }
                    ]
                }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bonus: Psicología del Dinero",
            content: [
                { type: 'p', text: "<strong>(Basado en conceptos de Morgan Housel)</strong>." },
                {
                    type: 'box', style: 'info', title: 'Parte 1: Nadie está loco', content: [
                        { type: 'p', text: "Todos tomamos decisiones basadas en nuestra historia única. No juzgue a otros." },
                        { type: 'p', text: "<strong>Suerte y Riesgo:</strong> Bill Gates tuvo habilidad + suerte (computadora escuela). El éxito tiene ambos. Sea humilde." },
                        { type: 'p', text: "<strong>Nunca Suficiente:</strong> No arriesgue lo que tiene y necesita por lo que no tiene y no necesita." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Parte 2: Construir Riqueza', content: [
                        { type: 'p', text: "<strong>Interés Compuesto Confuso:</strong> Warren Buffett es rico porque empezó de niño. <em>Cállese y espere.</em>" },
                        { type: 'p', text: "<strong>Hacerse Rico vs Mantenerse Rico:</strong> Mantenerse rico requiere paranoia y frugalidad." },
                        { type: 'p', text: "<strong>Tails, You Win:</strong> Puede estar equivocado 50% del tiempo y ganar si sus ganadores son enormes." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Parte 3: Libertad', content: [
                        { type: 'p', text: "<strong>Libertad:</strong> El mayor dividendo es controlar su tiempo." },
                        { type: 'p', text: "<strong>Paradoja Hombre en el Coche:</strong> A nadie le importa su coche lujoso. Miran el coche, no a usted. Sea humilde." },
                        { type: 'p', text: "<strong>Riqueza es lo que no se ve:</strong> Riqueza es dinero ahorrado, no gastado." }
                    ]
                }
            ]
        }
    }
};
