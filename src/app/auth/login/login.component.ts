import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../../components/logo/logo.component';
import { UserData } from '../../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LogoComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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

  ngOnInit() {}

  login(data: UserData) {
    // this.user.changeData(data);
    this.authService.login(data.email, data.password).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
