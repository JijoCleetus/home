import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { TodoList } from '../../../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodoList(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(`${environment.baseUrl}/api/todo`);
  }

  markAsCompleted(id: number, list: TodoList) {
    return this.http.put(`${environment.baseUrl}/api/todo/${id}`, list);
  }

  removeItemFromTodoList(id: number, force = false) {
    return this.http.delete(`${environment.baseUrl}/api/todo/${id}`);
  }
}
