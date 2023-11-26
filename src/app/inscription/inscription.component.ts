import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Users} from '../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  userForm: FormGroup;
  submitted = false; // Ajout de la variable submitted

  constructor(
    private _route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      score: [0],
    });
  }

  create() {
    const userData = this.userForm.value as Users;
    this.userService.create(userData).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.create();
    } else {
      console.log('Formulaire non soumis avec les valeurs:', this.userForm.value);
    }
  }
}
