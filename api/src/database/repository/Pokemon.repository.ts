import { dataSource} from "../../config/ormconfig";
import { PokemonEntity } from "../entities/Pokemon.entity";

export const PokemonRepository = dataSource.getRepository(PokemonEntity).extend({
    async getSauvageById(id: number) {
        return this.findOne(id);
    },
    
    
    async getOnePokemonByOwner(id : number) {
        let pouet = await this.find({
            where: { proprietaire: id },
            relations: ['defaultPokemon', 'talent', 'listAttaque', 'status', 'nature']
        });

        console.log(pouet);
        return pouet;
    }
})