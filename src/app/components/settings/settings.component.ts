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
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircle, logOutOutline } from 'ionicons/icons';
import { AuthService } from '../../auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'home-settings',
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
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  private authService: AuthService = inject(AuthService);
  private alertController: AlertController = inject(AlertController);

  constructor() {
    addIcons({ informationCircle, logOutOutline });
  }

  ngOnInit() {}

  performLogout(): void {
    this.authService.logout();
  }

  async showInfo() {
    const alert = await this.alertController.create({
      header: 'About',
      message:
        'Home is a utility app to track and manage lists.' +
        '<br/><br/>' +
        'Developed By: <b>Jijo Cleetus.</b>' +
        '<br/>' +
        ' Version: <b>0.0.1</b>',
      buttons: [{ text: 'Ok', role: 'cancel', cssClass: 'secondary' }],
    });
    await alert.present();
  }
}
