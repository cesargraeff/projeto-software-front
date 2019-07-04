import { AutheticationService } from './../services/authetication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AutheticationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.authenticationService.token) {
          request = request.clone({
              setHeaders: {
                 'X-Access-Token': `${this.authenticationService.token}`
              }
          });
      }

      return next.handle(request);
    }
}
