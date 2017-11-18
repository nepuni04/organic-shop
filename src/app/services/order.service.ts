import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Order } from '../common/model/order';
import { ShoppingCartService } from './shopping-cart.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private cartService: ShoppingCartService) { }

  async placeOrder(order: Order) {
    let result = await this.db.list('/orders').push(order);
    this.cartService.clearCart();
    return result;
  }

  getOrdersByUserId(userId: string): Observable<Order[]>  {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId))
      .snapshotChanges().map(data => {
        return data.map(action => {
          const $key = action.payload.key;
          const data = { $key, ...action.payload.val() };
          return data;
        })
      });
  }

  geAllOrders(): Observable<Order[]> {
    return this.db.list('/orders').snapshotChanges()
    .map(data => {
      return data.map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      })
    });
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.db.object('/orders/' + orderId).valueChanges();
  }
}
