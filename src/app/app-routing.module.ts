import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgrxComponent} from './examples/ngrx/ngrx.component';
import {ObservableComponent} from './examples/observable/observable.component';
import {NgxTranslateComponent} from './examples/ngx-translate/ngx-translate.component';
import {NgTemplateComponent} from './examples/ng-template/ng-template.component';
import {NgIfComponent} from './examples/ng-if/ng-if.component';
import {NgForComponent} from "./examples/ng-for/ng-for.component";
import {NgSwitchComponent} from "./examples/ng-switch/ng-switch.component";


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
        path: 'ng-if',
        component: NgIfComponent
    },
    {
        path: 'ng-for',
        component: NgForComponent
    },
    {
        path: 'ng-switch',
        component: NgSwitchComponent
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
