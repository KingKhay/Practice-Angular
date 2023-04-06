import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Since we cannot modify the original request object we need to clone the request and modify it.
    const newRequest = request.clone({headers: new HttpHeaders({'Token':'SomeToken'})});

    if(request.method === 'POST'){
      //We can do something if the request is a post request
    }
    return next.handle(newRequest);
  }
}
