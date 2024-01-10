import { dataSource} from "../../config/ormconfig";
import { CategorieEntity } from "../entities/Categorie.entity";

export const CategorieRepository = dataSource.getRepository(CategorieEntity).extend({

})