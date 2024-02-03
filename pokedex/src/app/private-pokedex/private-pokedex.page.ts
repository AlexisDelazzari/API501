import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-private-pokedex',
  templateUrl: './private-pokedex.page.html',
  styleUrls: ['./private-pokedex.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrivatePokedexPage implements OnInit {
  private isConnectSubscription: Subscription;
  isConnect: boolean = false;

  constructor(private userService: UserService) {
    this.isConnectSubscription = this.userService.isLogged$.subscribe((value) => {
      this.isConnect = value;
    });
  }

  ngOnInit() {

  }

}
