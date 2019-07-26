import { Component, ViewChild, AfterViewInit, ElementRef, ViewChildren, OnInit, ChangeDetectorRef } from '@angular/core'
import { MyBgColorChangerDirective } from '../Directives/MyCustomDirective';
import { ChildOfViewChild } from '../viewChild/Child.Component'

@Component({
    selector: 'ViewChildTest',
    template: `
    <div [style.background-color]="'lightgrey'">
        <h3>ViewChild/ViewChildren</h3>
        get access to a child component, directive or a DOM eleme   nt from a parent component class with the ViewChild decorator.<br/>
        ViewChild returns the first element that matches a given component, directive or template reference selector.<br/>
        In cases where you’d want to access multiple children, you’d use ViewChildren instead.<br/>
        <span style="color:red">if the reference changes to a new element dynamically, ViewChild will take care of updating its reference automatically.</span><br/>
        <h4>ViewChild with custom directive</h4>
        <p>For getting value of an instance variable decalred in the directive:-</p>
        <p style="color:red">create a setter and pass the directive as parameter to it, to access its variable. Also decorate it with @ViewChild(directiveClassName)</p>
        <mark>@ViewChild(MyBgColorChangerDirective)<br/>
        set setValueFromDirective(directive: MyBgColorChangerDirective)<br/>
        {{"{"}}<br/>
            this.currentProp = directive.directiveProp;<br/>
            {{"}"}}
            </mark><br/>
        <div BgColChanger>value from directive which is available AfterViewInit = {{currentProp}}</div>
        <span style="color:red">Notice that we wait for the AfterViewInit lifecycle hook to access our variable, as this is when child components and directives become available.</span>
        <br/>
        <h4>ViewChild with template reference variable</h4>
        <input type="text" [value]="myVar" #inp style="width:400px"/>
        <h4>ViewChild with child component</h4>
        <viewChild-child></viewChild-child><br/>
        <p style="color:red">expressionchangedafterithasbeencheckederror can be fixed by moving the component creation to the ngOnInit hook. Although the documentation states the ViewChild is available only after ngAfterViewInit, it populates the children when creating a view and so they are available earlier.</p>
        <p style="color:red">Also a working solution for expressionchangedafterithasbeencheckederror that can be fixed by forcing another change detection.</p>
        <p>import  ChangeDetectorRef from '@angular/core'</p>
        <p>constructor(private changeDetector: ChangeDetectorRef)</p>
        <p>ngAfterViewInit(): void {{"{"}} this.changeDetector.detectChanges()</p>
    </div>
    `
})
export class ViewChildComponent implements AfterViewInit, OnInit {


    private currentProp;

    myVar = "curr value";


    @ViewChild('inp') ele: ElementRef
    @ViewChild(ChildOfViewChild) child: ChildOfViewChild

    constructor(private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

    @ViewChild(MyBgColorChangerDirective)
    set setValueFromDirective(directive: MyBgColorChangerDirective) {
        this.currentProp = directive.directiveProp;
        //this.ele.nativeElement.value = 'set from with templateref from component class'; //works but causes expressionchangedafterithasbeencheckederror
        //this.child.changeValueofInput(); //here it does not work..
    }

    ngAfterViewInit(): void {
        console.log(this.currentProp);
        this.ele.nativeElement.value = 'set from with templateref from component class';
        this.child.changeValueofInput();

        this.changeDetector.detectChanges(); //force changedetection.
    }

}