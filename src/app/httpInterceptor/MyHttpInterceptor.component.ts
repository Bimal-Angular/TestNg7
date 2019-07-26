import { Component } from '@angular/core'


@Component({
    selector: 'http-interceptor',
    template: `
    <div style="background-color:lightgrey">
    <h4>HttpInterceptor</h4>
    To implement an interceptor, you’ll want to create a class that’s injectable and that implements HttpInterceptor.<br/>
    The class should define an <mark>intercept</method> method to correctly implement HttpInterceptor.<br/>
    The intercept method takes two arguments, <mark>req and next</mark>, and returns an observable of type HttpEvent.<br/>
    req is the request object itself and is of type HttpRequest.<br/>
    next is the http handler, of type HttpHandler. The handler has a handle method that returns our desired HttpEvent observable.<br/>


    </div>
    `
})
export class MyHttpInterceptor {

}

