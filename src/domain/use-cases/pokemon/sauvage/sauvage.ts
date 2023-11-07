import SauvageRepository from "../../../interfaces/repositories/pokemon/sauvage/sauvage-repository";
import PokemonSauvage from "../../../models/pokemon/sauvage/pokemonSauvage";


export async function getSauvageOnRoad(repository: SauvageRepository, id : number): Promise<PokemonSauvage> {
    const onePokemon = await repository.getSauvageOnRoad(id);
    return onePokemon;
}
