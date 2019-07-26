import {Component, OnInit} from '@angular/core'
import { EmployeeService } from '../Services/Eployee.Service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
selector:'info-Routing',
template:`
app.routing.module is created and imported in the app.module.ts by default when we create a app with --routing option.
Otherwise if i want to add routing directly to the app.module then:- 
add <base href="/"> in the head section of the index.html file.
import Route and RoutingModule from @angluar/router
create "const myRoutes:Routes = [{{'{'}}path="/tab1",component:tab1Component{{'}'}},],
in the imports array - RouterModule.forRoot(myRoutes).
in the app.component.html add 
<code><br/>
nav <br/>
a routeLink='tab1' routeLinkActive='cssActiveClassName'>tab1 <br/>
a routeLink='tab2' routeLinkActive='cssActiveClassName'>tab2 <br/>
/nav <br/>
</code>

<h3>Route parameter- mandatory params-this.router.navigate(["/linktoPage",empoloyee.id])</h3>
to navigate with onClick or onSelect using code we need to 
add a new route --path:"emloyeees/:id",component:employeedetailscomponent
<p>
import Router SERVICE form @angular/router and add dependency in the constructor
constrocutor(private router:Router) -- this.router.navigate(["/linktoPage",empoloyee.id])</p>
<p>to receive the param in the details page:-<br/>
import ActivatedRoute SERVICE form @angular/router and add dependency in the constructor using </p>
constuctor(private route:ActivatedRoute)
let id = this.route.snapshot.parmMap.get("id");
<p style="color:red">Note:When we navigate from one component back to same component the snapshot does not work</p>
<span style="color:red">e.g navigate from epmployees/2 to employees/3 using next previous button in the employeedetails component, the id paramater is not update from 2 to 3 in employeedetails component</span>
<p><b style="color:red">That is becuase angular does not initialize the component when navigating from one component back to same component. i.e. ngOnit is not called again.</b></p>
<p><b style="color:red">so use paramMap api of the ActivatedRouter service which gives an Observable in ngOnIt, to get the update id from route</b></p>
<p><b style="color:red">this.activatedRoute.paramMap.subscribe(params=> this.id= params.get("id")))</b></p>
<div>
<div style="background-color:lightgrey">
using link navigation
<ul [style.list-style]="'none'">
<li *ngFor="let e of employees; index as i">
<a href="employee/{{e.id}}">{{i}} {{e.name}}</a>
</li>
</ul>
</div>
<div style="width:50%;float:left;background-color:lightgrey">
<h3>component interaction with OnChnages and SimpleChanges</h3>
using onclick and showing it in same component
<ul [style.list-style]="'none'">
<li *ngFor="let e of employees; index as i">
<button (click)="showEmployeeDetails($event,i+1)" [value]="i">{{i+1 + "--" +  e.name}}</button>
</li>
</ul>
</div>
<div style="width:50%;float:left;background-color:lightgrey" *ngIf="isShowDetails">
<p>Employee Details for - {{selectedEmployeeId}}</p>
<employeedetails [empIdinParent]="selectedEmployeeId"></employeedetails>
</div>
</div>
<div>


<h3>Optional Route Parameters</h3>
send optional parameters using navigate method of router service <br/>
this.router.navigate(['/employees',{{'{' }}id: selectedEmployeeId, param2: 'val2'{{'}'}}]) <br/>
to read it use paramMap observable api of ActivatedRoute service <br/>
this.activatedRoute.paramMap.subscribe(params=> this.id = params.get('id'))<br/>
</div>
<div>
<h3>Relative navigation</h3>
<p style="color:red">when you want to navigate from /employees to /employees/2 use this.route.navigate([this.id],{{'{'}}relativeTo:this.activatedRoute{{'}'}})</p>
<p style="color:red">when you want to navigate back from /employees/2 to /employees use this.route.navigate( ['../', {{'{'}}id:this.id{{'}'}}}], {{'{'}}relativeTo:this.activatedRoute{{'}'}})</p>
</div>

<div>
<h3>Child Routes using router-outlet in component</h3>
If we have two router-outlet in the application the last one is considered.
</div>


`,
styles:[]
})
export class RoutingComponent implements OnInit
{
    employees = [];
    isShowDetails = false;
    selectedEmployeeId;

showEmployeeDetails(event, empid){    
    event.preventDefault;
    this.isShowDetails = true;
    this.selectedEmployeeId = empid;
    return false;
}


   constructor(private employeeService : EmployeeService, private router: Router, private activatedRoute: ActivatedRoute)
   { }

   ngOnInit(): void {
        this.employeeService.GetEmployeesFromJsonFile().subscribe(data=>this.employees = data);        
    } 
    
}