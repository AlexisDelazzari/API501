import express from 'express';
import {PokemonRoutes} from './presentation/routers/pokemons/pokemons-router';

export function startServer() {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use('/', PokemonRoutes);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
