import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Reponse} from "../models/Reponse";
import {ReponseService} from "../services/reponse.service";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent {

  questionId: bigint = this._route.snapshot.params['id'];
  reponse$: Observable<Reponse[]> = this.reponseService.findReponsesById(this.questionId)

  constructor(private reponseService: ReponseService,  private _route: ActivatedRoute, private router: Router) {



  }
  redirectToEditQuestion() {
    const questionIdBigInt = BigInt(this.questionId);
    localStorage.setItem('questionId', questionIdBigInt.toString())
  }

}
