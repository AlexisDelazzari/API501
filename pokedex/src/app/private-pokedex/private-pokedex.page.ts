import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, ModalController} from '@ionic/angular';
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {PokemonModels} from "../models/pokemon-models";
import {TypeModels} from "../models/type-models";
import {TalentEffetModels} from "../models/talentEffet-models";
import {ListAttaqueModels} from "../models/listAttaque-models";
import {AttaqueModels} from "../models/attaque-models";
import {LieuxModels} from "../models/lieux-models";
import {ListPokemonInZoneModels} from "../models/listePokemonInZone-models";
import {ListItemInZoneModels} from "../models/listItemInZone-models";
import {DefaultPokemonModels} from "../models/defaultPodemon-models";
import {CritiqueModels} from "../models/critique-models";
import {CategorieModels} from "../models/categorie-models";
import {EffetModels} from "../models/effet-models";
import {StatusModels} from "../models/status-models";
import {allTypePokemon} from "../static/allTypePokemon";
import {AllEffectPokemon} from "../static/AllEffectPokemon";
import {
  ApexAxisChartSeries,
  ApexChart, ApexDataLabels,
  ApexFill, ApexMarkers,
  ApexStroke,
  ApexTitleSubtitle, ApexXAxis,
  NgApexchartsModule
} from "ng-apexcharts";
import {TypePokemonComponent} from "./modals/type-pokemon/type-pokemon.component";
import {AddComponent} from "./add/add.component";
import {PokedexService} from "../services/pokedex.service";
import {DeleteComponent} from "./delete/delete.component";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-private-pokedex',
  templateUrl: './private-pokedex.page.html',
  styleUrls: ['./private-pokedex.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgOptimizedImage, NgApexchartsModule]
})
export class PrivatePokedexPage  {
  isConnect: boolean = false;
  private pokemonsSubscription: Subscription;
  pokemons: DefaultPokemonModels[] = [];
  private isConnectSubscription: Subscription;
  chartOptions: ChartOptions = {
    series: [],
    chart: {
      height: 350,
      width: "100%",
      type: "radar",
      // offsetX : 5,
      toolbar: {
        show: false // Ceci cache la barre d'outils entièrement
      }
    },
    title: {
      text: ""
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      colors: ['#fff'], // Ceci définira la couleur des lignes en blanc
      dashArray: 0, // Si vous voulez des lignes solides, gardez cette valeur à 0
    },
    fill: {
      opacity: 0.4
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ["Pv", "Attaque", "Défense", "Vitesse", "Déf spéciale", "Att spéciale"],
      labels: {
        show: true,

        style: {
          colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
          fontSize: "12px",
          fontFamily: 'Roboto'
        }
      }
    }
  };

  selectedTypes: TypeModels[] = [];
  searchText: string = "";

  constructor(private userService: UserService, private modalController: ModalController, private pokedexService: PokedexService) {
    this.isConnectSubscription = this.userService.isLogged$.subscribe((value) => {
      this.isConnect = value;
    });
    this.pokemonsSubscription = this.pokedexService.getAllPrivatePokemon().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  async loadNewPokemons(){
    this.pokemonsSubscription = this.pokedexService.getAllPrivatePokemon().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  ionViewWillEnter() {
    this.loadNewPokemons()
  }

  async openTypePokemonModal(type: TypeModels) {
    const modal = await this.modalController.create({
      component: TypePokemonComponent,
      componentProps: {
        type: type
      }
    });
    return await modal.present();
  }
  async openAddPokemonModal() {
    const modal = await this.modalController.create({
      component: AddComponent,
      backdropDismiss: false,
    });
     await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.pokemons.push(data);
    }
  }

  async openEditPokemonModal(pokemon:DefaultPokemonModels) {
    const modal = await this.modalController.create({
      component: AddComponent,
      backdropDismiss: false,
      componentProps: {
        pokemon: pokemon,
        isUpdate: true
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.pokemons = this.pokemons.map((p) => {
        if (p.id === data.id) {
          return data;
        }
        return p;
      });
    }
  }

  async openDeletePokemonModal(pokemon:DefaultPokemonModels) {
    const modal = await this.modalController.create({
      component: DeleteComponent,
      backdropDismiss: false,
      componentProps: {
        pokemon: pokemon
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log(data);
      this.pokemons = this.pokemons.filter((p) => p.id !== pokemon.id);
    }
  }

  get filteredPokemons(): DefaultPokemonModels[] {
    return this.pokemons.filter((pokemon) => {
      let typeMatch1 = false;
      let typeMatch2 = false;

      if (pokemon.type1) {
        typeMatch1 = this.selectedTypes.length === 0 || this.selectedTypes.includes(pokemon.type1);
      }
      if (pokemon.type2) {
        typeMatch2 = this.selectedTypes.length === 0 || this.selectedTypes.includes(pokemon.type2);
      }
      const nameMatch = pokemon.nom.toLowerCase().includes(this.searchText.toLowerCase());

      return (typeMatch1 || typeMatch2) && nameMatch;
    });
  }

  protected readonly allTypePokemon = allTypePokemon;
}
