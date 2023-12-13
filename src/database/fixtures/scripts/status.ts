import {StatusEntity} from "../../entities/Status.entity";
import {StatusRepository} from "../../repository/Status.repository";
import statusJson from "../json/statusJson";

export default async function insertStatus() {
    let status = statusJson
    const statusEntities: StatusEntity[] = [];
    for (let statu of status){
        const statusEntity = new StatusEntity();
        statusEntity.name = statu[0]
        statusEntity.description = statu[1];
        statusEntities.push(statusEntity);
        await StatusRepository.save(statusEntity)
    }
} 
