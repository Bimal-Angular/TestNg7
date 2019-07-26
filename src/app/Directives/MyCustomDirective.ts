import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";
import { NgModel, NgControl } from '@angular/forms';

@Directive({
    selector: '[BgColChanger]',
    providers: [NgModel]
})
export class MyBgColorChangerDirective {
    directiveProp = 'test in directive';

    constructor(private element: ElementRef, private renderer: Renderer2, private model: NgModel) {

        this.changeBgColor('yellow');
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    }

    changeBgColor(color: string) {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
    }

    @HostListener('mouseover', ["$event"]) mouseOver(event: any) {        
        event.stopPropagation();
        this.changeBgColor('red');

    }

    @HostListener('mouseout') mouseOut() {
        this.changeBgColor('yellow');
    }

    @HostBinding('style.border') border: string;
    @HostListener('mouseover', ["$event"]) onMouseOver(event: any) {        
        event.stopPropagation();
        this.border = '5px solid green';
        this.model.control.setValue("set through directive")
    };

    @HostBinding('style.color') color: string = 'green';

    @HostBinding('attr.some') some: string = 'test Value';
}