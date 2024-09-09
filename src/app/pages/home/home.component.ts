import { Component, inject } from '@angular/core';
import { RouteControlService } from '../../services/route-control.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  private routeControlService = inject(RouteControlService);

  constructor() {
    this.routeControlService.setPageTitle('Inicio');
  }

}
