import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import HomeScreen from './src/HomeScreen';

import DetailScreen from './src/DetailScreen';

export default function App() {
  return (
    <NavigationContainer>

      <AppStack.Navigator>
        <AppStack.Screen name="Inicio" component={HomeScreen}/>
        
        <AppStack.Screen name="Resultado" component={DetailScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
