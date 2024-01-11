import {Component, ViewChild} from "@angular/core";
import {IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonText, IonNavLink, IonButton} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import { IonicModule } from '@ionic/angular';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonText, IonNavLink, IonButton, FormsModule, ReactiveFormsModule]
})
export class ConnexionPage {
  userEmail!: string;
  userPassword!: string;

  messageErreur: string = "";

  @ViewChild("connexionForm") connexionForm!: NgForm;

  constructor(private router : Router, private userService : UserService) {}


  Inscription() {
    this.router.navigate(["tabs", "inscription"])
  }
  accueil() {
    this.router.navigate(["tabs", "download"])
  }

  connexion() {
    if (this.connexionForm.valid) {
      this.userService.connexion(this.userEmail, this.userPassword).subscribe((res) => {
          localStorage.setItem("token", res.token);
          this.accueil()
        },
        (error) => {
          console.error("Erreur lors de la requête:", error);
          this.messageErreur = error.error.message || "Une erreur est survenue lors de la connexion";
        }
      );
    } else {
      console.error("Le formulaire n'est pas valide");
    }
  }
}
