import { SacModels } from './sac-models';

export class DresseurModels {
    uuid: number;
    positionX: number;
    positionY: number;
    orientation: string;
    name: string;
    dialogue: string;
    rewardMoney: number;
    isHero: boolean;
    sac: SacModels;

    constructor(uuid: number, positionX: number, positionY: number, orientation: string, name: string, dialogue: string, rewardMoney: number, isHero: boolean, sac: SacModels) {
        this.uuid = uuid;
        this.positionX = positionX;
        this.positionY = positionY;
        this.orientation = orientation;
        this.name = name;
        this.dialogue = dialogue;
        this.rewardMoney = rewardMoney;
        this.isHero = isHero;
        this.sac = sac;
    }
}
