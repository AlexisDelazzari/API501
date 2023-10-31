
import Pokemons from "./pokemonSauvage.json"
import {Pokemon} from "../../../../domain/models/pokemon";
import {PokemonRepository} from "../../../../domain/interfaces/repositories/pokemon-repository";

export class JsonPokemonDataSource implements PokemonRepository {
    async getAllPokemon(): Promise<Pokemon[]> {
        // Mapping des résultats de la base de données vers le modèle Pokemon
        const pokemonList: Pokemon[] = Pokemons;
        return pokemonList;
    }
    

    async getOnePokemon(id: number): Promise<Pokemon[]> {

        const pokemonList: Pokemon[] = Pokemons
        return pokemonList
        // return pokemonList.find((pokemon) => pokemon.id === id)
    }

}
