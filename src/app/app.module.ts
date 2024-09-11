import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    NgModule,
    HttpClientModule,
    HomeComponent,
    UsersComponent,
    AppComponent
  ],
  providers: [HttpClientModule],
  bootstrap: []
})
export class AppModule { }
