import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  public getOrders(){
    return this.http.get<Order[]>('http://localhost:4999/orders/');
  }

  public getOrder(id:number){
    return this.http.get<Order>('http://localhost:4999/orders/'+id);
  }
  public addOrder(order:Order){
    return this.http.post<Order>('http://localhost:4999/orders/', order);
  }

}