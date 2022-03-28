import React from 'react';
import {RootNavigation} from '@app/navigations';
import {AuthProvider, ThemeProvider} from '@app/contexts';
const Application = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Application;
