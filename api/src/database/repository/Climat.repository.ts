import { dataSource} from "../../config/ormconfig";
import { ClimatEntity } from "../entities/Climat.entity";

export const ClimatRepository = dataSource.getRepository(ClimatEntity).extend({

})