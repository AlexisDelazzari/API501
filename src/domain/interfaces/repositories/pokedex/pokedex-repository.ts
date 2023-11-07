// domain/interfaces/repositories/pokemon-repository.ts
import {Pokedex} from '../../../models/pokedex/pokedex';

export interface PokedexRepository {
    getAllPokemon(): Promise<Pokedex[]>;

    getOnePokemon(id: number): Promise<Pokedex | undefined>
}


