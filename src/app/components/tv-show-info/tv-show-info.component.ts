import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TvShowsService } from '@services/tv-shows.service';
import { TvShow } from '@models/tv-show.model';

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.scss']
})
export class TvShowInfoComponent {
  @Input()
  public tvShow!: TvShow;

  @Output()
  public onStarClicked: EventEmitter<TvShow> = new EventEmitter();

  @Output()
  public onTrashClicked: EventEmitter<TvShow> = new EventEmitter();

  constructor(private readonly tvShowsService: TvShowsService) {

  }

  public toggleFavorite(): void {
    this.onStarClicked.emit(this.tvShow);
  }

  public delete(): void {
    this.onTrashClicked.emit(this.tvShow);
  }
}
