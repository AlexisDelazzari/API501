import { dataSource} from "../../config/ormconfig";
import { ListPokemonInZoneEntity } from "../entities/ListPokemonInZone.entity";

export const ListPokemonInZoneRepository = dataSource.getRepository(ListPokemonInZoneEntity).extend({

})