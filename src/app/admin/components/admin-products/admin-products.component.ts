import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';
import { Product } from 'shared/model/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: Product[] = [];
  items: Product[] = [];
  itemCount: number;
  tableResource: DataTableResource<Product>;
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.products = products;
      this.initializeTable(products);
    });
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.count().then(count => this.itemCount = count);
    this.tableResource.query({ offset: 0, limit: 10 }).then(items => this.items = items);
  }

  search(query) {
    let filteredProducts = this.products.filter(product => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
    this.initializeTable(filteredProducts);
  }

  reloadItems(params) {
    if(!this.tableResource) return;
    this.tableResource.query(params).then(items => this.items = items);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
