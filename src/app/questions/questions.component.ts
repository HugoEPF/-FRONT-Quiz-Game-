import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Location} from "@angular/common";
import {Questions} from "../models/Questions";
import {ReponseService} from "../services/reponse.service";
import {Reponse} from "../models/Reponse";
import {forkJoin, map, Observable, of, switchMap, take} from "rxjs";

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
  color:string | undefined
  id:bigint | undefined



  // @ts-ignore
  question$: Observable<Questions[]> = this.questionService.findQuestionsById(BigInt(this.getId()))
  // @ts-ignore
  reponse$: Observable<Reponse[]> = this.reponseService.findReponsesById(BigInt(this.getId()))
  constructor(private route: ActivatedRoute, private questionService : QuestionsService,  private location:Location, private reponseService:ReponseService, private router:Router) {
    this.genre = this.route.snapshot.params['genre'];
  }

 getId():string | undefined {
   let url = this.currentUrl = this.location.path()
   const match = url.match(/\d+$/);
   return this.lastNumber = match ? match[0] : undefined;

}

getGenre():string | undefined {
  let url = this.currentUrl = this.location.path()
  const segments = url.split('/');
  return segments[segments.indexOf('question') + 1]
}

  isCorrectColor(index: number): string {
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
            this.nextQuestion(index)
          }
        });
    }
  }

  findGoodAnswerIndex(isGood: boolean): Observable<number | undefined> {
    return this.reponse$.pipe(
      map(reponses => reponses.findIndex(reponse => reponse.isgood === isGood))
    );
  }

  nextQuestion(index: number) {
    const color = this.isCorrectColor(index);
    if (color === 'green' || color === 'red') {
      setTimeout(() => {
        forkJoin({
          lengthQuestions: this.searchQuestion(),
          indexCurrentQuestion: this.findQuestionIndex()
        }).subscribe(result => {
          const currentIndex = result.indexCurrentQuestion;
          console.log(currentIndex);

          // Vérifiez s'il y a une question suivante
          if (currentIndex + 1 < result.lengthQuestions.length) {
            const nextQuestion = result.lengthQuestions[currentIndex + 1];
            const nextQuestionId = nextQuestion.id;

            // Redirection vers la question suivante
            this.router.navigateByUrl('/question/' + this.getGenre() + '/' + nextQuestionId).then(() => {
              console.log(currentIndex);
              window.location.reload();
            });
          } else {
            // Si aucune question suivante, rediriger vers 'choix_theme'
            this.router.navigateByUrl('/choix_theme');
          }
        });
      }, 1500);
    }
  }



  searchQuestion(): Observable<Questions[]> {
    return this.questionService.findQuestionsByGenre(this.getGenre()).pipe(
    );
  }

  findQuestionIndex(): Observable<number> {
    return this.questionService.findQuestionsByGenre(this.getGenre()).pipe(
      map(questions => {
        const index = questions.findIndex(question => question.id == this.getId());
        return index >= 0 ? index : -1; // Si l'ID n'est pas trouvé, renvoie -1
      })
    );
  }






  protected readonly BigInt = BigInt;
}





