import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  private readonly API_URL = `${environment.API_URL}/api/tvshows`;

  constructor(
    private readonly httpService: HttpClient,
  ) { }
}
