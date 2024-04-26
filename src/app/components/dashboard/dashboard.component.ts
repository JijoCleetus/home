import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { IonNav, IonNavLink } from '@ionic/angular/standalone';
import { TodoComponent } from '../todo/todo.component';
import { ShoppingComponent } from '../shopping/shopping.component';

@Component({
  selector: 'home-dashboard',
  standalone: true,
  imports: [IonNav, IonNavLink, HttpClientModule, RouterModule, LogoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  teachersProfile: any;
  todoComponent: TodoComponent = new TodoComponent();
  shoppingComponent: ShoppingComponent = new ShoppingComponent();

  constructor() {
    // this.studentsService.getTeachersProfile().subscribe((res: any) => {
    //   this.teachersProfile = res;
    // });
  }
}
