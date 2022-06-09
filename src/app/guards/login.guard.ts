import { AccountService } from './../services/account.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from "@angular/router";


@Injectable()

export class LoginGuard implements CanActivate{
    constructor(private accountService:AccountService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
       let logged= this.accountService.isLoggedIn()
       if(logged){
           return true
       }
       this.router.navigate(["login"])
       return false
    }
}

