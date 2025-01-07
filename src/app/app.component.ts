import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmailValidatorDirective } from './directives/email-validator.directive';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [RouterOutlet, IonicModule, EmailValidatorDirective],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'home';
}
