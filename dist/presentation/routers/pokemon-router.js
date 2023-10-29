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
exports.pokemonRouter = void 0;
// pokemons-router.ts
const express_1 = require("express");
const pokemon_1 = require("../../domain/use-cases/pokemon");
const mysql_pokemon_data_source_1 = require("../../data/data-sources/mysql/mysql-pokemon-data-source");
const mysql_database_wrapper_1 = require("../../data/data-sources/mysql/mysql-database-wrapper");
// Crée une instance du wrapper de base de données MySQL
const mysqlDatabase = new mysql_database_wrapper_1.MysqlDatabase({
    user: 'burnel12u_appli',
    host: 'devbdd.iutmetz.univ-lorraine.fr',
    database: 'pokemon',
    password: 'Justin55500',
    port: 3306,
});
// Crée une instance de la source de données des Pokémon pour MySQL
const mysqlPokemonDataSource = new mysql_pokemon_data_source_1.MysqlPokemonDataSource(mysqlDatabase);
exports.pokemonRouter = (0, express_1.Router)();
exports.pokemonRouter.post('/pokemon', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPokemon = yield (0, pokemon_1.createPokemon)(req.body, mysqlPokemonDataSource);
        res.json(newPokemon);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.pokemonRouter.get('/pokemone', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allPokemon = yield (0, pokemon_1.getAllPokemon)(mysqlPokemonDataSource);
        res.json("pouet");
    }
    catch (error) {
        res.json('graouuu');
        // res.status(500).json({ error: 'Internal Server Error' });
    }
}));
