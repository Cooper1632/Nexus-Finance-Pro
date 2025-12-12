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
        title: "Guide Immobilier",
        sections: [
            { title: "Fondations", items: [{ id: 'intro', label: '1. La Philosophie' }, { id: 'module', label: '2. Guide du Module' }] },
            { title: "Analyse Financière", items: [{ id: 'flux', label: '3. Le Cashflow' }, { id: 'ratios', label: '4. Ratios Clés' }, { id: 'risque', label: '5. Analyse de Risque' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Stratégies Pro' }, { id: 'fiscalite', label: '7. Fiscalité' }, { id: 'glossaire', label: '8. Glossaire Complet' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introduction : Levier et Richesse",
            icon: 'intro',
            content: [
                { type: 'p', text: "L'investissement immobilier est unique car il utilise l'effet de <strong>levier</strong> (l'hypothèque) pour amplifier vos gains. Vous utilisez l'argent de la banque (souvent 80% du prix) pour contrôler un actif à 100%, tout en profitant de 100% de l'appréciation et du cashflow." },
                { type: 'p', text: "Cependant, l'immobilier ne pardonne pas. Une erreur de calcul de 100$ par mois peut devenir une perte de 30 000$ sur 25 ans. C'est pourquoi le module <strong>Immobilier</strong> de Nexus Finance Pro a été créé : pour transformer des estimations vagues en mathématiques précises." },
                {
                    type: 'box', style: 'pro', title: 'Le Secret des Pros', content: [
                        { type: 'p', text: "On fait son profit à l'achat, pas à la vente. Si les chiffres ne fonctionnent pas le jour 1 (Cashflow négatif), ne comptez pas sur \"l'appréciation future\" pour vous sauver. C'est de la spéculation, pas de l'investissement." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Comment utiliser le Module Immobilier",
            icon: 'module',
            content: [
                { type: 'p', text: "Ce module est votre calculatrice de rentabilité. Voici une explication détaillée de chaque champ pour vous aider à faire des analyses précises." },

                { type: 'subtitle', title: "Section Acquisition (La Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Prix d'Achat :</strong> Le montant accepté par le vendeur. N'incluez pas ici les frais de démarrage (notaire, taxe de mutation), car le module calcule les ratios basés sur la valeur de l'actif.",
                        "<strong>Mise de Fonds (Cash Down) :</strong> L'argent liquide que vous devez sortir de vos poches.<br/><em>Impact :</em> Une mise de fonds plus basse augmente votre rendement sur investissement (ROI) grâce au levier, mais augmente vos paiements mensuels et réduit votre Cashflow.",
                        "<strong>Paiement Hypoth. (Annuel) :</strong> Le montant TOTAL payé à la banque en un an (Capital + Intérêts). Multipliez votre mensualité par 12.<br/><em>Truc :</em> Utilisez le module <strong>Remboursement</strong> pour calculer ce chiffre exact.",
                        "<strong>Amort. Capital (An 1) :</strong> La portion de vos paiements qui sert à rembourser la dette la première année. C'est de l'épargne forcée. Vous trouverez ce chiffre sur votre échéancier hypothécaire."
                    ]
                },

                { type: 'subtitle', title: "Section Opérations (La Vérité)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Le Piège Classique', content: [
                        { type: 'p', text: "Sous-estimer les dépenses. Ne prenez JAMAIS les chiffres du vendeur (\"fiche descriptive\") pour argent comptant. Ils \"oublient\" souvent la gestion et la maintenance." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Revenus Bruts :</strong> Le total de tous les loyers si l'immeuble était plein à 100% toute l'année.",
                        "<strong>Taux de Vacance (%) :</strong> Pourcentage de temps où les logements seront vides (entre locataires).<br/><em>Standard :</em> Mettez toujours au moins <strong>3% à 5%</strong> par prudence, même si c'est plein. Les banques l'exigent dans leurs calculs.",
                        "<strong>Dépenses d'Exploitation :</strong> Le nerf de la guerre. Incluez TOUT : Taxes (municipales, scolaires), Assurances, Électricité (parties communes), Déneigement, Pelouse, Publicité, Gestion, et surtout la Maintenance (réserve).<br/><em>Règle du pouce :</em> Les dépenses représentent souvent <strong>35% à 45%</strong> des revenus bruts. Si votre calcul arrive à 15%, vous avez oublié quelque chose."
                    ]
                },

                { type: 'subtitle', title: "Section Paramètres Avancés (Le Futur)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Appréciation % :</strong> De combien la valeur de l'immeuble augmente par an. Soyez conservateur (2% à 3% pour suivre l'inflation). C'est la cerise sur le gâteau, pas le gâteau.",
                        "<strong>Amort. Fiscal (DPA) :</strong> La Déduction pour Amortissement. Le montant que le gouvernement vous permet de déduire de vos revenus pour l'usure de l'immeuble. Cela réduit vos impôts aujourd'hui mais sera \"récupéré\" (imposé) lors de la vente. Consultez un comptable.",
                        "<strong>Impôt % :</strong> Votre taux marginal d'imposition. Sert à calculer le Cashflow net réel après impôts."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Le Flux de Trésorerie (Cashflow)",
            icon: 'flux',
            content: [
                { type: 'p', text: "C'est l'oxygène de votre investissement. Sans cashflow positif, vous devez payer de votre poche chaque mois pour garder l'immeuble. C'est risqué." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Revenus Locatifs Bruts<br/>(-) Vacance & Mauvaises Créances (pertes)<br/>= <strong>REVENUS EFFECTIFS</strong><br/><br/>(-) Dépenses d'Opération (Taxes, Assurances...)<br/>= <strong>REVENU NET D'EXPLOITATION (RNE / NOI)</strong> <span style='color:var(--info-color)'>◄ La performance pure de l'immeuble</span><br/><br/>(-) Service de la Dette (Hypothèque)<br/>= <strong>CASHFLOW (Flux de Trésorerie)</strong> <span style='color:var(--success-color)'>◄ Ce qui va dans votre poche</span>" }
                    ]
                },
                { type: 'p', text: "Le <strong>RNE</strong> est crucial car il représente la performance de l'immeuble <em>indépendamment</em> de votre financement. C'est sur ce chiffre que la banque se base pour évaluer la valeur économique de l'immeuble." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Les Ratios de Performance",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Comment savoir si c'est une bonne affaire ? Les chiffres ne mentent pas." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Taux de Capitalisation (Cap Rate)', code: 'RNE / Prix Achat', text: "Le rendement de l'immeuble si vous le payiez 100% comptant. C'est la référence absolue pour comparer des immeubles entre eux.<br/><strong>Cible :</strong> 4.5% à 6% (plus c'est haut, mieux c'est)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Cashflow Annuel / Mise de Fonds', text: "Votre rendement réel sur l'argent liquide sorti de votre poche. C'est votre \"vrai\" taux d'intérêt.<br/><strong>Cible :</strong> > 8% à 10%." },
                        { style: 'warning', title: 'Ratio de Dépenses (OER)', code: 'Dépenses / Revenus Bruts', text: "Mesure l'efficacité de la gestion. Si > 55%, l'immeuble est une passoire. Si < 25%, les chiffres sont probablement faux.<br/><strong>Zone Saine :</strong> 35% - 45%." },
                        { style: 'pro', title: 'Multiplicateur Revenu Brut (MRB)', code: 'Prix / Revenus Bruts', text: "\"Combien de fois les revenus je paie ?\" Utile pour un tri rapide (le \"pifomètre\"), mais dangereux car il ignore les dépenses réelles.<br/><strong>Standard :</strong> 12x à 18x+ (varie fortement selon la ville et la qualité de l'immeuble)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Analyse de Risque & Banque",
            icon: 'risque',
            content: [
                { type: 'p', text: "Avant de vous prêter des centaines de milliers de dollars, la banque va regarder ces ratios pour s'assurer que vous ne ferez pas défaut." },

                { type: 'subtitle', title: "Ratio de Couverture de la Dette (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>RNE / Paiements Hypothécaires</span><br/>Est-ce que les loyers couvrent l'hypothèque ? Un DSCR de <strong>1.25</strong> signifie que pour chaque 100$ de paiement à la banque, vous avez 125$ de revenus nets. C'est la marge de sécurité exigée par la SCHL et les banques pour le multilogement.<br/><strong>Note :</strong> Les banques utilisent souvent des taux d'intérêt \"qualifiés\" plus élevés pour ce calcul, ce qui le rend plus difficile à atteindre.<br/><strong>Zone de danger :</strong> < 1.10." },

                { type: 'subtitle', title: "Ratio Prêt-Valeur (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Montant du Prêt / Valeur de la Propriété</span><br/>Le pourcentage de l'immeuble qui appartient à la banque. Plus il est haut, plus le levier est fort, mais plus le risque est élevé." },

                { type: 'subtitle', title: "Seuil de Rentabilité (Break-even)" },
                { type: 'p', text: "C'est le taux d'occupation minimum pour ne pas perdre d'argent. Si votre Break-even est de 75%, cela signifie que vous pouvez avoir 25% de vos logements vides et quand même payer toutes vos factures. Plus ce chiffre est bas, plus l'investissement est sûr." },

                { type: 'subtitle', title: "Marge de Sécurité" },
                { type: 'p', text: "<span class='code-badge'>(RNE - Paiement Hypothèque) / RNE</span><br/>Pourcentage du Revenu Net qui peut disparaître avant que vous ne soyez en cashflow négatif. Une marge de <strong>20%+</strong> est recommandée pour absorber les imprévus." },

                { type: 'subtitle', title: "Constante d'Emprunt (Loan Constant)" },
                { type: 'p', text: "<span class='code-badge'>Paiement Annuel Total / Montant du Prêt</span><br/>Le coût réel de votre dette (incluant le remboursement de capital).<br/><strong>Le Secret du Levier Positif :</strong> Si votre Cap Rate > Constante d'Emprunt, vous vous enrichissez avec l'argent de la banque. Si Cap Rate < Constante, le levier joue contre vous." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Stratégies Avancées (Pros)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'La Stratégie BRRRR', content: [
                        { type: 'p', text: "Buy (Acheter), Rehab (Rénover), Rent (Louer), Refinance (Refinancer), Repeat (Répéter).<br/><br/>Le Saint Graal de l'immobilier. Le but est d'acheter un immeuble délabré, d'augmenter sa valeur par des rénovations (forcer l'appréciation), puis de le refinancer pour récupérer 100% de votre mise de fonds initiale. Vous possédez alors un immeuble \"gratuitement\" (mise de fonds infinie = rendement infini)." }
                    ]
                },
                { type: 'subtitle', title: "Le House Hacking (Débutant)" },
                { type: 'p', text: "Acheter un duplex ou triplex et habiter l'un des logements.<br/><strong>Avantage :</strong> Mise de fonds réduite (souvent 5% ou 10% au lieu de 20%). Les locataires paient votre hypothèque. C'est la meilleure façon de commencer." },

                { type: 'subtitle', title: "Le TRI (Taux de Rendement Interne)" },
                { type: 'p', text: "L'investisseur débutant regarde le Cashflow. L'investisseur pro regarde le TRI (IRR). Le TRI calcule le rendement total annualisé en combinant les 4 payeurs de l'immobilier :" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow :</strong> L'argent mensuel.",
                        "2. <strong>Capitalisation :</strong> Le locataire paie votre dette (vous vous enrichissez chaque mois).",
                        "3. <strong>Appréciation :</strong> La valeur de l'immeuble monte avec l'inflation.",
                        "4. <strong>Avantages Fiscaux :</strong> Déductions d'intérêts et amortissement."
                    ]
                },
                { type: 'p', text: "Nexus Pro calcule ce TRI pour vous sur 10 ans dans le bas du module Immobilier." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. La Fiscalité Immobilière",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "L'immobilier est puissant, mais le fisc vous attend au tournant. Comprendre ces concepts peut vous sauver des milliers de dollars." },

                { type: 'subtitle', title: "Dépenses Courantes vs Capitalisables" },
                { type: 'p', text: "<strong>Courantes :</strong> Réparations mineures (changer un robinet, peinture). Déductibles à 100% l'année même.<br/><strong>Capitalisables :</strong> Améliorations majeures (refaire le toit, changer les fenêtres). Ne sont pas déductibles d'un coup. Elles s'ajoutent au coût de l'immeuble et sont amorties sur plusieurs années." },

                { type: 'subtitle', title: "La Récupération d'Amortissement" },
                { type: 'p', text: "Si vous prenez de l'amortissement fiscal (DPA) pour réduire vos impôts chaque année, attention ! Lors de la vente de l'immeuble, si vous vendez plus cher que vous avez acheté, le gouvernement va \"récupérer\" tout cet amortissement et vous imposer dessus. C'est un prêt d'impôt, pas un cadeau." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glossaire Complet",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Amortissement Capital", def: "La portion de votre paiement hypothécaire qui sert à rembourser la dette (et non à payer les intérêts). C'est un enrichissement pour vous." },
                        { term: "Amortissement Fiscal (DPA)", def: "Une dépense \"fictive\" permise par le gouvernement (dépréciation de l'immeuble) qui réduit votre impôt à payer aujourd'hui." },
                        { term: "Appréciation", def: "Augmentation de la valeur de l'immeuble au fil du temps." },
                        { term: "Balance de Vente", def: "Quand le vendeur accepte d'être payé plus tard pour une partie du prix de vente. C'est un prêt que le vendeur vous fait." },
                        { term: "Cap Rate", def: "Taux de rendement sans financement. RNE / Prix." },
                        { term: "Cash-on-Cash", def: "Rendement liquide sur l'argent investi. Cashflow / Mise de fonds." },
                        { term: "Cashflow", def: "Profit net mensuel ou annuel qui reste dans vos poches après toutes les dépenses et l'hypothèque." },
                        { term: "Dépenses d'exploitation", def: "Frais pour opérer l'immeuble (Assurances, Taxes, Entretien). Exclut l'hypothèque." },
                        { term: "Debt Yield", def: "RNE / Montant du prêt. Ratio de sécurité pour les prêteurs commerciaux." },
                        { term: "DSCR (Couverture)", def: "Ratio de capacité de paiement de la dette. Doit être > 1.20." },
                        { term: "Effet de Levier", def: "Utiliser la dette pour augmenter le rendement de ses propres capitaux." },
                        { term: "Équité", def: "Valeur marchande - Solde hypothécaire. La richesse nette dans l'immeuble." },
                        { term: "LTV (Prêt-Valeur)", def: "Pourcentage de la valeur financé par la banque." },
                        { term: "Mise de fonds", def: "Apport personnel initial." },
                        { term: "MRB", def: "Prix / Revenus Bruts. Mesure rapide de cherté." },
                        { term: "Refinancement", def: "Réemprunter sur la valeur accrue de l'immeuble pour sortir du capital non imposable." },
                        { term: "RNE (Revenu Net d'Exploitation)", def: "Revenus - Dépenses. Le profit pur de l'opération." },
                        { term: "Taux d'inoccupation", def: "% de revenus perdus car logements vides." },
                        { term: "TRI (Taux de Rendement Interne)", def: "Rendement total annualisé incluant cashflow, capital et plus-value." },
                        { term: "Valuation", def: "Estimation de la valeur marchande, souvent basée sur le RNE et le Cap Rate du marché." },
                        { term: "Constante d'Emprunt", def: "Paiement annuel total / Prêt. Si < Cap Rate, le levier est positif." },
                        { term: "Marge de Sécurité", def: "% de baisse de revenus supportable avant d'être à perte." },
                        { term: "Rendement Brut", def: "Revenus Bruts / Prix. L'inverse du MRB. Indicateur de production brute." },
                        { term: "ROE (Rendement sur Équité)", def: "Profit total (Cashflow + Capital + Appréciation) / Équité nette. Le vrai rendement de votre argent bloqué." }
                    ]
                }
            ]
        }
    }
};

export const realEstateGuideDataIntl = {
    sidebar: {
        title: "Guide Immobilier (Intl)",
        sections: [
            { title: "Fondations", items: [{ id: 'intro', label: '1. La Philosophie' }, { id: 'module', label: '2. Guide du Module' }] },
            { title: "Analyse Financière", items: [{ id: 'flux', label: '3. Le Cashflow' }, { id: 'ratios', label: '4. Ratios Clés' }, { id: 'risque', label: '5. Analyse de Risque' }] },
            { title: "Expertise", items: [{ id: 'strategie', label: '6. Stratégies Pro' }, { id: 'fiscalite', label: '7. Fiscalité Immobilière' }, { id: 'glossaire', label: '8. Glossaire Complet' }] }
        ]
    },
    chapters: {
        intro: {
            id: 'intro',
            title: "1. Introduction : Levier & Richesse",
            icon: 'intro',
            content: [
                { type: 'p', text: "L'investissement immobilier est unique car il utilise le <strong>levier</strong> (hypothèque) pour décupler vos gains. Vous utilisez l'argent de la banque (souvent 80% du prix) pour contrôler un actif à 100%, tout en profitant de 100% de la plus-value et du cashflow." },
                { type: 'p', text: "Cependant, l'immobilier ne pardonne pas. Une erreur de calcul de 100$/mois peut devenir une perte de 30 000$ sur 25 ans. C'est pourquoi le module <strong>Immobilier</strong> de Nexus Finance Pro a été créé : pour transformer des estimations floues en mathématiques précises." },
                {
                    type: 'box', style: 'pro', title: 'Le Secret des Pros', content: [
                        { type: 'p', text: "On fait son profit à l'achat, pas à la vente. Si les chiffres ne fonctionnent pas au jour 1 (Cashflow Négatif), ne comptez pas sur la \"future appréciation\" pour vous sauver. C'est de la spéculation, pas de l'investissement." }
                    ]
                }
            ]
        },
        module: {
            id: 'module',
            title: "2. Comment utiliser le module Immobilier",
            icon: 'module',
            content: [
                { type: 'p', text: "Ce module est votre calculatrice de rentabilité. Voici l'explication détaillée de chaque champ pour faire des analyses précises." },

                { type: 'subtitle', title: "Section Acquisition (La Base)", icon: <HomeIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Prix d'Achat :</strong> Le montant accepté par le vendeur. N'incluez pas ici les frais de démarrage (notaire, taxes locales), car le module calcule les ratios basés sur la valeur de l'actif.",
                        "<strong>Mise de Fonds (Cash Down) :</strong> L'argent liquide que vous devez sortir de vos poches.<br/><em>Impact :</em> Une mise de fonds plus basse augmente votre rendement sur investissement (ROI) grâce au levier, mais augmente vos paiements mensuels et réduit votre Cashflow.",
                        "<strong>Paiement Hypoth. (Annuel) :</strong> Le montant TOTAL payé à la banque en un an (Capital + Intérêts). Multipliez votre mensualité par 12.<br/><em>Truc :</em> Utilisez le module <strong>Remboursement</strong> pour calculer ce chiffre exact.",
                        "<strong>Amort. Capital (An 1) :</strong> La portion de vos paiements qui sert à rembourser la dette la première année. C'est de l'épargne forcée. Vous trouverez ce chiffre sur votre échéancier hypothécaire."
                    ]
                },

                { type: 'subtitle', title: "Section Opérations (La Vérité)", icon: <BanknotesIcon style={{ width: '24px' }} /> },
                {
                    type: 'box', style: 'warning', title: 'Le Piège Classique', content: [
                        { type: 'p', text: "Sous-estimer les dépenses. NE JAMAIS prendre les chiffres du vendeur pour acquis. Ils \"oublient\" souvent la gestion et l'entretien." }
                    ]
                },
                {
                    type: 'ul', items: [
                        "<strong>Revenus Bruts :</strong> Le total de tous les loyers si l'immeuble était rempli à 100% toute l'année.",
                        "<strong>Taux de Vacance (%) :</strong> Pourcentage du temps où les logements seront vides (entre deux locataires).<br/><em>Standard :</em> Mettez toujours au moins <strong>3% à 5%</strong> par prudence, même si c'est plein. Les banques l'exigent dans leurs calculs.",
                        "<strong>Dépenses Exploitation :</strong> Le nerf de la guerre. Incluez TOUT : Taxes (foncières), Assurances, Électricité (communs), Entretien, Publicité, Gestion, et surtout la Maintenance (réserve).<br/><em>Règle du pouce :</em> Les dépenses représentent souvent <strong>35% à 45%</strong> des revenus bruts. Si votre calcul arrive à 15%, vous avez oublié quelque chose."
                    ]
                },

                { type: 'subtitle', title: "Section Paramètres Avancés (Le Futur)", icon: <WrenchScrewdriverIcon style={{ width: '24px' }} /> },
                {
                    type: 'ul', items: [
                        "<strong>Taux Appréciation % :</strong> De combien la valeur de l'immeuble augmente par an. Soyez conservateur (2% à 3% pour suivre l'inflation). C'est la cerise sur le gâteau, pas le gâteau.",
                        "<strong>Amort. Fiscal :</strong> Déduction pour amortissement (dépréciation de l'immeuble) qui réduit votre impôt à payer aujourd'hui (selon les règles fiscales de votre pays).",
                        "<strong>Taux Imposition % :</strong> Votre taux marginal d'imposition. Utilisé pour calculer le Cashflow net réel après impôts."
                    ]
                }
            ]
        },
        flux: {
            id: 'flux',
            title: "3. Le Cashflow",
            icon: 'flux',
            content: [
                { type: 'p', text: "C'est l'oxygène de votre investissement. Sans cashflow positif, vous devez payer de votre poche chaque mois pour garder l'immeuble. C'est risqué." },
                {
                    type: 'box', style: 'custom-cascade', content: [
                        { type: 'p', text: "(+) Revenus Locatifs Bruts<br/>(-) Vacance & Mauvaises Créances (pertes)<br/>= <strong>REVENU EFFECTIF</strong><br/><br/>(-) Dépenses d'Exploitation (Taxes, Assurances...)<br/>= <strong>REVENU NET D'EXPLOITATION (RNE)</strong> <span style='color:var(--info-color)'>◄ La performance pure de l'immeuble</span><br/><br/>(-) Service de la Dette (Hypothèque)<br/>= <strong>CASHFLOW (Liquidités Nettes)</strong> <span style='color:var(--success-color)'>◄ Ce qui va dans vos poches</span>" }
                    ]
                },
                { type: 'p', text: "Le <strong>RNE</strong> (NOI - Net Operating Income) est crucial car il représente la performance de l'immeuble <em>indépendamment</em> de votre financement. C'est ce chiffre que la banque utilise pour évaluer la valeur économique de l'immeuble." }
            ]
        },
        ratios: {
            id: 'ratios',
            title: "4. Ratios Clés de Performance",
            icon: 'ratios',
            content: [
                { type: 'p', text: "Comment savoir si c'est une bonne affaire ? Les chiffres ne mentent pas." },
                {
                    type: 'grid', items: [
                        { style: 'info', title: 'Taux de Capitalisation (Cap Rate)', code: 'RNE / Prix Achat', text: "Le rendement de l'immeuble si vous le payiez 100% comptant. C'est la référence absolue pour comparer des immeubles entre eux.<br/><strong>Cible :</strong> 4.5% à 6% (plus c'est haut, mieux c'est)." },
                        { style: 'success', title: 'Cash-on-Cash (CoC)', code: 'Cashflow Annuel / Mise de Fonds', text: "Votre rendement réel sur l'argent liquide sorti de votre poche. C'est votre \"vrai\" taux d'intérêt.<br/><strong>Cible :</strong> > 8% à 10%." },
                        { style: 'warning', title: 'Ratio de Dépenses (OER)', code: 'Dépenses / Revenus Bruts', text: "Mesure l'efficacité de la gestion. Si > 55%, l'immeuble est une passoire. Si < 25%, les chiffres sont probablement faux.<br/><strong>Zone Saine :</strong> 35% - 45%." },
                        { style: 'pro', title: 'Multiplicateur Revenu Brut (MRB)', code: 'Prix / Revenus Bruts', text: "\"Combien de fois les revenus je paie ?\" Utile pour un tri rapide (le \"pifomètre\"), mais dangereux car il ignore les dépenses réelles.<br/><strong>Standard :</strong> 12x à 18x+ (varie fortement selon la ville et la qualité de l'immeuble)." }
                    ]
                }
            ]
        },
        risque: {
            id: 'risque',
            title: "5. Analyse de Risque & Banque",
            icon: 'risque',
            content: [
                { type: 'p', text: "Avant de vous prêter des centaines de milliers de dollars, la banque va regarder ces ratios pour s'assurer que vous ne ferez pas défaut." },

                { type: 'subtitle', title: "Ratio de Couverture de la Dette (DSCR)" },
                { type: 'p', text: "<span class='code-badge'>RNE / Paiements Hypothécaires</span><br/>Est-ce que les loyers couvrent l'hypothèque ? Un DSCR de <strong>1.25</strong> signifie que pour chaque 100$ de paiement à la banque, vous avez 125$ de revenus nets. C'est la marge de sécurité exigée par les banques.<br/><strong>Note :</strong> Les banques utilisent souvent des taux d'intérêt \"qualifiés\" plus élevés pour ce calcul, ce qui le rend plus difficile à atteindre.<br/><strong>Zone de danger :</strong> < 1.10." },

                { type: 'subtitle', title: "Ratio Prêt-Valeur (LTV)" },
                { type: 'p', text: "<span class='code-badge'>Montant du Prêt / Valeur de la Propriété</span><br/>Le pourcentage de l'immeuble qui appartient à la banque. Plus il est haut, plus le levier est fort, mais plus le risque est élevé." },

                { type: 'subtitle', title: "Seuil de Rentabilité (Break-even)" },
                { type: 'p', text: "C'est le taux d'occupation minimum pour ne pas perdre d'argent. Si votre Break-even est de 75%, cela signifie que vous pouvez avoir 25% de vos logements vides et quand même payer toutes vos factures. Plus ce chiffre est bas, plus l'investissement est sûr." },

                { type: 'subtitle', title: "Marge de Sécurité" },
                { type: 'p', text: "<span class='code-badge'>(RNE - Paiement Hypothèque) / RNE</span><br/>Pourcentage du Revenu Net qui peut disparaître avant que vous ne soyez en cashflow négatif. Une marge de <strong>20%+</strong> est recommandée pour absorber les imprévus." },

                { type: 'subtitle', title: "Constante d'Emprunt (Loan Constant)" },
                { type: 'p', text: "<span class='code-badge'>Paiement Annuel Total / Montant du Prêt</span><br/>Le coût réel de votre dette (incluant le remboursement de capital).<br/><strong>Le Secret du Levier Positif :</strong> Si votre Cap Rate > Constante d'Emprunt, vous vous enrichissez avec l'argent de la banque. Si Cap Rate < Constante, le levier joue contre vous." }
            ]
        },
        strategie: {
            id: 'strategie',
            title: "6. Stratégies Avancées (Pros)",
            icon: 'strategie',
            content: [
                {
                    type: 'box', style: 'pro', title: 'La Stratégie BRRRR', content: [
                        { type: 'p', text: "Buy, Rehab, Rent, Refinance, Repeat.<br/><br/>Le Saint-Graal de l'immobilier. Le but est d'acheter un immeuble délabré, augmenter sa valeur par des rénovations (forcer l'appréciation), puis refinancer pour retirer 100% de sa mise de fonds initiale. Vous possédez alors un immeuble \"gratuitement\" (mise de fonds infinie = rendement infini)." }
                    ]
                },
                { type: 'subtitle', title: "House Hacking (Débutant)" },
                { type: 'p', text: "Acheter un duplex ou triplex et habiter un des logements.<br/><strong>Avantage :</strong> Mise de fonds réduite. Les locataires paient votre hypothèque. C'est la meilleure façon de commencer." },

                { type: 'subtitle', title: "Taux de Rendement Interne (TRI)" },
                { type: 'p', text: "L'investisseur débutant regarde le Cashflow. L'investisseur pro regarde le TRI. Le TRI calcule le rendement total annualisé combinant les 4 payeurs de l'immobilier :" },
                {
                    type: 'ul', items: [
                        "1. <strong>Cashflow :</strong> L'argent mensuel.",
                        "2. <strong>Amortissement :</strong> Le locataire paie votre dette (vous vous enrichissez chaque mois).",
                        "3. <strong>Appréciation :</strong> La valeur de l'immeuble monte avec l'inflation.",
                        "4. <strong>Avantages Fiscaux :</strong> Déduction des intérêts et amortissement."
                    ]
                },
                { type: 'p', text: "Nexus Pro calcule ce TRI pour vous sur 10 ans en bas du module Immobilier." }
            ]
        },
        fiscalite: {
            id: 'fiscalite',
            title: "7. Fiscalité Immobilière",
            icon: 'fiscalite',
            content: [
                { type: 'p', text: "L'immobilier est puissant, mais le fisc vous attend au tournant. Comprendre ces concepts peut vous sauver des milliers de dollars." },

                { type: 'subtitle', title: "Dépenses Courantes vs Capitalisables" },
                { type: 'p', text: "<strong>Courantes :</strong> Réparations mineures (changer un robinet, peinture). Déductibles à 100% l'année même.<br/><strong>Capitalisables :</strong> Améliorations majeures (refaire le toit, changer les fenêtres). Pas déductibles d'un coup. Elles s'ajoutent au coût de l'immeuble et s'amortissent sur plusieurs années." },

                { type: 'subtitle', title: "Récupération d'amortissement" },
                { type: 'p', text: "Si vous prenez de l'amortissement fiscal pour réduire vos impôts chaque année, attention ! Lors de la vente de l'immeuble, si vous vendez plus cher que vous avez acheté, le fisc va \"récupérer\" tout cet amortissement et vous imposer dessus. C'est un prêt fiscal, pas un cadeau." }
            ]
        },
        glossaire: {
            id: 'glossaire',
            title: "8. Glossaire Complet",
            icon: 'glossaire',
            content: [
                {
                    type: 'glossary-grid', items: [
                        { term: "Amortissement Capital", def: "La portion de votre paiement hypothécaire qui sert à rembourser la dette (et non à payer les intérêts). C'est un enrichissement pour vous." },
                        { term: "Amortissement Fiscal", def: "Une dépense comptable permise par le fisc (dépréciation de l'immeuble) qui réduit votre impôt à payer aujourd'hui." },
                        { term: "Appréciation", def: "Augmentation de la valeur de l'immeuble au fil du temps." },
                        { term: "Balance de Vente", def: "Quand le vendeur accepte d'être payé plus tard pour une partie du prix de vente. C'est un prêt que le vendeur vous fait." },
                        { term: "Cap Rate", def: "Taux de rendement sans financement. RNE / Prix." },
                        { term: "Cash-on-Cash", def: "Rendement liquide sur l'argent investi. Cashflow / Mise de fonds." },
                        { term: "Cashflow", def: "Profit net mensuel ou annuel qui reste dans vos poches après toutes les dépenses et l'hypothèque." },
                        { term: "Dépenses Exploitation", def: "Coûts pour opérer l'immeuble (Assurances, Taxes, Entretien). Exclut l'hypothèque." },
                        { term: "Debt Yield", def: "RNE / Montant du Prêt. Ratio de sécurité pour les prêteurs commerciaux." },
                        { term: "DSCR (Couverture)", def: "Ratio de capacité de paiement de la dette. Devrait être > 1.20." },
                        { term: "Levier", def: "Utiliser la dette pour augmenter le rendement de ses capitaux propres." },
                        { term: "Équité (Net Worth)", def: "Valeur Marchande - Solde Hypothécaire. La richesse nette dans l'immeuble." },
                        { term: "LTV (Prêt-Valeur)", def: "Pourcentage de la valeur financée par la banque." },
                        { term: "Mise de Fonds", def: "Apport personnel initial." },
                        { term: "MRB", def: "Prix / Revenus Bruts. Mesure rapide de cherté." },
                        { term: "Refinancement", def: "Réemprunter sur la valeur augmentée de l'immeuble pour sortir du capital non-imposable." },
                        { term: "RNE (Revenu Net d'Exploitation)", def: "Revenus - Dépenses. Le profit pur de l'opération." },
                        { term: "Taux d'inoccupation", def: "% de revenus perdus car logements vides." },
                        { term: "TRI (Taux de Rendement Interne)", def: "Rendement total annualisé incluant cashflow, capital et plus-value." },
                        { term: "Valuation", def: "Estimation de la valeur marchande, souvent basée sur le RNE et le Cap Rate du marché." },
                        { term: "Constante d'Emprunt", def: "Paiement annuel total / Prêt. Si < Cap Rate, le levier est positif." },
                        { term: "Marge de Sécurité", def: "% de baisse de revenus supportable avant d'être à perte." },
                        { term: "Rendement Brut", def: "Revenus Bruts / Prix. L'inverse du MRB. Indicateur de production brute." },
                        { term: "ROE (Rendement sur Équité)", def: "Profit total (Cashflow + Capital + Appréciation) / Équité nette. Le vrai rendement de votre argent bloqué." }
                    ]
                }
            ]
        }
    }
};
