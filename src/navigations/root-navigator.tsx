import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Layout} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {AppNavigator} from './app-navigator';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Layout style={styles.layout}>
        <AppNavigator />
      </Layout>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    height: '100%',
  },
});
