import { StatusModels } from './status-models';
export class EffetModels {
    id: number;
    name: string;
    image: string;

    constructor(
        id: number,
        name: string,
        image: string
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}
