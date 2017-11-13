import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../common/product';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription;
  category: string;
  
  constructor(private productService: ProductService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.productService.getAll().switchMap(products => { 
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get("category");
      this.filteredProducts = !this.category ? this.products :
        this.products.filter(product => product.category === this.category);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
