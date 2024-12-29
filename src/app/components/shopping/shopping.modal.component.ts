import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule,
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
            <ion-select
              label="Select Vendor"
              label-placement="floating"
              fill="outline"
              [(ngModel)]="vendorName"
            >
              @for (vendor of vendors; track vendor.id){
              <ion-select-option [value]="vendor.name">{{
                vendor.name
              }}</ion-select-option>
              }
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-input
              label="Name"
              label-placement="floating"
              fill="outline"
              placeholder="List Name"
              [(ngModel)]="title"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-button size="default" class="add-button" (click)="save(modal)"
              >Add</ion-button
            >
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
  @Input() vendors: any;
  @Output() onSave = new EventEmitter<any>();
  title: string = '';
  vendorName: string = '';

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {}

  save(modal: any) {
    const shoppingItem = {
      name: this.title,
      vendor: this.vendorName,
    };
    this.onSave.emit(shoppingItem);
    modal.dismiss();
  }
}
