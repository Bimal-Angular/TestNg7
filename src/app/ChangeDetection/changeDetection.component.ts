import {Component} from '@angular/core'

@Component({
    selector: 'changeDetection',
    template:`
    <div style="background-color:lightgrey">
<h4>Change Detection</h4>
During change detection Angular performs checks for each component which consists of the following operations performed in the specified order:<br/>
<ul>
<li>update bound properties for all child components/directives</li>
<li>call ngOnInit, OnChanges and ngDoCheck lifecycle hooks on all child components/directives</li>
<li>update DOM for the current component</li>
<li>run change detection for a child component</li>
<li>call ngAfterViewInit lifecycle hook for all child components/directives</li>
</ul>
<a class="btn btn-primary" href="https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4">Know more about expressionchangedafterithasbeencheckederror</a><br/>
<a class="btn btn-primary mt-1" href="https://hackernoon.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f?source=post_page---------------------------">Everything-you-need-to-know-about-change-detection-in-angular</a>
<p>forcing another change detection.</p>
import ChangeDetectorRef from '@angular/core'<br/>
constructor(private changeDetector: ChangeDetectorRef)<br/>
ngAfterViewInit(): void {{"{"}} this.changeDetector.detectChanges()<br/>
</div>
    `
})
export class ChangeDetection{

}