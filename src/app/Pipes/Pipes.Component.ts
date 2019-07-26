import { Component } from "@angular/core";
import {myFilterPipe} from './myFilterPipe'
import { Observable, interval, pipe } from 'rxjs';
import {map, take} from 'rxjs/operators'

@Component({
styles:[],
selector:'test-pipes',
template:`
<h1>Pipes</h1>
<div style="background-color:lightgrey">
<h3>Custom Pipe</h3>
<p>No FilterPipe or OrderByPipe</p>
<p>For creating custom pip import Pipe,PipeTransform from @angular/core</p>
<p><code>@Pipe( {{"{"}}
    name:'myFilterPipe',
    pure:false
{{"}"}})<br/>
export class myFilterPipe implements PipeTransform
{{"{"}}<br/>
    transform(value: any[], ...args: any[]) {{"{"}}
    <br/>
        let filterby = args[0];
        if (!value || !filterby)
        return value;
        return value.filter(a=> a.indexOf(filterby) != -1)
        {{"}"}}
</code></p>
</div>
<div style="background-color:lightgrey">
<p>There are two categories of pipes: pure and impure. Pipes are pure by default.</p>
<h3>Pure pipes</h3>
<p>Angular executes a pure pipe only when it detects a pure change to the input value. A pure change is either a change to a primitive input value (String, Number, Boolean, Symbol) or a changed object reference (Date, Array, Function, Object).</p>
<p>Angular ignores changes within (composite) objects. It won't call a pure pipe if you change an input month, add to an input array, or update an input object property.</p>
<p>This may seem restrictive but it's also fast. An object reference check is fast—much faster than a deep check for differences—so Angular can quickly determine if it can skip both the pipe execution and a view update.</p>
<p>For this reason, a pure pipe is preferable when you can live with the change detection strategy. When you can't, you can use the impure pipe.</p>
<p>Or you might not use a pipe at all. It may be better to pursue the pipe's purpose with a property of the component</p>
<h3>Impure pipes</h3>
<p>Angular executes an impure pipe during every component change detection cycle. An impure pipe is called often, as often as every keystroke or mouse-move.</p>
<p>With that concern in mind, implement an impure pipe with great care. An expensive, long-running pipe could destroy the user experience.</p>
</div>

<div style="background-color:lightgrey">
<h3>ImPure AsyncPipe</h3>
<p>The Angular AsyncPipe is an interesting example of an impure pipe. The AsyncPipe accepts a Promise or Observable as input and subscribes to the input automatically, eventually returning the emitted values.
The AsyncPipe is also stateful. The pipe maintains a subscription to the input Observable and keeps delivering values from that Observable as they arrive.</p>
<p>Message: {{ messageObservable | async }}</p>
<button (click)="resend()">Resend</button><br/>


{{message | uppercase}}<br/>
{{message | lowercase}}<br/>
{{message | titlecase}}<br/>
{{message | slice:1:5}}<br/>
{{jsonObj | json}}<br/>

{{2.238 | number : '1.2-3'}} - minimmum digits before . , minimun - max digits after decimal<br/>
{{2.238 | number : '3.4-5'}}<br/> 
{{2.238 | number : '3.2-2'}} - rounded off <br/>

{{0.29 | percent}} <br/>
{{0.29 | currency : 'EUR' : 'code'}} <br/>

{{dateprop | date: 'short'}} <br/>
{{dateprop | date: 'shortDate'}} <br/>
{{dateprop | date: 'shortTime'}} <br/>

{{dateprop | date: 'medium'}} <br/>
{{dateprop | date: 'mediumDate'}} <br/>
{{dateprop | date: 'mediumTime'}} <br/>
{{results | json}}
</div>
<br/>

<input type="text" [(ngModel)]="filterString" #filterChar />

{{results | myFilterPipe:filterString}}

<h3>Pure vs Impure Pipes</h3>
<div BgColChanger [style.text-align]="'left'">
pure pipes are the pipes which are executed only when a "PURE CHANGE" to the input value is detected.<br/>
A pure change is either a change to a primitive input (string, number etc) value. or changed Object reference.<br/>
<b>by default a pipe is pure pipe.</b><br/>
So impure pipe executes everytime irrespective of source has changed or not. which leads to bad performance. thats why it is not recommneded to use pipes for filtering data.<br/>
To make a pipe impure:<br/>
  name: 'empFilter',<br/>
  pure: false  // default is set to true.<br/>
  {{"}"}}
export class EmpFilterPipe implements PipeTransform {{"{bim405
    "}}<br/>
  transform(employees: Employee[], searchValue?: string): Employee[]{{"{"}}<br/>
    {{"}"}}<br/>
{{"}"}}<br/>
&lt;input type="text" [(ngModel)]="searchValue"&gt;<br/>
&lt;button (click)="changeData()" /button<br/>

changeData(): void{{"{"}}<br/>
    this.employees[0].name = "SOMETHING ELSE";<br/>
    {{"}"}}<br/>
&lt;div *ngFor="let emp of employees | empFilter : searchValue"&gt;<br/>
{{"{"}}{{"{"}}emp.name{{"}"}}{{"}"}}}<br/>
/div<br/>
NOTE : if pipe is pure and  employees data is changed using method "changeData()" - It will not detect the changes .<br/>
     Since input value to the  EmpFilterPipe is Object & reference of "employees"  has not been changed.
</div>

`
})
export class PipesComponent 
{
    

/**
 *
 */
constructor() {    
    this.resend();
}
messageObservable :Observable<any>;

private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

resend(){    
    this.messageObservable = interval(500).pipe(        
        map(i=> i*i),//this.messages[i]
        take(this.messages.length-1)        
    );
}




    public message = 'Bimal kar';
    public jsonObj = {
    "fName": 'bimal',
    "lName": 'kar'
    }

    filterString = "";
    public results :string[] = ['bimal','lalit','lalat','test','adadsf'];
    public dateprop = new Date();

    
}