import {Component, EnvironmentInjector, inject} from "@angular/core";
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {ellipse, square, triangle} from "ionicons/icons";
import {UserService} from "../services/user.service";
import {NgIf} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, NgIf],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  token = localStorage.getItem("token");
  private isConnectSubscription: Subscription;
  isAuth: boolean = false;

  constructor(private userService: UserService) {
    addIcons({triangle, ellipse, square});
    this.isConnectSubscription = this.userService.isLogged$.subscribe((value) => {
      this.isAuth = value;
    });

  }

  async isTokenGood() {
    return await this.userService.verifToken(<string>this.token);
  }
}
