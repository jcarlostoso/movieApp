import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen.tsx';
import {DetailsScreen} from '../screens/details/DetailsScreen.tsx';


export  type RootStackParams = {
  Home:undefined;
  Details:{movieId:number};
}

const Stack=createStackNavigator<RootStackParams>();

export const Navigation=()=> {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
