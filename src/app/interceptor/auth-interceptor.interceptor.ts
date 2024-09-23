import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {isPlatformBrowser} from "@angular/common";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private readonly platformId = inject(PLATFORM_ID);

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    debugger;
    if (isPlatformBrowser(this.platformId)) {
      const idToken = sessionStorage.getItem("token");

      if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set("Authorization",
            "Bearer " + idToken)
        });

        return next.handle(cloned);
      } else {
        return next.handle(req);
      }

    }
    else {
      return next.handle(req);
    }
  }
}
