import { Component, OnInit } from '@angular/core';
import { Order } from '../../common/model/order';
import { Observable } from 'rxjs/Observable';
import { OrderService } from '../../services/order.service';

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

}
