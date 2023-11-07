
import Pokemons from "./pokemonSauvage.json"
import {Pokedex} from "../../../../domain/models/pokedex/pokedex";
import {PokemonRepository} from "../../../../domain/interfaces/repositories/pokemon-repository";
import PokemonSauvage from "../../../../domain/models/pokemon/sauvage/pokemonSauvage";

export class JsonPokemonDataSource implements PokemonRepository {
    async getAllPokemon(): Promise<any[]> {
        // Mapping des résultats de la base de données vers le modèle Pokemon
        const pokemonList: any[] = Pokemons;
        return pokemonList;
    }
    

    async getOnePokemon(id: number): Promise<PokemonSauvage[]> {

        const pokemonList: any[] = Pokemons
        return pokemonList
        // return pokemonList.find((pokemon) => pokemon.id === id)
    }

}
