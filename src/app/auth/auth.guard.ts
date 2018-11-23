import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import{RegserviceService} from '../servers/regservice.service';
import { Router } from "@angular/router";
import decode from 'jwt-decode';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service : RegserviceService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if (!this.service.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.service.deleteToken();
        return false;
      }
    return true;
  }
}
