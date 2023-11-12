import { Request, Response, Router } from 'express';
import HttpCode from '../../config/http-code';
import {DefaultPokemonRepository} from "../../database/repository/pokemons/default-pokemon.repository";
export class DefaultPokemonController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getAllPokedexHandler.bind(this));
    }

    private async getAllPokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            const allPokemon = await DefaultPokemonRepository.getAllPokemon();
            res.status(HttpCode.OK).json(allPokemon);
            //!TODO: return allPokemon with model

        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}