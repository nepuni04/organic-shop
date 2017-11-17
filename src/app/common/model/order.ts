import { ShoppingCart } from "./shopping-cart";

export class Order {
  items = [];
  placedDate;

  constructor(public userId: string, public shipping: any, cart: ShoppingCart) {
    this.placedDate = new Date().getTime();
    this.items = cart.items.map(item => {
      return {
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
        quantity: item.quantity
      }
    })
  }
}