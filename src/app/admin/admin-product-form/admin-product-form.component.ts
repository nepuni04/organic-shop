import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../common/product';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit, OnDestroy {
  categories$;
  id: string;
  product = {};
  
  constructor(private categoryService: CategoryService,
    private router: Router, 
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get("id");
    if(!this.id) return;
    this.productService.get(this.id).take(1).subscribe(product => this.product = product);        
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
