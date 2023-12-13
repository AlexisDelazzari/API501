import { dataSource} from "../../config/ormconfig";
import { AttaqueEntity } from "../entities/Attaque.entity";
import {DresseurEntity} from "../entities/Dresseur.entity";

export const AttaqueRepository = dataSource.getRepository(AttaqueEntity).extend({
    
})