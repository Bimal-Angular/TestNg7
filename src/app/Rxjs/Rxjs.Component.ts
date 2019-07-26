import {Component} from '@angular/core'
import { Observable,fromEvent, from, Subject } from 'rxjs';



@Component({
    selector:'rxjs-test',
    template:`
    <div style="background-color:lightgrey">
    <h3>Observable</h3>
    to create an Observable use <br/>
   let myObservable = Observable.create((test)=>
    test.next('some'); test.next('some1')...);
<br/>
let myobserver1 = myObservable.subscribe(datat=> console.log(data))
<h6> for multiple subscriptions</h6>
let myobserver2 = myObservable.subscribe(datat=> console.log(data))
<br/>
<h6> To cancel a subscription</h6>
myobserver1.unsubscribe();
<h6> To cancel multiple subscriptions add observers and unsubscribe</h6>
myobserver1.add(myobserver2);
myobserver1.unsubscribe
</div>  
    
    {{observedData}}<br/>
    {{observedFromEventData}}
<h3>MultiCasting</h3>  
<div>Multi-casting is the practice of broadcasting to a list of multiple subscribers in a single execution.</div>
<div>
var source = Rx.Observable.from([1, 2, 3]);<br/>
    var subject = new Rx.Subject();<br/>
    var multicasted = source.multicast(subject);<br/>

    // These are, under the hood, 'subject.subscribe({{"{"}}...{{"}"}})':<br/>
    multicasted.subscribe({{"{"}}<br/>
      next: (v) => console.log('observerA: ' + v)<br/>
      {{"}"}});<br/>
    multicasted.subscribe({{"{"}}<br/>
      next: (v) => console.log('observerB: ' + v)<br/>
      {{"}"}});<br/>
</div>


    `,
    styles:[]
})
export class RxjsComponent
{
    
    observedData: any;
    observedFromEventData:any;

    private myObservableFromEvent = fromEvent(document,'mousemove');


    private myObservable =  Observable.create((myObserver:any)=>{
       try{
            myObserver.next('Hello Bimal');
            myObserver.next('How r u Bimal');
            setInterval(()=> myObserver.next(' I am fine!!! '), 100);
            //myObserver.complete();
            //myObserver.next('This will not be sent');
       }
       catch(error)
       {
        myObserver.error(error);
       }       
    })


    constructor() {
        let currentObserver =   this.myObservable.subscribe(
            (data: any)=>{ 
             this.observedData ? this.observedData += "  " + data :  this.observedData =data},        
            (error) =>console.log(error), 
            ()=> console.log('Completed')
     );

     setTimeout(()=>currentObserver.unsubscribe(),2000);

     setTimeout(() => {
         let counter=0;
         let myObserver2FromEvent = this.myObservableFromEvent.subscribe(
            (data:any)=>
            {
                counter+=1;
                if (counter<25)
                this.observedFromEventData ? this.observedFromEventData += "  fromEvent " + data + "--" + counter :  this.observedFromEventData = "  fromEvent " +data + "--" + counter
                else
                myObserver2FromEvent.unsubscribe();
            },            
            );
            //setTimeout(()=> myObserver2FromEvent.unsubscribe(),2500);            
        }, 2000);

      let source = from([1,2,3,4]);
let mysubject = new Subject();
//let myMultiCast = source.multicast(mysubject);
      
        
 }


}