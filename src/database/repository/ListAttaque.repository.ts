import { dataSource} from "../../config/ormconfig";
import { ListAttaqueEntity } from "../entities/ListAttaque.entity";

export const ListAttaqueRepository = dataSource.getRepository(ListAttaqueEntity).extend({

})