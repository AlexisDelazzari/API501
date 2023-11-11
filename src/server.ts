import express, {Handler, Request, Response, Router} from "express";
//!import swaggerJsdoc from 'swagger-jsdoc';
//!import swaggerUi from 'swagger-ui-express';
//!import options from '../swaggerOption';
import {CheckController} from "./controllers/CheckController";
import {PokemonDefaultController} from "./controllers/pokemon/PokemonDefaultController";
import {PokemonSauvageController} from "./controllers/pokemon/PokemonSauvageController";
import "reflect-metadata";
import "dotenv/config";
import * as bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import {dataSource} from "./config/ormconfig";
import * as http from "http";

export class Server {

    private app: express.Application;
    server: http.Server;

    constructor() {
        this.app = express();
        this.configuration();
        const promise = this.routes();
    }

    public configuration() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(bodyParser.json());
    }

    public async routes() {
        await dataSource.initialize();

        const checkController = new CheckController();
        const pokemonDefaultController = new PokemonDefaultController();
        const pokemonSauvageController = new PokemonSauvageController();

        //on ajoute les routes des controllers
        const expressRouter = Router();
        expressRouter.use('/check', checkController.router);
        expressRouter.use('/pokemon', pokemonDefaultController.router);
        expressRouter.use('/pokemon/sauvage', pokemonSauvageController.router);
        this.app.use('/api-pokemon', expressRouter);
    }

    public start(port: string) {
        this.server = this.app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    }
    public async stop() {
        this.server.close();
    }

}
















