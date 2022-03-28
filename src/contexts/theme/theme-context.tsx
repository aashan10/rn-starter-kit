import React, {createContext, useState} from 'react';
import {AcceptsChildren, AppTheme, ThemeContextState} from '@app/types';
import {ThemeMap} from '@app/themes';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export const ThemeContext = createContext<ThemeContextState>({
  theme: ThemeMap.Dark,
  setTheme: () => {},
});

export const ThemeProvider = ({children}: AcceptsChildren) => {
  const [theme, setTheme] = useState<AppTheme>(ThemeMap.Dark);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}>
      <ApplicationProvider {...eva} theme={theme}>{children}</ApplicationProvider>
    </ThemeContext.Provider>
  );
};
