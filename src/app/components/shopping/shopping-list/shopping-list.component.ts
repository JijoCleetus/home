import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonTitle,
  IonNavLink,
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
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from '@ionic/angular/standalone';

@Component({
  selector: 'home-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  imports: [
    IonHeader,
    IonTitle,
    IonNavLink,
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
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonLabel,
    IonCheckbox,
    ShoppingListComponent,
  ],
})
export class ShoppingListComponent implements OnInit {
  title: string = '';
  constructor() {}

  ngOnInit() {
    this.title = '26 April';
  }
}
