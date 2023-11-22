import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reponse} from "../models/Reponse";

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient) { }
  private reponseUrl:string = "http://localhost:8080/reponses"

  findReponsesById(id: bigint | undefined): Observable<Reponse[]> {
    return this.http.get<Reponse[]>(this.reponseUrl + `/${(id)}`)
  }

  findGoodAnswer(isgood:boolean):Observable<Reponse[]> {
    return this.http.get<Reponse[]>(this.reponseUrl + `/isGood/${(isgood)}`)
  }
}
