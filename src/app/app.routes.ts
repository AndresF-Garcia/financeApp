import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'transactions',
    title: 'Transacciones',
    loadComponent: () => import('./pages/transactions/transactions.component')
  },
  {
    path: 'cards',
    loadComponent: () => import('./pages/cards/cards.component')
  },
  {
    path: '**',
    redirectTo: 'transactions'
  }
];
