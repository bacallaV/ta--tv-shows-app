import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { TvShow, TvShowDto } from '@models/tv-show.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private readonly API_URL = `${environment.API_URL}/api/tvshows`;

  constructor(
    private readonly httpService: HttpClient,
  ) { }

  public getAll(): Observable<TvShow[]> {
    return this.httpService.get<TvShow[]>(this.API_URL);
  }

  public getOneById(id: number): Observable<TvShow> {
    return this.httpService.get<TvShow>(`${this.API_URL}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpService.delete<void>(`${this.API_URL}/${id}`);
  }

  public create(tvShow: TvShowDto): Observable<TvShow> {
    return this.httpService.post<TvShow>(this.API_URL, {
      ...tvShow,
    });
  }

  public update(id: number, tvShow: TvShowDto): Observable<TvShow> {
    return this.httpService.put<TvShow>(`${this.API_URL}/${id}`, {
      ...tvShow,
    });
  }

  public toggleFavorite(tvShow: TvShow): Observable<TvShow> {
    return this.update(tvShow.id, {
      name: tvShow.name,
      favorite: !tvShow.favorite,
    })
  }
}
