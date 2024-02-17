import { AttaqueModels } from './attaque-models';

export class ListAttaqueModels {
    uuidList: number;
    idAttaque: number;
    niveau: number;
    attaque: AttaqueModels;

    constructor(
        uuidList: number,
        idAttaque: number,
        niveau: number,
        attaque: AttaqueModels
    ) {
        this.uuidList = uuidList;
        this.idAttaque = idAttaque;
        this.niveau = niveau;
        this.attaque = attaque;
    }
}
