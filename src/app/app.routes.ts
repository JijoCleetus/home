import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
];
