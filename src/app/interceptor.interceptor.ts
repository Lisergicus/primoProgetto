import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {


  constructor(private authService : AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {

    let token = this.authService.tokenValue;
    if(token){
      const requestNew = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      return next.handle(requestNew);
    }

    return next.handle(request);
  }
}
