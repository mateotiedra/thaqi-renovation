export const COMPANY = {
  name: "Thaqi Rénovation",
  tagline: "Votre partenaire de confiance pour tous vos projets de rénovation sur Genève.",
  phone: "+41 78 866 02 53",
  email: "info@thaqirenovation.ch",
  address: "Chemin de la Fauconnerie, 1228 Plan-les-Ouates, Suisse",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Nos Services" },
  { href: "/a-propos", label: "À Propos" },
] as const;

export interface RenovationType {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  hasImages: boolean;
}

export const RENOVATION_TYPES: RenovationType[] = [
  {
    slug: "amenagement-jardin",
    title: "Aménagement Jardin",
    shortDescription: "Terrasses, allées, clôtures et aménagements paysagers.",
    longDescription: `L'aménagement de jardin transforme vos espaces extérieurs en véritables lieux de vie. Que vous souhaitiez créer une terrasse en bois ou en pierre, installer une clôture pour plus d'intimité, ou repenser l'ensemble de votre jardin, nous réalisons tous types de projets sur Genève.

Nos prestations comprennent :
• Création et pose de terrasses (bois, composite, dalles, pavés)
• Installation de clôtures et portails
• Aménagement d'allées et chemins
• Pose de gazon naturel ou synthétique
• Construction de murets et bordures
• Éclairage extérieur et mise en valeur paysagère

Nous intervenons à Genève, Lausanne, et dans tout le canton de Vaud pour transformer votre extérieur selon vos envies et votre budget.`,
    hasImages: true,
  },
  {
    slug: "cheminee-insert-poele",
    title: "Cheminée, Insert & Poêle",
    shortDescription: "Installation de cheminées, inserts et poêles à bois.",
    longDescription: `L'installation d'une cheminée, d'un insert ou d'un poêle apporte chaleur et convivialité à votre intérieur tout en réduisant vos factures de chauffage. Nous sommes spécialisés dans la pose et la rénovation de systèmes de chauffage au bois à Genève.

Nos services incluent :
• Installation de cheminées à foyer ouvert ou fermé
• Pose d'inserts à bois ou à granulés (pellets)
• Installation de poêles à bois, à granulés ou mixtes
• Rénovation et modernisation de cheminées existantes
• Tubage et raccordement aux conduits
• Création de coffrage et habillage décoratif

Que vous habitiez Genève, Nyon, ou les environs, nous vous conseillons sur la solution la plus adaptée à votre logement et à vos besoins en chauffage.`,
    hasImages: true,
  },
  {
    slug: "cuisine",
    title: "Cuisine",
    shortDescription: "Rénovation complète ou partielle de cuisines.",
    longDescription: `La rénovation de cuisine est l'un des projets les plus valorisants pour votre habitat. Qu'il s'agisse d'un simple rafraîchissement ou d'une transformation complète, nous réalisons votre cuisine sur mesure à Genève romande.

Nos prestations couvrent :
• Conception et installation de cuisines équipées
• Remplacement des meubles et façades
• Pose de plans de travail (granit, quartz, stratifié, bois)
• Installation d'électroménager (four, plaque, hotte, lave-vaisselle)
• Création d'îlots centraux et bars
• Carrelage et crédence
• Plomberie et raccordements électriques

De Genève à Lausanne, nous transformons votre cuisine en un espace fonctionnel et moderne, adapté à votre style de vie et à votre budget.`,
    hasImages: true,
  },
  {
    slug: "drainage",
    title: "Drainage",
    shortDescription: "Systèmes de drainage et évacuation des eaux.",
    longDescription: `Le drainage est essentiel pour protéger votre maison contre l'humidité et les infiltrations d'eau. Un système de drainage bien conçu préserve vos fondations et assure la longévité de votre bâtiment à Genève.

Nos interventions comprennent :
• Drainage périphérique des fondations
• Installation de drains français
• Pose de caniveaux et grilles d'évacuation
• Création de puits perdus et puisards
• Raccordement aux collecteurs d'eaux pluviales
• Étanchéité des sous-sols et caves
• Pompes de relevage pour zones inondables

Nous intervenons dans la région genevoise et le canton de Vaud pour résoudre vos problèmes d'humidité et protéger durablement votre habitation.`,
    hasImages: false,
  },
  {
    slug: "electricite",
    title: "Électricité",
    shortDescription: "Mise aux normes, tableaux, prises et éclairage.",
    longDescription: `L'installation électrique est le cœur de votre habitation. Que ce soit pour une mise aux normes, une rénovation complète ou l'ajout de nouveaux équipements, nous assurons des travaux électriques sécurisés et conformes aux normes suisses.

Nos services électriques incluent :
• Mise aux normes et mise en conformité
• Remplacement de tableaux électriques
• Installation de prises et interrupteurs
• Pose d'éclairage intérieur et extérieur (LED, spots, suspensions)
• Installation de systèmes domotiques
• Pose de bornes de recharge pour véhicules électriques
• Câblage informatique et multimédia

De Genève à Nyon, nos électriciens qualifiés interviennent pour tous vos projets, du dépannage à l'installation complète.`,
    hasImages: false,
  },
  {
    slug: "facade",
    title: "Façade",
    shortDescription: "Ravalement, isolation et peinture de façades.",
    longDescription: `La rénovation de façade embellit votre maison tout en améliorant son isolation thermique. Un ravalement bien réalisé protège durablement vos murs contre les intempéries et valorise votre bien immobilier à Genève.

Nos travaux de façade comprennent :
• Ravalement et nettoyage de façades
• Isolation thermique par l'extérieur (ITE)
• Application d'enduits (crépi, monocouche, traditionnel)
• Peinture de façades et finitions décoratives
• Réparation de fissures et traitement des problèmes d'humidité
• Pose de bardage (bois, composite, métallique)
• Rénovation de balcons et corniches

Nous intervenons à Genève, Plan-les-Ouates, Carouge et dans tout le canton pour redonner vie à votre façade.`,
    hasImages: true,
  },
  {
    slug: "faux-plafond",
    title: "Faux Plafond",
    shortDescription: "Plafonds suspendus et tendus pour isolation.",
    longDescription: `Le faux plafond est une solution idéale pour améliorer l'isolation, cacher des gaines techniques ou moderniser l'esthétique d'une pièce. Nous installons tous types de plafonds suspendus et tendus à Genève romande.

Nos réalisations incluent :
• Faux plafonds suspendus en plaques de plâtre (BA13)
• Plafonds démontables avec dalles acoustiques
• Plafonds tendus en toile PVC ou polyester
• Intégration de spots et éclairage LED
• Isolation phonique et acoustique
• Isolation thermique des combles
• Coffrage pour poutres et gaines techniques

Que vous soyez à Genève, Lausanne ou Vevey, nous concevons des plafonds adaptés à vos besoins fonctionnels et esthétiques.`,
    hasImages: false,
  },
  {
    slug: "fenetre-velux",
    title: "Fenêtre & Velux",
    shortDescription: "Pose de fenêtres, baies vitrées et velux.",
    longDescription: `Le remplacement de fenêtres améliore considérablement l'isolation thermique et acoustique de votre logement, tout en réduisant vos factures d'énergie. Nous installons tous types de menuiseries à Genève.

Nos services de menuiserie comprennent :
• Pose de fenêtres PVC, aluminium ou bois
• Installation de baies vitrées et portes-fenêtres
• Pose de velux et fenêtres de toit
• Remplacement de double ou triple vitrage
• Installation de volets roulants et battants
• Pose de stores intérieurs et extérieurs
• Portes d'entrée et portes de service

De Genève à Morges, nous vous conseillons sur les meilleures solutions pour optimiser la luminosité et l'isolation de votre habitation.`,
    hasImages: true,
  },
  {
    slug: "parquet-carrelage",
    title: "Parquet & Carrelage",
    shortDescription: "Pose de parquet massif, stratifié et carrelage.",
    longDescription: `Le revêtement de sol transforme l'atmosphère de votre intérieur. Qu'il s'agisse de parquet chaleureux ou de carrelage élégant, nous posons tous types de sols à Genève romande avec un souci du détail et de la finition.

Nos prestations de revêtement de sol :
• Pose de parquet massif, contrecollé ou stratifié
• Installation de carrelage (grès cérame, faïence, pierre naturelle)
• Pose de carreaux grand format et mosaïque
• Ragréage et préparation des supports
• Pose sur plancher chauffant
• Plinthes et finitions
• Rénovation et ponçage de parquets anciens

Nous intervenons à Genève, Versoix, Thônex et dans toute la région pour sublimer vos sols intérieurs et extérieurs.`,
    hasImages: true,
  },
  {
    slug: "peinture-tappisserie",
    title: "Peinture & Tapisserie",
    shortDescription: "Peinture intérieure et pose de papier peint.",
    longDescription: `La peinture et la tapisserie personnalisent votre intérieur et lui donnent du caractère. Nous réalisons tous travaux de décoration murale à Genève, du simple rafraîchissement à la transformation complète.

Nos travaux de peinture et décoration :
• Peinture intérieure (murs, plafonds, boiseries)
• Application de peintures décoratives et effets
• Pose de papier peint et revêtements muraux
• Pose de toile de verre et crépi intérieur
• Laquage de portes et meubles
• Traitement des fissures et préparation des supports
• Conseil en couleurs et décoration

De Genève à Gland, nos peintres qualifiés transforment vos espaces avec des finitions soignées et durables.`,
    hasImages: false,
  },
  {
    slug: "plomberie-chauffage",
    title: "Plomberie & Chauffage",
    shortDescription: "Installation et réparation plomberie et chauffage.",
    longDescription: `La plomberie et le chauffage sont essentiels au confort de votre habitation. Nous assurons l'installation, la réparation et l'entretien de tous vos équipements sanitaires et de chauffage à Genève.

Nos services de plomberie et chauffage :
• Installation et remplacement de chaudières (gaz, mazout, pompe à chaleur)
• Pose de radiateurs et planchers chauffants
• Installation de chauffe-eau et boilers
• Rénovation de salles de bain (douche, baignoire, WC, lavabo)
• Débouchage et curage de canalisations
• Détection et réparation de fuites
• Installation d'adoucisseurs d'eau

Nous intervenons rapidement à Genève, Meyrin, Lancy et dans les environs pour tous vos besoins en plomberie et chauffage.`,
    hasImages: false,
  },
  {
    slug: "porte",
    title: "Porte",
    shortDescription: "Portes intérieures, d'entrée et de garage.",
    longDescription: `Le remplacement de portes améliore la sécurité, l'isolation et l'esthétique de votre habitation. Nous installons tous types de portes à Genève, de la porte d'entrée sécurisée aux portes intérieures décoratives.

Nos installations de portes comprennent :
• Portes d'entrée (bois, aluminium, PVC, blindées)
• Portes intérieures (battantes, coulissantes, à galandage)
• Portes de garage (sectionnelles, basculantes, enroulables)
• Portes de service et portes techniques
• Blocs-portes coupe-feu et acoustiques
• Portes vitrées et verrières d'intérieur
• Pose de poignées et serrures de sécurité

De Genève à Rolle, nous vous conseillons sur les meilleures solutions adaptées à votre budget et à vos exigences de sécurité.`,
    hasImages: true,
  },
  {
    slug: "salle-de-bain",
    title: "Salle de Bain",
    shortDescription: "Rénovation complète de salles de bain.",
    longDescription: `La rénovation de salle de bain crée un espace de bien-être adapté à vos besoins quotidiens. Nous réalisons des transformations complètes ou partielles de salles de bain à Genève romande.

Nos travaux de salle de bain incluent :
• Remplacement de baignoire par une douche à l'italienne
• Installation de douches, baignoires et balnéo
• Pose de meubles vasques et miroirs
• Carrelage mural et au sol
• Installation de WC suspendus
• Plomberie et raccordements
• Ventilation et extraction d'air
• Chauffage au sol et sèche-serviettes

De Genève à Nyon, nous transformons votre salle de bain en un espace moderne, fonctionnel et agréable à vivre.`,
    hasImages: true,
  },
  {
    slug: "toiture-isolation",
    title: "Toiture & Isolation",
    shortDescription: "Réfection de toiture et isolation des combles.",
    longDescription: `La toiture protège votre maison des intempéries tandis qu'une bonne isolation réduit vos dépenses énergétiques. Nous assurons tous travaux de couverture et d'isolation à Genève.

Nos prestations toiture et isolation :
• Réfection complète ou partielle de toiture
• Remplacement de tuiles, ardoises ou tôles
• Pose de toitures plates et étanchéité
• Isolation des combles perdus ou aménagés
• Isolation par l'intérieur (laine de verre, laine de roche)
• Isolation par l'extérieur (sarking)
• Installation de fenêtres de toit et lucarnes
• Zinguerie (gouttières, chéneaux, descentes)

Nous intervenons à Genève, Chêne-Bourg, Onex et dans tout le canton pour assurer l'étanchéité et l'isolation de votre toiture.`,
    hasImages: true,
  },
  {
    slug: "veranda",
    title: "Véranda",
    shortDescription: "Construction de vérandas pour agrandir votre espace.",
    longDescription: `La véranda est une extension lumineuse qui agrandit votre espace de vie tout en créant un lien avec le jardin. Nous concevons et construisons des vérandas sur mesure à Genève romande.

Nos réalisations de vérandas comprennent :
• Vérandas en aluminium, PVC ou bois
• Extensions vitrées et jardins d'hiver
• Toitures en verre, polycarbonate ou panneaux isolants
• Stores et protections solaires intégrés
• Chauffage et ventilation
• Fondations et préparation du terrain
• Démarches administratives et permis de construire

De Genève à Lausanne, nous créons des vérandas qui s'intègrent harmonieusement à votre architecture et répondent à vos envies d'espace et de lumière.`,
    hasImages: false,
  },
];

export function getRenovationBySlug(slug: string): RenovationType | undefined {
  return RENOVATION_TYPES.find((r) => r.slug === slug);
}
