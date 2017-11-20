import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent,
    AdminProductFormComponent
  ],
  providers: [ AdminAuthGuard ]
})
export class AdminModule { }
