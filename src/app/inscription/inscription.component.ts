import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  model: any = {};
  submitted = false;

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      console.log('Formulaire non soumis avec les valeurs:', this.model);
      return;
    }

    console.log('Formulaire soumis avec les valeurs:', this.model);
    // Additional logic if the form is valid
  }

  submitForm(form: NgForm) {
    this.onSubmit(form);
  }
}
