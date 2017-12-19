import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  errorMsg: string;
  constructor(private auth: AuthService) {}

  loginWithEmail(form) {
    this.auth.loginWithEmail(form['email'], form['password']).catch(error => {
      console.log("Error", error);
      this.errorMsg = error.message;
    });
  }
}
