import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../../common/model/shopping-cart';
import { Product } from '../../common/model/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('cart') cart: ShoppingCart;
  
  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

}
