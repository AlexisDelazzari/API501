import {EffetEntity} from "../../entities/Effet.entity";
import {StatusRepository} from "../../repository/Status.repository";
import {EffetRepository} from "../../repository/Effet.repository";
import effetJson from "../json/effetsJson";

export default async function insertEffet() {
    let effets = effetJson;
    const effetsEntities: EffetEntity[] = [];
    for (const element of effets) {
        const effetsEntity: EffetEntity = new EffetEntity();
        effetsEntity.uuid = element.id;
        effetsEntity.name = element.name;
        effetsEntity.image = element.image;
        effetsEntities.push(effetsEntity);
    }

    effetsEntities.forEach((entity) => {
        EffetRepository.save(entity);
    });

}