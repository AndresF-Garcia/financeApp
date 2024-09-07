import { Component } from '@angular/core';
import { TopBarComponent } from "../../shared/components/top-bar/top-bar.component";
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from '@shared/components/mobile-menu/mobile-menu.component';

@Component({
  standalone: true,
  imports: [RouterModule, TopBarComponent, MobileMenuComponent],
  templateUrl: './general-layout.component.html',
  styles: ``
})
export default class GeneralLayoutComponent {

}
