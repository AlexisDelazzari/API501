import { DresseurModels } from './dresseur-models';
export class ListDresseurInZoneModels {
  uuidList: number;
  dresseur?: DresseurModels;

  constructor(uuidList: number, dresseur?: DresseurModels) {
    this.uuidList = uuidList;
    this.dresseur = dresseur;
  }
}
