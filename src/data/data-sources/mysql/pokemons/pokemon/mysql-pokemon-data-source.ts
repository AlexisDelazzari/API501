
import { MysqlDatabaseWrapper } from '../../../../interfaces/data-sources/mysql/mysql-database-wrapper';
import { Pokedex } from '../../../../../domain/models/pokedex/pokedex';
import { PokemonRepository } from '../../../../../domain/interfaces/repositories/pokemon-repository';

export class MysqlPokemonDataSource implements PokemonRepository {
    constructor(private db: MysqlDatabaseWrapper) {}

    async createPokemon(pokemon: Pokedex): Promise<void> {
        const sql = 'INSERT INTO pokemon (nom) VALUES (?)';
        await this.db.query(sql, [pokemon.nom]);
    }

    async getAllPokemon(): Promise<Pokedex[]> {
        const sql = 'SELECT * FROM pokemon';
            const results = await this.db.query(sql);

            // Mapping des résultats de la base de données vers le modèle Pokemon
            const pokemonList: Pokedex[] = results.map((result: {id : number, nom : string}) => ({
                id: result.id,
                name: result.nom,
            }));
            
            return pokemonList;
    }

}
