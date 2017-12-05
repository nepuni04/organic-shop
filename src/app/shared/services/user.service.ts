import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
    //.then(() => console.log("User successfully updated"));
  }

  get(id: string) {
    return this.db.object('/users/' + id).valueChanges();
  }
}
