import {Component, ViewChild} from "@angular/core";
import {IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonText, IonNavLink, IonButton} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import { IonicModule } from '@ionic/angular';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";
import {DownloadPage} from "../download/download.page";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonText, IonNavLink, IonButton, FormsModule, ReactiveFormsModule, DownloadPage, NgIf]
})
export class ConnexionPage {
  userEmail!: string;
  userPassword!: string;

  messageErreur: string = "";
  private isConnectSubscription: Subscription;
  isConnect: boolean = false;

  @ViewChild("connexionForm") connexionForm!: NgForm;

  constructor(private router : Router, private userService : UserService) {
    this.isConnectSubscription = this.userService.isLogged$.subscribe((value) => {
      this.isConnect = value;
    });
  }


  Inscription() {
    this.router.navigate(["tabs", "inscription"])
  }
  accueil() {
    this.router.navigate(["tabs", "download"])
  }

  connexion() {
    if (this.connexionForm.valid) {
      this.userService.connexion(this.userEmail, this.userPassword).subscribe((data) => {
        if (data["token"]) {
          localStorage.setItem("token", data["token"]);
          this.userService.updateIsLogged(true);
          this.router.navigate(["tabs", "download"]);
        } else {
          this.messageErreur = "Erreur de connexion";
        }
      });
    }
  }
}
