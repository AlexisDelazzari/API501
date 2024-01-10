import typesJson from "../json/typesJson";
import {TypeEntity} from "../../entities/Type.entity";
import {TypeRepository} from "../../repository/Type.repository";

export default async function insertType() {
    let types = typesJson;
    let typeEntities: TypeEntity[] = [];
    for (const type of types) {
        const typeEntity = new TypeEntity();
        typeEntity.uuid = type.id;
        typeEntity.name = type.nom;
        typeEntities.push(typeEntity);
    }

    typeEntities.forEach(entity => {
        TypeRepository.save(entity);
    });

}