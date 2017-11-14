import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> {
      return this.auth.appUser$.map(user => user.isAdmin );
  }
  
}