import {Component} from '@angular/core';
import {IonContent, IonHeader, IonItem, IonLabel, IonLoading, IonSpinner, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {PokedexService} from "../services/pokedex.service";
import {Pokedex} from "../models/api-models";

@Component({
  selector: 'app-pokedex',
  templateUrl: 'pokedex.page.html',
  styleUrls: ['pokedex.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, NgForOf, IonLoading, NgIf, IonItem, IonLabel, IonSpinner, NgOptimizedImage],
})
export class PokedexPage {
  isCharged: boolean = false
  pokemon: Pokedex[] = []


  constructor(private router: Router, private pokedexService: PokedexService) {
    // setTimeout(() => {

      pokedexService.getAllPokemon().subscribe((value) => {
        console.log(value);
        this.pokemon = value;
        this.isCharged = true
      });
    // }, 3000)
  }


  onePokemon(index: number) {
    this.router.navigate(["tabs", "pokedex", `${index}`])
  }


}
