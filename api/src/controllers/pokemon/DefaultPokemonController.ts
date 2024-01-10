import { Request, Response, Router } from 'express';
import HttpCode from '../../config/http-code';
import {DefaultPokemonRepository} from "../../database/repository/DefaultPokemon.repository";

export class DefaultPokemonController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getAllPokedexHandler.bind(this));
        this.router.get('/:id', this.getOnePokedexHandler.bind(this));
    }

    private async getAllPokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            console.log("je suis la")
            const allPokemon = await DefaultPokemonRepository.getAllPokemon();
            let goodPokemon = allPokemon.map(({id, nom, image}) => ({id, nom, image}))
            res.status(HttpCode.OK).json(goodPokemon);
            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    private async getOnePokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            const onePokemon = await DefaultPokemonRepository.getOnePokemon(Number(req.params.id));
            res.status(HttpCode.OK).json(onePokemon);
            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}