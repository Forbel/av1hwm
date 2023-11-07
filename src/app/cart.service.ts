import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToItems(item: Product) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '../assets/shipping.json'
    );
  }
}
