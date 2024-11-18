import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {FullMovie} from '../../entities/movies.entity.ts';
import {MovieDBMovie} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {MovieMaper} from '../../../infrastructure/mappers/movie.maper.ts';


export const getMoviesByIdUseCase = async (
  fetcher:HttpAdapter, movieId:number):Promise<FullMovie> => {

  try {

    //usar fetcher
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    //mapeo
    const fullMovie= MovieMaper.fromMovieDBToEntity(movie);

    //return de fullmovie
    return fullMovie;
  }catch (error) {
    throw new Error(`getMoviesByIdUseCase.ts: Cannot get movie with id: ${movieId} , Error: ${error}`);
  }

}
