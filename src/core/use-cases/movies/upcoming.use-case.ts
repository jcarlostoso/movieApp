import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {Movie} from '../../entities/movies.entity.ts';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {MovieMaper} from '../../../infrastructure/mappers/movie.maper.ts';

export const moviesUpcomingUseCase= async (fetcher:HttpAdapter):Promise<Movie[]> =>{
  try {
    const upcoming=await fetcher.get<NowPlayingResponse>('/upcoming');
      console.log({upcoming});
      return upcoming.results.map(result =>MovieMaper.fromMovieDBResultToEntity(result));
    //return upcomingMovies.results.map(MovieMaper.fromMovieDBResultToEntityt);

  }catch (error){
    console.log(error);
    throw new Error('Error al obtener las mivies por upcoming');
  }
}
