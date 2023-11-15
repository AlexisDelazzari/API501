import express, {Handler, Request, Response, Router} from "express";
//!import swaggerJsdoc from 'swagger-jsdoc';
//!import swaggerUi from 'swagger-ui-express';
//!import options from '../swaggerOption';
import {CheckController} from "./controllers/CheckController";
import {DefaultPokemonController} from "./controllers/pokemon/DefaultPokemonController";
import {PokemonSauvageController} from "./controllers/pokemon/PokemonSauvageController";
import "reflect-metadata";
import "dotenv/config";
import * as bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import {dataSource} from "./config/ormconfig";

class Server {

    private app: express.Application;

    constructor() {
        this.app = express();
        this.configuration();
        const promise = this.routes();
    }

    public configuration() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(bodyParser.json());
    }

    public async routes() {
        await dataSource.initialize();

        const checkController = new CheckController();
        const pokedexController = new DefaultPokemonController();
        const pokemonSauvageController = new PokemonSauvageController();

        //on ajoute les routes des controllers
        const expressRouter = Router();
        expressRouter.use('/check', checkController.router);
        expressRouter.use('/pokedex', pokedexController.router);
        expressRouter.use('/pokemon/sauvage', pokemonSauvageController.router);
        this.app.use('/api-pokemon', expressRouter);
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening on port ${this.app.get('port')}`);
        });
    }
}

const server = new Server();
server.start();
















