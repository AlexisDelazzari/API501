import {PokedexRepository} from '../../../../domain/interfaces/repositories/pokedex/pokedex-repository';
import {Pokedex} from "../../../../domain/models/pokedex/pokedex";
import {MysqlDatabaseWrapper} from "../../../interfaces/data-sources/mysql/mysql-database-wrapper";

export class MysqlPokedexDataSource implements PokedexRepository {
    constructor(private db: MysqlDatabaseWrapper) {}
    
    async getAllPokemon(): Promise<Pokedex[]> {
        const sql = 'SELECT * FROM DEFAULT_POKEMON';
        const results = await this.db.query(sql);

        console.log(results)
        // Mapping des résultats de la base de données vers le modèle Pokemon
        // const pokemonList: Pokedex[] = results.map((result: {id : number, nom : string}) => ({
        //     id: result.id,
        //     name: result.nom,
        // }));

        return results;
    }

    async getOnePokemon(id: number): Promise<Pokedex | undefined> {
        const sql = 'SELECT * FROM DEFAULT_POKEMON where id = ?';
        // Utilisation de paramètres de requête pour éviter les injections SQL
        const [results, fields] = await this.db.query(sql, [id]);

        // Vérification si le Pokémon existe
        if (results.length === 0) {
            return undefined; // Pokémon non trouvé
        }

        // Mapping des résultats de la base de données vers le modèle Pokemon
        const pokemon: Pokedex = results[0] as Pokedex;

        return pokemon;
    }

}
