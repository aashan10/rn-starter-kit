import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '@app/hooks';
import {AuthNavigator} from './auth/auth-navigator';
import {UserNavigator} from './auth/user-navigator';
import {GuestNavigator} from './auth/guest-navigator';

const Navigation = createStackNavigator();

export const AppNavigator = () => {
  const {user} = useAuth();
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'auth'}>
      <Navigation.Screen name={'auth'} component={AuthNavigator} />
      {user && <Navigation.Screen name={'user'} component={UserNavigator} />}
      {!user && <Navigation.Screen name={'guest'} component={GuestNavigator} />}
    </Navigation.Navigator>
  );
};
