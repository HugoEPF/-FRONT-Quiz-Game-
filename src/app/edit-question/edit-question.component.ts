import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Questions} from "../models/Questions";
import {QuestionsService} from "../services/questions.service";

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit{
  questionForm: FormGroup;
  question$: Observable<Questions> = this.questionsService.findById(this._route.snapshot.params['id']);

  constructor(
    private _route: ActivatedRoute,
    private questionsService: QuestionsService,
    private router: Router,
    private fb: FormBuilder // Injectez le FormBuilder
  ) {
    this.questionForm = this.fb.group({
      genre: this._route.snapshot.paramMap.get('genre'),
      contenu: '',
      quizz: ''
    });
  }

  ngOnInit(): void {
    const userId: bigint = this._route.snapshot.params['id'];
    this.questionsService.findById(userId).subscribe((question: Questions) => {
      this.questionForm.patchValue({
        genre: question.genre,
        contenu: question.contenu
      });
    });
  }

  deleteQuestion(): void {
    const questionData = this.questionForm.value as Questions;
    const questionId: bigint = this._route.snapshot.params['id'];
    this.questionsService.delete(questionId).subscribe(() => this.router.navigate([`detail_quiz/${questionData.genre}/${questionId}`]).then(() => {
      window.location.reload();
    }));
  }
  save(question: Questions) {
    const questionData = this.questionForm.value as Questions;
    const questionId: bigint = this._route.snapshot.params['id'];
    this.questionsService.update(question).subscribe(() => {
      this.router.navigate([`detail_quiz/${questionData.genre}/${questionId}`])
    })
  }


}
