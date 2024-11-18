import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movies.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber =1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRate, setTopRate] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatePromise = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upcomingPromise = await UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const [
      nowPlayingMovies,
      popularMovies,
      topRateMovies,
      upcomingMovies,
    ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatePromise,
      upcomingPromise]);
    // console.log(nowPlayingMovies[0]);
    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setUpcoming(upcomingMovies);
    setTopRate(topRateMovies);
    setIsLoading(false);
  };
  return {
    isLoading,
    nowPlaying,
    popular,
    topRate,
    upcoming,

    //Methods
    popularNextPage: async ()=>{
    popularPageNumber++;
    const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher,{
      page: popularPageNumber,
    });
    setPopular(prev=>[...prev, ...popularMovies]);
    }
  };
};
