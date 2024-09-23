import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth-interceptor.interceptor";
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideHttpClient(withInterceptorsFromDi()),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }]
};
