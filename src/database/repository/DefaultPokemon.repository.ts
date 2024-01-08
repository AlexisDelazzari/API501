import { dataSource } from "../../config/ormconfig";
import {DefaultPokemonEntity} from "../entities/DefaultPokemon.entity";

export const DefaultPokemonRepository = dataSource.getRepository(DefaultPokemonEntity).extend({

    async getAllPokemon() : Promise<DefaultPokemonEntity[]> {
        return this.find();
    },

    async getOnePokemon(id : number) : Promise<DefaultPokemonEntity> {
        console.log('laa')
        let pouet = await this.findOne({
            where: { id: id },
            relations: [
                'type1',
                'type2',
                'talent1',
                'talent2',
                'listAttaque',
                'lieux',
                'listItemDrop',
                'pokemonEvolution'
            ]
        });

        console.log(pouet);
        return pouet;
    },
})