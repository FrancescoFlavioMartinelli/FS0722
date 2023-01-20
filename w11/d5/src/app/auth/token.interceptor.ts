import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private as:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.as.user.pipe(switchMap((res)=>{
      if(res) {
        let req = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${res?.accessToken}`)
        })
        return next.handle(req)
      }
      return next.handle(request);
    }))
  }
}
