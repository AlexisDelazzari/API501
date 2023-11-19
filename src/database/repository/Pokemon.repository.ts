import { dataSource} from "../../config/ormconfig";
import { PokemonEntity } from "../entities/Pokemon.entity";

export const PokemonRepository = dataSource.getRepository(PokemonEntity).extend({
    async getSauvageById(id: number) {
        return this.findOne(id);
    }
})