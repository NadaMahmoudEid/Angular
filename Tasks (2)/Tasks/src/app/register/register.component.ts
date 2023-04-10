import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../Custom-Validations/Username.validators';
import { ConfirmPassVaildators } from '../Custom-Validations/ConfirmPass.vaildators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private FormBuilder:FormBuilder)
  {}

  defaultSelectedOption:string="Where You Hear About Us";
  RegisterationForm=this.FormBuilder.group({
   Username:['',[Validators.pattern(/[A-Z].*$/),Validators.required,Validators.minLength(5),forbiddenNameValidator(/admin/)]],
   Email:['',[Validators.required,Validators.email]],
   AlternativeEmails:this.FormBuilder.array([]),
   Subscribe:[false],
   Pass:['',[Validators.required]],
   ConfirmPass:['',[Validators.required]],
   SelectOptions:['',[Validators.required]],
   Address:this.FormBuilder.group({
    City:['',[Validators.required]],
    State:['',[Validators.required]],
    PostalCode:['',[Validators.required]],
   })
  },{validator:[ConfirmPassVaildators]});

  get Username()
  {
    return this.RegisterationForm.get('Username');
  }
  get Pass()
  {
    return this.RegisterationForm.get('Pass');
  }
  get ConfirmPassword()
  {
    return this.RegisterationForm.get('ConfirmPass');
  }
  get Email()
  {
    return this.RegisterationForm.get('Email');
  }
  get AlternativeEmails()
  {
    return this.RegisterationForm.get('AlternativeEmails') as FormArray;
  }
  get SelectOptions(){
    return this.RegisterationForm.get('SelectOptions');

  }
  get City()
  {
    return this.RegisterationForm.get('City');

  }
  get State()
  {
    return this.RegisterationForm.get('State');
  }
  get PostalCode()
  {
    return this.RegisterationForm.get('PostalCode');
  }
  addAlternativeEmail()
  {
    this.AlternativeEmails.push(this.FormBuilder.control(''))
  }
  clearEmail(i:any)
  {
    this.AlternativeEmails.removeAt(i);
  }
  submitData()
  {
    console.log(this.RegisterationForm.value);
  }


  //conditional validation
  // setEmailValidation()
  // {
  //   this.RegisterationForm.get('Subscribe')?.valueChanges.subscribe(CheckedValue=>{
  //     if(CheckedValue)
  //     { //set validation
  //       this.Email?.setValidators(Validators.required)
  //     }
  //     else
  //     { //clear validation
  //      this.Email?.clearValidators()
  //     }
  //     //update dom
  //     this.Email?.updateValueAndValidity();
  //   })
  // }
}
