import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../common/model/product';
import { ShoppingCart } from '../common/model/shopping-cart';

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
