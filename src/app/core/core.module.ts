import { NgModule } from '@angular/core';

import { SharedModule } from 'shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NavigationComponent,
    LoginComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
