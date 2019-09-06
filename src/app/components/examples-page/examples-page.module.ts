import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamplesPageComponent} from './examples-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ExamplesPageComponent],
  exports: [ExamplesPageComponent]
})
export class ExamplesPageModule {
}
