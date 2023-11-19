import { dataSource} from "../../config/ormconfig";
import { AttaqueEntity } from "../entities/Attaque.entity";

export const AttaqueRepository = dataSource.getRepository(AttaqueEntity).extend({

})