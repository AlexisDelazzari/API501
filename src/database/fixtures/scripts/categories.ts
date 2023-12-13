import {CategorieEntity} from "../../entities/Categorie.entity";
import {CategorieRepository} from "../../repository/Categorie.repository";

export default async function insertCategories() {
    let categories = [
        {info: "Physique"},
        {info: "Spéciale"}
    ];
    let categoriesEntities: CategorieEntity[] = [];
    for (const categorie of categories) {
        const categorieEntity = new CategorieEntity();
        categorieEntity.info = categorie.info;
        categoriesEntities.push(categorieEntity);
    }

    categoriesEntities.forEach(entity => {
        CategorieRepository.save(entity);
    });

}