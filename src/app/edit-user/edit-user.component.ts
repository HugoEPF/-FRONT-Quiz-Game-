import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Users} from "../models/Users";
import {EditUserService} from "../services/edit-user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  user$: Observable<Users> = this.userService.findById(this._route.snapshot.params['id']);

  constructor(
    private _route: ActivatedRoute,
    private userService: EditUserService,
    private router: Router,
    private fb: FormBuilder // Injectez le FormBuilder
  ) {
    this.userForm = this.fb.group({
      pseudo: [''],
      email: [''],
      score: ['']
    });
  }

  ngOnInit(): void {
    const userId: bigint = this._route.snapshot.params['id'];
    this.userService.findById(userId).subscribe((user: Users) => {
      this.userForm.patchValue({
        pseudo: user.pseudo,
        email: user.email,
        score: user.score
      });
    });
  }

  deleteUser(): void {
    const userId: bigint = this._route.snapshot.params['id'];
    this.userService.delete(userId).subscribe(() => this.router.navigate(["gestion_user"]));
  }
  save(user: Users) {
    this.userService.update(user).subscribe(() => {
      this.router.navigate(["gestion_user"])
    })
  }

}
