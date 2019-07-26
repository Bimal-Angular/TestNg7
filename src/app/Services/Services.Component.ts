import { Component, OnInit } from "@angular/core";
import { EmployeeService } from './Eployee.Service';



@Component({
selector:'test-services',
template:`
<div style="background-color:lightgrey">
<h1>Services "ng g s myServiceName" - @Injectable()</h1>
<div style="background-color:lightgrey">
<p>The service should be injected in app module in the providers array. if it is done any where else e.g. AppComponent it is accessing to Appcomponent and its child component.</p>
<p>Service dependency is mentioed in the component constructor</p>
<p><mark>Injectable() decorator tells angular that this service might itself has injected dependencies</mark></p>
<p><mark>Currently our employee service does not have any dependecy in the constructor so Injectable() decorator is not necessary, but it might in future, so its better to add injectable</mark></p>
<ul *ngFor="let emp of _employees" [style.listStyle]="'none'">
<li>{{emp.name}}</li>
</ul>
</div>

<div style="background-color:lightgrey">
<h1>Observable</h1>
<div style="background-color:lightgrey">
<p>Observable is a sequence of asynchronous message/http response</p>
<p><mark>RxJs i.e. React extension for Js, is external js library to work with Observables</mark></p>
<p><mark>Import HttpClientModule from @angular/common/http and add it to the imports array of app module,this internally registers the HttpClientService and we dont have to explicitly add it tothe providers array, so that it is available within the app module</mark></p>
<p><mark>Add the HttpClient service dependency in the service constructor e.g. EmployeeServie</mark></p>
<p><mark>Import Observable and throwError from rxjs (older rxjs/Observable) in the service. and declare a method of return type Observable{{'<'}}T{{'>'}}</mark></p>
<p>To catch error, import catchError,retry from rxjs/operators(old rxjs/add/oprator/catch  e.g.  import 'rxjs/add/oprator/catch')</p>
<p [style.color]="'red'">GetEmployeesFromJsonFile() :Observable{{'<'}}IEmployee[]{{'>{'}}return this.http.get{{'<'}}IEmployee[]{{'>'}}(this.jsonFileUrl).pipe(
    retry(1),
    catchError((error :HttpErrorResponse) =>{{ '{'}}
        console.log(error || "Error Occurred--" + 'error?.message');
        return throwError(error);
        {{'}'}})
    ); </p>
<p [style.color]="'red'">Finally in component to call   this._employeeService.GetEmployeesFromJsonFile().subscribe(
    data=>this._employeesFromJsonFile = data, error=> this.errormessage= error); </p>
<ul *ngFor="let emp1 of _employeesFromJsonFile" [style.listStyle]="'none'">
<li>{{emp1.name}}</li>
</ul>
Erro is :- {{httpErrorMessage?.message}}
</div>



`,
styles:[]
})
export class ServicesComponent implements OnInit
{
    private _employees = [];
    private _employeesFromJsonFile = [];

private httpErrorMessage;

    constructor(private _employeeService: EmployeeService)
    {}

    ngOnInit()
    {
        //This is called once the component is initialized
        this._employees = this._employeeService.GetEmployees(); 
        this._employeeService.GetEmployeesFromJsonFile().subscribe(
            data=>this._employeesFromJsonFile = data);    
            
        this._employeeService.GetEmployeesFromJsonFileWithError().subscribe(
               data=>{this._employeesFromJsonFile = data}, 
               
               error=> this.httpErrorMessage = error); 

               this.CallCardsApi();
               
    }


    CallCardsApi()
    {        
         this._employeeService.CallCardsApi().subscribe(data=> { return data;},
              error=> {console.log('error in cardsapi->'+ error)});


             
            // this._employeeService.CallCardsApiWithJsonP();
    }
}