import { AbstractControl } from "@angular/forms";

export function NamesValidator(control:AbstractControl)
{
    const name=/(admin|adminstrator)/.test(control.value);

    return name ? {'NotAllowedNames':{value:control.value}} : null;

}
