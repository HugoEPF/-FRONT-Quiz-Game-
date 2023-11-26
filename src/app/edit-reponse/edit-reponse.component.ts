import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Quizz} from "../models/Quizz";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizzService} from "../services/quizz.service";
import {Reponse} from "../models/Reponse";
import {ReponseService} from "../services/reponse.service";

@Component({
  selector: 'app-edit-reponse',
  templateUrl: './edit-reponse.component.html',
  styleUrls: ['./edit-reponse.component.css']
})
export class EditReponseComponent implements OnInit {

  reponseForm: FormGroup;
  reponse$: Observable<Reponse> = this.reponseService.findById(this._route.snapshot.params['id']);
  questionId: bigint | null = null;

  constructor(
    private _route: ActivatedRoute,
    private reponseService: ReponseService,
    private router: Router,
    private fb: FormBuilder // Injectez le FormBuilder
) {
    const questionIdString = localStorage.getItem('questionId');
    if (questionIdString !== null) {
      // Convertissez la valeur stockée en bigint
      this.questionId = BigInt(questionIdString);
    }
    this.reponseForm = this.fb.group({
      contenu: '',
      isgood: false,
      question: ''
    });
  }

  ngOnInit(): void {
    const reponseId: bigint = this._route.snapshot.params['id'];
    this.reponseService.findById(reponseId).subscribe((reponse: Reponse) => {
    this.reponseForm.patchValue({
      contenu: reponse.contenu,
      isgood: reponse.isgood
    });
  });
}

  deleteReponse(): void {
    const reponseId: bigint = this._route.snapshot.params['id'];
    const questionId = localStorage.getItem('questionId');
    this.reponseService.delete(reponseId).subscribe(() => {
      this.router.navigate([`detail_question/${questionId}`]).then(() => {
        window.location.reload();
      });
    });

  }
  save(reponse: Reponse) {
    const questionId = localStorage.getItem('questionId');
    this.reponseService.update(reponse).subscribe(() => {
      this.router.navigate([`detail_question/${questionId}`])
    })
  }

}
