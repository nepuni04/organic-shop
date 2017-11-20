import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppRouteModule } from './app-route/app-route.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,
    ShoppingModule,
    AppRouteModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
