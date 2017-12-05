import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../model/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orderId: string;
  order$;
  
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.order$ = this.orderService.getOrderById(this.orderId);
  }

}
