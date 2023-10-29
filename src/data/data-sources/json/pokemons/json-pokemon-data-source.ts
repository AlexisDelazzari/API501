import { Pokemon } from '../../../../domain/models/pokemon';
import { PokemonRepository } from '../../../../domain/interfaces/repositories/pokemon-repository';
import Pokemons from "./pokemon/pokemonSauvage.json"

export class JSONPokemonDataSource implements PokemonRepository {

    async createPokemon(pokemon: Pokemon): Promise<void> {
        // await this.db.query(sql, [pokemon.name]);
    }

    async getAllPokemon(): Promise<Pokemon[]> {
        // Mapping des résultats de la base de données vers le modèle Pokemon
        console.log(Pokemons);
        const pokemonList: Pokemon[] = Pokemons;
        return pokemonList;
    }

}
