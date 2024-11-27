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

  getAllShoppingList(id: string) {
    return this.http.get(`${environment.baseUrl}/api/shopping/list/${id}`);
  }

  markAsPurchased(id: number, list: ShoppingListData) {
    return this.http.put(
      `${environment.baseUrl}/api/shopping/list/${id}`,
      list
    );
  }

  addItemToShoppingList(data: ShoppingListData) {
    return this.http.post(`${environment.baseUrl}/api/shopping/list`, data);
  }
}
