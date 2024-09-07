import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/general-layout/general-layout.component'),
    children: [
      {
        path: 'transactions',
        title: 'Transacciones',
        loadComponent: () => import('./pages/transactions/transactions.component'),
      }
    ]
  },
  {
    path: 'cards',
    loadComponent: () => import('./layouts/cards-layout/cards-layout.component'),
    children: [
      {
        path: '',
        title: 'Tarjetas',
        loadComponent: () => import('./pages/cards/cards.component')
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'transactions'
  }
];
