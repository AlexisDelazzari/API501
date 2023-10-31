// pokedex-router.ts
import {Router, Request, Response} from 'express';
import {getOnePokemon} from '../../../domain/use-cases/pokemon';
import {PokemonRepository} from '../../../domain/interfaces/repositories/pokemon-repository';
import {MysqlPokemonDataSource} from "../../../data/data-sources/mysql/pokemons/pokemon/mysql-pokemon-data-source";
import {MysqlDatabase} from "../../../data/data-sources/mysql/mysql-database-wrapper";
import {JsonPokedexDataSource} from "../../../data/data-sources/json/pokedex/json-pokedex-data-source";  // Importe le repository

// Crée une instance du wrapper de base de données MySQL
const mysqlDatabase = new MysqlDatabase({
    user: 'burnel12u_appli',
    host: 'devbdd.iutmetz.univ-lorraine.fr',
    database: 'burnel12u_pokemon',
    password: 'Justin55500',
    port: 3306,
});

function Low(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
}

// Crée une instance de la source de données des Pokémon pour MySQL
const mysqlPokemonDataSource = new MysqlPokemonDataSource(mysqlDatabase);
const jsonPokemonDataSource = new JsonPokedexDataSource()

class PokemonsRouter {
    public router: Router;
    private readonly pokemonRepository: PokemonRepository;  // Ajoute le repository comme propriété privée

    constructor(pokemonRepository: PokemonRepository) {
        this.router = Router();
        this.pokemonRepository = pokemonRepository;  // Injecte le repository via le constructeur
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        // this.router.post('/pokemon', this.createPokemonHandler.bind(this));  // Utilise bind pour lier la méthode à l'instance de la classe
        this.router.get('/pokemon', this.getAllPokemonHandler.bind(this));
    }


    // @Low
    // private async createPokemonHandler(req: Request, res: Response): Promise<void> {
    //
    //     try {
    //         // Utilise this.pokemonRepository pour accéder au repository
    //         const newPokemon = await createPokemon(req.body, this.pokemonRepository);
    //
    //         res.json(newPokemon);
    //     } catch (error) {
    //         res.status(500).json({error: 'Internal Server Error'});
    //     }
    //
    // }

    
    private async getAllPokemonHandler(req: Request, res: Response): Promise<void> {
        try {
            // Utilise this.pokemonRepository pour accéder au repository
            const allPokemon = await getOnePokemon(this.pokemonRepository);
            
            res.json(allPokemon);
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

export const PokemonRouterInstance = new PokemonsRouter(jsonPokemonDataSource);
export const PokemonRoutes = PokemonRouterInstance.router;
