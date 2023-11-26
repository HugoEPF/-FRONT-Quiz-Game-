import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionsService } from "../services/questions.service";
import { Questions } from "../models/Questions";
import {Users} from "../models/Users";

@Component({
  selector: 'app-creation-question',
  templateUrl: './creation-question.component.html',
  styleUrls: ['./creation-question.component.css']
})
export class CreationQuestionComponent {
  questionForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder,private questionService: QuestionsService, private router: Router) {
      this.questionForm = this.fb.group({
        genre: this.route.snapshot.paramMap.get('genre'),
        contenu: '',
        quizz: ''
      });
  }


  create() {
    const questionData = this.questionForm.value as Questions;
    questionData.quizz= { id: this.route.snapshot.params['id'] };
    this.questionService.create(questionData).subscribe(() => {
      this.router.navigate([`detail_quiz/${questionData.genre}/${questionData.quizz?.id}`]);
    });
  }
}
