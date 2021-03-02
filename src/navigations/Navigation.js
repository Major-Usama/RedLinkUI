import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Sidemenu from '../screens/Sidemenu';
import Drawers from './Drawers';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Sidemenu" component={Sidemenu} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Navigation;