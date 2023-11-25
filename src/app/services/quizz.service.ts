import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs"
import { HttpClient } from "@angular/common/http"
import {Quizz} from "../models/Quizz";
import {Questions} from "../models/Questions";

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) {
  }
  private quizzUrl = "http://localhost:8080/quizz"

  findAll(): Observable<Quizz[]> {
    return this.http.get<Quizz[]>(this.quizzUrl)
  }


}
