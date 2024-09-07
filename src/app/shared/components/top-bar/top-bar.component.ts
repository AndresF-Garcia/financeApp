import { Component, inject } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'shared-top-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  private generalService = inject(GeneralService);
  public title = this.generalService.pageTitle();

  changeRouteTitle(title:string) {
    this.generalService.updatePageTitle(title);
  }

}
