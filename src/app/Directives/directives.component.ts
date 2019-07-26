import {Component, ElementRef, Renderer2} from '@angular/core'


@Component({
 selector: 'test-directives',
 template:`
 <h2>Structural directive(used to add/remove html elements)ngIf,ngSwitch,ngFor</h2>
 <div style="background-color:lightgrey">
 <h3>ngIf:- *</h3>
<div *ngIf="'true'">Show this based on a condition.<p style="color:red">Incase of css display none, element is shown in markup /view source, but with ngIf
It will not be shown in markup</p></div>
<div *ngIf="ngIfProp">Show this based on a condition.</div>

<div *ngIf="ngIfElseProp; else elseBlock">If Block</div>
<ng-template #elseBlock>
ngIf else:- This is the Else Block
<p style="color:red">Wrap the else block in ng-template i.e. "ng-templage #elseBlockName", give the ng-template a template reference name with #.
Give the template reference name in the else of ngIf e.g. "ngIf=\"prop\; else name"
</p>
</ng-template>
<br/>

<div *ngIf="ngIfThenElseProp; then thenBlock1; else elseBlock1"></div>
<ng-template #thenBlock1>
ngIf then else:- 
<p style="color:red">Wrap both the blocks in ng-template i.e. "ng-templage #thenBlockName", give both the ng-templates a template reference name with #.
Create a placeholder empty div using ngIf and Give the template reference names, e.g. "div ngIf=\"prop\;then thenblock; else elseblock"
</p>
</ng-template>
<ng-template #elseBlock1>
ngIf else:- This is the else Block
<p style="color:red">Wrap both the blocks in ng-template i.e. "ng-templage #elseBlockName", give both the ng-templates a template reference name with #.
Create a placeholder empty div using ngIf and Give the template reference names, e.g. "div ngIf=\"prop\;then thenblock; else elseblock"
</p>
</ng-template>
</div>

<br/>

<div style="background-color:lightgrey">
 <h3>ngSwitch:- [ngSwitch] *ngSwtichCase</h3>

<div [ngSwitch]="ngSwitchProp">
<div *ngSwitchCase="'blue'" [style.color]="ngSwitchProp">selected switch case is {{ngSwitchProp}}</div>
<div *ngSwitchCase="'red'" [style.color]="ngSwitchProp">selected switch case is {{ngSwitchProp}}</div>
<div *ngSwitchCase="'green'" [style.color]="ngSwitchProp">selected switch case is {{ngSwitchProp}}</div>
<div *ngSwitchDefault [style.color]="'brown'">Default switch case</div>
</div>
 </div>

<br/>

<div style="background-color:lightgrey">
 <h3>ngFor:-*ngFor let a of array; index as i</h3>
 <div *ngFor="let obj of ngForArrayProp; index as i; first as f; last as l; odd as o ; even as e">
 <div>{{obj.name}}- index - {{i}}-is First element - {{f}}-is last element {{l}} - is odd - {{o}} - is even - {{e}} </div>
 <div [style.color] = "'red'" *ngIf =e>Even</div> 
 <div [style.color] = "'red'" *ngIf =o>Odd</div>
 </div> 
 </div>

 <div style="background-color:lightgrey">
 <h3>Multiple Structural Directives</h3> 
 <div class="text-danger">div class="lesson" *ngIf="lessons" *ngFor="let lesson of lessons" -- this wont work as:-</div>
 <div [style.color] = "'red'">Can't have multiple template bindings on one element. Use only one attribute 
 named 'template' or prefixed with *. That means we need to have two div sections as shown below</div> 
 <div [style.color] = "'red'">div *ngIf="lessons" and then - div class="lesson" *ngFor="let lesson of lessons"</div>
 <div>OR</div>
 <div><code>
 "ng-container *ngIf="lessons"<br/>
 div class="lesson" *ngFor="let lesson of lessons"
     ......
  div<br/>
  ng-container"<br/></code></div>
 </div> 

 <div style="background-color:lightgrey">
 <h3>ng-container</h3>
 <div>As we can see above, the ng-container directive provides us with an element,
  that we can attach a structural directive to a section of the page, 
 without having to create an extra element just for that.
 <div>
 <div>it can also provide a placeholder for injecting a template dynamically into the page.</div>
 </div>

 <div style="background-color:lightgrey">
 <h3>Dynamic Template Creation with the ngTemplateOutlet directive</h3>
 <div>We can take the template itself and instantiate it anywhere on the page, using the ngTemplateOutlet directive:</div>
 <div>&lt; ng-container *ngTemplateOutlet="loading "&gt;&lt;/ng-container&gt;</div>
 <div>We could add as many ngTemplateOutlet tags to the page as we would like, and instantiate a number of different templates. 
 The value passed to this directive can be any expression that evaluates into a template reference</div>
 </div>

 <div class="text-danger">
we can also give &lt; ng-template or ng-content *ngIf="isShowTemplate; then myTemplate; else myElseTemplate" &gt; &lt;/ng-template or ng-content &gt;
</div>

 <ng-template *ngIf="isShowTemplate; then myTemplate; else myElseTemplate">
</ng-template>

<ng-template *ngIf="isShowTemplate; then myTemplate; else myElseTemplate">
</ng-template>

<ng-template #myTemplate>
myTemplate
</ng-template>
<ng-template #myElseTemplate>
else block myElseTemplate
</ng-template>

<div class="text-danger">
we can also give &lt; ng-template [ngIf]="isShowTemplate" [ngIfThen]="myTemplate" [ngIfElse]="myElseTemplate" &gt; &lt;/ng-template &gt;
</div>

<ng-template [ngIf]="isShowTemplate" [ngIfThen]="myTemplate" [ngIfElse]="myElseTemplate">
</ng-template>

Also, when using the then block, any content between the opening and closing tags of the bound element like inbetween the ng-template/containter tags , all inner content is ignored.
<br/>
<div [style.color]="'red'">
<h3>Passing context to template.. </h3>

<ng-template #myTemplate let-templateVar="someProp">
template context variable - {{templateVar}}
</ng-template>
<ng-container *ngTemplateOutlet="myTemplate;context:myContext">
</ng-container>


<b>&lt; ng-container *ngTemplateOutlet="myTemplate; context : myContext" &gt;
&lt; /ng-container &gt;</b></div>

<div>this template, has one input variable (it could also have several)
the input variable is called templateVar, and it's defined via a ng-template property using the prefix let- <br/>
The variable templateVar is visible inside the ng-template body, but not outside

the content of this variable is determined by the expression that its assigned to the property let-templateVar <br/>
hat expression is evaluated against a context object, passed to ngTemplateOutlet together with the template to instantiate
This context object must then have a property named someProp, for any value to be displayed inside the template
the context object is passed to ngTemplateOutlet via the context property, that can receive any expression that evaluates to an object
Given the example above, this is what would get rendered to the screen: <br/>
<b>&lt; ng-container *ngTemplateOutlet="myTemplate; context: myContext" &gt;
&lt; /ng-container &gt;</b>
<b>Also in component :- myContext = {{"{"}} "someProp":this.test {{"}"}};</b>
</div>

<div [style.color]="lightgray">
<h3>Configurable Components with Template Partial @Inputs</h3>
<div>
Let's take for example a tab container, where we would like to give the user of the component the possibility of configuring the look and feel of the tab buttons.</div>
<div>Here is how that would look like, we would start by defining the custom template for the buttons in the parent component:</div>

<div [style.text-align]="'left'" >
{{"@"}} Component({{"{"}}<br/>
  selector: \'app-root\',<br/>
  template:\`      <br/>
&lt; ng-template #customTabButtons &gt;<br/>
    &lt;div class="custom-class"&gt;<br/>
        &lt;button class="tab-button" (click)="login()"&gt;<br/>
          login text<br/>
        &lt;/button&gt;<br/>
        &lt;button class="tab-button" (click)="signUp()"&gt;<br/>
          signUpText<br/>
        &lt;/button&gt;<br/>
    &lt;/div&gt;<br/>
&lt;/ng-template&gt;<br/>
&lt;tab-container [headerTemplate]="customTabButtons"&gt;&lt;/tab-container&gt;<br/>  
\`{{"}"}})
export class AppComponent implements OnInit {{"{"}} {{"}"}}<br/>
</div>
<br/>
And then on the tab container component, we could define an input property which is also a template named headerTemplate:<br/>
<div [style.text-align]="'left'" >
@Component({{"{"}}<br/>
    selector: 'tab-container',<br/>
    template: \`    <br/>
&lt;ng-template #defaultTabButtons&gt;<br/>
    
    &lt;div class="default-tab-buttons"&gt;<br/>
        ...<br/>
    &lt;/div&gt;<br/>
    
&lt;/ng-template&gt;<br/>
&lt;ng-container <br/>
  *ngTemplateOutlet="headerTemplate ? headerTemplate: defaultTabButtons"&gt;<br/>
    
&lt;/ng-container&gt;<br/>
... rest of tab container component ...<br/>
\`})<br/>
export class TabContainerComponent {{"{"}}<br/>
    @Input()<br/>
    headerTemplate: TemplateRef&lt;any&gt;;<br/>
{{"}"}}<br/>
</div>
A couple of things are going on here, in this final combined example. Let's break this down:<br/>

there is a default template defined for the tab buttons, called defaultTabButtons<br/>
This template will be used only if the input property headerTemplate remains undefined<br/>
If the property is defined, then the custom input template passed via headerTemplate will be used to display the buttons instead<br/>
the headers template is instantiated inside a ng-container placeholder, using the ngTemplateOutlet property<br/>
the decision of which template to use (default or custom) is taken using a ternary expression, but if that logic was complex we could also delegate this to a controller method<br/>
The end result of this design is that the tab container will display a default look and feel for the tab buttons if no custom template is provided, but it will use the custom template if its available.<br/>
<br/>

    <ng-container *ngTemplateOutlet="greet"></ng-container>    <br/>
    <ng-container *ngTemplateOutlet="eng; context: myContext2"></ng-container><br/>
    <ng-container *ngTemplateOutlet="svk; context: myContext2"></ng-container><br/>
       
    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name><span [style.color]="'red'">Hello {{name}}! <br/>Here the template input named name is provided a value using $implicit in the myContect2 object</span></ng-template>
    <ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>

</div>

<h3>ElementRef and Renderer2 from @angular/core</h3>
To manipulate DOM we can use ElementRef(but its not safe to allow to manipulate dom directly.. as it is XSS attack prone)<br/>
Use Renderer2 instead.<br/>
constructor(myElement: ElementRef ,  renderer: Renderer2)
{{"{"}}
    //myElement.nativeElement.style.color = "red" //Not safe and xss attack vulnerable 
    renderer.setStyle(myElement.nativeElement,'color','blue');
{{"}"}}<br/>
///https://angular.io/api/core/Renderer2

<h3 BgColChanger>Custom Directive with ElementRef,Renderer2,@HostListener</h3>
<input type="text" BgColChanger />
<div>To create and use custom directive use @Directive with selector '[attributeName]' like below</div>
@Directive({{"{"}}<br/>
selector: '[myAttribute]'<br/>
{{"}"}})<br/>
<h4>ElementRef n Renderer2</h4>
to change the properties of the dom to which this directive is applied :- <br/>
constructor(element:ElementRef, renderer: Renderer2) {{"{"}}    <br/>    
        renderer.setStyle(element.nativeElement, "background-color","yellow");<br/>
    {{"}"}} <br/>
<h4 BgColChanger>@HostListener Decorator- @HostListener('mouseover/click/mouseout..') hover over me</h4>
it is used to listen to the events raised by the elements to which the directive is applied, from the directive class<br/>
@HostListener() function decorator makes it super easy to handle events raised in the host element inside the directive class<br/>
in directive class:- <br/>
@HostListener('mouseover',["$event"]) changeOnmouseOver(event:any){{"{" //here changeOnmouseOver is just a function. and the <br/>
event.stopPropagation();
    this.changeBgColor('red'); 
{{"}"}}<br/>
<span style="color:red">lets you subscribe to events of the DOM element that hosts an attribute directive<br/>
Of course you could reach into the DOM with standard JavaScript and attach event listeners manually. There are at least three problems with that approach:<br/>
You have to write the listeners correctly.<br/>
The code must detach the listener when the directive is destroyed to avoid memory leaks.<br/>
Talking to DOM API directly isn't a best practice.<br/>
</span>
<h4 BgColChnager>@HostBinding() Decorator -  @HostBinding(height/width/color/margin/border etc.)</h4>
@HostBinding() function decorator allows you to set the properties of the host element from the directive class.<br/>
<b>StandAlone :- <br/></b>
@HostBinding('style.color') color: string  = 'green'; //changes the color
<br/> 
@HostBinding('attr.some') some: string  = 'test Value'; // adds an attribute named "some"
<br/>
<b>On top of @HostListener to access and modify the host property on some event raised on it:-</b>
<div BgColChanger>
@HostBinding('style.border') border: string; <br/>
@HostListener('mouseover') onMouseOver() {{"{"}} this.border = '5px solid green'; {{"}"}}
<div>
<input id="t" type="text" BgColChanger [(ngModel)]="t" FormControlName="t" value="hover over me"/>

 `
})
export class directives{
ngIfProp = true;
ngIfElseProp = false;
ngIfThenElseProp = true;
ngSwitchProp = 'black';
t = "Hover over me";
ngForArrayProp = [{'name':'Bimal'},{'name':'test'},{'name':'test1'}]

isShowTemplate = true;

test = "3452342"

myContext1 = {"someProp":this.test};

myContext2 = {$implicit: 'world', localSk : this.test};

constructor(myElement: ElementRef ,  renderer: Renderer2)
{
    //myElement.nativeElement.style.color = "red" //Not safe and xss attack vulnerable 
    renderer.setStyle(myElement.nativeElement,'color','blue');
}

}