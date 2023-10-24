// pokemon-router.ts
import { Router } from 'express';
import { createPokemon, getAllPokemon } from '../../domain/use-cases/pokemon';
import { MysqlPokemonDataSource } from '../../data/data-sources/mysql/mysql-pokemon-data-source';
import { MysqlDatabase } from '../../data/data-sources/mysql/mysql-database-wrapper';

// Crée une instance du wrapper de base de données MySQL
const mysqlDatabase = new MysqlDatabase({
    user: 'burnel12u_appli',
    host: 'devbdd.iutmetz.univ-lorraine.fr',
    database: 'pokemon',
    password: 'Justin55500',
    port: 3306,
});

// Crée une instance de la source de données des Pokémon pour MySQL
const mysqlPokemonDataSource = new MysqlPokemonDataSource(mysqlDatabase);

export const pokemonRouter = Router();

pokemonRouter.post('/pokemon', async (req, res) => {
    try {
        const newPokemon = await createPokemon(req.body, mysqlPokemonDataSource);
        res.json(newPokemon);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

pokemonRouter.get('/pokemone', async (req, res) => {
    try {
        const allPokemon = await getAllPokemon(mysqlPokemonDataSource);
        res.json("pouet");
    } catch (error) {
        res.json('graouuu')
        // res.status(500).json({ error: 'Internal Server Error' });
    }
});
