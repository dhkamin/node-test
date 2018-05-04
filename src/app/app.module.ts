import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginGuardGuard } from './login-guard.guard';
import { AuthService } from './auth.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthHttp, AuthConfig,JwtHelper } from 'angular2-jwt';

import { QuizadminComponent } from './quizadmin/quizadmin.component';
import { QuizService } from './quiz.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    QuizadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  
   
 
  ],
  entryComponents: [ ],
  providers: [LoginGuardGuard, AuthService,QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
