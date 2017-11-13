import { CartItem } from "./cart-item";
import { ShoppingCartMap } from "./shopping-cart-firebase";

export class ShoppingCart {
  items: CartItem[] = [];

  constructor(private cartMap: ShoppingCartMap[]) {
    if(!this.cartMap) return;    
    
    for(let key in this.cartMap) {
      this.items.push(new CartItem(this.cartMap[key]))
    }
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