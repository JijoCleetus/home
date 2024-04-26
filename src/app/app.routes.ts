import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
  },
  {
    path: 'shopping/shopping-list',
    component: ShoppingListComponent,
  },
];
