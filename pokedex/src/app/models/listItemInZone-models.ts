import { ItemModels } from './item-models';
export class ListItemInZoneModels {
    uuidList: number;
    positionX: number;
    positionY: number;
    item: ItemModels;

    constructor(
        uuidList: number,
        positionX: number,
        positionY: number,
        item: ItemModels
    ) {
        this.uuidList = uuidList;
        this.positionX = positionX;
        this.positionY = positionY;
        this.item = item;
    }
}
