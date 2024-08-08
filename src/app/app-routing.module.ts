import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CreateTvShowComponent,
  EditTvShowComponent,
  HomeComponent,
  NotFoundComponent,
  TvShowDetailsComponent
} from '@pages/index';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    component: TvShowDetailsComponent,
  },
  {
    path: 'create',
    component: CreateTvShowComponent,
  },
  {
    path: 'edit/:id',
    component: EditTvShowComponent,
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
