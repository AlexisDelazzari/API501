import listAttaqueJson  from "../json/listAttaqueJson";
import {ListAttaqueEntity} from "../../entities/ListAttaque.entity";
import {AttaqueRepository} from "../../repository/Attaque.repository";
import {ListAttaqueRepository} from "../../repository/ListAttaque.repository";
import {dataSource} from "../../../config/ormconfig";
import listAttaquesJson from "../json/listAttaqueJson";

export default async function insertListAttaqueEffet() {
    const listAttaque = listAttaqueJson;
    for (const attaque of listAttaque) {
        const newAttaque = await AttaqueRepository.findOneByOrFail({uuid: attaque.uuidAttaque});
        if (newAttaque) {
            const newlistAttaque = new ListAttaqueEntity();
            newlistAttaque.uuidList = attaque.uuidList;
            newlistAttaque.idAttaque = attaque.uuidAttaque;
            newlistAttaque.Niveau = attaque.niveau;
            newlistAttaque.attaque = newAttaque;
            await ListAttaqueRepository.save(newlistAttaque);
        }
    }
}

