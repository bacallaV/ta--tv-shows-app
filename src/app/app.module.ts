import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTvShowComponent } from './pages/create-tv-show/create-tv-show.component';
import { EditTvShowComponent } from './pages/edit-tv-show/edit-tv-show.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TvShowDetailsComponent } from './pages/tv-show-details/tv-show-details.component';
import { HomeComponent } from './pages/home/home.component';
import { TvShowFormComponent } from './components/tv-show-form/tv-show-form.component';
import { TvShowInfoComponent } from './components/tv-show-info/tv-show-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTvShowComponent,
    EditTvShowComponent,
    NotFoundComponent,
    TvShowDetailsComponent,
    HomeComponent,
    TvShowFormComponent,
    TvShowInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
