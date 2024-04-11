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
import { AuthService } from '../../services/AuthService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);

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
    this.authService.login(this.loginForm.value);
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

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }
}
