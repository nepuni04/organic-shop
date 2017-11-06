import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { OrderSuccessComponent } from '../order-success/order-success.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { AdminProductsComponent } from '../admin-products/admin-products.component';
import { AdminOrdersComponent } from '../admin-orders/admin-orders.component';
import { AuthGuard } from '../core/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [ AuthGuard ] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [ AuthGuard ] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [ AuthGuard ] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGuard ] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouteModule { }