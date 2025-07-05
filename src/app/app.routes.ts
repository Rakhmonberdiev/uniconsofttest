import { Routes } from '@angular/router';
import { authGuard } from './_guards/auth.guard';

export const routes: Routes = [
  {
    path: 'statistics',
    loadComponent: () =>
      import('./pages/home/statistics/statistics.component').then(
        (m) => m.StatisticsComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'statistics',
    pathMatch: 'full',
  },
];
