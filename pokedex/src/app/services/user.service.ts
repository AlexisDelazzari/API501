import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokedex, Pokemon} from "../models/api-models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'https://alexisdelazzari.site/api-pokemon/'; // Remplacez par l'URL de votre API
  private apiUrl = 'http://localhost:3003/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  inscription( email : string, password : string, age : number,sexe : string): Observable<any> {
    let reelSexe = (sexe === "homme") ? 1 : 0
    return this.http.post(`${this.apiUrl}/auth/register`, {email, password, age, sexe});
  }

  connexion(email: string,  password : string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, {email, password});
  }

  verifToken(token: number): Observable<any> {
    const url = `${this.apiUrl}/auth/checkToken`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post(url, {}, httpOptions);
  }
}
