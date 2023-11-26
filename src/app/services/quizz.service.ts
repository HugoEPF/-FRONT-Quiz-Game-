import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs"
import { HttpClient } from "@angular/common/http"
import {Quizz} from "../models/Quizz";

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

  delete(id: bigint | undefined): Observable<{}> {
    return this.http.delete(`${this.quizzUrl}/${id}`, { responseType: 'text' });
  }
  findById(id: bigint) : Observable<Quizz> {
    return this.http.get<Quizz>(`${this.quizzUrl}/${id}`)
  }
  update(quizz: Quizz): Observable<Quizz> {
    return this.http.post<Quizz>(`${this.quizzUrl}`, quizz);
  }
  create(quiz: Quizz): Observable<Quizz> {
    return this.http.post<Quizz>(`${this.quizzUrl}`, quiz);
  }

}
