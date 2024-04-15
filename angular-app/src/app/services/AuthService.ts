import { Injectable, inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { ApiService } from './ApiService';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);
  private apiService = inject(ApiService);

  constructor() {}

  async login(loginDto: { username: string; password: string }): Promise<void> {
    let res: HttpResponse<string> = await this.apiService.post<string>('login',loginDto);
    const token = res.headers.get('Authorization')!;
    this.apiService.tokenStorage.setItem('token', token);
  }

  logout() {
    this.apiService.tokenStorage.removeItem('token');
    return;
  }

  canActivate(): boolean | UrlTree {
    if (this.apiService.tokenStorage.getItem('token')) {
      return true;
    }

    return this.router.parseUrl('/login');
  }


}
