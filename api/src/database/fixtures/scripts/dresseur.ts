import dresseurJson from "../json/dresseurJson";
import {DresseurEntity} from "../../entities/Dresseur.entity";
import {SacRepository} from "../../repository/Sac.repository";
import {DresseurRepository} from "../../repository/Dresseur.repository";

export default async function insertDresseur() {
    let dresseurs = dresseurJson

    let dresseursEntities: DresseurEntity[] = [];
    for (const dresseur of dresseurs) {
        const dresseurEntity = new DresseurEntity();
        dresseurEntity.dialogue = dresseur.DIALOGUE;
        dresseurEntity.rewardMoney = dresseur.REWARD_MONEY;
        dresseurEntity.sac = await SacRepository.findOneByOrFail({uuid : dresseur.UUID});
        dresseurEntity.name = dresseur.NAME;
        dresseurEntity.isHero = dresseur.IS_HERO;
        dresseurEntity.orientation = dresseur.ORIENTATION;
        dresseurEntity.positionX = dresseur.POSITION_X;
        dresseurEntity.positionY = dresseur.POSITION_Y;
        dresseursEntities.push(dresseurEntity);
    }

    dresseursEntities.forEach(entity => {
        DresseurRepository.save(entity);
    });

}