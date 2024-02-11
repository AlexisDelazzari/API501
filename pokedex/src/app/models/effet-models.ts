import { StatusModels } from './status-models';
export class EffetModels {
    uuid: number;
    name: string;
    image: string;
    status: StatusModels;

    constructor(
        uuid: number,
        name: string,
        status: StatusModels,
        image: string
    ) {
        this.uuid = uuid;
        this.name = name;
        this.status = status;
        this.image = image;
    }
}
