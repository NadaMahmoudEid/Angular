import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NamesValidator } from '../Custom-Validations/Notes_Name.validators';
import { ProductServiceService } from '../Services/product-service.service';
import { IProduct } from '../Shared_Classes_and_Types/Iproduct';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  constructor(private formBuilder: FormBuilder,private productService:ProductServiceService)
  {

  }

  productListFromService:IProduct[]=[];

  ngOnInit(): void {
   this.productListFromService=this.productService.GetAllProducts();

  }


  NotesForm=this.formBuilder.group({
     Name:['',[Validators.required,NamesValidator]],
     SelectOptions:['',[Validators.required]],
     Subscribe:[false],
     AlternativeComment:this.formBuilder.array(['']),


  });

  get Name(){
   return this.NotesForm.get('Name');
  }

  get SelectOptions(){
   return this.NotesForm.get('SelectOptions');
  }
  get Subscribe(){
   return this.NotesForm.get('Subscribe');
  }
  get Discount(){
   return this.NotesForm.get('Discount');
  }

  get AlternativeComment(){
   return this.NotesForm.get('AlternativeComment') as FormArray;
  }

  addAlternativeComment()
  {
    this.AlternativeComment.push(this.formBuilder.control(''))
  }
  clearComment(i:any)
  {
    this.AlternativeComment.removeAt(i);
  }
  SubmitData()
  {
    console.log(this.NotesForm.value);
  }

  // setDiscount()
  // {
  //   this.Subscribe?.valueChanges.subscribe(checked =>
  //     {
  //      if(checked)
  //      {
  //       this.NotesForm.addControl('Discount', ['']);
  //      }
  //      else{
  //       this.NotesForm.removeControl('Discount');
  //      }
  //      this.NotesForm.updateValueAndValidity()
  //     });
  // }

}
