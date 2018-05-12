import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    /*
    console.log('Next: ' + next.toString());
    console.log('State: ' + state.toString());
    */
      return this.authService.isLoggedIn
      .take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/home'], {queryParams: {returnUrl: state.url}});
          return false;
        }
        return true;
      });
  }
}

