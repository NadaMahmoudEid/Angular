import { Component, ViewChild } from '@angular/core';
import { IProduct } from '../Shared_Classes_and_Types/Iproduct';
import { ProductsComponent } from '../products/products.component';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _ProductServiceService:ProductServiceService)
  {

  }

  Store_name:string = "Accessories";
  Store_Logo:string ="assets/logo.png";


  //dispaly data
  ProductsListData:IProduct[]=[];
  ngAfterViewInit(): void {
    this.ProductsListData=this._ProductServiceService.GetAllProducts()
  }



}
