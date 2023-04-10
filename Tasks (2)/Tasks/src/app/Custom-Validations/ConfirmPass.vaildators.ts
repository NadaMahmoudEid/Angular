import { AbstractControl } from "@angular/forms";


//cross field validation
export function ConfirmPassVaildators(control:AbstractControl)
{
  const password=control.get('Pass');
  const ConfirmPass=control.get('ConfirmPass');

  if(password?.pristine || ConfirmPass?.pristine)
  {
    return null
  }
  else
  {
  return password && ConfirmPass && password.value!=ConfirmPass.value
  ? {'misMatch':{value:true}}
  :null
  }

}
