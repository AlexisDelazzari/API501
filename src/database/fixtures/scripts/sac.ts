import {SacEntity} from "../../entities/Sac.entity";
import sacJson from "../json/sacJson";
import {SacRepository} from "../../repository/Sac.repository";

export default async function insertSac() {
    let sacs = sacJson
    let sacsEntities: SacEntity[] = [];
    for (const sac of sacs) {
        const sacEntity = new SacEntity();
        sacEntity.uuid = sac.uuid;
        sacsEntities.push(sacEntity);
    }
    sacsEntities.forEach(entity => {
        SacRepository.save(entity);
    });
}