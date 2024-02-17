export class TalentEffetModels {
    uuid: number;
    nom: string;
    description: string;

    constructor(
        uuid: number,
        nom: string,
        description: string
    ) {
        this.uuid = uuid;
        this.nom = nom;
        this.description = description;
    }
}
