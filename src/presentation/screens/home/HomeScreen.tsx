import {View, Text} from 'react-native';
import {useMovies} from '../../hooks/useMovies.tsx';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel.tsx';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel.tsx';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader.tsx';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRate, upcoming,popularNextPage} = useMovies();
  if (isLoading) {
    return <FullScreenLoader/>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/*principal*/}
        <PosterCarousel movies={nowPlaying} />
        {/*populares*/}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}/>
        {/*top*/}
        <HorizontalCarousel movies={topRate} title="Mejor Calificadas" />
        {/*upcoming*/}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />

      </View>
    </ScrollView>
  );
};
