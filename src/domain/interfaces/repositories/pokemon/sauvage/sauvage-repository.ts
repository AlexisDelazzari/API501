// domain/interfaces/repositories/pokemon-repository.ts
import PokemonSauvage from '../../../../models/pokemon/sauvage/pokemonSauvage';

export default interface SauvageRepository {
    getSauvageOnRoad(idRoute : number): Promise<any>;
}
