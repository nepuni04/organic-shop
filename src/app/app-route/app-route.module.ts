import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { OrderSuccessComponent } from '../order-success/order-success.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { AuthGuard } from '../core/auth-guard.service';
import { AdminAuthGuard } from '../core/admin-auth-guard.service';
import { AdminProductsComponent } from '../admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from '../admin/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from '../admin/admin-product-form/admin-product-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { 
    path: 'check-out', 
    component: CheckOutComponent, 
    canActivate: [ AuthGuard ] 
  },
  { 
    path: 'order-success', 
    component: OrderSuccessComponent, 
    canActivate: [ AuthGuard ] 
  },
  { 
    path: 'my/orders', 
    component: MyOrdersComponent, 
    canActivate: [ AuthGuard ] 
  },
  { 
    path: 'admin/products/new', 
    component: AdminProductFormComponent, 
    canActivate: [ AuthGuard, AdminAuthGuard ] 
  },
  { 
    path: 'admin/products/:id', 
    component: AdminProductFormComponent, 
    canActivate: [ AuthGuard, AdminAuthGuard ] 
  },
  { 
    path: 'admin/products', 
    component: AdminProductsComponent, 
    canActivate: [ AuthGuard, AdminAuthGuard ] 
  },
  { 
    path: 'admin/orders', 
    component: AdminOrdersComponent, 
    canActivate: [ AuthGuard, AdminAuthGuard ] 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule { }
