import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';

@Injectable()
export class ProductService {
  private baseUrl = "/products";

  constructor(private db: AngularFireDatabase) { }

  create(product: Product) {
    return this.db.list(this.baseUrl).push(product);
  }

  get($key: string) {
    return this.db.object(this.baseUrl + '/' + $key).valueChanges();
  }

  update($key: string, value: any) {
    return this.db.object(this.baseUrl + "/" + $key).update(value);
  }

  delete($key: string) {
    return this.db.object(this.baseUrl + '/' + $key).remove();
  }

  getAll(): Observable<Product[]> {
    return this.db.list(this.baseUrl).snapshotChanges().map(data => {
      return data.map(action => {
        const $key = action.payload.key;
        const data = { $key, ...action.payload.val() };
        return data;
      })
    })
  }
}
