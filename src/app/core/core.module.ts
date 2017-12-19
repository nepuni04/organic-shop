import { NgModule } from '@angular/core';

import { SharedModule } from 'shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    NgbDropdownConfig
  ]
})
export class CoreModule { }
