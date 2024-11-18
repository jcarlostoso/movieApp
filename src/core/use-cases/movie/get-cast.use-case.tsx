import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {MovieDBCastResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper.ts';
import {Cast} from '../../entities/cast.entity.ts';

export const getMovieCastUseCase=async (fetcher:HttpAdapter, movieId:number):Promise<Cast[]> => {
  try {
    //usar fetcher
    const {cast} = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);

    //mapeo
    const actors= cast.map((actor)=>CastMapper.fromMovieDBCastToEntity(actor));

    //return de actor
    return actors;
  }catch(error){
    throw new Error(`getMovieCastUseCase.ts: Cannot get movie with id: ${movieId} , Error: ${error}`);
  }
}
