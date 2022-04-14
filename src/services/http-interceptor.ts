import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('httqooo', httpRequest);
    const cloneReq = httpRequest.clone({
      // setHeaders: { Authorization: 'Bearer lksdflsdf' },
    });
    console.log('cloneReq', cloneReq);

    return next.handle(cloneReq).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('HTTPT RESS', event);
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            alert('API FAILURE');
          }
          console.log('HTTP ERR', error);
        }
      )
    );
  }
}
