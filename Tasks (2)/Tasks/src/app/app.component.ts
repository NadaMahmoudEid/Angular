import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './Shared_Classes_and_Types/Iproduct';
import { ProductServiceService } from './Services/product-service.service';

@Component({
  selector: 'myfirstapp-root ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasks';


  constructor(private _ProductServiceService:ProductServiceService)
  {

  }

    

  ngAfterViewInit(): void {

  }

  //view child
  isTrue:boolean=false;

  viewChildProductsList:IProduct[]=[];
  @ViewChild(ProductsComponent) viewChildProducts!:ProductsComponent
  AfterClickButton()
  {
    this.isTrue=!this.isTrue;
    this.viewChildProductsList=this.viewChildProducts.ProductList;
  }





}
