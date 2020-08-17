import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilteringComponent } from './filtering/filtering.component';

const routes: Routes = [{
  path: 'filtering',
  component: FilteringComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DemosRoutingModule { }
