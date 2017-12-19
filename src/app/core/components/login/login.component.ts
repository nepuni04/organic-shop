import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newUser = false;

  constructor(public auth: AuthService) { }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  toggleForm() {
    this.newUser = !this.newUser;
  }
}
