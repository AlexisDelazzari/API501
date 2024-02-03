export class CritiqueModels {
    id: number;
    probabilité: number;
    description: string;

    constructor(
        id: number,
        probabilité: number,
        description: string
    ) {
        this.id = id;
        this.probabilité = probabilité;
        this.description = description;
    }
}
