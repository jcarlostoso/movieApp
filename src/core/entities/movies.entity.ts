export interface Movie {
  id: number;
  title: string;
  description: string;
  release_date: Date;
  rating: number;
  poster: string;
  backdrop: string;

}

export interface FullMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
