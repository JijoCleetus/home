import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'home-dashboard',
  standalone: true,
  imports: [HttpClientModule, RouterModule, LogoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  teachersProfile: any;

  constructor() {
    // this.studentsService.getTeachersProfile().subscribe((res: any) => {
    //   this.teachersProfile = res;
    // });
  }
}
