

import {Component, OnInit} from '@angular/core'
import { EmployeeService } from '../Services/Eployee.Service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'info-Routing',
    template:`
        <ul>
        <li *ngFor="let e of employees"> 
        <a href="employee/{{e.id}}">{{e.id}} - {{e.name}} - {{e.dept}} - {{e.age}}</a>
        </ul>    
    `
})
export class EmployeeListComponent implements OnInit
{
    employees = {};
    selectedId;
    employee = {};
    
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params=> this.selectedId = params.get('id'));
        this.employeeService.GetEmployeesFromJsonFile().subscribe(data=> this.employees = data);
    }

    constructor(private router:Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService)
    {}


}