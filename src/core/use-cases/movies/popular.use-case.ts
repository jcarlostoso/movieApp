import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {Movie} from '../../entities/movies.entity.ts';
import {MovieDBMovieResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {MovieMaper} from '../../../infrastructure/mappers/movie.maper.ts';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase= async (fetcher:HttpAdapter,options?:Options):Promise<Movie[]> =>{
  try {
    const popular =await fetcher.get<MovieDBMovieResponse>('/popular',{
      params:{
        page: options?.page ?? 1
      }
    });
    console.log({popular});
    return popular.results.map(result => MovieMaper.fromMovieDBResultToEntity(result));
    //return popular.results.map(MovieMaper.fromMovieDBResultToEntityt);

  }catch(error){
    console.error(error);
    throw new Error('Error al obtener movies por Popular');
  }
}
