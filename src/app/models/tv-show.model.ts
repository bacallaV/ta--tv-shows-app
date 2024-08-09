export interface TvShow {
  id: number;
  name: string;
  favorite: boolean;
}

export interface TvShowDto extends Omit<TvShow, 'id'> {}
