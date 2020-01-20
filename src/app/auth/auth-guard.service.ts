import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class AuthGuardService implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return null;
    }

}