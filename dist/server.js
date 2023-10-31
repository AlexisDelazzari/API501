"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_js_1 = __importDefault(require("../swaggerOptions.js"));
const pokemons_router_1 = require("./presentation/routers/pokemons/pokemons-router");
const pokedex_router_1 = require("./presentation/routers/pokedex/pokedex-router");
function startServer() {
    const app = (0, express_1.default)();
    const port = 3000;
    const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_js_1.default);
    app.use(express_1.default.json());
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    app.use('/', pokemons_router_1.PokemonRoutes);
    app.use('/', pokedex_router_1.PokedexRoutes);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
exports.startServer = startServer;
