import { Product } from "./product";

export class CartItem {
    title: string;
    price: number;
    imageUrl: string;
    quantity: number;
    $key: string;

    constructor(init?: Partial<CartItem>) {
        Object.assign(this, init);
    }

    getTotalPrice() {
      return this.price * this.quantity;
    }
}
