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

  findAll() : Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionUrl )
  }
  findQuestionsById(id: bigint | undefined): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.questionUrl + `/byId/${(id)}`)
  }
  findById(id: bigint) : Observable<Questions> {
    return this.http.get<Questions>(`${this.questionUrl}/${id}`)
  }
  findQuestionsByGenre(genre: string | undefined): Observable<Questions[]> {
        return this.http.get<Questions[]>(this.questionUrl + `/byGenre/${(genre)}`)
  }
  create(question: Questions): Observable<Questions> {
    return this.http.post<Questions>(`${this.questionUrl}`, question);
  }
  update(question: Questions): Observable<Questions> {
    return this.http.post<Questions>(`${this.questionUrl}`, question);
  }
  delete(id: bigint | undefined): Observable<{}> {
    return this.http.delete(`${this.questionUrl}/${id}`, { responseType: 'text' });
  }

}
