import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [RouterOutlet, IonicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'home';
}
