import { dataSource} from "../../config/ormconfig";
import { ListItemInZoneEntity } from "../entities/ListItemInZone.entity";

export const ListItemInZoneRepository = dataSource.getRepository(ListItemInZoneEntity).extend({

})