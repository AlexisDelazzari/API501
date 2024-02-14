import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Pokedex, Pokemon} from "../models/api-models";
import {environment} from "../../environments/environment";
import {DefaultPokemonModels} from "../models/defaultPodemon-models";

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private apiUrl = environment.api_url;
  allPokemon: DefaultPokemonModels[] = [];
  private allPokemonObservable = new BehaviorSubject<DefaultPokemonModels[]>(this.allPokemon);
  // private apiUrl = 'http://localhost:3003/'; // Remplacez par l'URL de votre API

  get allPokemon$(): Observable<DefaultPokemonModels[]> {
    return this.allPokemonObservable.asObservable();
  }

  updatePokemonList() {
    this.getAllPrivatePokemon().subscribe((pokemon) => {
      this.allPokemon = pokemon;
      this.allPokemonObservable.next(this.allPokemon);
    });
  }

  constructor(private http: HttpClient) {
  }

  getAllPokemon(): Observable<Pokedex[]> {

    return this.http.get<Pokemon[]>(`${this.apiUrl}/pokedex`);
  }

  getOnePokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokedex/${id}`;
    return this.http.get<Pokemon>(url);
  }

  getAllPrivatePokemon(): Observable<DefaultPokemonModels[]> {
    return new Observable<DefaultPokemonModels[]>((observer) => {
      fetch(`${this.apiUrl}/pokedex/private`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  deletePokemon(id: number): Observable<DefaultPokemonModels> {
    return new Observable<DefaultPokemonModels>((observer) => {
      fetch(`${this.apiUrl}/pokedex/private/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          observer.next(response);
          observer.complete();
        });
    });
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

