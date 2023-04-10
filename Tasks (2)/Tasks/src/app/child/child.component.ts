import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Shared_Classes_and_Types/Iproduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 @Output() ProductList:EventEmitter<IProduct[]>= new EventEmitter<IProduct[]>;


 SetData()
 {
  this.ProductList.emit(
    [
      { ID: 1, Name: "Shoes", Quantity: 10, Price: 500, Img: "assets/Product 1.webp"},
      { ID: 2, Name: "Hat", Quantity: 5, Price: 700, Img: "assets/product2.jpeg" },
      { ID: 3, Name: "Watch", Quantity: 20, Price: 990, Img: "assets/product3.jpg" },
      { ID:4, Name:"Bag", Quantity:25 , Price:220,  Img:"assets/Product4.jpg"}
    ]
  )
 }

 SayHello()
 {
  console.log("Hello Manora, you are glowing Today!");
 }

}
