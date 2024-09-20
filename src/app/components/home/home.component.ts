import {Component, inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private readonly platformId = inject(PLATFORM_ID);

  message: string | null | undefined;

  constructor() { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.message = sessionStorage.getItem('username');
    }
  }

}
