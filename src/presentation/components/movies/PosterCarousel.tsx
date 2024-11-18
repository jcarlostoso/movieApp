import { View} from 'react-native';
import {Movie} from '../../../core/entities/movies.entity';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster.tsx';
interface Props {
  movies: Movie[];
  height?:number;
}
export const PosterCarousel = ({height,movies}:Props) => {
  return (
    <View style={{height:height}}>
        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
          {
            movies.map(movie => (
              <MoviePoster
              key={movie.id}
              movie={movie}
              />))
          }
        </ScrollView>
    </View>
  );
};
