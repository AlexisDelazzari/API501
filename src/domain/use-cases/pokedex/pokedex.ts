
import { PokedexRepository } from '../../interfaces/repositories/pokedex/pokedex-repository';
import { Pokemon } from '../../models/pokemon';


export async function getAllPokedex(repository: PokedexRepository): Promise<Pokemon[]> {
    const allPokemon = await repository.getAllPokemon();
    return allPokemon;
}

export async function getOnePokedex(repository: PokedexRepository, id : number): Promise<Pokemon | undefined> {
    const onePokemon = await repository.getOnePokemon(id);
    return onePokemon;
}
