import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot) {
    return this.authenticationService.jwtValue
      ? this.authenticationService.userValue.isAdmin
      : false;
  }
}
