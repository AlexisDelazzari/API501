import { dataSource} from "../../config/ormconfig";
import { NatureEntity } from "../entities/Nature.entity";

export const NatureEffetRepository = dataSource.getRepository(NatureEntity).extend({

})