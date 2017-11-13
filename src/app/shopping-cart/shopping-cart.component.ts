import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { CartItem } from '../common/cart-item';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../common/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(private cartService: ShoppingCartService)  {}

  async ngOnInit() {
    this.cart$ =  await this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
