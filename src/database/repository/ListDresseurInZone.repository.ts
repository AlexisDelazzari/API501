import { dataSource} from "../../config/ormconfig";
import { ListDresseurInZoneEntity} from "../entities/ListDresseurInZone.entity";

export const ListDresseurInZoneRepository = dataSource.getRepository(ListDresseurInZoneEntity).extend({

})