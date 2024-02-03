export class ItemModels {
    uuid: number;
    canBeFound: boolean;
    name: string;

    constructor(
        uuid: number,
        canBeFound: boolean,
        name: string
    ) {
        this.uuid = uuid;
        this.canBeFound = canBeFound;
        this.name = name;
    }
}
