import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from '../common/model/shopping-cart';

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
