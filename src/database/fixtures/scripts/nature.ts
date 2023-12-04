import {CategorieEntity} from "../../entities/Categorie.entity";
import {CategorieRepository} from "../../repository/Categorie.repository";
import NatureJson from "../json/natureJson";
import {NatureEntity} from "../../entities/Nature.entity";
import {NatureRepository} from "../../repository/Nature.repository";

export default async function insertNatures() {
    let natures = NatureJson
    let naturesEntities: NatureEntity[] = [];
    for (const nature of natures) {
        const natureEntity = new NatureEntity();
        natureEntity.name = nature.nom;
        naturesEntities.push(natureEntity);
    }

    naturesEntities.forEach(entity => {
        NatureRepository.save(entity);
    });

}