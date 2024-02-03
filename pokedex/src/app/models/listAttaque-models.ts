import { AttaqueModels } from './attaque-models';

export class ListAttaqueModels {
    uuidList: number;
    idAttaque: number;
    Niveau: number;
    attaque?: AttaqueModels;

    constructor(
        uuidList: number,
        idAttaque: number,
        Niveau: number,
        attaque?: AttaqueModels
    ) {
        this.uuidList = uuidList;
        this.idAttaque = idAttaque;
        this.Niveau = Niveau;
        this.attaque = attaque;
    }
}
