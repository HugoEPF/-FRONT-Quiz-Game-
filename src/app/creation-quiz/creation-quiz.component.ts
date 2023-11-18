import {Component} from '@angular/core';

@Component({
  selector: 'app-creation-quiz',
  templateUrl: './creation-quiz.component.html',
  styleUrls: ['./creation-quiz.component.css']
})
export class CreationQuizComponent {

  questionCount: number = 1;
  questions: string[] = [];

  onQuestionCountChange() {
    console.log(`Vous avez sélectionné ${this.questionCount} questions.`);
    // Vous pouvez effectuer d'autres actions ici.
  }

  generateQuestions() {
    this.questions = [];
    for (let i = 0; i < this.questionCount; i++) {
      this.questions.push(`Question ${i + 1}`);
    }
  }
}
