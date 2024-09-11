import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    NgModule,
    HttpClientModule,
    HomeComponent,
    UsersComponent,
    AppComponent,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: []
})
export class AppModule { }
