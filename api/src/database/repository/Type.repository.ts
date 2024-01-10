import { dataSource} from "../../config/ormconfig";
import { TypeEntity } from "../entities/Type.entity";

export const TypeRepository = dataSource.getRepository(TypeEntity).extend({

})