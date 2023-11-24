import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../models/Users";

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(private http: HttpClient) {
  }

  private userUrl = "http://localhost:8080/users"

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
}
