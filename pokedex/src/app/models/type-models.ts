export class TypeModels {
    uuid: number;
    name: string;
    image: string;

    constructor(
        uuid: number,
        name: string,
        image: string
    ) {
        this.uuid = uuid;
        this.name = name;
        this.image = image;
    }
}
