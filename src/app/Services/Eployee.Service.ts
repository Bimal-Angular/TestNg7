import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpClientJsonpModule, HttpParams} from '@angular/common/http'

import { IEmployee } from './IEmployee';
import {Observable, throwError} from 'rxjs'
import {catchError, retry, tap} from 'rxjs/operators'
import { User } from '../user';

//import {RequestOptions, Request, Headers } from '@angular/common/http'

// <p>The service should be injected in app module in the providers array. if it is done any where else e.g. AppComponent it is accessing to Appcomponent and its child component.</p>
// <p>Service dependency is mentioed in the component constructor</p>
// <p><mark>Injectable() decorator tells angular that this service might itself has injected dependencies</mark></p>
// <p><mark>Currently our employee service does not have any dependecy in the constructor so Injectable() decorator is not necessary, but it might in future, so its better to add injectable</mark></p>
@Injectable()
export class EmployeeService
{
    private jsonFileUrl = "assets/Employees.json"
    private invalidjsonFileUrl = "NotPresent.json"
    constructor(private http: HttpClient, private httpJsonP : HttpClientJsonpModule)
    {}

    GetEmployees(){
        return [{"name":"Bimal"},{"name":"Lalit"},{"name":"Lalat"}];
    }

    GetEmployeesFromJsonFile() :Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.jsonFileUrl)
        .pipe(
            retry(1),
            catchError((error :HttpErrorResponse) =>{ //catchError(this.myErrorHandler)
                console.log(error? "Error Occurred--" + error.message : 'Error is null');
                return throwError(error);
                })
            );        
    }

    GetEmployeesFromJsonFileWithError() :Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.invalidjsonFileUrl)
        .pipe(
            retry(1),
            catchError((error :HttpErrorResponse) =>{
                console.log(error? "Error Occurred--" + error.message : 'Error is null');
                return throwError(error);
                })
            );        
    }

    myErrorHandler(error:HttpErrorResponse)
    {
    throwError(error);
    }

    postUrl = 'http://localhost:3000/enroll'

    postdata(user:User)
    {
        return this.http.post<any>(this.postUrl, user);
    }


    CallCardsApi(): Observable<any>{   
        //http://test-cardservices.danskenet.net/KKCF/CardDetails     
        let url = "/1604723155/daba/en";
        //let requestOptions = new RequestOptions({ headers:null, withCredentials: true });
         return this.http.get<any>(url,{withCredentials:true, responseType:'json'}).pipe(  
            tap((result) => console.log('result-->',result)),         
                catchError((error :HttpErrorResponse) =>{                    
                console.log('Error while calling cardsApi :- ' + error.message) ;
                return throwError(error);
            })
            
        );
    }

    CallCardsApiWithJsonP(){

        // let params = new HttpParams().append('format', 'json');
         let baseurl = "http://test-cardservices.danskenet.net/KKCF/CardDetails/GetCardListExtract/1604723155/daba/en";
        // let url = `${baseurl}?${params.toString()}`;
        // return this.http.jsonp(baseurl,'callback1').subscribe(res => { debugger; }, error => { debugger;});

        return  this.http.jsonp('https://api.stackexchange.com/2.2/info?site=stackoverflow', 'callback')
        .subscribe(res => { console.log(res)});
            
        // let url = "https://api.stackexchange.com/2.2/info?site=stackoverflow";
        // //let requestOptions = new RequestOptions({ headers:null, withCredentials: true });
        // return this.http.jsonp<any>(url,'mycallback').pipe(
        //         catchError((error :HttpErrorResponse) =>{
        //             debugger;
        //         console.log('Error while calling cardsApi :- ' + error.message) ;
        //         return throwError(error);
        //     })
        //);


        }


}