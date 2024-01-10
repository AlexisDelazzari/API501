import {CritiqueEntity} from "../../entities/Critique.entity";
import {CritiqueRepository} from "../../repository/Critique.repository";

export default async function insertCritique() {
    let critiques = [
        {"id": 1, "valeur": 0.10, "description": "Probabilité normale d'obtenir un coup critique."},
        {"id": 2, "valeur": 0.25, "description": "Probabilité des capacités avec un taux de coups critique."},
        {"id": 3, "valeur": 1.00, "description": "Probabilité maximale d'obtenir un coup critique."}
    ];

    let critiquesEntities: CritiqueEntity[] = [];
    for (const critique of critiques) {
        const critiquesEntity = new CritiqueEntity();
        critiquesEntity.id = critique.id;
        critiquesEntity.description = critique.description;
        critiquesEntity.probabilité = critique.valeur;
        critiquesEntities.push(critiquesEntity);
    }

    critiquesEntities.forEach(entity => {
        CritiqueRepository.save(entity);
    });

}