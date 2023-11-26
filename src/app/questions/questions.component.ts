import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Location} from "@angular/common";
import {Questions} from "../models/Questions";
import {ReponseService} from "../services/reponse.service";
import {Reponse} from "../models/Reponse";
import {forkJoin, map, Observable} from "rxjs";
import {Users} from "../models/Users";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  genre: string;
  currentUrl: string | undefined;
  lastNumber: string | undefined;
  correctAnswerIndex: number | null | undefined;
  selectedAnswerIndex: number | null = null;
  color: string | undefined
  id: bigint | undefined
  user: Users | null = null;
  score: number = 0


  // @ts-ignore
  question$: Observable<Questions[]> = this.questionService.findQuestionsById(BigInt(this.getId()))
  // @ts-ignore
  reponse$: Observable<Reponse[]> = this.reponseService.findReponsesById(BigInt(this.getId()))

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionsService,
    private location: Location,
    private reponseService: ReponseService,
    private userService: UserService,
    private router: Router) {
    this.genre = this.route.snapshot.params['genre'];
    this.score = Number(localStorage.getItem('score'))

  }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      console.log(this.user);
    }
  }

  getId(): string | undefined {
    let url = this.currentUrl = this.location.path()
    const match = url.match(/\d+$/);
    return this.lastNumber = match ? match[0] : undefined;

  }

  getGenre(): string | undefined {
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
      this.findGoodAnswerIndex(true).subscribe(correctIndex => {
        if (index !== undefined) {
          this.correctAnswerIndex = correctIndex
          console.log('Correct Answer Index:' + correctIndex)
          if (index == correctIndex) {
            this.score++
            localStorage.setItem('score', JSON.stringify(this.score));
          } else {
            localStorage.setItem('score', JSON.stringify(this.score));
          }
          this.nextQuestion(index)
        }
      })
    }
  }

  findGoodAnswerIndex(isGood: boolean): Observable<number | undefined> {
    return this.reponse$.pipe(
      map(reponses => reponses.findIndex(reponse => reponse.isgood === isGood))
    );
  }

  nextQuestion(index: number) {
    setTimeout(() => {
      forkJoin({
        lengthQuestions: this.searchQuestion(),
        indexCurrentQuestion: this.findQuestionIndex()
      }).subscribe(result => {
        const currentIndex = result.indexCurrentQuestion;
        // Vérifiez s'il y a une question suivante
        if (currentIndex + 1 < result.lengthQuestions.length) {
          const nextQuestion = result.lengthQuestions[currentIndex + 1];
          const nextQuestionId = nextQuestion.id;
          // Redirection vers la question suivante
          this.router.navigateByUrl('/question/' + this.getGenre() + '/' + nextQuestionId).then(() => {
            window.location.reload();
          });
        } else {
          // Si aucune question suivante, rediriger vers 'choix_theme'
          this.router.navigateByUrl('/classement');
        }
      });
    }, 1500);
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





