import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './presentation/navigation/Navigation.tsx';


export const App = () => {

  return (
    <NavigationContainer>
  <Navigation/>
    </NavigationContainer>
  );
};
