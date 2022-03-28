import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@app/screens';

const Navigation = createStackNavigator();

export const UserNavigator = () => {
  return (
    <Navigation.Navigator screenOptions={{headerShown: false}}>
      <Navigation.Screen name={'home'} component={HomeScreen} />
    </Navigation.Navigator>
  );
};
