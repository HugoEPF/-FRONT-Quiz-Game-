import {Component, OnInit, Renderer2} from '@angular/core';
import {QuizzService} from "../services/quizz.service";
import {catchError, first, firstValueFrom, map, Observable, of, take} from "rxjs";
import {Quizz} from "../models/Quizz";
import {Questions} from "../models/Questions";

import {ActivatedRoute, Router} from "@angular/router";
import {QuestionsService} from "../services/questions.service";
import {Users} from "../models/Users";
import {GestionUserService} from "../services/gestion-user.service";

@Component({
  selector: 'app-choix-theme',
  templateUrl: './choix-theme.component.html',
  styleUrls: ['./choix-theme.component.css']
})
export class ChoixThemeComponent implements OnInit {
  user: Users | null = null;

  theme$: Observable<Quizz[]> = this.quizzService.findAll()
  question$: Observable<Questions[]> = this.questionService.findAll()

  constructor(
    private userService: GestionUserService,
    private quizzService: QuizzService,
    private questionService: QuestionsService
  ) {
  }

  ngOnInit(): void {
    // this.currentUser = this.userService.getCurrentUser();
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      console.log(this.user);
    }
    // console.log(this.currentUser)
    // Faites quelque chose avec l'utilisateur actuel...
  }

}
