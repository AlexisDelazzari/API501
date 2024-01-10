import { dataSource} from "../../config/ormconfig";
import { ListRewardEntity } from "../entities/ListReward.entity";

export const ListRewardRepository = dataSource.getRepository(ListRewardEntity).extend({

})