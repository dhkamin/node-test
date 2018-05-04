import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      console.log(this.authService.isLoggedIn());
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }

  }
}
