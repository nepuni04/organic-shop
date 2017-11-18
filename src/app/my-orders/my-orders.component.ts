import { Component, OnInit } from '@angular/core';
import { Order } from '../common/model/order';
import { Observable } from 'rxjs/Observable';
import { OrderService } from '../services/order.service';
import { AuthService } from '../core/auth.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService, private auth: AuthService) { }

  ngOnInit() {
    this.orders$ = this.auth.user$.switchMap(user => {
      return this.orderService.getOrdersByUserId(user.uid);
    });
  }

}
