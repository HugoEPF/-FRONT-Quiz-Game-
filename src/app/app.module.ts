import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { ChoixThemeComponent } from './choix-theme/choix-theme.component';
import { LienComponent } from './lien/lien.component';
import { ClassementComponent } from './classement/classement.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations:[
    AppComponent,
    ChoixThemeComponent,
    LienComponent,
    ClassementComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
