import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { ChoixThemeComponent } from './choix-theme/choix-theme.component';
import { LienComponent } from './lien/lien.component';
import { ClassementComponent } from './classement/classement.component';
import { QuestionsComponent } from './questions/questions.component';
import {HttpClientModule} from "@angular/common/http";
import { PageAdminComponent } from './page-admin/page-admin.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { ChoixThemeAdminComponent } from './choix-theme-admin/choix-theme-admin.component';
import { CreationQuizComponent } from './creation-quiz/creation-quiz.component';
import { GestionQuizComponent } from './gestion-quiz/gestion-quiz.component';
import { GestionUserComponent } from './gestion-user/gestion-user.component';


@NgModule({
  declarations:[
    AppComponent,
    ChoixThemeComponent,
    LienComponent,
    ClassementComponent,
    QuestionsComponent,
    PageAdminComponent,
    AccueilAdminComponent,
    ChoixThemeAdminComponent,
    CreationQuizComponent,
    GestionQuizComponent,
    GestionUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
