import HttpCode from '../../config/http-code';
import { Request, Response, Router } from 'express';
import { PokemonRepository } from '../../database/repository/Pokemon.repository';
export class PokemonSauvageController {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/:id', this.getSauvageById.bind(this));
    }

    private async getSauvageById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const sauvage = await PokemonRepository.getSauvageById(id);
            res.status(HttpCode.OK).json(sauvage);
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}