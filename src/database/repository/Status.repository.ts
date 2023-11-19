import { dataSource} from "../../config/ormconfig";
import { StatusEntity } from "../entities/Status.entity";

export const StatusRepository = dataSource.getRepository(StatusEntity).extend({

})