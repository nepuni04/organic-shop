import 'rxjs/add/operator/switchMap';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'shared/model/product';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

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
  cart$: Observable<ShoppingCart>;
  
  constructor(private productService: ProductService, 
    private cartService: ShoppingCartService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();

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
