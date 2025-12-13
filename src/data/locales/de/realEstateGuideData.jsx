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
        title: "Immobilienhandbuch",
        sections: [
            { title: "Grundlagen", items: [{ id: 'intro', label: '1. Die Philosophie' }, { id: 'module', label: '2. Modul-Handbuch' }] },
            { title: "Finanzanalyse", items: [{ id: 'flux', label: '3. Der Cashflow' }, { id: 'ratios', label: '4. Schlüsselkennzahlen' }, { id: 'risque', label: '5. Risikoanalyse' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Profi-Strategien' }, { id: 'fiscalite', label: '7. Besteuerung' }, { id: 'glossaire', label: '8. Vollständiges Glossar' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Einführung: Hebelwirkung und Reichtum",
            icon: 'intro',
            content: [
                { type: 'p', text: "Immobilieninvestitionen sind einzigartig, da sie den <strong>Hebeleffekt</strong> (die Hypothek) nutzen, um Ihre Gewinne zu steigern. Sie verwenden das Geld der Bank (oft 80% des Preises), um einen Vermögenswert zu 100% zu kontrollieren, während Sie von 100% der Wertsteigerung und des Cashflows profitieren." },
                { type: 'p', text: "Immobilien verzeihen jedoch nicht. Ein Rechenfehler von 100 $ pro Monat kann in 25 Jahren zu einem Verlust von 30.000 $ führen. Deshalb wurde das <strong>Immobilien</strong>-Modul von Nexus Finance Pro erstellt: um vage Schätzungen in präzise Mathematik zu verwandeln." },
                {
                    type: 'box', style: 'pro', title: 'Das Geheimnis der Profis', content: [
                        { type: 'p', text: "Der Gewinn wird beim Kauf gemacht, nicht beim Verkauf. Wenn die Zahlen am ersten Tag nicht stimmen (negativer Cashflow), verlassen Sie sich nicht auf die 'zukünftige Wertsteigerung', um Sie zu retten. Das ist Spekulation, keine Investition." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Verwendung des Immobilienmoduls",
            icon: 'module',
            content: [
                { type: 'p', text: "Dieses Modul ist Ihr Rentabilitätsrechner. Hier ist eine detaillierte Erklärung jedes Feldes, um Ihnen bei präzisen Analysen zu helfen." },

                { type: 'subtitle', title: "Abschnitt Erwerb (Die Basis)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Kaufpreis:</strong> Der vom Verkäufer akzeptierte Betrag. Schließen Sie hier keine Startkosten (Notar, Übertragungssteuer) ein, da das Modul die Kennzahlen basierend auf dem Wert des Vermögenswerts berechnet.",
                        "<strong>Anzahlung (Eigenkapital):</strong> Das Bargeld, das Sie aus Ihrer Tasche bezahlen müssen.<br/><em>Auswirkung:</em> Eine niedrigere Anzahlung erhöht Ihre Kapitalrendite (ROI) dank des Hebels, erhöht jedoch Ihre monatlichen Zahlungen und reduziert Ihren Cashflow.",
                        "<strong>Hypothekenzahlung (Jährlich):</strong> Der GESAMTBETRAG, der in einem Jahr an die Bank gezahlt wird (Kapital + Zinsen). Multiplizieren Sie Ihre monatliche Zahlung mit 12.<br/><em>Tipp:</em> Verwenden Sie das <strong>Rückzahlungs</strong>-Modul, um diese genaue Zahl zu berechnen.",
                        "<strong>Kapitaltilgung (Jahr 1):</strong> Der Teil Ihrer Zahlungen, der zur Tilgung der Schulden im ersten Jahr verwendet wird. Das ist erzwungenes Sparen. Sie finden diese Zahl in Ihrem Tilgungsplan."
                    ]
                },

                { type: 'subtitle', title: "Abschnitt Betrieb (Die Wahrheit)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Die klassische Falle', content: [
                        { type: 'p', text: "Unterschätzung der Ausgaben. Nehmen Sie NIEMALS die Zahlen des Verkäufers für bare Münze. Sie 'vergessen' oft Verwaltung und Instandhaltung." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Bruttoeinnahmen:</strong> Die Summe aller Mieten, wenn das Gebäude das ganze Jahr über zu 100% belegt wäre.",
                        "<strong>Leerstandsquote (%):</strong> Prozentsatz der Zeit, in der die Wohnungen leer stehen (zwischen Mietern).<br/><em>Standard:</em> Setzen Sie immer mindestens <strong>3% bis 5%</strong> als Vorsichtsmaßnahme, auch wenn es voll ist. Banken verlangen dies in ihren Berechnungen.",
                        "<strong>Betriebskosten:</strong> Der entscheidende Punkt. Schließen Sie ALLES ein: Steuern, Versicherungen, Strom (Gemeinschaftsbereiche), Schneeräumung, Rasen, Werbung, Verwaltung und vor allem die Instandhaltungsrücklage.<br/><em>Faustregel:</em> Die Ausgaben machen oft <strong>35% bis 45%</strong> der Bruttoeinnahmen aus. Wenn Ihre Berechnung bei 15% liegt, haben Sie etwas vergessen."
                    ]
                },

                { type: 'subtitle', title: "Abschnitt Erweiterte Einstellungen (Die Zukunft)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Wertsteigerung %:</strong> Um wie viel der Wert des Gebäudes pro Jahr steigt. Seien Sie konservativ (2% bis 3%, um der Inflation zu folgen). Das ist das Sahnehäubchen, nicht der Kuchen.",
                        "<strong>Steuerliche Abschreibung:</strong> Der Betrag, den die Regierung Ihnen erlaubt, für die Abnutzung des Gebäudes von Ihrem Einkommen abzuziehen. Dies reduziert Ihre Steuern heute, wird aber beim Verkauf 'zurückgefordert' (besteuert). Konsultieren Sie einen Buchhalter.",
                        "<strong>Steuer %:</strong> Ihr Grenzsteuersatz. Dient zur Berechnung des tatsächlichen Netto-Cashflows nach Steuern."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Der Cashflow",
            icon: 'flux',
            content: [
                { type: 'p', text: "Das ist der Sauerstoff Ihrer Investition. Ohne positiven Cashflow müssen Sie jeden Monat aus eigener Tasche zahlen, um das Gebäude zu halten. Das ist riskant." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Bruttomieteinnahmen<br/>(-) Leerstand & Forderungsausfälle (Verluste)<br/>= <strong>EFFEKTIVE EINNAHMEN</strong><br/><br/>(-) Betriebskosten (Steuern, Versicherungen...)<br/>= <strong>NETTOBETRIEBSERGEBNIS (NOI)</strong> <span style='color:var(--info-color)'>◄ Die reine Leistung des Gebäudes</span><br/><br/>(-) Schuldendienst (Hypothek)<br/>= <strong>CASHFLOW</strong> <span style='color:var(--success-color)'>◄ Was in Ihre Tasche fließt</span>" }
                    ]
                },
                { type: 'p', text: "Das <strong>NOI</strong> ist entscheidend, da es die Leistung des Gebäudes <em>unabhängig</em> von Ihrer Finanzierung darstellt. Auf diese Zahl stützt sich die Bank, um den wirtschaftlichen Wert des Gebäudes zu bewerten." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Leistungskennzahlen",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Wie erkenne ich ein gutes Geschäft? Zahlen lügen nicht." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Kapitalisierungsrate (Cap Rate)', code: 'NOI / Kaufpreis', text: "Die Rendite des Gebäudes, wenn Sie es zu 100% bar bezahlen würden. Dies ist die absolute Referenz, um Gebäude miteinander zu vergleichen.<br/><strong>Ziel:</strong> 4.5% bis 6% (je höher, desto besser)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Jahres-Cashflow / Anzahlung', text: "Ihre tatsächliche Rendite auf das investierte Bargeld. Das ist Ihr 'wahrer' Zinssatz.<br/><strong>Ziel:</strong> > 8% bis 10%." },
                        { style: 'warning', title: 'Kostenquote (OER)', code: 'Ausgaben / Bruttoeinnahmen', text: "Misst die Effizienz der Verwaltung. Wenn > 55%, ist das Gebäude ein Sieb. Wenn < 25%, sind die Zahlen wahrscheinlich falsch.<br/><strong>Gesunde Zone:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Bruttomietmultiplikator (GRM)', code: 'Preis / Bruttoeinnahmen', text: "'Wie oft zahle ich die Einnahmen?' Nützlich für eine schnelle Sortierung, aber gefährlich, da es die tatsächlichen Ausgaben ignoriert.<br/><strong>Standard:</strong> 12x bis 18x+ (variiert stark nach Stadt und Qualität)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Risikoanalyse & Bank",
            icon: 'risque',
            content: [
                { type: 'p', text: "Bevor die Bank Ihnen Hunderttausende von Dollar leiht, wird sie diese Kennzahlen prüfen, um sicherzustellen, dass Sie nicht ausfallen." },

                { type: 'subtitle', title: "Schuldendienstdeckungsgrad (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Hypothekenzahlungen</span><br/>Decken die Mieten die Hypothek? Ein DSCR von <strong>1.25</strong> bedeutet, dass Sie für jede 100 $ Zahlung an die Bank 125 $ Nettoeinnahmen haben. Das ist die von den Banken geforderte Sicherheitsmarge.<br/><strong>Gefahrenzone:</strong> < 1.10." },

                { type: 'subtitle', title: "Beleihungsauslauf (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Kreditbetrag / Immobilienwert</span><br/>Der Prozentsatz des Gebäudes, der der Bank gehört. Je höher er ist, desto stärker ist der Hebel, aber desto höher ist das Risiko." },

                { type: 'subtitle', title: "Break-even-Point" },
                { type: 'p', text: "Das ist die Mindestbelegungsrate, um kein Geld zu verlieren. Je niedriger diese Zahl ist, desto sicherer ist die Investition." },

                { type: 'subtitle', title: "Kreditkonstante (Loan Constant)" },
                { type: 'p', text: "<span class='code-badge'>Jahreszahlung Gesamt / Kreditbetrag</span><br/>Die tatsächlichen Kosten Ihrer Schulden.<br/><strong>Das Geheimnis des positiven Hebels:</strong> Wenn Ihre Cap Rate > Kreditkonstante ist, bereichern Sie sich mit dem Geld der Bank." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Fortgeschrittene Strategien (Profis)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'Die BRRRR-Strategie', content: [
                        { type: 'p', text: "Buy (Kaufen), Rehab (Renovieren), Rent (Vermieten), Refinance (Refinanzieren), Repeat (Wiederholen).<br/><br/>Der Heilige Gral der Immobilien. Das Ziel ist es, ein heruntergekommenes Gebäude zu kaufen, seinen Wert durch Renovierungen zu steigern und es dann zu refinanzieren, um 100% Ihrer ursprünglichen Anzahlung zurückzuerhalten." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Anfänger)" },
                { type: 'p', text: "Ein Zweifamilienhaus oder Dreifamilienhaus kaufen und eine der Wohnungen bewohnen.<br/><strong>Vorteil:</strong> Reduzierte Anzahlung. Die Mieter zahlen Ihre Hypothek." },

                { type: 'subtitle', title: "Der interne Zinsfuß (IRR / TRI)" },
                { type: 'p', text: "Der IRR berechnet die annualisierte Gesamtrendite unter Kombination der 4 Zahler der Immobilien:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Das monatliche Geld.",
                        "2. <strong>Tilgung:</strong> Der Mieter zahlt Ihre Schulden.",
                        "3. <strong>Wertsteigerung:</strong> Der Wert steigt mit der Inflation.",
                        "4. <strong>Steuervorteile:</strong> Zinsabzug und Abschreibung."
                    ]
                }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Immobilienbesteuerung",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Immobilien sind mächtig, aber das Finanzamt wartet auf Sie. Das Verständnis dieser Konzepte kann Ihnen Tausende sparen." },

                { type: 'subtitle', title: "Laufende vs. aktivierungsfähige Ausgaben" },
                { type: 'p', text: "<strong>Laufend:</strong> Kleinere Reparaturen. Zu 100% im selben Jahr absetzbar.<br/><strong>Aktivierungsfähig:</strong> Größere Verbesserungen (Dach, Fenster). Nicht sofort absetzbar, sondern über mehrere Jahre abgeschrieben." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Vollständiges Glossar",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Kapitaltilgung", def: "Der Teil Ihrer Hypothekenzahlung, der die Schulden begleicht." },
                        { term: "Abschreibung (DPA)", def: "Buchhalterische Ausgabe (Wertminderung), die Ihre heutige Steuerlast senkt." },
                        { term: "Wertsteigerung", def: "Zunahme des Immobilienwerts im Laufe der Zeit." },
                        { term: "Cap Rate", def: "Rendite ohne Finanzierung. NOI / Preis." },
                        { term: "Cash-on-Cash", def: "Rendite auf das investierte Bargeld." },
                        { term: "Cashflow", def: "Nettogewinn nach allen Ausgaben." },
                        { term: "Betriebskosten", def: "Kosten für den Betrieb des Gebäudes." },
                        { term: "DSCR", def: "Schuldendienstdeckungsgrad." },
                        { term: "Hebeleffekt", def: "Nutzung von Schulden zur Steigerung der Eigenkapitalrendite." },
                        { term: "Eigenkapital (Equity)", def: "Marktwert - Hypothekensaldo." },
                        { term: "LTV", def: "Beleihungsauslauf." },
                        { term: "NOI", def: "Nettobetriebsergebnis." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = {
    sidebar: {
        title: "Immobilienhandbuch (Intl)",
        sections: [
            { title: "Grundlagen", items: [{ id: 'intro', label: '1. Die Philosophie' }, { id: 'module', label: '2. Modul-Handbuch' }] },
            { title: "Finanzanalyse", items: [{ id: 'flux', label: '3. Der Cashflow' }, { id: 'ratios', label: '4. Schlüsselkennzahlen' }, { id: 'risque', label: '5. Risikoanalyse' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Profi-Strategien' }, { id: 'fiscalite', label: '7. Besteuerung' }, { id: 'glossaire', label: '8. Glossar' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Einführung: Hebelwirkung",
            icon: 'intro',
            content: [
                { type: 'p', text: "Nutzen Sie das Geld der Bank, um Ihre Gewinne zu steigern." }
            ]
        },
        module: {
            id: 'module',
            title: "2. Modul-Nutzung",
            icon: 'module',
            content: [
                { type: 'p', text: "Geben Sie Ihre Daten in die entsprechenden Felder ein." }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Cashflow",
            icon: 'flux',
            content: [
                { type: 'p', text: "Einnahmen minus Ausgaben minus Hypothek = Cashflow." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Ratios",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Cap Rate, Cash-on-Cash, GRM." }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Risiko",
            icon: 'risque',
            content: [
                { type: 'p', text: "LTV, DSCR." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Strategien",
            icon: 'strategie',
            content: [
                { type: 'p', text: "BRRRR, House Hacking." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Steuer",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Konsultieren Sie einen lokalen Experten." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glossar",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "NOI", def: "Nettobetriebsergebnis" }
                    ]
                }
            ]
        }
    }
};
