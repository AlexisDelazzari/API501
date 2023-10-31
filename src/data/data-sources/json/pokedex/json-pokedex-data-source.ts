import {PokedexRepository} from '../../../../domain/interfaces/repositories/pokedex/pokedex-repository';
import Pokemons from "./pokedex.json"
import {Pokemon} from "../../../../domain/models/pokemon";

export class JsonPokedexDataSource implements PokedexRepository {
    async getAllPokemon(): Promise<Pokemon[]> {
        // Mapping des résultats de la base de données vers le modèle Pokemon
        const pokemonList: Pokemon[] = Pokemons;
        return pokemonList;
    }

    async getOnePokemon(id: number): Promise<Pokemon | undefined> {

        const pokemonList: Pokemon[] = Pokemons
        return pokemonList.find((pokemon) => pokemon.id === id)
    }

}
