import { Component, inject, OnInit } from '@angular/core';
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
import { add, paperPlane } from 'ionicons/icons';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ShoppingModalComponent } from './shopping.modal.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShoppingService } from './shopping.service';

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
    CommonModule,
    HttpClientModule,
    ShoppingModalComponent,
  ],
  providers: [ShoppingService],
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  shoppingListComponent: ShoppingListComponent = new ShoppingListComponent();
  // shoppingModalComponent: ShoppingModalComponent = new ShoppingModalComponent();
  private shoppingService = inject(ShoppingService);
  shopping: any;
  vendors: any;
  constructor() {
    addIcons({ add });
  }

  ngOnInit() {
    this.getAllvendors();
    this.getAllShoppings();
  }

  getAllShoppings(): void {
    this.shoppingService.getAllShoppings().subscribe((res: any) => {
      this.shopping = res.shopping;
    });
  }
  getAllvendors(): void {
    this.shoppingService.getAllVendors().subscribe((res: any) => {
      this.vendors = res.vendors;
      console.log(this.vendors);
    });
  }
  addShopping(data: Event) {
    this.shoppingService.addShoping(data).subscribe((res: any) => {
      if (res.success) {
        this.getAllShoppings();
      }
    });
  }
}
