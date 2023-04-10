import { Component, ViewChild } from '@angular/core';
import { IProduct } from '../Shared_Classes_and_Types/Iproduct';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  ParentList:IProduct[]=[];


    @ViewChild(ChildComponent) child!:ChildComponent;
    constructor()
    {
    }
    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    this.child.SayHello();
  }

}
