import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {decode} from 'jwt-decode';
import {SessionService} from './session.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: SessionService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const redirectUrl = route['_routerState']['url'];

    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('TOKEN');

    const tokenPayload = decode(token);

    if (
      !this.auth.isLogged() ||
        tokenPayload.role !== expectedRole
    ) {
      this.router.navigateByUrl(
        this.router.createUrlTree(['/sama-login'], {
          queryParams: {
            redirectUrl
          }
        })
      );
      return false;
    }
    return true;

  }

}
