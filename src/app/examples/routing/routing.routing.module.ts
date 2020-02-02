import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutingComponent} from './routing.component';
import { SomeComponent } from "./some/some.component";


const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      {
        path: 'some',
        component: SomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {
}
