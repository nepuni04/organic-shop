import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../common/user';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../common/shopping-cart';

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
    this.cart$ = await this.cartService.getCart()
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
