import defaultPokemonJson from "../json/defaultPokemonJson";
import {DefaultPokemonEntity} from "../../entities/DefaultPokemon.entity";
import {TypeRepository} from "../../repository/Type.repository";
import {TalentEffetRepository} from "../../repository/TalentEffet.repository";
import {ListAttaqueRepository} from "../../repository/ListAttaque.repository";
import {LieuxRepository} from "../../repository/Lieux.repository";
import {ListItemDropRepository} from "../../repository/ListItemDrop.repository";
import {DefaultPokemonRepository} from "../../repository/DefaultPokemon.repository";

export default async function insertPokemonDefault() {
    let pokemons = defaultPokemonJson;
    let pokemonEntities: DefaultPokemonEntity[] = [];
    for (const pokemon of pokemons) {
        const pokemonEntity = new DefaultPokemonEntity();
        pokemonEntity.image = pokemon.image;
        pokemonEntity.poids = pokemon.poids;
        pokemonEntity.nom = pokemon.nom;
        pokemonEntity.description = pokemon.description;
        pokemonEntity.tauxCapture = pokemon.tauxCapture;
        pokemonEntity.pv = pokemon.pv;
        pokemonEntity.attaque = pokemon.attaque;
        pokemonEntity.defense = pokemon.defense;
        pokemonEntity.attaqueSpeciale = pokemon.attaqueSpeciale;
        pokemonEntity.vitesse = pokemon.vitesse;
        pokemonEntity.total = pokemon.total;
        pokemonEntity.xp = pokemon.xp;
        pokemonEntity.niveauEvolution = pokemon.niveauEvolution;
        pokemonEntity.defenseSpeciale = pokemon.defenseSpeciale;
        pokemonEntity.taille = pokemon.taille;

        // Utilisation des clés du JSON pour les associations
        pokemonEntity.type1 = await TypeRepository.findOneByOrFail({uuid: pokemon.uuidType1});
        pokemonEntity.type2 = (pokemon.uuidType2 === null) ? null : await TypeRepository.findOneByOrFail({uuid: pokemon.uuidType2});
        pokemonEntity.talent1 = await TalentEffetRepository.findOneByOrFail({uuid: pokemon.uuidTalent1});
        pokemonEntity.talent2 = (pokemon.uuidTalent2 === null) ? null : await TalentEffetRepository.findOneByOrFail({uuid: pokemon.uuidTalent2});
        pokemonEntity.listAttaque = await ListAttaqueRepository.findOneByOrFail({uuidList: pokemon.uuidListDefaultAttaque});
        pokemonEntity.lieux = (pokemon.uuidLieux === null) ? null : await LieuxRepository.findOneByOrFail({uuid: pokemon.uuidLieux});
        pokemonEntity.listItemDrop = await ListItemDropRepository.findOneByOrFail({uuidList: pokemon.uuidlistLoot});
        pokemonEntity.pokemonEvolution = (pokemon.idPokemonEvolution === null) ? null :  await DefaultPokemonRepository.findOneByOrFail({id: pokemon.idPokemonEvolution});
        pokemonEntities.push(pokemonEntity);
    }

    for (const element of pokemonEntities) {
        await DefaultPokemonRepository.save(element);
    }
}
    