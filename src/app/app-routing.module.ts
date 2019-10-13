import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgrxComponent} from "./modules/ngrx/ngrx.component";


const routes: Routes = [
  {
    path: 'routing',
    loadChildren: () => import(`./modules/routing/routing.module`).then(m => m.RoutingModule)
  },
  {
    path: 'ngrx',
    component: NgrxComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
