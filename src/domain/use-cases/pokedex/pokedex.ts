
import { PokedexRepository } from '../../interfaces/repositories/pokedex/pokedex-repository';
import { Pokedex } from '../../models/pokedex/pokedex';


export async function getAllPokedex(repository: PokedexRepository): Promise<Pokedex[]> {
    const allPokemon = await repository.getAllPokemon();
    return allPokemon;
}

export async function getOnePokedex(repository: PokedexRepository, id : number): Promise<Pokedex | undefined> {
    const onePokemon = await repository.getOnePokemon(id);
    return onePokemon;
}
