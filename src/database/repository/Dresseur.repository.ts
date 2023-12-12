import { dataSource } from "../../config/ormconfig";
import {DresseurEntity} from "../entities/Dresseur.entity";

export const DresseurRepository = dataSource.getRepository(DresseurEntity).extend({

    async getAllDresseurFromOneRoad() : Promise<DresseurEntity[]> {
        return this.find();
    },
    
    async getOneDresseur(id : number) : Promise<DresseurEntity[]> {
        return this.findOneByOrFail({uuid : id});
    },
})