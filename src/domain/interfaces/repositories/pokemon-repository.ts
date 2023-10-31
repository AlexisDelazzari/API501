// domain/interfaces/repositories/pokemon-repository.ts
import { Pokemon } from '../../models/pokemon';

export interface PokemonRepository {
    getOnePokemon(id : number): Promise<Pokemon[]>;
}
