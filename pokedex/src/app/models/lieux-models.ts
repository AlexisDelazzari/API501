import { ListPokemonInZoneModels } from './listePokemonInZone-models';
import { ListItemInZoneModels } from './listItemInZone-models';
import {ListDresseurInZoneModels} from "./listDresseurInZone-models";


export class LieuxModels {
    uuid: number;
    nom: string;
    listPokemonInZone: ListPokemonInZoneModels;
    listItemInZone: ListItemInZoneModels;
    listDresseurInZone: ListDresseurInZoneModels;

    constructor(
        uuid: number,
        nom: string,
        listPokemonInZone: ListPokemonInZoneModels,
        listItemInZone: ListItemInZoneModels,
        listDresseurInZone: ListDresseurInZoneModels
    ) {
        this.uuid = uuid;
        this.nom = nom;
        this.listPokemonInZone = listPokemonInZone;
        this.listItemInZone = listItemInZone;
        this.listDresseurInZone = listDresseurInZone;
    }
}
