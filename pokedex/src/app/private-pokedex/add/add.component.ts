import {Component, Input, OnInit} from '@angular/core';
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
  @Input() isUpdate: boolean = false;
  pokemon: DefaultPokemonModels = {} as DefaultPokemonModels;
  allTypes: TypeModels[] = allTypePokemon;
  listAttaques: AttaqueModels[] = [];
  selectedAttaques: AttaqueModels[] = [];

  constructor(private modalController: ModalController, private pokedexService: PokedexService) {

  }

  ionViewWillEnter() {
    if (this.isUpdate) {
      // @ts-ignore
      this.pokemon.type1 = this.allTypes.find(type => type.id === this.pokemon.type1.uuid || type.id === this.pokemon.type1?.id);
      // @ts-ignore
      this.pokemon.type2 = this.allTypes.find(type => type.id === this.pokemon.type2.uuid || type.id === this.pokemon.type2?.id);
      // @ts-ignore
      this.pokemon.listAttaques.forEach(list => {
        const ListAttaque: ListAttaqueModels = {
          uuidList: list.uuidList,
          attaque: list.attaque,
          niveau: list.niveau,
          idAttaque: list.attaque.uuid,
        }
        this.listAttaques.push(list.attaque);
        this.selectedAttaques.push(list.attaque);
      });
    }
  }

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

    this.pokemon.listAttaques = finalListAttaques;

    this.pokedexService.addPokemon(this.pokemon).subscribe(() => {
      this.modalController.dismiss(this.pokemon);
    });
  }

  updatePokemon() {
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

    this.pokemon.listAttaques = finalListAttaques;

    this.pokedexService.updatePokemon(this.pokemon).subscribe(() => {
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
