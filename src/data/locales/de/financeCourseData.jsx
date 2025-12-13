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
        id: 1, title: "1. Kurs-Gewinn-Verhältnis (KGV)", color: pastelColors[0],
        biz: {
            formula: "Preis / Gewinn pro Aktie (EPS)",
            desc: "Wie viel Sie für 1$ Gewinn zahlen. Zeigt an, ob die Aktie teuer (Wachstum) oder billig (Wert) ist.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (für Value)",
            example: "100$ (Preis) / 5$ (EPS) = 20x"
        },
        fam: {
            title: "Familien-Kaufpreis",
            desc: "Stellen Sie sich vor, jemand möchte Ihre Familie 'kaufen'. Wenn Sie 10k pro Jahr sparen und man Sie für 200k kauft, ist das KGV 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "200.000$ / 10.000$ = 20x"
        }
    },
    {
        id: 2, title: "2. Wachstum (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Endwert / Anfangswert)^(1/n)) - 1",
            desc: "Geschwindigkeit, mit der das Unternehmen seine Gewinne oder Umsätze jedes Jahr steigert.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Gehaltserhöhung",
            desc: "Ihre jährliche Gehaltserhöhung. Wenn Sie von 50k auf 55k steigen, haben Sie ein Wachstum von 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "(55k - 50k) / 50k = 10%"
        }
    },
    {
        id: 3, title: "3. Nettomarge (%)", color: pastelColors[2],
        biz: {
            formula: "Nettogewinn / Umsatz",
            desc: "% jedes Dollars, der nach allen Ausgaben in der Tasche des Unternehmens bleibt.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "10.000$ / 100.000$ = 10%"
        },
        fam: {
            title: "Sparquote",
            desc: "Ihre Sparquote. Wenn Sie 4000$ verdienen und 400$ sparen, beträgt Ihre Marge 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "400$ / 4000$ = 10%"
        }
    },
    {
        id: 4, title: "4. Verschuldungsgrad", color: pastelColors[3],
        biz: {
            formula: "Gesamtschulden / Eigenkapital",
            desc: "Schuldenstand. Wenn > 1,0, schuldet das Unternehmen mehr Geld, als es auf dem Papier wert ist.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (< 1.0)",
            example: "200k$ / 100k$ = 2.0 (Riskant)"
        },
        fam: {
            title: "Schuldenquote",
            desc: "(Hypothek + Kreditkarte) / Ihr Nettovermögen.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "300k$ (Schulden) / 100k$ (Netto) = 3.0"
        }
    },
    {
        id: 5, title: "5. Eigenkapitalrendite (ROE)", color: pastelColors[4],
        biz: {
            formula: "Nettogewinn / Eigenkapital",
            desc: "Effizienz des Managements bei der Erzielung von Gewinnen mit dem Geld der Aktionäre.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (> 15%)",
            example: "15$ / 100$ = 15%"
        },
        fam: {
            title: "Investitionseffizienz",
            desc: "Wenn Sie 100k Nettovermögen haben und es 10k Gewinne/Zinsen generiert, beträgt Ihr ROE 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "10.000$ / 100.000$ = 10%"
        }
    },
    {
        id: 6, title: "6. Liquiditätsgrad (Current Ratio)", color: pastelColors[5],
        biz: {
            formula: "Umlaufvermögen / Kurzfr. Verbindlichkeiten",
            desc: "Fähigkeit, sofortige Rechnungen zu bezahlen. Wenn < 1,0, Gefahr von Liquiditätsengpässen.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (> 1.5)",
            example: "200k$ / 100k$ = 2.0"
        },
        fam: {
            title: "Abdeckung durch Notgroschen",
            desc: "Ihr Notgroschen / Ihre monatlichen Rechnungen.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (Sicherheit)",
            example: "5000$ / 2500$ = 2.0"
        }
    },
    {
        id: 7, title: "7. Dividendenrendite (%)", color: pastelColors[6],
        biz: {
            formula: "Jährliche Dividende / Aktienkurs",
            desc: "Die Barrendite der Investition, die vom Unternehmen gezahlt wird.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (Max 10-12%)",
            example: "4$ / 100$ = 4%"
        },
        fam: {
            title: "Taschengeld",
            desc: "Das Taschengeld, das Sie sich aus Ihren Investitionen für Spaß auszahlen.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Mehr Freiheit",
            example: "50$ (Erhalten) / 1000$ (Investiert) = 5%"
        }
    },
    {
        id: 8, title: "8. Bruttomarge", color: pastelColors[7],
        biz: {
            formula: "(Umsatz - Herstellkosten) / Umsatz",
            desc: "Grundlegende Rentabilität vor Zahlung von Büros, Werbung und Steuern.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Burn Rate",
            desc: "Lebenswichtige monatliche Ausgaben (Miete + Essen). Wie viele Monate überleben Sie ohne Einkommen?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (Ausgaben)",
            example: "2000$ / Monat (Vitale Ausgaben)"
        }
    },
    {
        id: 9, title: "9. Kurs-Umsatz-Verhältnis (KUV)", color: pastelColors[8],
        biz: {
            formula: "Marktkapitalisierung / Umsatz",
            desc: "Wird verwendet, um Unternehmen ohne Gewinn zu bewerten. Vergleicht den Marktwert mit dem Umsatzvolumen.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "1M$ / 500k$ = 2.0x"
        },
        fam: {
            title: "ROI (Return on Investment)",
            desc: "20k$ in eine Küche investieren, die den Hauswert um 30k$ steigert.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "(30k - 20k) / 20k = 50%"
        }
    },
    {
        id: 10, title: "10. Kurs-Cashflow-Verhältnis (KCV)", color: pastelColors[9],
        biz: {
            formula: "Preis / Cashflow pro Aktie",
            desc: "Oft zuverlässiger als KGV. Zeigt die tatsächliche Fähigkeit des Unternehmens an, Bargeld zu generieren.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "100$ / 10$ = 10x"
        },
        fam: {
            title: "Betriebskapital (Working Capital)",
            desc: "Ihr finanzielles Polster: Girokonto + Verfügbares Sparguthaben MINUS kommende Rechnungen.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (Positiv)",
            example: "2000$ (Bank) - 1500$ (Rechnungen) = +500$"
        }
    },
    {
        id: 11, title: "11. Verschuldungsgrad (Debt/Assets)", color: pastelColors[10],
        biz: {
            formula: "Gesamtschulden / Gesamtvermögen",
            desc: "Welcher Teil des Unternehmens ist durch die Bank finanziert?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "400k$ / 1M$ = 0.4"
        },
        fam: {
            title: "Freier Cashflow",
            desc: "Ihr Sparguthaben MINUS obligatorische Hausreparaturen. Das ist das echte verfügbare Geld.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "5000$ (Sparen) - 2000$ (Dach) = 3000$"
        }
    },
    {
        id: 12, title: "12. Ausschüttungsquote", color: pastelColors[11],
        biz: {
            formula: "Gezahlte Dividenden / Nettogewinn",
            desc: "Der Anteil des Gewinns, der an die Aktionäre zurückgegeben wird. Wenn > 80%, ist die Dividende möglicherweise gefährdet.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (Nachhaltig)",
            example: "2$ (Div) / 4$ (EPS) = 50%"
        },
        fam: {
            title: "Persönliche Ausgabenquote",
            desc: "% Ihres Überschusses, den Sie für Spaß (Restaurants) verwenden, anstatt zu reinvestieren.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (Zukünftiger Reichtum)",
            example: "400$ (Restos) / 1000$ (Überschuss) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Finanz 101 Leitfaden",
        subtitle: "Persönliche Finanzen von A bis Z meistern",
        parts: [
            { title: "Einführung", items: [{ id: 'intro', label: 'Warum dieser Leitfaden?' }] },
            { title: "Teil 1: Die Grundlagen", items: [{ id: 'chap1', label: "1. Die richtige Denkweise" }, { id: 'chap2', label: "2. Das Budget, Ihr GPS" }, { id: 'chap3', label: "3. Vermögenswerte vs. Verbindlichkeiten" }, { id: 'chap4', label: "4. Der Notgroschen" }, { id: 'chap5', label: "5. Schulden verwalten" }] },
            { title: "Teil 2: Investieren", items: [{ id: 'chap6', label: "6. Warum investieren?" }, { id: 'chap7', label: "7. Der Zinseszins" }, { id: 'chap8', label: "8. Risiko/Rendite" }, { id: 'chap9', label: "9. Anlagearten" }, { id: 'chap10', label: "10. Kontoarten" }] },
            { title: "Teil 3: Die Börse im Detail", items: [{ id: 'chap11', label: "11. Die Aktie" }, { id: 'chap12', label: "12. Fundamentalanalyse" }, { id: 'chap13', label: "13. Kennzahlen" }, { id: 'chap14', label: "14. Dividenden" }, { id: 'chap15', label: "15. Portfolio aufbauen" }, { id: 'chap16', label: "16. Psychologie" }] },
            { title: "Teil 4: Ihre Ziele", items: [{ id: 'chap17', label: "17. Ziele" }, { id: 'chap18', label: "18. Ruhestand" }] },
            { title: "Teil 5: Fortgeschrittene Strategien", items: [{ id: 'chap19', label: "19. Fund. vs Tech." }, { id: 'chap20', label: "20. Börsenaufträge" }, { id: 'chap21', label: "21. Besteuerung" }, { id: 'chap22', label: "22. Rebalancing" }, { id: 'chap23', label: "23. Psychologische Fallen" }] },
            { title: "Anhang", items: [{ id: 'chap24', label: "24. Glossar" }, { id: 'bonus_psych', label: "Bonus: Psychologie" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Einführung: Warum dieser Leitfaden?",
            content: [
                { type: 'p', text: "Sie halten ein mächtiges Werkzeug in Ihren Händen: <strong>Nexus Finance Pro</strong>. Es ist ein ausgefeilter Taschenrechner, ein präziser Portfoliomanager und ein strategischer Schuldenplaner in einem." },
                { type: 'p', text: "Aber ein Werkzeug, so mächtig es auch sein mag, ist nur effektiv, wenn der Handwerker weiß, wie und warum er es benutzt." },
                { type: 'p', text: "Dieser Leitfaden ist das <strong>\"Warum\"</strong>. Nexus Finance Pro ist das <strong>\"Wie\"</strong>." },
                { type: 'p', text: "Sie müssen kein Experte sein, um Nexus Finance Pro zu nutzen, aber das Verständnis der grundlegenden Konzepte wird Ihre Erfahrung verändern. Sie werden nicht nur auf Knöpfe klicken, sondern einen Plan ausführen." },
                {
                    type: 'box', style: 'info', title: 'Was Sie lernen werden', content: [
                        { type: 'p', text: "Dieser Leitfaden lehrt Sie die zeitlosen Prinzipien des Geldmanagements. Wir behandeln:" },
                        { type: 'ul', items: ["<strong>Psychologie:</strong> Wie Sie Ihre Emotionen beherrschen, um teure Fehler zu vermeiden.", "<strong>Die Grundlagen:</strong> Ein solides Budget erstellen, einen Notgroschen aufbauen und Schulden bekämpfen.", "<strong>Investieren:</strong> Verstehen, warum und wie Sie Ihr Geld für sich arbeiten lassen.", "<strong>Die Börse:</strong> Entmystifizierung von Aktien, ETFs und Finanzkennzahlen, um mit Zuversicht zu investieren.", "<strong>Fortgeschrittene Strategien:</strong> Konzepte für Fortgeschrittene zur Optimierung Ihrer Steuern und Ihres Portfoliomanagements."] }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Kapitel 1: Die richtige Denkweise",
            content: [
                { type: 'p', text: "Willkommen zu diesem Leitfaden! Bevor wir über Zahlen, Kennzahlen oder Strategien sprechen, müssen wir über das mächtigste Werkzeug sprechen, das Ihnen zur Verfügung steht: Ihre Denkweise." },
                { type: 'p', text: "Finanzmanagement ist keine Glückssache. Es ist kein Geheimnis, das einer Elite vorbehalten ist. Es ist eine Reihe von Gewohnheiten, Entscheidungen und Systemen, die jeder lernen und anwenden kann." },
                { type: 'p', text: "Das größte Hindernis ist nicht der Geldmangel, es ist die Psychologie. Es ist die Angst, auf die Konten zu schauen, die Prokrastination oder das Gefühl, \"schlecht mit Zahlen\" zu sein." },
                {
                    type: 'box', style: 'warning', title: 'Mythen, die es zu entlarven gilt', content: [
                        { type: 'ul', items: ["<strong>Mythos 1: \"Man braucht Geld, um Geld zu machen.\"</strong><br>Falsch. Man braucht Gewohnheiten, um Geld zu machen. Eine Person, die mit einem Plan 100$ im Monat spart, wird immer eine Person schlagen, die 10.000$ im Monat verdient, aber 10.100$ ausgibt.", "<strong>Mythos 2: \"Investieren ist wie Glücksspiel.\"</strong><br>Falsch. Kurzfristige Spekulation (Daytrading) ist wie Glücksspiel. Langfristiges Investieren, basierend auf der Analyse der Unternehmensgesundheit, ist die Teilnahme am globalen Wirtschaftswachstum. Es ist der Besitz eines Anteils an einem echten Unternehmen.", "<strong>Mythos 3: \"Ich bin zu jung / zu alt, um anzufangen.\"</strong><br>Falsch. Wenn Sie jung sind, ist Ihr größtes Kapital die Zeit (siehe Kapitel 7 über den Zinseszins). Wenn Sie älter sind, ist Ihr größtes Kapital (oft) ein höheres Einkommen und Disziplin. Die beste Zeit, um anzufangen, war vor 10 Jahren. Die zweitbeste Zeit ist heute."] }
                    ]
                },
                { type: 'p', text: "<strong>Ihr Hauptziel:</strong> Finanzielle UNABHÄNGIGKEIT. Es geht nicht darum, reich zu werden, um ein Luxusauto zu kaufen. Es geht darum, genug Vermögenswerte (Investitionen) zu haben, die für Sie arbeiten, damit Sie nicht mehr arbeiten müssen, um Ihre Rechnungen zu bezahlen. Arbeit wird zu einer Wahl, nicht zu einer Verpflichtung." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Kapitel 2: Das Budget, Ihr GPS",
            content: [
                { type: 'p', text: "Sie können kein Ziel erreichen, wenn Sie nicht wissen, wo Sie sind. Das Budget ist Ihr \"Sie sind hier\" auf der Finanzkarte. Es ist kein Gefängnis, das Sie vom Ausgeben abhalten soll; es ist ein Werkzeug, das Ihnen die Erlaubnis geben soll, ohne Schuldgefühle Geld auszugeben." },
                { type: 'p', text: "Ein Budget beantwortet eine einzige Frage: <strong>Wohin geht mein Geld?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'Das Null-basierte Budget', content: [
                        { type: 'p', text: "Die effektivste Methode ist das \"Null-basierte Budget\". Die Idee ist einfach: Am Ende des Monats muss die Differenz zwischen Ihrem Einkommen und Ihren Geldausgängen null sein. Das bedeutet nicht, dass Sie nichts mehr übrig haben! Es bedeutet, dass jeder Dollar eine Mission erhalten hat." },
                        { type: 'p', text: "<code>Einkommen - Ausgaben - Sparen - Investitionen = 0$</code>" },
                        { type: 'p', text: "Wenn Sie 3000$ verdienen und 2500$ Ausgaben haben, bleiben Ihnen 500$. Mit einem null-basierten Budget entscheiden Sie im Voraus, was diese 500$ tun werden: \"200$ für den Notgroschen\", \"100$ für das Depot\", \"200$ für den Urlaubsfonds\"." }
                    ]
                },
                { type: 'p', text: "<strong>Handeln Sie:</strong> Nutzen Sie das <strong>Budget-Modul</strong> von Nexus Finance Pro. Listen Sie ALLE Ihre Einnahmen und ALLE Ihre Ausgaben auf, sogar den 3$-Kaffee. Verwenden Sie Häufigkeiten (jährlich, monatlich), damit das Tool Ihren exakten monatlichen Cashflow berechnet. Dies ist der erste Schritt Ihres gesamten Plans." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Kapitel 3: Vermögenswerte vs. Verbindlichkeiten",
            content: [
                { type: 'p', text: "Dies ist das wichtigste Konzept im Bereich der persönlichen Finanzen, popularisiert durch Robert Kiyosaki in \"Rich Dad Poor Dad\"." },
                {
                    type: 'box', style: 'info', title: 'Die einfache Definition', content: [
                        { type: 'p', text: "Ein <strong>VERMÖGENSWERT (Asset)</strong> legt Geld in Ihre Tasche." },
                        { type: 'p', text: "Eine <strong>VERBINDLICHKEIT (Liability)</strong> zieht Geld aus Ihrer Tasche." }
                    ]
                },
                { type: 'p', text: "Es ist so einfach. Das Ziel Ihres Finanzlebens ist es, Ihr Einkommen zu nutzen, um Vermögenswerte zu kaufen, damit diese Vermögenswerte neues Einkommen generieren, um noch mehr Vermögenswerte zu kaufen." },
                {
                    type: 'grid', items: [
                        { title: "Beispiele für Assets", text: "Eine Aktie, die eine Dividende zahlt. Ein ETF, der an Wert gewinnt. Eine rentable Mietimmobilie." },
                        { title: "Beispiele für Liabilities", text: "Ein Autokredit. Kreditkartenschulden. Studienkredit." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Die Falle der Hauptwohnsitzes', content: [
                        { type: 'p', text: "\"Mein Haus ist mein größter Vermögenswert!\" Wirklich? Jeden Monat zieht es Geld aus Ihrer Tasche (Hypothek, Steuern, Versicherung, Reparaturen). Nach der strengen Definition ist Ihr Hauptwohnsitz eine Verbindlichkeit." },
                        { type: 'p', text: "Er kann zu einem Vermögenswert werden, an dem Tag, an dem Sie ihn verkaufen (wenn er an Wert gewonnen hat) oder wenn Sie den Keller vermieten (er generiert Einkommen). Aber verwechseln Sie eine Verbindlichkeit (die Sie Geld kostet) nicht mit einer Investition." }
                    ]
                },
                { type: 'p', text: "Ihr <strong>Nettovermögen</strong> ist das Maß für Ihre finanzielle Gesundheit. Das ist es, was Sie auf Ihrem Dashboard sehen." },
                { type: 'p', text: "<strong>Nettovermögen = Gesamtvermögen - Gesamtverbindlichkeiten</strong>. Ihr Ziel ist es, diese Zahl Monat für Monat, Jahr für Jahr wachsen zu lassen." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Kapitel 4: Der Notgroschen",
            content: [
                { type: 'p', text: "Das Leben ist unvorhersehbar. Das Auto geht kaputt. Das Dach leckt. Sie verlieren Ihren Job. Der Unterschied zwischen einem Missgeschick und einer finanziellen Katastrophe nennt sich Notgroschen." },
                { type: 'p', text: "Ein Notgroschen ist Ihr Schutzschild. Es ist Geld, das ausschließlich für Notfälle beiseite gelegt wird. Dieses Geld wird nicht investiert, es ist nicht dazu da, um zu \"performen\". Es ist dazu da, liquide, zugänglich und langweilig zu sein." },
                {
                    type: 'box', style: 'info', title: 'Wie viel?', content: [
                        { type: 'p', text: "Das Standardziel ist es, <strong>3 bis 6 Monate</strong> der Lebenshaltungskosten zu halten." },
                        { type: 'p', text: "Berechnen Sie, wie viel Sie jeden Monat zum Leben ausgeben müssen (Miete/Hypothek, Grundnahrungsmittel, Strom, Minimum an Transport). Wenn dieser Betrag 2.500$ beträgt, sollte Ihr Notgroschen zwischen 7.500$ und 15.000$ liegen." }
                    ]
                },
                { type: 'p', text: "<strong>Wo sollte es liegen?</strong> An einem sicheren und zugänglichen Ort, aber nicht zu zugänglich (nicht auf Ihrem täglichen Girokonto). Ein Tagesgeldkonto ist ideal. Es ist getrennt von Ihren täglichen Operationen, aber Sie können in 1 oder 2 Tagen darauf zugreifen." },
                { type: 'p', text: "<strong>Absolute Priorität:</strong> Bevor Sie Schulden abbezahlen (außer Minima) und bevor Sie einen einzigen Dollar an der Börse investieren, bauen Sie einen \"Mini-Fonds\" von 1.000$ auf. Dieses Geld verhindert, dass Sie bei der nächsten Reifenpanne weiter in die Schulden rutschen." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Kapitel 5: Schulden verwalten",
            content: [
                { type: 'p', text: "Es gibt zwei Arten von Schulden: \"gute\" Schulden und \"schlechte\" Schulden." },
                { type: 'ul', items: ["<strong>Gute Schulden (Investitionsschulden):</strong> Schulden, die verwendet werden, um einen Vermögenswert zu kaufen, der an Wert gewinnt. Bsp: Eine Hypothek (um Immobilien zu kaufen), ein Studienkredit (um in sich selbst zu investieren).", "<strong>Schlechte Schulden (Konsumschulden):</strong> Schulden, die verwendet werden, um eine Verbindlichkeit zu kaufen, die an Wert verliert. Bsp: Ein Autokredit, Kreditkartenschulden für Urlaub oder Restaurants."] },
                { type: 'p', text: "Ihr Ziel ist es, schlechte Schulden so schnell wie möglich abzubezahlen. Dafür gibt es zwei Hauptstrategien, die Sie im Planungsmodul simulieren können." },
                {
                    type: 'box', style: 'info', title: 'Strategie 1: Die Lawine', content: [
                        { type: 'p', text: "Sie listen alle Ihre Schulden nach absteigendem Zinssatz auf. Sie stecken alles überschüssige Geld in die Schuld mit dem höchsten Zinssatz." },
                        { type: 'p', text: "<strong>Vorteil:</strong> Diese Methode spart Ihnen am meisten Geld an Zinsen. Sie ist mathematisch am effizientesten." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Strategie 2: Der Schneeball', content: [
                        { type: 'p', text: "Sie listen alle Ihre Schulden nach aufsteigendem Saldo auf (vom kleinsten zum größten). Sie attackieren die kleinste Schuld mit all Ihrem überschüssigen Geld." },
                        { type: 'p', text: "<strong>Vorteil:</strong> Sie erhalten schnelle \"Siege\". Das Abbezahlen einer kleinen Schuld schafft immensen psychologischen Schwung und Motivation, weiterzumachen." }
                    ]
                },
                { type: 'p', text: "Welche Methode wählen? Diejenige, die Sie motiviert hält. Das Planungsmodul zeigt Ihnen die Auswirkungen von beiden." }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Kapitel 6: Warum investieren?",
            content: [
                { type: 'p', text: "Wenn Sie bereits ein Budget und einen Notgroschen haben, herzlichen Glückwunsch! Sie haben den \"Verteidigungsmodus\" beendet. Es ist Zeit, in den \"Angriffsmodus\" zu wechseln: Investieren." },
                { type: 'p', text: "Sparen (Geld auf ein Konto legen) schützt Sie. Investieren (Vermögenswerte kaufen) macht Sie reich." },
                {
                    type: 'box', style: 'warning', title: 'Ihr Feind Nr. 1: Inflation', content: [
                        { type: 'p', text: "Inflation ist der allgemeine Preisanstieg im Laufe der Zeit. Wenn die Inflation 3% pro Jahr beträgt, bedeutet das, dass 100$ heute nächstes Jahr nur noch Waren und Dienstleistungen im Wert von 97$ kaufen werden. Ihr Geld <strong>verliert</strong> an Wert, wenn es schläft." },
                        { type: 'p', text: "Wenn Sie 10.000$ für 25 Jahre auf einem Girokonto (0%) lassen, bei einer durchschnittlichen Inflation von 2,5%, wird Ihre \"Kaufkraft\" nur noch 5.394$ betragen. Sie werden fast die Hälfte Ihres Geldes verloren haben, indem Sie nichts getan haben." }
                    ]
                },
                { type: 'p', text: "Das Ziel des Investierens ist einfach: Erzielen Sie eine Rendite, die höher ist als die Inflation, damit Ihre Kaufkraft im Laufe der Zeit wächst." },
                { type: 'p', text: "Nexus Finance Pro hilft Ihnen, diese Auswirkungen zu sehen. In den Modulen Zukunftswert und Auszahlung berechnet das Tool immer den \"Nominalwert\" (Gesamtbetrag) und die \"Reale Kaufkraft\" (was dieses Geld nach Inflation wirklich wert sein wird)." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Kapitel 7: Der Zinseszins",
            content: [
                { type: 'p', text: "Albert Einstein soll gesagt haben, Zinseszins sei \"das achte Weltwunder\". Er ist der Motor der Vermögensbildung." },
                { type: 'p', text: "Zinseszins bedeutet einfach, Zinsen auf Ihre Zinsen zu verdienen. Es ist ein Schneeballeffekt." },
                {
                    type: 'box', style: 'success', title: 'Einfaches Beispiel', content: [
                        { type: 'ul', items: ["Jahr 1: Sie verdienen 8% von 10.000$ (800$). Saldo: 10.800$.", "Jahr 2: Sie verdienen 8% von 10.800$ (864$). Saldo: 11.664$.", "Jahr 3: Sie verdienen 8% von 11.664$ (933$). Saldo: 12.597$."] },
                        { type: 'p', text: "Ihr Geld arbeitet für Sie, und die \"Angestellten\" (Ihre Gewinne) fangen selbst an zu arbeiten und Kinder zu bekommen!" }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Der Zeitfaktor', content: [
                        { type: 'p', text: "Die wichtigste Variable ist die Zeit. Schauen Sie sich den Unterschied an:" },
                        { type: 'p', text: "<strong>Alex (25 bis 35):</strong> Investiert 5000$/Jahr für 10 Jahre (Total 50k).<br><strong>Ben (35 bis 65):</strong> Investiert 5000$/Jahr für 30 Jahre (Total 150k)." },
                        { type: 'p', text: "Mit 65 (8% Rendite):<br>Alex (der nur 50k eingezahlt hat) wird haben: <strong>1.028.000$</strong><br>Ben (der 150k eingezahlt hat) wird haben: <strong>611.000$</strong>" },
                        { type: 'p', text: "Alex gewinnt, einfach weil er 10 Jahre früher angefangen hat. Seine 50.000$ hatten mehr Zeit, sich zu \"verzinsen\"." }
                    ]
                },
                { type: 'p', text: "<strong>Handeln Sie:</strong> Gehen Sie zum Zukunftswert-Modul. Geben Sie Ihr Anfangskapital, monatliche Beiträge und eine Rendite (Bsp: 8%) ein. Schauen Sie sich an, was die Grafik Ihnen über 30 Jahre zeigt. Sie werden von der exponentiellen Kurve erstaunt sein." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Kapitel 8: Das Risiko/Rendite-Spektrum",
            content: [
                { type: 'p', text: "Es gibt kein kostenloses Mittagessen im Finanzwesen. Die goldene Regel lautet: <strong>Je höher die potenzielle Rendite, desto höher das Verlustrisiko.</strong>" },
                { type: 'p', text: "Ihre Aufgabe als Investor ist es nicht, Risiken zu vermeiden, sondern sie zu managen." },
                {
                    type: 'box', style: 'info', title: 'Das Spektrum', content: [
                        { type: 'ul', items: ["<strong>Niedriges Risiko / Niedrige Rendite:</strong> Sparkonten, Festgeld, Staatsanleihen. Kapital garantiert, schlägt aber kaum die Inflation.", "<strong>Mittleres Risiko / Mittlere Rendite:</strong> Breite Index-ETFs (S&P 500, MSCI World), \"Blue Chip\"-Aktien.", "<strong>Hohes Risiko / Hohe Rendite:</strong> Einzelaktien, kleine Unternehmen (Small Caps), Kryptowährungen."] }
                    ]
                },
                { type: 'p', text: "<strong>Was ist Risiko?</strong> Risiko ist <strong>Volatilität</strong>. Es ist die Geschwindigkeit, mit der der Preis steigt und fällt. Wenn Ihr Portfolio in 3 Monaten 30% verliert, werden Sie in Panik geraten und verkaufen? Es ist entscheidend, sich selbst zu kennen, bevor der Absturz passiert." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Kapitel 9: Anlagearten",
            content: [
                { type: 'p', text: "Hier sind die grundlegenden \"Lego-Steine\", die Sie zum Aufbau Ihres Portfolios verwenden können." },
                { type: 'ul', items: ["<strong>1. Aktien (Equities):</strong> Der Kauf einer Aktie (`AAPL`, `Allianz`) ist der Kauf eines kleinen Anteils am Unternehmen. Sie gewinnen durch Wertsteigerung (Kurs nach oben) und Dividenden (Gewinnbeteiligung).", "<strong>2. Anleihen (Bonds):</strong> Geld an eine Regierung oder ein Unternehmen für feste Zinsen leihen. Generell sicherer als Aktien.", "<strong>3. Exchange Traded Funds (ETFs):</strong> Oft der beste Startpunkt. Ein ETF ist ein \"Korb\", der Hunderte von Aktien oder Anleihen enthält, sich aber wie eine einzelne Aktie kaufen lässt."] },
                { type: 'p', text: "Mit einem ETF (Bsp: `VFV` für S&P 500) besitzen Sie einen winzigen Teil der 500 größten US-Unternehmen. Es ist sofortige Diversifikation zu sehr geringen Kosten." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Kapitel 10: Kontoarten (Kanada)",
            content: [
                { type: 'p', text: "Bevor Sie eine Investition kaufen, müssen Sie den steuerlichen \"Behälter\" wählen. TFSA und RRSP sind <strong>keine</strong> Investitionen, sie sind Konten mit Steuervorteilen." },
                {
                    type: 'box', style: 'success', title: '1. TFSA (Tax-Free Savings Account)', content: [
                        { type: 'p', text: "Sie investieren Geld nach Steuern (Netto). <strong>Vorteil:</strong> ALLE Gewinne (Kapitalgewinne, Dividenden) sind <strong>100% steuerfrei</strong>, ein Leben lang." },
                        { type: 'p', text: "<strong>Auszahlungen:</strong> Steuerfrei. Beitragsraum kehrt im folgenden Jahr zurück. Ideal für: Notgroschen, Anzahlung Haus, Ruhestand." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. RRSP (Registered Retirement Savings Plan)', content: [
                        { type: 'p', text: "Sie investieren Geld vor Steuern. <strong>Vorteil:</strong> Beitrag wird von Ihrem steuerpflichtigen Einkommen abgezogen (große Steuerrückerstattung)." },
                        { type: 'p', text: "<strong>Auszahlungen:</strong> Steuerpflichtig im Ruhestand. Ideal für: Langfristige Altersvorsorge bei hohem Einkommen." }
                    ]
                },
                { type: 'p', text: "<strong>3. Nicht-registriertes Konto:</strong> Basiskonto, kein Steuervorteil. Jährlich steuerpflichtig auf Dividenden. Kapitalgewinne sind nur beim Verkauf steuerpflichtig." },
                { type: 'p', text: "<strong>Die Gewinnstrategie:</strong> 1. TFSA maximieren. 2. RRSP maximieren. 3. Ins nicht-registrierte Konto (Cash) investieren." }
            ]
        },
        chap10_intl: {
            id: 'chap10',
            title: "Kapitel 10: Kontoarten (International)",
            content: [
                { type: 'p', text: "Regierungen auf der ganzen Welt bieten Steueranreize, um das Sparen zu fördern. Während sich die Namen ändern (401k in USA, ISA in UK, Depot in DE), bleiben die Kernkonzepte gleich." },
                {
                    type: 'box', style: 'success', title: '1. Steuerfreie Konten', content: [
                        { type: 'p', text: "Sie investieren 'Nach-Steuer'-Geld. <strong>Vorteil:</strong> Zukünftige Gewinne sind 100% steuerfrei." },
                        { type: 'p', text: "<strong>Beispiele:</strong> Roth IRA (USA), ISA (UK), TFSA (Kanada)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Steuerbegünstigte Konten', content: [
                        { type: 'p', text: "Sie investieren 'Vor-Steuer'-Geld. <strong>Vorteil:</strong> Sofortiger Steuerabzug, aber Sie zahlen Steuern bei der Auszahlung." },
                        { type: 'p', text: "<strong>Beispiele:</strong> 401k / Traditional IRA (USA), RRSP (Kanada), Betriebsrente." }
                    ]
                },
                { type: 'p', text: "<strong>3. Steuerpflichtiges Depot:</strong> Kein Steuervorteil. Sie zahlen jedes Jahr Steuern auf Dividenden und Kapitalgewinne (z.B. Abgeltungsteuer)." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Kapitel 11: Die Aktie",
            content: [
                { type: 'p', text: "Der Kauf einer Aktie ist der Kauf eines Eigentumsanteils an einem Unternehmen. Wenn ein Unternehmen 1.000.000 Aktien hat und Sie 100 kaufen, besitzen Sie 0,01% dieses Unternehmens." },
                { type: 'p', text: "Sie sind jetzt ein Eigentümer. Sie haben Anspruch auf einen Anteil am Gewinn (Dividenden)." },
                { type: 'p', text: "<strong>Die Börse:</strong> Es ist ein großer öffentlicher Marktplatz, auf dem der Preis durch Angebot und Nachfrage bestimmt wird. Wenn Menschen hohe zukünftige Gewinne erwarten (z.B. neues iPhone), steigt die Nachfrage und der Preis geht nach oben." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Kapitel 12: Fundamentalanalyse",
            content: [
                { type: 'p', text: "Fundamentalanalyse ist die Kunst, die reale finanzielle Gesundheit und den Wert eines Unternehmens zu bewerten. Das Ziel ist es, außergewöhnliche Unternehmen zu einem gewöhnlichen Preis zu finden." },
                { type: 'p', text: "Wir schauen uns die Konten an:" },
                { type: 'ul', items: ["<strong>Bilanz (Balance Sheet):</strong> Was das Unternehmen besitzt (Vermögenswerte) und schuldet (Verbindlichkeiten).", "<strong>Gewinn- und Verlustrechnung (Income Statement):</strong> Einnahmen, Ausgaben und Gewinne.", "<strong>Cashflow:</strong> Geld, das tatsächlich reinkommt und rausgeht."] },
                { type: 'p', text: "Das <strong>Aktienanalyse-Modul</strong> von Nexus Pro ist ein vereinfachtes Werkzeug zur Fundamentalanalyse." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Kapitel 13: Kennzahlen verstehen",
            content: [
                { type: 'p', text: "Kennzahlen sind Abkürzungen, um die Gesundheit eines Unternehmens zu verstehen, ohne 100 Seiten Berichte zu lesen. Nexus Pro verwendet diese Kennzahlen für seinen \"Nexus Score\"." },
                { type: 'p', text: "<em>Hinweis: Für Immobilienkennzahlen (LTV, Cap Rate), siehe den Immobilien-Leitfaden.</em>" },
                {
                    type: 'box', style: 'info', title: '1. Bewertung', content: [
                        { type: 'ul', items: ["<strong>KGV (Kurs-Gewinn-Verhältnis):</strong> Preis für 1$ Gewinn. (20x = Sie zahlen 20$ für 1$ Gewinn).", "<strong>PEG-Verhältnis:</strong> KGV geteilt durch Wachstum. Wenn < 1,0, ist die Aktie potenziell unterbewertet."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Rentabilität', content: [
                        { type: 'ul', items: ["<strong>Nettomarge:</strong> % des reinen Gewinns bei jedem Verkauf.", "<strong>ROE (Eigenkapitalrendite):</strong> Effizienz bei der Verwendung von Aktionärsgeld. > 15% ist exzellent."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Finanzielle Gesundheit', content: [
                        { type: 'ul', items: ["<strong>Verschuldungsgrad (Debt/Equity):</strong> Misst die Verschuldung. Wenn > 1,0, seien Sie vorsichtig.", "<strong>Liquiditätsgrad:</strong> Fähigkeit, kurzfristige Rechnungen zu bezahlen."] }
                    ]
                },
                { type: 'p', text: "Um Aktienkennzahlen vollständig zu verstehen, ist es hilfreich, sie mit Ihrem eigenen persönlichen Finanzmanagement zu vergleichen. Ein Unternehmen ist einfach ein Haushalt im großen Maßstab. Unten vergleichen wir jedes 'Business'-Konzept mit seinem 'Familien'-Äquivalent." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Kapitel 14: Dividenden-Investieren",
            content: [
                { type: 'p', text: "Strategie, die auf die Generierung von passivem Einkommen ausgerichtet ist. Sie werden fürs Warten bezahlt. Es ist wie der Besitz eines Obstgartens: Sie wollen die Bäume nicht verkaufen, Sie wollen die Äpfel ernten." },
                { type: 'p', text: "<strong>Rendite:</strong> (Jährliche Dividende / Aktienkurs) * 100. Wenn eine Aktie 100$ kostet und 4$ zahlt, beträgt die Rendite 4%." },
                {
                    type: 'box', style: 'warning', title: 'Die Rendite-Falle (> 12%)', content: [
                        { type: 'p', text: "Nexus Regel: Jede Rendite > 12% erhält einen Score von 0. Warum?" },
                        { type: 'p', text: "Wenn ein Aktienkurs einbricht (weil das Unternehmen scheitert), steigt die Rendite mechanisch. Eine 15%ige Rendite schreit oft danach, dass die Dividende bald gekürzt wird. Es ist eine \"Yield Trap\"." }
                    ]
                },
                { type: 'p', text: "<strong>Dividendenwachstum:</strong> Die wirkliche Magie ist der Kauf von Unternehmen, die ihre Dividende jedes Jahr <strong>erhöhen</strong> (Aristokraten). Im Investment-Modul können Sie passives Einkommen separat verfolgen." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Kapitel 15: Ihr Portfolio aufbauen",
            content: [
                { type: 'p', text: "Ihr Portfolio ist die Sammlung all Ihrer Investitionen. Der Aufbau erfordert zwei Dinge: Diversifikation und Allokation." },
                {
                    type: 'box', style: 'concept', title: 'Diversifikation', content: [
                        { type: 'p', text: "Legen Sie nicht alle Eier in einen Korb. Diversifizieren Sie nach <strong>Anlageklasse</strong> (Aktien/Anleihen), <strong>Sektor</strong> (Tech, Banken, Energie) und <strong>Geographie</strong> (Kanada, USA, Welt). ETFs bieten dies sofort." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Asset-Allokation', content: [
                        { type: 'p', text: "Es ist der % Ihres Geldes in Aktien (Risiko/Wachstum) vs. Anleihen (Sicher/Stabilität)." },
                        { type: 'ul', items: ["<strong>Jung (20-35):</strong> Aggressiv. Bsp: 90% Aktien / 10% Anleihen.", "<strong>Mitte Karriere (35-50):</strong> Ausgewogen. Bsp: 70% Aktien / 30% Anleihen.", "<strong>Ruhestand:</strong> Konservativ. Bsp: 40% Aktien / 60% Anleihen."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Kapitel 16: Anlegerpsychologie",
            content: [
                { type: 'p', text: "Investieren ist einfach, aber nicht leicht. Ihr schlimmster Feind sind Sie selbst (Ihre Emotionen)." },
                { type: 'ul', items: ["<strong>Gier (FOMO):</strong> Kaufen, wenn alles oben ist, am Gipfel, aus Angst, etwas zu verpassen. Ergebnis: Teuer kaufen.", "<strong>Angst:</strong> Verkaufen, wenn alles abstürzt. Ergebnis: Billig verkaufen und Verlust dauerhaft machen."] },
                {
                    type: 'box', style: 'success', title: 'Die Lösung: Sparplan (DCA)', content: [
                        { type: 'p', text: "<strong>Dollar-Cost Averaging</strong>. Investieren Sie 500$ pro Monat, egal was passiert, automatisch." },
                        { type: 'p', text: "Wenn der Markt unten ist, kauft Ihr 500$ MEHR Anteile. Wenn er oben ist, kauft er WENIGER. Sie profitieren von Dips ohne Emotionen." }
                    ]
                },
                { type: 'p', text: "<strong>Weiter gehen:</strong> Ein Bonuskapitel, das ganz der <strong>Psychologie des Geldes</strong> gewidmet ist (basierend auf Morgan Housels Buch), wurde am Ende dieses Leitfadens hinzugefügt. Verpassen Sie es nicht!" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Kapitel 17: Ziele definieren",
            content: [
                { type: 'p', text: "Wir sparen nicht einfach nur, um zu sparen. Wir sparen für ein Ziel. Ein gutes Ziel ist <strong>S.M.A.R.T.</strong>: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert." },
                { type: 'p', text: "Schlecht: \"Ich will reich sein\".<br>Gut: \"Ich will 50.000$ für eine Anzahlung in 3 Jahren.\"" },
                { type: 'p', text: "<strong>Handeln Sie:</strong> Das <strong>Ziele-Modul</strong> berechnet genau, wie viel Sie pro Monat sparen müssen, um Ihre Ziele zu erreichen." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Kapitel 18: Planung für den Ruhestand",
            content: [
                { type: 'p', text: "Es ist der Moment, in dem Ihr Portfolio für Ihren Lebensstil bezahlt." },
                {
                    type: 'box', style: 'info', title: 'Die 4% Regel', content: [
                        { type: 'p', text: "Historisch gesehen können Sie jährlich <strong>4%</strong> Ihres Portfolios abheben, ohne dass Ihnen das Geld für 30 Jahre ausgeht." },
                        { type: 'p', text: "Schnelle Berechnung des benötigten Betrags: <strong>Gewünschte Jahresausgaben x 25</strong>." },
                        { type: 'p', text: "Bsp: Um von 40.000$/Jahr zu leben: 40.000 x 25 = <strong>1.000.000$</strong>." }
                    ]
                },
                { type: 'p', text: "Nutzen Sie das <strong>Auszahlungs-Modul</strong>, um das Überleben des Kapitals unter verschiedenen Szenarien zu simulieren." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Kapitel 19: Fundamental vs. Technisch",
            content: [
                { type: 'p', text: "Ein Duell der Philosophien." },
                { type: 'ul', items: ["<strong>Fundamental (Investor):</strong> Frage: \"Ist es ein gutes Unternehmen?\" Werkzeuge: Bilanzen, Kennzahlen, Management. Ziel: Langfristig.", "<strong>Technisch (Trader):</strong> Frage: \"Wohin bewegt sich der Preis?\" Werkzeuge: Charts, Gleitende Durchschnitte, RSI. Ziel: Kurzfristig (Timing)."] },
                { type: 'p', text: "<strong>Unsere Sicht:</strong> Für den Vermögensaufbau ist Fundamental der König. Technisch kann beim Timing helfen, sollte aber nie die einzige Basis sein." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Kapitel 20: Börsenaufträge (Der komplette Guide)",
            content: [
                { type: 'p', text: "Zu wissen, was man kaufen soll, ist eine Sache, zu wissen, wie man es kauft, eine andere. Hier sind die 5 wesentlichen Auftragsarten, um Ihre Einstiegs- und Ausstiegspreise zu kontrollieren." },
                {
                    type: 'box', style: 'info', title: '1. Marktorder (Market)', content: [
                        { type: 'p', text: "<strong>Das Konzept:</strong> \"Ich will es jetzt sofort, egal zu welchem genauen Preis.\"" },
                        { type: 'p', text: "<strong>Wie es funktioniert:</strong> Die Order wird sofort zum besten verfügbaren Preis der Verkäufer ausgeführt." },
                        { type: 'p', text: "<strong>Vorteil:</strong> Geschwindigkeit garantiert. Sie erhalten die Aktie sicher." },
                        { type: 'p', text: "<strong>Risiko:</strong> Sie kontrollieren den Preis nicht. Wenn der Markt schnell ist (Volatilität), zahlen Sie vielleicht mehr als erwartet." },
                        { type: 'p', text: "<strong>Konkretes Beispiel:</strong> Aktie ABC steht bei 50,00$. Sie platzieren eine Marktorder. Den Bruchteil einer Sekunde später springt der Preis auf 50,05$. Ihre Order wird zu 50,05$ ausgeführt. Sie zahlen 5$ mehr als angezeigt." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Limit-Order', content: [
                        { type: 'p', text: "<strong>Das Konzept:</strong> \"Ich will kaufen, aber nicht höher als X$.\" (oder verkaufen nicht niedriger als X)." },
                        { type: 'p', text: "<strong>Wie es funktioniert:</strong> Sie setzen einen Höchstpreis. Die Order wird nur ausgeführt, wenn der Markt Ihren Preis oder besser erreicht." },
                        { type: 'p', text: "<strong>Vorteil:</strong> Totale Preiskontrolle. Keine bösen Überraschungen." },
                        { type: 'p', text: "<strong>Risiko:</strong> Wenn die Aktie nie auf Ihren Limitpreis fällt, kaufen Sie sie nie. Ausführung nicht garantiert." },
                        { type: 'p', text: "<strong>Konkretes Beispiel:</strong> Aktie XYZ ist bei 102$. Zu teuer. Sie platzieren eine Limit-Order zum Kauf bei 100$.<br><em>Szenario A:</em> Aktie fällt auf 99$. Sie kaufen bei 99$ (noch besser).<br><em>Szenario B:</em> Aktie geht auf 105$. Ihre Order bleibt stehen und Sie kaufen nichts." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Stop-Order (Stop-Loss)', content: [
                        { type: 'p', text: "<strong>Das Konzept:</strong> \"Der Notausgang.\" (Wird zur Marktorder sobald ausgelöst)." },
                        { type: 'p', text: "<strong>Wie es funktioniert:</strong> Es ist eine schlafende Order. Wenn der Preis fällt und Ihre Schwelle (z.B. 90$) erreicht, wacht die Order auf und verkauft alles sofort zum Marktpreis." },
                        { type: 'p', text: "<strong>Vorteil:</strong> Schützt vor einem großen Absturz, ohne auf den Bildschirm zu schauen." },
                        { type: 'p', text: "<strong>Risiko:</strong> Bei einem Flash-Crash verkaufen Sie vielleicht viel tiefer als Ihre Schwelle (z.B. ausgelöst bei 90$, aber verkauft bei 85$)." },
                        { type: 'p', text: "<strong>Konkretes Beispiel:</strong> Gekauft bei 100$. Stop bei 90$. Schlechte Nachrichten, Aktie im freien Fall. Sie kreuzt die 90$ ohne Halt. Order löst aus und verkauft an den ersten Käufer bei 88$. Sie sind raus, aber mit etwas mehr Verlust als geplant." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Stop-Limit-Order', content: [
                        { type: 'p', text: "<strong>Das Konzept:</strong> \"Der präzise Notausgang.\" (Wird zur Limit-Order sobald ausgelöst)." },
                        { type: 'p', text: "<strong>Wie es funktioniert:</strong> Sie definieren zwei Preise: den Auslöser (Stop) und den minimal akzeptierten Preis (Limit)." },
                        { type: 'p', text: "<strong>Vorteil:</strong> Garantiert, dass Sie während einer Panik nicht zu einem lächerlichen Preis verkaufen." },
                        { type: 'p', text: "<strong>Risiko:</strong> Wenn der Preis unter Ihr Limit crasht, verkaufen Sie nicht. Sie bleiben auf der fallenden Aktie sitzen." },
                        { type: 'p', text: "<strong>Konkretes Beispiel:</strong> Gekauft bei 100$. Stop bei 90$, Limit bei 89$. Aktie fällt auf 90$. Verkauf löst aus. Aber der Markt springt auf 85$ (Gap). Da 85$ unter Ihrem 89$ Limit liegt, verkauft die Order nicht. Sie besitzen die Aktie immer noch bei 85$." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Trailing Stop', content: [
                        { type: 'p', text: "<strong>Das Konzept:</strong> \"Gewinne laufen lassen.\"" },
                        { type: 'p', text: "<strong>Wie es funktioniert:</strong> Der Verkaufspreis steigt automatisch mit der Aktie, geht aber nie nach unten. Sie setzen einen Abstand ($ oder %)." },
                        { type: 'p', text: "<strong>Vorteil:</strong> Sichert Gewinne, ohne das Aufwärtspotenzial zu begrenzen." },
                        { type: 'p', text: "<strong>Konkretes Beispiel:</strong> Gekauft bei 100$ mit 5$ Trailing Stop.<br>Aktie geht auf 110$. Stop bewegt sich auf 105$.<br>Aktie geht auf 150$. Stop ist jetzt 145$.<br>Aktie fällt auf 140$. Sobald sie 145$ trifft, verkaufen Sie. Sie haben 45$ Gewinn automatisch gesichert." }
                    ]
                },
                {
                    type: 'box', style: 'dark', title: 'Wichtiger Hinweis: Order-Dauer', content: [
                        { type: 'p', text: "Für Limit- und Stop-Orders müssen Sie wählen, wie lange die Order aktiv bleibt:" },
                        { type: 'ul', items: ["<strong>Tag (Day):</strong> Wenn nicht bis 16:00 Uhr (Börsenschluss) ausgeführt, wird sie storniert.", "<strong>GTC (Good 'Til Canceled):</strong> Bleibt aktiv (meist 60-90 Tage), bis Sie sie manuell stornieren."] }
                    ]
                },
                { type: 'p', text: "<strong>Hinweis für Neugierige:</strong> Es gibt komplexere Orders für aktive Trader, wie OCO (One Cancels the Other), die es erlauben, ein Gewinnziel und ein Verlustlimit gleichzeitig zu setzen. Für einen langfristigen Investor sind die 5 oben genannten jedoch völlig ausreichend." }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Kapitel 21: Fortgeschrittene Besteuerung (ACB)",
            content: [
                { type: 'p', text: "Entscheidend für <strong>Nicht-registrierte (Steuerpflichtige)</strong> Konten. Wenn Sie verkaufen, zahlen Sie Steuern auf: <code>Verkaufspreis - ACB</code>." },
                {
                    type: 'box', style: 'info', title: 'Der ACB (Adjusted Cost Base)', content: [
                        { type: 'p', text: "Es ist der offizielle Steuerbegriff für Ihre durchschnittlichen Kosten. Er entspricht den gewichteten Durchschnittskosten aller Ihrer Aktien, einschließlich Provisionsgebühren. Sie müssen dies für die Steuer selbst verfolgen." },
                        { type: 'p', text: "Berechnung: (Gesamtkosten aller Käufe) / (Gesamtanzahl der Aktien)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro berechnet automatisch eine Schätzung Ihres ACB und der nicht realisierten Gewinne im <strong>Investment-Modul</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Kapitel 22: Portfolio-Rebalancing",
            content: [
                { type: 'p', text: "Wenn Ihr Ziel 70% Aktien und 30% Anleihen ist, und Aktien steigen (jetzt 80%), ist Ihr Portfolio zu riskant." },
                { type: 'p', text: "<strong>Rebalancing (Umschichtung):</strong> Verkaufen, was gestiegen ist (Aktien), um zu kaufen, was gefallen ist (Anleihen), um zu 70/30 zurückzukehren." },
                { type: 'p', text: "Es ist der Gipfel der Disziplin: Es zwingt Sie mathematisch dazu, <strong>teuer zu verkaufen und billig zu kaufen</strong>." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Kapitel 23: Psychologische Fallen (Biases)",
            content: [
                { type: 'ul', items: ["<strong>Bestätigungsfehler (Confirmation Bias):</strong> Nur das lesen, was unsere Meinung zu einer Aktie (z.B. Tesla) bestätigt, und Kritiker ignorieren.", "<strong>Anker-Effekt (Anchoring):</strong> Denken, eine Aktie sei \"billig\", nur weil sie 300$ war und jetzt 150$ ist. Die Vergangenheit spielt keine Rolle.", "<strong>Verlustangst (Loss Aversion):</strong> Gewinner zu schnell verkaufen (um Gewinn mitzunehmen) und Verlierer behalten (in der Hoffnung, dass sie sich erholen). Oft müssen Sie das Gegenteil tun: Verluste begrenzen!"] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Kapitel 24: Glossar der wichtigsten Begriffe",
            content: [
                { type: 'p', text: "Hier ist eine schnelle Auffrischung der Begriffe, denen Sie begegnen werden." },
                {
                    type: 'grid', items: [
                        { title: "Asset", text: "Wertgegenstand oder Einkommensquelle." },
                        { title: "Liability", text: "Etwas, das Geld aus Ihrer Tasche zieht." },
                        { title: "Aktie", text: "Eigentumsanteil an einem Unternehmen." },
                        { title: "Anleihe", text: "Darlehen an ein Unternehmen/Staat gegen Zinsen." },
                        { title: "Dividende", text: "Anteil am Gewinn, der an Aktionäre ausgeschüttet wird." },
                        { title: "ETF", text: "Diversifizierter Korb von Investitionen." },
                        { title: "Volatilität", text: "Amplitude der Preisschwankungen (Risiko)." },
                        { title: "EPS", text: "Earnings Per Share (Gewinn pro Aktie)." },
                        { title: "KGV (P/E)", text: "Kurs-Gewinn-Verhältnis. Zeigt an, ob die Aktie teuer oder billig ist." },
                        { title: "TFSA", text: "100% steuerfreies Konto (Kanada)." },
                        { title: "RRSP", text: "Steuerbegünstigtes Konto (Kanada)." },
                        { title: "ACB", text: "Adjusted Cost Base (Steuerliche Anschaffungskosten)." },
                        { title: "Nettovermögen", text: "Vermögen - Verbindlichkeiten. Wahrer Reichtum." }
                    ]
                },
                { type: 'p', text: "Dieser Kurs gab Ihnen die Grundlagen. Nexus Finance Pro gibt Ihnen die Macht, sie anzuwenden. Ihre finanzielle Zukunft liegt jetzt in Ihren Händen. Viel Erfolg bei der Planung!" }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bonus: Die Psychologie des Geldes",
            content: [
                { type: 'p', text: "<strong>(Basierend auf Morgan Housels Konzepten)</strong> - Eines der wichtigsten Bücher über Finanzpsychologie. Wir empfehlen dringend, es zu lesen!" },
                {
                    type: 'box', style: 'info', title: 'Teil 1: Unsere irrationale Beziehung zu Geld', content: [
                        { type: 'p', text: "<strong>1. Niemand ist verrückt:</strong>" },
                        { type: 'p', text: "Wir alle denken, wir wissen, wie die Welt funktioniert, aber wir haben nur einen winzigen Bruchteil davon erlebt. Ihre finanziellen Entscheidungen hängen von Ihrer Generation, der Inflation in Ihrer Jugend und Ihrer Kultur ab. <em>Verurteilen Sie andere nicht. Was für Sie 'verrückt' aussieht, könnte für jemanden anderen eine logische Überlebensentscheidung sein.</em>" },
                        { type: 'p', text: "<strong>2. Glück und Risiko:</strong>" },
                        { type: 'p', text: "Bill Gates' Erfolg ist seinem Genie zu verdanken, aber auch dem Glück, eine Schule mit einem Computer zu besuchen (eine Chance von eins zu einer Million). Sein Freund Kent Evans war genauso begabt, starb aber vor der Highschool (ein Risiko von eins zu einer Million). <em>Seien Sie bescheiden im Erfolg und verzeihend im Misserfolg. Glück spielt eine große Rolle.</em>" },
                        { type: 'p', text: "<strong>3. Niemals genug (Die Falle der Gier):</strong>" },
                        { type: 'p', text: "Rajat Gupta hatte alles (Reichtum, Ruf), wollte aber mehr und landete wegen Insiderhandels im Gefängnis. <em>Es gibt keinen Grund, das zu riskieren, was man hat und braucht, um das zu bekommen, was man nicht hat und nicht braucht.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Teil 2: Vermögen aufbauen', content: [
                        { type: 'p', text: "<strong>4. Verblüffender Zinseszins:</strong>" },
                        { type: 'p', text: "Warren Buffett ist nicht reich, weil er der beste Investor ist, sondern weil er seit seiner Kindheit investiert. <em>Halten Sie den Mund und warten Sie. Zeit ist die mächtigste Kraft beim Investieren.</em>" },
                        { type: 'p', text: "<strong>5. Reich werden vs. Reich bleiben:</strong>" },
                        { type: 'p', text: "Um reich zu werden, müssen Sie optimistisch sein und Risiken eingehen. Um reich zu <strong>bleiben</strong>, müssen Sie paranoid, sparsam und ängstlich sein, alles zu verlieren. <em>Überleben ist der Schlüssel.</em>" },
                        { type: 'p', text: "<strong>6. Tails, You Win (Extreme Ereignisse):</strong>" },
                        { type: 'p', text: "Wie in der Kunst zahlen eine Handvoll 'Gewinner' für alle Fehler. <em>Sie können 50% der Zeit falsch liegen und trotzdem ein Vermögen machen. Es zählt das Ausmaß Ihrer Gewinne, nicht die Häufigkeit.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Teil 3: Psychologie und Verhalten', content: [
                        { type: 'p', text: "<strong>7. Freiheit (Die wahre Dividende):</strong>" },
                        { type: 'p', text: "Die höchste Form von Reichtum ist, morgens aufzuwachen und zu sagen: 'Ich kann heute tun, was immer ich will'. Die Kontrolle über Ihre Zeit macht Sie glücklicher als Luxusgüter." },
                        { type: 'p', text: "<strong>8. Das Paradoxon des Mannes im Auto:</strong>" },
                        { type: 'p', text: "Niemand ist so beeindruckt von Ihrem Besitz wie Sie selbst. Wenn Sie Respekt wollen, seien Sie bescheiden und freundlich, kaufen Sie kein großes Auto." },
                        { type: 'p', text: "<strong>9. Reichtum ist das, was man nicht sieht:</strong>" },
                        { type: 'p', text: "Wahrer Reichtum ist Geld, das <strong>nicht</strong> ausgegeben wurde. Verwechseln Sie nicht ein hohes Einkommen (Rich) mit Nettovermögen (Wealthy)." },
                        { type: 'p', text: "<strong>10. Sparen Sie Geld (Einfach sparen):</strong>" },
                        { type: 'p', text: "Sie brauchen kein bestimmtes Ziel, um zu sparen. Sie müssen für das Unbekannte sparen. Es ist Ihre Sicherheitsmarge." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: 'Teil 4: Eine realistische Philosophie', content: [
                        { type: 'p', text: "<strong>11. Vernünftig > Rational:</strong>" },
                        { type: 'p', text: "Versuchen Sie nicht, eine kalte Tabelle zu sein. Die beste Strategie ist die, die Sie nachts schlafen lässt." },
                        { type: 'p', text: "<strong>12. Nichts ist umsonst:</strong>" },
                        { type: 'p', text: "Hohe Marktrenditen haben einen Preis, nicht in Dollar, sondern in Volatilität und Angst. Betrachten Sie Abstürze als 'Eintrittspreis', nicht als Strafe." },
                        { type: 'p', text: "<strong>13. Die Verführung des Pessimismus:</strong>" },
                        { type: 'p', text: "Pessimismus klingt klug, Optimismus klingt naiv. Seien Sie ein 'realistischer Optimist': Glauben Sie daran, dass die Dinge langfristig besser werden, aber bereiten Sie sich darauf vor, kurzfristig zu leiden." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Fazit: Die Methode des Autors', content: [
                        { type: 'p', text: "Was Morgan Housel mit seinem eigenen Geld macht:" },
                        { type: 'ul', items: ["Sein Ziel ist Unabhängigkeit, nicht maximaler Reichtum.", "Er hält viel Bargeld (Sicherheitsmarge).", "Er investiert in kostengünstige Indexfonds (ETFs).", "Er versucht nicht, den Markt zu schlagen, sondern so lange wie möglich investiert zu bleiben."] }
                    ]
                }
            ]
        }
    }
};
