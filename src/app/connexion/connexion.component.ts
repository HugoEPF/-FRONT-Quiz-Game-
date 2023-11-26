import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Users} from '../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {GestionUserService} from '../services/gestion-user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  email: string = '';
  user$: Observable<Users> | undefined;
  errorMessage: string | undefined;

  constructor(
    private _route: ActivatedRoute,
    private userService: GestionUserService,
    private router: Router
  ) {
  }

  onSubmit() {
    this.errorMessage = ''; // Réinitialiser le message d'erreur

    // Vérifier si l'e-mail a été saisi
    if (this.email.trim() !== '') {
      // Appeler la fonction findByMail avec l'e-mail saisi
      this.user$ = this.userService.findByMail(this.email);

      // S'abonner au résultat
      this.user$.subscribe(
        (user) => {
          // Vérifier si l'utilisateur existe
          if (user) {
            // Rediriger vers la page de choix de thème si l'utilisateur existe
            this.router.navigate(['/choix_theme']);
          } else {
            // Gérer le cas où l'utilisateur n'existe pas
            this.errorMessage = 'Utilisateur non trouvé.';
          }
        },
        (error) => {
          // Gérer les erreurs de la requête
          console.error('Erreur de requête :', error);
          this.errorMessage = 'Erreur de requête.';
        }
      );
    } else {
      // Gérer le cas où l'e-mail n'a pas été saisi
      this.errorMessage = 'Veuillez saisir votre adresse e-mail.';
    }
  }
}
