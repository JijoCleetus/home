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
  IonNav,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-shopping',
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonNav,
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
    RouterModule,
  ],
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  shoppingListComponent: ShoppingListComponent = new ShoppingListComponent();

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {}
}
