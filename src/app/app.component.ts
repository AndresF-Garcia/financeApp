import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileMenuComponent } from '@shared/mobile-menu/mobile-menu.component';
import { TopBarComponent } from '@shared/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, MobileMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moneyTrackApp';
}
