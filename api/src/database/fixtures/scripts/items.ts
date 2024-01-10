import itemsJson from "../json/itemsJson";
import {ItemEntity} from "../../entities/Item.entity";
import {ItemRepository} from "../../repository/Item.repository";

export default async function insertItems() {
    let items = itemsJson;
    let itemsEntities: ItemEntity[] = [];

    for (const item of items) {
        const itemsEntity = new ItemEntity();
        itemsEntity.name = item.name;
        itemsEntity.canBeFound = item.canBeFound;

        itemsEntities.push(itemsEntity);
    }
    for (const element of itemsEntities) {
        await ItemRepository.save(element);
    }

}