import {NgModule} from '@angular/core';
import {RoutingComponent} from './routing.component';
import {CommonModule} from '@angular/common';
import {RoutingRoutingModule} from './routing.routing.module';

@NgModule({
  declarations: [
    RoutingComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule {
}
