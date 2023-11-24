import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Quizz} from "../models/Quizz";

@Injectable({
  providedIn: 'root'
})
export class GestionQuizService {

  constructor(private http: HttpClient) {
  }
  private quizzUrl = "http://localhost:8080/quizz"

  findAll() : Observable<Quizz[]> {
    return this.http.get<Quizz[]>(this.quizzUrl)
  }
}
