import {Component, OnInit} from '@angular/core';
import {Users} from "../models/Users";
import {QuizzService} from "../services/quizz.service";

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  user: Users | null = null;
  score: number | undefined
  constructor(quizzServide:QuizzService) {
  }
  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      console.log(this.user);
    }
    this.score = Number(localStorage.getItem('score'))

  }
}
