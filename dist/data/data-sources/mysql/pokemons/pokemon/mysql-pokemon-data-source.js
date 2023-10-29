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
exports.MysqlPokemonDataSource = void 0;
class MysqlPokemonDataSource {
    constructor(db) {
        this.db = db;
    }
    createPokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO pokemon (nom) VALUES (?)';
            yield this.db.query(sql, [pokemon.nom]);
        });
    }
    getAllPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM pokemon';
            const results = yield this.db.query(sql);
            // Mapping des résultats de la base de données vers le modèle Pokemon
            const pokemonList = results.map((result) => ({
                id: result.id,
                name: result.nom,
            }));
            return pokemonList;
        });
    }
}
exports.MysqlPokemonDataSource = MysqlPokemonDataSource;
