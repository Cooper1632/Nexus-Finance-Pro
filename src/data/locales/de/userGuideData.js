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
            { id: 'budget', label: 'Budget & Vermögen' },
            { id: 'plan', label: 'Schuldenplan' },
            { id: 'remb', label: 'Rückzahlung' },
            { id: 'invest', label: 'Investition' },
            { id: 'analyse', label: 'Aktienanalyse' },
            { id: 'immo', label: 'Immobilien' },
            { id: 'perf', label: 'Leistung' },
            { id: 'projections', label: 'Prognosen' },
            { id: 'params', label: 'Einstellungen' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Ihr Referenzhandbuch zur Nutzung der Software.",
    cards: [
        { title: "Gesamtübersicht", desc: "Zentralisieren Sie Ihr Nettovermögen.", color: "info" },
        { title: "Budget & Cashflow", desc: "Kontrolle über Einnahmen & Ausgaben.", color: "warning" },
        { title: "Schuldenstrategie", desc: "Intelligente Schuldenbeseitigung.", color: "danger" },
        { title: "Leistung", desc: "Echte Verfolgung Ihrer Renditen.", color: "dark" },
        { title: "Wachstum", desc: "Zinseszins & Ruhestand.", color: "success" },
        { title: "Intelligenz", desc: "Börsen- & Immobilienanalyse.", color: "concept" }
    ],
    benefits: {
        title: "Was diese Software Ihnen bringt:",
        items: [
            { title: "Gesamtübersicht (Dashboard):", text: "Zentralisieren Sie Ihr Nettovermögen, Ihre Vermögenswerte und Schulden auf einen Blick." },
            { title: "Budgetkontrolle:", text: "Verfolgen Sie Ihre Einnahmen, Ausgaben und Ihre monatliche Sparfähigkeit." },
            { title: "Schuldenstrategie:", text: "Planen Sie die Beseitigung Ihrer Schulden (Lawine/Schneeball), um Zinsen zu sparen." },
            { title: "Rückzahlungssimulatoren:", text: "Berechnen Sie Ihre Zahlungen für Hypotheken, Kredite und Kreditkarten." },
            { title: "Portfolio-Tracking:", text: "Verwalten Sie Ihre Investitionen und visualisieren Sie Ihre tatsächliche Leistung." },
            { title: "Immobilienanalyse:", text: "Berechnen Sie die genaue Rentabilität Ihrer Mietprojekte." },
            { title: "Börsenintelligenz:", text: "Analysieren Sie die Qualität von Unternehmen (Nexus Score), bevor Sie investieren." },
            { title: "Leistungsverfolgung:", text: "Visualisieren Sie die historische Entwicklung Ihres Reichtums und vergleichen Sie sie mit Indizes." },
            { title: "Zukunftsprognosen:", text: "Berechnen Sie Ihre Zinseszinsen, planen Sie Ihren Ruhestand und Ihre Entnahmen." },
            { title: "Totale Vertraulichkeit:", text: "Ihre Daten werden lokal auf Ihrem Gerät gespeichert, nichts wird in die Cloud gesendet." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Tipp:",
                content: "Dieses Handbuch erklärt die technische Nutzung der Software. Für theoretische Finanzkonzepte (Börse, Kennzahlen) beziehen Sie sich auf das <strong>Finanzen 101 Handbuch</strong> im Menü Bildung."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Dashboard",
            desc: "Ihre Kommandozentrale, die Daten aus allen Modulen aggregiert.",
            items: [
                { title: "Nettovermögen:", text: "Schlüsselindikator <code>(Gesamtvermögen - Gesamtverbindlichkeiten)</code>." },
                { title: "Gesamtvermögen:", text: "Summe Ihres Portfolios (Investition) und Ihrer Güter (Budget/Vermögen)." },
                { title: "Gesamtverbindlichkeiten:", text: "Summe aller im Plan-Modul eingegebenen Schulden." },
                { title: "Cashflow:", text: "Ihr monatlich verfügbares Guthaben (Einnahmen - Ausgaben - Sparen)." }
            ],
            box: {
                type: "warning",
                title: "Wichtiger Hinweis - Szenarien:",
                content: "Das Dashboard zeigt immer die Daten des <strong>Aktiven Szenarios</strong> (das auf dem Bildschirm ausgewählte Szenario) für jedes Modul an. Wenn Sie das Szenario im Budget-Modul ändern, wird das Dashboard aktualisiert, um diese Auswahl widerzuspiegeln."
            }
        },
        budget: {
            id: "budget",
            title: "Budget & Vermögen",
            desc: "Der Eckpfeiler Ihrer Finanzverwaltung.",
            items: [
                { text: "Füllen Sie die Beträge für jeden Posten mit der richtigen Häufigkeit aus." },
                { title: "Steuern und Abgaben:", text: "Neue Kategorie zur Verwaltung Ihrer Steuervorauszahlungen oder -nachzahlungen." },
                { title: "Abschnitt 'Wert Ihrer Vermögenswerte':", text: "Dieser Abschnitt ist ausschließlich Ihren materiellen Gütern (Immobilien, Fahrzeuge) gewidmet, um Ihr Nettovermögen zu ermitteln. Ihre Aktien und Anlagen gehören in das Investitionsmodul." }
            ]
        },
        projections: {
            id: "projections",
            title: "Prognoserechner",
            cards: [
                { title: "Zukünftiger Wert", desc: "Visualisieren Sie das Wachstum Ihrer Investitionen mit Zinseszins." },
                { title: "Ziel", desc: "Legen Sie einen Zielbetrag und ein Datum fest, das Tool berechnet den erforderlichen Sparaufwand." },
                { title: "Entnahme", desc: "Simulieren Sie die Auszahlungsphase. Wie lange wird Ihr Kapital reichen?" }
            ]
        },
        plan: {
            id: "plan",
            title: "Schuldenplan",
            desc: "Legen Sie Ihre optimale Rückzahlungsstrategie fest.",
            items: [
                { title: "Lawine:", text: "Priorisiert hohe Zinssätze (Maximale Einsparung)." },
                { title: "Schneeball:", text: "Priorisiert kleine Salden (Psychologische Motivation)." }
            ],
            warning: {
                title: "Wichtiger Hinweis - Hypotheken",
                content: "Das Modul 'Plan' ist ein <strong>Simulator</strong>. Es aktualisiert nicht automatisch Ihren tatsächlichen Saldo im Dashboard.<br/><strong>Erforderliche Aktion:</strong> Passen Sie einmal im Monat das Feld 'Betrag' in diesem Modul manuell an, um Ihren tatsächlichen Kontoauszug widerzuspiegeln."
            }
        },
        remb: {
            id: "remb",
            title: "Rückzahlungssimulatoren",
            desc: "Berechnen Sie Ihre Zahlungen für verschiedene Kreditarten.",
            cards: [
                { title: "Hypothek:", desc: "Simulieren Sie Ihre monatlichen Zahlungen, die Gesamtzinsen und die Auswirkung einer Anzahlung (Kauf/Erneuerung)." },
                { title: "Privatkredit:", desc: "Berechnen Sie die tatsächlichen Kosten eines Auto- oder Privatkredits." },
                { title: "Kreditkarte:", desc: "Sehen Sie die Zeit, die benötigt wird, um eine Karte mit der Mindestzahlung abzuzahlen." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investition",
            desc: "Vollständige Verfolgung Ihres Aktienportfolios.",
            items: [
                { title: "Datenquellen:", text: "Wählen Sie in den Einstellungen zwischen <strong>Yahoo Finance (Kostenlos, 15 Min. verzögert)</strong> oder <strong>Alpha Vantage (Echtzeit, Schlüssel erforderlich)</strong>." },
                { title: "Aktualisieren:", text: "Aktualisiert den Wert Ihrer Titel sofort." },
                { title: "Verlauf:", text: "Ändern oder löschen Sie jede vergangene Transaktion." },
                { title: "Leistung (GIPS):", text: "Analysiert die echte zeitgewichtete Rendite (CAGR)." }
            ],
            box: {
                type: "warning",
                title: "Über die Neuheiten:",
                content: "<ul><li><strong>Yahoo Finance:</strong> Hervorragende kostenlose Wahl, aber beachten Sie, dass die Preise eine 15-minütige Verzögerung gegenüber dem Markt haben.</li><li><strong>Questrade:</strong> Die Verbindungsoption erscheint <em>nur</em>, wenn Ihre Hauptwährung der <strong>CAD</strong> (Kanadischer Dollar) ist.</li></ul>"
            },
            button: "Siehe Finanzen 101 Handbuch"
        },
        analyse: {
            id: "analyse",
            title: "Aktienanalyse",
            desc: "Bewerten Sie die fundamentale Gesundheit eines Unternehmens, bevor Sie investieren.",
            items: [
                { title: "Nexus Score (0-100):", text: "Zusammenfassende Note basierend auf 7 Schlüsselkennzahlen (KGV, Wachstum, Marge, Schulden, ROE...)." },
                { title: "PEG-Verhältnis:", text: "Erkennt unterbewertete Aktien im Verhältnis zu ihrem Wachstum." },
                { title: "KI-Assistent:", text: "Generiert einen optimierten Prompt für Gemini/ChatGPT zum Abrufen von Finanzdaten." }
            ]
        },
        perf: {
            id: "perf",
            title: "Leistung",
            desc: "Visualisieren Sie die tatsächliche Entwicklung Ihres Reichtums.",
            items: [
                { title: "Historisches Diagramm:", text: "Entwicklungskurve Ihres Nettovermögens und Ihrer Gesamtvermögenswerte im Zeitverlauf." },
                { title: "Benchmarks:", text: "Vergleichen Sie Ihre eigene Leistung mit der der großen Indizes (S&P 500, TSX)." }
            ]
        },
        immo: {
            id: "immo",
            title: "Immobilien",
            desc: "Professionelle Mietrentabilitätsanalyse.",
            cards: [
                { title: "NOI:", text: "Nettobetriebsergebnis (Gewinn vor Hypothek)." },
                { title: "Cap Rate:", text: "Reine Rendite des Gebäudes ohne Hebelwirkung." },
                { title: "Cash-on-Cash:", text: "Echte Rendite auf Ihre Anzahlung." },
                { title: "DSCR:", text: "Schuldendienstdeckungsgrad (Bank)." }
            ],
            button: "Immobilienhandbuch"
        },
        params: {
            id: "params",
            title: "Einstellungen & Tools",
            items: [
                { title: "Backup / Wiederherstellung:", text: "Exportieren Sie Ihre Daten als JSON-Datei, um sie nie zu verlieren." },
                { title: "Rechner:", text: "Schwimmendes Werkzeug, überall in der Anwendung verfügbar." },
                { title: "Modul zurücksetzen:", text: "Der orangefarbene Knopf (Kreispfeil) löscht nur die Daten des aktiven Moduls." },
                { title: "Werkseinstellungen:", text: "Der rote Knopf löscht ALLE Daten der Anwendung. <span style='color:var(--danger-color); font-weight:bold'>Irreversible Aktion.</span>" }
            ]
        }
    }
};
