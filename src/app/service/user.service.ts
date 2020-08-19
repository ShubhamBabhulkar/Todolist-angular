import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpRequest: HttpClient) { }
  private baseUrl = 'http://localhost:3000/user';

  userRegister = (userEntry) => {
    return this.httpRequest.post(this.baseUrl, userEntry);
  }
}
