import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgrxComponent} from './examples/ngrx/ngrx.component';
import {ObservableComponent} from './examples/observable/observable.component';
import {NgxTranslateComponent} from './examples/ngx-translate/ngx-translate.component';
import {NgTemplateComponent} from './examples/ng-template/ng-template.component';
import {NgIfComponent} from './examples/ng-if/ng-if.component';
import {NgForComponent} from "./examples/ng-for/ng-for.component";
import {NgSwitchComponent} from "./examples/ng-switch/ng-switch.component";
import {FormControlComponent} from './examples/form-control/form-control.component';
import {FormGroupComponent} from './examples/form-group/form-group.component';
import {FormArrayComponent} from './examples/form-array/form-array.component';
import {CombineLatestComponent} from './examples/combine-latest/combine-latest.component';
import {ConcatComponent} from './examples/concat/concat.component';
import {TakeComponent} from './examples/take/take.component';
import {IntervalComponent} from './examples/interval/interval.component';
import {ConcatAllComponent} from './examples/concat-all/concat-all.component';
import {WithLatestFromComponent} from './examples/with-latest-from/with-latest-from.component';
import {QueryListComponent} from './examples/query-list/query-list.component';
import {MocksComponent} from './examples/mocks/mocks.component';
import { PromiseComponent } from './examples/promise/promise.component';


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
    {
        path: 'form-control',
        component: FormControlComponent
    },
    {
        path: 'form-group',
        component: FormGroupComponent
    },
    {
        path: 'form-array',
        component: FormArrayComponent
    },
    {
        path: 'combine-latest',
        component: CombineLatestComponent
    },
    {
        path: 'concat',
        component: ConcatComponent
    },
    {
        path: 'take',
        component: TakeComponent
    },
    {
        path: 'interval',
        component: IntervalComponent
    },
    {
        path: 'concat-all',
        component: ConcatAllComponent
    },
    {
        path: 'with-latest-from',
        component: WithLatestFromComponent
    },
    {
        path: 'query-list',
        component: QueryListComponent
    },
    {
        path: 'mocks',
        component: MocksComponent
    },
    {
        path: 'promise',
        component: PromiseComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
