import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {Movie} from '../../entities/movies.entity.ts';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {MovieMaper} from '../../../infrastructure/mappers/movie.maper.ts';

export const moviesTopRatedUseCase= async (fetcher:HttpAdapter):Promise<Movie[]> =>{
  try {
      const topRate=await fetcher.get<NowPlayingResponse>('/top_rated');
      console.log({topRate});
      return topRate.results.map(result => MovieMaper.fromMovieDBResultToEntity(result));
    //return topRate.results.map(MovieMaper.fromMovieDBResultToEntityt);

  }catch(error){
    console.log(error);
    throw new Error('Error al obtener las movies por top_rated');
  }
}
