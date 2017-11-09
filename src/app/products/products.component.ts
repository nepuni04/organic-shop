import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private category: CategoryService) { }

  ngOnInit() {
    this.category.getAll().subscribe(categories => {
      console.log(categories);
    })
    
  }

}
