import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../models/Users";
import {Quizz} from "../models/Quizz";

@Injectable({
  providedIn: 'root'
})
export class EditQuizService {

  constructor(private http: HttpClient) {
  }

  private quizUrl = "http://localhost:8080/quizz"

  delete(id: bigint | undefined): Observable<{}> {
    return this.http.delete(`${this.quizUrl}/${id}`, {responseType: 'text'});
  }

  findById(id: bigint): Observable<Quizz> {
    return this.http.get<Quizz>(`${this.quizUrl}/${id}`)
  }

  update(quiz: Quizz): Observable<Quizz> {
    return this.http.post<Quizz>(`${this.quizUrl}`, quiz);
  }

  create(quiz: Quizz): Observable<Quizz> {
    return this.http.post<Quizz>(`${this.quizUrl}`, quiz);
  }
}
