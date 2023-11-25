import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Quizz} from "../models/Quizz";
import {GestionQuizService} from "../services/gestion-quiz.service";
import {DetailQuizService} from "../services/detail-quiz.service";
import {Questions} from "../models/Questions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-quiz',
  templateUrl: './detail-quiz.component.html',
  styleUrls: ['./detail-quiz.component.css']
})
export class DetailQuizComponent {

  quizGenre: string = this._route.snapshot.params['genre'];
  quizId: string = this._route.snapshot.params['id'];
  quizz$: Observable<Questions[]> = this.quizzService.findByGenre(this.quizGenre)
  constructor(private quizzService: DetailQuizService,  private _route: ActivatedRoute, private router: Router) {


  }



}
