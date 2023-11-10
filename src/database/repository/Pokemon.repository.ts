import { AppDataSource } from "../../data-source"
import { PokemonEntity } from "../entity/Pokemon.entity";

export const PokemonRepository = AppDataSource.getRepository(PokemonEntity).extend({
    async getSauvageById(id: number) {
        return this.findOne(id);
    }
})