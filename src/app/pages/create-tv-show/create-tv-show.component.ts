import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TvShowDto } from '@models/tv-show.model';
import { TvShowsService } from '@services/tv-shows.service';

@Component({
  selector: 'app-create-tv-show',
  templateUrl: './create-tv-show.component.html',
  styleUrls: ['./create-tv-show.component.scss']
})
export class CreateTvShowComponent {
  public isLoading: boolean = false;

  constructor(
    private readonly tvShowsService: TvShowsService,
    private readonly router: Router,
  ) {}

  public saveTvShow(tvShow: TvShowDto): void {
    this.isLoading = true;

    this.tvShowsService.create(tvShow).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
