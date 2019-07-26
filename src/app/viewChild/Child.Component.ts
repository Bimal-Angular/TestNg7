import {Component} from '@angular/core'
import { ViewChildComponent } from './ViewChild.Component';

@Component({
    selector:'viewChild-child',
    template:`
    <p style="color:red">child components and directives can inject their parent components. But it is not working</p>
    <input type="text"  [value]="value" style="width:300px"/>    
    `    
})
export class ChildOfViewChild{

    /**
     *
     */
    // constructor(private parent: ViewChildComponent) {
    // }

    value = "1111";
    changeValueofInput()
    {
        this.value = "changed afterngViewinit of parent";
    }

}