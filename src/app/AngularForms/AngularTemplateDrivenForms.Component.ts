import {Component} from '@angular/core'
import { User } from '../user';
import { EmployeeService } from '../Services/Eployee.Service';

@Component({
    templateUrl: 'AngularTemplateDrivenForms.Component.html',
    selector:'test-AngularTemplateDrivenForms'
})
export class AngularTemplateDrivenFormsComponent
{    
    constructor(private employeeService: EmployeeService) {
    }

    topics = ["Angular","React","View"];
    subscribes = ['sms','email'];
    userModel = new User('','test@test.com','default','morning',['sms']);
    topicHasError: boolean = false;

    postDataError;


 validateTopic(model)
 {
     //debugger;
    if (model.value == 'default')
         this.topicHasError = true;
    else 
    this.topicHasError = false;
    //model.invalid = true; // wont work as it is readonly
 }

 onSubmitFunc(userForm)
 {
     console.log(userForm);

    console.log(this.userModel)    ;
    this.employeeService.postdata(this.userModel).subscribe(
        data=>console.log('success', data),
        error=>{ console.log('Error', error); this.postDataError = error.statusText}    
    )
 }


}