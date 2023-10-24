// domain/use-cases/pokemon.ts
import { PokemonRepository } from '../interfaces/repositories/pokemon-repository';
import { Pokemon } from '../models/pokemon';

export async function createPokemon(pokemon: Pokemon, repository: PokemonRepository): Promise<Pokemon> {
    // Valider les données du Pokémon si nécessaire

    // Appeler la méthode du référentiel pour créer un Pokémon
    await repository.createPokemon(pokemon);

    return pokemon;
}

export async function getAllPokemon(repository: PokemonRepository): Promise<Pokemon[]> {
    console.log("on est laa")
    // Appeler la méthode du référentiel pour récupérer tous les Pokémon

    console.log("efsefs")
    const allPokemon = await repository.getAllPokemon();
    return allPokemon;
}
