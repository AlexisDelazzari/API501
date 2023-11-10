import { AppDataSource } from "../../data-source"
import {DefaultPokemonEntity} from "../entity/DefaultPokemon.entity";

export const DefaultPokemonRepository = AppDataSource.getRepository(DefaultPokemonEntity).extend({

    async getAllPokemon() {
        return this.find();
    },

    async getOnePokemon(id: number) {
        return this.findOne(id);
    }
})