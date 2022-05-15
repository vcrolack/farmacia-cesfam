import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor (
    private router: Router
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {  
      const isLogged = localStorage.getItem('isLogged');
      if (isLogged) {
        return true;
      } else {
        this.router.navigateByUrl('auth/login')
      }
      return false;
  }
  
}
