import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  errorMsg: string;

  constructor(private auth: AuthService) { }

  signupWithEmail(form) {
    console.log(form);
    this.auth.signupWithEmail(form['email'], form['password'], form['username']).catch(error => {
      console.log("Error", error);
      this.errorMsg = error.message;
    });
  }
}
