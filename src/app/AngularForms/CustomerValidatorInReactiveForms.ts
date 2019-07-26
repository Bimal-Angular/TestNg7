import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenUserNameValidator(control :AbstractControl){// : {[key:string] : any} | null{
    let forbidden = /admin/.test(control.value);
    return forbidden? {'forbiddenName': {value:control.value}} : null;
}


export function forbiddenValueValidator(forbiddenString: RegExp) :ValidatorFn
{
    return (control:AbstractControl)=>
    {
       let res = forbiddenString.test(control.value);
        return res? {'forbiddenValue': {value:control.value}}: null;
    }

}

export function passwordConfirmPasswordValidator(control:AbstractControl)
{       
    let pwd = control.get('password');
    let confirmPwd = control.get('confirmPassword');
    if(pwd.pristine || confirmPwd.pristine) return null;

return pwd && confirmPwd && pwd.value !== confirmPwd.value? {'mismatch': true}:null

}