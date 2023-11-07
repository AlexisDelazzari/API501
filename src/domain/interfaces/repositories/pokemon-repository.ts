// domain/interfaces/repositories/pokemon-repository.ts
import { Pokedex } from '../../models/pokedex/pokedex';
import PokemonSauvage from "../../models/pokemon/sauvage/pokemonSauvage";

export interface PokemonRepository {
    getOnePokemon(id : number): Promise<PokemonSauvage[]>;
    getAllPokemon(): Promise<PokemonSauvage[]>;
}
