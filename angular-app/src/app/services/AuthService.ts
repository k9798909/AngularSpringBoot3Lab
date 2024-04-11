import { Injectable, inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { ApiService } from './ApiService';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private apiService = inject(ApiService);

  constructor() {}

  async login(loginDto: {
    username: string;
    password: string;
  }): Promise<void> {
    const res = await this.apiService.post('login', loginDto);
    console.log(res.headers.get('Authorization'));
    localStorage.setItem('id_token', res.headers.get('Authorization')!);
  }

  canActivate(): boolean | UrlTree {
    if (false) {
      return true;
    }

    return this.router.parseUrl('/login');
  }
}
