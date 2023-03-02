import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { CompComponent } from './comp/comp.component';

console.log("lazy loading in angular");



@NgModule({
  declarations: [
    CompComponent
  ],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
