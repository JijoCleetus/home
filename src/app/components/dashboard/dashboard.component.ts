import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { IonNav, IonNavLink, IonToast } from '@ionic/angular/standalone';
import { TodoComponent } from '../todo/todo.component';
import { ShoppingComponent } from '../shopping/shopping.component';
import { AuthService } from '../../auth/auth.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'home-dashboard',
  standalone: true,
  imports: [
    IonNav,
    IonToast,
    IonNavLink,
    HttpClientModule,
    RouterModule,
    LogoComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  todoComponent: TodoComponent = new TodoComponent();
  shoppingComponent: ShoppingComponent = new ShoppingComponent();
  settingsComponent: SettingsComponent = new SettingsComponent();
  showWarning: boolean = false;
  warningMessage: string = 'Under development';

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    this.authService.currentUser.subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      }
    });
  }

  toggleWarning(show: boolean) {
    this.showWarning = show;
  }
}
