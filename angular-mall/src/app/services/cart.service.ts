import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICartProduct } from '../dto/ICartProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  CART_BASE_URL = '/api/cart';

  getCartProducts(): Observable<ICartProduct[]> {
    return this.http.get<ICartProduct[]>(this.CART_BASE_URL);
  }

  add(cartProduct: ICartProduct):Observable<any> {
    return this.http.post<any>(this.CART_BASE_URL,cartProduct);
  }

  clear():Observable<any> {
    return this.http.delete<any>(this.CART_BASE_URL);
  }
}
