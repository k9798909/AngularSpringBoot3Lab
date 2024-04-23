import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginFormError: {
    username: string;
    password: string;
  } = {
    username: '',
    password: '',
  };

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.updateErrorMessage();
      return;
    }
    this.authService
      .login(this.loginForm.value)
      .then(() => {
        this.router.navigate(['/angular-app']);
      })
      .catch((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.loginError();
          return;
        }
        console.error(error);
      });
  }

  updateErrorMessage() {
    if (this.username.hasError('required')) {
      this.loginFormError.username = '帳號為必填';
    }

    if (this.password.hasError('required')) {
      this.loginFormError.password = '密碼為必填';
    }

    this.username;
  }

  loginError() {
    this.password.setErrors({ invalid: true });
    this.username.setErrors({ invalid: true });
    this.loginFormError.password = '帳號或密碼錯誤';
  }

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
}
