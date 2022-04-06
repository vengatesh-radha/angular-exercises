import { Route, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';

const routes = [{ path: 'user/:id', component: UserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
