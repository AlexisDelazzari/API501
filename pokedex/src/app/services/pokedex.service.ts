import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pokedex, Pokemon} from "../models/api-models";
import {environment} from "../../environments/environment";
import {DefaultPokemonModels} from "../models/defaultPodemon-models";

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private apiUrl = environment.api_url;

  // private apiUrl = 'http://localhost:3003/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {
  }

  getAllPokemon(): Observable<Pokedex[]> {

    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokedex`);
  }

  getOnePokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokedex/${id}`;
    return this.http.get<Pokemon>(url);
  }

  addPokemon(pokemon: DefaultPokemonModels): Observable<DefaultPokemonModels> {
    return new Observable<DefaultPokemonModels>((observer) => {
      fetch(`${this.apiUrl}/pokedex`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }),
        body: JSON.stringify(pokemon),
      })
        .then((response) => response.json())
        .then((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }
}

