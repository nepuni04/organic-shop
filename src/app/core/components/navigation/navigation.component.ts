import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { User } from 'shared/model/user';
import { ShoppingCart } from 'shared/model/shopping-cart';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  user: User;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private cartService: ShoppingCartService) {}

  async ngOnInit() {
    this.subscription = this.auth.appUser$.subscribe(user => this.user = user);
    this.cart$ = await this.cartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
