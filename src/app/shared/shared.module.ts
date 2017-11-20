import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { HttpUrlValidatorDirective } from './validators/http-url-validator.directive';
import { MinPriceValidatorDirective } from './validators/min-price-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    DataTableModule,
    RouterModule,
  ],
  declarations: [
    OrderDetailComponent,
    ProductQuantityComponent,
    MinPriceValidatorDirective,
    HttpUrlValidatorDirective
  ],
  exports: [
    ProductQuantityComponent,
    MinPriceValidatorDirective,
    HttpUrlValidatorDirective,
    CommonModule,
    NgbModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    DataTableModule,
    RouterModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService, 
    ShoppingCartService,
    OrderService,
  ]
})
export class SharedModule { }
