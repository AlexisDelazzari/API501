import listItemsDropJson from "../json/listItemDropJson";
import {ListItemDropEntity} from "../../entities/ListItemDrop.entity";
import {ItemRepository} from "../../repository/Item.repository";
import {ListItemDropRepository} from "../../repository/ListItemDrop.repository";

export default async function insertListItemDrops() {
    let listItemDrops = listItemsDropJson;
    let listItemDropsEntities: ListItemDropEntity[] = [];

    for (const listItemDrop of listItemDrops) {
        const listItemDropsEntity = new ListItemDropEntity();
        listItemDropsEntity.item = await ItemRepository.findOneByOrFail({ uuid: listItemDrop.uuidItem});
        listItemDropsEntity.max = listItemDrop.max;
        listItemDropsEntity.min = listItemDrop.min;
        listItemDropsEntity.taux = listItemDrop.taux;

        listItemDropsEntities.push(listItemDropsEntity);
    }
    for (const element of listItemDropsEntities) {
        await ListItemDropRepository.save(element);
    }

}