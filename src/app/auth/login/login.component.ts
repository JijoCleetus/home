import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../../components/logo/logo.component';
import { UserData } from '../../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IonContent, IonToast } from '@ionic/angular/standalone';

@Component({
  selector: 'home-login',
  standalone: true,
  imports: [
    IonContent,
    IonToast,
    CommonModule,
    FormsModule,
    RouterModule,
    LogoComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  userData: UserData = {
    email: '',
    password: '',
  };

  constructor() {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  login(data: UserData) {
    this.authService.login(data.email, data.password).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
