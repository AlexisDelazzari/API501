import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgApexchartsModule} from "ng-apexcharts";
import {DefaultPokemonModels} from "../../models/defaultPodemon-models";
import {TypeModels} from "../../models/type-models";
import {allTypePokemon} from "../../static/allTypePokemon";
import {AddAttaqueComponent} from "../modals/add-attaque/add-attaque.component";
import {AttaqueModels} from "../../models/attaque-models";
import {ListAttaqueModels} from "../../models/listAttaque-models";
import {PokedexService} from "../../services/pokedex.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgOptimizedImage, NgApexchartsModule]
})
export class AddComponent {

  pokemon: DefaultPokemonModels = {} as DefaultPokemonModels;
  allTypes: TypeModels[] = allTypePokemon;
  listAttaques: AttaqueModels[] = [];
  selectedAttaques: AttaqueModels[] = [];

  constructor(private modalController: ModalController, private pokedexService: PokedexService) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  addPokemon() {
    const finalListAttaques: ListAttaqueModels[] = [];
    this.selectedAttaques.forEach(att => {
      const attaque: ListAttaqueModels = {
        uuidList: 0,
        attaque: att,
        niveau: 1,
        idAttaque: att.uuid,
      }
      finalListAttaques.push(attaque);
    });

    this.pokemon.listAttaque = finalListAttaques;

    //on appelle le service pour ajouter le pokemon
    this.pokedexService.addPokemon(this.pokemon).subscribe(() => {
      this.modalController.dismiss(this.pokemon);
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.pokemon.image = reader.result as string;
    };
  }



  async openAddAttaqueModal() {
    const modal = await this.modalController.create({
      component: AddAttaqueComponent,
      componentProps: {}
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    if (data) {
      this.listAttaques.push(data);
    }
  }
}
