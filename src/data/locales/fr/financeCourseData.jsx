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
        id: 1, title: "1. Ratio Cours/Bénéfice (P/E)", color: pastelColors[0],
        biz: {
            formula: "Prix / Bénéfice par Action (BPA)",
            desc: "Combien vous payez pour 1$ de profit. Indique si l'action est chère (Croissance) ou bon marché (Valeur).",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux (pour la valeur)",
            example: "100$ (Prix) / 5$ (BPA) = 20x"
        },
        fam: {
            title: "Prix d'achat de la Famille",
            desc: "Imaginez qu'on veuille \"acheter\" votre famille. Si vous épargnez 10k par an, et qu'on vous achète pour 200k, le P/E est de 20.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux",
            example: "200 000$ / 10 000$ = 20x"
        }
    },
    {
        id: 2, title: "2. Croissance (CAGR)", color: pastelColors[1],
        biz: {
            formula: "((Final / Initial)^(1/n)) - 1",
            desc: "Vitesse à laquelle l'entreprise augmente ses profits ou ses ventes chaque année. (Taux de croissance annuel moyen).",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "((120 / 100)^(1/1)) - 1 = 20%"
        },
        fam: {
            title: "Augmentation de Salaire",
            desc: "Votre augmentation de salaire annuelle. Si vous passez de 50k à 55k, vous avez une croissance de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "(55k - 50k) / 50k = 10%"
        }
    },
    {
        id: 3, title: "3. Marge Nette (%)", color: pastelColors[2],
        biz: {
            formula: "Bénéfice Net / Revenus",
            desc: "% de chaque dollar de vente qui reste dans les poches de l'entreprise après toutes les dépenses.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "10 000$ / 100 000$ = 10%"
        },
        fam: {
            title: "Taux d'Épargne",
            desc: "Votre Taux d'Épargne. Si vous gagnez 4000$ et épargnez 400$, votre marge est de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "400$ / 4000$ = 10%"
        }
    },
    {
        id: 4, title: "4. Dette / Capitaux Propres", color: pastelColors[3],
        biz: {
            formula: "Dette Totale / Capitaux Propres",
            desc: "Niveau d'endettement. Si > 1.0, l'entreprise doit plus d'argent qu'elle n'en vaut comptablement.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux (< 1.0)",
            example: "200k$ / 100k$ = 2.0 (Risqué)"
        },
        fam: {
            title: "Ratio d'Endettement",
            desc: "(Hypothèque + Carte de Crédit) / Votre Patrimoine Net.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux",
            example: "300k$ (Dettes) / 100k$ (Net) = 3.0"
        }
    },
    {
        id: 5, title: "5. ROE (Retour sur Capitaux)", color: pastelColors[4],
        biz: {
            formula: "Profit Net / Capitaux Propres",
            desc: "Efficacité du management à générer du profit avec l'argent des actionnaires.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux (> 15%)",
            example: "15$ / 100$ = 15%"
        },
        fam: {
            title: "Efficacité des placements",
            desc: "Si vous avez 100k de patrimoine et qu'il génère 10k de gains/intérêts, votre ROE est de 10%.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "10 000$ / 100 000$ = 10%"
        }
    },
    {
        id: 6, title: "6. Liquidité (Current Ratio)", color: pastelColors[5],
        biz: {
            formula: "Actifs Court Terme / Passifs CT",
            desc: "Capacité à payer les factures immédiates. Si < 1.0, risque de manquer de liquidités.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux (> 1.5)",
            example: "200k$ / 100k$ = 2.0"
        },
        fam: {
            title: "Couverture Fonds d'Urgence",
            desc: "Votre Fonds d'Urgence / Vos factures mensuelles.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux (Sécurité)",
            example: "5000$ / 2500$ = 2.0"
        }
    },
    {
        id: 7, title: "7. Rendement Dividende (%)", color: pastelColors[6],
        biz: {
            formula: "Dividende Annuel / Prix Action",
            desc: "Le retour sur investissement en espèces (cash) versé par l'entreprise.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux (Max 10-12%)",
            example: "4$ / 100$ = 4%"
        },
        fam: {
            title: "Argent de Poche",
            desc: "L'argent de poche que vous vous versez pour vos loisirs à partir de vos investissements.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Plus de liberté",
            example: "50$ (Reçu) / 1000$ (Placé) = 5%"
        }
    },
    {
        id: 8, title: "8. Marge Brute", color: pastelColors[7],
        biz: {
            formula: "(Revenus - Coûts Directs) / Revenus",
            desc: "La rentabilité de base avant de payer les bureaux, la pub et les impôts.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "(100 - 60) / 100 = 40%"
        },
        fam: {
            title: "Taux de Combustion (Burn Rate)",
            desc: "Dépenses vitales mensuelles (Loyer + Nourriture). Combien de mois survivez-vous sans revenu ?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux (Dépenses)",
            example: "2000$ / mois (Dépenses vitales)"
        }
    },
    {
        id: 9, title: "9. Ratio Cours/Ventes (P/S)", color: pastelColors[8],
        biz: {
            formula: "Capitalisation / Chiffre d'Affaires",
            desc: "Utilisé pour évaluer les entreprises sans profit. Compare la valeur boursière au volume d'affaires.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux",
            example: "1M$ / 500k$ = 2.0x"
        },
        fam: {
            title: "ROI (Retour sur Investissement)",
            desc: "Investir 20k$ dans une cuisine qui augmente la valeur de la maison de 30k$.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "(30k - 20k) / 20k = 50%"
        }
    },
    {
        id: 10, title: "10. Ratio C/FT (P/CF)", color: pastelColors[9],
        biz: {
            formula: "Prix / Flux de Trésorerie par Action",
            desc: "Souvent plus fiable que le P/E. Indique la capacité réelle de l'entreprise à générer des espèces.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux",
            example: "100$ / 10$ = 10x"
        },
        fam: {
            title: "Fonds de Roulement",
            desc: "Votre coussin financier : Compte chèque + épargne accessible MOINS factures à venir.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux (Positif)",
            example: "2000$ (Banque) - 1500$ (Factures) = +500$"
        }
    },
    {
        id: 11, title: "11. Dette / Actifs Totaux", color: pastelColors[10],
        biz: {
            formula: "Dette Totale / Actifs Totaux",
            desc: "Quelle part de l'entreprise est financée par la banque ?",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux",
            example: "400k$ / 1M$ = 0.4"
        },
        fam: {
            title: "Flux de Trésorerie Libre",
            desc: "Votre épargne MOINS les réparations obligatoires de la maison. C'est le vrai argent disponible.",
            targetIcon: <ArrowTrendingUpIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus haut = Mieux",
            example: "5000$ (Épargne) - 2000$ (Toit) = 3000$"
        }
    },
    {
        id: 12, title: "12. Ratio de Distribution", color: pastelColors[11],
        biz: {
            formula: "Dividendes Versés / Profit Net",
            desc: "La part des profits redonnée aux actionnaires. Si > 80%, le dividende est peut-être à risque.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux (Durable)",
            example: "2$ (Div) / 4$ (BPA) = 50%"
        },
        fam: {
            title: "Ratio de Distribution Personnel",
            desc: "% de votre surplus utilisé pour vous gâter (Restos) au lieu de réinvestir.",
            targetIcon: <ArrowTrendingDownIcon style={{ width: '16px', color: 'var(--success-color)' }} />,
            targetText: "Plus bas = Mieux (Richesse future)",
            example: "400$ (Restos) / 1000$ (Surplus) = 40%"
        }
    }
];

export const financeCourseData = {
    sidebar: {
        title: "Guide Finance 101",
        subtitle: "Maîtriser vos finances personnelles de A à Z",
        parts: [
            { title: "Introduction", items: [{ id: 'intro', label: 'Pourquoi ce guide ?' }] },
            { title: "Partie 1 : Les Fondations", items: [{ id: 'chap1', label: "1. Le Bon État d'Esprit" }, { id: 'chap2', label: "2. Le Budget, Votre GPS" }, { id: 'chap3', label: "3. Actifs vs Passifs" }, { id: 'chap4', label: "4. Le Fonds d'Urgence" }, { id: 'chap5', label: "5. Gérer ses Dettes" }] },
            { title: "Partie 2 : L'Investissement", items: [{ id: 'chap6', label: "6. Pourquoi Investir ?" }, { id: 'chap7', label: "7. L'Intérêt Composé" }, { id: 'chap8', label: "8. Risque/Rendement" }, { id: 'chap9', label: "9. Types de Placements" }, { id: 'chap10', label: "10. Types de Comptes" }] },
            { title: "Partie 3 : La Bourse en Détail", items: [{ id: 'chap11', label: "11. L'Action" }, { id: 'chap12', label: "12. Analyse Fondamentale" }, { id: 'chap13', label: "13. Ratios Clés" }, { id: 'chap14', label: "14. Dividendes" }, { id: 'chap15', label: "15. Bâtir son Portefeuille" }, { id: 'chap16', label: "16. Psychologie" }] },
            { title: "Partie 4 : Vos Objectifs", items: [{ id: 'chap17', label: "17. Objectifs" }, { id: 'chap18', label: "18. Retraite" }] },
            { title: "Partie 5 : Stratégies Avancées", items: [{ id: 'chap19', label: "19. Fond. vs Tech." }, { id: 'chap20', label: "20. Ordres de Bourse" }, { id: 'chap21', label: "21. Fiscalité (PCAA)" }, { id: 'chap22', label: "22. Rééquilibrage" }, { id: 'chap23', label: "23. Pièges Psychologiques" }] },
            { title: "Annexe", items: [{ id: 'chap24', label: "24. Glossaire" }, { id: 'bonus_psych', label: "Bonus: Psychologie" }] }
        ]
    },
    sections: {
        intro: {
            id: 'intro',
            title: "Introduction: Pourquoi ce guide ?",
            content: [
                { type: 'p', text: "Vous avez entre les mains un outil puissant : <strong>Nexus Finance Pro</strong>. C'est une calculatrice sophistiquée, un gestionnaire de portefeuille précis et un planificateur de dettes stratégique, tout en un." },
                { type: 'p', text: "Mais un outil, aussi puissant soit-il, n'est efficace que si l'artisan sait comment et pourquoi l'utiliser." },
                { type: 'p', text: "Ce guide est le <strong>\"Pourquoi\"</strong>. L'application Nexus Finance Pro est le <strong>\"Comment\"</strong>." },
                { type: 'p', text: "Vous n'avez pas besoin d'être un expert pour utiliser Nexus Finance Pro, mais comprendre les concepts fondamentaux transformera votre expérience. Vous ne cliquerez plus seulement sur des boutons ; vous exécuterez un plan. Gardez toutefois en tête que même si cet outil est très puissant, il est conçu pour vous assister : pour valider vos stratégies et obtenir des conseils personnalisés, l'accompagnement d'un professionnel certifié demeure un choix judicieux." },
                {
                    type: 'box', style: 'info', title: 'Ce que vous allez apprendre', content: [
                        { type: 'p', text: "Ce guide vous enseignera les principes intemporels de la gestion de l'argent. Nous couvrirons :" },
                        { type: 'ul', items: ["<strong>La Psychologie :</strong> Comment maîtriser vos émotions pour éviter les erreurs coûteuses.", "<strong>Les Fondations :</strong> Bâtir un budget solide, créer un fonds d'urgence et attaquer vos dettes.", "<strong>L'Investissement :</strong> Comprendre pourquoi et comment faire travailler votre argent pour vous.", "<strong>La Bourse :</strong> Démystifier les actions, les FNB et les ratios financiers pour investir avec confiance.", "<strong>Les Stratégies Avancées :</strong> Des concepts de niveau intermédiaire pour optimiser votre fiscalité et la gestion de votre portefeuille."] },
                        { type: 'p', text: "À la fin de ce guide, chaque module de Nexus Finance Pro ne sera plus un simple onglet, mais une arme dans votre arsenal pour bâtir votre indépendance financière." }
                    ]
                }
            ]
        },
        chap1: {
            id: 'chap1',
            title: "Chapitre 1: Le Bon État d'Esprit",
            content: [
                { type: 'p', text: "Bienvenue dans ce guide ! Avant de parler de chiffres, de ratios ou de stratégies, nous devons parler de l'outil le plus puissant à votre disposition : votre état d'esprit." },
                { type: 'p', text: "La gestion financière n'est pas une question de chance. Ce n'est pas un secret réservé à une élite. C'est un ensemble d'habitudes, de décisions et de systèmes que n'importe qui peut apprendre et appliquer." },
                { type: 'p', text: "Le plus grand obstacle n'est pas le manque d'argent, c'est la psychologie. C'est la peur de regarder ses comptes, la procrastination, ou le sentiment d'être \"nul avec les chiffres\"." },
                {
                    type: 'box', style: 'warning', title: 'Les Mythes à Déboulonner', content: [
                        { type: 'ul', items: ["<strong>Mythe 1: \"Il faut de l'argent pour faire de l'argent.\"</strong><br>Faux. Il faut des habitudes pour faire de l'argent. Une personne qui épargne 100 $ par mois avec un plan battra toujours une personne qui gagne 10 000 $ par mois mais dépense 10 100 $.", "<strong>Mythe 2: \"Investir, c'est comme jouer au casino.\"</strong><br>Faux. La spéculation à court terme (day trading) s'apparente au jeu. L'investissement à long terme, basé sur l'analyse de la santé des entreprises, est une participation à la croissance économique mondiale. C'est posséder une part d'une vraie entreprise.", "<strong>Mythe 3: \"Je suis trop jeune / trop vieux pour commencer.\"</strong><br>Faux. Si vous êtes jeune, votre plus grand atout est le temps (voir Chapitre 7 sur l'intérêt composé). Si vous êtes plus âgé, votre plus grand atout est (souvent) un revenu plus élevé et la discipline. Le meilleur moment pour commencer était il y a 10 ans. Le deuxième meilleur moment, c'est aujourd'hui."] }
                    ]
                },
                { type: 'p', text: "<strong>Votre Objectif Principal :</strong> L'indépendANCE financière. Ce n'est pas devenir riche pour acheter une voiture de luxe. C'est avoir suffisamment d'actifs (investissements) qui travaillent pour vous, afin que vous n'ayez plus besoin de travailler pour payer vos factures. Le travail devient un choix, pas une obligation." }
            ]
        },
        chap2: {
            id: 'chap2',
            title: "Chapitre 2: Le Budget, Votre GPS",
            content: [
                { type: 'p', text: "Vous ne pouvez pas atteindre une destination si vous ne savez pas où vous êtes. Le budget est votre \"Vous êtes ici\" sur la carte financière. Ce n'est pas une prison conçue pour vous empêcher de dépenser ; c'est un outil conçu pour vous donner la permission de dépenser sans culpabilité." },
                { type: 'p', text: "Un budget répond à une seule question : <strong>Où va mon argent ?</strong>" },
                {
                    type: 'box', style: 'concept', title: 'Le Budget Zéro', content: [
                        { type: 'p', text: "La méthode la plus efficace est le \"Budget Zéro\". L'idée est simple : à la fin du mois, la différence entre vos revenus et vos sorties d'argent doit être de zéro. Cela ne veut pas dire qu'il ne vous reste rien ! Cela veut dire que chaque dollar a reçu une mission." },
                        { type: 'p', text: "<code>Revenus - Dépenses - Épargne - Investissements = 0 $</code>" },
                        { type: 'p', text: "Si vous gagnez 3000 $ et que vous avez 2500 $ de dépenses, il vous reste 500 $. Avec un budget zéro, vous décidez à l'avance ce que ces 500 $ vont faire : \"200 $ iront dans le fonds d'urgence\", \"100 $ iront dans le CELI\", \"200 $ iront dans l'épargne pour les vacances\"." }
                    ]
                },
                { type: 'p', text: "<strong>Passez à l'action :</strong> Utilisez le <strong>Module Budget</strong> de Nexus Finance Pro. Listez TOUS vos revenus et TOUTES vos dépenses, même le café à 3 $. Utilisez les fréquences (annuel, mensuel) pour que l'outil calcule votre flux de trésorerie mensuel exact. C'est la première étape de tout votre plan." }
            ]
        },
        chap3: {
            id: 'chap3',
            title: "Chapitre 3: Actifs vs Passifs",
            content: [
                { type: 'p', text: "C'est le concept le plus important de la finance personnelle, popularisé par Robert Kiyosaki dans \"Père Riche, Père Pauvre\"." },
                {
                    type: 'box', style: 'info', title: 'La Définition Simple', content: [
                        { type: 'p', text: "Un <strong>ACTIF</strong> met de l'argent dans votre poche." },
                        { type: 'p', text: "Un <strong>PASSIF</strong> sort de l'argent de votre poche." }
                    ]
                },
                { type: 'p', text: "C'est aussi simple que cela. L'objectif de votre vie financière est d'utiliser vos revenus pour acheter des actifs, afin que ces actifs génèrent de nouveaux revenus pour acheter encore plus d'actifs." },
                {
                    type: 'grid', items: [
                        { title: "Exemples d'Actifs", text: "Une action qui verse un dividende. Un FNB qui prend de la valeur. Un immeuble locatif rentable." },
                        { title: "Exemples de Passifs", text: "Un prêt automobile. Solde de carte de crédit. Un prêt étudiant." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Le piège de la résidence principale', content: [
                        { type: 'p', text: "\"Ma maison est mon plus gros actif !\" Vraiment ? Chaque mois, elle sort de l'argent de votre poche (hypothèque, taxes, assurances, réparations). Selon la définition stricte, votre résidence principale est un passif." },
                        { type: 'p', text: "Elle peut devenir un actif le jour où vous la vendez (si elle a pris de la valeur), ou si vous louez le sous-sol (elle génère un revenu). Mais ne confondez pas un passif (qui vous coûte de l'argent) avec un investissement." }
                    ]
                },
                { type: 'p', text: "Votre <strong>Patrimoine Net</strong> (ou Valeur Nette) est la mesure de votre santé financière. C'est ce que vous voyez sur votre Tableau de Bord." },
                { type: 'p', text: "<strong>Patrimoine Net = Total de vos Actifs - Total de vos Passifs</strong>. Votre but est de faire augmenter ce chiffre, mois après mois, année après année." }
            ]
        },
        chap4: {
            id: 'chap4',
            title: "Chapitre 4: Le Fonds d'Urgence",
            content: [
                { type: 'p', text: "La vie est imprévisible. La voiture tombe en panne. Le toit se met à couler. Vous perdez votre emploi. La différence entre un imprévu et une catastrophe financière s'appelle un fonds d'urgence." },
                { type: 'p', text: "Un fonds d'urgence est votre bouclier. C'est de l'argent mis de côté, exclusivement pour les urgences. Cet argent n'est pas investi, il n'est pas là pour \"performer\". Il est là pour être liquide, accessible et ennuyeux." },
                {
                    type: 'box', style: 'info', title: 'Combien ?', content: [
                        { type: 'p', text: "L'objectif standard est de détenir <strong>3 à 6 mois</strong> de dépenses de subsistance." },
                        { type: 'p', text: "Calculez combien vous devez dépenser chaque mois pour vivre (loyer/hypothèque, nourriture de base, électricité, transport minimum). Si ce montant est de 2 500 $, votre fonds d'urgence devrait se situer entre 7 500 $ et 15 000 $." }
                    ]
                },
                { type: 'p', text: "<strong>Où le placer ?</strong> Dans un endroit sûr et accessible, mais pas trop accessible (pas votre compte chèque de tous les jours). Un compte d'épargne à intérêt élevé (HISA) est idéal. Il est séparé de vos opérations quotidiennes, mais vous pouvez y accéder en 1 ou 2 jours." },
                { type: 'p', text: "<strong>La priorité absolue :</strong> Avant de payer vos dettes (sauf le minimum) et avant d'investir un seul dollar en bourse, bâtissez un \"mini-fonds\" d'urgence de 1 000 $. Cet argent vous évitera de vous endetter davantage la prochaine fois qu'un pneu crève." }
            ]
        },
        chap5: {
            id: 'chap5',
            title: "Chapitre 5: Gérer ses Dettes",
            content: [
                { type: 'p', text: "Il existe deux types de dettes : les \"bonnes\" dettes et les \"mauvaises\" dettes." },
                { type: 'ul', items: ["<strong>Bonnes dettes (Dettes d'investissement) :</strong> Dettes utilisées pour acheter un actif qui prend de la valeur. Ex: Une hypothèque (pour acheter un bien immobilier), un prêt étudiant (pour investir en vous-même).", "<strong>Mauvaises dettes (Dettes de consommation) :</strong> Dettes utilisées pour acheter un passif qui perd de la valeur. Ex: Un prêt auto, le solde d'une carte de crédit pour des vacances ou un restaurant."] },
                { type: 'p', text: "Votre objectif est de rembourser les mauvaises dettes le plus vite possible. Pour cela, il existe deux stratégies principales, que vous pouvez simuler dans le Module Plan." },
                {
                    type: 'box', style: 'info', title: 'Stratégie 1 : L\'Avalanche', content: [
                        { type: 'p', text: "Vous listez toutes vos dettes par ordre de taux d'intérêt décroissant. Vous mettez tout l'argent supplémentaire sur la dette avec le taux le plus élevé." },
                        { type: 'p', text: "<strong>Avantage :</strong> C'est la méthode qui vous fera économiser le plus d'argent en intérêts. C'est la plus efficace mathématiquement." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Stratégie 2 : La Boule de Neige', content: [
                        { type: 'p', text: "Vous listez toutes vos dettes par ordre de solde croissant (du plus petit au plus grand). Vous attaquez la plus petite dette avec tout votre argent supplémentaire." },
                        { type: 'p', text: "<strong>Avantage :</strong> Vous obtenez des \"victoires\" rapides. Rembourser une petite dette crée un élan psychologique et une motivation immenses pour continuer." }
                    ]
                },
                { type: 'p', text: "Quelle méthode choisir ? Celle qui vous gardera motivé. Le Module Plan vous montrera l'impact des deux." }
            ]
        },
        chap6: {
            id: 'chap6',
            title: "Chapitre 6: Pourquoi Investir ?",
            content: [
                { type: 'p', text: "Si vous avez déjà un budget et un fonds d'urgence, félicitations ! Vous avez terminé le \"mode défense\". Il est temps de passer en \"mode attaque\" : l'investissement." },
                { type: 'p', text: "L'épargne (mettre de l'argent dans un compte) vous protège. L'investissement (acheter des actifs) vous enrichit." },
                {
                    type: 'box', style: 'warning', title: 'Votre Ennemi No. 1 : L\'Inflation', content: [
                        { type: 'p', text: "L'inflation est l'augmentation générale des prix au fil du temps. Si l'inflation est de 3% par an, cela signifie que 100 $ aujourd'hui n'achètera que 97 $ de biens et services l'année prochaine. Votre argent <strong>perd</strong> de sa valeur s'il dort." },
                        { type: 'p', text: "Si vous laissez 10 000 $ dans un compte chèque (0%) pendant 25 ans avec une inflation moyenne de 2.5%, votre \"pouvoir d'achat\" ne sera plus que de 5 394 $. Vous aurez perdu près de la moitié de votre argent, sans rien faire." }
                    ]
                },
                { type: 'p', text: "L'objectif de l'investissement est simple : obtenir un rendement supérieur à l'inflation pour que votre pouvoir d'achat augmente avec le temps." },
                { type: 'p', text: "Nexus Finance Pro vous aide à voir cet impact. Dans les modules Valeur Future et Retrait, l'outil calcule toujours la \"Valeur Nominale\" (le montant total) et le \"Pouvoir d'Achat Réel\" (ce que cet argent vaudra vraiment après inflation)." }
            ]
        },
        chap7: {
            id: 'chap7',
            title: "Chapitre 7: L'Intérêt Composé",
            content: [
                { type: 'p', text: "Albert Einstein aurait dit que l'intérêt composé est \"la huitième merveille du monde\". C'est le moteur de la création de richesse." },
                { type: 'p', text: "L'intérêt composé, c'est simplement gagner de l'intérêt sur votre intérêt. C'est un effet boule de neige." },
                {
                    type: 'box', style: 'success', title: 'Exemple Simple', content: [
                        { type: 'ul', items: ["Année 1 : Vous gagnez 8% de 10 000 $ (800 $). Solde : 10 800 $.", "Année 2 : Vous gagnez 8% de 10 800 $ (864 $). Solde : 11 664 $.", "Année 3 : Vous gagnez 8% de 11 664 $ (933 $). Solde : 12 597 $."] },
                        { type: 'p', text: "Votre argent travaille pour vous, et les \"employés\" (vos gains) commencent eux-mêmes à travailler et à avoir des enfants !" }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'Le Facteur Temps', content: [
                        { type: 'p', text: "La variable la plus importante est le temps. Regardez la différence :" },
                        { type: 'p', text: "<strong>Alex (25 à 35 ans) :</strong> Investit 5 000$/an pendant 10 ans (Total 50k$).<br><strong>Ben (35 à 65 ans) :</strong> Investit 5 000$/an pendant 30 ans (Total 150k$)." },
                        { type: 'p', text: "À 65 ans (8% rendement) :<br>Alex (qui n'a versé que 50k$) aura : <strong>1 028 000 $</strong><br>Ben (qui a versé 150k$) aura : <strong>611 000 $</strong>" },
                        { type: 'p', text: "Alex gagne, simplement parce qu'il a commencé 10 ans plus tôt. Ses 50 000 $ ont eu plus de temps pour \"composer\"." }
                    ]
                },
                { type: 'p', text: "<strong>Passez à l'action :</strong> Allez dans le Module Valeur Future. Entrez votre capital initial, vos versements mensuels, et un rendement (ex: 8%). Regardez ce que le graphique vous montre sur 30 ans. Vous serez stupéfait par la courbe exponentielle." }
            ]
        },
        chap8: {
            id: 'chap8',
            title: "Chapitre 8: Le Spectre Risque/Rendement",
            content: [
                { type: 'p', text: "Il n'y a pas de repas gratuit en finance. La règle d'or est la suivante : <strong>Plus le rendement potentiel est élevé, plus le risque de perte est élevé.</strong>" },
                { type: 'p', text: "Votre travail en tant qu'investisseur n'est pas d'éviter le risque, mais de le gérer." },
                {
                    type: 'box', style: 'info', title: 'Le Spectre', content: [
                        { type: 'ul', items: ["<strong>Risque Faible / Rendement Faible :</strong> Comptes d'épargne, CPG, Obligations gouv. Capital garanti, mais peine à battre l'inflation.", "<strong>Risque Moyen / Rendement Moyen :</strong> FNB d'indices larges (S&P 500, TSX), actions \"blue chip\".", "<strong>Risque Élevé / Rendement Élevé :</strong> Actions individuelles, petites entreprises, crypto-monnaies."] }
                    ]
                },
                { type: 'p', text: "<strong>Qu'est-ce que le Risque ?</strong> Le risque, c'est la <strong>volatilité</strong>. C'est la vitesse à laquelle le prix monte et descend. Si votre portefeuille perd 30% en 3 mois, allez-vous paniquer et vendre ? Il est crucial de vous connaître avant que la baisse n'arrive." }
            ]
        },
        chap9: {
            id: 'chap9',
            title: "Chapitre 9: Les Types de Placements",
            content: [
                { type: 'p', text: "Voici les \"blocs Lego\" de base que vous pouvez utiliser pour bâtir votre portefeuille." },
                { type: 'ul', items: ["<strong>1. Les Actions (Stocks) :</strong> Acheter une action (`AAPL`, `TD`), c'est acheter une petite part de l'entreprise. Vous gagnez via la Plus-value (prix monte) et les Dividendes (part des profits).", "<strong>2. Les Obligations (Bonds) :</strong> C'est prêter de l'argent à un gouvernement ou une entreprise pour un intérêt fixe. Généralement moins risqué que les actions.", "<strong>3. Les Fonds Négociés en Bourse (FNB / ETF) :</strong> C'est souvent le meilleur point de départ. Un FNB est un \"panier\" qui contient des centaines d'actions ou d'obligations, mais qui s'achète comme une seule action."] },
                { type: 'p', text: "Avec un FNB (ex: `VFV` pour le S&P 500), vous possédez une minuscule partie des 500 plus grosses entreprises américaines. C'est la diversification instantanée à très faible coût." }
            ]
        },
        chap10: {
            id: 'chap10',
            title: "Chapitre 10: Les Types de Comptes (Canada)",
            content: [
                { type: 'p', text: "Avant d'acheter un investissement, vous devez choisir le \"contenant\" fiscal. CELI et REER ne sont <strong>pas</strong> des investissements, ce sont des comptes avec des avantages fiscaux." },
                {
                    type: 'box', style: 'success', title: '1. CELI (Compte d\'Épargne Libre d\'Impôt)', content: [
                        { type: 'p', text: "Vous investissez de l'argent après impôt (net). <strong>Avantage :</strong> TOUS les gains (plus-values, dividendes) sont <strong>100% libres d'impôt</strong>, à vie." },
                        { type: 'p', text: "<strong>Retraits :</strong> Libres d'impôt. L'espace de cotisation revient l'année suivante. Idéal pour : Fonds d'urgence, Mise de fonds, Retraite." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. REER (Régime Enregistré d\'Épargne-Retraite)', content: [
                        { type: 'p', text: "Vous investissez de l'argent avant impôt. <strong>Avantage :</strong> Le montant cotisé est déduit de votre revenu imposable (gros remboursement d'impôt)." },
                        { type: 'p', text: "<strong>Retraits :</strong> Imposables à la retraite. Idéal pour : Épargne-retraite à long terme si revenus élevés." }
                    ]
                },
                { type: 'p', text: "<strong>3. Compte Non Enregistré :</strong> Compte de base, sans avantage fiscal. Imposable annuellement sur les dividendes. Les gains en capital (profits) sont imposables uniquement l'année où vous vendez." },
                { type: 'p', text: "<strong>La Stratégie Gagnante :</strong> 1. Maximiser le CELI. 2. Maximiser le REER. 3. Investir en Non Enregistré (Cash)." }
            ]
        },
        chap10_intl: {
            id: 'chap10',
            title: "Chapitre 10: Les Types de Comptes (International)",
            content: [
                { type: 'p', text: "Partout dans le monde, les gouvernements offrent des incitatifs fiscaux pour encourager l'épargne. Bien que les noms changent (401k aux USA, ISA au UK, Assurance-Vie en France), les concepts restent les mêmes." },
                {
                    type: 'box', style: 'success', title: '1. Comptes Libres d\'Impôt (Tax-Free)', content: [
                        { type: 'p', text: "Vous investissez de l'argent 'après impôt' (net). <strong>Avantage :</strong> Les gains futurs sont 100% libres d'impôt." },
                        { type: 'p', text: "<strong>Exemples :</strong> Roth IRA (USA), ISA (UK), CELI (Canada)." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: '2. Comptes à Impôt Différé (Tax-Deferred)', content: [
                        { type: 'p', text: "Vous investissez de l'argent 'avant impôt' (brut). <strong>Avantage :</strong> Vous obtenez une déduction fiscale immédiate, mais payez l'impôt au retrait." },
                        { type: 'p', text: "<strong>Exemples :</strong> 401k / Traditional IRA (USA), REER (Canada)." }
                    ]
                },
                { type: 'p', text: "<strong>3. Compte Ordinaire (Taxable) :</strong> Aucun avantage fiscal. Vous payez de l'impôt sur les dividendes et les gains en capital chaque année." }
            ]
        },
        chap11: {
            id: 'chap11',
            title: "Chapitre 11: Qu'est-ce qu'une Action ?",
            content: [
                { type: 'p', text: "Acheter une action, c'est acheter une part de propriété d'une entreprise. Si une entreprise a 1 000 000 d'actions et que vous en achetez 100, vous possédez 0.01% de cette entreprise." },
                { type: 'p', text: "Vous êtes maintenant un propriétaire. Vous avez droit à une part des profits (les dividendes)." },
                { type: 'p', text: "<strong>Le Marché Boursier :</strong> C'est un grand marché public où le prix est déterminé par l'offre et la demande. Si les gens anticipent des profits futurs élevés (ex: nouvel iPhone), la demande augmente et le prix monte." }
            ]
        },
        chap12: {
            id: 'chap12',
            title: "Chapitre 12: Analyse Fondamentale",
            content: [
                { type: 'p', text: "L'analyse fondamentale est l'art d'évaluer la santé financière et la valeur réelle d'une entreprise. L'objectif est de trouver des entreprises extraordinaires à un prix ordinaire." },
                { type: 'p', text: "On regarde les comptes :" },
                { type: 'ul', items: ["<strong>Bilan :</strong> Ce que l'entreprise possède (actifs) et ce qu'elle doit (dettes).", "<strong>État des résultats :</strong> Revenus, dépenses et profits.", "<strong>Flux de trésorerie :</strong> L'argent qui entre et qui sort réellement."] },
                { type: 'p', text: "Le <strong>Module Analyse Action</strong> de Nexus Pro est un outil d'analyse fondamentale simplifié." }
            ]
        },
        chap13: {
            id: 'chap13',
            title: "Chapitre 13: Comprendre les Ratios Clés",
            content: [
                { type: 'p', text: "Les ratios sont des raccourcis pour comprendre la santé d'une entreprise sans lire 100 pages de rapports. Nexus Pro utilise ces ratios pour son \"Nexus Score\"." },
                { type: 'p', text: "<em>Note : Pour les ratios immobiliers (LTV, Cap Rate), voir le Guide Immobilier.</em>" },
                {
                    type: 'box', style: 'info', title: '1. Valorisation', content: [
                        { type: 'ul', items: ["<strong>Ratio C/B (P/E) :</strong> Prix payé pour 1$ de profit. (20x = Vous payez 20$ pour 1$ de bénéfice).", "<strong>Ratio PEG :</strong> P/E divisé par la Croissance. Si < 1.0, l'action est potentiellement sous-évaluée."] }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Rentabilité', content: [
                        { type: 'ul', items: ["<strong>Marge Nette :</strong> % de profit pur sur chaque vente.", "<strong>ROE (Rendement des Capitaux Propres) :</strong> Efficacité à utiliser l'argent des actionnaires. > 15% est excellent."] }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Santé Financière', content: [
                        { type: 'ul', items: ["<strong>Dette / Capitaux Propres :</strong> Mesure l'endettement. Si > 1.0, vigilance.", "<strong>Ratio de Liquidité :</strong> Capacité à payer les factures à court terme."] }
                    ]
                },
                { type: 'p', text: "Pour bien comprendre les ratios boursiers, il est utile de les comparer à votre propre gestion financière personnelle. Une entreprise n'est rien d'autre qu'un ménage à grande échelle. Ci-dessous, nous comparons chaque concept 'Business' à son équivalent 'Famille'." },
                { type: 'comparison_ratios' }
            ]
        },
        chap14: {
            id: 'chap14',
            title: "Chapitre 14: L'Investissement Dividendes",
            content: [
                { type: 'p', text: "Stratégie axée sur la génération de revenu passif. Vous êtes payé pour attendre. C'est comme posséder un verger : vous ne voulez pas vendre les arbres, vous voulez récolter les pommes." },
                { type: 'p', text: "<strong>Le Rendement (Yield) :</strong> (Dividende Annuel / Prix Action) * 100. Si une action coûte 100 $ et verse 4 $, le rendement est de 4%." },
                {
                    type: 'box', style: 'warning', title: 'Le Piège à Rendement (> 12%)', content: [
                        { type: 'p', text: "Règle Nexus : Tout rendement > 12% reçoit un score de 0. Pourquoi ?" },
                        { type: 'p', text: "Si le prix d'une action s'effondre (parce que l'entreprise va mal), le rendement monte mécaniquement. Un rendement de 15% crie souvent que le dividende va être coupé bientôt. C'est un \"Yield Trap\"." }
                    ]
                },
                { type: 'p', text: "<strong>La Croissance du Dividende :</strong> La vraie magie, c'est d'acheter des entreprises qui <strong>augmentent</strong> leur dividende chaque année (les Aristocrates). Dans le Module Investissement, vous pouvez suivre vos revenus passifs séparément." }
            ]
        },
        chap15: {
            id: 'chap15',
            title: "Chapitre 15: Bâtir son Portefeuille",
            content: [
                { type: 'p', text: "Votre portefeuille est la collection de tous vos investissements. Le construire demande deux choses : Diversification et Allocation." },
                {
                    type: 'box', style: 'concept', title: 'La Diversification', content: [
                        { type: 'p', text: "Ne mettez pas tous vos œufs dans le même panier. Diversifiez par <strong>classe d'actifs</strong> (Actions/Obligations), par <strong>secteur</strong> (Techno, Banques, Énergie) et par <strong>géographie</strong> (Canada, USA, Monde). Les FNB offrent cela instantanément." }
                    ]
                },
                {
                    type: 'box', style: 'info', title: 'L\'Allocation d\'Actifs', content: [
                        { type: 'p', text: "C'est le % de votre argent en Actions (Risqué/Croissance) vs Obligations (Sûr/Stabilité)." },
                        { type: 'ul', items: ["<strong>Jeune (20-35 ans) :</strong> Agressif. Ex: 90% Actions / 10% Obligations.", "<strong>Milieu (35-50 ans) :</strong> Équilibré. Ex: 70% Actions / 30% Obligations.", "<strong>Retraite :</strong> Prudent. Ex: 40% Actions / 60% Obligations."] }
                    ]
                }
            ]
        },
        chap16: {
            id: 'chap16',
            title: "Chapitre 16: La Psychologie de l'Investisseur",
            content: [
                { type: 'p', text: "Investir est simple, mais pas facile. Votre pire ennemi, c'est vous (vos émotions)." },
                { type: 'ul', items: ["<strong>La Cupidité (FOMO) :</strong> Acheter quand tout monte, au sommet, par peur de manquer le bateau. Résultat : On achète cher.", "<strong>La Peur :</strong> Vendre quand tout s'effondre. Résultat : On vend bas et on verrouille une perte permanente."] },
                {
                    type: 'box', style: 'success', title: 'La Solution : Le DCA', content: [
                        { type: 'p', text: "Le <strong>Dollar-Cost Averaging</strong> (Achats périodiques par sommes fixes). Investissez 500 $ par mois, quoi qu'il arrive, automatiquement." },
                        { type: 'p', text: "Quand le marché baisse, vos 500 $ achètent PLUS d'actions. Quand il monte, ils en achètent MOINS. Vous profitez des baisses sans émotions." }
                    ]
                },
                { type: 'p', text: "<strong>Pour aller plus loin :</strong> Un chapitre bonus dédié entièrement à la <strong>Psychologie de l'Argent</strong> (basé sur le livre de Morgan Housel) a été ajouté à la fin de ce guide. Ne le manquez pas !" }
            ]
        },
        chap17: {
            id: 'chap17',
            title: "Chapitre 17: Définir ses Objectifs",
            content: [
                { type: 'p', text: "On n'épargne pas pour épargner. On épargne pour un but. Un bon objectif est <strong>S.M.A.R.T.</strong> : Spécifique, Mesurable, Atteignable, Réaliste, Temporel." },
                { type: 'p', text: "Mauvais : \"Je veux être riche\".<br>Bon : \"Je veux 50 000 $ pour une mise de fonds d'ici 3 ans.\"" },
                { type: 'p', text: "<strong>Passez à l'action :</strong> Le <strong>Module Objectif</strong> calcule exactement combien vous devez épargner par mois pour atteindre vos cibles." }
            ]
        },
        chap18: {
            id: 'chap18',
            title: "Chapitre 18: Planifier sa Retraite",
            content: [
                { type: 'p', text: "C'est le moment où votre portefeuille paie votre style de vie." },
                {
                    type: 'box', style: 'info', title: 'La Règle des 4%', content: [
                        { type: 'p', text: "Historiquement, vous pouvez retirer <strong>4%</strong> de votre portefeuille chaque année sans tomber à court d'argent pendant 30 ans." },
                        { type: 'p', text: "Calcul rapide du montant nécessaire : <strong>Dépenses Annuelles Désirées x 25</strong>." },
                        { type: 'p', text: "Ex: Pour vivre avec 40 000 $/an : 40 000 x 25 = <strong>1 000 000 $</strong>." }
                    ]
                },
                { type: 'p', text: "Utilisez le <strong>Module Retrait</strong> pour simuler la durée de vie de votre capital selon différents scénarios." }
            ]
        },
        chap19: {
            id: 'chap19',
            title: "Chapitre 19: Analyse Fondamentale vs Technique",
            content: [
                { type: 'p', text: "Duel de philosophies." },
                { type: 'ul', items: ["<strong>Analyse Fondamentale (L'Investisseur) :</strong> Question : \"Est-ce une bonne entreprise ?\" Outils : Bilans, Ratios, Qualité du management. Objectif : Long terme.", "<strong>Analyse Technique (Le Trader) :</strong> Question : \"Où va le prix ?\" Outils : Graphiques, Moyennes mobiles, RSI. Objectif : Court terme (Timing)."] },
                { type: 'p', text: "<strong>Notre avis :</strong> Pour la création de richesse, l'analyse fondamentale est reine. L'analyse technique peut aider pour le timing, mais ne doit jamais être la seule base." }
            ]
        },
        chap20: {
            id: 'chap20',
            title: "Chapitre 20 : Les Ordres de Bourse (Le Guide Complet)",
            content: [
                { type: 'p', text: "Savoir quoi acheter est une chose, savoir comment l'acheter en est une autre. Voici les 5 types d'ordres essentiels pour contrôler vos prix d'entrée et de sortie." },
                {
                    type: 'box', style: 'info', title: '1. Ordre au Marché (Market Order)', content: [
                        { type: 'p', text: "<strong>Le concept :</strong> \"Je le veux tout de suite, peu importe le prix exact.\"" },
                        { type: 'p', text: "<strong>Fonctionnement :</strong> L'ordre est exécuté immédiatement au meilleur prix disponible offert par les vendeurs." },
                        { type: 'p', text: "<strong>Avantage :</strong> Rapidité garantie. Vous êtes sûr d'avoir l'action." },
                        { type: 'p', text: "<strong>Risque :</strong> Vous ne contrôlez pas le prix. Si le marché bouge vite (volatilité), vous pourriez payer plus cher que prévu." },
                        { type: 'p', text: "<strong>Exemple Concret :</strong> L'action ABC est affichée à 50,00 $. Vous placez un ordre au marché pour 100 actions. Une fraction de seconde plus tard, le prix monte à 50,05 $. Votre ordre passe à 50,05 $. Vous payez 5 $ de plus au total que le prix affiché initialement." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '2. Ordre à Cours Limité (Limit Order)', content: [
                        { type: 'p', text: "<strong>Le concept :</strong> \"Je veux acheter, mais pas plus cher que X $.\" (ou vendre pas moins cher que X)." },
                        { type: 'p', text: "<strong>Fonctionnement :</strong> Vous fixez un prix plafond. L'ordre ne s'exécutera que si le marché atteint votre prix ou mieux." },
                        { type: 'p', text: "<strong>Avantage :</strong> Contrôle total du prix. Pas de mauvaise surprise." },
                        { type: 'p', text: "<strong>Risque :</strong> Si l'action ne descend jamais à votre prix limite, vous ne l'achèterez jamais. L'exécution n'est pas garantie." },
                        { type: 'p', text: "<strong>Exemple Concret :</strong> L'action XYZ vaut 102 $. Vous trouvez ça trop cher. Vous placez un Ordre Limité d'achat à 100 $.<br><em>Scénario A :</em> L'action descend à 99 $. Vous l'achetez à 99 $ (encore mieux que prévu).<br><em>Scénario B :</em> L'action monte à 105 $. Votre ordre reste en attente et vous n'achetez rien." }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: '3. Ordre Stop (Stop-Loss)', content: [
                        { type: 'p', text: "<strong>Le concept :</strong> \"L'issue de secours.\" (Devient un Ordre au Marché une fois touché)." },
                        { type: 'p', text: "<strong>Fonctionnement :</strong> C'est un ordre dormant. Si le prix chute et touche votre seuil (ex: 90 $), l'ordre se réveille et vend tout immédiatement au prix du marché." },
                        { type: 'p', text: "<strong>Avantage :</strong> Protège contre un crash majeur sans avoir besoin de surveiller l'écran." },
                        { type: 'p', text: "<strong>Risque :</strong> En cas de chute brutale (flash crash), vous pourriez vendre beaucoup plus bas que votre seuil (ex: déclenché à 90 $, mais vendu à 85 $)." },
                        { type: 'p', text: "<strong>Exemple Concret :</strong> Vous avez acheté à 100 $. Vous mettez un Stop à 90 $. Une mauvaise nouvelle sort, l'action chute verticalement. Elle traverse le 90 $ sans s'arrêter. Votre ordre se déclenche et vend au premier acheteur disponible, qui est peut-être à 88 $. Vous êtes sorti, mais avec une perte un peu plus grande que prévu." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: '4. Ordre Stop-Limite (Stop-Limit)', content: [
                        { type: 'p', text: "<strong>Le concept :</strong> \"L'issue de secours précise.\" (Devient un Ordre Limité une fois touché)." },
                        { type: 'p', text: "<strong>Fonctionnement :</strong> Vous définissez deux prix : le déclencheur (Stop) et le prix minimum accepté (Limite)." },
                        { type: 'p', text: "<strong>Avantage :</strong> Vous garantissez que vous ne vendrez pas à un prix ridicule lors d'une panique momentanée." },
                        { type: 'p', text: "<strong>Risque :</strong> Si le prix chute trop vite sous votre limite, vous ne vendez pas. Vous restez coincé avec l'action qui continue de chuter." },
                        { type: 'p', text: "<strong>Exemple Concret :</strong> Achat à 100 $. Stop à 90 $, Limite à 89 $. L'action chute à 90 $. L'ordre de vente se déclenche. Mais le marché saute directement à 85 $. Comme 85 $ est plus bas que votre limite de 89 $, l'ordre ne vend pas. Vous possédez toujours l'action à 85 $." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: '5. Ordre Stop Suiveur (Trailing Stop)', content: [
                        { type: 'p', text: "<strong>Le concept :</strong> \"Laissez courir les profits.\"" },
                        { type: 'p', text: "<strong>Fonctionnement :</strong> Le prix de vente monte automatiquement avec l'action, mais ne redescend jamais. Vous fixez une distance (en $ ou en %)." },
                        { type: 'p', text: "<strong>Avantage :</strong> Sécurise vos gains sans limiter le potentiel de hausse." },
                        { type: 'p', text: "<strong>Exemple Concret :</strong> Vous achetez à 100 $ avec un Stop Suiveur de 5 $.<br>L'action monte à 110 $. Votre stop monte automatiquement à 105 $ (110 - 5).<br>L'action monte à 150 $. Votre stop est maintenant à 145 $.<br>L'action chute soudainement à 140 $. Dès qu'elle touche 145 $, vous vendez. Vous avez sécurisé un profit de 45 $ par action automatiquement." }
                    ]
                },
                {
                    type: 'box', style: 'dark', title: 'Note Importante : La Durée de Validité', content: [
                        { type: 'p', text: "Pour les ordres Limite et Stop, vous devez choisir combien de temps l'ordre reste actif :" },
                        { type: 'ul', items: ["<strong>Jour (Day) :</strong> Si l'ordre n'est pas exécuté à 16h00 (fermeture de la bourse), il est annulé.", "<strong>GTC (Good 'Til Canceled) :</strong> L'ordre reste actif (généralement jusqu'à 60 ou 90 jours) tant que vous ne l'annulez pas manuellement."] }
                    ]
                },
                { type: 'p', text: "<strong>Note pour les curieux :</strong> Il existe des ordres plus complexes pour les traders actifs, comme les ordres OCO (L'un annule l'autre) qui permettent de définir simultanément un objectif de profit et une limite de perte. Cependant, pour un investisseur long terme, les 5 ordres ci-dessus sont largement suffisants." }
            ]
        },
        chap21: {
            id: 'chap21',
            title: "Chapitre 21 : Fiscalité Avancée (PBR / ACB)",
            content: [
                { type: 'p', text: "Crucial pour les comptes <strong>Non Enregistrés (Taxables)</strong>. Quand vous vendez, vous payez de l'impôt sur : <code>Prix de Vente - PBR</code>." },
                {
                    type: 'box', style: 'info', title: 'Le PBR (Prix de Base Rajusté)', content: [
                        { type: 'p', text: "C'est le terme fiscal officiel pour désigner votre coût moyen. Il correspond au coût moyen pondéré de toutes vos actions, incluant les frais de commission. Vous devez le suivre vous-même pour vos impôts." },
                        { type: 'p', text: "Calcul : (Coût total de tous les achats) / (Nombre total d'actions)." }
                    ]
                },
                { type: 'p', text: "Nexus Finance Pro calcule automatiquement une estimation de votre PBR et de vos gains latents dans le <strong>Module Investissement</strong>." }
            ]
        },
        chap22: {
            id: 'chap22',
            title: "Chapitre 22: Le Rééquilibrage de Portefeuille",
            content: [
                { type: 'p', text: "Si votre cible est 70% Actions et 30% Obligations, et que les actions montent beaucoup (maintenant 80%), votre portefeuille est devenu trop risqué." },
                { type: 'p', text: "<strong>Rééquilibrer :</strong> C'est vendre ce qui a monté (Actions) pour racheter ce qui a baissé (Obligations) pour revenir à 70/30." },
                { type: 'p', text: "C'est le summum de la discipline : cela vous force mathématiquement à <strong>vendre haut et acheter bas</strong>." }
            ]
        },
        chap23: {
            id: 'chap23',
            title: "Chapitre 23: Pièges Psychologiques (Biais)",
            content: [
                { type: 'ul', items: ["<strong>Biais de Confirmation :</strong> Ne lire que ce qui confirme notre opinion sur une action (ex: Tesla) et ignorer les critiques.", "<strong>Ancrage :</strong> Penser qu'une action est \"pas chère\" juste parce qu'elle valait 300$ avant et vaut 150$ maintenant. Le passé n'importe pas.", "<strong>Aversion à la Perte :</strong> Vendre ses gagnants trop vite (pour prendre le profit) et garder ses perdants (en espérant qu'ils remontent). Il faut souvent faire l'inverse : couper les pertes !"] }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "Chapitre 24: Glossaire des Termes Clés",
            content: [
                { type: 'p', text: "Voici un rappel rapide des termes que vous rencontrerez." },
                {
                    type: 'grid', items: [
                        { title: "Actif", text: "Bien de valeur ou source de revenus." },
                        { title: "Passif", text: "Quelque chose qui sort de l'argent de votre poche." },
                        { title: "Action", text: "Part de propriété d'une entreprise." },
                        { title: "Obligation", text: "Prêt à une entreprise/état contre intérêt." },
                        { title: "Dividende", text: "Part des profits distribuée aux actionnaires." },
                        { title: "FNB (ETF)", text: "Panier d'investissements diversifié." },
                        { title: "Volatilité", text: "Amplitude des variations de prix (Risque)." },
                        { title: "BPA (EPS)", text: "Bénéfice Par Action." },
                        { title: "C/B (P/E)", text: "Ratio Cours/Bénéfice. Indique si l'action est chère ou bon marché." },
                        { title: "CELI", text: "Compte 100% libre d'impôt." },
                        { title: "REER", text: "Compte déductible d'impôt (différé)." },
                        { title: "PBR (ACB)", text: "Prix de Base Rajusté. Votre coût moyen fiscal." },
                        { title: "Patrimoine Net", text: "Actifs - Passifs. Vraie richesse." }
                    ]
                },
                { type: 'p', text: "Ce guide vous a donné les fondations. L'outil Nexus Finance Pro vous donne le pouvoir de les appliquer. Votre avenir financier est maintenant entre vos mains. Bonne planification !" }
            ]
        },
        bonus_psych: {
            id: 'bonus_psych',
            title: "Bonus: La Psychologie de l'Argent",
            content: [
                { type: 'p', text: "<strong>(Basé sur les concepts de Morgan Housel)</strong> - Un des livres les plus importants sur la psychologie financière. Nous vous conseillons fortement de vous le procurer !" },
                {
                    type: 'box', style: 'info', title: 'Partie 1 : Notre rapport irrationnel à l\'argent', content: [
                        { type: 'p', text: "<strong>1. Personne n'est fou :</strong>" },
                        { type: 'p', text: "Nous pensons tous savoir comment le monde fonctionne, mais nous n'en avons vécu qu'une infime partie. Vos décisions financières dépendent de votre génération, de l'inflation de votre jeunesse et de votre culture. <em>Ne jugez pas les autres. Ce qui semble 'fou' pour vous est peut-être une décision de survie logique pour quelqu'un d'autre.</em>" },
                        { type: 'p', text: "<strong>2. Chance et Risque :</strong>" },
                        { type: 'p', text: "Le succès de Bill Gates est dû à son génie, mais aussi à la chance d'avoir accès à un ordinateur à l'école (1 chance sur un million). Son ami Kent Evans était tout aussi doué, mais est mort avant le lycée (1 risque sur un million). <em>Soyez humbles dans le succès et indulgents dans l'échec. Le hasard joue un rôle immense.</em>" },
                        { type: 'p', text: "<strong>3. Jamais assez (Le piège de la cupidité) :</strong>" },
                        { type: 'p', text: "Rajat Gupta avait tout (richesse, réputation) mais en voulait plus et a fini en prison pour délit d'initié. <em>Il n'y a aucune raison de risquer ce que vous avez et dont vous avez besoin, pour obtenir ce que vous n'avez pas et dont vous n'avez pas besoin.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Partie 2 : La construction de la richesse', content: [
                        { type: 'p', text: "<strong>4. La confusion de l'intérêt composé :</strong>" },
                        { type: 'p', text: "Warren Buffett est riche non pas parce qu'il est le meilleur, mais parce qu'il investit depuis qu'il est enfant. <em>Taisez-vous et attendez ('Shut up and wait'). Le temps est la force la plus puissante.</em>" },
                        { type: 'p', text: "<strong>5. Devenir riche vs Rester riche :</strong>" },
                        { type: 'p', text: "Pour devenir riche, il faut être optimiste et prendre des risques. Pour <strong>rester</strong> riche, il faut être paranoïaque, frugal et avoir peur de tout perdre. <em>La survie est la clé.</em>" },
                        { type: 'p', text: "<strong>6. 'Tails, You Win' (Les événements extrêmes) :</strong>" },
                        { type: 'p', text: "Comme dans l'art, une poignée de 'gagnants' paie pour toutes les erreurs. <em>Vous pouvez avoir tort 50% du temps et quand même faire fortune. Ce qui compte, c'est l'ampleur de vos victoires, pas leur fréquence.</em>" }
                    ]
                },
                {
                    type: 'box', style: 'warning', title: 'Partie 3 : La psychologie et le comportement', content: [
                        { type: 'p', text: "<strong>7. La liberté (Le vrai dividende) :</strong>" },
                        { type: 'p', text: "La plus haute forme de richesse est de se lever le matin et de dire : 'Je peux faire ce que je veux aujourd'hui'. Contrôler son temps rend plus heureux que le luxe." },
                        { type: 'p', text: "<strong>8. Le paradoxe de l'homme dans la voiture :</strong>" },
                        { type: 'p', text: "Personne n'est aussi impressionné par vos possessions que vous l'êtes. Si vous voulez du respect, soyez humble et gentil, n'achetez pas une grosse voiture." },
                        { type: 'p', text: "<strong>9. La richesse est ce que l'on ne voit pas :</strong>" },
                        { type: 'p', text: "La vraie richesse (Wealth) est l'argent qui n'a <strong>pas</strong> été dépensé. Ne confondez pas avoir un haut revenu (Rich) et avoir un patrimoine (Wealthy)." },
                        { type: 'p', text: "<strong>10. Épargner de l'argent (Just save) :</strong>" },
                        { type: 'p', text: "Vous n'avez pas besoin d'un objectif pour épargner. Vous devez épargner pour l'inconnu. C'est votre marge de sécurité." }
                    ]
                },
                {
                    type: 'box', style: 'concept', title: 'Partie 4 : Une philosophie réaliste', content: [
                        { type: 'p', text: "<strong>11. Raisonnable > Rationnel :</strong>" },
                        { type: 'p', text: "N'essayez pas d'être une feuille Excel froide. La meilleure stratégie est celle qui vous permet de bien dormir la nuit." },
                        { type: 'p', text: "<strong>12. Rien n'est gratuit :</strong>" },
                        { type: 'p', text: "Le prix des rendements boursiers n'est pas en euros, mais en volatilité et en peur. Voyez les krachs comme un 'droit d'entrée', pas comme une amende." },
                        { type: 'p', text: "<strong>13. La séduction du pessimisme :</strong>" },
                        { type: 'p', text: "Le pessimisme a l'air intelligent, l'optimisme a l'air naïf. Soyez un 'optimiste réaliste' : croyez que cela ira mieux à long terme, mais préparez-vous à souffrir à court terme." }
                    ]
                },
                {
                    type: 'box', style: 'success', title: 'Conclusion : La méthode de l\'auteur', content: [
                        { type: 'p', text: "Ce que fait Morgan Housel avec son propre argent :" },
                        { type: 'ul', items: ["Son but est l'indépendance, pas la richesse maximale.", "Il garde beaucoup de cash (marge de sécurité).", "Il investit dans des fonds indiciels (ETF) à bas coûts.", "Il ne cherche pas à battre le marché, mais à y rester investi le plus longtemps possible."] }
                    ]
                }
            ]
        }
    }
};
