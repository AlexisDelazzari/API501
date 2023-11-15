import { dataSource } from "../../../config/ormconfig";
import {DEFAULT_POKEMON} from "../../entity/pokemons/default-pokemon.entity";
import {Pokedex} from "../../../models/pokedex/pokedex";

export const DefaultPokemonRepository = dataSource.getRepository(DEFAULT_POKEMON).extend({

    async getAllPokemon() : Promise<Pokedex[]> {
        return this.find();
    },

    async getOnePokemon(id: number) : Promise<Pokedex> {
        return this.findOne(id);
    }
})