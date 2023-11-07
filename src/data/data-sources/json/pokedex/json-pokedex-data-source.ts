import {PokedexRepository} from '../../../../domain/interfaces/repositories/pokedex/pokedex-repository';
import Pokemons from "./pokedex.json"
import {Pokedex} from "../../../../domain/models/pokedex/pokedex";

export class JsonPokedexDataSource implements PokedexRepository {
    async getAllPokemon(): Promise<Pokedex[]> {
        // Mapping des résultats de la base de données vers le modèle Pokemon
        const pokemonList: Pokedex[] = Pokemons;
        return pokemonList;
    }

    async getOnePokemon(id: number): Promise<Pokedex | undefined> {

        const pokemonList: Pokedex[] = Pokemons
        return pokemonList.find((pokemon) => pokemon.id === id)
    }

}
