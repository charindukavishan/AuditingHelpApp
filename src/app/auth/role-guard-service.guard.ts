import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { RegserviceService } from '../servers/regservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceGuard implements CanActivate {

  constructor(private service : RegserviceService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const expectedRole = next.data.expectedRole;

    const token =this.service.getToken();

    // decode the token to get its payload
    const tokenPayload = decode(token);

    if (!this.service.isLoggedIn() || tokenPayload.role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
