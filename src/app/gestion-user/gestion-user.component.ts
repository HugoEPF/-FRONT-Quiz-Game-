import {ChangeDetectorRef, Component} from '@angular/core';


import {Users} from "../models/Users";
import {GestionUserService} from "../services/gestion-user.service";
import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent {

  user$: Observable<Users[]> = this.userService.findAll()

  constructor(private _route: ActivatedRoute, private userService: GestionUserService, private router: Router,) {


  }

  deleteUser(userId: bigint | undefined): void {
    this.userService.delete(userId).subscribe(() => this.router.navigate(["gestion_user"]))
  }






}
