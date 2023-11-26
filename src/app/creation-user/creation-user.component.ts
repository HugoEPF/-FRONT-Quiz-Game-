import {Component} from '@angular/core';
import {Users} from "../models/Users";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-creation-user',
  templateUrl: './creation-user.component.html',
  styleUrls: ['./creation-user.component.css']
})
export class CreationUserComponent {

  submitted = false;
  userForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      pseudo: '',
      email: '',
      score: 0,
    });
  }

  create() {
    const userData = this.userForm.value as Users;
    this.userService.create(userData).subscribe(() => {
      this.router.navigate(["gestion_user"])
    })
  }
  submitForm() {
    if (this.userForm.valid) {
      this.create();
    }
  }

}
