
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import WallpaperScreen from './components/WallpaperScreen';
import FullScreen from './components/FullScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

 return( 
  <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen  name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen  name='WallpaperScreen' component={WallpaperScreen}  options={({ route }) => ({ title: "Results for "+ '"' + route.params.query + '"', headerShown:false })  }  />
        <Stack.Screen  name='FullScreen' component={FullScreen}  options={{headerShown:false} }  />

      </Stack.Navigator>
  </NavigationContainer>
 )


  
}
