import {Component, Input, OnInit} from '@angular/core';
import {TypeModels} from "../../../models/type-models";
import {IonicModule, ModalController} from "@ionic/angular";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.component.html',
  styleUrls: ['./type-pokemon.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TypePokemonComponent {

  @Input() type: TypeModels = new TypeModels(0, "", "", "");

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }
}
