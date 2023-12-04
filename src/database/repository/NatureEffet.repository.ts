import { dataSource} from "../../config/ormconfig";
import { NatureEntity } from "../entities/Nature.entity";
import {NatureEffetEntity} from "../entities/NatureEffet.entity";

export const NatureEffetRepository = dataSource.getRepository(NatureEffetEntity).extend({

})