import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('CANACTIVATE' , this.loginService.obtenerSesionActiva())
      if(!this.loginService.obtenerSesionActiva()){
        // console.log('No tiene acceso a esta ruta');
        return this.router.navigate(['login'])
      }else{ 
        return true;
      };      
  }
  
}
