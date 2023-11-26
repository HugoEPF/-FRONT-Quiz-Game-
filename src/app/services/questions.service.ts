import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Questions} from "../models/Questions";
import {Quizz} from "../models/Quizz";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {
  }
  private questionUrl = "http://localhost:8080/questions"
  private questionGenreUrl = "http://localhost:8080/questions/byGenre"

  findAll() : Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionUrl )
  }
  findQuestionsById(id: bigint | undefined): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionUrl + `/byId/${(id)}`)
  }
  findQuestionsByGenre(genre: string | undefined): Observable<Questions[]> {
        return this.http.get<Questions[]>(this.questionUrl + `/byGenre/${(genre)}`)
  }
  create(question: Questions): Observable<Questions> {
    return this.http.post<Questions>(`${this.questionUrl}`, question);
  }
  findByGenre(genre_quiz: string) : Observable<Questions[]> {
    return this.http.get<Questions[]>(`${this.questionUrl}/${genre_quiz}`)
  }
}
