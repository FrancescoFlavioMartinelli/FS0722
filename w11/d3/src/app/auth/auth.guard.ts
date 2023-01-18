import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authSrv: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            
        //se il dato di controllo per decidere il return deriva da un observable allora useremo
        //.pipe(map(()=>{return true}))
        // per generare un observable con return boolean | urlTree e restituiremo quello
        return this.authSrv.isLoggedIn$.pipe(take(1),map((isLoggedIn) => {
            if (isLoggedIn) {
                return true;
            }
            return this.router.createUrlTree(['/login']);
            //return boolean -> accedi/non accedi
            //return urlTree -> redirect
        }));
    }
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(route, state);
    }

    //canDeactivate

}
