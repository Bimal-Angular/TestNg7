import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'myFilterPipe',
    pure:false //
})
export class myFilterPipe implements PipeTransform
{
    transform(value: any[], ...args: any[]) {

        let filterby = args[0];
        if (!value || !filterby)
        return value;
        return value.filter(a=> a.indexOf(filterby) != -1)
    }
        
    constructor() {
      
        
    }
}
