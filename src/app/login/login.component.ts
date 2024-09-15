import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JwtService} from "../service/jwt.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
      private service: JwtService,
      private fb: FormBuilder,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitForm() {
    // @ts-ignore
    this.service.login(this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
          //this.router.navigateByUrl("/home");
          if (response.jwt != null) {
            const jwtToken = response.jwt;
            localStorage.setItem('jwt', jwtToken);
            this.router.navigateByUrl("/home");
          }
        }
    )
  }

}
