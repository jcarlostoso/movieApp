import {FlatList, Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movies.entity.ts';
import {Formatter} from '../../../config/helpers/formatter.ts';
import {Cast} from '../../../core/entities/cast.entity';
import {CastActor} from '../cast/CastActor.tsx';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>{Formatter.currency(movie.budget)}</Text>
      </View>
      {/* Casting  */}
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};
