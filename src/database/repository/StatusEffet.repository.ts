import { dataSource} from "../../config/ormconfig";
import { StatusEffetEntity } from "../entities/StatusEffet.entity";

export const StatusEffetRepository = dataSource.getRepository(StatusEffetEntity).extend({

})