import React from 'react';
import {MayAcceptChildren} from '@app/types';
import {Layout} from '@ui-kitten/components';
import {SafeAreaView, ScrollView} from 'react-native';

export const Body = ({children}: MayAcceptChildren) => {
  return (
    <Layout style={{flex: 1, padding: 10}}>
      <SafeAreaView>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </Layout>
  );
};
