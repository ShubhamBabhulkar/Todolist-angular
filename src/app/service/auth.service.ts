import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loaderisProgress;
  loaderStatus;
  constructor(private httpRequest: HttpClient) { }
  private baseUrl = 'http://localhost:3000/auth';

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return !(new JwtHelperService().isTokenExpired(token));
    } else {
      return false;
    }
  }

  currentUser() {
    const token = localStorage.getItem('token');
    return new JwtHelperService().decodeToken(token);
  }

  login = (credentials) => {
    return this.httpRequest.put(this.baseUrl, credentials);
  }

  isProgress = () => {
    return this.loaderisProgress;
  }

  setProgress  = (status: boolean) => {
    this.loaderisProgress = status;
  }

  isLoading = () => {
    return this.loaderStatus;
  }

  setLoading = (status: boolean) => {
    this.loaderStatus = status;
  }
}
