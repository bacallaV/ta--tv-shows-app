import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TvShow } from '@models/tv-show.model';

import { TvShowsService } from '@services/tv-shows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tvShows: TvShow[];
  public isLoading: boolean;

  constructor(
    private readonly tvShowsService: TvShowsService,
    private readonly router: Router,
  ) {
    this.isLoading = true;
    this.tvShows = [];
  }

  ngOnInit(): void {
    this.fetchTvShows();
  }

  public fetchTvShows(): void {
    this.tvShowsService.getAll().subscribe({
      next: (tvShows) => {
        this.tvShows.push(...tvShows);
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {
        this.isLoading = false;
      },
    })
  }

  public toggleFavorite(tvShow: TvShow): void {
    this.tvShowsService.toggleFavorite(tvShow).subscribe({
      next: (updatedTvShow) => {
        const index = this.tvShows.findIndex(tvs => tvs.id === tvShow.id);
        this.tvShows[index] = updatedTvShow;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  public deleteTvShow(tvShow: TvShow): void {
    this.tvShowsService.delete(tvShow.id).subscribe({
      next: () => {
        this.tvShows = this.tvShows.filter(tvs => tvs.id !== tvShow.id);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  public navigateToCreate(): void {
    this.router.navigateByUrl('/create');
  }
}
