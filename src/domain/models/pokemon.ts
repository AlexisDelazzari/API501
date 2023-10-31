export interface Attaque {
    id: number;
    nom: string;
    niveau: number;
}

export interface Statistique {
    hp: number;
    attaque: number;
    defense: number;
    attaqueSpeciale: number;
    defenseSpeciale: number;
    vitesse: number;
    total: number;
}

export interface Loot {
    idItem: number;
    taux: number;
    nom: string;
    nombre: number[];
}

export interface Pokemon {
    id: number;
    nom: string;
    type1: string | number;
    type2?: string | null;
    evolution: number;
    evolutionId: number;
    image: string;
    description: string;
    taille: string;
    poids: string;
    talent1: string;
    talent2?: string | null;
    attaques: Attaque[];
    statistique: Statistique;
    lieux: string[];
    tauxCapture: number;
    xp: number;
    loot: Loot[];
}