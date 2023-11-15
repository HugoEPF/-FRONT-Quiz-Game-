import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Questions} from "../models/Questions";
import {QuestionsService} from "../services/questions.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  genre: string;
    //question$: Observable<Questions[]> = this.questionService.listQuestionByGenre("Sport")
  constructor(private route: ActivatedRoute, private questionService : QuestionsService) {
    this.genre = this.route.snapshot.params['genre'];
  }

}
