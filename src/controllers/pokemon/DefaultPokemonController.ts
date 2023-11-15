import { Request, Response, Router } from 'express';
import HttpCode from '../../config/http-code';
import {DefaultPokemonRepository} from "../../database/repository/DefaultPokemon";
import {Pokedex} from "../../models/pokedex/pokedex";
import {DefaultPokemon} from "../../database/entities/DefaultPokemon";
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
            let goodPokemon = allPokemon.map(({id, nom}) => ({id, nom}))
            res.status(HttpCode.OK).json(goodPokemon);
            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}