import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ShoppingListData } from '../../../models/shopping.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private http: HttpClient) {}

  getAllShoppings() {
    return this.http.get(`${environment.baseUrl}/api/shopping`);
  }

  getAllVendors() {
    return this.http.get(`${environment.baseUrl}/api/shopping/vendors`);
  }

  getAllShoppingList(id: string) {
    return this.http.get(`${environment.baseUrl}/api/shopping/list/${id}`);
  }

  markAsPurchased(id: number, list: ShoppingListData) {
    return this.http.put(
      `${environment.baseUrl}/api/shopping/list/${id}`,
      list
    );
  }

  addShoping(data: any) {
    return this.http.post(`${environment.baseUrl}/api/shopping`, data);
  }

  addItemToShoppingList(data: ShoppingListData) {
    return this.http.post(`${environment.baseUrl}/api/shopping/list`, data);
  }

  removeItemFromShoppingList(id: number) {
    return this.http.delete(`${environment.baseUrl}/api/shopping/list/${id}`);
  }
}
