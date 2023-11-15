import { dataSource } from "../../config/ormconfig";
import {DefaultPokemon} from "../entities/DefaultPokemon";
import {Pokedex} from "../../models/pokedex/pokedex";
import {Dresseur} from "../entities/Dresseur";

export const DresseurRepository = dataSource.getRepository(Dresseur).extend({

    async getAllDresseurFromOneRoad() : Promise<Dresseur[]> {
        return this.find();
    },
    
    async getOneDresseur() : Promise<Dresseur[]> {
        return this.find();
    },
})