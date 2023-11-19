import { dataSource} from "../../config/ormconfig";
import { EffetEntity } from "../entities/Effet.entity";

export const EffetRepository = dataSource.getRepository(EffetEntity).extend({

})