import {Component} from '@angular/core'


@Component({
    selector:'lifeCycleHooks',
    template:`
    <div style="background-color:lightgrey">
<h4>LifeCycle Hooks</h4>
<h5>Angular gives us 8 hooks to allow us to tap into the lifecycle of our components and trigger actions at specific points in the lifecycle.</h5>
<ul style="width:80%;margin:auto;text-align:left">
<li>
<b>ngOnChanges:</b> Called every time a data-bound input property changes.It’s called a first time before the <mark>ngOnInit</mark> hook.<br/>
The hook receives a <mark>SimpleChanges</mark> object that contains the previous and current values for the data-bound inputs properties.<br/>
This hook gets called often, so it’s a good idea to limit the amount of processing it does.</li>
<li><b>ngOnInit:</b> Called once upon initialization of the component.</li>
<li><b>ngDoCheck:</b> Use this hook instead of ngOnChanges for changes that Angular doesn’t detect.<br/>
 It gets called at every change detection cycle, so keeping what it does to a minimum is important for performance.</li>
 <li><b>ngAfterContentInit:</b> Called after content is projected in the component.</li>
 <li><b>ngAfterContentChecked:</b> Called after the projected content is checked.</li>
 <li><b>ngAfterViewInit:</b> Called after a component’s view or child view is initialized.</li>
 <li><b>ngAfterViewChecked:</b> Called after a component’s view or child view is checked.</li>
 <li><b>ngOnDestroy:</b> Called once when the component is destroyed and a good hook to use to cleanup and unsubscribe from observables.</li>
 </ul>
<h4>ngOnInit</h4>
If you have a lot of processing to do when the component gets created, it’s good practice to do it in the ngOnInit hook rather than in the constructor:<br/>
<h4>ngOnChanges</h4>
Let’s say we have a component used like this:
<div style="background-color:black;color:yellow;margin:auto;width:50%">
my-todo [title]="title" [content]="content" /my-todo <br/>
Now say that we want to do something when the title property changes:<br/>
Child Component: my-todo.component.ts<br/>
import  {{"{"}} Component, Input, SimpleChanges, OnChanges {{"}"}} from '@angular/core';<br/>

export class MyTodoComponent implements OnChanges {{"{"}}<br/>
  @Input() title: string;
  @Input() content: string;<br/>

   ngOnChanges(changes: SimpleChanges){{"{"}}<br/>
    for (let property in changes) {{"{"}}<br/>
      if (property === 'title') {{"{"}}<br/>
        console.log('Previous:', changes[property].previousValue);<br/>
        console.log('Current:', changes[property].currentValue);<br/>
</div>
    </div>
    `
})
export class LifeCycleHooks
{

}