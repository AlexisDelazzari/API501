"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokedexRoutes = exports.PokemonRouterInstance = void 0;
const express_1 = require("express");
const pokemon_1 = require("../../../domain/use-cases/pokemon");
const json_pokedex_data_source_1 = require("../../../data/data-sources/json/pokedex/json-pokedex-data-source"); // Importe le repository
// function Low(target: any, key: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     console.log(`Calling ${key} with arguments:`);
//    
// }
// Crée une instance de la source de données des Pokémon pour MySQL
// const mysqlPokemonDataSource = new MysqlPokemonDataSource(mysqlDatabase);
const jsonPokemonDataSource = new json_pokedex_data_source_1.JsonPokedexDataSource();
class PokedexRouter {
    constructor(pokemonRepository) {
        this.router = (0, express_1.Router)();
        this.pokemonRepository = pokemonRepository; // Injecte le repository via le constructeur
        this.initializeRoutes();
    }
    initializeRoutes() {
        // this.router.post('/pok', this.createPokemonHandler.bind(this));  // Utilise bind pour lier la méthode à l'instance de la classe
        /**
         * @swagger
         * /example:
         *   get:
         *     description: Description de ton endpoint
         *     responses:
         *       200:
         *         description: Succès
         */
        this.router.get('/pokedex', this.getAllPokemonHandler.bind(this));
    }
    // @Low
    // private async createPokemonHandler(req: Request, res: Response): Promise<void> {
    //
    //     try {
    //         // Utilise this.pokemonRepository pour accéder au repository
    //         const newPokemon = await createPokemon(req.body, this.pokemonRepository);
    //
    //         res.json(newPokemon);
    //     } catch (error) {
    //         res.status(500).json({error: 'Internal Server Error'});
    //     }
    //
    // }
    getAllPokemonHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Utilise this.pokemonRepository pour accéder au repository
                const allPokemon = yield (0, pokemon_1.getAllPokemon)(this.pokemonRepository);
                res.json(allPokemon);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.PokemonRouterInstance = new PokedexRouter(jsonPokemonDataSource);
exports.PokedexRoutes = exports.PokemonRouterInstance.router;
