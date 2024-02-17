import { PokemonModels } from './pokemon-models';
export class ListPokemonInZoneModels {
    uuidList: number;
    taux: number;
    pokemon?: PokemonModels;

    constructor(
        uuidList: number,
        taux: number,
        pokemon?: PokemonModels
    ) {
        this.uuidList = uuidList;
        this.taux = taux;
        this.pokemon = pokemon;
    }
}
