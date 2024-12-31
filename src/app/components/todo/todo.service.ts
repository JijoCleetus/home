import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ShoppingListData } from '../../../models/shopping.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodoList() {
    return this.http.get(`${environment.baseUrl}/api/todo`);
  }

  markAsCompleted(id: number, list: any) {
    return this.http.put(`${environment.baseUrl}/api/todo/${id}`, list);
  }

  removeItemFromTodoList(id: number, force = false) {
    return this.http.delete(`${environment.baseUrl}/api/todo/${id}`);
  }
}
