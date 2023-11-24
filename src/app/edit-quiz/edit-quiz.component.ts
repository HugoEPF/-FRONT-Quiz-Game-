import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EditUserService} from "../services/edit-user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent {

  quizForm : FormGroup;
  constructor(
    private _route: ActivatedRoute,
    private userService: EditUserService,
    private router: Router,
    private fb: FormBuilder // Injectez le FormBuilder
  ) {
    this.quizForm = this.fb.group({
      genre: [''],
      question: [''],
      réponse: ['']
    });
  }

}
