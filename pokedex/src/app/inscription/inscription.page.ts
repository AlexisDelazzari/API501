import {Component, OnInit, ViewChild} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";
import {IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonNote, IonRadio, IonRadioGroup, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

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

  messageErreur: string = "";

  @ViewChild("inscriptionForm") inscriptionForm!: NgForm;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  connexionNavigate() {
    this.router.navigate(["tabs", "connexion"]);
  }

  downloadNavigate() {
    this.router.navigate(["tabs", "download"]);
  }


  inscription() {
    if (this.inscriptionForm.valid) {
      this.userService.inscription(this.userEmail, this.userPassword, this.userAge, this.userSexe).subscribe((res) => {
          localStorage.setItem("token", res.token);
        this.downloadNavigate()
        },
        (error) => {
          console.error("Erreur lors de la requête:", error);
          this.messageErreur = error.error.message || "Une erreur est survenue lors de l'inscription";
        }
      );
    } else {
      console.error("Le formulaire n'est pas valide");
    }
  }

  validateAndCorrectAge() {
    return this.userAge > 10;

  }


}
