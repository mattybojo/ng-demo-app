import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringComponent } from './filtering/filtering.component';
import { DemosRoutingModule } from './demos-routing.module';
import { FormsModule } from "@angular/forms";
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    FilteringComponent
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule,
    ButtonModule
  ]
})
export class DemosModule { }
