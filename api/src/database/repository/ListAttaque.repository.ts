import { dataSource} from "../../config/ormconfig";
import { ListAttaqueEntity } from "../entities/ListAttaque.entity";
import {DresseurEntity} from "../entities/Dresseur.entity";

export const ListAttaqueRepository = dataSource.getRepository(ListAttaqueEntity).extend({
    async getDetailOfAttack(id : number) : Promise<ListAttaqueEntity[]> {
        return this.find({
            where : { uuidList : id },
        relations : ["attaque"]
            }
        );
    },

    async getLastUuidList() : Promise<number> {
        const lastUuidList = await this.createQueryBuilder("listAttaque")
            .select("MAX(listAttaque.uuidList)", "max")
            .getRawOne();
        return lastUuidList.max;
    },

    async deleteListAttaque(listAttaque : ListAttaqueEntity[]) : Promise<void> {
        await this.remove(listAttaque);
    }
})