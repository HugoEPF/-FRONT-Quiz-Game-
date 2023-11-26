import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {ConnexionComponent} from "./connexion/connexion.component";
import {ChoixThemeComponent} from "./choix-theme/choix-theme.component";
import {LienComponent} from "./lien/lien.component";
import {ClassementComponent} from "./classement/classement.component";
import {QuestionsComponent} from "./questions/questions.component";
import {AccueilAdminComponent} from "./accueil-admin/accueil-admin.component";
import {GestionQuizComponent} from "./gestion-quiz/gestion-quiz.component";
import {GestionUserComponent} from "./gestion-user/gestion-user.component";
import {ChoixThemeAdminComponent} from "./choix-theme-admin/choix-theme-admin.component";
import {CreationQuizComponent} from "./creation-quiz/creation-quiz.component";
import {EditQuizComponent} from "./edit-quiz/edit-quiz.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {CreationUserComponent} from "./creation-user/creation-user.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";
import {ConnexionAdminComponent} from "./connexion-admin/connexion-admin.component";

const routes: Routes = [
  {path: "connexion", component: ConnexionComponent},
  {path: "connexion_admin", component: ConnexionAdminComponent},
  {path: "inscription", component: InscriptionComponent},
  {path: "choix_theme", component: ChoixThemeComponent},
  {path: "lien/:genre", component: LienComponent},
  {path: "classement", component: ClassementComponent},
  {path: "question/:genre/:id", component: QuestionsComponent},
  {path: "question", component: QuestionsComponent},
  {path: "accueil_admin", component: AccueilAdminComponent},
  {path: "gestion_quiz", component: GestionQuizComponent},
  {path: "gestion_user", component: GestionUserComponent},
  {path: "choix_theme_admin", component: ChoixThemeAdminComponent},
  {path: "creation_quiz", component: CreationQuizComponent},
  {path: "creation_user", component: CreationUserComponent},
  {path: "edit_quiz", component: EditQuizComponent},
  {path: "edit_user/:id", component: EditUserComponent},
  {path: "", component: PageAccueilComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
