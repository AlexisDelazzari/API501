import { dataSource } from "../../config/ormconfig";
import {DefaultPokemonEntity} from "../entities/DefaultPokemon.entity";

export const DefaultPokemonRepository = dataSource.getRepository(DefaultPokemonEntity).extend({

    async getAllPokemon() : Promise<DefaultPokemonEntity[]> {
        return this.find();
    },
})