// domain/interfaces/repositories/pokemon-repository.ts
import { Pokemon } from '../../models/pokemon';

export interface PokemonRepository {
    createPokemon(pokemon: Pokemon): Promise<void>;
    getAllPokemon(): Promise<Pokemon[]>;
}
