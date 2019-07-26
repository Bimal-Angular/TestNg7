import {Component,OnInit, Input, OnChanges, SimpleChange} from '@angular/core'
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import { EmployeeService } from '../Services/Eployee.Service';


@Component({
selector: 'employeedetails',
template:`
<h3>You selected employee with id = {{id}}</h3>
Details:-<br/>
{{employee?.name}} - {{employee?.id}} - {{employee?.dept}} - {{employee?.age}}

<h3>Navigate using butoon with Router service</h3>
<button (click)="showPrevious()">Previous</button>
<button (click)="showNext()">Next</button>
<br/>
<button (click)="showOverview()">OverView</button>
<button (click)="showContact()">Contact</button>
<router-outlet></router-outlet>
`,
styles:[]
})
export class EmployeeDetailsComponent implements OnInit, OnChanges
{
    @Input() empIdinParent;

    id;
    employees = [];
    employee= {};

    showOverview(){
        this.router.navigate(['overview'], {relativeTo :this.activatedRoute});        
        //this.router.navigate(['employee/overview/',{id:1}]);        
    }
    showContact(){
        this.router.navigate(['contact'],{relativeTo :this.activatedRoute});        
    }


    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {        
        this.id = changes.empIdinParent.currentValue;
        this.employee = this.employees.find(e=> e.id == this.id);
    }

    
    ngOnInit(): void {             
        this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));

        this.activatedRoute.paramMap.subscribe(d=>this.id = parseInt(d.get("id")))
       
        if (!this.id || this.id == 0)
            this.id = this.empIdinParent;
        
        this.service.GetEmployeesFromJsonFile().subscribe(    
            data =>{
                this.employees = data;
                this.employee = this.employees.find(e=> e.id == this.id);                
            });        
    }

    showPrevious(){
        this.id-=1;
        //navigate using code with Router service.
        //here even though the id is changed as we are navigating from employeedetails component to same employeedetails component the ngonIt is not called i.e. angular does not reinitialize.
        //so use ParamMap SERVICE to get the id 
        this.router.navigate(['employee',this.id]);
    }

    showNext(){
        this.id+=1;
        this.router.navigate(['employee',this.id]);
    }

constructor(private activatedRoute: ActivatedRoute, private router:Router, private service: EmployeeService)
{}
// private pramMap: ParamMap,

}