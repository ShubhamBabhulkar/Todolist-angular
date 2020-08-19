import { AuthService } from './../../service/auth.service';
import { UserService } from './../../service/user.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as _ from 'lodash';
@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss']
})
export class SignupPopupComponent implements OnInit {
  hide = true;
  hideConfirm = true;
  signipForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&#^])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
    ]),
  });
  passwordNotMatch: boolean;
  registered: boolean;
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  getrequired = (value) => {
    return this.signipForm.get(value);
  }

  userRegistration = (data) => {
    this.authService.setLoading(true);
    this.passwordNotMatch = false;
    this.registered = false;
    if (data.password === data.confirmpassword) {
      const pickData = _.pick(data, ['name', 'email', 'password']);
      this.userService.userRegister(pickData).subscribe( result => {
        this.registered = true;
        this.authService.setLoading(false);
      }, error => {
        this.authService.setLoading(false);
        this.snackBar.open(error.error.message, 'Done', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      });
    } else {
      this.authService.setLoading(false);
      this.passwordNotMatch = true;
    }
  }
}