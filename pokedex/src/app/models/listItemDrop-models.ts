import {ItemModels} from "./item-models";

export class ListItemDropModels {
    uuidList: number;
    taux: number;
    min: number;
    max: number;
    item?: ItemModels;

    constructor(
        uuidList: number,
        taux: number,
        min: number,
        max: number,
        item?: ItemModels
    ) {
        this.uuidList = uuidList;
        this.taux = taux;
        this.min = min;
        this.max = max;
        this.item = item;
    }
}
