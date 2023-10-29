// Interfaces

// Attaque
interface Attaque {
    id: number;
    niveau: number;
}

// Statistique
interface Statistique {
    "point de vie": number;
    attaque: number;
    defense: number;
    "attaque special": number;
    "defense special": number;
    vitesse: number;
    total: number;
}

// Loot
interface Loot {
    idItem: number;
    taux: number;
    nombre: number[];
}

// Pokémon
interface Pokemon {
    id: number;
    nom: string;
    "type 1": number;
    "type 2": number | null;
    evolution: number;
    evolutionId: number;
    sexe: string;
    image: string;
    desciption: string;
    taille: string;
    poids: string;
    talent1: number;
    talent2: number;
    nature: string;
    attaques: Attaque[];
    statistique: Statistique;
    lieux: string[];
    tauxCapture: number;
    xp: number;
    loot: Loot[];
}

// Item
interface Item {
    id: number;
    // ... (other properties)
}

// Export des interfaces
export { Pokemon, Item };
