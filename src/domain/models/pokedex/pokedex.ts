import Attaque from "../general/attaque";
import Loot from "../general/loot";
import {Stats} from "../general/stats";


export interface Pokedex {
    id: number;
    nom: string;
    type1: string;
    type2: string | null;
    evolution: number;
    evolutionId: number;
    image: string;
    description: string;
    taille: string;
    poids: string;
    talent1: string;
    talent2?: string | null;
    attaques: Attaque[];
    statistique: Stats;
    lieux: string[];
    tauxCapture: number;
    xp: number;
    loot: Loot[];
}