import { dataSource} from "../../config/ormconfig";
import { NatureEntity } from "../entities/Nature.entity";

export const NatureRepository = dataSource.getRepository(NatureEntity).extend({

})