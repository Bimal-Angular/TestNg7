import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
template:
`
<h1>Component Interaction</h1>
<div style="background-color:lightgrey">
<h3>Parent component to Child component e.g. AppComponent to ComponentsInteraction component:-  [parentpropname]</h3>
<div>Declare a public property in parent component e.g. 'name' . in the parent template to the child selector bind the property. e.g. test-Component [parentData] = "name">
<p>Create same i.e. the name used in binding within[] property in child component using @Input() parentData</p>
<p [style.color] = "'red'">{{parentData}} - from AppComponent</p>
<p [style.color] = "'red'">{{MyProp.objName + " passing object from parent to child" | uppercase}} -  using property name other than the one declared in parent comp i.e. @Input('parentData') MyProp </p>
<br/>
<b [style.color] = "'blue'">all the @input properties can be put in the inputs:[] of the component decorator like styles,templates etc.</b>
</div>
</div>
<br/>

<div style="background-color:lightgrey">
<h3>EventEmitter :- Child component to Parent component e.g. ComponentsInteraction component to AppComponent:-  </h3>
<div>Create a new object of EventEmitter in child component using @Output() e.g. @Output() public childEvent= new EventEmitter()>
<p>Create a button and click event in child template and in that emit the child event e.g. this.childEvent.emit('Message from child to parent');</p>
<p> in the parent component create a prop to hold the value from child e.g messageFromChild</p>
<p>in the parent templage in the child selector assing the value using $event to a property in the childEvent e.g. (childEvent)="messageFromChild=$event</p>

<button (click)="callClick()">Send prop to Parent</button>
<button (click)="callClickwithObj()">Send  object to Parent</button>
</div>
</div>
<br/>

`,
selector:'test-componentInteraction',
styles:[], //if this is not provided the html is not rendered.
inputs:[] // all the @inputs can be put here too.
})
export class ComponentInteraction
{
  @Input() parentData: any

  @Input('parentDataObj') MyProp: any  = []
  //another way wich uses alias MyPorp with the name passed to input

  

  @Output() public childEvent= new EventEmitter();

  @Output() public childEventWithObj = new EventEmitter();

 public childToParentObj = {
'Name': 'Child',
'Text': 'This object is passed/emitted from child to parent using EventEmitter()'
  };

  callClick(){
this.childEvent.emit('Message from child to parent');
  }

  callClickwithObj(){
    this.childEventWithObj.emit(this.childToParentObj);
  }

}