import { Injectable } from '@angular/core';
import { IProduct } from '../Shared_Classes_and_Types/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productListService:IProduct[]=
  [
    { ID: 1, Name: "Shoes", Quantity: 10, Price: 500, Img: "assets/Product 1.webp"},
    { ID: 2, Name: "Hat", Quantity: 5, Price: 700, Img: "assets/product2.jpeg" },
    { ID: 3, Name: "Watch", Quantity: 20, Price: 990, Img: "assets/product3.jpg" },
    { ID: 4, Name:"Bag", Quantity:25 , Price:220,  Img:"assets/Product4.jpg"}
  ]

  constructor() { }

  GetAllProducts(){
    return  this.productListService;
  }

  myProductID!:number;
  GetProductById(prdId:any):any
  {

     for(let product of this.productListService )
     {
      if(typeof prdId != "number")
      {
        this.myProductID= Number(prdId);
        if(this.myProductID == product.ID && this.myProductID!=0 && this.myProductID<= this.productListService.length && this.myProductID >0 )
        {
         return product;
        }
      }

      else if(prdId === product.ID && prdId!=0 && prdId<= this.productListService.length && prdId >0 )
      {
        return product;
      }


     }



     alert("You Must Enter Valid Product ID!");
  


  }
}
