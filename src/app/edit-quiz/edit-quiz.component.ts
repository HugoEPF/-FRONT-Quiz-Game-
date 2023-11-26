import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Quizz} from "../models/Quizz";
import {QuizzService} from "../services/quizz.service";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit {

  quizForm: FormGroup;
  quiz$: Observable<Quizz> = this.quizzService.findById(this._route.snapshot.params['id']);

  constructor(
    private _route: ActivatedRoute,
    private quizzService: QuizzService,
    private router: Router,
    private fb: FormBuilder // Injectez le FormBuilder
  ) {
    this.quizForm = this.fb.group({
      nombre_questions: [''],
      genre: ['']
    });
  }

  ngOnInit(): void {
    const userId: bigint = this._route.snapshot.params['id'];
    this.quizzService.findById(userId).subscribe((quizz: Quizz) => {
      this.quizForm.patchValue({
        nombre_questions: quizz.nombre_questions,
        genre: quizz.genre
      });
    });
  }

  deleteQuizz(): void {
    const quizzId: bigint = this._route.snapshot.params['id'];
    this.quizzService.delete(quizzId).subscribe(() => this.router.navigate(["gestion_quiz"]).then(() => {
      window.location.reload();
    }));
  }
  save(quizz: Quizz) {
    this.quizzService.update(quizz).subscribe(() => {
      this.router.navigate(["gestion_quiz"])
    })
  }

}

