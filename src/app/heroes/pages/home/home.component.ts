import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/aut/interface/auth.interface';
import { AuthService } from 'src/app/aut/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get auth() {
    return this.authService.auth;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(){

  }

  logout() {
    this.router.navigate(['./auth'])
  }

}
