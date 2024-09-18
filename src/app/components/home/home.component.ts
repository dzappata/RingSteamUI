import { Component } from '@angular/core';
import {JwtService} from "../../service/jwt.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  message: string | null | undefined;

  constructor(
    private service: JwtService
  ) { }

  ngOnInit() {
    this.message=localStorage.getItem('username');
  }

}
