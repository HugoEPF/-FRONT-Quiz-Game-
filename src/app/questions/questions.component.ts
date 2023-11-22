import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Location} from "@angular/common";
import {Questions} from "../models/Questions";
import {ReponseService} from "../services/reponse.service";
import {Reponse} from "../models/Reponse";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  genre: string;
  currentUrl: string | undefined;
  lastNumber: string | undefined;
  correctAnswerIndex: number | null | undefined;
  selectedAnswerIndex: number | null = null;



  // @ts-ignore
  question$: Observable<Questions[]> = this.questionService.findQuestionsById(BigInt(this.getId()))

  // @ts-ignore
  reponse$: Observable<Reponse[]> = this.reponseService.findReponsesById(BigInt(this.getId()))
  constructor(private route: ActivatedRoute, private questionService : QuestionsService,  private location:Location, private reponseService:ReponseService) {
    this.genre = this.route.snapshot.params['genre'];
  }

 getId():string | undefined {
   let url = this.currentUrl = this.location.path()
   const match = url.match(/\d+$/);
   return this.lastNumber = match ? match[0] : undefined;

}

  isCorrect(index: number): string {
    return this.selectedAnswerIndex !== null ?
      index == this.correctAnswerIndex
        ? 'green' :
        index != this.correctAnswerIndex ?
          'red'
      : "#3363FF68" : "#3363FF68"

  }


  handleClick(index: number) {
    if (this.selectedAnswerIndex === null) {
      this.selectedAnswerIndex = index;
        this.findGoodAnswerIndex(true).subscribe(index => {
          if (index !== undefined) {
            this.correctAnswerIndex =index
          }
        });

    }
  }

  findGoodAnswerIndex(isGood: boolean): Observable<number | undefined> {
    return this.reponse$.pipe(
      map(reponses => reponses.findIndex(reponse => reponse.isgood === isGood))
    );
  }







}





