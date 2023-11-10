import { AppDataSource } from "../../data-source"
import { UserEntity } from "../entity/User.entity"
//extend this class to create a repository

export const UserRepository = AppDataSource.getRepository(UserEntity).extend({
    async findByName(name: string) {
        return this.findOne({
            where: { name }
        })
    }
})