// data/data-sources/mysql/mysql-pokemon-data-source.ts
import { MysqlDatabaseWrapper } from '../../interfaces/data-sources/mysql-database-wrapper';
import { Pokemon } from '../../../domain/models/pokemon';
import { PokemonRepository } from '../../../domain/interfaces/repositories/pokemon-repository';

export class MysqlPokemonDataSource implements PokemonRepository {
    constructor(private db: MysqlDatabaseWrapper) {}

    async createPokemon(pokemon: Pokemon): Promise<void> {
        const sql = 'INSERT INTO pokemon (name) VALUES (?)';
        await this.db.query(sql, [pokemon.name]);
    }

    async getAllPokemon(): Promise<Pokemon[]> {
        if (!this.db) {
            console.error("La connexion à la base de données n'est pas établie.");
            return [];
        }

        console.log("Connexion à la base de données établie.");

        const sql = 'SELECT * FROM pokemon';
        // console.log("Requête SQL :", sql);

        try {
            const results = await this.db.query(sql);

            // Mapping des résultats de la base de données vers le modèle Pokemon
            const pokemonList: Pokemon[] = results.map((result: any) => ({
                id: result.id,
                name: result.name,
            }));

            console.log("Résultats de la base de données :", pokemonList);

            return pokemonList;
        } catch (error) {
            // console.error("Erreur lors de la récupération des Pokémon :", error);
            return [];
        }
    }

}
