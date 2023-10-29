// data/data-sources/mysql/mysql-pokemon-data-source.ts
import { MysqlDatabaseWrapper } from '../../../../interfaces/data-sources/mysql/mysql-database-wrapper';
import { Pokemon } from '../../../../../domain/models/pokemon';
import { PokemonRepository } from '../../../../../domain/interfaces/repositories/pokemon-repository';

export class MysqlPokemonDataSource implements PokemonRepository {
    constructor(private db: MysqlDatabaseWrapper) {}

    async createPokemon(pokemon: Pokemon): Promise<void> {
        const sql = 'INSERT INTO pokemon (nom) VALUES (?)';
        await this.db.query(sql, [pokemon.nom]);
    }

    async getAllPokemon(): Promise<Pokemon[]> {
        const sql = 'SELECT * FROM pokemon';
            const results = await this.db.query(sql);

            // Mapping des résultats de la base de données vers le modèle Pokemon
            const pokemonList: Pokemon[] = results.map((result: {id : number, nom : string}) => ({
                id: result.id,
                name: result.nom,
            }));
            
            return pokemonList;
    }

}
