import Loot from "../../general/loot";
import PokemonUtilisable from "../utilisable/pokemonUtilisable";

export default interface PokemonSauvage extends PokemonUtilisable{
    tauxCapture : number,
    loot : Loot[],
} 

