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
export class MobileMenuComponent {

  private routerControlService = inject(RouteControlService);

  public menuItems = signal<MenuItem[]>([
    {
      name: 'Home',
      icon: PrimeIcons.HOME,
      route: 'transactions'
    }
  ]);

  public changeRoute(title:string):void {
    this.routerControlService.changeRouteHistory(title);
  }

}
