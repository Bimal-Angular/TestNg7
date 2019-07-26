import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenUserNameValidator, forbiddenValueValidator, passwordConfirmPasswordValidator } from './CustomerValidatorInReactiveForms';

@Component({
templateUrl: 'AngularReactiveForms.Component.html'
})
export class AngularReactiveFormsComponent implements OnInit
{
    myForm :FormGroup;
    myForm2: FormGroup;

    get alternateEmailsGetter1(){
        return this.myForm.get('alternateEmails') as FormArray;
    }
    get alternateEmailsGetter2(){
        return this.myForm2.get('alternateEmails') as FormArray;
    }

addAlternateEmail1()
{
    this.alternateEmailsGetter1.push(this.fb.control(''));    
}
addAlternateEmail2()
{    
    this.alternateEmailsGetter2.push(new FormControl(''));
}
    ngOnInit(): void {
       this.myForm= new FormGroup({
            userName: new FormControl('Bimal',[Validators.required,Validators.minLength(3),forbiddenUserNameValidator, forbiddenValueValidator(/admin/)]),
            email: new FormControl(''),
            subscribe: new FormControl(false), //check box false/true
            password: new FormControl('', forbiddenValueValidator(/password/)),
            confirmPassword: new FormControl(''),
            address: new FormGroup({
                city:new FormControl('cuttack'),
                state:new FormControl('Odissa')
            }),
            alternateEmails: new FormArray([])
        },passwordConfirmPasswordValidator);


        this.myForm2 = this.fb.group({
            userName:['Bimal', [Validators.required,Validators.minLength(3), forbiddenUserNameValidator, forbiddenValueValidator(/admin/)]],
            email:[''],
            subscribe:[false], //checkbox
            password:['',[ forbiddenValueValidator(/password/)]],
            confirmPassword:[''],
            address: this.fb.group({
                city:[''],
                state:['Odissa']
            }),
            alternateEmails: this.fb.array([])
        }, {validator:passwordConfirmPasswordValidator})

        this.myForm.get('subscribe').valueChanges
        .subscribe(value=>{
            let email = this.myForm.get('email');
            if (value)
            {                
                email.setValidators(Validators.required)
            }
            else{
                email.clearValidators();
            }
            email.updateValueAndValidity()
        })


        this.myForm2.get('subscribe').valueChanges
        .subscribe(value=>{
            let email1 = this.myForm2.get('email');
            if (value)
            {                
                email1.setValidators(Validators.required)
            }
            else{
                email1.clearValidators();
            }
            email1.updateValueAndValidity()
        })
    }


constructor(private fb: FormBuilder) {
    
}

loadApiData()
{
    this.myForm.setValue({
        userName:'bimalendu',
        email:'',
        password:'test',
        confirmPassword:'test',
        address:{
            city:'cuttack',
            state: 'Odissa'
        }
    })
}

loadApiDataForSomeControls()
{
    this.myForm.patchValue({
        userName:'bimalendu',        
        address:{            
            state: 'Odissa'
        }
    })
}



}