// domain/use-cases/pokemon.ts
import { PokemonRepository } from '../interfaces/repositories/pokemon-repository';
import { Pokedex } from '../models/pokedex/pokedex';

export async function getOnePokemon(repository: PokemonRepository, id : number): Promise<any[]> {
    // Appeler la méthode du référentiel pour récupérer tous les Pokémon
    const onePokemon = await repository.getOnePokemon(id);
    return onePokemon;
}

export async function getAllPokemon(repository: PokemonRepository): Promise<any[]> {
    // Appeler la méthode du référentiel pour récupérer tous les Pokémon
    const onePokemon = await repository.getAllPokemon();
    return onePokemon;
}
