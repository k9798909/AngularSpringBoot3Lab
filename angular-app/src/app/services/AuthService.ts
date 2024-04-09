import { Injectable, inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private router = inject(Router);

  constructor() {}

  canActivate(): boolean | UrlTree {
    if (true) {
      return true;
    }

    return this.router.parseUrl('/login');
  }
}
