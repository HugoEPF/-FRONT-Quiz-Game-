import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Questions} from "../models/Questions";
import {Reponse} from "../models/Reponse";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditQuestionService {

  constructor(private http: HttpClient) {
  }

  private reponsesUrl = "http://localhost:8080/reponses"

  findByQuestionId(question_id: bigint) : Observable<Reponse[]> {
    return this.http.get<Reponse[]>(`${this.reponsesUrl}/${question_id}`)
  }
}
