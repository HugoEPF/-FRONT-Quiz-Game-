import {Component, Renderer2} from '@angular/core';
import { Location } from '@angular/common';
import {map, Observable} from "rxjs";
import {QuestionsService} from "../services/questions.service";
import {Questions} from "../models/Questions";


@Component({
  selector: 'app-lien',
  templateUrl: './lien.component.html',
  styleUrls: ['./lien.component.css']
})
export class LienComponent {
  imageSource = 'assets/lien_hypertexte.png';
  currentUrl: string | undefined;
  slicedString:string = this.genreQuestion().substring(6);
  questions$:Observable<Questions[]> =this.questionService.findIdByGenre(this.slicedString)
  constructor(private renderer: Renderer2, private location:Location, private questionService:QuestionsService ) {

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

  genreQuestion():string {
    return this.currentUrl = this.location.path()
  }

  /*listQuestionWithRandomQuestion(genre: string | undefined): Observable<Questions[]> {
    return this.questionService.findIdByGenre(genre).pipe(
        map(questions => {
          const randomIndex = Math.floor(Math.random() * questions.length);
        return this.questionService.listQuestionByGenreId(genre, questions.at(0))
        })
    );
  }*/
}
