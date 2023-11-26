import {Component} from '@angular/core';
import {GestionUserService} from '../services/gestion-user.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent {
  constructor(private userService: GestionUserService) {
  }

  logout(): void {
    this.userService.logout();
  }
}
