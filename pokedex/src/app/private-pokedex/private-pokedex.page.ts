import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-private-pokedex',
  templateUrl: './private-pokedex.page.html',
  styleUrls: ['./private-pokedex.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrivatePokedexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
