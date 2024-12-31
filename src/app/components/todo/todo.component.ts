import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonTitle,
  IonBackButton,
  IonButton,
  IonButtons,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  CheckboxCustomEvent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { imageOutline } from 'ionicons/icons';
import { TodoService } from './todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-todo',
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonBackButton,
    IonButton,
    IonButtons,
    IonToolbar,
    IonFab,
    IonContent,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    CommonModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  private todoService: TodoService = inject(TodoService);
  todoList: any;
  constructor() {
    addIcons({ imageOutline });
  }

  ngOnInit() {
    this.getAllTodoLists();
  }

  getAllTodoLists(): void {
    this.todoService.getAllTodoList().subscribe((res: any) => {
      this.todoList = res.todo;
    });
  }

  markComplete(event: CheckboxCustomEvent, list: any): void {
    list.active = event.detail.checked ? 1 : 0;
    this.todoService.markAsCompleted(list.id!, list).subscribe((res) => {
      console.log(res);
    });
  }

  getTodoImage() {
    console.log('clicked image');
  }
}
