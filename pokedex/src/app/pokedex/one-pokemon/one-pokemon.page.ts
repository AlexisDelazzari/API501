import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ActivatedRoute} from "@angular/router";
import {PokedexService} from "../../services/pokedex.service";
import {HttpClient} from "@angular/common/http";
import {ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexMarkers, ApexResponsive, ApexStroke, ApexTitleSubtitle, ApexXAxis, NgApexchartsModule} from "ng-apexcharts";
import {Pokemon} from "../../models/api-models";

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
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.page.html',
  styleUrls: ['./one-pokemon.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgApexchartsModule],
  providers: [HttpClient]
})
export class OnePokemonPage implements OnInit {

  // @ViewChild("chart") chart: ChartComponent;
  public chartOptions!: ChartOptions;
  onePokemon!: Pokemon

  isDataCharged: boolean = false

  id: number

  widthDevice = window.innerWidth

  heigthOfsection = window.innerHeight - 44 - 50


  constructor(private activatedRoute: ActivatedRoute, private pokedexService: PokedexService) {
    this.id = activatedRoute.snapshot.params['id'];
    pokedexService.getOnePokemon(this.id).subscribe((value) => {
      console.log(value);
      this.onePokemon = value;
      this.initializeChartOptions(); // Initialise le graphique ici
      this.isDataCharged = true
    });

    window.addEventListener("resize", () => {
      this.widthDevice = window.innerWidth
    })
  }

  ngOnInit() {
  }


  initializeChartOptions() {
    this.chartOptions = {

      series: [
        {
          name: "Pokemon Stat",
          data: [this.onePokemon.pv, this.onePokemon.attaque, this.onePokemon.defense, this.onePokemon.vitesse, this.onePokemon.defenseSpeciale, this.onePokemon.attaqueSpeciale]
        }
      ],
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
          show : true,

          style: {
            colors: ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"],
            fontSize: "12px",
            fontFamily: 'Roboto'
          }
        }
      },
    };


  }

  getImageType(type: string): string {
    return `./assets/type/${type}.png`
  }


}
