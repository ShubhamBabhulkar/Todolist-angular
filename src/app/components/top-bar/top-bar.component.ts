import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  user: any;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
   this.user = this.authService.currentUser();
  }
  logout = () => {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
