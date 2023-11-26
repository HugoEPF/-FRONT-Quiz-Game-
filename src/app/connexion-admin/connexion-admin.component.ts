import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Admins} from "../models/Admins";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-connexion-admin',
  templateUrl: './connexion-admin.component.html',
  styleUrls: ['./connexion-admin.component.css']
})
export class ConnexionAdminComponent {
  email: string = '';
  admin$: Observable<Admins> | undefined;
  errorMessage: string | undefined;

  constructor(
    private _route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.errorMessage = ''; // Réinitialiser le message d'erreur

    // Vérifier si l'e-mail a été saisi
    if (this.email.trim() !== '') {
      this.admin$ = this.adminService.findByMail(this.email);

      this.admin$.subscribe(
        (admin) => {
          if (admin && admin.email !== undefined) {
            // Rediriger vers la page accueil_admin ou une autre page spécifique si nécessaire
            this.router.navigate(['/accueil_admin']);
          } else {
            // Gérer le cas où l'e-mail de l'administrateur est indéfini
            this.errorMessage = "L'e-mail de l'administrateur est indéfini.";
          }
        },
        (error) => {
          // Gérer les erreurs de la requête
          console.error('Erreur de requête administrateur :', error);
          this.errorMessage = 'Erreur de requête administrateur.';
        }
      );
    } else {
      // Gérer le cas où l'e-mail n'a pas été saisi
      this.errorMessage = 'Veuillez saisir votre adresse e-mail.';
    }
  }

}
