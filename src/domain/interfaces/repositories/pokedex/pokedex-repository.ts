// domain/interfaces/repositories/pokemon-repository.ts
import {Pokemon} from '../../../models/pokemon';

export interface PokedexRepository {
    getAllPokemon(): Promise<Pokemon[]>;

    getOnePokemon(id: number): Promise<Pokemon | undefined>
}


