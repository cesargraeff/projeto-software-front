import { AutheticationService } from './../services/authetication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authenticatonService: AutheticationService,
    private router: Router
  ){}

  canActivate(): boolean {
    if(this.authenticatonService.token){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
