import {Component, OnInit, Renderer2} from '@angular/core';
import { Location } from '@angular/common';
import {forkJoin, map, Observable} from "rxjs";
import {QuestionsService} from "../services/questions.service";
import {Questions} from "../models/Questions";
import { Router } from '@angular/router';
import {Users} from "../models/Users";
import {GestionUserService} from "../services/gestion-user.service";


@Component({
  selector: 'app-lien',
  templateUrl: './lien.component.html',
  styleUrls: ['./lien.component.css']
})
export class LienComponent implements OnInit {

  user: Users | null = null;
  currentUrl: string | undefined;
  questions$:Observable<Questions[]> =this.questionService.findQuestionsByGenre(this.genreQuestion())
  id:bigint | undefined
  score:number=0

  constructor(
    private renderer: Renderer2,
    private location: Location,
    private userService: GestionUserService,
    private questionService: QuestionsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      console.log(this.user);
    }
    }
  copyToClipboard() {
    const link = 'https://www.exemple.com';
    // -------------------------------------------
    // REMPLACER PAR URL DU QUIZ
    // -----------------------------------------
    const textArea = this.renderer.createElement('textarea');
    textArea.value = link;
    this.renderer.appendChild(document.body, textArea);
    textArea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, textArea);
    alert('Lien copié : ' + link);
  }

  genreQuestion(): string {
    let url = this.currentUrl = this.location.path()
    return url.substring(6);
  }

  getIdQuestion(): Observable<Questions[]> {
    return this.questions$.pipe(
      map(id_question => id_question.filter(questions => questions.id)
      ));
  }

  getId(): void {
    forkJoin({
      lengthQuestions: this.getLengthQuestions(),
      idQuestion: this.getIdQuestion()
    }).subscribe(result => {
      // Les deux appels asynchrones sont terminés
      const questions = result.lengthQuestions;
      //this.lengthTableGenre = Math.floor(Math.random() * questions.length);
      this.id = questions.at(0)?.id;
      localStorage.setItem('score', JSON.stringify(this.score));
      this.router.navigateByUrl('/question/' + this.genreQuestion() + '/' + this.id);
    });
  }

  getLengthQuestions(): Observable<Questions[]> {
    return this.questions$.pipe(
      map(questions =>
        questions.filter(question => question.genre?.length)
      )
    );
  }

}
