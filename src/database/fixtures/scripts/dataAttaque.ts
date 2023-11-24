import attaquesJson from "../json/attaquesJson";
import {AttaqueEntity} from "../../entities/Attaque.entity";
import {CategorieRepository} from "../../repository/Categorie.repository";
import {CritiqueRepository} from "../../repository/Critique.repository";
import {EffetRepository} from "../../repository/Effet.repository";
import {AttaqueRepository} from "../../repository/Attaque.repository";
import {TypeRepository} from "../../repository/Type.repository";

export default async function insertDataAttaque() {
    let attaques = attaquesJson;
    attaques = attaques.reverse();
    let attaquesEntities: AttaqueEntity[] = [];
    for (const attaque of attaques) {
        const attaqueEntity = new AttaqueEntity();
        attaqueEntity.uuid = attaque.uuid;
        attaqueEntity.categorie = await CategorieRepository.findOneByOrFail({id: attaque.uuidCategorie});
        attaqueEntity.critique = await CritiqueRepository.findOneByOrFail({id: attaque.uuidCritique});
        attaqueEntity.effet = await EffetRepository.findOneByOrFail({uuid: attaque.uuidEffet});
        attaqueEntity.type = await TypeRepository.findOneByOrFail({uuid: attaque.uuidType});
        attaqueEntity.attaqueEvol = (attaque.uuidAttaqueEvol === null) ? null : await AttaqueRepository.findOneByOrFail({uuid: attaque.uuidAttaqueEvol});
        attaqueEntity.niveau = attaque.niveau;
        attaqueEntity.pp = attaque.pp;
        attaqueEntity.priorite = attaque.priorite;
        attaqueEntity.nom = attaque.nom;
        attaqueEntity.description = attaque.description;
        attaqueEntity.puissance = attaque.puissance;
        attaqueEntity.precision = attaque.precision;
        attaquesEntities.push(attaqueEntity);
        await AttaqueRepository.save(attaqueEntity);
    }
}