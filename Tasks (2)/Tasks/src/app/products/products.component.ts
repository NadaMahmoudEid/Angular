import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct }  from '../Shared_Classes_and_Types/Iproduct'
import { ICategory }  from '../Shared_Classes_and_Types/ICategory'
import { DiscountOffers }  from '../Shared_Classes_and_Types/Enum_Discount_Offers'
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private _ProductService:ProductServiceService,private _Router:Router,private _ActivatedRoute:ActivatedRoute)
  {

  }
  ProductList:IProduct[]=[]
   ngOnInit(): void {

  this.ProductList=this._ProductService.GetAllProducts();

   }

   renderValues():IProduct[]
   {

    this.ProductList= this._ProductService.GetAllProducts();
     return this.ProductList;
   }

   storeProdID:any='';
   productObject:any={};
   getByID(prodID:any):any
   {
     this.productObject=this._ProductService.GetProductById(prodID);
   }

   //navigate withDiscount withoutDiscount

   WithDiscount()
   {
      this._Router.navigate(["WithDiscount"],{relativeTo:this._ActivatedRoute});
   }

   withoutDiscount()
   {
     this._Router.navigate(["WithoutDiscount"],{relativeTo:this._ActivatedRoute});
   }

  Discount:DiscountOffers = DiscountOffers.NoDiscount;

  // ProductList:IProduct[] = [
  //   { ID: 1, Name: "Shoes", Quantity: 10, Price: 500, Img: "assets/Product 1.webp"},
  //   { ID: 2, Name: "Hat", Quantity: 5, Price: 700, Img: "assets/product2.jpeg" },
  //   { ID: 3, Name: "Watch", Quantity: 20, Price: 990, Img: "assets/product3.jpg" },
  //   { ID:4, Name:"Bag", Quantity:25 , Price:220,  Img:"assets/Product4.jpg"}
  // ];
  CategoryList:ICategory[]= [
    { ID: 1, Name: "Female" },
    { ID: 2, Name: "Male" },
    { ID: 3, Name: "Childern" },
    { ID: 4, Name: "Adults" },
  ];
  ClientName: string = "Manar Elsheikh";
  IsPurchased: boolean = false;

  hideMe()
  {
    if(this.IsPurchased)
    {
      this.IsPurchased=false;
    }
    else
    {
      this.IsPurchased=true;
    }
  }




}






