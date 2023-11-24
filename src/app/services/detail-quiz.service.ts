import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quizz} from "../models/Quizz";
import {Questions} from "../models/Questions";

@Injectable({
  providedIn: 'root'
})
export class DetailQuizService {

  constructor(private http: HttpClient) {
  }
  private questionUrl = "http://localhost:8080/questions/byGenre"

  findByGenre(genre_quiz: string) : Observable<Questions[]> {
    return this.http.get<Questions[]>(`${this.questionUrl}/${genre_quiz}`)
  }


}
