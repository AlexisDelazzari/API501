import { Request, Response, Router } from 'express';
import HttpCode from '../../config/http-code';
import {DefaultPokemonRepository} from "../../database/repository/DefaultPokemon.repository";
export class PokemonDefaultController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getAllPokemonHandler.bind(this));
    }

    private async getAllPokemonHandler(req: Request, res: Response): Promise<void> {
        try {
            console.log("getAllPokemonHandler");
            const allPokemon = await DefaultPokemonRepository.getAllPokemon();
            console.log(allPokemon, "allPokemon");
            res.status(HttpCode.OK).json(allPokemon);
            //!TODO: return allPokemon with model

        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}