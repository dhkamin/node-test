import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuardGuard } from './login-guard.guard';
import { QuizadminComponent } from './quizadmin/quizadmin.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LoginGuardGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'quizadmin', component: QuizadminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
