import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'shared/model/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: Product[] = [];
  rows: Product[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = products;
      this.rows = this.products;
    });
  }

  search(query) {
    let filteredProducts = this.products.filter(product => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
    this.rows = filteredProducts;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
