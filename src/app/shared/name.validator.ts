import { AbstractControl } from "@angular/forms";

export  function TakeNames(name:RegExp){
    return function validateName(control:AbstractControl){
        const result = name.test(control.value);
        return result?{'forbiddenname':control.value}:null
    } 
}









