import {Component, OnInit, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";
import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonNote, IonRadio, IonRadioGroup, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {Router} from "@angular/router";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.page.html",
  styleUrls: ["./inscription.page.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonRadioGroup, IonRadio, IonButton, IonNote]
})
export class InscriptionPage implements OnInit {
  userEmail!: string;
  userPassword!: string;
  userAge!: number;
  userSexe!: string;

  @ViewChild('inscriptionForm') inscriptionForm!: NgForm;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  connexionNavigate() {
    this.router.navigate(["tabs", "connexion"]);
  }


  inscription() {
    if (this.inscriptionForm.valid) {
      console.log(this.userAge, this.userSexe, this.userEmail, this.userPassword);
      // Procéder avec l'inscription
    } else {
      // Afficher des messages d'erreur ou traiter les champs invalides
      console.error("Le formulaire n'est pas valide");
    }
  }


}
