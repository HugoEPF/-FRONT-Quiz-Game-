import {Component, Renderer2} from '@angular/core';
import {QuizzService} from "../services/quizz.service";
import {catchError, first, firstValueFrom, map, Observable, of, take} from "rxjs";
import {Quizz} from "../models/Quizz";
import {Questions} from "../models/Questions";

import {ActivatedRoute, Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";

@Component({
  selector: 'app-choix-theme',
  templateUrl: './choix-theme.component.html',
  styleUrls: ['./choix-theme.component.css']
})
export class ChoixThemeComponent {

  theme$: Observable<Quizz[]> = this.quizzService.findAll()
question$ : Observable<Questions[]> = this.questionService.findAll()
  constructor(private quizzService : QuizzService, private questionService: QuestionsService) {

  }

}
