import { dataSource} from "../../config/ormconfig";
import { SacEntity } from "../entities/Sac.entity";

export const SacRepository = dataSource.getRepository(SacEntity).extend({

})