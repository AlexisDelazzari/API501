import { TypeModels } from './type-models';
import { TalentEffetModels } from './talentEffet-models';
import {ListAttaqueModels} from "./listAttaque-models";
import {LieuxModels} from "./lieux-models";
import {ListItemDropModels} from "./listItemDrop-models";
import {DefaultPokemonModels} from "./defaultPodemon-models";

export class PokemonModels {
    id: number;
    image: string;
    poids: string;
    nom: string;
    description: string;
    tauxCapture: number;
    pv: number;
    attaque: number;
    defense: number;
    attaqueSpeciale: number;
    vitesse: number;
    total: number;
    xp: number;
    niveauEvolution: number | null;
    defenseSpeciale: number;
    taille: string;
    type1?: TypeModels;
    type2?: TypeModels;
    talent1?: TalentEffetModels;
    talent2?: TalentEffetModels;
    listAttaque?: ListAttaqueModels;
    lieux?: LieuxModels;
    listItemDrop?: ListItemDropModels;
    pokemonEvolution?: DefaultPokemonModels;

    constructor(
        id: number,
        image: string,
        poids: string,
        nom: string,
        description: string,
        tauxCapture: number,
        pv: number,
        attaque: number,
        defense: number,
        attaqueSpeciale: number,
        vitesse: number,
        total: number,
        xp: number,
        niveauEvolution: number | null,
        defenseSpeciale: number,
        taille: string,
        type1?: TypeModels,
        type2?: TypeModels,
        talent1?: TalentEffetModels,
        talent2?: TalentEffetModels,
        listAttaque?: ListAttaqueModels,
        lieux?: LieuxModels,
        listItemDrop?: ListItemDropModels,
        pokemonEvolution?: DefaultPokemonModels
    ) {
        this.id = id;
        this.image = image;
        this.poids = poids;
        this.nom = nom;
        this.description = description;
        this.tauxCapture = tauxCapture;
        this.pv = pv;
        this.attaque = attaque;
        this.defense = defense;
        this.attaqueSpeciale = attaqueSpeciale;
        this.vitesse = vitesse;
        this.total = total;
        this.xp = xp;
        this.niveauEvolution = niveauEvolution;
        this.defenseSpeciale = defenseSpeciale;
        this.taille = taille;
        this.type1 = type1;
        this.type2 = type2;
        this.talent1 = talent1;
        this.talent2 = talent2;
        this.listAttaque = listAttaque;
        this.lieux = lieux;
        this.listItemDrop = listItemDrop;
        this.pokemonEvolution = pokemonEvolution;
    }
}
