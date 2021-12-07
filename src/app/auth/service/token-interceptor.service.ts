import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from "../service/auth.service";

@Injectable()
/** a service to add the token to every requset */
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  intercept(req: any, next: any){
    const token: string = this.authService.getToken();
    if (!token) return next.handle(req);

    const reqWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(reqWithToken).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status == 401) {
          this.authService.logout();
          return this.router.navigate(['/login']);
        } else {
          throw error;
        }
      })
    );
  }
}
