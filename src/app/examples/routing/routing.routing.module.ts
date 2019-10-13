import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutingComponent} from './routing.component';


const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {
}
