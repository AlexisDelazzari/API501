import { dataSource } from "../../config/ormconfig";
import {DefaultPokemon} from "../entities/DefaultPokemon";
import {Pokedex} from "../../models/pokedex/pokedex";

export const DefaultPokemonRepository = dataSource.getRepository(DefaultPokemon).extend({

    async getAllPokemon() : Promise<DefaultPokemon[]> {
        return this.find();
    },

    async getOnePokemon(id: number) : Promise<Pokedex> {
        return this.findOne(id);
    }
})