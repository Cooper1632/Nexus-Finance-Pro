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
        title: "Guide Utilisateur",
        items: [
            { id: 'intro', label: 'Introduction' },
            { id: 'dashboard', label: 'Tableau de Bord' },
            { id: 'budget', label: 'Budget' },
            { id: 'plan', label: 'Plan' },
            { id: 'remb', label: 'Remboursement' },
            { id: 'invest', label: 'Investissement' },
            { id: 'analyse', label: 'Analyse Action' },
            { id: 'immo', label: 'Immobilier' },
            { id: 'perf', label: 'Performance' },
            { id: 'projections', label: 'Projections' },
            { id: 'params', label: 'Paramètres' },
        ]
    },
    mainTitle: "Nexus Finance Pro",
    subTitle: "Votre guide de référence pour l'utilisation du logiciel.",
    cards: [
        { title: "Vue Globale", desc: "Centralisez votre Patrimoine Net.", color: "info" },
        { title: "Budget & Flux", desc: "Maîtrise des revenus & dépenses.", color: "warning" },
        { title: "Stratégie Dette", desc: "Élimination intelligente des dettes.", color: "danger" },
        { title: "Performance", desc: "Suivi réel de vos rendements.", color: "dark" },
        { title: "Croissance", desc: "Intérêts composés & Retraite.", color: "success" },
        { title: "Intelligence", desc: "Analyse Bourse & Immo.", color: "concept" }
    ],
    benefits: {
        title: "Ce que ce logiciel vous apporte :",
        items: [
            { title: "Vue Globale (Dashboard) :", text: "Centralisez votre Patrimoine Net, vos actifs et vos dettes en un seul coup d'œil." },
            { title: "Contrôle Budgétaire :", text: "Suivez vos revenus, dépenses et votre capacité d'épargne mensuelle." },
            { title: "Stratégie de Dette :", text: "Planifiez l'élimination de vos dettes (Avalanche/Boule de neige) pour économiser des intérêts." },
            { title: "Simulateurs de Remboursement :", text: "Calculez vos versements pour hypothèques, prêts et cartes de crédit." },
            { title: "Suivi de Portefeuille :", text: "Gérez vos investissements et visualisez votre performance réelle." },
            { title: "Analyse Immobilière :", text: "Calculez la rentabilité exacte de vos projets locatifs." },
            { title: "Intelligence Boursière :", text: "Analysez la qualité des entreprises (Score Nexus) avant d'investir." },
            { title: "Suivi de Performance :", text: "Visualisez l'évolution historique de votre richesse et comparez aux indices." },
            { title: "Projections Futures :", text: "Calculez vos intérêts composés, planifiez votre retraite et vos retraits." },
            { title: "Confidentialité Totale :", text: "Vos données sont stockées localement sur votre appareil, rien n'est envoyé sur le cloud." }
        ]
    },
    sections: {
        intro: {
            id: "intro",
            box: {
                type: "info",
                title: "Pour bien commencer :",
                content: "Ce guide est conçu pour vous accompagner pas à pas. Chaque module est expliqué avec des <strong>exemples concrets</strong> pour que vous compreniez non seulement <em>comment</em> utiliser le logiciel, mais aussi <em>pourquoi</em> ces outils vous aideront à vous enrichir."
            }
        },
        dashboard: {
            id: "dashboard",
            title: "Tableau de Bord",
            desc: "Votre tour de contrôle. Il agrège les données de tous les autres modules pour vous donner une vision immédiate de votre santé financière.",
            items: [
                { title: "Patrimoine Net :", text: "C'est LE chiffre le plus important. C'est tout ce que vous possédez (Actifs) MOINS tout ce que vous devez (Passifs).", example: "Si vous avez une maison de 400k$ et 50k$ en placements (Total Actif = 450k$) mais une hypothèque de 300k$ (Passif), votre Patrimoine Net est de 150k$." },
                { title: "Actifs Totaux :", text: "La somme de la valeur de votre Immobilier, vos Véhicules (Module Budget) et de vos Placements (Module Investissement).", example: "Maison (350k$) + Auto (20k$) + Placements (30k$) = 400k$ d'Actifs." },
                { title: "Passifs Totaux :", text: "La somme de toutes vos dettes enregistrées dans le module 'Plan de Dettes' (Hypothèques, Cartes, Prêts).", example: "Hypothèque (280k$) + Prêt Auto (15k$) + Carte Visa (5k$) = 300k$ de Passifs." },
                { title: "Flux de Trésorerie :", text: "L'argent qui reste dans vos poches à la fin du mois. Calculé automatiquement depuis le module Budget.", example: "Revenus (5000$) - Dépenses Fixes (3000$) - Dépenses Variables (1000$) = Flux de +1000$." }
            ],
            box: {
                type: "warning",
                title: "Attention aux Scénarios :",
                content: "Le Tableau de Bord est dynamique. Si vous sélectionnez le 'Scénario B' dans le module Budget, le Tableau de Bord changera instantanément pour vous montrer l'impact de ce scénario sur votre Patrimoine Net."
            }
        },
        budget: {
            id: "budget",
            title: "Budget",
            desc: "Ne subissez plus vos dépenses. Ce module vous permet de dire à votre argent où aller au lieu de vous demander où il est parti.",
            items: [
                { title: "Revenus & Dépenses :", text: "Entrez vos chiffres et choisissez la fréquence (Hebdo, Mensuel, Annuel). Le logiciel convertit tout en 'Mensuel' pour simplifier la lecture.", example: "Vous payez votre assurance auto 1200$ par an ? Entrez '1200' et fréquence 'Annuel'. Le logiciel comptera une dépense de 100$/mois." },
                { title: "Gestion des Actifs (Maison/Auto) :", text: "Section spéciale pour lister vos biens matériels. C'est ici que vous entrez la valeur marchande de votre maison ou de votre voiture.", example: "Ajoutez une ligne 'Maison Principale' avec une valeur de 450 000$. Ce montant s'ajoutera à vos Actifs Totaux." },
                { title: "Impôts et Taxes :", text: "N'oubliez pas d'inclure vos impôts si vous êtes travailleur autonome, ou les taxes municipales/scolaires pour votre propriété.", example: "Ajoutez 'Taxes Municipales' : 3500$/an." },
                { title: "Scénarios (A/B) :", text: "Créez jusqu'à 3 versions de votre budget pour tester des hypothèses.", example: "Scénario A = Vie actuelle. Scénario B = 'Et si j'achète ce duplex ?' (J'ajoute les revenus locatifs et les nouvelles dépenses)." }
            ]
        },
        plan: {
            id: "plan",
            title: "Plan",
            desc: "L'outil ultime pour devenir libre de dettes plus rapidement et économiser des milliers de dollars en intérêts.",
            items: [
                { title: "Méthode 'Avalanche' :", text: "Mathématiquement optimale. On rembourse en priorité la dette avec le plus haut taux d'intérêt.", example: "Vous avez une carte de crédit à 20% et un prêt auto à 7%. L'Avalanche attaque la carte à 20% en premier. Économie d'intérêts maximale." },
                { title: "Méthode 'Boule de Neige' :", text: "Psychologiquement motivante. On élimine la plus petite dette en premier pour obtenir une victoire rapide.", example: "Vous avez une petite dette de 500$ (Visa) et une grosse de 15 000$ (Auto). On tue la dette de 500$ immédiatement pour se sentir fier et motivé." },
                { title: "Colonne 'Solde' :", text: "Ceci est un simulateur. Le solde descend virtuellement mois après mois.", example: "Important : Si vous faites un virement réel à votre banque, venez mettre à jour le solde ici une fois par mois pour garder la simulation précise." }
            ],
            warning: {
                title: "Astuce Hypothèque",
                content: "Vous pouvez décocher la case **'Inclure'** pour votre hypothèque. Cela vous permet d'utiliser le module pour focuser uniquement sur l'élimination de vos 'mauvaises' dettes de consommation (Cartes, Prêts personnels) sans que l'hypothèque ne déforme le graphique."
            }
        },
        remb: {
            id: "remb",
            title: "Remboursement",
            desc: "Ce module contient 3 calculateurs distincts pour vous aider à prendre des décisions éclairées avant de signer un contrat de prêt.",
            cards: [
                { title: "Onglet 1 : Hypothèque", desc: "Simulez vos paiements mensuels ou bi-hebdomadaires. Comprenez l'impact d'une mise de fonds plus élevée ou d'un taux différent.", example: "Pour un condo de 400 000$ à 5% d'intérêt sur 25 ans : Entrez ces chiffres pour voir que vous paierez au final 701 508$ (dont 301 508$ juste en intérêts à la banque !)." },
                { title: "Onglet 2 : Prêt Personnel", desc: "Idéal pour les prêts auto ou les prêts conso. Découvrez le coût réel d'un financement sur une trop longue période.", example: "Vous achetez une auto de 30 000$ financée sur 84 mois (7 ans) à 8%. Le calculateur vous montrera que cette voiture vous coûtera en réalité 39 200$." },
                { title: "Onglet 3 : Carte de Crédit", desc: "L'outil de prise de conscience. Il calcule le temps (souvent des décennies !) nécessaire pour rembourser une carte si vous ne faites que le paiement minimum.", example: "Une dette de 2000$ sur une carte à 19.99% avec paiement minimum de 3% : Il vous faudra 11 ans pour tout rembourser et vous paierez 1800$ d'intérêts." }
            ]
        },
        invest: {
            id: "invest",
            title: "Investissement",
            desc: "Votre centre de commande pour piloter votre portefeuille boursier (Actions, ETF, Crypto).",
            items: [
                { title: "Indicateurs Clés (KPI) :", text: "En haut de page, 5 cartes résument votre situation : 1. Valeur Actuelle (Ce que vous avez), 2. Total Investi (Ce que vous avez sorti de votre poche), 3. Gain/Perte $ (La différence brute), 4. Rendement % (Performance simple), 5. CAGR (Croissance Annuelle Moyenne Composée - la vraie mesure de votre vitesse d'enrichissement)." },
                { title: "Bulles d'Analyse :", text: "Chaque titre reçoit une étiquette colorée pour vous aider à décider vite : \\n• Vert (Excellence) : Gain > 1000$ et > 15% (Les gagnants).\\n• Bleu (Moteur) : Gain > 1000$ (Gros volume).\\n• Gris (Dormant) : Petite position ou peu de mouvement.\\n• Rouge (Danger) : En perte (À surveiller)." },
                { title: "Barre d'Outils :", text: "• Bouton 'Actualiser' (Flèches) : Met à jour les prix du marché.\\n• Bouton '+' : Ajouter une transaction (Achat/Vente/Dividende).\\n• Bouton 'Performance' (Graphique) : Ouvre le rapport détaillé (voir ci-dessous).\\n• Bouton 'Watchlist' (Étoile) : Suivre des actions sans les acheter.\\n• Menu 'Outils' (Roue) : Configurer l'API, vider le cache ou lancer un diagnostic." }
            ],
            box: {
                type: "info",
                title: "Rapport de Performance (Bouton Graphique)",
                content: "C'est le cœur du suivi réel. Ce module sépare vos vrais gains de vos simples dépôts d'argent. Il contient 3 onglets :\\n\\n1. **Vue d'ensemble** : Graphique comparant la Ligne Bleue (Votre capital investi) vs la Ligne Verte (Valeur réelle). L'écart entre les deux est votre profit pur.\\n\\n2. **Dépôts** : C'est ici que vous enregistrez l'argent *frais* que vous injectez (ex: virement de 500$ vers votre compte d'investissement). C'est crucial pour que le logiciel ne pense pas que ce virement est un profit soudain.\\n\\n3. **Relevés (Snapshots)** : Permet de corriger ou d'historiser la valeur totale de votre compte à une date précise (ex: 'Le 31 déc, mon compte valait 50 000$'). Le logiciel lissera la courbe entre ces points."
            },
            subSections: [
                {
                    title: "Gestion des Transactions",
                    intro: "Cliquez sur le bouton '+' ou le crayon sur une ligne pour ouvrir l'éditeur.",
                    items: [
                        { title: "Achat (Buy)", text: "Incrémente votre quantité et recalcule votre Prix Moyen (PMP) automatiquement.", example: "Vous achetez 10 AAPL à 150$. Votre coût total augmente de 1500$." },
                        { title: "Vente (Sell)", text: "Réduit votre quantité et cristallise (réalise) le gain ou la perte.", example: "Vous vendez 5 AAPL. Le logiciel calcule combien de profit vous avez *réellement* fait sur ces 5 actions." },
                        { title: "Dividende", text: "Ajoute du cash sans changer la quantité d'actions.", example: "Vous recevez 50$ de dividendes. C'est du profit pur." }
                    ]
                },
                {
                    title: "Configuration & APIs",
                    intro: "Pour avoir les prix en direct, allez dans le menu Outils -> Paramètres.",
                    items: [
                        { title: "Yahoo Finance (Par défaut)", text: "Couverture mondiale, gratuit, pas de clé requise. Parfait pour les débutants." },
                        { title: "Alpha Vantage", text: "Données professionnelles. Nécessite une clé API gratuite (à obtenir sur leur site). Plus stable pour les gros portefeuilles US." },
                        { title: "Questrade", text: "Intégration directe. Importe vos positions réelles. Nécessite une reconnexion manuelle (Token) sécurisée car Nexus ne stocke pas vos identifiants bancaires." }
                    ]
                }
            ],
            button: "Voir le Guide Finance 101"
        },
        analyse: {
            id: "analyse",
            title: "Analyse Action",
            desc: "Ne choisissez plus vos actions au hasard. Analysez-les comme un pro en quelques secondes.",
            items: [
                { title: "Objectif :", text: "Ce module vous donne une note objective (Score Nexus) sur la santé fondamentale d'une entreprise, indépendamment du 'hype' médiatique." },
                { title: "Score Nexus (0-100) :", text: "Note globale calculée sur 7 piliers. >70 est excellent (Vert), <40 est risqué (Rouge)." },
                { title: "Comparateur :", text: "Créez plusieurs cartes côte à côte pour comparer Apple vs Microsoft vs Google et voir laquelle est la meilleure opportunité aujourd'hui." }
            ],
            subSections: [
                {
                    title: "Saisie des Données",
                    intro: "Remplissez les champs manuellement ou utilisez l'Assistant IA.",
                    items: [
                        { title: "Symbole & Prix", text: "Entrez le Ticker (ex: AAPL). Le prix est nécessaire pour calculer les ratios de valorisation." },
                        { title: "BPA (EPS)", text: "Bénéfice Par Action. Si vous entrez Prix et BPA, le ratio C/B (P/E) se calcule automatiquement." },
                        { title: "Champs Auto-Calculés", text: "Le <strong>C/B (P/E)</strong> et le <strong>Rendement Div. (%)</strong> sont grisés car ils sont calculés automatiquement si vous fournissez les données brutes (Prix, BPA, Div. Annuel)." },
                        { title: "Exclusion (Coche)", text: "Décochez la case à droite d'un champ pour l'exclure du calcul du score (ex: ignorer le Dividende pour une entreprise comme Tesla qui n'en verse pas)." }
                    ]
                },
                {
                    title: "Comprendre les 7 Piliers",
                    intro: "Le système attribue des points pour chaque métrique de qualité.",
                    items: [
                        { title: "1. Valorisation (P/E)", text: "Est-ce cher ? On cherche un P/E entre 15 et 25. Trop haut = Bulle, Trop bas = Problème." },
                        { title: "2. Croissance", text: "L'entreprise grandit-elle ? On vise >15% par an." },
                        { title: "3. Marge Nette", text: "L'entreprise est-elle profitable ? On vise >20%." },
                        { title: "4. Dette", text: "L'entreprise est-elle solvables ? On veut un Ratio Dette/Capitaux < 1.0." },
                        { title: "5. ROE", text: "L'efficacité du management. On cherche >15%." },
                        { title: "6. Liquidité", text: "Capacité à payer les factures court terme. On veut >1.5." },
                        { title: "7. Dividende", text: "Bonus. On cherche >2% (si applicable)." }
                    ]
                },
                {
                    title: "Outils Intelligents",
                    intro: "Des fonctionnalités pour accélérer votre analyse.",
                    items: [
                        { title: "Ampoule (Assistant IA)", text: "Cliquez sur l'ampoule jaune. Cela copie un 'Prompt magique'. Collez-le dans ChatGPT/Gemini et il vous donnera tous les chiffres à remplir en tableau." },
                        { title: "Ratio PEG", text: "Affiché en haut de la carte. Si < 1.0, c'est une aubaine (le Prix est faible par rapport à la Croissance). C'est le ratio préféré de Peter Lynch." },
                        { title: "Radar Visuel", text: "Un graphique en toile d'araignée montre si l'entreprise est équilibrée ou si elle a une faiblesse majeure (ex: forte croissance mais dette énorme)." },
                        { title: "Sauvegarder & Surveiller", text: "Bouton 'Sauvegarder' pour garder l'analyse en mémoire. Bouton 'Surveiller' (Oeil) pour l'ajouter à votre Watchlist dans le module Investissement." }
                    ]
                }
            ]
        },
        immo: {
            id: "immo",
            title: "Immobilier",
            desc: "Pour l'investisseur sérieux. Ne vous fiez pas au 'feeling', fiez-vous aux mathématiques. Ce module calcule la rentabilité réelle d'un immeuble en quelques secondes.",
            cards: [
                { title: "RNE (Revenu Net d'Exploitation)", text: "C'est le profit pur que l'immeuble génère avant même de penser à l'hypothèque. C'est le chiffre le plus fiable pour comparer deux immeubles.", example: "Un triplex génère 60 000$ de loyers. Les taxes, assurances et l'entretien coûtent 20 000$. Le RNE est de 40 000$." },
                { title: "Cap Rate (Taux de Capitalisation)", text: "La puissance du moteur de l'immeuble. Il mesure le rendement si vous l'achetiez 100% cash. Un Cap Rate élevé (>6%) est signe d'une bonne affaire.", example: "Prix demandé : 800 000$. RNE : 40 000$. Calcul : 40k / 800k = 5% de Cap Rate. (Un peu faible, essayez de négocier le prix à la baisse !)." },
                { title: "Cash-on-Cash (Rendement sur Mise de Fonds)", text: "C'est le vrai retour sur investissement (ROI) de vore argent. Combien de % votre mise de fonds vous rapporte-t-elle dans vos poches chaque année ?", example: "Vous avez mis 150 000$ de mise de fonds. Après avoir payé l'hypothèque, il vous reste 15 000$ de cashflow positif par an. 15k / 150k = 10% de Cash-on-Cash. C'est excellent (mieux que la bourse !)." },
                { title: "DSCR (Ratio de Couverture de la Dette)", text: "Le chiffre que votre banquier regarde en premier. Il mesure si l'immeuble génère assez d'argent pour payer l'hypothèque en toute sécurité.", example: "Votre hypothèque coûte 30 000$/an. Votre RNE est de 40 000$. DSCR = 40k / 30k = 1.33. La banque sera ravie car vous avez 33% de marge de sécurité." },
                { title: "MRB (Multiplicateur de Revenu Brut)", text: "Un ratio ultra-rapide pour filtrer les deals. Combien de fois les revenus bruts payez-vous pour l'immeuble ?", example: "Prix 500k, Revenus 50k. MRB = 10. Si le marché est à 14, c'est une aubaine. Si le marché est à 8, c'est trop cher." },
                { title: "Seuil de Rentabilité (Break-Even)", text: "Votre niveau de sécurité. Quel pourcentage des revenus est mangé par les dépenses et l'hypothèque ?", example: "Si le ratio est de 85%, cela signifie que vous encaissez 15% de profit, mais si les loyers baissent de 16%, vous perdez de l'argent." },
                { title: "LTV (Ratio Prêt-Valeur)", text: "L'effet de levier. Quelle part de l'immeuble est financée par la banque ?", example: "80% de LTV signifie que vous avez mis 20% de mise de fonds. Plus le LTV est haut, plus le levier est fort (mais plus le risque augmente)." },
                { title: "ROI Total (Rendement Global)", text: "La vision d'ensemble. Il inclut le Cashflow (argent poche) + le Remboursement de Capital (enrichissement latent).", example: "Vous gagnez 5000$ de cashflow, mais vos locataires ont aussi remboursé 7000$ de capital sur votre prêt. Votre enrichissement réel est de 12 000$." }
            ],
            button: "Voir le Guide Immobilier Complet"
        },
        perf: {
            id: "perf",
            title: "Performance (Calculateur)",
            desc: "Un auditeur impartial. Calculez le rendement précis d'un investissement entre deux dates.",
            items: [
                { title: "Objectif :", text: "Ce module n'est PAS votre portefeuille global (voir module Investissement). C'est une calculatrice isolée pour répondre à : 'Combien m'a rapporté cette action spécifique entre le 1er Janvier et le 31 Décembre ?'" },
                { title: "Indépendant :", text: "Aucun lien avec vos comptes enregistrés. Entrez simplement un montant de départ, un montant de fin, et deux dates." }
            ],
            subSections: [
                {
                    title: "Rendement Total vs CAGR",
                    intro: "Deux façons de voir la vérité :",
                    items: [
                        { title: "Rendement Total", text: "Simple et brut. 'J'ai fait +20%'. Utile pour les courtes durées.", example: "Acheté 100$, Vendu 120$ = +20%." },
                        { title: "CAGR (Taux Annuel)", text: "Le vrai juge pour le long terme. Il annualise votre rendement pour le rendre comparable à un compte d'épargne.", example: "Faire +20% c'est bien. Mais si cela vous a pris 10 ans, le CAGR est de seulement 1.8% par an (mauvais). Si cela a pris 6 mois, le CAGR est de 44% (génie)." }
                    ]
                },
                {
                    title: "Le Benchmark (S&P 500)",
                    intro: "L'épreuve de vérité.",
                    items: [
                        { title: "La Comparaison", text: "Entrez vos dates et activez le switch. Le logiciel va chercher l'historique RÉEL du S&P 500 sur cette période précise." },
                        { title: "Le Verdict", text: "Le graphique superpose votre performance (Ligne Verte) avec celle du marché américain (Ligne Grise). Si vous êtes au-dessus, vous avez battu le marché. Sinon, vous auriez gagné plus en ne faisant rien (ETF indiciel)." }
                    ]
                }
            ]
        },
        projections: {
            id: "projections",
            title: "Projections & Calculateurs",
            desc: "Ne devinez plus. Sachez exactement quand vous pourrez arrêter de travailler.",
            cards: [
                { title: "Valeur Future", desc: "La magie des intérêts composés.", example: "Combien vaudront mes 10 000$ dans 20 ans ?" },
                { title: "Objectif (Target)", desc: "Planification inversée.", example: "Je veux 1 million $. Combien dois-je mettre par mois ?" },
                { title: "Retrait (Rente)", desc: "Stratégie de décaissement.", example: "Mon million me permet-il de retirer 4000$/mois à vie ?" }
            ],
            subSections: [
                {
                    title: "Calculateur 1 : Valeur Future",
                    intro: "Pour ceux qui épargnent et veulent voir loin.",
                    items: [
                        { title: "Fréquence & Croissance", text: "Vous pouvez simuler des versements qui augmentent chaque année (ex: indexé à votre salaire)." },
                        { title: "Timing (Début/Fin)", text: "Détail subtil : Investir le 1er janvier rapporte plus que le 31 décembre. Changez 'Début de période' pour voir l'impact sur 30 ans." },
                        { title: "Inflation", text: "Ne l'oubliez pas ! 1 million dans 30 ans ne vaudra pas 1 million d'aujourd'hui. Regardez la ligne 'Pouvoir d'achat réel' pour la vérité." }
                    ]
                },
                {
                    title: "Calculateur 2 : Objectif d'Épargne",
                    intro: "Pour planifier un projet précis (Maison, Voyage, Retraite).",
                    items: [
                        { title: "La Réponse Claire", text: "L'outil vous donne le montant EXACT à épargner par jour/semaine/mois pour atteindre votre but." },
                        { title: " Ajustez le Taux", text: "Voyez comment obtenir un rendement de 7% au lieu de 5% réduit drastiquement l'effort d'épargne nécessaire." }
                    ]
                },
                {
                    title: "Calculateur 3 : Retraits (Rente)",
                    intro: "Le test ultime de la retraite.",
                    items: [
                        { title: "Ajustement Inflation", text: "Cocher cette case est vital. Cela simule que vous augmentez vos retraits chaque année pour payer le pain qui devient plus cher. Si vous ne le faites pas, votre niveau de vie baissera." },
                        { title: "Le Risque d'Épuisement", text: "Si le graphique tombe à zéro avant la fin, vous avez un problème. Réduisez vos retraits ou travaillez plus longtemps." }
                    ]
                }
            ]
        },
        params: {
            id: "params",
            title: "Paramètres & Outils",
            subSections: [
                {
                    title: "Données & Sécurité (Privacy First)",
                    intro: "Nexus Finance est unique : Vos données ne quittent JAMAIS votre ordinateur.",
                    items: [
                        { title: "Sauvegarde JSON (Backup)", text: "Puisque nous n'avons pas de serveur nuagique (pour votre sécurité), vous êtes responsable de vos données. Faites une sauvegarde ('Exporter') une fois par mois." },
                        { title: "Importer", text: "Permet de restaurer une sauvegarde ou de transférer vos données d'un PC à un Mac en quelques secondes." }
                    ]
                },
                {
                    title: "Personnalisation",
                    intro: "Adaptez l'outil à votre style.",
                    items: [
                        { title: "Devise & Affichage", text: "Changez entre CAD, USD, EUR. Cela change juste le symbole ($/€), le logiciel ne fait pas de conversion de taux de change." },
                        { title: "Mode Décimale (.00)", text: "Activez-le pour une précision maximale (ex: 1250.45$). Désactivez-le pour un look plus épuré et minimaliste (ex: 1250$). Idéal pour les gros montants où les centimes importent peu." },
                        { title: "Thème Sombre/Clair", text: "Cliquez sur la lune/soleil. Le mode Sombre est recommandé pour les sessions nocturnes intenses." },
                        { title: "Largeur du site", text: "Si vous avez un grand écran, choisissez '1600px' ou '100%'. Cela élargit l'interface pour plus de confort, évitant que tout soit tassé au centre." }
                    ]
                },
                {
                    title: "Zone de Danger (Réinitialisation)",
                    intro: "À utiliser avec précaution.",
                    items: [
                        { title: "Réinitialiser Module (Orange)", text: "Efface UNIQUEMENT les données de l'onglet actif (ex: effacer juste le Budget pour recommencer l'année). C'est safe." },
                        { title: "Réinitialisation Usine (ROUGE)", text: "L'arme atomique. Efface TOUT. Budget, Investissements, Historique. C'est irréversible (sauf si vous avez un backup JSON)." }
                    ]
                }
            ],
            items: [] // Garder vide pour compatibilité
        },
        glossaire: {
            id: "glossaire",
            title: "Glossaire",
            items: [
                { title: "BPA (EPS)", text: "Bénéfice Par Action." },
                { title: "C/B (P/E)", text: "Ratio Cours/Bénéfice. Indique si l'action est chère ou bon marché." },
                { title: "Compte Libre d'Impôt", text: "Compte dont les gains ne sont pas imposables (ex: CELI, Roth IRA, ISA)." },
                { title: "Compte Retraite", text: "Compte à impôt différé pour le long terme (ex: REER, 401k)." },
                { title: "PBR (ACB)", text: "Prix de Base Rajusté. Votre coût moyen fiscal." },
                { title: "Patrimoine Net", text: "Actifs - Passifs. Vraie richesse." }
            ]
        }
    }
};
