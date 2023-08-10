export interface IMovie {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
  isBookmarked: boolean;
}
export interface MoviesCollectionsProps {
  movies: IMovie[];
  loading?: boolean;
}
export interface MovieInfoProps {
  movie: IMovie | null;
  loading?: boolean;
}
