import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '@app/screens';

const Navigation = createStackNavigator();

export const GuestNavigator = () => {
  return (
    <Navigation.Navigator>
      <Navigation.Screen name={'home'} component={LoginScreen} />
    </Navigation.Navigator>
  );
};
