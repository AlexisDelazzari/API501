import Pokemons from "../pokemonSauvage.json"
import SauvageRepository from "../../../../../domain/interfaces/repositories/pokemon/sauvage/sauvage-repository";
import PokemonSauvage from "../../../../../domain/models/pokemon/sauvage/pokemonSauvage";

export class JsonSauvageDataSources implements SauvageRepository {
    getSauvageOnRoad(idRoute: number): Promise<any> {
        return Promise.resolve(undefined);
    }

}
