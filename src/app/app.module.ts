import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CustomDirective } from './components/custom.directive';
import { ParentComponent } from './output/parent/parent.component';
import { ChildComponent } from './output/child/child.component';
import { ParentnewComponent } from './input/parentnew/parentnew.component';
import { ChildnewComponent } from './input/childnew/childnew.component';
import { EmployeeComponent } from './components/viewchild/employee/employee.component';
import { SalaryComponent } from './components/viewchild/salary/salary.component';
import { RForm1Component } from './r-form1/r-form1.component';
import { RForm2Component } from './r-form2/r-form2.component';
import { ParentprComponent } from './pracoutput/parentpr/parentpr.component';
import { ChildprComponent } from './pracoutput/childpr/childpr.component';
import { Parentpr2Component } from './inputpractice/parentpr2/parentpr2.component';
import { Childpr2Component } from './inputpractice/childpr2/childpr2.component';
import { PipesComponent } from './pipes/pipes.component';
import { Localstorage2Component } from './localstorage2/localstorage2.component';

// console.log("normal loading");






@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectivesComponent,
    CustomDirective,
    ParentComponent,
    ChildComponent,
    ParentnewComponent,
    ChildnewComponent,
    EmployeeComponent,
    SalaryComponent,
    RForm1Component,
    RForm2Component,
    ParentprComponent,
    ChildprComponent,
    Parentpr2Component,
    Childpr2Component,
    PipesComponent,
    Localstorage2Component,

  
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
