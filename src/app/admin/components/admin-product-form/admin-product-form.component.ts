import 'rxjs/add/operator/take';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'shared/model/product';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit, OnDestroy {
  categories$;
  id: string;
  product = <Product> {};
  
  constructor(private categoryService: CategoryService,
    private router: Router, 
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get("id");
    if(!this.id) return;
    this.productService.get(this.id).take(1).subscribe(product => this.product = <Product> product);        
  }

  save(product: Product) {
    if(this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }  
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!this.id) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);   
  }

  ngOnDestroy() {}
}
