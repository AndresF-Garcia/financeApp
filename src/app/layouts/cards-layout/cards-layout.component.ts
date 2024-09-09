import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouteControlService } from '../../services/route-control.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cards-layout.component.html',
  styles: ``
})
export default class CardsLayoutComponent {

  private routeControlService = inject(RouteControlService);
  private router = inject(Router);

  public goToPreviousPage():void {
    const previousRouteUrl = this.routeControlService.previousUrl();
    this.router.navigate([previousRouteUrl]);
  }

}
