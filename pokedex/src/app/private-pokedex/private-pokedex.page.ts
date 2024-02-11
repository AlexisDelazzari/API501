import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
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
export class PrivatePokedexPage {
  isConnect: boolean = false;
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

  //DefaultPokemonModels

  type1: TypeModels = new TypeModels(1, "Plante", allTypePokemon[0].image);
  type2: TypeModels = new TypeModels(2, "Eau", allTypePokemon[2].image);

  critique: CritiqueModels = new CritiqueModels(1, 0.45, "Le lanceur charge l'ennemi avec une force énorme.");
  categorie: CategorieModels = new CategorieModels(1, "Physique", "Le lanceur charge l'ennemi avec une force énorme.");
  status: StatusModels = new StatusModels(1, "Brulure", "Le lanceur charge l'ennemi avec une force énorme.");
  effet: EffetModels = new EffetModels(1, "Brulure", this.status, AllEffectPokemon[0].image);

  attaque: AttaqueModels = new AttaqueModels(1, "Charge", 1, 40, 35, 0, "Le lanceur charge l'ennemi avec une force énorme.", 100, null, this.effet, this.type1, this.categorie, this.critique);
  attaque2: AttaqueModels = new AttaqueModels(2, "Charge", 1, 40, 35, 0, "Le lanceur charge l'ennemi avec une force énorme.", 100, null, this.effet, this.type1, this.categorie, this.critique);

  listAttaque: ListAttaqueModels = new ListAttaqueModels(1, 1, 1, this.attaque);
  listAttaque2: ListAttaqueModels = new ListAttaqueModels(1, 2, 1, this.attaque2);

  pokemonDefault: DefaultPokemonModels = new DefaultPokemonModels(1, "https://static.printler.com/cache/c/5/a/7/7/8/c5a7786aed7583aa0e478c3ef4131764695ef603.jpg", "6.9 kg", "Bulbizarre", "Bulbizarre peut survivre sans manger pendant plusieurs jours. En revanche, s'il n'est pas exposé au soleil, il affaiblit. Il évolue en Herbizarre.", 45, 45, 49, 49, 65, 65, 318, 64, 16, 65, "0.7 m", this.type1, this.type2, null, null, [this.listAttaque, this.listAttaque2], null, null, null);

  constructor(private userService: UserService) {
    this.isConnectSubscription = this.userService.isLogged$.subscribe((value) => {
      this.isConnect = value;
    });
    this.pokemons.push(this.pokemonDefault);
    this.pokemons.push(this.pokemonDefault);
    this.pokemons.push(this.pokemonDefault);
  }
}
