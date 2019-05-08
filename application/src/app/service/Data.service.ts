import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/Order.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  apiUrl = 'localhost:4000/orders';

  getOrders(){
    return this.http.get<Order[]>(this.apiUrl);
  }
}
