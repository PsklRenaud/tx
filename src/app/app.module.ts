import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './question/question.component';
import { AwnserInputComponent } from './awnser-input/awnser-input.component';
import { AwnserCheckBoxComponent } from './awnser-check-box/awnser-check-box.component';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PresentationComponent,
    QuestionnaireComponent,
    QuestionComponent,
    AwnserInputComponent,
    AwnserCheckBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule, 
    BrowserAnimationsModule,

    RouterModule.forRoot(
      [

      { path: "accueil", component: AcceuilComponent, pathMatch:"full" },
      { path: "presentation", component: PresentationComponent, pathMatch:"full" },
   
      { path: "", redirectTo:"accueil", pathMatch:"full"}


      ],
      
      {useHash: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
