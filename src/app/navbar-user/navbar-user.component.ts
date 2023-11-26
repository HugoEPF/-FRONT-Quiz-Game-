import {Component} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent {
  constructor(private userService: UserService) {
  }

  logout(): void {
    this.userService.logout();
  }
}
