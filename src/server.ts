import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import options from '../swaggerOptions.js';
import {PokemonRoutes} from './presentation/routers/pokemons/pokemons-router';
import {PokedexRoutes} from "./presentation/routers/pokedex/pokedex-router";
import {mainRouter} from "./presentation/routers/main-router";
import {SauvageRoutes} from "./presentation/routers/pokemons/sauvage/sauvage-router";

export function startServer(port : number) {
    const app = express();

    const specs = swaggerJsdoc(options);
    app.use(express.json());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


    app.use('/', mainRouter);
    app.use('/', PokemonRoutes);
    app.use('/', SauvageRoutes)
    app.use('/', PokedexRoutes);

    return app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}
