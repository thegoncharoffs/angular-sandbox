import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabPanelModule} from './components/tab-panel/tab-panel.module';
import {TabPanelItemModule} from './components/tab-panel/item/tab-panel-item.module';
import {ExamplesPageModule} from './components/examples-page/examples-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabPanelModule,
    TabPanelItemModule,
    ExamplesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
