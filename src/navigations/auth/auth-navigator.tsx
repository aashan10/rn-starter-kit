import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ChangePasswordScreen,
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
} from '@app/screens';
import {AuthNavigatorScreenList} from '@app/types';

const Navigation = createStackNavigator<AuthNavigatorScreenList>();

export const AuthNavigator = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Navigation.Screen name={'login'} component={LoginScreen} />
      <Navigation.Screen name={'register'} component={RegisterScreen} />
      <Navigation.Screen
        name={'forgot-password'}
        component={ForgotPasswordScreen}
      />
      <Navigation.Screen
        name={'change-password'}
        component={ChangePasswordScreen}
      />
    </Navigation.Navigator>
  );
};
