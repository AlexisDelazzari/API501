import { dataSource} from "../../config/ormconfig";
import { LieuxEntity } from "../entities/Lieux.entity";

export const LieuxRepository = dataSource.getRepository(LieuxEntity).extend({

})