import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Quizz} from "../models/Quizz";
import {QuizzService} from "../services/quizz.service";

@Component({
  selector: 'app-gestion-quiz',
  templateUrl: './gestion-quiz.component.html',
  styleUrls: ['./gestion-quiz.component.css']
})
export class GestionQuizComponent {


  quizz$: Observable<Quizz[]> = this.quizzService.findAll()

  constructor(private quizzService: QuizzService) {

  }

}
