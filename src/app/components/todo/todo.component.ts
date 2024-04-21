import { Component, OnInit } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

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
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {
    addIcons({ add });
  }

  ngOnInit() {}
}
