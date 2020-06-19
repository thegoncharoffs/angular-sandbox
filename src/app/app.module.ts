import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { TabPanelItemComponent } from './components/tab-panel/item/tab-panel-item.component';
import { NgrxComponent } from './examples/ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './examples/ngrx/store/reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './examples/ngrx/store/effects/counter.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ObservableComponent } from './examples/observable/observable.component';
import { NgxTranslateComponent } from './examples/ngx-translate/ngx-translate.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgTemplateComponent } from './examples/ng-template/ng-template.component';
import { NgIfComponent } from './examples/ng-if/ng-if.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './examples/form-control/form-control.component';
import { NgForComponent } from './examples/ng-for/ng-for.component';
import { NgForMockComponent } from './examples/ng-for/ng-for-mock/ng-for-mock.component';
import { NgSwitchComponent } from './examples/ng-switch/ng-switch.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { FormGroupComponent } from './examples/form-group/form-group.component';
import { FormArrayComponent } from './examples/form-array/form-array.component';
import { CombineLatestComponent } from './examples/combine-latest/combine-latest.component';
import { ConcatComponent } from './examples/concat/concat.component';
import { TakeComponent } from './examples/take/take.component';
import { IntervalComponent } from './examples/interval/interval.component';
import { ConcatAllComponent } from './examples/concat-all/concat-all.component';
import { WithLatestFromComponent } from './examples/with-latest-from/with-latest-from.component';
import { QueryListComponent } from './examples/query-list/query-list.component';
import { QueryListItemComponent } from './examples/query-list/item/query-list-item.component';
import { MocksComponent } from './examples/mocks/mocks.component';
import { BooksService } from './services/books.service';
import { PromiseComponent } from './examples/promise/promise.component';
import { BrowserValidatorComponent } from './examples/browser-validator/browser-validator.component';
import { AdminComponent } from './examples/admin/admin.component';
import { SubjectComponent } from './examples/subject/subject.component';
import { MulticastObservableComponent } from './examples/multicast-observable/multicast-observable.component';
import { BehaviorSubjectComponent } from './examples/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './examples/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './examples/async-subject/async-subject.component';
import { ParentComponent } from './examples/parent/parent.component';
import { Child2Component } from './examples/parent/child2/child2.component';
import { Child1Component } from './examples/parent/child1/child1.component';
import { SwitchMapComponent } from './examples/switch-map/switch-map.component';
import { MergeMapComponent } from './examples/merge-map/merge-map.component';
import { ShareComponent } from './examples/share/share.component';
import { DynamicComponent } from './examples/dynamic/dynamic.component';
import { AlertComponent } from './examples/dynamic/alert/alert.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PWAComponent } from './examples/pwa/pwa.component';
import { PromptUpdateService } from "./examples/pwa/services/prompt-update.service";
import { CheckForUpdateService } from "./examples/pwa/services/check-for-updates.service";
import { LogUpdateService } from "./examples/pwa/services/log-update.service";
import { ScrollComponent } from './examples/scroll/scroll.component';
import { SignupComponent } from './examples/authentification/components/signup/signup.component';
import { SigninComponent } from './examples/authentification/components/signin/signin.component';
import { AuthentificationComponent } from './examples/authentification/authentification.component';
import { AuthService } from './examples/authentification/services/auth.service';
import { authInterceptorProviders } from './examples/authentification/interceptors/auth.interceptor';
import { UploadService } from './examples/authentification/services/upload.service';
import { UploadComponent } from './examples/authentification/components/upload/upload.component';

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
		NgIfComponent,
		ButtonComponent,
		FormControlComponent,
		NgForComponent,
		NgForMockComponent,
		NgSwitchComponent,
		TextFieldComponent,
		FormGroupComponent,
		FormArrayComponent,
		CombineLatestComponent,
		ConcatComponent,
		TakeComponent,
		IntervalComponent,
		ConcatAllComponent,
		WithLatestFromComponent,
		QueryListComponent,
		QueryListItemComponent,
		MocksComponent,
		PromiseComponent,
		BrowserValidatorComponent,
		AdminComponent,
		SubjectComponent,
		MulticastObservableComponent,
		BehaviorSubjectComponent,
		ReplaySubjectComponent,
		AsyncSubjectComponent,
		ParentComponent,
		Child2Component,
		Child1Component,
		SwitchMapComponent,
		MergeMapComponent,
		ShareComponent,
		DynamicComponent,
		AlertComponent,
		PWAComponent,
		ScrollComponent,
		SignupComponent,
		SigninComponent,
		AuthentificationComponent,
		UploadComponent,
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		ReactiveFormsModule,
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
		}),
		// For PWA
		// ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		BooksService,
		AuthService,
		UploadService,
		authInterceptorProviders,
		// PromptUpdateService,
		// CheckForUpdateService,
		// LogUpdateService
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
