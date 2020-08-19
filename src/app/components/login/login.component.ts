import { AuthService } from './../../service/auth.service';
import { SignupPopupComponent } from './../signup-popup/signup-popup.component';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  Loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const token = this.authService.isLoggedIn();
    if (token) {
      this.router.navigateByUrl('');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  getrequired = (value) => {
    return this.Loginform.get(value);
  }
  userLogin = (credentials: any) => {
    this.errorMessage = '';
    this.authService.setProgress(true);
    this.authService.login(credentials)
        .subscribe(
          (result: {token: string}) => {
            localStorage.setItem('token', result.token);
            this.router.navigateByUrl('');
            this.authService.setProgress(false);
          },
          error => {
            this.errorMessage = error.error;
            this.authService.setProgress(false);
          }
        );
  }

}
