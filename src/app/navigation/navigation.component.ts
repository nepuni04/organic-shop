import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../common/user';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  private subscription: Subscription;
  user: User;

  constructor(private auth: AuthService) {
    this.subscription = this.auth.appUser$.subscribe(user => this.user = user);
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
