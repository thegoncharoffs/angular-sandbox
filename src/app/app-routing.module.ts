import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgrxComponent} from "./examples/ngrx/ngrx.component";
import {ObservableComponent} from "./examples/observable/observable.component";
import {NgxTranslateComponent} from './examples/ngx-translate/ngx-translate.component';
import {NgTemplateComponent} from './examples/ng-template/ng-template.component';


const routes: Routes = [
  {
    path: 'routing',
    loadChildren: () => import(`./examples/routing/routing.module`).then(m => m.RoutingModule)
  },
  {
    path: 'ngrx',
    component: NgrxComponent
  },
  {
    path: 'ng-template',
    component: NgTemplateComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'translate',
    component: NgxTranslateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
