import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from 'shared/model/order';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.orderService.geAllOrders();
  }

  deleteOrder(order: Order) {
    this.orderService.deleteOrder(order.$key).then(data => {
      console.log(data);
    });
  }
}
