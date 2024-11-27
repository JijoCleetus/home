import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'home-shopping-modal',
  standalone: true,
  imports: [
    IonModal,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
  ],
  template: `
    <ion-modal #modal trigger="open-modal">
      <ng-template>
        <ion-content>
          <ion-toolbar>
            <ion-title>Add List</ion-title>
            <ion-buttons slot="end">
              <ion-button color="light" (click)="modal.dismiss()"
                >Close</ion-button
              >
            </ion-buttons>
          </ion-toolbar>

          <ion-item>
            <ion-input
              label="Name"
              label-placement="floating"
              fill="outline"
              placeholder="List Name"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-select
              label="Select Category"
              label-placement="floating"
              fill="outline"
            >
              <ion-select-option value="apple">Apple</ion-select-option>
              <ion-select-option value="banana">Banana</ion-select-option>
              <ion-select-option value="orange">Orange</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-button size="default" class="add-button">Add</ion-button>
          </ion-item>
        </ion-content>
      </ng-template>
    </ion-modal>
  `,
  styles: `
  ion-modal{
    height:100%;
  }
  ion-backdrop{
    display:none;
  }
  ion-item {
    margin:20px 0px;
        --background: #121212;
    background-color:#121212;
  }
  ion-input,ion-select{
    position: fixed;
    width: 92%;
  }
  .add-button {
  --background: #0e7490;
  --color: #FFF;
}
  `,
})
export class ShoppingModalComponent implements OnInit {
  constructor() {
    addIcons({ add });
  }

  ngOnInit() {}
}
