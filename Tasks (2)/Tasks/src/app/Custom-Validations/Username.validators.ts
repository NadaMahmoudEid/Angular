import { AbstractControl } from "@angular/forms";


//custom validation
export function forbiddenNameValidator(forbiddenName:RegExp)
{
  return (control:AbstractControl)=>{
  const forbidden=forbiddenName.test(control.value);

  return forbidden ? {'forbiddenName':{value:control.value}} : null
  }
}
