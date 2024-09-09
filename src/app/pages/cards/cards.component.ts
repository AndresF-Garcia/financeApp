import { Component, inject } from '@angular/core';
import { RouteControlService } from '../../services/route-control.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export default class CardsComponent {

  private routeControlService = inject(RouteControlService);

  constructor() {
    this.routeControlService.setPageTitle('Tarjetas');
  }

}
