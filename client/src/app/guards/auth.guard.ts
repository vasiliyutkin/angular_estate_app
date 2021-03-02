import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { userTokenName } from './../services/auth.constants';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot) {
    const jwt = this.authenticationService.jwtValue;
    if (jwt) {
      const user = this.authenticationService.userValue;
      if (user) {
        sessionStorage.setItem(userTokenName, JSON.stringify(user));
        return false;
      }
      return false;
    }
    return true;
  }
}
