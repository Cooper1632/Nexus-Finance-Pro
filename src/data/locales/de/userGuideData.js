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
        title: "Benutzerhandbuch",
        items: [
            { id: 'intro', label: 'Einführung' },
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'budget', label: 'Budget' },
            { id: 'plan', label: 'Schuldenplan' },
            { id: 'remb', label: 'Rückzahlung' },
            { id: 'invest', label: 'Investition' },
            { id: 'analyse', label: 'Aktienanalyse' },
            { id: 'immo', label: 'Immobilien' },
            { id: 'perf', label: 'Performance' },
            { id: 'projections', label: 'Prognosen' },
            { id: 'params', label: 'Einstellungen' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Ihr Referenzhandbuch zur Beherrschung der Software.",
    cards: [
        { title: "Überblick", desc: "Zentralisieren Sie Ihr Nettovermögen.", color: "info" },
        { title: "Budget & Fluss", desc: "Beherrschen Sie Einnahmen & Ausgaben.", color: "warning" },
        { title: "Schuldenstrategie", desc: "Intelligenter Schuldenabbau.", color: "danger" },
        { title: "Performance", desc: "Verfolgen Sie reale Renditen.", color: "dark" },
        { title: "Wachstum", desc: "Zinseszins & Ruhestand.", color: "success" },
        { title: "Intelligenz", desc: "Aktien- & Immobilienanalyse.", color: "concept" }
    ],
    benefits: {
        title: "Was diese Software für Sie tut:",
        items: [
            { title: "Globale Ansicht (Dashboard):", text: "Zentralisieren Sie Ihr Nettovermögen, Vermögenswerte und Schulden auf einen Blick." },
            { title: "Budgetkontrolle:", text: "Verfolgen Sie Ihre Einnahmen, Ausgaben und monatliche Sparfähigkeit." },
            { title: "Schuldenstrategie:", text: "Planen Sie den Schuldenabbau (Lawine/Schneeball), um Zinsen zu sparen." },
            { title: "Rückzahlungssimulatoren:", text: "Berechnen Sie Zahlungen für Hypotheken, Kredite und Kreditkarten." },
            { title: "Portfolio-Tracking:", text: "Verwalten Sie Ihre Investitionen und visualisieren Sie Ihre reale Performance." },
            { title: "Immobilienanalyse:", text: "Berechnen Sie die genaue Rentabilität Ihrer Mietprojekte." },
            { title: "Börsenintelligenz:", text: "Analysieren Sie die Unternehmensqualität (Nexus Score) vor dem Investieren." },
            { title: "Performance-Tracking:", text: "Visualisieren Sie die historische Entwicklung Ihres Reichtums und vergleichen Sie mit Indizes." },
            { title: "Zukunftsprognosen:", text: "Berechnen Sie Zinseszinsen, planen Sie Ruhestand und Entnahmen." },
            { title: "Totale Privatsphäre:", text: "Ihre Daten werden lokal auf Ihrem Gerät gespeichert, nichts wird in die Cloud gesendet." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Für den Start:",
                content: "Dieser Leitfaden ist so konzipiert, dass er Sie Schritt für Schritt begleitet. Jedes Modul wird mit <strong>konkreten Beispielen</strong> erklärt, damit Sie nicht nur verstehen <em>wie</em> Sie die Software nutzen, sondern auch <em>warum</em> diese Werkzeuge Ihnen helfen, reich zu werden."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Dashboard (Instrumententafel)",
            desc: "Ihr Kontrollturm. Er aggregiert Daten aus allen anderen Modulen, um Ihnen sofortigen Einblick in Ihre finanzielle Gesundheit zu geben.",
            items: [
                { title: "Nettovermögen:", text: "Dies ist DIE wichtigste Zahl. Es ist alles, was Sie besitzen (Aktiva) MINUS alles, was Sie schulden (Passiva).", example: "Wenn Sie ein Haus von 400.000€ und 50.000€ in Investitionen haben (Total Aktiva = 450.000€), aber eine Hypothek von 300.000€ (Passiva), beträgt Ihr Nettovermögen 150.000€." },
                { title: "Gesamtvermögen:", text: "Die Summe des Wertes Ihrer Immobilien, Fahrzeuge (Budget-Modul) und Investitionen (Investitions-Modul).", example: "Haus (350k) + Auto (20k) + Investitionen (30k) = 400k€ Vermögen." },
                { title: "Gesamtverbindlichkeiten:", text: "Die Summe aller im Modul 'Schuldenplan' erfassten Schulden (Hypotheken, Karten, Kredite).", example: "Hypothek (280k) + Autokredit (15k) + Visa (5k) = 300k€ Verbindlichkeiten." },
                { title: "Cashflow:", text: "Das Geld, das am Monatsende in Ihrer Tasche bleibt. Automatisch aus dem Budget-Modul berechnet.", example: "Einnahmen (5000) - Fixkosten (3000) - Variable Kosten (1000) = +1000€ Fluss." }
            ],
            box: {
                type: "warning",
                title: "Achtung bei Szenarien:",
                content: "Das Dashboard ist dynamisch. Wenn Sie 'Szenario B' im Budget-Modul auswählen, ändert sich das Dashboard sofort, um den Einfluss dieses Szenarios auf Ihr Nettovermögen zu zeigen."
            }
        },
        budget: {
            id: "budget",
            title: "Budget",
            desc: "Erleiden Sie Ihre Ausgaben nicht länger. Dieses Modul erlaubt Ihnen, Ihrem Geld zu sagen, wohin es gehen soll.",
            items: [
                { title: "Einnahmen & Ausgaben:", text: "Geben Sie Ihre Zahlen ein und wählen Sie die Häufigkeit (Wöchentlich, Monatlich, Jährlich). Die Software rechnet alles in 'Monatlich' um.", example: "Zahlen Sie 1200€ Autoversicherung pro Jahr? Geben Sie '1200' und Frequenz 'Jährlich' ein. Die Software zählt 100€/Monat Ausgabe." },
                { title: "Vermögensverwaltung (Haus/Auto):", text: "Spezielle Sektion für materielle Güter. Hier geben Sie den Marktwert Ihres Hauses oder Autos ein.", example: "Fügen Sie eine Zeile 'Hauptwohnsitz' mit Wert 450.000€ hinzu. Dieser Betrag erhöht Ihr Gesamtvermögen." },
                { title: "Steuern:", text: "Vergessen Sie nicht, Ihre Steuern einzubeziehen, wenn Sie selbstständig sind, oder Grundsteuern.", example: "Fügen Sie 'Grundsteuern': 3500€/Jahr hinzu." },
                { title: "Szenarien (A/B):", text: "Erstellen Sie bis zu 3 Versionen Ihres Budgets, um Hypothesen zu testen.", example: "Szenario A = Aktuelles Leben. Szenario B = 'Was wenn ich dieses Duplex kaufe?' (Mieteinnahmen und neue Ausgaben hinzufügen)." }
            ]
        },
        plan: {
            id: "plan",
            title: "Schuldenplan",
            desc: "Das ultimative Werkzeug, um schneller schuldenfrei zu werden und Tausende an Zinsen zu sparen.",
            items: [
                { title: "Methode 'Lawine':", text: "Mathematisch optimal. Man zahlt zuerst die Schuld mit dem höchsten Zinssatz.", example: "Sie haben eine Kreditkarte mit 20% und einen Autokredit mit 7%. Die Lawine greift zuerst die 20% Karte an. Maximale Zinsersparnis." },
                { title: "Methode 'Schneeball':", text: "Psychologisch motivierend. Man eliminiert die kleinste Schuld zuerst für einen schnellen Sieg.", example: "Sie haben eine kleine Schuld von 500€ (Visa) und eine große von 15.000€ (Auto). Wir töten die 500€ Schuld sofort, um Stolz und Motivation zu spüren." },
                { title: "Spalte 'Saldo':", text: "Dies ist ein Simulator. Der Saldo sinkt virtuell Monat für Monat.", example: "Wichtig: Wenn Sie eine reale Zahlung bei Ihrer Bank tätigen, aktualisieren Sie den Saldo hier einmal im Monat." }
            ],
            warning: {
                title: "Hypotheken-Tipp",
                content: "Sie können das Häkchen **'Einbeziehen'** für Ihre Hypothek entfernen. Dies ermöglicht es Ihnen, das Modul nur auf die Beseitigung 'schlechter' Konsumschulden zu fokussieren, ohne dass die Hypothek die Grafik verzerrt."
            }
        },
        remb: {
            id: "remb",
            title: "Rückzahlung",
            desc: "Dieses Modul enthält 3 verschiedene Rechner, um fundierte Entscheidungen vor Vertragsunterzeichnung zu treffen.",
            cards: [
                { title: "Tab 1: Hypothek", desc: "Simulieren Sie monatliche Raten. Verstehen Sie den Einfluss einer höheren Anzahlung oder eines anderen Zinssatzes.", example: "Für eine 400.000€ Wohnung bei 5% Zinsen auf 25 Jahre: Geben Sie diese Zahlen ein, um zu sehen, dass Sie am Ende 701.508€ zahlen (davon 301.508€ nur Zinsen!)." },
                { title: "Tab 2: Kredit", desc: "Ideal für Auto- oder Privatkredite. Entdecken Sie die wahren Kosten einer zu langen Finanzierung.", example: "Kauf eines 30.000€ Autos finanziert über 84 Monate (7 Jahre) zu 8%. Der Rechner zeigt, dass dieses Auto real 39.200€ kostet." },
                { title: "Tab 3: Kreditkarte", desc: "Das Bewusstseins-Tool. Berechnet die Zeit (oft Jahrzehnte!), um eine Karte zu zahlen, wenn man nur das Minimum zahlt.", example: "2000€ Schulden auf einer 19.99% Karte mit 3% Minimum: Es dauert 11 Jahre und kostet 1800€ an Zinsen." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investition",
            desc: "Ihre Kommandozentrale für Ihr Aktienportfolio (Aktien, ETF, Krypto).",
            items: [
                { title: "Schlüsselindikatoren (KPI):", text: "Oben fassen 5 Karten Ihre Lage zusammen: 1. Aktueller Wert (Was Sie haben), 2. Total Investiert (Was Sie eingezahlt haben), 3. Gewinn/Verlust € (Die Brutto-Differenz), 4. Rendite % (Einfache Rendite), 5. CAGR (Jährliche Wachstumsrate - die wahre Messung Ihrer Bereicherungsgeschwindigkeit)." },
                { title: "Analyse-Blasen:", text: "Jeder Titel erhält ein farbiges Etikett:\n• Grün (Exzellenz): Gewinn > 1000€ & > 15%.\n• Blau (Motor): Gewinn > 1000€ (Großes Volumen).\n• Grau (Schlafend): Kleine Position oder wenig Bewegung.\n• Rot (Gefahr): Im Verlust (Beobachten)." },
                { title: "Werkzeugleiste:", text: "• Button 'Aktualisieren' (Pfeile): Marktpreise updaten.\n• Button '+': Transaktion hinzufügen (Kauf/Verkauf/Dividende).\n• Button 'Performance' (Grafik): Detaillierten Bericht öffnen.\n• Button 'Watchlist' (Auge): Aktien beobachten ohne Kauf.\n• Menü 'Tools' (Zahnrad): API konfigurieren, Cache leeren." }
            ],
            box: {
                type: "info",
                title: "Performance-Bericht (Grafik-Button)",
                content: "Das Herz des realen Trackings. Dieses Modul trennt echte Gewinne von Einzahlungen. 3 Tabs:\n\n1. **Überblick**: Grafik Blaue Linie (Investiertes Kapital) vs Grüne Linie (Realer Wert). Die Lücke ist Ihr purer Profit.\n\n2. **Einzahlungen**: Hier erfassen Sie *frisches* Geld (z.B. 500€ Überweisung). Wichtig, damit die Software dies nicht als plötzlichen Gewinn sieht.\n\n3. **Snapshots**: Erlaubt Korrektur oder Historisierung des Gesamtwerts (z.B. 'Am 31. Dez war mein Konto 50.000€ wert')."
            },
            subSections: [
                {
                    title: "Transaktionsmanagement",
                    intro: "Klicken Sie auf '+' oder den Stift in einer Zeile.",
                    items: [
                        { title: "Kauf (Buy)", text: "Erhöht Anzahl und berechnet Durchschnittspreis (GAK) neu.", example: "Kauf 10 AAPL zu 150€. Gesamtkosten steigen um 1500€." },
                        { title: "Verkauf (Sell)", text: "Reduziert Anzahl und realisiert Gewinn oder Verlust.", example: "Verkauf 5 AAPL. Software berechnet den *tatsächlichen* Gewinn auf diese 5 Aktien." },
                        { title: "Dividende", text: "Fügt Bargeld hinzu ohne Aktienanzahl zu ändern.", example: "Erhalte 50€ Dividende. Purer Gewinn." }
                    ]
                },
                {
                    title: "Konfiguration & APIs",
                    intro: "Für Live-Preise, gehen Sie zu Tools -> Einstellungen.",
                    items: [
                        { title: "Yahoo Finance (Standard)", text: "Weltweite Abdeckung, kostenlos, kein Schlüssel. Perfekt für Anfänger." },
                        { title: "Alpha Vantage", text: "Professionelle Daten. Erfordert kostenlosen API-Key. Stabiler für große US-Portfolios." },
                        { title: "Questrade", text: "Direkte Integration. Importiert reale Positionen." }
                    ]
                }
            ],
            button: "Siehe Finanz 101 Handbuch"
        },
        analyse: {
            id: "analyse",
            title: "Aktienanalyse",
            desc: "Wählen Sie Aktien nicht mehr zufällig. Analysieren Sie wie ein Profi in Sekunden.",
            items: [
                { title: "Ziel:", text: "Dieses Modul gibt eine objektive Note (Nexus Score) zur fundamentalen Gesundheit eines Unternehmens." },
                { title: "Nexus Score (0-100):", text: "Globalnote auf 7 Säulen. >70 ist Exzellent (Grün), <40 ist Riskant (Rot)." },
                { title: "Vergleich:", text: "Erstellen Sie mehrere Karten nebeneinander, um Apple vs Microsoft vs Google zu vergleichen." }
            ],
            subSections: [
                {
                    title: "Dateneingabe",
                    intro: "Füllen Sie Felder manuell oder nutzen Sie den KI-Assistenten.",
                    items: [
                        { title: "Symbol & Preis", text: "Ticker eingeben (z.B. AAPL). Preis wird für Bewertungs-Ratios benötigt." },
                        { title: "EPS (Gewinn je Aktie)", text: "Wenn Sie Preis und EPS eingeben, berechnet sich das KGV (P/E) automatisch." },
                        { title: "Auto-Berechnung", text: "<strong>KGV (P/E)</strong> und <strong>Div Rendite %</strong> sind ausgegraut, da automatisch berechnet." },
                        { title: "Ausschluss (Häkchen)", text: "Häkchen entfernen, um Feld aus Score auszuschließen (z.B. Dividende bei Tesla ignorieren)." }
                    ]
                },
                {
                    title: "Die 7 Säulen verstehen",
                    intro: "Punkte für jede Qualitätsmetrik.",
                    items: [
                        { title: "1. Bewertung (KGV)", text: "Ist es teuer? Wir suchen KGV zwischen 15 und 25." },
                        { title: "2. Wachstum", text: "Wächst die Firma? Wir suchen >15% pro Jahr." },
                        { title: "3. Nettomarge", text: "Ist sie profitabel? Wir suchen >20%." },
                        { title: "4. Schulden", text: "Solvent? Schulden/Eigenkapital < 1.0." },
                        { title: "5. ROE (Eigenkapitalrendite)", text: "Management-Effizienz. Wir suchen >15%." },
                        { title: "6. Liquidität", text: "Fähigkeit kurzfristige Rechnungen zu zahlen. >1.5." },
                        { title: "7. Dividende", text: "Bonus. Wir suchen >2% (falls zutreffend)." }
                    ]
                },
                {
                    title: "Smarte Tools",
                    intro: "Funktionen zur Beschleunigung.",
                    items: [
                        { title: "Glühbirne (KI)", text: "Klicken für 'Magischen Prompt'. In ChatGPT einfügen für alle Zahlen." },
                        { title: "PEG Ratio", text: "Oben angezeigt. Wenn < 1.0, ist es ein Schnäppchen (Preis niedrig relativ zu Wachstum)." },
                        { title: "Visuelles Radar", text: "Spinnennetz-Diagramm zeigt Balance oder Schwächen." },
                        { title: "Speichern & Beobachten", text: "'Speichern' behält Analyse. 'Auge' fügt zur Watchlist hinzu." }
                    ]
                }
            ]
        },
        immo: {
            id: "immo",
            title: "Immobilien",
            desc: "Für den seriösen Investor. Vertrauen Sie nicht dem 'Gefühl', vertrauen Sie der Mathematik.",
            cards: [
                { title: "NOI (Reinertrag)", text: "Purer Profit vor Hypothek. Die zuverlässigste Zahl zum Vergleich.", example: "Triplex macht 60k Miete. Ausgaben 20k. NOI ist 40k." },
                { title: "Cap Rate (Kapitalisierungsrate)", text: "Motorleistung. Rendite bei Barkauf. Hohe Cap Rate (>6%) ist gutes Zeichen.", example: "Preis: 800k. NOI: 40k. 40k/800k = 5% Cap Rate." },
                { title: "Cash-on-Cash", text: "Echte ROI auf Ihr Bargeld. Wieviel % bringt Ihre Anzahlung?", example: "150k Anzahlung. 15k Cashflow übrig. 10% Cash-on-Cash. Exzellent." },
                { title: "DSCR (Schuldendienstdeckung)", text: "Liebling der Bank. Decken Mieten die Hypothek?", example: "Hypothek kostet 30k. NOI ist 40k. DSCR = 1.33. Bank ist glücklich." },
                { title: "GRM (Bruttomietmultiplikator)", text: "Schnellfilter. Wieviel Jahresmieten kostet das Haus?", example: "Preis 500k, Umsatz 50k. GRM = 10. Markt bei 14? Schnäppchen." },
                { title: "Break-Even", text: "Sicherheitslevel. Wieviel % der Einnahmen werden von Kosten gefressen?", example: "Bei 85% behalten Sie 15% Gewinn." },
                { title: "LTV (Beleihungsauslauf)", text: "Hebel. Welcher Teil ist finanziert?", example: "80% LTV heißt 20% Anzahlung." },
                { title: "Total ROI", text: "Gesamtbild. Cashflow + Tilgung (Vermögensaufbau).", example: "5000€ Cashflow + 7000€ Tilgung. Reale Bereicherung 12.000€." }
            ],
            button: "Siehe Immobilien-Handbuch"
        },
        perf: {
            id: "perf",
            title: "Performance (Rechner)",
            desc: "Ein unparteiischer Prüfer. Berechnen Sie die exakte Rendite zwischen zwei Daten.",
            items: [
                { title: "Ziel:", text: "Das ist NICHT Ihr Portfolio. Es ist ein isolierter Rechner: 'Wieviel brachte Aktie X zwischen 1. Jan und 31. Dez?'" },
                { title: "Unabhängig:", text: "Kein Link zu Konten. Einfach Startwert, Endwert, Datum eingeben." }
            ],
            subSections: [
                {
                    title: "Gesamtrendite vs CAGR",
                    intro: "Zwei Wahrheiten:",
                    items: [
                        { title: "Gesamtrendite", text: "Einfach. 'Habe +20% gemacht'.", example: "Kauf 100, Verkauf 120 = +20%." },
                        { title: "CAGR (Jährlich)", text: "Der wahre Richter. Anualisiert die Rendite.", example: "+20% in 10 Jahren ist 1.8% p.a. (schlecht). In 6 Monaten ist es 44% (genial)." }
                    ]
                },
                {
                    title: "Der Benchmark (S&P 500)",
                    intro: "Der Härtetest.",
                    items: [
                        { title: "Vergleich", text: "Daten eingeben und Schalter aktivieren. Software holt REALE S&P 500 Daten." },
                        { title: "Urteil", text: "Grafik überlagert Ihre Performance (Grün) mit US-Markt (Grau). Darüber? Sie haben die Wall Street geschlagen." }
                    ]
                }
            ]
        },
        projections: {
            id: "projections",
            title: "Prognosen & Rechner",
            desc: "Nicht raten. Wissen wann Sie aufhören können zu arbeiten.",
            cards: [
                { title: "Zukunftswert", desc: "Magie des Zinseszins.", example: "Was sind meine 10k in 20 Jahren wert?" },
                { title: "Ziel (Target)", desc: "Rückwärtsplanung.", example: "Ich will 1 Mio. Wieviel muss ich sparen?" },
                { title: "Entnahme (Rente)", desc: "Auszahlungsstrategie.", example: "Kann ich 4000€/Monat ewig entnehmen?" }
            ],
            subSections: [
                {
                    title: "Rechner 1: Zukunftswert",
                    intro: "Für Sparer.",
                    items: [
                        { title: "Frequenz & Wachstum", text: "Simulieren Sie steigende Einzahlungen." },
                        { title: "Timing", text: "Am 1. Jan investieren bringt mehr als am 31. Dez." },
                        { title: "Inflation", text: "Nicht vergessen! 1 Mio in 30 Jahren ist weniger wert. Achten Sie auf 'Reale Kaufkraft'." }
                    ]
                },
                {
                    title: "Rechner 2: Sparziel",
                    intro: "Für Projekte (Haus, Reise).",
                    items: [
                        { title: "Klare Antwort", text: "Tool gibt EXAKTEN Sparbetrag pro Tag/Woche/Monat." },
                        { title: "Rate anpassen", text: "Sehen Sie, wie 7% statt 5% Rendite die nötige Sparrate senkt." }
                    ]
                },
                {
                    title: "Rechner 3: Entnahme",
                    intro: "Der Ruhestandstest.",
                    items: [
                        { title: "Inflationsanpassung", text: "Häkchen ist vital. Simuliert steigende Entnahmen, da Brot teurer wird." },
                        { title: "Pleiterisiko", text: "Wenn Grafik vor Ende auf Null fällt, haben Sie ein Problem." }
                    ]
                }
            ]
        },
        params: {
            id: "params",
            title: "Einstellungen & Tools",
            subSections: [
                {
                    title: "Daten & Sicherheit",
                    intro: "Nexus Finance ist einzigartig: Daten verlassen NIE Ihren Computer.",
                    items: [
                        { title: "JSON Backup", text: "Da wir keinen Cloud-Server haben, sind Sie verantwortlich. Backup ('Export') einmal monatlich machen." },
                        { title: "Import", text: "Backup wiederherstellen oder Daten transferieren." }
                    ]
                },
                {
                    title: "Anpassung",
                    intro: "Passen Sie das Tool an.",
                    items: [
                        { title: "Währung", text: "Wechseln zwischen CAD, USD, EUR. Ändert nur Symbol, keine Umrechnung." },
                        { title: "Dezimal-Modus (.00)", text: "Aktivieren für Präzision (1250.45€). Deaktivieren für Minimalismus (1250€)." },
                        { title: "Dunkel/Hell", text: "Mond/Sonne klicken. Dark Mode empfohlen für nachts." },
                        { title: "Seitenbreite", text: "'1600px' oder '100%' für große Bildschirme." }
                    ]
                },
                {
                    title: "Gefahrenzone",
                    intro: "Vorsicht.",
                    items: [
                        { title: "Modul Reset (Orange)", text: "Löscht NUR aktiven Tab (z.B. Budget leeren). Sicher." },
                        { title: "Werksreset (ROT)", text: "Atomwaffe. Löscht ALLES. Irreversibel." }
                    ]
                }
            ],
            items: []
        },
        glossaire: {
            id: "glossaire",
            title: "Glossar",
            items: [
                { title: "EPS", text: "Gewinn pro Aktie." },
                { title: "KGV (P/E)", text: "Kurs-Gewinn-Verhältnis." },
                { title: "Steuerfreies Konto", text: "Konto wo Gewinne steuerfrei sind (z.B. TFSA, Roth IRA)." },
                { title: "Rentenkonto", text: "Steuerbegünstigtes Konto (z.B. RRSP, 401k)." },
                { title: "GAK (ACB)", text: "Glättender Anschaffungskurs (Steuer)." },
                { title: "Nettovermögen", text: "Aktiva - Passiva." }
            ]
        }
    }
};
