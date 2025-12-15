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
        title: "Immobilienleitfaden",
        sections: [
            { title: "Grundlagen", items: [{ id: 'intro', label: '1. Die Philosophie' }, { id: 'module', label: '2. Modul-Anleitung' }] },
            { title: "Finanzanalyse", items: [{ id: 'flux', label: '3. Der Cashflow' }, { id: 'ratios', label: '4. Kennzahlen' }, { id: 'risque', label: '5. Risikoanalyse' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Profi-Strategien' }, { id: 'fiscalite', label: '7. Besteuerung' }, { id: 'glossaire', label: '8. Vollständiges Glossar' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Einführung: Hebelwirkung & Reichtum",
            icon: 'intro',
            content: [
                { type: 'p', text: "Immobilieninvestitionen sind einzigartig, weil sie den <strong>Hebel</strong> (die Hypothek) nutzen, um Ihre Gewinne zu vervielfachen. Sie verwenden das Geld der Bank (oft 80% des Preises), um einen Vermögenswert zu 100% zu kontrollieren, während Sie von 100% der Wertsteigerung und des Cashflows profitieren." },
                { type: 'p', text: "Immobilien verzeihen jedoch nichts. Ein Rechenfehler von 100€ pro Monat kann über 25 Jahre zu einem Verlust von 30.000€ führen. Deshalb wurde das Modul <strong>Immobilien</strong> von Nexus Finance Pro entwickelt: um vage Schätzungen in präzise Mathematik zu verwandeln." },
                {
                    type: 'box', style: 'pro', title: 'Das Geheimnis der Profis', content: [
                        { type: 'p', text: "Der Gewinn wird beim Kauf gemacht, nicht beim Verkauf. Wenn die Zahlen an Tag 1 nicht funktionieren (negativer Cashflow), verlassen Sie sich nicht auf die \"zukünftige Wertsteigerung\", um Sie zu retten. Das ist Spekulation, keine Investition." }
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
                        "<strong>Kaufpreis:</strong> Der vom Verkäufer akzeptierte Betrag. Schließen Sie hier keine Startkosten (Notar, Grunderwerbsteuer) ein, da das Modul die Kennzahlen basierend auf dem Vermögenswert berechnet.",
                        "<strong>Eigenkapital (Anzahlung):</strong> Das Bargeld, das Sie aus eigener Tasche zahlen müssen.<br/><em>Auswirkung:</em> Eine geringere Anzahlung erhöht Ihre Eigenkapitalrendite (ROI) dank des Hebels, erhöht aber Ihre monatlichen Zahlungen und reduziert Ihren Cashflow.",
                        "<strong>Hypothekenzahlung (Jährlich):</strong> Der GESAMTBETRAG, der in einem Jahr an die Bank gezahlt wird (Kapital + Zinsen). Multiplizieren Sie Ihre monatliche Rate mit 12.<br/><em>Tipp:</em> Verwenden Sie das Modul <strong>Rückzahlung</strong>, um diesen genauen Betrag zu berechnen.",
                        "<strong>Kapitaltilgung (Jahr 1):</strong> Der Teil Ihrer Zahlungen, der im ersten Jahr zur Tilgung der Schulden dient. Das ist erzwungenes Sparen. Sie finden diese Zahl in Ihrem Tilgungsplan."
                    ]
                },

                { type: 'subtitle', title: "Abschnitt Betrieb (Die Wahrheit)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Die klassische Falle', content: [
                        { type: 'p', text: "Ausgaben unterschätzen. Nehmen Sie NIEMALS die Zahlen des Verkäufers (\"Exposé\") für bare Münze. Sie \"vergessen\" oft Verwaltung und Instandhaltung." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Bruttoeinnahmen:</strong> Die Summe aller Mieten, wenn das Gebäude das ganze Jahr über zu 100% belegt wäre.",
                        "<strong>Leerstandsquote (%):</strong> Prozentsatz der Zeit, in der die Einheiten leer stehen (zwischen Mietern).<br/><em>Standard:</em> Setzen Sie immer mindestens <strong>3% bis 5%</strong> als Vorsichtsmaßnahme an, auch wenn es voll ist. Banken verlangen dies in ihren Berechnungen.",
                        "<strong>Betriebskosten:</strong> Der Knackpunkt. Schließen Sie ALLES ein: Steuern (Grundsteuer), Versicherungen, Strom (Gemeinschaftsflächen), Müllabfuhr, Werbung, Verwaltung und vor allem Instandhaltung (Rücklage).<br/><em>Faustregel:</em> Die Ausgaben machen oft <strong>35% bis 45%</strong> der Bruttoeinnahmen aus. Wenn Ihre Berechnung bei 15% liegt, haben Sie etwas vergessen."
                    ]
                },

                { type: 'subtitle', title: "Abschnitt Erweiterte Parameter (Die Zukunft)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Wertsteigerung %:</strong> Um wie viel der Wert der Immobilie pro Jahr steigt. Seien Sie konservativ (2% bis 3%, um der Inflation zu folgen). Das ist das Sahnehäubchen, nicht der Kuchen.",
                        "<strong>Steuerliche Abschreibung (AfA):</strong> Der Betrag, den der Staat Ihnen erlaubt, für die Abnutzung des Gebäudes von Ihrem Einkommen abzuziehen. Dies reduziert Ihre Steuern heute, wird aber beim Verkauf eventuell \"zurückgefordert\" (versteuert). Konsultieren Sie einen Steuerberater.",
                        "<strong>Steuersatz %:</strong> Ihr persönlicher Grenzsteuersatz. Dient zur Berechnung des realen Netto-Cashflows nach Steuern."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Der Cashflow (Geldfluss)",
            icon: 'flux',
            content: [
                { type: 'p', text: "Das ist der Sauerstoff Ihrer Investition. Ohne positiven Cashflow müssen Sie jeden Monat aus eigener Tasche zahlen, um die Immobilie zu halten. Das ist riskant." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Bruttomieteinnahmen<br/>(-) Leerstand & Forderungsausfälle (Verluste)<br/>= <strong>EFFEKTIVE EINNAHMEN</strong><br/><br/>(-) Betriebskosten (Steuern, Versich...)<br/>= <strong>NETTOBETRIEBSEINKOMMEN (NOI / RNE)</strong> <span style='color:var(--info-color)'>◄ Die reine Leistung der Immobilie</span><br/><br/>(-) Schuldendienst (Hypothek)<br/>= <strong>CASHFLOW</strong> <span style='color:var(--success-color)'>◄ Was in Ihre Tasche fließt</span>" }
                    ]
                },
                { type: 'p', text: "Das <strong>NOI</strong> ist entscheidend, da es die Leistung der Immobilie <em>unabhängig</em> von Ihrer Finanzierung darstellt. Auf dieser Zahl basiert die Bank ihre Bewertung des wirtschaftlichen Werts der Immobilie." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Leistungskennzahlen",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Wie erkennt man ein gutes Geschäft? Die Zahlen lügen nicht." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Kapitalisierungsrate (Cap Rate)', code: 'NOI / Kaufpreis', text: "Die Rendite der Immobilie, wenn Sie sie zu 100% bar bezahlen würden. Das ist die absolute Referenz, um Immobilien untereinander zu vergleichen.<br/><strong>Ziel:</strong> 4,5% bis 6% (je höher, desto besser)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Jähri. Cashflow / Eigenkapital', text: "Ihre reale Rendite auf das aus eigener Tasche gezahlte Bargeld. Das ist Ihr \"echter\" Zinssatz.<br/><strong>Ziel:</strong> > 8% bis 10%." },
                        { style: 'warning', title: 'Kostenquote (OER)', code: 'Ausgaben / Bruttoeinnahmen', text: "Misst die Effizienz der Verwaltung. Wenn > 55%, ist die Immobilie ein Sieb. Wenn < 25%, sind die Zahlen wahrscheinlich falsch.<br/><strong>Gesunde Zone:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Bruttomietmultiplikator (GRM)', code: 'Preis / Bruttoeinnahmen', text: "\"Wie viele Jahresmieten zahle ich?\" Nützlich für eine schnelle Sortierung (per \"Daumenpeilung\"), aber gefährlich, da es die realen Ausgaben ignoriert.<br/><strong>Standard:</strong> 12x bis 18x+ (variiert stark je nach Stadt und Qualität)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Risikoanalyse & Bank",
            icon: 'risque',
            content: [
                { type: 'p', text: "Bevor Ihnen die Bank Hunderttausende leiht, wird sie diese Kennzahlen prüfen, um sicherzustellen, dass Sie nicht ausfallen." },

                { type: 'subtitle', title: "Schuldendeckungsgrad (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Hypothekenzahlungen</span><br/>Decken die Mieten die Hypothek? Ein DSCR von <strong>1,25</strong> bedeutet, dass Sie für jede 100€ Zahlung an die Bank 125€ Nettoeinnahmen haben. Das ist die von Banken geforderte Sicherheitsmarge.<br/><strong>Hinweis:</strong> Banken verwenden für diese Berechnung oft höhere \"qualifizierte\" Zinssätze.<br/><strong>Gefahrenzone:</strong> < 1,10." },

                { type: 'subtitle', title: "Beleihungsauslauf (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Kreditsumme / Immobilienwert</span><br/>Der Prozentsatz der Immobilie, der der Bank gehört. Je höher er ist, desto stärker ist der Hebel, aber desto höher ist das Risiko." },

                { type: 'subtitle', title: "Gewinnschwelle (Break-even)" },
                { type: 'p', text: "Das ist die Mindestbelegungsrate, um kein Geld zu verlieren. Wenn Ihr Break-even bei 75% liegt, bedeutet das, dass 25% Ihrer Einheiten leer stehen können und Sie trotzdem alle Rechnungen bezahlen können. Je niedriger diese Zahl, desto sicherer die Investition." },

                { type: 'subtitle', title: "Sicherheitsmarge" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Hypothekenzahlung) / NOI</span><br/>Prozentsatz des Nettoeinkommens, der verschwinden kann, bevor Sie einen negativen Cashflow haben. Eine Marge von <strong>20%+</strong> wird empfohlen, um Unvorhergesehenes aufzufangen." },

                { type: 'subtitle', title: "Kreditkonstante (Loan Constant)" },
                { type: 'p', text: "<span class='code-badge'>Jährl. Gesamtzahlung / Kreditsumme</span><br/>Die tatsächlichen Kosten Ihrer Schulden (einschließlich Kapitalrückzahlung).<br/><strong>Das Geheimnis des positiven Hebels:</strong> Wenn Ihre Cap Rate > Kreditkonstante, werden Sie mit dem Geld der Bank reicher. Wenn Cap Rate < Konstante, arbeitet der Hebel gegen Sie." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Fortgeschrittene Strategien (Profis)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'Die BRRRR-Strategie', content: [
                        { type: 'p', text: "Buy (Kaufen), Rehab (Renovieren), Rent (Vermieten), Refinance (Refinanzieren), Repeat (Wiederholen).<br/><br/>Der Heilige Gral der Immobilien. Ziel ist es, eine heruntergekommene Immobilie zu kaufen, ihren Wert durch Renovierungen zu steigern (Wertsteigerung erzwingen) und sie dann zu refinanzieren, um 100% Ihres ursprünglichen Eigenkapitals zurückzuerhalten. Sie besitzen dann eine Immobilie \"kostenlos\" (unendliches Eigenkapital = unendliche Rendite)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Anfänger)" },
                { type: 'p', text: "Ein Mehrfamilienhaus kaufen und eine der Einheiten selbst bewohnen.<br/><strong>Vorteil:</strong> Reduzierte Anzahlung. Die Mieter zahlen Ihre Hypothek. Das ist der beste Weg, um anzufangen." },

                { type: 'subtitle', title: "Der IZF (Interner Zinsfuß / IRR)" },
                { type: 'p', text: "Der Anfänger schaut auf den Cashflow. Der Profi schaut auf den IZF (IRR). Der IZF berechnet die annualisierte Gesamtrendite, indem er die 4 Zahler der Immobilie kombiniert:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Das monatliche Geld.",
                        "2. <strong>Tilgung:</strong> Der Mieter zahlt Ihre Schulden (Sie werden jeden Monat reicher).",
                        "3. <strong>Wertsteigerung:</strong> Der Wert der Immobilie steigt mit der Inflation.",
                        "4. <strong>Steuervorteile:</strong> Abzug von Zinsen und Abschreibungen."
                    ]
                },
                { type: 'p', text: "Nexus Pro berechnet diesen IZF für Sie über 10 Jahre unten im Immobilienmodul." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Immobilienbesteuerung",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Immobilien sind mächtig, aber das Finanzamt wartet auf Sie. Das Verständnis dieser Konzepte kann Ihnen Tausende sparen." },

                { type: 'subtitle', title: "Laufende vs. Aktivierungspflichtige Ausgaben" },
                { type: 'p', text: "<strong>Laufend:</strong> Kleinere Reparaturen (Hahn wechseln, Streichen). Zu 100% im selben Jahr absetzbar.<br/><strong>Aktivierungspflichtig:</strong> Größere Verbesserungen (Dach erneuern, Fenster wechseln). Nicht sofort voll absetzbar. Sie werden zu den Anschaffungskosten addiert und über mehrere Jahre abgeschrieben." },

                { type: 'subtitle', title: "Rückforderung von Abschreibungen" },
                { type: 'p', text: "Wenn Sie steuerliche Abschreibungen nutzen, um Ihre Steuern jährlich zu senken, Vorsicht! Beim Verkauf der Immobilie, wenn Sie teurer verkaufen als Sie gekauft haben, wird der Staat diese Abschreibungen \"zurückfordern\" und besteuern. Es ist ein Steuerkredit, kein Geschenk." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Vollständiges Glossar",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Kapitaltilgung", def: "Der Teil Ihrer Hypothekenzahlung, der die Schulden reduziert (und nicht Zinsen zahlt). Das ist eine Bereicherung für Sie." },
                        { term: "Abschreibung (AfA)", def: "Eine vom Finanzamt erlaubte \"fiktive\" Ausgabe (Wertverlust), die Ihre zu zahlende Steuer heute reduziert." },
                        { term: "Wertsteigerung", def: "Erhöhung des Immobilienwerts im Laufe der Zeit." },
                        { term: "Verkäuferdarlehen", def: "Wenn der Verkäufer akzeptiert, später für einen Teil des Verkaufspreises bezahlt zu werden. Ein Kredit vom Verkäufer." },
                        { term: "Cap Rate", def: "Rendite ohne Finanzierung. NOI / Preis." },
                        { term: "Cash-on-Cash", def: "Flüssige Rendite auf investiertes Geld. Cashflow / Eigenkapital." },
                        { term: "Cashflow", def: "Monatlicher oder jährlicher Nettogewinn, der nach allen Ausgaben und der Hypothek in Ihrer Tasche bleibt." },
                        { term: "Betriebskosten", def: "Kosten für den Betrieb der Immobilie (Versicherung, Steuern, Wartung). Exklusive Hypothek." },
                        { term: "Debt Yield", def: "NOI / Kreditsumme. Sicherheitskennzahl für gewerbliche Kreditgeber." },
                        { term: "DSCR (Deckung)", def: "Schuldendienstdeckungsgrad. Sollte > 1,20 sein." },
                        { term: "Hebelwirkung", def: "Nutzung von Schulden, um die Rendite des Eigenkapitals zu steigern." },
                        { term: "Eigenkapital (Net Worth)", def: "Marktwert - Hypothekensaldo. Ihr Nettovermögen in der Immobilie." },
                        { term: "LTV (Beleihung)", def: "Prozentsatz des von der Bank finanzierten Wertes." },
                        { term: "Anzahlung", def: "Initiale Eigenkapitaleinlage." },
                        { term: "GRM (Vervielfältiger)", def: "Preis / Bruttoeinnahmen. Schnelle Maßzahl für den Preis." },
                        { term: "Refinanzierung", def: "Den gestiegenen Wert beleihen, um steuerfreies Kapital herauszuholen." },
                        { term: "NOI (Nettoertrag)", def: "Einnahmen - Ausgaben. Der reine Gewinn des Betriebs." },
                        { term: "Leerstandsquote", def: "% der verlorenen Einnahmen durch leere Einheiten." },
                        { term: "IZF (IRR)", def: "Annualisierte Gesamtrendite inkl. Cashflow, Tilgung und Wertzuwachs." },
                        { term: "Bewertung", def: "Schätzung des Marktwerts, oft basierend auf NOI und marktüblicher Cap Rate." },
                        { term: "Kreditkonstante", def: "Jährl. Gesamtzahlung / Kredit. Wenn < Cap Rate, ist der Hebel positiv." },
                        { term: "Sicherheitsmarge", def: "% des Einnahmenrückgangs, der verkraftbar ist, bevor Verluste entstehen." },
                        { term: "Bruttorendite", def: "Bruttoeinnahmen / Preis. Das Gegenteil des GRM." },
                        { term: "ROE (Eigenkapitalrendite)", def: "Gesamtgewinn (Cashflow + Tilgung + Wertsteigerung) / Netto-Eigenkapital. Die wahre Rendite Ihres gebundenen Geldes." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = {
    sidebar: {
        title: "Immobilienleitfaden (Intl)",
        sections: [
            { title: "Grundlagen", items: [{ id: 'intro', label: '1. Die Philosophie' }, { id: 'module', label: '2. Modul-Anleitung' }] },
            { title: "Finanzanalyse", items: [{ id: 'flux', label: '3. Der Cashflow' }, { id: 'ratios', label: '4. Kennzahlen' }, { id: 'risque', label: '5. Risikoanalyse' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Profi-Strategien' }, { id: 'fiscalite', label: '7. Besteuerung' }, { id: 'glossaire', label: '8. Vollständiges Glossar' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Einführung: Hebelwirkung & Reichtum",
            icon: 'intro',
            content: [
                { type: 'p', text: "Immobilieninvestitionen sind einzigartig, weil sie den <strong>Hebel</strong> (Hypothek) nutzen, um Ihre Gewinne zu vervielfachen. Sie verwenden das Geld der Bank (oft 80% des Preises), um einen Vermögenswert zu 100% zu kontrollieren, während Sie von 100% der Wertsteigerung und des Cashflows profitieren." },
                { type: 'p', text: "Immobilien verzeihen jedoch nichts. Ein Rechenfehler von 100€/Monat kann über 25 Jahre zu einem Verlust von 30.000€ führen. Deshalb wurde das Modul <strong>Immobilien</strong> von Nexus Finance Pro entwickelt: um vage Schätzungen in präzise Mathematik zu verwandeln." },
                {
                    type: 'box', style: 'pro', title: 'Das Geheimnis der Profis', content: [
                        { type: 'p', text: "Der Gewinn wird beim Kauf gemacht, nicht beim Verkauf. Wenn die Zahlen an Tag 1 nicht funktionieren (negativer Cashflow), verlassen Sie sich nicht auf die \"zukünftige Wertsteigerung\", um Sie zu retten. Das ist Spekulation, keine Investition." }
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
                        "<strong>Kaufpreis:</strong> Der vom Verkäufer akzeptierte Betrag. Schließen Sie hier keine Startkosten (Notar, Steuern) ein, da das Modul die Kennzahlen basierend auf dem Vermögenswert berechnet.",
                        "<strong>Eigenkapital (Anzahlung):</strong> Das Bargeld, das Sie aus eigener Tasche zahlen müssen.<br/><em>Auswirkung:</em> Eine geringere Anzahlung erhöht Ihre Eigenkapitalrendite (ROI) dank des Hebels, erhöht aber Ihre monatlichen Zahlungen und reduziert Ihren Cashflow.",
                        "<strong>Hypothekenzahlung (Jährlich):</strong> Der GESAMTBETRAG, der in einem Jahr an die Bank gezahlt wird (Kapital + Zinsen). Multiplizieren Sie Ihre monatliche Rate mit 12.<br/><em>Tipp:</em> Verwenden Sie das Modul <strong>Rückzahlung</strong>, um diesen genauen Betrag zu berechnen.",
                        "<strong>Kapitaltilgung (Jahr 1):</strong> Der Teil Ihrer Zahlungen, der im ersten Jahr zur Tilgung der Schulden dient. Das ist erzwungenes Sparen. Sie finden diese Zahl in Ihrem Tilgungsplan."
                    ]
                },

                { type: 'subtitle', title: "Abschnitt Betrieb (Die Wahrheit)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Die klassische Falle', content: [
                        { type: 'p', text: "Ausgaben unterschätzen. Nehmen Sie NIEMALS die Zahlen des Verkäufers für bare Münze. Sie \"vergessen\" oft Verwaltung und Instandhaltung." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Bruttoeinnahmen:</strong> Die Summe aller Mieten, wenn das Gebäude das ganze Jahr über zu 100% belegt wäre.",
                        "<strong>Leerstandsquote (%):</strong> Prozentsatz der Zeit, in der die Einheiten leer stehen (zwischen Mietern).<br/><em>Standard:</em> Setzen Sie immer mindestens <strong>3% bis 5%</strong> als Vorsichtsmaßnahme an, auch wenn es voll ist. Banken verlangen dies in ihren Berechnungen.",
                        "<strong>Betriebskosten:</strong> Der Knackpunkt. Schließen Sie ALLES ein: Steuern, Versicherungen, Strom, Instandhaltung, Werbung, Verwaltung und vor allem Instandhaltung (Rücklage).<br/><em>Faustregel:</em> Die Ausgaben machen oft <strong>35% bis 45%</strong> der Bruttoeinnahmen aus. Wenn Ihre Berechnung bei 15% liegt, haben Sie etwas vergessen."
                    ]
                },

                { type: 'subtitle', title: "Abschnitt Erweiterte Parameter (Die Zukunft)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Wertsteigerung %:</strong> Um wie viel der Wert der Immobilie pro Jahr steigt. Seien Sie konservativ (2% bis 3%, um der Inflation zu folgen). Das ist das Sahnehäubchen, nicht der Kuchen.",
                        "<strong>Steuerliche Abschreibung:</strong> Abschreibung (Wertverlust), die Ihre zu zahlende Steuer heute reduziert (je nach Steuergesetzen Ihres Landes).",
                        "<strong>Steuersatz %:</strong> Ihr persönlicher Grenzsteuersatz. Dient zur Berechnung des realen Netto-Cashflows nach Steuern."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Der Cashflow",
            icon: 'flux',
            content: [
                { type: 'p', text: "Das ist der Sauerstoff Ihrer Investition. Ohne positiven Cashflow müssen Sie jeden Monat aus eigener Tasche zahlen, um die Immobilie zu halten. Das ist riskant." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Bruttomieteinnahmen<br/>(-) Leerstand & Forderungsausfälle (Verluste)<br/>= <strong>EFFEKTIVE EINNAHMEN</strong><br/><br/>(-) Betriebskosten (Steuern, Versich...)<br/>= <strong>NETTOBETRIEBSEINKOMMEN (NOI / RNE)</strong> <span style='color:var(--info-color)'>◄ Die reine Leistung der Immobilie</span><br/><br/>(-) Schuldendienst (Hypothek)<br/>= <strong>CASHFLOW (Netto-Liquidität)</strong> <span style='color:var(--success-color)'>◄ Was in Ihre Tasche fließt</span>" }
                    ]
                },
                { type: 'p', text: "Das <strong>NOI</strong> (Net Operating Income) ist entscheidend, da es die Leistung der Immobilie <em>unabhängig</em> von Ihrer Finanzierung darstellt. Auf dieser Zahl basiert die Bank ihre Bewertung des wirtschaftlichen Werts der Immobilie." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Leistungskennzahlen",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Wie erkennt man ein gutes Geschäft? Die Zahlen lügen nicht." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Kapitalisierungsrate (Cap Rate)', code: 'NOI / Kaufpreis', text: "Die Rendite der Immobilie, wenn Sie sie zu 100% bar bezahlen würden. Das ist die absolute Referenz, um Immobilien untereinander zu vergleichen.<br/><strong>Ziel:</strong> 4,5% bis 6% (je höher, desto besser)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Jähri. Cashflow / Eigenkapital', text: "Ihre reale Rendite auf das aus eigener Tasche gezahlte Bargeld. Das ist Ihr \"echter\" Zinssatz.<br/><strong>Ziel:</strong> > 8% bis 10%." },
                        { style: 'warning', title: 'Kostenquote (OER)', code: 'Ausgaben / Bruttoeinnahmen', text: "Misst die Effizienz der Verwaltung. Wenn > 55%, ist die Immobilie ein Sieb. Wenn < 25%, sind die Zahlen wahrscheinlich falsch.<br/><strong>Gesunde Zone:</strong> 35% - 45%." },
                        { style: 'pro', title: 'Bruttomietmultiplikator (GRM)', code: 'Preis / Bruttoeinnahmen', text: "\"Wie viele Jahresmieten zahle ich?\" Nützlich für eine schnelle Sortierung (per \"Daumenpeilung\"), aber gefährlich, da es die realen Ausgaben ignoriert.<br/><strong>Standard:</strong> 12x bis 18x+ (variiert stark je nach Stadt und Qualität)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Risikoanalyse & Bank",
            icon: 'risque',
            content: [
                { type: 'p', text: "Bevor Ihnen die Bank Hunderttausende leiht, wird sie diese Kennzahlen prüfen, um sicherzustellen, dass Sie nicht ausfallen." },

                { type: 'subtitle', title: "Schuldendeckungsgrad (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>NOI / Hypothekenzahlungen</span><br/>Decken die Mieten die Hypothek? Ein DSCR von <strong>1,25</strong> bedeutet, dass Sie für jede 100€ Zahlung an die Bank 125€ Nettoeinnahmen haben. Das ist die von Banken geforderte Sicherheitsmarge.<br/><strong>Hinweis:</strong> Banken verwenden für diese Berechnung oft höhere \"qualifizierte\" Zinssätze.<br/><strong>Gefahrenzone:</strong> < 1,10." },

                { type: 'subtitle', title: "Beleihungsauslauf (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Kreditsumme / Immobilienwert</span><br/>Der Prozentsatz der Immobilie, der der Bank gehört. Je höher er ist, desto stärker ist der Hebel, aber desto höher ist das Risiko." },

                { type: 'subtitle', title: "Gewinnschwelle (Break-even)" },
                { type: 'p', text: "Das ist die Mindestbelegungsrate, um kein Geld zu verlieren. Wenn Ihr Break-even bei 75% liegt, bedeutet das, dass 25% Ihrer Einheiten leer stehen können und Sie trotzdem alle Rechnungen bezahlen können. Je niedriger diese Zahl, desto sicherer die Investition." },

                { type: 'subtitle', title: "Sicherheitsmarge" },
                { type: 'p', text: "<span class='code-badge'>(NOI - Hypothekenzahlung) / NOI</span><br/>Prozentsatz des Nettoeinkommens, der verschwinden kann, bevor Sie einen negativen Cashflow haben. Eine Marge von <strong>20%+</strong> wird empfohlen, um Unvorhergesehenes aufzufangen." },

                { type: 'subtitle', title: "Kreditkonstante (Loan Constant)" },
                { type: 'p', text: "<span class='code-badge'>Jährl. Gesamtzahlung / Kreditsumme</span><br/>Die tatsächlichen Kosten Ihrer Schulden (einschließlich Kapitalrückzahlung).<br/><strong>Das Geheimnis des positiven Hebels:</strong> Wenn Ihre Cap Rate > Kreditkonstante, werden Sie mit dem Geld der Bank reicher. Wenn Cap Rate < Konstante, arbeitet der Hebel gegen Sie." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Fortgeschrittene Strategien (Profis)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'Die BRRRR-Strategie', content: [
                        { type: 'p', text: "Buy, Rehab, Rent, Refinance, Repeat.<br/><br/>Der Heilige Gral der Immobilien. Ziel ist es, eine heruntergekommene Immobilie zu kaufen, ihren Wert durch Renovierungen zu steigern (Wertsteigerung erzwingen) und sie dann zu refinanzieren, um 100% Ihres ursprünglichen Eigenkapitals zurückzuerhalten. Sie besitzen dann eine Immobilie \"kostenlos\" (unendliches Eigenkapital = unendliche Rendite)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Anfänger)" },
                { type: 'p', text: "Ein Mehrfamilienhaus kaufen und eine der Einheiten selbst bewohnen.<br/><strong>Vorteil:</strong> Reduzierte Anzahlung. Die Mieter zahlen Ihre Hypothek. Das ist der beste Weg, um anzufangen." },

                { type: 'subtitle', title: "Interner Zinsfuß (IZF / IRR)" },
                { type: 'p', text: "Der Anfänger schaut auf den Cashflow. Der Profi schaut auf den IZF. Der IZF berechnet die annualisierte Gesamtrendite, die die 4 Zahler der Immobilie kombiniert:" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow:</strong> Das monatliche Geld.",
                        "2. <strong>Tilgung:</strong> Der Mieter zahlt Ihre Schulden (Sie werden jeden Monat reicher).",
                        "3. <strong>Wertsteigerung:</strong> Der Wert der Immobilie steigt mit der Inflation.",
                        "4. <strong>Steuervorteile:</strong> Abzug von Zinsen und Abschreibungen."
                    ]
                },
                { type: 'p', text: "Nexus Pro berechnet diesen IZF für Sie über 10 Jahre unten im Immobilienmodul." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Immobilienbesteuerung",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "Immobilien sind mächtig, aber das Finanzamt wartet auf Sie. Das Verständnis dieser Konzepte kann Ihnen Tausende sparen." },

                { type: 'subtitle', title: "Laufende vs. Aktivierungspflichtige Ausgaben" },
                { type: 'p', text: "<strong>Laufend:</strong> Kleinere Reparaturen (Hahn wechseln, Streichen). Zu 100% im selben Jahr absetzbar.<br/><strong>Aktivierungspflichtig:</strong> Größere Verbesserungen (Dach erneuern, Fenster wechseln). Nicht sofort voll absetzbar. Sie werden zu den Anschaffungskosten addiert und über mehrere Jahre abgeschrieben." },

                { type: 'subtitle', title: "Rückforderung von Abschreibungen" },
                { type: 'p', text: "Wenn Sie steuerliche Abschreibungen nutzen, um Ihre Steuern jährlich zu senken, Vorsicht! Beim Verkauf der Immobilie, wenn Sie teurer verkaufen als Sie gekauft haben, wird der Staat diese Abschreibungen \"zurückfordern\" und besteuern. Es ist ein Steuerkredit, kein Geschenk." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Vollständiges Glossar",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Kapitaltilgung", def: "Der Teil Ihrer Hypothekenzahlung, der die Schulden reduziert (und nicht Zinsen zahlt). Das ist eine Bereicherung für Sie." },
                        { term: "Abschreibung (AfA)", def: "Eine vom Finanzamt erlaubte \"fiktive\" Ausgabe (Wertverlust), die Ihre zu zahlende Steuer heute reduziert." },
                        { term: "Wertsteigerung", def: "Erhöhung des Immobilienwerts im Laufe der Zeit." },
                        { term: "Verkäuferdarlehen", def: "Wenn der Verkäufer akzeptiert, später für einen Teil des Verkaufspreises bezahlt zu werden. Ein Kredit vom Verkäufer." },
                        { term: "Cap Rate", def: "Rendite ohne Finanzierung. NOI / Preis." },
                        { term: "Cash-on-Cash", def: "Flüssige Rendite auf investiertes Geld. Cashflow / Eigenkapital." },
                        { term: "Cashflow", def: "Monatlicher oder jährlicher Nettogewinn, der nach allen Ausgaben und der Hypothek in Ihrer Tasche bleibt." },
                        { term: "Betriebskosten", def: "Kosten für den Betrieb der Immobilie (Versicherung, Steuern, Wartung). Exklusive Hypothek." },
                        { term: "Debt Yield", def: "NOI / Kreditsumme. Sicherheitskennzahl für gewerbliche Kreditgeber." },
                        { term: "DSCR (Deckung)", def: "Schuldendienstdeckungsgrad. Sollte > 1,20 sein." },
                        { term: "Hebelwirkung", def: "Nutzung von Schulden, um die Rendite des Eigenkapitals zu steigern." },
                        { term: "Eigenkapital (Net Worth)", def: "Marktwert - Hypothekensaldo. Ihr Nettovermögen in der Immobilie." },
                        { term: "LTV (Beleihung)", def: "Prozentsatz des von der Bank finanzierten Wertes." },
                        { term: "Anzahlung", def: "Initiale Eigenkapitaleinlage." },
                        { term: "GRM (Vervielfältiger)", def: "Preis / Bruttoeinnahmen. Schnelle Maßzahl für den Preis." },
                        { term: "Refinanzierung", def: "Den gestiegenen Wert beleihen, um steuerfreies Kapital herauszuholen." },
                        { term: "NOI (Nettoertrag)", def: "Einnahmen - Ausgaben. Der reine Gewinn des Betriebs." },
                        { term: "Leerstandsquote", def: "% der verlorenen Einnahmen durch leere Einheiten." },
                        { term: "IZF (IRR)", def: "Annualisierte Gesamtrendite inkl. Cashflow, Tilgung und Wertzuwachs." },
                        { term: "Bewertung", def: "Schätzung des Marktwerts, oft basierend auf NOI und marktüblicher Cap Rate." },
                        { term: "Kreditkonstante", def: "Jährl. Gesamtzahlung / Kredit. Wenn < Cap Rate, ist der Hebel positiv." },
                        { term: "Sicherheitsmarge", def: "% des Einnahmenrückgangs, der verkraftbar ist, bevor Verluste entstehen." },
                        { term: "Bruttorendite", def: "Bruttoeinnahmen / Preis. Das Gegenteil des GRM." },
                        { term: "ROE (Eigenkapitalrendite)", def: "Gesamtgewinn (Cashflow + Tilgung + Wertsteigerung) / Netto-Eigenkapital. Die wahre Rendite Ihres gebundenen Geldes." }
                    ]
                }
            ]
        }
    }
};
