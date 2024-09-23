import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from "./app.routes";
import {AuthInterceptor} from "./interceptor/auth-interceptor.interceptor";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [HttpClientModule, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: []
})
export class AppModule { }
