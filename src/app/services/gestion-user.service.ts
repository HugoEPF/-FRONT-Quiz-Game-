import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Users} from "../models/Users";
import {Observable, throwError} from "rxjs";
import {Questions} from "../models/Questions";

@Injectable({
  providedIn: 'root'
})
export class GestionUserService {

  constructor(private http: HttpClient) {
  }

  private userUrl = "http://localhost:8080/users"


  // Supprimer un utilisateur par son ID
  delete(id: bigint | undefined): Observable<{}> {
    return this.http.delete<Users>(`${this.userUrl}/${id}`)
  }

  findAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.userUrl)
  }

  findByMail(email: String): Observable<Users> {
    return this.http.get<Users>(`${this.userUrl}/email/${email}`)
  }


}
