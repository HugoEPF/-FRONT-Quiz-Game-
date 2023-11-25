import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable, of, take} from "rxjs";
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

  findQuestionsById(id: bigint | undefined): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionUrl + `/byId/${(id)}`)
  }

  findQuestionsByGenre(genre: string | undefined): Observable<Questions[]> {
        return this.http.get<Questions[]>(this.questionUrl + `/byGenre/${(genre)}`)
    }


}
