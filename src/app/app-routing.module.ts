import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import {ConnexionComponent} from "./connexion/connexion.component";
import {ChoixThemeComponent} from "./choix-theme/choix-theme.component";
import {LienComponent} from "./lien/lien.component";
import {ClassementComponent} from "./classement/classement.component";
import {QuestionsComponent} from "./questions/questions.component";


const routes: Routes = [
  { path: "", component: ConnexionComponent },
  { path: "choix_theme", component: ChoixThemeComponent},
  { path: "lien/:genre", component: LienComponent},
  { path: "classement", component: ClassementComponent},
  { path: "question/:genre/:id", component: QuestionsComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
