import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonText, IonNavLink} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Router} from "@angular/router";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonInput, IonItem, IonList, IonText, IonNavLink]
})
export class ConnexionPage {

  constructor(private router : Router) {}


  Inscription() {
    this.router.navigate(["tabs", "inscription"])
  }
}
