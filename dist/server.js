"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const pokemon_router_1 = require("./presentation/routers/pokemon-router");
function startServer() {
    const app = (0, express_1.default)();
    const port = 3000;
    app.use(express_1.default.json());
    app.use('/api', pokemon_router_1.pokemonRouter);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
exports.startServer = startServer;
