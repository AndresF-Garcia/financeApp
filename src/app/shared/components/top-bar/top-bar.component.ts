import { Component, inject, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteControlService } from '../../../services/route-control.service';


@Component({
  selector: 'shared-top-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  private routeControlService = inject(RouteControlService);
  public title = this.routeControlService.currentRoute() ? this.routeControlService.currentRoute()?.title : '' ;

  constructor() {
    effect(() => {
      this.title = this.routeControlService.currentRoute()?.title
    })
  }

  changeRoute(title: string):void {
    this.routeControlService.changeRouteHistory(title);
  }

}
