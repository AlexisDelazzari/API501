import talentEffetsJson from "../json/talentEffetsJson";
import {TalentEffetEntity} from "../../entities/TalentEffet.entity";
import {TalentEffetRepository} from "../../repository/TalentEffet.repository";

export default async function insertTalentEffet() {
    let talentEffets = talentEffetsJson;
    let talentEffetEntities: TalentEffetEntity[] = [];

    for (const talentEffet of talentEffets) {
        const talentEffetEntity = new TalentEffetEntity();
        talentEffetEntity.nom = talentEffet.nom;
        talentEffetEntity.description = talentEffet.description;

        talentEffetEntities.push(talentEffetEntity);
    }
    for (const element of talentEffetEntities) {
        await TalentEffetRepository.save(element);
    }

}