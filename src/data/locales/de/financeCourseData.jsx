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
        id: 1, title: "1. KGV (Kurs-Gewinn-Verhältnis)", color: pastelColors[0],
        biz: {
            formula: "Preis / Gewinn je Aktie (EPS)",
            desc: "Wieviel Sie für 1€ Gewinn zahlen. Zeigt ob Aktie teuer (Wachstum) oder billig (Value) ist.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (für Value)",
            example: "100€ (Preis) / 5€ (EPS) = 20x"
        },
        fam: {
            title: "Familien-Kaufpreis",
            desc: "Stell dir vor, man kauft deine Familie. Wenn du 10k/Jahr sparst und jemand kauft dich für 200k, ist das KGV 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "200.000€ / 10.000€ = 20x"
        }
    },
    {
        id: 2, title: "2. Wachstum (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Ende / Start)^(1/n)) - 1",
            desc: "Geschwindigkeit, mit der Firma Gewinne steigert.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Gehaltserhöhung",
            desc: "Deine jährliche Erhöhung. Von 50k auf 55k sind 10% Wachstum.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "(55k - 50k) / 50k = 10%"
        }
    },
    {
        id: 3, title: "3. Nettomarge (%)", color: pastelColors[2],
        biz: {
            formula: "Nettogewinn / Umsatz",
            desc: "% von jedem Euro Umsatz, der in der Tasche bleibt.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "10.000€ / 100.000€ = 10%"
        },
        fam: {
            title: "Sparrate",
            desc: "Deine Sparrate. Wenn du 4000 verdienst und 400 sparst, ist deine Marge 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "400 / 4000 = 10%"
        }
    },
    {
        id: 4, title: "4. Schulden / Eigenkapital", color: pastelColors[3],
        biz: {
            formula: "Gesamtschulden / Eigenkapital",
            desc: "Hebel-Level. Wenn > 1.0, schuldet Firma mehr als ihr Buchwert.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (< 1.0)",
            example: "200k / 100k = 2.0 (Riskant)"
        },
        fam: {
            title: "Verschuldungsgrad",
            desc: "(Hypothek + Kredit) / Nettovermögen.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "300k (Schulden) / 100k (Netto) = 3.0"
        }
    },
    {
        id: 5, title: "5. Eigenkapitalrendite (ROE)", color: pastelColors[4],
        biz: {
            formula: "Nettogewinn / Eigenkapital",
            desc: "Effizienz des Managements mit Aktionärsgeld.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (> 15%)",
            example: "15 / 100 = 15%"
        },
        fam: {
            title: "Investment-Effizienz",
            desc: "Wenn du 100k Nettovermögen hast und 10k Gewinn machst, ist dein ROE 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "10.000 / 100.000 = 10%"
        }
    },
    {
        id: 6, title: "6. Liquidität (Current Ratio)", color: pastelColors[5],
        biz: {
            formula: "Umlaufvermögen / Kurzfr. Verb.",
            desc: "Fähigkeit Rechnungen zu zahlen. Wenn < 1.0, Insolvenzgefahr.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (> 1.5)",
            example: "200k / 100k = 2.0"
        },
        fam: {
            title: "Notgroschen-Deckung",
            desc: "Dein Notgroschen / Monatliche Rechnungen.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "5000 / 2500 = 2.0"
        }
    },
    {
        id: 7, title: "7. Dividendenrendite (%)", color: pastelColors[6],
        biz: {
            formula: "Jahresdividende / Aktienpreis",
            desc: "Bar-Rendite ausgezahlt von Firma.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (Max 10-12%)",
            example: "4 / 100 = 4%"
        },
        fam: {
            title: "Taschengeld",
            desc: "Geld, das du dir selbst zum Spaß auszahlst statt zu reinvestieren.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Mehr Freiheit",
            example: "50 (Erhalten) / 1000 (Investiert) = 5%"
        }
    },
    {
        id: 8, title: "8. Bruttomarge", color: pastelColors[7],
        biz: {
            formula: "(Umsatz - COGS) / Umsatz",
            desc: "Basis-Profitabilität vor Büros, Werbung und Steuern.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Überlebensrate",
            desc: "Vitale Ausgaben (Miete + Essen). Wieviele Monate überlebst du ohne Einkommen?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (Ausgaben)",
            example: "2000 / Monat (Vital)"
        }
    },
    {
        id: 9, title: "9. Kurs-Umsatz (KUV)", color: pastelColors[8],
        biz: {
            formula: "Marktkap. / Umsatz",
            desc: "Genutzt für unprofitables. Vergleicht Marktwert mit Umsatzvolumen.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "1M / 500k = 2.0x"
        },
        fam: {
            title: "ROI (Renovierung)",
            desc: "20k in eine Küche stecken, die den Hauswert um 30k steigert.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "(30k - 20k) / 20k = 50%"
        }
    },
    {
        id: 10, title: "10. Kurs-Cashflow (KCV)", color: pastelColors[9],
        biz: {
            formula: "Preis / Cashflow je Aktie",
            desc: "Oft verlässlicher als KGV. Zeigt echte Geldgenerierung.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "100 / 10 = 10x"
        },
        fam: {
            title: "Betriebskapital",
            desc: "Finanzpolster: Konto + Sparbuch MINUS kommende Rechnungen.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser (Positiv)",
            example: "2000 (Bank) - 1500 (Rechnung) = +500"
        }
    },
    {
        id: 11, title: "11. Schulden / Gesamtvermögen", color: pastelColors[10],
        biz: {
            formula: "Gesamtschulden / Gesamtvermögen",
            desc: "Welcher Teil der Firma ist von der Bank finanziert?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser",
            example: "400k / 1M = 0.4"
        },
        fam: {
            title: "Freier Cashflow",
            desc: "Ersparnisse MINUS nötige Hausreparaturen. Das real verfügbare Geld.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Höher = Besser",
            example: "5000 (Sparen) - 2000 (Dach) = 3000"
        }
    },
    {
        id: 12, title: "12. Ausschüttungsquote", color: pastelColors[11],
        biz: {
            formula: "Gezahlte Div. / Nettogewinn",
            desc: "Anteil des Gewinns an Aktionäre. Wenn > 80%, Dividende in Gefahr.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (Nachhaltig)",
            example: "2 (Div) / 4 (EPS) = 50%"
        },
        fam: {
            title: "Persönliche Spaß-Quote",
            desc: "% des Überschusses für Spaß (Restaurants) statt Reinvestition.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Niedriger = Besser (Zukunft)",
            example: "400 (Spaß) / 1000 (Überschuss) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Finanz 101 Handbuch",
        subtitle: "Persönliche Finanzen von A bis Z",
        parts: [
            { title: "Einführung", items: [{ id: 'intro', label: 'Warum dieses Buch?' }] },
            { title: "Teil 1: Grundlagen", items: [{ id: 'chap1', label: "1. Denkweise" }, { id: 'chap2', label: "2. Budget (GPS)" }, { id: 'chap3', label: "3. Aktiva vs Passiva" }, { id: 'chap4', label: "4. Notgroschen" }, { id: 'chap5', label: "5. Schuldenmanagement" }] },
            { title: "Teil 2: Investieren", items: [{ id: 'chap6', label: "6. Warum investieren?" }, { id: 'chap7', label: "7. Zinseszins" }, { id: 'chap8', label: "8. Risiko/Rendite" }, { id: 'chap9', label: "9. Anlageklassen" }, { id: 'chap10', label: "10. Kontotypen" }] },
            { title: "Teil 3: Börse", items: [{ id: 'chap11', label: "11. Die Aktie" }, { id: 'chap12', label: "12. Fundamentalanalyse" }, { id: 'chap13', label: "13. Kennzahlen" }, { id: 'chap14', label: "14. Dividenden" }, { id: 'chap15', label: "15. Portfoliobau" }, { id: 'chap16', label: "16. Psychologie" }] },
            { title: "Teil 4: Ziele", items: [{ id: 'chap17', label: "17. Ziele" }, { id: 'chap18', label: "18. Ruhestand" }] },
            { title: "Teil 5: Fortgeschritten", items: [{ id: 'chap19', label: "19. Fund. vs Tech." }, { id: 'chap20', label: "20. Ordertypen" }, { id: 'chap21', label: "21. Steuern (GAK)" }, { id: 'chap22', label: "22. Rebalancing" }, { id: 'chap23', label: "23. Psychofallen" }] },
            { title: "Anhang", items: [{ id: 'chap24', label: "24. Glossar" }, { id: 'bonus_psych', label: "Bonus: Psychologie" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Einführung: Warum dieses Handbuch?",
            content: [
                { type: 'p', text: "Sie halten ein mächtiges Werkzeug: <strong>Nexus Finance Pro</strong>. Es ist ein Rechner, ein Portfoliomanager und ein Schuldenplaner in einem." },
                { type: 'p', text: "Aber ein Werkzeug ist nutzlos, wenn der Handwerker es nicht versteht." },
                { type: 'p', text: "Dieses Buch ist das <strong>\"Warum\"</strong>. Die App Nexus Finance Pro ist das <strong>\"Wie\"</strong>." },
                { type: 'p', text: "Sie müssen kein Experte sein, aber das Verständnis der Schlüsselkonzepte wird Ihre Erfahrung transformieren. Obwohl dieses Tool mächtig ist, wurde es entwickelt, um Sie zu unterstützen: für persönliche Beratung bleibt ein zertifizierter Profi die kluge Wahl." },
                {
                    type: 'box', style: 'info', title: 'Was Sie lernen werden', content: [
                        { type: 'p', text: "Wir decken zeitlose Prinzipien ab:" },
                        { type: 'ul', items: ["<strong>Psychologie:</strong> Emotionen beherrschen.", "<strong>Grundlagen:</strong> Budget, Notgroschen, Schulden.", "<strong>Investieren:</strong> Geld arbeiten lassen.", "<strong>Börse:</strong> Aktien, ETFs und Ratios entmystifizieren.", "<strong>Strategien:</strong> Steuern und Portfolio-Optimierung."] },
                        { type: 'p', text: "Am Ende wird jedes Modul in Nexus Finance Pro nicht nur ein Tab sein, sondern eine Waffe für Ihre finanzielle Freiheit." }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Kapitel 1: Die richtige Denkweise",
            content: [
                { type: 'p', text: "Willkommen! Bevor wir über Zahlen reden, müssen wir über das wichtigste Werkzeug reden: Ihr Mindset." },
                { type: 'p', text: "Finanzmanagement ist kein Glück. Es ist keine Magie für Eliten. Es sind Gewohnheiten." },
                { type: 'p', text: "Das Hindernis ist nicht Geldmangel, sondern Psychologie. Angst vor dem Kontoauszug oder das Gefühl 'schlecht mit Zahlen' zu sein." },
                {
                    type: 'box', style: 'warning', title: 'Mythen', content: [
                        { type: 'ul', items: ["<strong>Mythos 1: \"Man braucht Geld um Geld zu machen.\"</strong><br>Falsch. Man braucht Gewohnheiten. Wer 100€/Monat spart, schlägt den, der 10k verdient und 10.1k ausgibt.", "<strong>Mythos 2: \"Investieren ist wie Glücksspiel.\"</strong><br>Falsch. Kurzfristige Spekulation ist Glücksspiel. Langfristiges Investieren ist Teilnahme an der Weltwirtschaft.", "<strong>Mythos 3: \"Ich bin zu jung / alt.\"</strong><br>Falsch. Wenn jung: Zeit ist Ihr Asset. Wenn alt: Einkommen ist Ihr Asset. Der beste Startzeitpunkt war vor 10 Jahren. Der zweitbeste ist heute."] }
                    ]
                },
                { type: 'p', text: "<strong>Hauptziel:</strong> Finanzielle UNABHÄNGIGKEIT. Nicht Luxusautos. Sondern genug Assets, um nicht arbeiten zu *müssen*." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Kapitel 2: Das Budget (Ihr GPS)",
            content: [
                { type: 'p', text: "Ein Budget sagt Ihrem Geld, wohin es gehen soll, statt sich zu wundern, wo es hin ist." },
                { type: 'p', text: "Ein Budget beantwortet: <strong>Wo fließt mein Geld hin?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'Null-basiertes Budget', content: [
                        { type: 'p', text: "Am Monatsende muss Einnahmen minus Ausgaben NULL sein. Jeder Euro hat einen Job." },
                        { type: 'p', text: "<code>Einnahmen - Ausgaben - Sparen - Investieren = 0€</code>" },
                        { type: 'p', text: "Wenn 500€ übrig bleiben: '200€ Notgroschen', '100€ Invest', '200€ Urlaub'." }
                    ]
                },
                { type: 'p', text: "<strong>Aktion:</strong> Nutzen Sie das <strong>Budget Modul</strong>. Listen Sie ALLE Einnahmen und Ausgaben." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Kapitel 3: Aktiva vs Passiva",
            content: [
                { type: 'p', text: "Das wichtigste Konzept (Robert Kiyosaki)." },
                {
                    type: 'box', style: 'info', title: 'Definition', content: [
                        { type: 'p', text: "Ein <strong>AKTIVUM (Asset)</strong> legt Geld in Ihre Tasche." },
                        { type: 'p', text: "Ein <strong>PASSIVUM (Liability)</strong> zieht Geld aus Ihrer Tasche." }
                    ]
                },
                { type: 'p', text: "Ihr Ziel: Einnahmen nutzen um Assets zu kaufen." },
                {
                    type: 'grid', items: [
                        { title: "Asset Beispiele", text: "Dividenden-Aktie. ETF. Mietimmobilie." },
                        { title: "Passiva Beispiele", text: "Autokredit. Kreditkarte. Konsumkredit." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Die Eigenheim-Falle', content: [
                        { type: 'p', text: "\"Mein Haus ist mein größtes Asset!\" Wirklich? Es kostet Geld (Hypothek, Steuer, Instandhaltung). Es ist ein Passivum." },
                        { type: 'p', text: "Es wird zum Asset beim Verkauf (mit Gewinn) oder bei Vermietung." }
                    ]
                },
                { type: 'p', text: "Ihr <strong>Nettovermögen</strong> ist Aktiva minus Passiva." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Kapitel 4: Notgroschen",
            content: [
                { type: 'p', text: "Das Leben ist unberechenbar. Auto kaputt. Job weg. Der Unterschied zwischen Panne und Katastrophe ist der Notgroschen." },
                { type: 'p', text: "Ihr Schutzschild. Geld nur für Notfälle. Nicht zum Investieren. Muss liquide sein." },
                {
                    type: 'box', style: 'info', title: 'Wieviel?', content: [
                        { type: 'p', text: "Ziel: <strong>3 bis 6 Monate</strong> Ausgaben." },
                        { type: 'p', text: "Bei 2500€ Kosten also 7500€ bis 15000€." }
                    ]
                },
                { type: 'p', text: "<strong>Wo?</strong> Tagesgeldkonto. Getrennt vom Girokonto." },
                { type: 'p', text: "<strong>Prio:</strong> Bevor Sie Schulden tilgen oder investieren, sparen Sie 1000€ Mini-Fond." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Kapitel 5: Schuldenmanagement",
            content: [
                { type: 'p', text: "Zwei Typen: 'Gute' vs 'Schlechte' Schulden." },
                { type: 'ul', items: ["<strong>Gut:</strong> Kauft ein Asset (Haus, Bildung).", "<strong>Schlecht:</strong> Kauft Konsum (Auto, Urlaub)."] },
                { type: 'p', text: "Zahlen Sie schlechte Schulden sofort ab (Simulieren im Schuldenplan Modul):" },
                {
                    type: 'box', style: 'info', title: 'Strategie 1: Lawine', content: [
                        { type: 'p', text: "Schulden nach Zins ordnen (Höchster zuerst). Spart mathematisch am meisten Geld." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Strategie 2: Schneeball', content: [
                        { type: 'p', text: "Schulden nach Saldo ordnen (Kleinster zuerst). Gibt schnelle psychologische Siege." }
                    ]
                }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Kapitel 6: Warum Investieren?",
            content: [
                { type: 'p', text: "Verteidigung (Sparen) fertig? Jetzt Angriff (Investieren)." },
                { type: 'p', text: "Sparen schützt. Investieren macht reich." },
                {
                    type: 'box', style: 'warning', title: 'Feind #1: Inflation', content: [
                        { type: 'p', text: "Bei 3% Inflation kaufen 100€ nächstes Jahr nur für 97€. Bargeld <strong>verliert</strong> Wert." },
                        { type: 'p', text: "10.000€ sind nach 25 Jahren nur noch 5.394€ wert." }
                    ]
                },
                { type: 'p', text: "Ziel: Rendite > Inflation." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Kapitel 7: Zinseszins",
            content: [
                { type: 'p', text: "Einstein nannte es das '8. Weltwunder'. Zins auf Zins." },
                {
                    type: 'box', style: 'success', title: 'Beispiel', content: [
                        { type: 'ul', items: ["Jahr 1: 10k * 8% = 800€. Total 10.800€.", "Jahr 2: 10.8k * 8% = 864€. Total 11.664€."] }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Zeitfaktor', content: [
                        { type: 'p', text: "<strong>Alex (25-35):</strong> Investiert 50k.<br><strong>Ben (35-65):</strong> Investiert 150k." },
                        { type: 'p', text: "Mit 65 Jahren:<br>Alex hat: <strong>1.028.000€</strong><br>Ben hat: <strong>611.000€</strong>" },
                        { type: 'p', text: "Alex gewinnt, weil er früher anfing." }
                    ]
                },
                { type: 'p', text: "<strong>Aktion:</strong> Nutzen Sie das Zukunftswert Modul." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Kapitel 8: Risiko/Rendite",
            content: [
                { type: 'p', text: "Kein Free Lunch. <strong>Höhere Chance = Höheres Risiko.</strong>" },
                {
                    type: 'box', style: 'info', title: 'Spektrum', content: [
                        { type: 'ul', items: ["<strong>Niedrig:</strong> Sparbuch, Staatsanleihen.", "<strong>Mittel:</strong> Breit gestreute ETFs.", "<strong>Hoch:</strong> Einzelaktien, Krypto."] }
                    ]
                },
                { type: 'p', text: "<strong>Riesiko ist Volatilität.</strong> Wenn das Portfolio 30% fällt, verkaufen Sie panisch?" }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Kapitel 9: Anlageklassen",
            content: [
                { type: 'p', text: "Die LEGO Steine." },
                { type: 'ul', items: ["<strong>1. Aktien:</strong> Teil einer Firma. Gewinn durch Kurs + Dividende.", "<strong>2. Anleihen:</strong> Kredit an Staat/Firma. Sicherer.", "<strong>3. ETFs:</strong> Bester Start. Ein Korb aus Hunderten Aktien."] },
                { type: 'p', text: "Ein ETF (z.B. MSCI World) ist sofortige Diversifikation." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Kapitel 10: Kontotypen (International)",
            content: [
                { type: 'p', text: "Staaten fördern Vorsorge. Namen variieren, Konzepte sind gleich." },
                {
                    type: 'box', style: 'success', title: '1. Steuerfreie Konten', content: [
                        { type: 'p', text: "Man investiert versteuertes Geld. <strong>Vorteil:</strong> Gewinne sind steuerfrei." },
                        { type: 'p', text: "<strong>Bsp:</strong> Roth IRA (USA), ISA (UK), TFSA (Kanada)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Steuerbegünstigte Konten', content: [
                        { type: 'p', text: "Man investiert Brutto-Geld (Steuervorteil heute). Zahlt Steuern bei Entnahme." },
                        { type: 'p', text: "<strong>Bsp:</strong> 401k (USA), RRSP (Kanada), bAV (Deutschland)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Normales Depot:</strong> Keine Vorteile. Jährliche Steuer auf Gewinne." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Kapitel 11: Was ist eine Aktie?",
            content: [
                { type: 'p', text: "Kauf von Eigentum. Sie sind Miteigentümer und erhalten Gewinnanteile (Dividende)." },
                { type: 'p', text: "<strong>Börse:</strong> Ein Marktplatz wo Angebot und Nachfrage den Preis bestimmen." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Kapitel 12: Fundamentalanalyse",
            content: [
                { type: 'p', text: "Den wahren Wert finden. Tolle Firmen zu fairen Preisen." },
                { type: 'ul', items: ["<strong>Bilanz:</strong> Vermögen vs Schulden.", "<strong>GuV:</strong> Umsatz & Gewinn.", "<strong>Cash Flow:</strong> Echter Geldfluss."] },
                { type: 'p', text: "Das <strong>Aktienanalyse Modul</strong> vereinfacht dies." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Kapitel 13: Kennzahlen verstehen",
            content: [
                { type: 'p', text: "Ratios sind Abkürzungen." },
                {
                    type: 'box', style: 'info', title: '1. Bewertung', content: [
                        { type: 'ul', items: ["<strong>KGV:</strong> Preis für 1€ Gewinn (20x).", "<strong>PEG:</strong> KGV geteilt durch Wachstum."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Rentabilität', content: [
                        { type: 'ul', items: ["<strong>Nettomarge:</strong> % Gewinn vom Umsatz.", "<strong>ROE:</strong> Effizienz des Kapitals."] }
                    ]
                },
                { type: 'p', text: "Vergleich mit privaten Finanzen siehe Tabelle unten." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Kapitel 14: Dividenden",
            content: [
                { type: 'p', text: "Passives Einkommen. Bezahlt fürs Warten." },
                { type: 'p', text: "<strong>Rendite (Yield):</strong> (Div / Preis) * 100." },
                {
                    type: 'box', style: 'warning', title: 'Yield Falle (> 12%)', content: [
                        { type: 'p', text: "Vorsicht bei extrem hohen Dividenden. Oft ein Warnsignal für Probleme." }
                    ]
                },
                { type: 'p', text: "<strong>Wachstum:</strong> Firmen kaufen, die Dividende jährlich steigern (Aristokraten)." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Kapitel 15: Portfoliobau",
            content: [
                { type: 'p', text: "Diversifikation & Allokation." },
                {
                    type: 'box', style: 'concept', title: 'Diversifikation', content: [
                        { type: 'p', text: "Nicht alle Eier in einen Korb. Mix aus Assets, Sektoren und Ländern. ETFs tun dies." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Allokation', content: [
                        { type: 'p', text: "Aktien (Gaspedal) vs Anleihen (Bremse). Jung: 90/10. Alt: 40/60." }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Kapitel 16: Psychologie",
            content: [
                { type: 'p', text: "Ihr schlimmster Feind sind Sie selbst." },
                { type: 'ul', items: ["<strong>Gier (FOMO):</strong> Oben kaufen.", "<strong>Angst:</strong> Unten verkaufen."] },
                {
                    type: 'box', style: 'success', title: 'Lösung: Sparplan', content: [
                        { type: 'p', text: "Fixer Betrag monatlich. Automatisch. Nimmt Emotion raus." }
                    ]
                }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Kapitel 17: Ziele setzen",
            content: [
                { type: 'p', text: "Sparen mit Zweck." },
                { type: 'p', text: "\"Ich will reich sein\" ist schlecht. \"Ich will 50k in 3 Jahren\" ist gut." },
                { type: 'p', text: "<strong>Ziel Modul</strong> berechnet nötige Sparrate." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Kapitel 18: Ruhestand",
            content: [
                { type: 'p', text: "Wenn das Portfolio den Lebensstil zahlt." },
                {
                    type: 'box', style: 'info', title: '4% Regel', content: [
                        { type: 'p', text: "Man kann <strong>4%</strong> des Portfolios jährlich entnehmen." },
                        { type: 'p', text: "Zielsumme: <strong>Jahresausgaben x 25</strong>." }
                    ]
                }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Kapitel 19: Fundament vs Technik",
            content: [
                { type: 'p', text: "Fundamental: Ist die Firma gut? (Investor). Technik: Wo geht der Kurs hin? (Trader)." },
                { type: 'p', text: "Für Vermögensaufbau ist Fundamental King." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Kapitel 20: Ordertypen",
            content: [
                { type: 'p', text: "Wie man kauft." },
                {
                    type: 'box', style: 'info', title: 'Market', content: [
                        { type: 'p', text: "Sofort, egal welcher Preis." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Limit', content: [
                        { type: 'p', text: "Maximal X zahlen. Volle Kontrolle." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Stop Loss', content: [
                        { type: 'p', text: "Notausgang. Wenn Preis < X, verkaufen." }
                    ]
                }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Kapitel 21: Steuern (GAK)",
            content: [
                { type: 'p', text: "Steuern auf Gewinne." },
                {
                    type: 'box', style: 'info', title: 'GAK (Glättender Anschaffungskurs)', content: [
                        { type: 'p', text: "Durchschnittskaufpreis aller Aktien." }
                    ]
                }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Kapitel 22: Rebalancing",
            content: [
                { type: 'p', text: "Portfolio zurück zum Ziel-Mix bringen. Hoch verkaufen, tief kaufen erzwingen." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Kapitel 23: Psychofallen",
            content: [
                { type: 'ul', items: ["<strong>Bestätigungsfehler:</strong> Nur zustimmende Infos suchen.", "<strong>Verlustaversion:</strong> Gewinner zu früh, Verlierer zu spät verkaufen."] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Kapitel 24: Glossar",
            content: [
                {
                    type: 'grid', items: [
                        { title: "Asset", text: "Bringt Geld." },
                        { title: "Passivum", text: "Kostet Geld." },
                        { title: "Aktie", text: "Firmenanteil." },
                        { title: "Dividende", text: "Gewinnbeteiligung." },
                        { title: "ETF", text: "Aktienkorb." },
                        { title: "KGV", text: "Bewertungskennzahl." },
                        { title: "Nettovermögen", text: "Reichtum." }
                    ]
                }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bonus: Psychologie des Geldes",
            content: [
                { type: 'p', text: "<strong>(Nach Morgan Housel)</strong>." },
                {
                    type: 'box', style: 'info', title: 'Niemand ist verrückt', content: [
                        { type: 'p', text: "Jeder handelt nach seiner Erfahrung." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Reich werden vs bleiben', content: [
                        { type: 'p', text: "Reich bleiben erfordert Paranoia und Bescheidenheit." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Freiheit', content: [
                        { type: 'p', text: "Die höchste Dividende ist Zeit." }
                    ]
                }
            ]
        }
    }
};
