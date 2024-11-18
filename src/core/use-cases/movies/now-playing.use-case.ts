import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import type {Movie} from '../../entities/movies.entity.ts';
import {MovieMaper} from '../../../infrastructure/mappers/movie.maper.ts';

export const moviesNowPlayingUseCase=async (fetcher:HttpAdapter):Promise<Movie[]> =>{
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    console.log({nowPlaying});
  return nowPlaying.results.map(result =>MovieMaper.fromMovieDBResultToEntity(result));
  //return nowPlaying.results.map(MovieMaper.fromMovieDBResultToEntityt);
  }catch(error){
    console.log(error);
    throw new Error(`Error al optener movies - nowPlaying`);
  }
}
