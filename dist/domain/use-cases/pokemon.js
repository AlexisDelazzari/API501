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
exports.getAllPokemon = exports.createPokemon = void 0;
function createPokemon(pokemon, repository) {
    return __awaiter(this, void 0, void 0, function* () {
        // Valider les données du Pokémon si nécessaire
        // Appeler la méthode du référentiel pour créer un Pokémon
        yield repository.createPokemon(pokemon);
        return pokemon;
    });
}
exports.createPokemon = createPokemon;
function getAllPokemon(repository) {
    return __awaiter(this, void 0, void 0, function* () {
        // Appeler la méthode du référentiel pour récupérer tous les Pokémon
        const allPokemon = yield repository.getAllPokemon();
        return allPokemon;
    });
}
exports.getAllPokemon = getAllPokemon;
