import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgApexchartsModule} from "ng-apexcharts";
import {AttaqueModels} from "../../../models/attaque-models";
import {TypeModels} from "../../../models/type-models";
import {allTypePokemon} from "../../../static/allTypePokemon";
import {EffetModels} from "../../../models/effet-models";
import {AllEffectPokemon} from "../../../static/AllEffectPokemon";

@Component({
  selector: 'app-add-attaque',
  templateUrl: './add-attaque.component.html',
  styleUrls: ['./add-attaque.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgOptimizedImage, NgApexchartsModule]
})
export class AddAttaqueComponent  {
  attaque : AttaqueModels = {} as AttaqueModels;
  allType : TypeModels[] = allTypePokemon;
  allEffet : EffetModels[] = AllEffectPokemon;
  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  addAttaque() {
    this.modalController.dismiss(this.attaque);
  }

  protected readonly allTypes = allTypePokemon;
}
