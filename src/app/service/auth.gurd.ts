import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable()
export class AuthGurd implements CanActivate{


    constructor(private _router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       if(this.isLoggedIn()) {
           return true;
       }
       this._router.navigate(['/login-velidation'])
       return false;
    }
    
    isLoggedIn(): boolean {
        let status = false;
        if(localStorage.getItem('isLoggedIn') === "true"){
            status = true;
        } else {
            status = false;
        }
        return status;
    }

}