import { dataSource} from "../../config/ormconfig";
import { AreneEntity } from "../entities/Arene.entity";

export const AreneRepository = dataSource.getRepository(AreneEntity).extend({

})