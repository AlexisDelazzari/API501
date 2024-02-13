const typesJson = [
    {
        id: 1,
        name: "Plante",
        image: "https://www.pokepedia.fr/images/9/92/Miniature_Type_Plante_NPSnap.png",
        description: "Les Pokémon de type Plante sont des Pokémon qui ont des caractéristiques végétales. Ils sont souvent de couleur verte et sont souvent associés à la nature. Ils sont souvent résistants aux attaques de type Eau, Sol et Roche."
    },
    {
        id: 2,
        name: "Feu",
        image: "https://www.pokepedia.fr/images/2/2f/Miniature_Type_Feu_NPSnap.png",
        description: "Les Pokémon de type Feu sont des Pokémon qui ont des caractéristiques de feu. Ils sont souvent de couleur rouge et sont souvent associés à la chaleur. Ils sont souvent résistants aux attaques de type Plante, Glace, Insecte et Acier."
    },
    {
        id: 3,
        name: "Eau",
        image: "https://www.pokepedia.fr/images/b/bc/Miniature_Type_Eau_NPSnap.png",
        description: "Les Pokémon de type Eau sont des Pokémon qui ont des caractéristiques aquatiques. Ils sont souvent de couleur bleue et sont souvent associés à l'eau. Ils sont souvent résistants aux attaques de type Feu, Glace, Acier et Eau."
    },
    {
        id: 4,
        name: "Insecte",
        image: "https://www.pokepedia.fr/images/4/41/Miniature_Type_Insecte_NPSnap.png",
        description: "Les Pokémon de type Insecte sont des Pokémon qui ont des caractéristiques d'insecte. Ils sont souvent de couleur verte et sont souvent associés à la nature. Ils sont souvent résistants aux attaques de type Plante, Combat et Sol."
    },
    {
        id: 5,
        name: "Normal",
        image: "https://www.pokepedia.fr/images/3/35/Miniature_Type_Normal_NPSnap.png",
        description: "Les Pokémon de type Normal sont des Pokémon qui ont des caractéristiques normales. Ils sont souvent de couleur marron et sont souvent associés à la nature. Ils sont souvent résistants aux attaques de type Combat."
    },
    {
        id: 6,
        name: "Electrik",
        image: "https://www.pokepedia.fr/images/8/84/Miniature_Type_%C3%89lectrik_NPSnap.png",
        description: "Les Pokémon de type Électrik sont des Pokémon qui ont des caractéristiques électriques. Ils sont souvent de couleur jaune et sont souvent associés à l'électricité. Ils sont souvent résistants aux attaques de type Vol, Acier et Electrik."
    },
    {
        id: 7,
        name: "Poison",
        image: "https://www.pokepedia.fr/images/0/00/Miniature_Type_Poison_NPSnap.png",
        description: "Les Pokémon de type Poison sont des Pokémon qui ont des caractéristiques de poison. Ils sont souvent de couleur violette et sont souvent associés à la toxicité. Ils sont souvent résistants aux attaques de type Plante, Combat et Sol."
    },
    {
        id: 8,
        name: "Fée",
        image: "https://www.pokepedia.fr/images/e/ef/Miniature_Type_F%C3%A9e_NPSnap.png",
        description: "Les Pokémon de type Fée sont des Pokémon qui ont des caractéristiques de fée. Ils sont souvent de couleur rose et sont souvent associés à la magie. Ils sont souvent résistants aux attaques de type Combat, Dragon et Ténèbres."
    },
    {
        id: 9,
        name: "Vol",
        image: "https://www.pokepedia.fr/images/d/df/Miniature_Type_Vol_NPSnap.png",
        description: "Les Pokémon de type Vol sont des Pokémon qui ont des caractéristiques de vol. Ils sont souvent de couleur bleue et sont souvent associés à l'air. Ils sont souvent résistants aux attaques de type Insecte, Plante et Combat."
    },
    {
        id: 10,
        name: "Combat",
        image: "https://www.pokepedia.fr/images/a/a3/Miniature_Type_Combat_NPSnap.png",
        description: "Les Pokémon de type Combat sont des Pokémon qui ont des caractéristiques de combat. Ils sont souvent de couleur rouge et sont souvent associés à la force. Ils sont souvent résistants aux attaques de type Normal, Roche et Ténèbres."
    },
    {
        id: 11,
        name: "Psy",
        image: "https://www.pokepedia.fr/images/d/db/Miniature_Type_Psy_NPSnap.png",
        description: "Les Pokémon de type Psy sont des Pokémon qui ont des caractéristiques psychiques. Ils sont souvent de couleur violette et sont souvent associés à la magie. Ils sont souvent résistants aux attaques de type Combat, Psy et Ténèbres."
    },
    {
        id: 12,
        name: "Sol",
        image: "https://www.pokepedia.fr/images/2/29/Miniature_Type_Sol_NPSnap.png",
        description: "Les Pokémon de type Sol sont des Pokémon qui ont des caractéristiques de sol. Ils sont souvent de couleur marron et sont souvent associés à la terre. Ils sont souvent résistants aux attaques de type Electrik, Poison et Roche."
    },
    {
        id: 13,
        name: "Roche",
        image: "https://www.pokepedia.fr/images/b/be/Miniature_Type_Roche_NPSnap.png",
        description: "Les Pokémon de type Roche sont des Pokémon qui ont des caractéristiques de roche. Ils sont souvent de couleur grise et sont souvent associés à la dureté. Ils sont souvent résistants aux attaques de type Feu, Vol et Glace."
    },
    {
        id: 14,
        name: "Spectre",
        image: "https://www.pokepedia.fr/images/8/83/Miniature_Type_Spectre_NPSnap.png",
        description: "Les Pokémon de type Spectre sont des Pokémon qui ont des caractéristiques de spectre. Ils sont souvent de couleur violette et sont souvent associés à la mort. Ils sont souvent résistants aux attaques de type Combat et Normal."
    },
    {
        id: 15,
        name: "Acier",
        image: "https://www.pokepedia.fr/images/b/b3/Miniature_Type_Acier_NPSnap.png",
        description: "Les Pokémon de type Acier sont des Pokémon qui ont des caractéristiques d'acier. Ils sont souvent de couleur grise et sont souvent associés à la solidité. Ils sont souvent résistants aux attaques de type Glace, Roche et Fée."
    },
    {
        id: 16,
        name: "Glace",
        image: "https://www.pokepedia.fr/images/3/3f/Miniature_Type_Glace_NPSnap.png",
        description: "Les Pokémon de type Glace sont des Pokémon qui ont des caractéristiques de glace. Ils sont souvent de couleur bleue et sont souvent associés à la fraîcheur. Ils sont souvent résistants aux attaques de type Plante, Sol, Vol et Dragon."
    },
    {
        id: 17,
        name: "Dragon",
        image: "https://www.pokepedia.fr/images/6/6b/Miniature_Type_Dragon_NPSnap.png",
        description: "Les Pokémon de type Dragon sont des Pokémon qui ont des caractéristiques de dragon. Ils sont souvent de couleur violette et sont souvent associés à la magie. Ils sont souvent résistants aux attaques de type Dragon, Fée et Glace."
    },
    {
        id: 18,
        name: "Ténèbres",
        image: "https://www.pokepedia.fr/images/1/1a/Miniature_Type_T%C3%A9n%C3%A8bres_NPSnap.png",
        description: "Les Pokémon de type Ténèbres sont des Pokémon qui ont des caractéristiques de ténèbres. Ils sont souvent de couleur noire et sont souvent associés à la nuit. Ils sont souvent résistants aux attaques de type Combat, Ténèbres et Spectre."
    },
    {
        id: 19,
        name: "Aucun",
        image: "",
        description: "Sans type"
    }
];

export default typesJson
