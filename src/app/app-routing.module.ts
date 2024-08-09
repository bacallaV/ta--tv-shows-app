import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CreateTvShowComponent,
  HomeComponent,
  NotFoundComponent,
} from '@pages/index';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreateTvShowComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
