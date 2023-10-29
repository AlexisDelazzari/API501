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
exports.PokemonRoutes = exports.PokemonRouterInstance = void 0;
// pokemons-router.ts
const express_1 = require("express");
const pokemon_1 = require("../../../../domain/use-cases/pokemon");
const mysql_pokemon_data_source_1 = require("../../../../data/data-sources/mysql/pokemons/pokemon/mysql-pokemon-data-source");
const mysql_database_wrapper_1 = require("../../../../data/data-sources/mysql/mysql-database-wrapper"); // Importe le repository
// Crée une instance du wrapper de base de données MySQL
const mysqlDatabase = new mysql_database_wrapper_1.MysqlDatabase({
    user: 'burnel12u_appli',
    host: 'devbdd.iutmetz.univ-lorraine.fr',
    database: 'burnel12u_pokemon',
    password: 'Justin55500',
    port: 3306,
});
function deco() {
    console.log("on est la ;");
    return "pouet";
}
// Crée une instance de la source de données des Pokémon pour MySQL
const mysqlPokemonDataSource = new mysql_pokemon_data_source_1.MysqlPokemonDataSource(mysqlDatabase);
class PokemonRouter {
    constructor(pokemonRepository) {
        this.router = (0, express_1.Router)();
        this.pokemonRepository = pokemonRepository; // Injecte le repository via le constructeur
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/pokemon', this.createPokemonHandler.bind(this)); // Utilise bind pour lier la méthode à l'instance de la classe
        this.router.get('/pokemon', this.getAllPokemonHandler.bind(this));
    }
    createPokemonHandler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Utilise this.pokemonRepository pour accéder au repository
                const newPokemon = yield (0, pokemon_1.createPokemon)(req.body, this.pokemonRepository);
                res.json(newPokemon);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
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
exports.PokemonRouterInstance = new PokemonRouter(mysqlPokemonDataSource);
exports.PokemonRoutes = exports.PokemonRouterInstance.router;
