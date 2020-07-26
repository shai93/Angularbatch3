import { AbstractControl } from "@angular/forms";

export  function TakeNames(name:RegExp){
    return function validateName(control:AbstractControl){
        const result = name.test(control.value);
        return result?{'forbiddenname':control.value}:null
    } 
}



export function PasswordValidator(control:AbstractControl){
    const password = control.get("password").value
    const confirmPassword = control.get("confirmPassword").value

    if(password !== confirmPassword){
       return {
           'mismatch':confirmPassword
       } 
    }else{
        return null;
    }
}









