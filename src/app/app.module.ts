import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExamplesPageComponent} from './components/examples-page/examples-page.component';
import {TabPanelComponent} from './components/tab-panel/tab-panel.component';
import {TabPanelItemComponent} from './components/tab-panel/item/tab-panel-item.component';
import {NgrxComponent} from './modules/ngrx/ngrx.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './modules/ngrx/store/reducers/reducers';

@NgModule({
  declarations: [
    AppComponent,
    ExamplesPageComponent,
    TabPanelComponent,
    TabPanelItemComponent,
    NgrxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
