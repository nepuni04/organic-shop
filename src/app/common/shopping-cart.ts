import { CartItem } from "./cart-item";
import { ShoppingCartMap } from "./shopping-cart-firebase";

export class ShoppingCart {
  items: CartItem[] = [];

  constructor(private cartMap: ShoppingCartMap[]) {
    if(!this.cartMap) return;    
    
    for(let key in this.cartMap) {
      let item = this.cartMap[key];
      this.items.push(new CartItem({ $key: key, ...item }))
    }
  }

  getItemQuantity(productId: string): number {
    if(!this.cartMap) return 0;
    
    let item = this.cartMap[productId];
    return item ? item.quantity : 0;
  }

  getTotalPrice() {
    let price = 0;
    this.items.forEach(item => {
      price += item.getTotalPrice();
    });
    return price; 
  }

  getCartSize(): number {
    let quantity = 0;
    this.items.forEach(item => {
      quantity += item.quantity;
    });
    return quantity;  
  }
}