import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    FormsModule,
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = { username: '', password: '', email: '' };

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    debugger;
    if (this.user.username === '' || this.user.password === '' || this.user.password === '') {
      alert("please enter all fields");
    }
    else {
      this.authService.register(this.user).subscribe(
        (response) => {
          alert(response.message);
          if (response.statusCode == 201) {
            this.router.navigate(['/login']);
          }
        });
    }
  }
}
