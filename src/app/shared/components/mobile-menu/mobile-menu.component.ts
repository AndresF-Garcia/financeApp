import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { PrimeIcons } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-mobile-menu',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './mobile-menu.component.css',
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {

  public menuItems = signal<MenuItem[]>([
    {
      name: 'Home',
      icon: PrimeIcons.HOME,
      route: 'transactions'
    }
  ]);

}
