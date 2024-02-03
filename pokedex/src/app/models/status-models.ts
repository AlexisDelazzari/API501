export class StatusModels {
    uuid: number;
    name: string;
    description: string;

    constructor(
        uuid: number,
        name: string,
        description: string
    ) {
        this.uuid = uuid;
        this.name = name;
        this.description = description;
    }
}
