import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/aut/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {

  }


  IngresarSinLogin() {
    this.authService.logout()
    this.router.navigate(['./heroes'])
  }
  login() {
    // Ir al backend
    // Un usuario

    this.authService.login().subscribe(
      resp => {
        console.log(resp);
        if (resp.id) {
          this.router.navigate(['./heroes'])
        }
      }
    )


  }
}
