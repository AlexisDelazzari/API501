import defaultPokemonJson from "../json/defaultPokemonJson";
import {DefaultPokemonEntity} from "../../entities/DefaultPokemon.entity";
import {TypeRepository} from "../../repository/Type.repository";
import {TalentEffetRepository} from "../../repository/TalentEffet.repository";
import {ListAttaqueRepository} from "../../repository/ListAttaque.repository";
import {LieuxRepository} from "../../repository/Lieux.repository";
import {ListItemDropRepository} from "../../repository/ListItemDrop.repository";
import {DefaultPokemonRepository} from "../../repository/DefaultPokemon.repository";
import pokemonJson from "../json/pokemonJson";
import {PokemonEntity} from "../../entities/Pokemon.entity";
import {StatusRepository} from "../../repository/Status.repository";
import {NatureRepository} from "../../repository/Nature.repository";
import {DresseurRepository} from "../../repository/Dresseur.repository";
import {PokemonRepository} from "../../repository/Pokemon.repository";

export default async function insertPokemon() {
    let pokemons = pokemonJson;
    let pokemonEntities: PokemonEntity[] = [];
    for (const pokemon of pokemons) {
        const pokemonEntity = new PokemonEntity();
        pokemonEntity.currentXp = pokemon.CURRENT_XP;
        pokemonEntity.name = pokemon.NAME;
        pokemonEntity.level = pokemon.LEVEL;
        pokemonEntity.pvActuel = pokemon.PV_ACTUEL;
        pokemonEntity.sexe = pokemon.SEXE;
        pokemonEntity.xpNextLevel = pokemon.XP_NEXT_LEVEL;
        
        

        // Utilisation des clés du JSON pour les associations
        pokemonEntity.defaultPokemon = await DefaultPokemonRepository.findOneByOrFail({id: pokemon.UUID_DEFAULT_POKEMON});
        pokemonEntity.listAttaque = await ListAttaqueRepository.findOneByOrFail({uuidList: pokemon.UUID_LIST_ATTAQUE});
        pokemonEntity.nature = await NatureRepository.findOneByOrFail({uuid: pokemon.UUID_NATURE});
        pokemonEntity.proprietaire = await DresseurRepository.findOneByOrFail({uuid: pokemon.UUID_PROPRIETAIRE});
        pokemonEntity.talent = await TalentEffetRepository.findOneByOrFail({uuid: pokemon.UUID_TALENT});
        pokemonEntity.status = (pokemon.UUID_STATUS === null) ? null : await StatusRepository.findOneByOrFail({uuid: pokemon.UUID_STATUS});
        pokemonEntities.push(pokemonEntity);
    }

    for (const element of pokemonEntities) {
        await PokemonRepository.save(element);
    }
}
    