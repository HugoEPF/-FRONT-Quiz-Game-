import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../models/Users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private userUrl = "http://localhost:8080/users"

  private currentUser: Users | null = null;

  setCurrentUser(user: Users | null): void {
    this.currentUser = user;
  }

  getCurrentUser(): Users | null {
    return this.currentUser;
  }

  logout(): void {
    // Déconnexion : supprimer l'utilisateur du localStorage
    localStorage.removeItem('user');
    // Réinitialiser l'utilisateur dans le service
    this.setCurrentUser(null);
  }

  delete(id: bigint | undefined): Observable<{}> {
    return this.http.delete(`${this.userUrl}/${id}`, { responseType: 'text' });
  }

  findById(id: bigint): Observable<Users> {
    return this.http.get<Users>(`${this.userUrl}/${id}`)
  }

  update(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.userUrl}`, user);
  }
  create(user: Users): Observable<Users> {
    return this.http.post<Users>(`${this.userUrl}`, user);
  }
  findAll() : Observable<Users[]> {
    return this.http.get<Users[]>(this.userUrl )
  }
  findByMail(email: String): Observable<Users>{
    return this.http.get<Users>(`${this.userUrl}/email/${email}`)
  }
}
