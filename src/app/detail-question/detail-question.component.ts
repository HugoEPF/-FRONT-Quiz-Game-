import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EditUserService} from "../services/edit-user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Questions} from "../models/Questions";
import {DetailQuizService} from "../services/detail-quiz.service";
import {Reponse} from "../models/Reponse";
import {EditQuestionService} from "../services/edit-question.service";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent {

  questionId: bigint = this._route.snapshot.params['id'];
  reponse$: Observable<Reponse[]> = this.questionService.findByQuestionId(this.questionId)

  constructor(private questionService: EditQuestionService,  private _route: ActivatedRoute,) {


  }

}