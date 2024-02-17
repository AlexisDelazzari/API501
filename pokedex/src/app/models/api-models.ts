import {TypeModels} from "./type-models";

export interface Pokedex {
  id: number,
  nom: string,
  image: string

}

export interface Pokemon {
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
  niveauEvolution: number;
  defenseSpeciale: number;
  taille: string;
  type1?: TypeModels;
  type2?: TypeModels;
  talent1?: Talent;
  talent2?: Talent | null;
  listAttaque?: ListAttaque;
  lieux?: Lieux | null;
  listItemDrop?: ListItemDrop;
  pokemonEvolution?: Pokemon | null;
}

export interface Type {
  uuid: number;
  name: string;
}

export interface Talent {
  uuid: number;
  nom: string;
  description: string;
}

export interface ListAttaque {
  uuidList: number;
  idAttaque: number;
  Niveau: number;
}

export interface Lieux {
  // Define properties based on your data structure for Lieux
}

export interface ListItemDrop {
  uuidList: number;
  taux: string;
  min: number;
  max: number;
}
