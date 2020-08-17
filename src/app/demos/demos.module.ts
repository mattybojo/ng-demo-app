import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringComponent } from './filtering/filtering.component';
import { DemosRoutingModule } from './demos-routing.module';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    FilteringComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule
  ]
})
export class DemosModule { }
