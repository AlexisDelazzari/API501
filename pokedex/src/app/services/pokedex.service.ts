import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pokedex, Pokemon} from "../models/api-models";

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private apiUrl = 'https://alexisdelazzari.site/api-pokemon/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<Pokedex[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokedex`);
  }

  getOnePokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokedex/${id}`;
    return this.http.get<Pokemon>(url);
  }
}

