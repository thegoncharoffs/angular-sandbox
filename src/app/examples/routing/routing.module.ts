import { NgModule } from '@angular/core';
import { RoutingComponent } from './routing.component';
import { CommonModule } from '@angular/common';
import { RoutingRoutingModule } from './routing.routing.module';
import { SomeComponent } from "./some/some.component";

@NgModule({
  declarations: [
    RoutingComponent,
    SomeComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule {
}
