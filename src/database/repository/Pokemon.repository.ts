import { dataSource} from "../../config/ormconfig";
import { Pokemon } from "../entities/Pokemon";

export const PokemonRepository = dataSource.getRepository(Pokemon).extend({
    async getSauvageById(id: number) {
        return this.findOne(id);
    }
})