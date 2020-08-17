import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'demos/filtering',
  pathMatch: 'full'
}, {
  path: 'demos',
  loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
