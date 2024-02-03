import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DownloadPage implements OnInit {

  constructor(private router : Router, private userService : UserService) {}

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem("token");
    this.userService.updateIsLogged(false);
    this.router.navigate(["tabs", "accueil"]);

  }

}
