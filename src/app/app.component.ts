import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";
import {debug} from "node:util";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'RingSteamUI';
  loginbutton=true;
  registerbutton=true;
  logoutbutton=false;
  homebutton=false;

  ngOnInit() {
    if (sessionStorage.getItem('token') !== null){
      this.loginbutton=false;
      this.registerbutton=false;
      this.logoutbutton=true;
      this.homebutton=true;
    }
    else {
      this.loginbutton=true;
      this.registerbutton=true;
      this.logoutbutton=false;
      this.homebutton=false;
    }
  }
}
