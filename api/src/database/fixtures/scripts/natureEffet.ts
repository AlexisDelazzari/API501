import {CategorieEntity} from "../../entities/Categorie.entity";
import {CategorieRepository} from "../../repository/Categorie.repository";
import NatureJson from "../json/natureJson";
import {NatureEntity} from "../../entities/Nature.entity";
import {NatureRepository} from "../../repository/Nature.repository";
import NatureEffetJson from "../json/natureEffetJson";
import {NatureEffetEntity} from "../../entities/NatureEffet.entity";
import natureEffetJson from "../json/natureEffetJson";
import {NatureEffetRepository} from "../../repository/NatureEffet.repository";

export default async function insertNaturesEffet() {
    let naturesEffets = NatureEffetJson;
    let naturesEffetEntities: NatureEffetEntity[] = [];
    for (const natureEffet of naturesEffets) {
        const natureEffetEntity = new NatureEffetEntity();
        natureEffetEntity.nature = await NatureRepository.findOneByOrFail({uuid: natureEffet.UUID_NATURE});
        natureEffetEntity.stat = natureEffet.STAT;
        natureEffetEntity.multiplicateur = natureEffet.MULTIPLICATEUR;
        naturesEffetEntities.push(natureEffetEntity);
    }

    naturesEffetEntities.forEach(entity => {
        NatureEffetRepository.save(entity);
    });

}