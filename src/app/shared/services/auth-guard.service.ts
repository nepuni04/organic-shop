import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> {
    
      return this.auth.user$.map(user => {
        if(user) return true;

        this.router.navigate(['/login'], 
          { queryParams: { returnUrl: state.url } }
        );
        return false;
      })
  }


}
