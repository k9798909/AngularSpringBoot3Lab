import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { title: '登入頁面', path: 'login', component: LoginComponent },
  { title: '首頁', path: 'angular-app', component: LayoutComponent },
];
