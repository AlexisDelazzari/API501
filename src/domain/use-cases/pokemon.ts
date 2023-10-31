// domain/use-cases/pokemon.ts
import { PokemonRepository } from '../interfaces/repositories/pokemon-repository';
import { Pokemon } from '../models/pokemon';

export async function getOnePokemon(repository: PokemonRepository, id : number): Promise<Pokemon[]> {
    // Appeler la méthode du référentiel pour récupérer tous les Pokémon
    const onePokemon = await repository.getOnePokemon(id);
    return onePokemon;
}

export async function getAllPokemon(repository: PokemonRepository): Promise<Pokemon[]> {
    // Appeler la méthode du référentiel pour récupérer tous les Pokémon
    const onePokemon = await repository.getAllPokemon();
    return onePokemon;
}
