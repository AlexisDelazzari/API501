import { dataSource} from "../../config/ormconfig";
import { ListItemDropEntity } from "../entities/ListItemDrop.entity";

export const ListItemDropRepository = dataSource.getRepository(ListItemDropEntity).extend({

})