import {Router, Request, Response} from 'express';
import {getAllPokedex, getOnePokedex} from '../../../domain/use-cases/pokedex/pokedex';
import {PokedexRepository} from '../../../domain/interfaces/repositories/pokedex/pokedex-repository';
import {MysqlPokemonDataSource} from "../../../data/data-sources/mysql/pokemons/pokemon/mysql-pokemon-data-source";
import {JsonPokedexDataSource} from "../../../data/data-sources/json/pokedex/json-pokedex-data-source";
import {MysqlPokedexDataSource} from "../../../data/data-sources/mysql/pokedex/mysql-pokedex-data-source";
import {dbConfig} from "../../../data/interfaces/data-sources/mysql/db-connnect";

// Crée une instance de la source de données des Pokémon pour MySQL
// const mysqlPokemonDataSource = new MysqlPokemonDataSource(mysqlDatabase);
const jsonPokemonDataSource = new JsonPokedexDataSource()
const mysqlPokemonDataSource = new MysqlPokedexDataSource(dbConfig)


/**
 * @swagger
 * tags :
 * - name : Pokedex
 *   description : Opérations liées au Pokedex
 */
export class PokedexRouter {
    public router: Router;
    private pokedexRepository: PokedexRepository;  // Ajoute le repository comme propriété privée

    constructor(pokedexRepository: PokedexRepository) {
        this.router = Router();
        this.pokedexRepository = pokedexRepository;  // Injecte le repository via le constructeur
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // this.router.post('/pok', this.createPokemonHandler.bind(this));  // Utilise bind pour lier la méthode à l'instance de la classe
        /**

         * @swagger
         * /Pokedex :
         *   get :
         *     description : Récuperer tous les pokémons du pokédex.
         *     tags :
         *       - Pokedex
         *     responses :
         *       200 :
         *         description : Succès
         *       500 :
         *         description : Erreur du serveur
         */
        this.router.get('/pokedex', this.getAllPokedexHandler.bind(this));

        /**
         * @swagger
         * /Pokedex/{id} :
         *   get :
         *     description : Récuperer un pokémon du pokedex grace à son id
         *     parameters :
         *       - in : path
         *         name : id
         *         required : true
         *         description : L'ID du Pokémon à récupérer.
         *         schema:
         *           type: integer
         *     tags :
         *       - Pokedex
         *     responses :
         *       200 :
         *         description : Succès
         *       404 :
         *         description : Pokémon non trouvé
         *       500 :
         *         description : Erreur du serveur
         */
        this.router.get('/pokedex/:id', this.getOnePokedexHandler.bind(this));
    }

    private async getAllPokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            // Utilise this.pokemonRepository pour accéder au repository
            const allPokemon = await getAllPokedex(this.pokedexRepository);
            res.json(allPokemon);
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }


    private async getOnePokedexHandler(req: Request, res: Response): Promise<void> {
        try {
            // Utilise this.pokemonRepository pour accéder au repository
            const id = req.params.id
            const pokemon = await getOnePokedex(this.pokedexRepository, Number(id));

            if (!pokemon) {
                res.status(404).json({error: "Pokemon not found"})
            } else {

                res.json(pokemon);
            }

        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

export const PokedexRouterInstance = new PokedexRouter(mysqlPokemonDataSource);
export const PokedexRoutes = PokedexRouterInstance.router;
