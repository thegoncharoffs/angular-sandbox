import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabPanelComponent} from './components/tab-panel/tab-panel.component';
import {TabPanelItemComponent} from './components/tab-panel/item/tab-panel-item.component';
import {NgrxComponent} from './examples/ngrx/ngrx.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './examples/ngrx/store/reducers/reducers';
import {EffectsModule} from '@ngrx/effects';
import {CounterEffects} from './examples/ngrx/store/effects/counter.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {ObservableComponent} from './examples/observable/observable.component';
import {NgxTranslateComponent} from './examples/ngx-translate/ngx-translate.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NgTemplateComponent } from './examples/ng-template/ng-template.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        TabPanelComponent,
        TabPanelItemComponent,
        NgrxComponent,
        ObservableComponent,
        NgxTranslateComponent,
        NgTemplateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // For NGRX
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([CounterEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        // For Localization
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
