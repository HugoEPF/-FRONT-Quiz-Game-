import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable, take} from "rxjs";
import {Quizz} from "../models/Quizz";
import {QuizzService} from "./quizz.service";
import {Questions} from "../models/Questions";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {
  }
  private questionUrl = "http://localhost:8080/questions"

  findAll() : Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionUrl )
  }

  listQuestionByGenreId(genre: string | undefined, id: Questions | undefined): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionUrl + `/${(genre)}` + `/${(id)}`)
  }

    findIdByGenre(genre: string | undefined): Observable<Questions[]> {
        return this.http.get<Questions[]>(this.questionUrl + `/${(genre)}`)
    }


}
