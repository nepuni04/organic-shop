import { CartItem } from "./cart-item";

export interface ShoppingCartFirebase {
  createdDate: string;
  items: ShoppingCartMap[];
}

export interface ShoppingCartMap {
  [key: string]: CartItem      
}