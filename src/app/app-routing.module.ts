import { Route, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { ViewChildComponent } from './view-child.component';

const routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'viewChild', component: ViewChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
