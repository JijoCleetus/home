import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from localStorage
    const user = JSON.parse(localStorage.getItem('currentUser')!);

    // Clone the request and add the token to the headers if it exists
    if (user) {
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${user.token}` },
      });
      return next.handle(authReq);
    }

    // If there's no token, just pass the original request
    return next.handle(req);
  }
}
