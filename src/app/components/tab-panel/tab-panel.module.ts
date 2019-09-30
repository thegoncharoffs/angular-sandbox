import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabPanelComponent} from './tab-panel.component';
import {TabPanelItemModule} from './item/tab-panel-item.module';

@NgModule({
  imports: [
    CommonModule,
    TabPanelItemModule
  ],
  declarations: [TabPanelComponent],
  exports: [TabPanelComponent]
})
export class TabPanelModule {
}
