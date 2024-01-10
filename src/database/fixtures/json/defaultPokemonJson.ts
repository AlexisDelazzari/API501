const defaultPokemonJson = [
    {
        "id": 1,
        "uuidType1": 11,
        "uuidType2": null,
        "uuidTalent1": 1,
        "uuidTalent2": null,
        "uuidListDefaultAttaque": 1,
        "uuidLieux": null,
        "uuidlistLoot": 1,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/1.png?alt=media",
        "poids": "10.2 kg",
        "nom": "Tortipousspouss",
        "description": "Fabriqué à partir de sol, la coquille sur son dos durcit lorsqu'il boit de l'eau. Il vit le long des lacs.",
        "tauxCapture": 45,
        "pv": 65,
        "attaque": 30,
        "defense": 60,
        "attaqueSpeciale": 45,
        "vitesse": 40,
        "total": 300,
        "xp": 64,
        "niveauEvolution": 16,
        "defenseSpeciale": 60,
        "taille": "40 cm"
    },
    {
        "id": 2,
        "uuidType1": 11, // Plante
        "uuidType2": null,
        "uuidTalent1": 1, // Engrais, car OVERGROW correspond à Engrais en français
        "uuidTalent2": null,
        "uuidListDefaultAttaque": null, // Aucune information fournie
        "uuidLieux": null, // Comme indiqué
        "uuidlistLoot": null, // Aucune information fournie
        "idPokemonEvolution": null, // Aucune information fournie
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/2.png?alt=media", // URL fictive basée sur l'ID
        "poids": "56.4 kg",
        "nom": "Groleef",
        "description": "Il vit à côté des rivières dans les forêts",
        "tauxCapture": 45, // Aucune information fournie
        "pv": 70,
        "attaque": 81,
        "defense": 71,
        "attaqueSpeciale": 57,
        "vitesse": 52,
        "total": 401,
        "xp": 45, // Aucune information fournie
        "niveauEvolution": null, // Aucune information fournie
        "defenseSpeciale": 70,
        "taille": "120 cm"
    },
    {
        "id": 3,
        "uuidType1": 11, // GRASS
        "uuidType2": 17, // DARK
        "uuidTalent1": 1, // OVERGROW traduit par "Engrais"
        "uuidTalent2": 4, // Nouveau talent "Sable Volant"
        "uuidListDefaultAttaque": null, // Aucune information fournie
        "uuidLieux": null, // Comme indiqué
        "uuidlistLoot": null, // Aucune information fournie
        "idPokemonEvolution": null, // Aucune information fournie
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/3.png?alt=media", // URL fictive basée sur l'ID
        "poids": "256 kg",
        "nom": "Toritar",
        "description": "Des petits Pokémon se rassemblent parfois sur son dos immobile pour commencer à construire leurs nids. Il erre dans les montagnes à la recherche de nouveaux adversaires à combattre.",
        "tauxCapture": 45, // Aucune information fournie
        "pv": 96,
        "attaque": 125,
        "defense": 108,
        "attaqueSpeciale": 81, // Aucune information fournie
        "vitesse": 59,
        "total": 559,
        "xp": 45, // Aucune information fournie
        "niveauEvolution": null, // Aucune information fournie
        "defenseSpeciale": 81,
        "taille": "210 cm"
    },
    {
        "id": 4,
        "uuidType1": 7,  // FIRE
        "uuidType2": 15, // GROUND
        "uuidTalent1": 5,  // SAND VEIL
        "uuidTalent2": 3,  // BLAZE
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/4.png?alt=media",
        "poids": "14.5 kg",
        "nom": "Charble",
        "description": "La flamme qui brûle au bout de sa queue est une indication de ses émotions. Il bondit pour capturer des proies qui s'approchent trop près.",
        "tauxCapture": 45,
        "pv": 45,
        "attaque": 64,
        "defense": 44,
        "attaqueSpeciale": 53,
        "defenseSpeciale": 48,
        "vitesse": 49,
        "total": 303,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "60 cm"
    },

    {
        "id": 5,
        "uuidType1": 7,  // FIRE
        "uuidType2": 15, // GROUND
        "uuidTalent1": 5,  // SAND VEIL
        "uuidTalent2": 3,  // BLAZE
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/5.png?alt=media",
        "poids": "57 kg",
        "nom": "Charchomp",
        "description": "Sans pitié, ses griffes acérées détruisent les ennemis. Il vole à vitesse supersonique.",
        "tauxCapture": 45,
        "pv": 74,
        "attaque": 108,
        "defense": 82,
        "attaqueSpeciale": 80,
        "defenseSpeciale": 71,
        "vitesse": 94,
        "total": 509,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 6,
        "uuidType1": 7,  // FIRE
        "uuidType2": 15, // GROUND
        "uuidTalent1": 22, // Poison Point
        "uuidTalent2": 3,  // Blaze
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/6.png?alt=media",
        "poids": "76.3 kg",
        "nom": "Charking",
        "description": "Un Charking vole à la recherche d'adversaires robustes. Une fois en furie, rien ne peut l'arrêter.",
        "tauxCapture": 45,
        "pv": 79,
        "attaque": 89,
        "defense": 77,
        "attaqueSpeciale": 101,
        "defenseSpeciale": 81,
        "vitesse": 90,
        "total": 517,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },

    {
        "id": 7,
        "uuidType1": 4,  // EAU
        "uuidType2": null,
        "uuidTalent1": 8,  // Swift Swim
        "uuidTalent2": 9,  // Torrent
        "uuidListDefaultAttaque": null, // Aucune information fournie
        "uuidLieux": null, // Comme indiqué
        "uuidlistLoot": null, // Aucune information fournie
        "idPokemonEvolution": null, // Aucune information fournie
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/7.png?alt=media",
        "poids": "9.8 kg",
        "nom": "Totokarp",
        "description": "Malgré sa petite taille, les mâchoires de Totokarp sont très puissantes. Dans les endroits où l'eau s'accumule, on peut voir de nombreux Totokarp déposés là par le courant.",
        "tauxCapture": 45, // Aucune information fournie
        "pv": 40,
        "attaque": 28,
        "defense": 58,
        "attaqueSpeciale": 34,
        "defenseSpeciale": 38,
        "vitesse": 67,
        "total": 265,
        "xp": 45, // Aucune information fournie
        "niveauEvolution": null, // Aucune information fournie
        "taille": "80 cm"
    },
    {
        "id": 8,
        "uuidType1": 4,  // EAU
        "uuidType2": 5,  // ÉLECTRIQUE
        "uuidTalent1": 10, // Lumiatirance
        "uuidTalent2": 9,  // Torrent
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/8.png?alt=media",
        "poids": "23.8 kg",
        "nom": "Crocoturn",
        "description": "Une fois que ses mâchoires se referment sur sa proie, il ne lâche pas prise. Elles sont formées à partir d'une partie de sa nageoire dorsale.",
        "tauxCapture": 45,
        "pv": 85,
        "attaque": 65,
        "defense": 65,
        "attaqueSpeciale": 85,
        "defenseSpeciale": 64,
        "vitesse": 67,
        "total": 410,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "120 cm"
    },
    {
        "id": 9,
        "uuidType1": 4,  // EAU
        "uuidType2": 5,  // ÉLECTRIQUE
        "uuidTalent1": 10, // Lumiatirance
        "uuidTalent2": 9,  // Torrent
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/9.png?alt=media",
        "poids": "55.7 kg",
        "nom": "Feraturn",
        "description": "Il ouvre sa grande bouche pour intimider les ennemis. Ils sont formés à partir d'une partie de sa nageoire dorsale.",
        "tauxCapture": 45,
        "pv": 98,
        "attaque": 73,
        "defense": 72,
        "attaqueSpeciale": 78,
        "defenseSpeciale": 80,
        "vitesse": 70,
        "total": 471,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "180 cm"
    },
    {
        "id": 10,
        "uuidType1": 7,  // FEU
        "uuidType2": 18, // VOL
        "uuidTalent1": 11, // Pieds Confus (Tangled Feet)
        "uuidTalent2": 12, // Intimidation (Intimidate)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/10.png?alt=media",
        "poids": "24.5 kg",
        "nom": "Growlotto",
        "description": "Doté d'un excellent sens de l'odorat, ce Pokémon n'oublie jamais une odeur. Si son territoire est violé, il ne montre aucune pitié en punissant l'ennemi avec ses griffes acérées.",
        "tauxCapture": 45,
        "pv": 57,
        "attaque": 63,
        "defense": 51,
        "attaqueSpeciale": 63,
        "defenseSpeciale": 50,
        "vitesse": 67,
        "total": 351,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "90 cm"
    },
    {
        "id": 11,
        "uuidType1": 7,  // FEU
        "uuidType2": 18, // VOL
        "uuidTalent1": 11, // Pieds Confus (Tangled Feet)
        "uuidTalent2": 12, // Intimidation (Intimidate)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/11.png?alt=media",
        "poids": "97.3 kg",
        "nom": "Arcageot",
        "description": "Ce Pokémon rapide est dit capable de parcourir 6 200 miles en une journée et une nuit. Beaucoup de dresseurs sont si captivés par ses magnifiques plumes sur la tête qu'ils choisissent Arcageot comme leur Pokémon.",
        "tauxCapture": 45,
        "pv": 87,
        "attaque": 90,
        "defense": 76,
        "attaqueSpeciale": 90,
        "defenseSpeciale": 76,
        "vitesse": 92,
        "total": 511,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "170 cm"
    },
    {
        "id": 12,
        "uuidType1": 5,  // ÉLECTRIQUE
        "uuidType2": 7,  // FEU
        "uuidTalent1": 3,  // Brasier (Blaze)
        "uuidTalent2": 12, // Intimidation (Intimidate)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/12.png?alt=media",
        "poids": "8.7 kg",
        "nom": "Shiquil",
        "description": "Tout son pelage étincelle si un danger est détecté. Le feu brûle vigoureusement si le Pokémon est en colère.",
        "tauxCapture": 45,
        "pv": 43,
        "attaque": 56,
        "defense": 40,
        "attaqueSpeciale": 46,
        "defenseSpeciale": 39,
        "vitesse": 58,
        "total": 282,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "50 cm"
    },
    {
        "id": 13,
        "uuidType1": 5,  // ÉLECTRIQUE
        "uuidType2": 7,  // FEU
        "uuidTalent1": 3,  // Brasier (Blaze)
        "uuidTalent2": 12, // Intimidation (Intimidate)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/13.png?alt=media",
        "poids": "24.8 kg",
        "nom": "Lulava",
        "description": "Ses griffes libèrent de l'électricité avec assez d'ampérage pour causer l'évanouissement. Sa vivacité lui permet d'esquiver les attaques tout en carbonisant l'ennemi.",
        "tauxCapture": 45,
        "pv": 39,
        "attaque": 71,
        "defense": 55,
        "attaqueSpeciale": 59,
        "defenseSpeciale": 66,
        "vitesse": 54,
        "total": 378,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "90 cm"
    },
    {
        "id": 14,
        "uuidType1": 5,  // ÉLECTRIQUE
        "uuidType2": 7,  // FEU
        "uuidTalent1": 3,  // Brasier (Blaze)
        "uuidTalent2": 12, // Intimidation (Intimidate)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/14.png?alt=media",
        "poids": "60.8 kg",
        "nom": "Luxlosion",
        "description": "Il a des yeux qui peuvent tout voir. Luxlosion crée des explosions ardentes qui brûlent tout en cendres.",
        "tauxCapture": 45,
        "pv": 79,
        "attaque": 96,
        "defense": 78,
        "attaqueSpeciale": 99,
        "defenseSpeciale": 81,
        "vitesse": 90,
        "total": 523,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 15,
        "uuidType1": 1,  // ACIER
        "uuidType2": 7,  // FEU
        "uuidTalent1": 13, // Torche (Flashfire)
        "uuidTalent2": 14, // Tête de Roc (Rockhead)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/15.png?alt=media",
        "poids": "39.5 kg",
        "nom": "Alithe",
        "description": "Un Pokémon vêtu d'une armure d'acier. Il utilise son odorat pour détecter les émotions des autres.",
        "tauxCapture": 45,
        "pv": 51,
        "attaque": 70,
        "defense": 63,
        "attaqueSpeciale": 50,
        "defenseSpeciale": 43,
        "vitesse": 50,
        "total": 327,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "60 cm"
    },
    {
        "id": 16,
        "uuidType1": 1,  // ACIER
        "uuidType2": 7,  // FEU
        "uuidTalent1": 13, // Torche (Flashfire)
        "uuidTalent2": 14, // Tête de Roc (Rockhead)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/16.png?alt=media",
        "poids": "257.5 kg",
        "nom": "Agnine",
        "description": "Ses cornes de fer grandissent un peu plus à chaque fois. Le feu qui brûle sauvagement à l'intérieur de son corps est sa source de pouvoir.",
        "tauxCapture": 45,
        "pv": 113,
        "attaque": 76,
        "defense": 110,
        "attaqueSpeciale": 73,
        "defenseSpeciale": 66,
        "vitesse": 80,
        "total": 518,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "200 cm"
    },
    {
        "id": 17,
        "uuidType1": 5,  // ÉLECTRIQUE
        "uuidType2": 15, // SOL
        "uuidTalent1": 5,  // Voile Sable
        "uuidTalent2": 15, // Statique
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/17.png?alt=media",
        "poids": "17.8 kg",
        "nom": "Eleshrew",
        "description": "S'il touche du métal et décharge l'électricité stockée dans son corps, un Eleshrew commence à balancer ses bras en cercles pour se recharger. Sa peau est devenue dure et solide à la suite de la vie dans le désert.",
        "tauxCapture": 45,
        "pv": 46,
        "attaque": 71,
        "defense": 69,
        "attaqueSpeciale": 50,
        "defenseSpeciale": 46,
        "vitesse": 58,
        "total": 340,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "60 cm"
    },
    {
        "id": 18,
        "uuidType1": 5,  // ÉLECTRIQUE
        "uuidType2": 15, // SOL
        "uuidTalent1": 5,  // Voile Sable
        "uuidTalent2": 15, // Statique
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/18.png?alt=media",
        "poids": "21 kg",
        "nom": "Electashrew",
        "description": "Lorsqu'un orage approche, il rivalise avec d'autres pour atteindre des hauteurs susceptibles d'être frappées par la foudre. Sa peau est devenue dure et solide, conséquence de la vie dans le désert.",
        "tauxCapture": 45,
        "pv": 60,
        "attaque": 77,
        "defense": 75,
        "attaqueSpeciale": 70,
        "defenseSpeciale": 66,
        "vitesse": 61,
        "total": 409,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "90 cm"
    },
    {
        "id": 19,
        "uuidType1": 5,  // ÉLECTRIQUE
        "uuidType2": 15, // SOL
        "uuidTalent1": 5,  // Voile Sable
        "uuidTalent2": 16, // Motorisé (Motor Drive)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/19.png?alt=media",
        "poids": "84.1 kg",
        "nom": "Electislash",
        "description": "Il cogne les pointes de ses deux queues contre l'ennemi, puis libère plus de 20 000 volts de puissance. Il s'enroule également pour se protéger de la chaleur intense.",
        "tauxCapture": 45,
        "pv": 75,
        "attaque": 107,
        "defense": 95,
        "attaqueSpeciale": 75,
        "defenseSpeciale": 78,
        "vitesse": 75,
        "total": 505,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "140 cm"
    },
    {
        "id": 20,
        "uuidType1": 5,  // ÉLECTRIQUE
        "uuidTalent1": 17, // Pression
        "uuidTalent2": 18, // Absorb Volt
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/20.png?alt=media",
        "poids": "101.3 kg",
        "nom": "Joltkou",
        "description": "Ses cellules génèrent une faible puissance qui est amplifiée par l'électricité statique de sa fourrure pour lancer des éclairs. Ses rugissements envoient des ondes de choc qui font trembler l'air et le sol comme si des éclairs tombaient.",
        "tauxCapture": 45,
        "pv": 73,
        "attaque": 78,
        "defense": 70,
        "attaqueSpeciale": 111,
        "defenseSpeciale": 96,
        "vitesse": 120,
        "total": 548,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "140 cm"
    },
    {
        "id": 21,
        "uuidType1": 4,  // WATER
        "uuidTalent1": 17, // Pressure
        "uuidTalent2": 19, // Water Absorb
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/21.png?alt=media",
        "poids": "108 kg",
        "nom": "Vaporcune",
        "description": "Vaporcune a subi une mutation spontanée et a développé des nageoires et des branchies qui lui permettent de vivre sous l'eau. Il se déplace sur la terre ferme avec une élégance plane.",
        "tauxCapture": 45,
        "pv": 120,
        "attaque": 71,
        "defense": 96,
        "attaqueSpeciale": 103,
        "defenseSpeciale": 101,
        "vitesse": 78,
        "total": 569,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 22,
        "uuidType1": 7,  // FIRE
        "uuidTalent1": 17, // Pressure
        "uuidTalent2": 13, // Flash Fire
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/22.png?alt=media",
        "poids": "111.5 kg",
        "nom": "Flatei",
        "description": "La fourrure duveteuse de Flatei libère de la chaleur dans l'air pour que son corps ne surchauffe pas. On pense qu'il est né lors de l'éruption d'un volcan.",
        "tauxCapture": 45,
        "pv": 81,
        "attaque": 120,
        "defense": 76,
        "attaqueSpeciale": 93,
        "defenseSpeciale": 98,
        "vitesse": 88,
        "total": 556,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 23,
        "uuidType1": 2,  // COMBAT
        "uuidTalent1": 20, // Impassible
        "uuidTalent2": 21, // Attention
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/23.png?alt=media",
        "poids": "37.1 kg",
        "nom": "Lucalu",
        "description": "Il peut ressentir les auras de toutes choses et est capable de courir toute la nuit.",
        "tauxCapture": 45,
        "pv": 60,
        "attaque": 83,
        "defense": 50,
        "attaqueSpeciale": 88,
        "defenseSpeciale": 60,
        "vitesse": 70,
        "total": 411,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "100 cm"
    },
    {
        "id": 24,
        "uuidType1": 2,  // FIGHTING
        "uuidType2": 7,  // FIRE
        "uuidTalent1": 3,  // BLAZE
        "uuidTalent2": 21, // INNERFOCUS
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/24.png?alt=media",
        "poids": "54.5 kg",
        "nom": "Lucanape",
        "description": "Il a la capacité de ressentir les auras de tout ce qui l'entoure. Son feu ne s'éteint jamais.",
        "tauxCapture": 45,
        "pv": 72,
        "attaque": 106,
        "defense": 70,
        "attaqueSpeciale": 111,
        "defenseSpeciale": 70,
        "vitesse": 102,
        "total": 531,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "120 cm"
    },
    {
        "id": 25,
        "uuidType1": 2,  // FIGHTING
        "uuidType2": 5,  // ELECTRIC
        "uuidTalent1": 17, // PRESSURE
        "uuidTalent2": 21, // INNERFOCUS
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/25.png?alt=media",
        "poids": "116 kg",
        "nom": "Lucakou",
        "description": "Il a la capacité de ressentir les auras de toutes choses. Ses rugissements envoient des ondes de choc à travers l'air et le sol comme si des éclairs s'abattaient.",
        "tauxCapture": 45,
        "pv": 76,
        "attaque": 93,
        "defense": 73,
        "attaqueSpeciale": 115,
        "defenseSpeciale": 80,
        "vitesse": 106,
        "total": 543,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 26,
        "uuidType1": 15,  // GROUND
        "uuidType2": 17, // DARK
        "uuidTalent1": 23, // ILLUSION
        "uuidTalent2": 5,  // SAND VEIL
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/26.png?alt=media",
        "poids": "61.8 kg",
        "nom": "Glisroark",
        "description": "Il observe sa proie en se suspendant à l'envers depuis les branches. Ils protègent leur tanière avec un décor illusoire.",
        "tauxCapture": 45,
        "pv": 70,
        "attaque": 101,
        "defense": 81,
        "attaqueSpeciale": 70,
        "defenseSpeciale": 70,
        "vitesse": 101,
        "total": 493,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "180 cm"
    },
    {
        "id": 27,
        "uuidType1": 11,  // GRASS
        "uuidType2": 18,  // FLYING
        "uuidTalent1": 24, // BIG PECKS
        "uuidTalent2": 6,  // OVERGROW
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/27.png?alt=media",
        "poids": "3.4 kg",
        "nom": "Treeling",
        "description": "Il fait son nid dans un grand arbre de la forêt. Treeling picore sans pitié tout ce qui entre sur son territoire.",
        "tauxCapture": 45,
        "pv": 41,
        "attaque": 48,
        "defense": 40,
        "attaqueSpeciale": 56,
        "defenseSpeciale": 49,
        "vitesse": 64,
        "total": 298,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "40 cm"
    },
    {
        "id": 28,
        "uuidType1": 11,  // GRASS
        "uuidType2": 18,  // FLYING
        "uuidTalent1": 25, // FLAME BODY
        "uuidTalent2": 6,  // OVERGROW
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/28.png?alt=media",
        "poids": "18.8 kg",
        "nom": "Groinder",
        "description": "Des feuilles poussent sur le corps de ce Pokémon. Il bondit ensuite sur les proies désorientées qui sortent de l'herbe.",
        "tauxCapture": 45,
        "pv": 54,
        "attaque": 70,
        "defense": 51,
        "attaqueSpeciale": 75,
        "defenseSpeciale": 60,
        "vitesse": 87,
        "total": 397,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "80 cm"
    },
    {
        "id": 29,
        "uuidType1": 11,  // GRASS
        "uuidType2": 18,  // FLYING
        "uuidTalent1": 24, // BIG PECKS
        "uuidTalent2": 6,  // OVERGROW
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/29.png?alt=media",
        "poids": "38.4 kg",
        "nom": "Scepflame",
        "description": "Dans la jungle, sa puissance est sans égal. Pour intimider ses adversaires, il envoie des braises jaillissant des interstices entre ses plumes.",
        "tauxCapture": 45,
        "pv": 72,
        "attaque": 82,
        "defense": 69,
        "attaqueSpeciale": 94,
        "defenseSpeciale": 79,
        "vitesse": 124,
        "total": 520,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 30,
        "uuidType1": 16,  // GHOST
        "uuidTalent1": 26, // LEVITATE
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/30.png?alt=media",
        "poids": "0.1 kg",
        "nom": "Gastly",
        "description": "Lorsqu'il est exposé à un vent fort, le corps gazeux de Gastly s'amenuise rapidement. Ils se regroupent sous les avant-toits des maisons pour échapper aux ravages du vent.",
        "tauxCapture": 45,
        "pv": 30,
        "attaque": 35,
        "defense": 30,
        "attaqueSpeciale": 100,
        "defenseSpeciale": 35,
        "vitesse": 80,
        "total": 310,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "130 cm"
    },
    {
        "id": 31,
        "uuidType1": 16,  // SPECTRE
        "uuidTalent1": 26, // LÉVITATION
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/31.png?alt=media",
        "poids": "0.1 kg",
        "nom": "Haunter",
        "description": "Si un Haunter vous fait signe alors qu'il flotte dans l'obscurité, ne l'approchez pas. Ce Pokémon essaiera de vous lécher avec sa langue pour vous voler votre vie.",
        "tauxCapture": 45,
        "pv": 45,
        "attaque": 50,
        "defense": 45,
        "attaqueSpeciale": 115,
        "defenseSpeciale": 55,
        "vitesse": 95,
        "total": 405,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "160 cm"
    },
    {
        "id": 32,
        "uuidType1": 16,  // GHOST
        "uuidTalent1": 26, // LEVITATE
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/32.png?alt=media",
        "poids": "40.5 kg",
        "nom": "Gengar",
        "description": "Au cœur de la nuit, votre ombre projetée par un réverbère peut soudainement vous submerger. Il s'agit en réalité d'un Gengar qui passe à côté de vous, se faisant passer pour votre ombre.",
        "tauxCapture": 45,
        "pv": 60,
        "attaque": 65,
        "defense": 60,
        "attaqueSpeciale": 130,
        "defenseSpeciale": 75,
        "vitesse": 110,
        "total": 500,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 33,
        "uuidType1": 7,  // FIRE
        "uuidType2": 10, // NORMAL
        "uuidTalent1": 27, // RUN AWAY
        "uuidTalent2": 6,  // BLAZE
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/33.png?alt=media",
        "poids": "13.8 kg",
        "nom": "Moneary",
        "description": "Pour intimider les attaquants, il étire la flamme sur sa queue pour paraître plus grand. C'est assez douloureux pour faire pleurer un adulte de douleur.",
        "tauxCapture": 45,
        "pv": 61,
        "attaque": 70,
        "defense": 46,
        "attaqueSpeciale": 66,
        "defenseSpeciale": 53,
        "vitesse": 83,
        "total": 379,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "70 cm"
    },
    {
        "id": 34,
        "uuidType1": 7,  // FIRE
        "uuidType2": 18, // FLYING
        "uuidTalent1": 28, // Séquelle (Aftermath)
        "uuidTalent2": 6,  // Brasier (Blaze)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/34.png?alt=media",
        "poids": "35 kg",
        "nom": "Inferblim",
        "description": "Il utilise une forme spéciale d'arts martiaux impliquant tous ses membres. Personne ne sait où ils vont.",
        "tauxCapture": 45,
        "pv": 100,
        "attaque": 88,
        "defense": 53,
        "attaqueSpeciale": 99,
        "defenseSpeciale": 65,
        "vitesse": 89,
        "total": 494,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "120 cm"
    },
    {
        "id": 35,
        "uuidType1": 8, // GLACE
        "uuidType2": 2,  // COMBAT
        "uuidTalent1": 30, // Annule Garde (No Guard)
        "uuidTalent2": 31, // Préscience (Forewarn)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/35.png?alt=media",
        "poids": "30.1 kg",
        "nom": "Jynchop",
        "description": "Jynchop se déhanche rythmiquement comme s'il dansait. Sa force lui permet de porter facilement un lutteur de sumo sur ses épaules.",
        "tauxCapture": 45,
        "pv": 66,
        "attaque": 70,
        "defense": 45,
        "attaqueSpeciale": 88,
        "defenseSpeciale": 75,
        "vitesse": 55,
        "total": 399,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "110 cm"
    },
    {
        "id": 36,
        "uuidType1": 8, // ICE
        "uuidType2": 2,  // FIGHTING
        "uuidTalent1": 30, // Annule Garde (No Guard)
        "uuidTalent2": 31, // Préscience (Forewarn)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/36.png?alt=media",
        "poids": "55.6 kg",
        "nom": "Jynchoke",
        "description": "Jynchoke se déhanche rythmiquement comme s'il dansait. En raison de sa dangerosité, personne n'a jamais retiré sa ceinture.",
        "tauxCapture": 45,
        "pv": 70,
        "attaque": 83,
        "defense": 58,
        "attaqueSpeciale": 93,
        "defenseSpeciale": 83,
        "vitesse": 61,
        "total": 448,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 37,
        "uuidType1": 8, // ICE
        "uuidType2": 2,  // FIGHTING
        "uuidTalent1": 30, // Annule Garde (No Guard)
        "uuidTalent2": 31, // Préscience (Forewarn)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/37.png?alt=media",
        "poids": "85.3 kg",
        "nom": "Jynchamp",
        "description": "Jynchamp se déhanche rythmiquement comme s'il dansait. Son esprit combatif s'enflamme lorsqu'il est confronté à un adversaire coriace.",
        "tauxCapture": 45,
        "pv": 73,
        "attaque": 103,
        "defense": 65,
        "attaqueSpeciale": 73,
        "defenseSpeciale": 98,
        "vitesse": 91,
        "total": 498,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "150 cm"
    },
    {
        "id": 38,
        "uuidType1": 7, // FIRE, according to your provided type list.
        "uuidType2": null,
        "uuidTalent1": 32, // Fuite (Run Away)
        "uuidTalent2": 17, // Pression (Pressure)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/38.png?alt=media",
        "poids": "114.5 kg",
        "nom": "Ho-ta",
        "description": "Ses plumes, qui brillent de sept couleurs selon l'angle de la lumière, sont censées apporter de la joie. Il peut à peine se tenir debout.",
        "tauxCapture": 45,
        "pv": 87,
        "attaque": 100,
        "defense": 66,
        "attaqueSpeciale": 87,
        "defenseSpeciale": 95,
        "vitesse": 124,
        "total": 562,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "240 cm"
    },
    {
        "id": 39,
        "uuidType1": 7, // FIRE, according to your provided type list.
        "uuidType2": null,
        "uuidTalent1": 32, // Fuite (Run Away)
        "uuidTalent2": 17, // Pression (Pressure)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/39.png?alt=media",
        "poids": "147 kg",
        "nom": "Ho-dash",
        "description": "Ses plumes, qui brillent en sept couleurs selon l'angle de la lumière, sont censées apporter de la joie. Mais une fois qu'un Ho-dash devient sérieux, ses crinières ardentes s'enflamment et flamboient alors qu'il galope à une vitesse de 150 mph. Il est très populaire dans les courses de Pokémon.",
        "tauxCapture": 45,
        "pv": 92,
        "attaque": 110,
        "defense": 76,
        "attaqueSpeciale": 100,
        "defenseSpeciale": 129,
        "vitesse": 129,
        "total": 607,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "280 cm"
    },
    {
        "id": 40,
        "uuidType1":3,  // DRAGON
        "uuidType2": 9,   // BUG
        "uuidTalent1": 33, // SWARM
        "uuidTalent2": 34, // TERAVOLT
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/79.png?alt=media",
        "poids": "231.5 kg",
        "nom": "Zekzor",
        "description": "Ce Pokémon apparaît dans les légendes. Il n'est pas facilement perturbé par des sortes d'attaques ordinaires.",
        "tauxCapture": 45,
        "pv": 90,
        "attaque": 90,
        "defense": 136,
        "attaqueSpeciale": 98,
        "defenseSpeciale": 93,
        "vitesse": 73,
        "total": 596,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "240 cm"
    },
    {
        "id": 41,
        "uuidType1": 4, // WATER
        "uuidType2": 2, // FIGHTING
        "uuidTalent1": 6, // BLAZE
        "uuidTalent2": 27, // THICKFAT
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/41.png?alt=media",
        "poids": "40.3 kg",
        "nom": "Azumaiken",
        "description": "Il vit dans l'eau presque toute la journée. Tous les plusieurs années, ses vieilles plumes se consument et de nouvelles plumes souples repoussent à leur place.",
        "tauxCapture": 45,
        "pv": 93,
        "attaque": 93,
        "defense": 96,
        "attaqueSpeciale": 70,
        "defenseSpeciale": 76,
        "vitesse": 70,
        "total": 478,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "140 cm"
    },
    {
        "id": 42,
        "uuidType1": 7,  // feu
        "uuidType2": 18,   // vol
        "uuidTalent1": 17, // Pression
        "uuidTalent2": 6, // Brasier
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/42.png?alt=media",
        "poids": "134 kg",
        "nom": "Blazgia",
        "description": "Il apprend des arts martiaux qui utilisent des coups de poing et des coups de pied. En conséquence, il choisit de vivre hors de vue, profondément sous la mer.",
        "tauxCapture": 45,
        "pv": 88,
        "attaque": 88,
        "defense": 100,
        "attaqueSpeciale": 103,
        "defenseSpeciale": 98,
        "vitesse": 100,
        "total": 599,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "360 cm"
    },
    {
        "id": 43,
        "uuidType1": 17,  // Dark
        "uuidType2": 5,   // Electric
        "uuidTalent1": 17, // Pressure
        "uuidTalent2": 26, // Levitate
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/43.png?alt=media",
        "poids": "169 kg",
        "nom": "Hydreikou",
        "description": "The heads on their arms do not have brains. Its roars send shock waves shuddering through the air and ground as if lightning bolts were crashing down.",
        "tauxCapture": 45,
        "pv": 80,
        "attaque": 91,
        "defense": 91,
        "attaqueSpeciale": 109,
        "defenseSpeciale": 121,
        "vitesse": 93,
        "total": 585,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "190 cm"
    },
    {
        "id": 44,
        "uuidType1": 1,  // acier
        "uuidType2": 3,   // dragon
        "uuidTalent1": 36, // Tête de Roc
        "uuidTalent2": 37, // Corps Sain
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/44.png?alt=media",
        "poids": "68.7 kg",
        "nom": "Belgon",
        "description": "Lorsque les Belgon se rassemblent en essaim, ils se déplacent en parfaite unison comme s'ils ne faisaient qu'un seul Pokémon. Il lance des coups de tête avec son crâne dur comme fer.",
        "tauxCapture": 45,
        "pv": 43,
        "attaque": 41,
        "defense": 68,
        "attaqueSpeciale": 50,
        "defenseSpeciale": 36,
        "vitesse": 66,
        "total": 304,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "60 cm",
    },
    {
        "id": 45,
        "uuidType1": 1,  // acier
        "uuidType2": 3,   // dragon
        "uuidTalent1": 36, // Tête de Roc
        "uuidTalent2": 37, // Corps Sain
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/45.png?alt=media",
        "poids": "156.5 kg",
        "nom": "Unknown",
        "description": "Les griffes au bout de ses bras possèdent une puissance destructrice capable de déchirer des plaques de fer épaisses comme s'il s'agissait de soie. Il devient plus résistant en endurant la faim.",
        "tauxCapture": 45,
        "pv": 61,
        "attaque": 88,
        "defense": 100,
        "attaqueSpeciale": 55,
        "defenseSpeciale": 56,
        "vitesse": 70,
        "total": 425,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "120 cm"
    },
    {
        "id": 46,  // Assuming the next ID in sequence
        "uuidType1": 1,  // Steel
        "uuidType2": 18,   // Flying
        "uuidTalent1": 12, // Intimidate, assuming it matches the ID from your list
        "uuidTalent2": 37, // Clear Body, using the ID from your provided list
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/46.png?alt=media",
        "poids": "326.3 kg",
        "nom": "Metamence",  // Name inferred from the description
        "description": "Metamence has four brains that are joined by a complex neural network. When angered, it loses all thought and rampages out of control.",
        "tauxCapture": 45,  // Assuming the same catch rate as previous examples
        "pv": 85,
        "attaque": 135,
        "defense": 100,
        "attaqueSpeciale": 96,
        "defenseSpeciale": 100,
        "vitesse": 86,
        "total": 592,
        "xp": 45,  // Assuming the same experience as previous examples
        "niveauEvolution": null,
        "taille": "160 cm"
    },
    {
        "id": 47,
        "uuidType1": 17,  // Ténèbres
        "uuidType2": 7,   // Feu
        "uuidTalent1": 17, // Pression
        "uuidTalent2": 38, // Mauvais Rêve (j'utilise l'ID 23 en supposant que c'est le suivant disponible pour "Bad Dreams")
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/47.png?alt=media",
        "poids": "124.3 kg",
        "nom": "Darktei",
        "description": "Il peut endormir les gens et leur faire faire des rêves. On pense qu'il est né lors de l'éruption d'un volcan.",
        "tauxCapture": 45,
        "pv": 85,
        "attaque": 106,
        "defense": 85,
        "attaqueSpeciale": 120,
        "defenseSpeciale": 100,
        "vitesse": 108,
        "total": 590,
        "xp": 45,
        "niveauEvolution": null,
        "taille": "180 cm"
    },
    {
        "id": 48,
        "uuidType1": 4,  // Water
        "uuidType2": 18,  // Flying
        "uuidTalent1": 39, // Air Lock (assuming an ID from your list)
        "uuidTalent2": 12, // Intimidate (assuming an ID from your list)
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/48.png?alt=media",
        "poids": "220.8 kg",
        "nom": "Gyaraquaza",
        "description": "C'est un Pokémon extrêmement vicieux et violent. On dit qu'il descendrait au sol si Kyogre et Groudon venaient à combattre.",
        "tauxCapture": 45,  // The catch rate is assumed to be the same as previous examples
        "pv": 98,
        "attaque": 141,
        "defense": 90,
        "attaqueSpeciale": 86,
        "defenseSpeciale": 96,
        "vitesse": 90,
        "total": 601,
        "xp": 45,  // The experience yield is assumed to be the same as previous examples
        "niveauEvolution": null,
        "taille": "680 cm"
    },
    {
        "id": "49",
        "uuidType1": 16,  // Ghost
        "uuidType2": 13,  // Psychic
        "uuidTalent1": 17, // Pressure
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/49.png?alt=media",
        "poids": "436 kg",
        "nom": "Giratwo",
        "description": "On dit de ce Pokémon qu'il vit dans un monde à l'envers du nôtre. Cependant, même si le pouvoir scientifique des humains a créé son corps, ils n'ont pas réussi à lui donner un cœur chaleureux.",
        "tauxCapture": 45,  // Assuming the catch rate is the same as previous examples
        "pv": 100,
        "attaque": 135,
        "defense": 106,
        "attaqueSpeciale": 110,
        "defenseSpeciale": 118,
        "vitesse": 116,
        "total": 685,
        "xp": 45,  // Assuming the experience yield is the same as previous examples
        "niveauEvolution": null,
        "taille": "330 cm"
    },
    {
        "id": "50",
        "uuidType1": 17,  // Dark
        "uuidType2": 13,  // Psychic
        "uuidTalent1": 17, // Pressure
        "uuidListDefaultAttaque": null,
        "uuidLieux": null,
        "uuidlistLoot": null,
        "idPokemonEvolution": null,
        "image": "https://firebasestorage.googleapis.com/v0/b/pouet-d0eb3.appspot.com/o/50.png?alt=media",
        "poids": "47.4 kg",
        "nom": "Weaxys",
        "description": "Ils vivent dans des régions froides, formant des groupes de quatre ou cinq pour chasser leurs proies avec une coordination impressionnante. Leur corps est configuré pour une agilité supérieure.",
        "tauxCapture": 45,  // The catch rate is assumed to be the same as previous examples
        "pv": 55,
        "attaque": 63,
        "defense": 140,
        "attaqueSpeciale": 141,
        "defenseSpeciale": 80,
        "vitesse": 73,
        "total": 552,
        "xp": 45,  // The experience yield is assumed to be the same as previous examples
        "niveauEvolution": null,
        "taille": "140 cm"
    }




















































]

export default defaultPokemonJson