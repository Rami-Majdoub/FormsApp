import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ){}

  canActivate(): boolean{
    const loggedIn: boolean = this.authService.isLoggedIn();
    if (!loggedIn) this.router.navigate(['/login']);
    return loggedIn;
  }

}
