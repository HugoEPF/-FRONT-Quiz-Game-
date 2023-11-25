import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EditQuizService} from "../services/edit-quiz.service";
import {Quizz} from "../models/Quizz";

@Component({
  selector: 'app-creation-quiz',
  templateUrl: './creation-quiz.component.html',
  styleUrls: ['./creation-quiz.component.css']
})
export class CreationQuizComponent {

  quizForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private quizService: EditQuizService,
    private router: Router,
    private fb: FormBuilder
  ){
  this.quizForm = this.fb.group({
    genre: '',
    nombre_questions: 0
  });
}
  create() {
    const quizData = this.quizForm.value as Quizz;
    this.quizService.create(quizData).subscribe(() => {
      this.router.navigate(["gestion_quiz"]).then(() => {
        window.location.reload();
    })})
  }
}
