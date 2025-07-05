import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'statistics',
    loadComponent: () =>
      import('./pages/home/statistics/statistics.component').then(
        (m) => m.StatisticsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'statistics',
    pathMatch: 'full',
  },
];
