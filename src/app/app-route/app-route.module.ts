import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/components/home/home.component';
import { ProductsComponent } from '../shopping/components/products/products.component';
import { LoginComponent } from '../core/components/login/login.component';
import { ShoppingCartComponent } from '../shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from '../shopping/components/check-out/check-out.component';
import { OrderSuccessComponent } from '../shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from '../shopping/components/my-orders/my-orders.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AdminAuthGuard } from '../admin/services/admin-auth-guard.service';
import { AdminProductsComponent } from '../admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from '../admin/components/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from '../admin/components/admin-product-form/admin-product-form.component';
import { OrderDetailComponent } from 'shared/components/order-detail/order-detail.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { 
    path: 'check-out', 
    component: CheckOutComponent, 
    canActivate: [ AuthGuard ] 
  },
  { 
    path: 'order-success/:id', 
    component: OrderSuccessComponent, 
    canActivate: [ AuthGuard ] 
  },
  { 
    path: 'order-detail/:id', 
    component: OrderDetailComponent, 
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
