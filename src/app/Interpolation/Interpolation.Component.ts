import {Component}  from '@angular/core';


//ng g c test 
//for generating "test" component i.e. test/test.component.ts file using cli.


@Component({
 template :
 `
 <div style="background-color:lightgrey">
 <h2>Interpolation:-</h2>
 <div>String interpolation {{prop}}</div>
 <div>String interpolation with string concat {{"Hello " + prop}}</div>
 <div>String interpolation with calculation 2+2= {{2+2}}</div>
 <div>String interpolation with javascript methods and javascript properties {{prop.toUpperCase() + ", Length- " + prop.length}}</div>
 <div>String interpolation with method declared in component, {{greetuser()}}</div>
 <h4>Can not do with interpolation:-</h4>
 <div>String interpolation does not work with assignments i.e.  <font color="red">'{{'a = 2+2 '}}', Error-- Bindings cannot contain assignments</font></div>
 <div>String interpolation does not work with <font color="red">global javascript variables like Window.location.href</font></div>
</div>

<br/>

<div style="background-color:lightgrey">
 <h2>Property binding:-</h2>
 <input type="text" id="{{idProp}}" value="{{prop}}" /><p>with html properties...interpolation works only for string values not for boolean e.g disabled</p>
 <input type="text" disabled="{{isDisabledProp}}" value="{{prop}}" /><p><font style="text-error">does not work...interpolation does not work with boolean properties</font></p>
 <input type="text" [id]="idProp" [disabled]="isDisabledProp" value="{{prop}}" /><p>Property binding</p>
 <input type="text" bind-id="idProp" bind-disabled="isDisabledProp" value="{{prop}}" /><p>with bind- Property binding</p>
 </div>

 <br/>
 
 <div style="background-color:lightgrey">
<h2>Class binding:-</h2>
<div class="text-success">Normal class attribute</div>
<div class="text-success" [class]="classProp">class binding with both normal attribute and binding</div> <p>when both normal and angular class binding is present <font style="text-error">class binding is considered</font></p>
<div class="text-success" class="{{classProp}}">class binding 2 i.e with interpolation</div> 
<div class="text-success" bind-class="classProp">clas binding 3 i.e. with bind-</div>
<div [class.text-error]="hasErrorProp">single class binding conditionally, that is the class mentioned with a . will be applied based on condition</div>
<div [class]="hasErrorProp?'text-error':'text-success'">single class binding conditionally, with direclty string values using single quotes</div>
<div [ngClass]="multipleClassObject">use <font class="text-error">ngClass directive i.e. ngClass=someObject</font> to conditionally apply multiple classes binding</div>
</div>
<br/>

<div style="background-color:lightgrey">
<h2>Style binding:-</h2>
<div [style.color]="'blue'">style binding with direct string value</div>
<div [style.color]="hasErrorProp?'red':'green'">conditional style binding with direct string value</div>
<div [style.color]="colorProp">style binding with component property</div>
<div [ngStyle]="multipleStyleObject">use ngStyle directive <font class='text-error'> i.e. ngStyle=someObject </font>to apply multiple styles using an object</div>
</div>
<br/>

<div style="background-color:lightgrey">
<h2>Event binding:- is done using ()</h2>
<button (click)="myButtonClick()">{{buttonTextProp}}</button><br/>
<button id="butn2" (click)="myButtonClickEvent($event)">Event handling with $event</button><br/>
<button id="butn2" (click)="btnText='kuch nehin'">{{btnText}}</button>
</div>
<br/>


<div style="background-color:lightgrey">
<h2>Template Reference Variables:- using #</h2>
<input type="text" #myInput>
<button (click)="dosome(myInput)">Show text from input</button><br/>

</div>
<br/>

 `, //back tick for multiline..else single quote
//templateUrl :'Test.Component.html',
 
selector: 'test-Interpolation',//tag
 //selector: '.test-comp'//class
 //selector: '[test-comp]'//attribute

//styleUrls:[]
styles:[`
h1{
    color:red
}

.text-success{
color:green;
}

.text-error{
color:red;    
}
.text-special{
font-weight:bold;
font-style:italic;    
}
`]
//inline styles
})
export class InterpolationComponent
{
 prop = 'just testing component';
 nameProp = 'bimal'
 idProp = "myId";
 isDisabledProp = false;

 classProp = 'text-error';
 hasErrorProp = false;
 isSpecialProp: any = true; 
 colorProp :string = 'orange';
 greetuser(){
return "Hello " + this.nameProp + ", from component method";
 }

multipleClassObject = {
"text-success": !this.hasErrorProp,
"text-error" : this.hasErrorProp,
"text-special": this.isSpecialProp
}

multipleStyleObject = {
color:'darkblue'    ,
fontStyle:'italic', //highphen can not be used, use camel casing.
fontWeight:'bold'
}

buttonTextProp = "Greet User";

myButtonClick(){
this.buttonTextProp = "Hello " + this.nameProp;
}

myButtonClickEvent(event)
{    
alert("Eevent " + event + " raised from " + event.target.id)    ;
}

btnText = "Event handling with inline expression, i.e. without any funciton";

dosome(element){
alert(element.value);
}


}