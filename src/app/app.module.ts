import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import { AppRoutingModule } from './app-routing.module';
import { AppComponent1 } from './app.component';
import { InterpolationComponent } from 'src/app/Interpolation/Interpolation.Component';
import { directives } from './Directives/directives.component';
import { MyBgColorChangerDirective } from './Directives/MyCustomDirective';
import { ComponentInteraction } from './component Interaction/ComponentInteraction.component';
import { PipesComponent } from './Pipes/Pipes.Component';
import { myFilterPipe } from './Pipes/myFilterPipe';
import { EmployeeService } from './Services/Eployee.Service';
import { ServicesComponent } from './Services/Services.Component';
import { EmployeeDetailsComponent } from './Routing/EmployeeDetails.component';
import { EmployeeOverViewComponent } from './Routing/EmployeeOverView.component';
import { EmployeeContactComponent } from './Routing/EmployeeContact.component';
import { EmployeeListComponent } from './Routing/employeeList.component';
import { RoutingComponent } from './Routing/Routing.Component';
import { TwoWayBindingComponent } from './TwoWayBinding/TowWayBinding.component';
import { AngularTemplateDrivenFormsComponent } from './AngularForms/AngularTemplateDrivenForms.Component';
import { AngularReactiveFormsComponent } from './AngularForms/AngularReactiveForms.Component';
import { xssProtection } from './XssProtection/XssProtection.component';
import { StateManagementComponent } from './StateManagement/stateManagement.component';
import { RxjsComponent } from './Rxjs/Rxjs.Component';
import { IonicWithExistingAngular } from './ionicWithExistingAngular/IonicWithExistingAngular.component'
import { ViewChildComponent } from './viewChild/ViewChild.Component';
import { ChildOfViewChild } from './viewChild/Child.Component'
import { ChangeDetection } from './ChangeDetection/changeDetection.component';
import { LifeCycleHooks } from './lifecycleHooks/lifecycleHooks.component';
import {DialogContent} from './ModalDialog/DialogContent.component'
import {PageWithModalDialog} from './ModalDialog/PageWithModalDialog.component'
import {MatDialogModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select'
import {MatOptionModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


const myRoutes: Routes = [
  //{path:'',component:AppComponent1} 
  { path: '', redirectTo: "/interpolation", pathMatch: "full" },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'directives', component: directives },
  { path: 'pipes', component: PipesComponent },
  { path: 'componentInteraction', component: ComponentInteraction },
  { path: 'services', component: ServicesComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  {
    path: 'employee/:id',
    component: EmployeeDetailsComponent,
    children: [
      //{path:'', component: null},
      { path: "overview", component: EmployeeOverViewComponent },
      { path: "contact", component: EmployeeContactComponent }
    ]
  },
  { path: 'routes', component: RoutingComponent },
  { path: 'twoWayBinding', component: TwoWayBindingComponent },
  { path: 'AngularForms/TemplateDrivenForms', component: AngularTemplateDrivenFormsComponent },
  { path: 'AngularForms/ReactiveForms', component: AngularReactiveFormsComponent },
  { path: 'xssProtection', component: xssProtection },
  { path: 'stateManagement', component: StateManagementComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'ionicWithExistingAngular', component: IonicWithExistingAngular },
  { path: 'viewChild', component: ViewChildComponent },
  { path: 'changeDetection', component: ChangeDetection },
  { path: 'lifeCycleHooks', component: LifeCycleHooks },
  { path: 'MatDialog', component: PageWithModalDialog }
  //{path:'**',component:TestPageNotFoundComponent}  // wildcard route must be declared at the last.
];

@NgModule({
  declarations: [
    AppComponent1,
    InterpolationComponent,
    directives,
    ComponentInteraction,
    PipesComponent,
    myFilterPipe,
    ServicesComponent,
    RoutingComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeOverViewComponent,
    EmployeeContactComponent,
    TwoWayBindingComponent,
    AngularTemplateDrivenFormsComponent,
    AngularReactiveFormsComponent,
    xssProtection,
    StateManagementComponent,
    RxjsComponent,
    IonicWithExistingAngular,
    MyBgColorChangerDirective,
    ViewChildComponent,
    ChildOfViewChild,
    ChangeDetection,
    LifeCycleHooks,
    DialogContent,
    PageWithModalDialog,
     
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule    
  ],
  providers: [EmployeeService], //This place is for injecting services and other...
  bootstrap: [AppComponent1],//,TestComponent] normally cusom components should be inside app.component but 
  //if we want to use the component from through out the app e.g index.html we need to bootstrap it.
  entryComponents:[DialogContent]
})
export class AppModule { }
