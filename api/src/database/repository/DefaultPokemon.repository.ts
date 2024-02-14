import { dataSource } from "../../config/ormconfig";
import {DefaultPokemonEntity} from "../entities/DefaultPokemon.entity";

export const DefaultPokemonRepository = dataSource.getRepository(DefaultPokemonEntity).extend({

    async getAllPokemon() : Promise<DefaultPokemonEntity[]> {
        return this.find({
            where: { hasHero: false },
        });

    },

    async getOnePokemon(id : number, hasHero : boolean = false) : Promise<DefaultPokemonEntity> {
        return await this.findOne({
            where: { id: id , hasHero: hasHero },
            relations: ['type1', 'type2', 'talent1', 'talent2', 'listAttaques','listAttaques.attaque','listAttaques.attaque.effet','listAttaques.attaque.type']
        });
    },

    getAllPrivatePokemon(id: string) : Promise<DefaultPokemonEntity[]> {
        return this.find({
            where: { hasHero: true , proprietaire: id },
            relations: ['type1', 'type2', 'listAttaques','listAttaques.attaque','listAttaques.attaque.effet','listAttaques.attaque.type']
        });
    }
})