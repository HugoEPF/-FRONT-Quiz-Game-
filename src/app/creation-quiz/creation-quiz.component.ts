import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Quizz} from "../models/Quizz";
import {QuizzService} from "../services/quizz.service";

@Component({
  selector: 'app-creation-quiz',
  templateUrl: './creation-quiz.component.html',
  styleUrls: ['./creation-quiz.component.css']
})
export class CreationQuizComponent {

  quizForm: FormGroup;
  submitted = false;

  constructor(
    private _route: ActivatedRoute,
    private quizService: QuizzService,
    private router: Router,
    private fb: FormBuilder
  ){
  this.quizForm = this.fb.group({
    genre: '',
  });
}
  create() {
    const quizData = this.quizForm.value as Quizz;
    this.quizService.create(quizData).subscribe(() => {
      this.router.navigate(["gestion_quiz"]).then(() => {
        window.location.reload();
    })})
  }

  submitForm() {
    if (this.quizForm.valid) {
      this.create();
    }
  }
}
