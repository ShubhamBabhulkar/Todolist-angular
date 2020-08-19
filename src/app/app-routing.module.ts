import { AuthGuard } from './auth-guard/auth.guard';
import { SignupPopupComponent } from './components/signup-popup/signup-popup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsSectionComponent } from './components/news-section/news-section.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupPopupComponent },
  { path: '', component: NewsSectionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
