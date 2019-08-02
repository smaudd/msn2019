import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public storageService: StorageService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = request.headers || new HttpHeaders()
    return this.storageService.get('token')
        .pipe(
            mergeMap((token: string) => {
                if (token) {
                  headers = headers.append('Authorization', token)
                  return next.handle(request.clone({ headers: headers }))
                }
                return next.handle(request)
            })
        )
  }
}