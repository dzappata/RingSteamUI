import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
      localStorage.setItem('token', response.jwt);
      localStorage.setItem('username', response.username);
      localStorage.setItem('id', response.id);
      this.router.navigate(['/home']);
    }, error => {
      alert('Incorrect username or password');
    });

  }
}
