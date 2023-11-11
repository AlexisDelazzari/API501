// import { dataSource } from "../../config/ormconfig";
// import {DefaultPokemonEntity} from "../entity/DefaultPokemon.entity";
//
// export const DefaultPokemonRepository = dataSource.getRepository(DefaultPokemonEntity).extend({
//
//     async getAllPokemon() {
//         console.log("getAllPokemon");
//         return this.find();
//     },
//
//     async getOnePokemon(id: number) {
//         return this.findOne(id);
//     }
// })