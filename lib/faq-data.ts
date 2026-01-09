export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: Record<string, FAQItem[]> = {
  "amenagement-jardin": [
    {
      question: "Combien coûte un aménagement de jardin à Genève ?",
      answer: "Le coût d'un aménagement de jardin varie selon l'ampleur du projet. Une terrasse simple coûte entre 150 et 300 CHF/m², tandis qu'un aménagement complet avec plantation peut aller de 50 à 150 CHF/m². Nous établissons un devis gratuit adapté à votre projet.",
    },
    {
      question: "Quelle est la meilleure période pour aménager son jardin ?",
      answer: "Le printemps (mars-mai) et l'automne (septembre-octobre) sont les meilleures périodes pour les plantations. Les travaux de terrassement et pose de terrasse peuvent être réalisés toute l'année, hors périodes de gel.",
    },
    {
      question: "Quels matériaux choisir pour une terrasse durable ?",
      answer: "Pour une terrasse durable à Genève, nous recommandons le bois composite (résistant et peu d'entretien), les dalles en grès cérame (très résistantes au gel) ou le bois traité classe 4. Le choix dépend de votre budget et de l'esthétique souhaitée.",
    },
  ],
  "cheminee-insert-poele": [
    {
      question: "Insert ou poêle à bois : que choisir ?",
      answer: "L'insert s'intègre dans une cheminée existante et offre un meilleur rendement (70-85%). Le poêle est indépendant, plus facile à installer et peut chauffer plusieurs pièces. Le choix dépend de votre configuration et de vos besoins en chauffage.",
    },
    {
      question: "Faut-il un permis pour installer une cheminée à Genève ?",
      answer: "Oui, une autorisation du service du feu (SDIS) est généralement requise. Le ramoneur officiel doit valider l'installation. Nous nous occupons de toutes les démarches administratives pour vous.",
    },
    {
      question: "Quel est le coût d'installation d'un insert à Genève ?",
      answer: "L'installation d'un insert coûte entre 3'000 et 8'000 CHF, pose comprise, selon le modèle et les travaux nécessaires (tubage, habillage). Un poêle à bois revient entre 2'500 et 6'000 CHF installé.",
    },
  ],
  "cuisine": [
    {
      question: "Combien coûte une rénovation de cuisine complète à Genève ?",
      answer: "Une rénovation complète de cuisine coûte entre 15'000 et 50'000 CHF selon la taille, les matériaux et l'électroménager choisis. Un rafraîchissement (peinture, plan de travail) peut démarrer à 5'000 CHF.",
    },
    {
      question: "Combien de temps dure une rénovation de cuisine ?",
      answer: "Une rénovation complète prend généralement 2 à 4 semaines. Un simple rafraîchissement peut être réalisé en quelques jours. Nous planifions les travaux pour minimiser la gêne au quotidien.",
    },
    {
      question: "Quels matériaux choisir pour un plan de travail durable ?",
      answer: "Le quartz et le granit sont les plus durables et résistants aux rayures et à la chaleur. Le stratifié offre un excellent rapport qualité-prix. Le bois massif apporte chaleur mais demande plus d'entretien.",
    },
  ],
  "drainage": [
    {
      question: "Comment savoir si j'ai besoin d'un drainage ?",
      answer: "Les signes d'un problème de drainage incluent : humidité dans la cave, traces de salpêtre, flaques persistantes près des fondations, ou odeurs de moisi. Un diagnostic permet d'identifier la solution adaptée.",
    },
    {
      question: "Combien coûte un drainage périphérique ?",
      answer: "Un drainage périphérique coûte entre 300 et 500 CHF par mètre linéaire, selon la profondeur et l'accessibilité. Pour une maison moyenne, comptez entre 8'000 et 15'000 CHF pour un drainage complet.",
    },
    {
      question: "Quelle est la durée de vie d'un système de drainage ?",
      answer: "Un système de drainage bien installé dure 25 à 50 ans. Un entretien régulier (inspection et nettoyage tous les 2-3 ans) prolonge sa durée de vie et garantit son efficacité.",
    },
  ],
  "electricite": [
    {
      question: "Quand faut-il refaire son installation électrique ?",
      answer: "Une mise aux normes est recommandée si votre installation a plus de 30 ans, si vous avez des disjoncteurs qui sautent fréquemment, des prises qui chauffent, ou si vous rénovez votre logement.",
    },
    {
      question: "Combien coûte une mise aux normes électriques à Genève ?",
      answer: "Une mise aux normes complète coûte entre 8'000 et 20'000 CHF pour un appartement, et 15'000 à 40'000 CHF pour une maison. Le prix dépend de la surface et de l'état de l'installation existante.",
    },
    {
      question: "Puis-je installer une borne de recharge pour voiture électrique ?",
      answer: "Oui, nous installons des bornes de recharge (wallbox) de 7 à 22 kW. L'installation coûte entre 1'500 et 3'500 CHF selon la puissance et la distance au tableau électrique. Des subventions cantonales peuvent réduire le coût.",
    },
  ],
  "facade": [
    {
      question: "Combien coûte un ravalement de façade à Genève ?",
      answer: "Un ravalement simple (nettoyage et peinture) coûte 40-80 CHF/m². Avec isolation thermique par l'extérieur, comptez 150-250 CHF/m². Pour une maison de 150m² de façade, le budget varie de 6'000 à 40'000 CHF.",
    },
    {
      question: "Faut-il un permis pour rénover sa façade à Genève ?",
      answer: "Un simple rafraîchissement à l'identique ne nécessite pas de permis. En revanche, un changement de couleur ou l'ajout d'isolation nécessite une autorisation de construire. Nous vous accompagnons dans les démarches.",
    },
    {
      question: "Quelle est la meilleure saison pour ravaler une façade ?",
      answer: "Le printemps et l'automne sont idéaux, avec des températures entre 10 et 25°C. Évitez les périodes de gel, de forte chaleur ou de pluie prolongée pour garantir une bonne adhérence des enduits et peintures.",
    },
  ],
  "faux-plafond": [
    {
      question: "Quelle hauteur perd-on avec un faux plafond ?",
      answer: "Un faux plafond standard fait perdre 5 à 15 cm de hauteur. Pour intégrer des spots LED, comptez minimum 8 cm. Avec isolation, prévoyez 15-20 cm. La hauteur minimale légale à Genève est de 2,30 m.",
    },
    {
      question: "Faux plafond suspendu ou tendu : lequel choisir ?",
      answer: "Le plafond suspendu (plaques de plâtre) est économique et permet une bonne isolation. Le plafond tendu est plus rapide à poser, sans poussière, et offre des finitions modernes (mat, brillant, imprimé).",
    },
    {
      question: "Combien coûte la pose d'un faux plafond ?",
      answer: "Un faux plafond suspendu coûte 50-80 CHF/m² posé. Un plafond tendu revient à 80-150 CHF/m². Ajoutez 20-40 CHF/m² pour l'isolation thermique ou acoustique.",
    },
  ],
  "fenetre-velux": [
    {
      question: "Combien coûte le remplacement d'une fenêtre à Genève ?",
      answer: "Le remplacement d'une fenêtre double vitrage coûte entre 800 et 2'000 CHF par fenêtre standard, pose comprise. Le triple vitrage ajoute 20-30% au prix. Les baies vitrées coûtent 2'000 à 5'000 CHF.",
    },
    {
      question: "PVC, aluminium ou bois : quel matériau choisir ?",
      answer: "Le PVC offre le meilleur rapport qualité-prix et une bonne isolation. L'aluminium est durable et moderne, idéal pour les grandes baies. Le bois est noble et isolant mais demande un entretien régulier.",
    },
    {
      question: "Les fenêtres sont-elles éligibles à des subventions ?",
      answer: "Oui, le Programme Bâtiments offre des subventions pour le remplacement de fenêtres améliorant l'efficacité énergétique. À Genève, comptez 40-70 CHF/m² de vitrage. Nous vous aidons à constituer le dossier.",
    },
  ],
  "parquet-carrelage": [
    {
      question: "Parquet ou carrelage : que choisir ?",
      answer: "Le parquet apporte chaleur et confort, idéal pour chambres et séjour. Le carrelage est plus résistant et facile d'entretien, parfait pour cuisine, salle de bain et entrée. Les deux sont compatibles avec le chauffage au sol.",
    },
    {
      question: "Combien coûte la pose de parquet à Genève ?",
      answer: "La pose de parquet coûte 40-80 CHF/m² pour du stratifié, 80-150 CHF/m² pour du contrecollé, et 120-200 CHF/m² pour du massif. Le prix inclut la préparation du sol et les finitions.",
    },
    {
      question: "Peut-on poser du parquet sur du carrelage existant ?",
      answer: "Oui, c'est possible si le carrelage est en bon état, plan et stable. Une sous-couche adaptée est nécessaire. Cette solution évite les coûts de dépose et permet de gagner du temps.",
    },
  ],
  "peinture-tappisserie": [
    {
      question: "Combien coûte la peinture d'un appartement à Genève ?",
      answer: "La peinture d'un appartement coûte 25-45 CHF/m² de surface habitable, soit 3'000-6'000 CHF pour un 3 pièces. Le prix varie selon l'état des murs et le type de peinture choisi.",
    },
    {
      question: "Peinture ou papier peint : que choisir ?",
      answer: "La peinture est polyvalente, facile à entretenir et à rafraîchir. Le papier peint offre plus de textures et motifs, idéal pour créer une ambiance. Il revient en force avec des designs modernes.",
    },
    {
      question: "Combien de temps pour repeindre un appartement ?",
      answer: "Comptez 2-3 jours pour un studio, 4-5 jours pour un 3 pièces, et une semaine pour un 5 pièces. Ces délais incluent la préparation des surfaces et les deux couches de peinture.",
    },
  ],
  "plomberie-chauffage": [
    {
      question: "Pompe à chaleur ou chaudière gaz : que choisir ?",
      answer: "La pompe à chaleur est plus écologique et économique à l'usage (COP de 3-4), mais l'investissement initial est plus élevé. La chaudière gaz reste une option fiable avec un coût d'installation moindre.",
    },
    {
      question: "Combien coûte le remplacement d'une chaudière ?",
      answer: "Une chaudière gaz à condensation coûte 8'000-15'000 CHF installée. Une pompe à chaleur air-eau revient à 20'000-35'000 CHF. Des subventions cantonales peuvent couvrir 30-50% du coût d'une PAC.",
    },
    {
      question: "À quelle fréquence entretenir sa chaudière à Genève ?",
      answer: "Un entretien annuel est obligatoire à Genève pour les chaudières à mazout et recommandé pour le gaz. Cela garantit la sécurité, optimise le rendement et prolonge la durée de vie de l'équipement.",
    },
  ],
  "porte": [
    {
      question: "Combien coûte une porte d'entrée sécurisée ?",
      answer: "Une porte d'entrée sécurisée (classe RC2 ou RC3) coûte entre 2'500 et 6'000 CHF pose comprise. Les portes blindées haut de gamme peuvent atteindre 8'000-12'000 CHF avec serrure multipoints.",
    },
    {
      question: "Comment choisir une porte de garage ?",
      answer: "La porte sectionnelle est la plus populaire : compacte, isolante et motorisable. La porte enroulable convient aux petits espaces. Comptez 2'000-5'000 CHF pour une porte motorisée de qualité.",
    },
    {
      question: "Peut-on isoler une porte d'entrée existante ?",
      answer: "Oui, en ajoutant des joints d'étanchéité, un bas de porte et éventuellement un survitrage. Cependant, si la porte est ancienne, le remplacement offre une bien meilleure isolation thermique et acoustique.",
    },
  ],
  "salle-de-bain": [
    {
      question: "Combien coûte une rénovation de salle de bain complète ?",
      answer: "Une rénovation complète coûte entre 15'000 et 35'000 CHF pour une salle de bain standard (5-8m²). Le prix varie selon les équipements choisis et l'ampleur des travaux de plomberie.",
    },
    {
      question: "Combien de temps pour rénover une salle de bain ?",
      answer: "Une rénovation complète prend 1 à 3 semaines selon l'ampleur des travaux. Nous pouvons installer une douche temporaire si nécessaire pour minimiser la gêne.",
    },
    {
      question: "Douche à l'italienne ou receveur classique ?",
      answer: "La douche à l'italienne est esthétique, accessible et facile à nettoyer, mais nécessite une bonne étanchéité. Le receveur classique est moins coûteux et plus simple à installer. Les deux options sont durables.",
    },
  ],
  "toiture-isolation": [
    {
      question: "Combien coûte la réfection d'une toiture à Genève ?",
      answer: "Une réfection complète coûte 150-300 CHF/m² selon les matériaux (tuiles, ardoises). Pour une maison de 100m² de toiture, comptez 15'000-30'000 CHF. L'isolation des combles ajoute 50-100 CHF/m².",
    },
    {
      question: "Quelles subventions pour l'isolation à Genève ?",
      answer: "Le Programme Bâtiments subventionne l'isolation (toiture, murs, sol). À Genève, comptez 40-60 CHF/m² pour l'isolation de toiture. Les démarches doivent être faites AVANT les travaux.",
    },
    {
      question: "Quelle est la durée de vie d'une toiture ?",
      answer: "Les tuiles en terre cuite durent 50-100 ans, les ardoises 75-150 ans, le zinc 50-80 ans. Un entretien régulier (nettoyage, vérification des fixations) prolonge significativement la durée de vie.",
    },
  ],
  "veranda": [
    {
      question: "Faut-il un permis de construire pour une véranda ?",
      answer: "Oui, une véranda nécessite généralement une autorisation de construire à Genève. Les règles varient selon les cantons et communes (distance aux limites, surface maximale). Nous gérons les démarches pour vous.",
    },
    {
      question: "Combien coûte une véranda à Genève ?",
      answer: "Une véranda coûte entre 1'500 et 3'000 CHF/m² selon les matériaux et équipements. Pour une véranda de 20m², comptez 30'000 à 60'000 CHF, fondations et finitions comprises.",
    },
    {
      question: "Comment chauffer une véranda efficacement ?",
      answer: "Les solutions efficaces incluent : le plancher chauffant, les radiateurs basse température, ou les pompes à chaleur air-air. Une bonne isolation (double/triple vitrage, toiture isolée) est essentielle pour limiter les coûts.",
    },
  ],
};

export function getFAQBySlug(slug: string): FAQItem[] {
  return FAQ_DATA[slug] || [];
}
