import { dataSource} from "../../config/ormconfig";
import { TalentEffetEntity } from "../entities/TalentEffet.entity";

export const TalentEffetRepository = dataSource.getRepository(TalentEffetEntity).extend({

})