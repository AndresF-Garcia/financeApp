import { Component, inject } from '@angular/core';
import { RouteControlService } from '../../services/route-control.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export default class TransactionsComponent{

  private routeControlService = inject(RouteControlService);

  constructor() {
    this.routeControlService.setPageTitle('Transacciones')
  }

}
