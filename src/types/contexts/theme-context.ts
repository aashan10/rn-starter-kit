import {AppTheme} from '../theme';

export type ThemeContextState = {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
};
