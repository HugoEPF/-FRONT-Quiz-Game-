import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import {ConnexionComponent} from "./connexion/connexion.component";
import {QuestionsComponent} from "./questions/questions.component";


const routes: Routes = [
  { path: "", component: ConnexionComponent },
  { path: "question", component: QuestionsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
