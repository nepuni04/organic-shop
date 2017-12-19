import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { User } from './../model/user';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, 
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {

    this.user$ = this.afAuth.authState;
  }

  get returnUrl() {
    return this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  }

  loginWithGoogle() {
    localStorage.setItem('returnUrl', this.returnUrl);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      .then(res => {
        this.userService.save(res.user);
        this.router.navigateByUrl(localStorage.getItem('returnUrl'));
        localStorage.removeItem('returnUrl');
      })
      .catch((error) => this.handleError(error));
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }

  signupWithEmail(email: string, password: string, username: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(data => {
      let user = { displayName: username, email: data.email, uid: data.uid };
      this.userService.save(user);
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => this.router.navigate(['/login']));
  }

  get appUser$(): Observable<User> {
    return this.user$.switchMap(user => {
      if(user)
        return this.userService.get(user.uid);
      else
        return Observable.of(null);
    });
  }

  private handleError(error) {
    console.error("Error: ", error);
  }
}
