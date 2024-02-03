import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private apiUrl = environment.api_url;
  private isLogged = new BehaviorSubject<boolean>(false);
  public isLogged$ = this.isLogged.asObservable();

  updateIsLogged(value: boolean) {
    this.isLogged.next(value);
  }

  constructor(private http: HttpClient) {
  }

  inscription(email: string, password: string, age: number, sexe: string): Observable<any> {
    let reelSexe = (sexe === "homme") ? 1 : 0;
    return new Observable<any>((observer) => {
      fetch(`${this.apiUrl}/auth/register`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({email, password, age, sexe: reelSexe})
      })
        .then((response) => response.json())
        .then((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  connexion(email: string, password: string): Observable<any> {
    return new Observable<any>((observer) => {
      fetch(`${this.apiUrl}/auth/login`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({email, password})
      })
        .then((response) => response.json())
        .then((response) => {
          observer.next(response);
          observer.complete();
        });
    });
  }

  async verifToken(token: string | null): Promise<boolean> {
    if (!token) {
      return false
    }
    const resonse = await fetch(`${this.apiUrl}/auth/checktoken`, {
      method: "GET",
      headers: new Headers({
        "Authorization": `Bearer ${token}`
      })
    });
    console.log(resonse);

    if (resonse.status === 200) {
      this.isLogged.next(true);
      return true;
    } else {
      this.isLogged.next(false);
      return false;
    }
  }
}
