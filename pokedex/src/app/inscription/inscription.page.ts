import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonRadio, IonRadioGroup, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonRadioGroup, IonRadio, IonButton]
})
export class InscriptionPage implements OnInit {
  userEmail!: string;
  userPassword!: string;
  userAge!: number;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  connexionNavigate() {
    this.router.navigate(["tabs", "connexion"])
  }

  connexion() {
    console.log(this.userEmail, this.userPassword, this.userAge);
    // Ici, vous pouvez appeler un service pour gérer la connexion
  }


}
