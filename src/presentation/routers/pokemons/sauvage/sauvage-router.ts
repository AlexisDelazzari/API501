import {Router, Request, Response} from 'express';
import SauvageRepository from '../../../../domain/interfaces/repositories/pokemon/sauvage/sauvage-repository';
import {JsonPokemonDataSource} from "../../../../data/data-sources/json/pokemons/json-pokemon-data-sources";
import {JsonSauvageDataSources} from "../../../../data/data-sources/json/pokemons/sauvages/json-sauvage-data-sources";
import {getSauvageOnRoad} from "../../../../domain/use-cases/pokemon/sauvage/sauvage";
const jsonPokemonDataSource = new JsonSauvageDataSources()

/**
 * @swagger
 * tags :
 * - name : Sauvage
 *   description : Opérations liées au Pokemon sauvage
 */
class SauvageRouter {
    public router: Router;
    private readonly sauvageRepository: SauvageRepository;  // Ajoute le repository comme propriété privée

    constructor(SauvageRepository: SauvageRepository) {
        this.router = Router();
        this.sauvageRepository = SauvageRepository;  // Injecte le repository via le constructeur
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // this.router.post('/pokemon', this.createPokemonHandler.bind(this));  // Utilise bind pour lier la méthode à l'instance de la classe


        /**
         * @swagger
         * /Sauvage :
         *   get :
         *     description : Récuperer tous les pokémons sauvage d'une route.
         *     parameters :
         *       - in : path
         *         name : id
         *         required : true
         *         description : L'ID du Pokémon à récupérer.
         *         schema:
         *           type : integer
         *     tags :
         *       - Sauvage
         *     responses :
         *       200 :
         *         description : Succès
         *       404 :
         *          description : Not Found
         *       500 :
         *         description : Erreur du serveur
         */
        this.router.get('/sauvage/:id', this.getSauvageOnRoadHandler.bind(this));
    }

    private async getSauvageOnRoadHandler(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id
            const sauvageOnRoad = await getSauvageOnRoad(this.sauvageRepository,Number(id));

            if (!sauvageOnRoad) {
                res.status(404).json({error: "Pokemon not found"})
            } else {

                res.json(sauvageOnRoad);
            }
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

export const SauvageRouterInstance = new SauvageRouter(jsonPokemonDataSource);
export const SauvageRoutes = SauvageRouterInstance.router;
