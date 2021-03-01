import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot) {
    const jwt = this.authenticationService.jwtValue;
    if (jwt) {
      const user = this.authenticationService.userInfo;
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        return false;
      }
      return false;
    }
    return true;
  }
}
