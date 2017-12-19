import { Component, OnDestroy } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'O-Shop';
  private subscription: Subscription;

  constructor(private userService: UserService, private auth: AuthService) {
    this.subscription = this.auth.user$.subscribe((user) => {
      // if(user) {
      //   this.userService.save(user)
      // }
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
