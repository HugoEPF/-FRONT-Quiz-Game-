import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ReponseService} from "../services/reponse.service";
import {Reponse} from "../models/Reponse";
@Component({
  selector: 'app-creation-reponse',
  templateUrl: './creation-reponse.component.html',
  styleUrls: ['./creation-reponse.component.css']
})
export class CreationReponseComponent implements OnInit{
  reponseForm: FormGroup;
  existingReponses: Reponse[] = [];
  errorMessage: string = '';

  constructor(
    private _route: ActivatedRoute,
    private reponseService: ReponseService,
    private router: Router,
    private fb: FormBuilder
  ){
    this.reponseForm = this.fb.group({
      contenu: '',
      isgood: false,
      question: ''

    });

  }

  ngOnInit() {
    this.loadExistingReponses();
  }

  loadExistingReponses() {
    // Charger les réponses existantes pour la question spécifiée
    const questionId = this._route.snapshot.params['id'];
    this.reponseService.findReponsesById(questionId).subscribe(
      (reponses: Reponse[]) => {
        this.existingReponses = reponses;
      },
      (error) => {
        console.error('Erreur lors du chargement des réponses existantes', error);
      }
    );
  }



  create() {
    if (this.existingReponses.length < 4) {
      const reponseData = this.reponseForm.value as Reponse;
      reponseData.question = { id: this._route.snapshot.params['id'] };
      this.reponseService.create(reponseData).subscribe(() => {
        this.loadExistingReponses(); // Recharger les réponses après la création
        this.router.navigate([`edit_question/${reponseData.question?.id}`]);
      });
    } else {
      this.errorMessage = "Impossible de créer plus de 4 réponses pour une question.";
    }
  }


}
