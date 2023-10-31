import { JsonPokedexDataSource } from '../../../../../data/data-sources/json/pokedex/json-pokedex-data-source';
import pokedex from "./pokedex.json"; 
import totokarp from "./onePokemon.json"
describe('JsonPokedexDataSource', () => {
    it('should return all Pokemon', async () => {
        const dataSource = new JsonPokedexDataSource();
        const result = await dataSource.getAllPokemon();
        const expectedResponse = pokedex
        expect(result).toEqual(expectedResponse);
    });

    it('should return one Pokemon by ID', async () => {
        const dataSource = new JsonPokedexDataSource();
        const result = await dataSource.getOnePokemon(4);
        const expectedResponse = totokarp
        expect(result).toEqual(expectedResponse);
    });
});
