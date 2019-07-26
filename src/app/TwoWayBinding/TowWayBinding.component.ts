import {Component, OnInit}  from '@angular/core';
import { EmployeeService } from '../Services/Eployee.Service';
import {FormsModule} from '@angular/forms'

@Component({
    selector:'test-twoWayBinding',
    template:`
    <input type="text" [(ngModel)]="id" (ngModelChange)="onModelChange($event)"> <br/>

<p style="color:red"> input type=text [(ngModel)]="id" (ngModelChange)=onModelChange($event)</p> 
<p> onModelChange(value)
{{ '{' }}
this.id = value;
this.employee = this.employees.find(e=> e.id==this.id);
{{ '}'}}
</p>

with template reference use input type="text" #myModel [(ngModel)]="id" (ngModelChange)=onModelChangeWithBinding(myModel)<br/>
here the onModelChangeWithBinding recieves the element as the parameter and to get the value use element.value<br/>

<input type="text" #myModel [(ngModel)]="id" (ngModelChange)="onModelChangeWithBinding(myModel)"> <br/>

    <ul style="list-style:none">
    <li *ngFor="let e of employees">{{e.id}} -- {{e.name}}</li>
    </ul>
selected employe:- 

{{employee?.id + "--" + employee?.name + "--" + employee?.dept + "--" + employee?.age}}

    `
})
export class TwoWayBindingComponent implements OnInit
{
    id;
    text;
employees = []
employee = {}

    ngOnInit(): void {
        this.employeeService.GetEmployeesFromJsonFile().subscribe(data=> this.employees=data);
    }

constructor(private employeeService:EmployeeService)
{}

onModelChangeWithBinding(element)
{
    this.id = element.value;
    this.employee = this.employees.find(e=> e.id==this.id);
}

onModelChange(value)
{
this.id = value;
this.employee = this.employees.find(e=> e.id==this.id);
}


}