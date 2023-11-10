import * as express from 'express';
//!import swaggerJsdoc from 'swagger-jsdoc';
//!import swaggerUi from 'swagger-ui-express';
//!import options from '../swaggerOption';
import { CheckController} from "./controllers/CheckController";
import { PokemonDefaultController } from "./controllers/pokemon/PokemonDefaultController";
import { PokemonSauvageController } from "./controllers/pokemon/PokemonSauvageController";

export function startServer(port : number) {
    const app = express();
    app.use(express.json());

    //!const specs = swaggerJsdoc(options);
    //§app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    const checkController = new CheckController();
    const pokemonDefaultController = new PokemonDefaultController();
    const pokemonSauvageController = new PokemonSauvageController();

    app.use('/check', checkController.router);

    app.use('/default-pokemon', pokemonDefaultController.router);
    app.use('/sauvage-pokemon', pokemonSauvageController.router);

    return app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

startServer(3000)


