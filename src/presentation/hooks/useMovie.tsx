
import {useEffect, useState} from 'react';

import * as UseCases from '../../core/use-cases';
import {FullMovie} from '../../core/entities/movies.entity';
import {Cast} from '../../core/entities/cast.entity.ts';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter.ts';

export const useMovie = (movieId:number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast,setCast]=useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  },[movieId])

  const loadMovie =async () => {
    setIsLoading(true);

    const fullMoviePromise =  UseCases.getMoviesByIdUseCase(movieDBFetcher,movieId);
   const  casPromise =UseCases.getMovieCastUseCase(movieDBFetcher,movieId);
    const [fullMovie,cast] = await Promise.all([fullMoviePromise,casPromise]);
    setMovie(fullMovie);
    setCast(cast)
    setIsLoading(false);
    console.log({cast});

  }
  return {
    isLoading,
    movie,
    cast,
  };


};
