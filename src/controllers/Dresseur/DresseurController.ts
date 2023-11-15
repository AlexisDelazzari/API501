import { Request, Response, Router } from 'express';
import HttpCode from '../../config/http-code';
import {DresseurRepository} from "../../database/repository/Dresseur";
export class DresseurController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getPokemonOfDresseurHandler.bind(this));
    }

    private async getPokemonOfDresseurHandler(req: Request, res: Response): Promise<void> {
        try {
            const allPokemon = await DresseurRepository.getOneDresseur();
            // let goodPokemon = allPokemon.map(({id, nom}) => ({id, nom}))
            res.status(HttpCode.OK).json(allPokemon);
            //!TODO: return allPokemon with model
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}