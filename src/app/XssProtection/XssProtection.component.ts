import {Component} from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector:'xssProtection',
    template:`
    <div style="background-color:lightgrey">
    <h1>Showing unEscaped html using DomSanitizer</h1>
    <p>by default angular escapes html i.e. <b>test</b> is show as is with html tag .. and not as bold. {{ProductDescription}} -- {{DescriptionProp}}</p>
<p>to get around this if you wish the html tags to be interpreted, use DomSanitizer service from @angular/platform-browser which is used internally by angular to get rid of the html tags or escape it. (e.g. & < >)</p>
<p>import DomSanitizer service and SafeHtml object from @angular/platform-browser</p>
<p>use this.DompSanitizer.bypassSecurityTrustHtml(this.prop) which returns a SafeHTML object to show unescaped html tags</p>
<p>{{"{"}}DescriptionPropEscaped{{" }"}} gives warning that SafeValue must use [property]=binding:  i.e. peroperty binding... so use [innerHtml]="propvalue"</p>
<p>{{DescriptionPropEscaped}}</p>
<p [innerHtml]="DescriptionPropEscaped"></p>
</div>
<input type="text" [(ngModel)]="myProp" />
{{myProp}} {{myp}}
    `,
    styles:[]
})
export class xssProtection
{
/**
 *
 */
constructor(private sanitizer: DomSanitizer) {   

}

myPropChange(){

}

myProp:string;

myp:string = this.myProp + "test";

ProductDescription=  "<b>this tag is not parsed by default</b>";

get DescriptionProp():string
{
return this.ProductDescription;
}

get DescriptionPropEscaped():SafeHtml
{
return this.sanitizer.bypassSecurityTrustHtml(this.ProductDescription);
}

}