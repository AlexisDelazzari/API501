import { dataSource} from "../../config/ormconfig";
import { CritiqueEntity } from "../entities/Critique.entity";

export const CritiqueRepository = dataSource.getRepository(CritiqueEntity).extend({

})