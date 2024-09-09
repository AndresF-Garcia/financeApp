import { Component, inject, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { PrimeIcons } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RouteControlService } from '../../../services/route-control.service';

@Component({
  selector: 'shared-mobile-menu',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './mobile-menu.component.css',
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent{

  private routerControlService = inject(RouteControlService);

  public menuItems = signal<MenuItem[]>([
    {
      name: 'Inicio',
      icon: PrimeIcons.HOME,
      route: 'home',
      title: 'Inicio'
    },
    {
      name: 'Transacciones',
      icon: PrimeIcons.BOOK,
      route: 'transactions',
      title: 'Transacciones'
    }
  ]);


}
