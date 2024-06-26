import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthService).canActivate();
};

export const routes: Routes = [
  { title: '登入頁面', path: 'login', component: LoginComponent },
  {
    title: '首頁',
    path: '',
    component: LayoutComponent,
    canActivate: [canActivateTeam],
  },
  {
    title: '首頁',
    path: 'angular-app',
    component: LayoutComponent,
    canActivate: [canActivateTeam],
    children: [
      {
        title: '待辦清單',
        path: 'todo-list',
        component: TodoListComponent,
        canActivate: [canActivateTeam],
      },
    ],
  },
];
