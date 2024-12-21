import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
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
  IonInput,
  CheckboxCustomEvent,
  IonFooter,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { paperPlane } from 'ionicons/icons';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ShoppingService } from '../shopping.service';
import { ShoppingListData } from '../../../../models/shopping.model';
import { FormsModule } from '@angular/forms';

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
    IonInput,
    IonFooter,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    ShoppingListComponent,
    NgClass,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class ShoppingListComponent implements OnInit {
  title: string = '';
  isStriked: boolean = false;
  shoppingId: string = null!;
  shoppingList: ShoppingListData[] = null!;
  newItem: string = null!;

  private activatedRouter = inject(ActivatedRoute);
  private shoppingService = inject(ShoppingService);

  constructor() {
    addIcons({ paperPlane });
  }

  ngOnInit() {
    this.shoppingId = this.activatedRouter.snapshot.paramMap.get('id')!;
    this.getAllShoppingList(this.shoppingId);
    this.activatedRouter.queryParams.subscribe((param) => {
      this.title = param['title'];
    });
  }

  markComplete(event: CheckboxCustomEvent, list: ShoppingListData): void {
    this.isStriked = event.detail.checked;
    list.active = event.detail.checked ? 0 : 1;
    this.shoppingService.markAsPurchased(list.id!, list).subscribe((res) => {
      console.log(res);
      this.sortList();
    });
  }

  getAllShoppingList(id: string): void {
    this.shoppingService.getAllShoppingList(id).subscribe((res: any) => {
      this.shoppingList = res.list;
      this.sortList();
    });
  }

  /**
   * Move the un completed items to top of the list
   */
  sortList() {
    const unmarkedList =
      this.shoppingList.filter((item) => item.active === 1) || [];
    const markedList =
      this.shoppingList.filter((item) => item.active === 0) || [];
    this.shoppingList = [...unmarkedList, ...markedList];
  }

  addToList() {
    if (!this.newItem) return;

    const payload: ShoppingListData = {
      shoppingId: parseInt(this.shoppingId),
      title: this.newItem,
      active: 1,
      category: 0,
    };
    this.shoppingService
      .addItemToShoppingList(payload)
      .subscribe((res: any) => {
        if (res.success) {
          this.getAllShoppingList(this.shoppingId);
          this.newItem = null!;
        }
      });
  }

  deleteItem(item: ShoppingListData) {
    this.shoppingService
      .removeItemFromShoppingList(item.id as number)
      .subscribe((res: any) => {
        if (res.success) {
          this.getAllShoppingList(this.shoppingId);
        }
      });
  }
}
