import { Component, OnInit } from '@angular/core';
import { Order } from './models/Order.model';
import { DataService } from './service/Data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  orders$: Order[];

  constructor(private data: DataService){
  }

  ngOnInit(){
    fetch('http://localhost:4000/orders')
    .then(res => res.json())
    .then(data => {
      this.orders$ = data;
    });    
  }
}
