import { dataSource} from "../../config/ormconfig";
import { AreneEntity } from "../entities/Arene.entity";

export const PokemonRepository = dataSource.getRepository(AreneEntity).extend({
    async getSauvageById(id: number) {
        return this.findOne(id);
    }
})