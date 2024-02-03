import { StatusModels } from './status-models';
export class EffetModels {
    uuid: number;
    name: string;
    status: StatusModels;

    constructor(
        uuid: number,
        name: string,
        status: StatusModels
    ) {
        this.uuid = uuid;
        this.name = name;
        this.status = status;
    }
}
