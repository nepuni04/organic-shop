import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then(() => {
        console.log("Successfully logged in");
        this.router.navigate(['/']);
      })
      .catch((error) => this.handleError(error));
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => { 
        console.log("Successfully logged out"); 
        this.router.navigate(['/login']);
      });
  }

  private handleError(error) {
    console.error("Error: ", error);
  }

}
