import {View,Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation.tsx';
import {useMovie} from '../../hooks/useMovie.tsx';
import {MovieHeader} from '../../components/movie/MovieHeader.tsx';
import {MovieDetails} from '../../components/movie/MovieDetails.tsx';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader.tsx';
interface Props extends  StackScreenProps<RootStackParams,'Details'>{};

export const DetailsScreen=({route}:Props)=>{
  const {movieId}=route.params;
  // const {}=useRoute().params;
  console.log({movieId});

  const {isLoading,movie,cast = []}=useMovie(movieId);
  console.log({movie});

  if (isLoading) {
    return <FullScreenLoader/>;
  }

  return(
    <ScrollView>

    <MovieHeader
      movie={movie!}
    />
    {/*Detalles */}
      <MovieDetails movie={movie!} cast={cast}/>
    </ScrollView>
  );
};
