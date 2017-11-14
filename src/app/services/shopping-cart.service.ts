import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Product } from '../common/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../common/shopping-cart';
import { ShoppingCartFirebase } from '../common/shopping-cart-firebase';

@Injectable()
export class ShoppingCartService {
  private baseUrl = "/shopping-carts";

  constructor(private db: AngularFireDatabase) {}  

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.findOrCreateCartId(); 
    return this.db.object(this.baseUrl + '/' + cartId).valueChanges()
      .map((x: ShoppingCartFirebase) => {
        if(!x) return new ShoppingCart(null);
        return new ShoppingCart(x.items)
      });
  }

  addToCart(product: Product) {
    this.updateItem(product, 1)
  }
  
  removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async getItemQuantity(id: string): Promise<Observable<number>> {
    let cartId = await this.findOrCreateCartId();
    return this.getItem(cartId, id).valueChanges().map((item: CartItem) => {
      let quantity =  item ? item.quantity : 0;
      return quantity;
    })
  }

  async clearCart() {
    let cartId = await this.findOrCreateCartId();
    this.db.list(this.baseUrl + '/' + cartId).remove();
  }

  private async updateItem(product: Product, change: number) {
    let cartId = await this.findOrCreateCartId();  
    let item$ = this.getItem(cartId, product.$key);

    item$.snapshotChanges().take(1).subscribe(item => {
      let quantity = change;
      if(item.payload.exists()) 
        quantity = item.payload.val().quantity + change; 

      if(quantity < 1) item$.remove();
      else item$.update({
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: quantity  
      })
    });      
  }

  private getItem(cartId, productId) {
    return this.db.object(this.baseUrl + '/' + cartId + '/items/' + productId);
  }

  private async findOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.createCart()
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private createCart() {
    return this.db.list(this.baseUrl).push({
        createdDate: new Date().getTime()
    });
  }
}
