import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../../../shared/services/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { ShoppingCart } from '../../../shared/model/shopping-cart';
import { Order } from '../../../shared/model/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  userId: string;
  @Input('cart') cart: ShoppingCart;

  constructor(private orderService: OrderService, 
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => {
      if(user) this.userId = user.uid;
    });
  }

  placeOrder(shipping: any) {
    let order = new Order(this.userId, shipping, this.cart);
    this.orderService.placeOrder(order).then(result => {
      this.router.navigate(['/order-success', result.key])
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
