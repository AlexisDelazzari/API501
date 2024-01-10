import { dataSource } from "../../config/ormconfig";
import { HeroEntity } from "../entities/Hero.entity";

export const HeroRepository = dataSource.getRepository(HeroEntity).extend({

})