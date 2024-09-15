import {Component, OnInit} from '@angular/core';
import {JwtService} from "../../service/jwt.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMathValidator })
  }

  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  submitForm() {
    // @ts-ignore
    console.log(this.registerForm.value);
    // @ts-ignore
    this.service.register(this.registerForm.value).subscribe(
      (response) => {
        if (response.id != null) {
          alert("Hello " + response.name);
          this.router.navigateByUrl("/home");
        }
      }
    )
  }

}
