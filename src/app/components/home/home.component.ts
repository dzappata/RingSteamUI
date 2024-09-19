import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  message: string | null | undefined;

  constructor() { }

  ngOnInit() {
    this.message=sessionStorage.getItem('username');
  }

}
