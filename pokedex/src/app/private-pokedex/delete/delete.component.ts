import {Component, Input, OnInit} from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgApexchartsModule} from "ng-apexcharts";
import {DefaultPokemonModels} from "../../models/defaultPodemon-models";
import {PokedexService} from "../../services/pokedex.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgOptimizedImage, NgApexchartsModule]
})
export class DeleteComponent  {
  @Input() pokemon: DefaultPokemonModels | undefined;

  constructor(private modalController: ModalController, private pokedexService: PokedexService) {}

  confirmer() {
    if (this.pokemon) {
      this.pokedexService.deletePokemon(this.pokemon.id).subscribe(() => {
        this.modalController.dismiss(this.pokemon);
      });
    }
    else {
      this.modalController.dismiss();
    }
  }

  annuler() {
    console.log('annuler', this.pokemon);
    this.modalController.dismiss();
  }

}
