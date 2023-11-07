import {Stats} from "../../general/stats";
import Attaque from "../../general/attaque";

export default interface PokemonUtilisable {
    id : number;
    niveau: number;
    stats: Stats;
    nom: string;
    type1: string | number;
    type2: string | null;
    image: string;
    attaques: [Attaque, Attaque, Attaque, Attaque];
    nature : string;
    talent : string;
    sexe : string;
    xp : number;
}