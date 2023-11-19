import { dataSource} from "../../config/ormconfig";
import { ItemEntity } from "../entities/Item.entity";

export const ItemRepository = dataSource.getRepository(ItemEntity).extend({

})