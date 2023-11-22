import listAttaqueJson  from "../json/listAttaqueJson";
import {ListAttaqueEntity} from "../../entities/ListAttaque.entity";
import {AttaqueRepository} from "../../repository/Attaque.repository";
import {ListAttaqueRepository} from "../../repository/ListAttaque.repository";
import {dataSource} from "../../../config/ormconfig";

export default async function ListAttaqueFixture() {

    await dataSource.initialize();

    const listAttaque = listAttaqueJson;
    let listAttaqueEntity: ListAttaqueEntity[] = [];

    for (const attaque of listAttaque) {
        const newAttaque = await AttaqueRepository.findOneBy({uuid: attaque.uuidAttaque});
        if (newAttaque) {
            const newlistAttaque = new ListAttaqueEntity();
            newlistAttaque.uuidList = attaque.uuidList;
            newlistAttaque.idAttaque = attaque.uuidAttaque;
            newlistAttaque.Niveau = attaque.niveau;
            newlistAttaque.attaque = newAttaque;
            listAttaqueEntity.push(newlistAttaque);

            await ListAttaqueRepository.save(newlistAttaque);
        }
    }
}

ListAttaqueFixture();

